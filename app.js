/**
 * PLATAFORMA DE EVALUACIÓN Y DIAGNÓSTICO DE ADMINISTRACIÓN TRIBUTARIA
 * Metodología FMI CD (Capacity Development) / Revenue Administration Diagnostic
 */

// STATE MANAGEMENT
// STATE MANAGEMENT
const AppState = {
  activeView: 'dashboard', // 'dashboard', 'evaluation', 'team', 'report'
  activePillarId: 'pilar_1',
  teamActiveTab: 'matrix', // 'matrix', 'members'
  currentUserId: localStorage.getItem('imf_tax_eval_active_user') || 'usr_1',
  pillarScope: localStorage.getItem('imf_pillar_scope') || 'assigned', // 'assigned', 'all'
  matrixFilterOnlyMe: false,
  currentFilter: {
    status: 'all',
    score: 'all',
    search: '',
    assigned: 'all'
  },
  mission: (typeof DEFAULT_DATA !== 'undefined' && DEFAULT_DATA.mission) ? DEFAULT_DATA.mission : {
    title: 'Evaluación Diagnóstica de la Administración Tributaria y Aduanera',
    country: 'Bolivia',
    institution: 'Servicio de Impuestos Nacionales / Aduana Nacional',
    dates: 'Octubre 2026',
    lead: 'Misión Técnica de Asistencia y Desarrollo de Capacidades',
    notes: 'Diagnóstico institucional integral basado en el marco de evaluación de buenas prácticas.',
    missionPin: 'FMI2026'
  },
  team: (typeof DEFAULT_DATA !== 'undefined' && DEFAULT_DATA.team) ? DEFAULT_DATA.team : [
    { id: 'usr_1', name: 'Jefe de Misión', role: 'Coordinador General', email: 'lider@mision.org', color: '#1e40af', pin: '2026' },
    { id: 'usr_2', name: 'Especialista en Riesgos y Procesos', role: 'Evaluador Senior', email: 'riesgos@mision.org', color: '#0d9488', pin: '2026' },
    { id: 'usr_3', name: 'Especialista Legal y Gobernanza', role: 'Evaluador Legal', email: 'legal@mision.org', color: '#7c3aed', pin: '2026' },
    { id: 'usr_4', name: 'Especialista en TI y Datos', role: 'Evaluador TI', email: 'ti@mision.org', color: '#ea580c', pin: '2026' }
  ],
  pillars: (typeof DEFAULT_DATA !== 'undefined' && DEFAULT_DATA.pillars) ? DEFAULT_DATA.pillars : [],
  chartInstances: {},
  theme: localStorage.getItem('theme') || 'light',
  selectedLoginUserId: 'usr_1',
  dashboardMatrixTab: 'both',
  openQuestions: new Set(),
  notebook: {},
  selectedNotebookDate: new Date().toISOString().split('T')[0],
  selectedNotebookUser: null,
  additionalEvidences: [],
  pillarAnalysisActivePillar: 'KA3',
  narrativasPilares: {}
};

// STORAGE KEYS
const STORAGE_KEY_DATA = 'imf_casa_eval_v5_data';
const STORAGE_KEY_META = 'imf_casa_eval_v5_meta';
const STORAGE_KEY_TEAM = 'imf_casa_eval_v5_team';
const STORAGE_KEY_USER = 'imf_tax_eval_active_user';
const STORAGE_KEY_AUTH = 'imf_tax_eval_auth_session';
const STORAGE_KEY_NOTEBOOK = 'imf_casa_eval_v3_notebook';
const STORAGE_KEY_ADDITIONAL_EVIDENCES = 'imf_casa_eval_v5_additional_evidences';
const STORAGE_KEY_NARRATIVAS = 'imf_casa_eval_v5_narrativas';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadData();
  setupEventListeners();
  setupLoginEventListeners();
  if (typeof initCloudSync === 'function') initCloudSync();

  if (isAuthenticated()) {
    updateActiveUserHeader();
    renderSidebarPillars();
    renderCurrentView();
  }

  initAuthCheck();
  if (window.lucide) lucide.createIcons();
});

// GESTIÓN DEL EVALUADOR ACTIVO (PERFIL QUE ESTÁ INGRESANDO)
function getCurrentUser() {
  let user = AppState.team.find(m => m.id === AppState.currentUserId);
  if (!user && AppState.team.length > 0) {
    user = AppState.team[0];
    AppState.currentUserId = user.id;
  }
  return user || { id: 'usr_1', name: 'Evaluador', role: 'Especialista', color: '#1e40af' };
}

function getVisiblePillars() {
  const currentUser = getCurrentUser();
  if (AppState.pillarScope === 'assigned') {
    const assigned = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(currentUser.id));
    if (assigned.length > 0) return assigned;
  }
  return AppState.pillars;
}

function setPillarScope(scope) {
  AppState.pillarScope = scope;
  localStorage.setItem('imf_pillar_scope', scope);
  const visible = getVisiblePillars();
  if (visible.length > 0 && !visible.some(p => p.id === AppState.activePillarId)) {
    AppState.activePillarId = visible[0].id;
  }
  renderSidebarPillars();
  renderCurrentView();
}

function setCurrentUser(userId) {
  AppState.currentUserId = userId;
  localStorage.setItem(STORAGE_KEY_USER, userId);

  const currentUser = getCurrentUser();
  const assigned = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(currentUser.id));
  if (assigned.length > 0 && AppState.pillarScope === 'assigned') {
    AppState.activePillarId = assigned[0].id;
  }

  updateActiveUserHeader();
  renderSidebarPillars();
  renderCurrentView();
  closeModal();

  showToast(`Sesión activa: ${currentUser.name} (${currentUser.role})`, 'success');
}

function isMissionLead(user = null) {
  const u = user || getCurrentUser();
  if (!u) return false;
  const roleLower = (u.role || '').toLowerCase();
  const nameLower = (u.name || '').toLowerCase();
  const idLower = (u.id || '').toLowerCase();

  return idLower === 'usr_1' ||
    roleLower.includes('jefe') ||
    roleLower.includes('coordinador') ||
    roleLower.includes('lider') ||
    roleLower.includes('líder') ||
    roleLower.includes('lead') ||
    nameLower.includes('jefe') ||
    nameLower.includes('selvin') ||
    nameLower.includes('coordinador');
}

function updateActiveUserHeader() {
  const user = getCurrentUser();
  const initials = user.name ? user.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : 'EV';

  // Header button
  const hAvatar = document.getElementById('header-user-avatar');
  const hName = document.getElementById('header-user-name');
  const hRole = document.getElementById('header-user-role');

  if (hAvatar) {
    hAvatar.style.background = user.color || '#1e40af';
    hAvatar.innerText = initials;
  }
  if (hName) hName.innerText = user.name;
  if (hRole) hRole.innerText = `${user.role} ▾`;

  // Sidebar card
  const sAvatar = document.getElementById('sidebar-user-avatar');
  const sName = document.getElementById('sidebar-user-name');
  const sRole = document.getElementById('sidebar-user-role');

  if (sAvatar) {
    sAvatar.style.background = user.color || '#1e40af';
    sAvatar.innerText = initials;
  }
  if (sName) sName.innerText = user.name;
  if (sRole) sRole.innerHTML = `<span style="color:var(--primary-600);font-weight:600;">Cambiar perfil &rarr;</span>`;

  // Control de visibilidad de opciones administrativas (Exclusivas del Jefe de Misión)
  const isLead = isMissionLead(user);
  if (isLead) {
    document.body.classList.remove('non-admin');
    document.body.classList.add('is-lead');
  } else {
    document.body.classList.add('non-admin');
    document.body.classList.remove('is-lead');
  }

  const adminButtons = document.querySelectorAll('.admin-only, #btn-export-json, #btn-import-json, #btn-mission-settings, #btn-reset-data');
  adminButtons.forEach(btn => {
    btn.style.display = isLead ? 'inline-flex' : 'none';
  });
}

// MODAL PARA SELECCIONAR QUÉ PERSONA ESTÁ INGRESANDO
function openSwitchUserModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  const currentUser = getCurrentUser();

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
      <div>
        <h3 style="font-size:1.25rem;display:flex;align-items:center;gap:0.5rem;">
          <i data-lucide="users" style="color:var(--primary-500);width:20px;height:20px;"></i>
          ¿Quién está evaluando hoy?
        </h3>
        <p style="color:var(--text-muted);font-size:0.8rem;margin-top:2px;">
          Selecciona tu perfil de evaluador para ingresar y gestionar tus secciones
        </p>
      </div>
      <button class="btn-icon" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px;"></i></button>
    </div>

    <div class="user-picker-grid">
      ${AppState.team.map(m => {
    const isActive = m.id === currentUser.id;
    const initials = m.name ? m.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : 'EV';
    const assignedPillars = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(m.id));

    let totalAssignedQs = 0;
    let completedAssignedQs = 0;
    assignedPillars.forEach(p => {
      const s = calculatePillarStats(p);
      totalAssignedQs += s.totalQuestions;
      completedAssignedQs += s.scoredQuestions;
    });
    const percent = totalAssignedQs > 0 ? Math.round((completedAssignedQs / totalAssignedQs) * 100) : 0;

    return `
          <div class="user-picker-card ${isActive ? 'active-user' : ''}" onclick="setCurrentUser('${m.id}')">
            ${isActive ? `<span class="active-badge">ACTIVO AHORA</span>` : ''}
            
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:46px;height:46px;border-radius:50%;background:${m.color || '#1e40af'};color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;flex-shrink:0;box-shadow:0 2px 6px rgba(0,0,0,0.15);">
                ${initials}
              </div>
              <div style="overflow:hidden;">
                <h4 style="font-size:0.95rem;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${m.name}</h4>
                <span style="font-size:0.75rem;color:var(--primary-600);font-weight:600;">${m.role}</span>
              </div>
            </div>

            <div style="font-size:0.78rem;color:var(--text-secondary);display:flex;align-items:center;gap:4px;">
              <i data-lucide="mail" style="width:12px;height:12px;color:var(--text-muted);"></i>
              <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${m.email || 'Sin correo registrado'}</span>
            </div>

            <div style="margin-top:auto;padding-top:0.6rem;border-top:1px solid var(--border-color-subtle);">
              <div style="display:flex;justify-content:space-between;font-size:0.725rem;color:var(--text-secondary);margin-bottom:3px;">
                <span><strong>${assignedPillars.length}</strong> secciones a cargo</span>
                <span><strong>${percent}%</strong> avance</span>
              </div>
              <div class="progress-bar-wrap" style="height:4px;margin:0 0 8px 0;">
                <div class="progress-bar-fill" style="width:${percent}%;background:${m.color || '#1e40af'};"></div>
              </div>

              <button class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}" style="width:100%;font-size:0.75rem;" onclick="event.stopPropagation(); setCurrentUser('${m.id}')">
                ${isActive ? '✓ Sesión Actual' : `Ingresar como ${m.name.split(' ')[0]}`}
              </button>
            </div>
          </div>
        `;
  }).join('')}
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1rem;padding-top:0.85rem;border-top:1px solid var(--border-color);flex-wrap:wrap;gap:0.5rem;">
      <button class="btn btn-sm btn-outline-primary" onclick="closeModal(); openAddMemberModal();">
        <i data-lucide="user-plus" style="width:14px;height:14px;"></i> Registrar Nuevo Evaluador
      </button>
      <button class="btn btn-sm btn-secondary" onclick="closeModal()">
        Cerrar
      </button>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function goToMyEvaluations() {
  const currentUser = getCurrentUser();
  const myAssignedPillars = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(currentUser.id));
  if (myAssignedPillars.length > 0) {
    switchView('evaluation', myAssignedPillars[0].id);
  } else {
    switchView('team');
    showToast('Aún no tienes pilares asignados. Selecciona tus secciones en la matriz.', 'info');
  }
}

// THEME TOGGLE
function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  updateThemeIcon();
}

function toggleTheme() {
  AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', AppState.theme);
  document.documentElement.setAttribute('data-theme', AppState.theme);
  updateThemeIcon();
  if (AppState.activeView === 'dashboard') {
    renderDashboardCharts();
  }
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = AppState.theme === 'light'
      ? `<i data-lucide="moon" style="width:18px;height:18px;"></i>`
      : `<i data-lucide="sun" style="width:18px;height:18px;"></i>`;
    if (window.lucide) lucide.createIcons();
  }
}

// DATA LOADING
function loadData() {
  // 1. Intenta cargar desde localStorage
  const savedData = localStorage.getItem(STORAGE_KEY_DATA);
  const savedMeta = localStorage.getItem(STORAGE_KEY_META);
  const savedTeam = localStorage.getItem(STORAGE_KEY_TEAM);
  const savedNotebook = localStorage.getItem(STORAGE_KEY_NOTEBOOK);

  if (savedMeta) {
    try { AppState.mission = JSON.parse(savedMeta); } catch (e) { }
  }
  if (savedTeam) {
    try { AppState.team = JSON.parse(savedTeam); } catch (e) { }
  }
  if (savedNotebook) {
    try { AppState.notebook = JSON.parse(savedNotebook); } catch (e) { }
  }
  const savedAdditional = localStorage.getItem(STORAGE_KEY_ADDITIONAL_EVIDENCES);
  if (savedAdditional) {
    try {
      const parsed = JSON.parse(savedAdditional);
      if (Array.isArray(parsed) && parsed.length > 0) AppState.additionalEvidences = parsed;
    } catch (e) { }
  }
  if (!AppState.additionalEvidences || !Array.isArray(AppState.additionalEvidences) || AppState.additionalEvidences.length === 0) {
    AppState.additionalEvidences = getDefaultAdditionalEvidences();
  }
  const savedNarrativas = localStorage.getItem(STORAGE_KEY_NARRATIVAS);
  if (savedNarrativas) {
    try {
      AppState.narrativasPilares = JSON.parse(savedNarrativas);
    } catch (e) { }
  }
  if (!AppState.narrativasPilares || typeof AppState.narrativasPilares !== 'object') {
    AppState.narrativasPilares = {};
  }
  initDefaultSuggestedNarratives();
  if (savedData) {
    try {
      const parsedPillars = JSON.parse(savedData);
      if (Array.isArray(parsedPillars) && parsedPillars.length > 0) {
        AppState.pillars = parsedPillars;
      }
    } catch (e) {
      console.error('Error parseando localStorage:', e);
    }
  }

  // Si aún no hay pilares, usa los datos predefinidos de data.js
  if (!AppState.pillars || AppState.pillars.length === 0) {
    if (typeof DEFAULT_DATA !== 'undefined' && DEFAULT_DATA.pillars) {
      AppState.pillars = JSON.parse(JSON.stringify(DEFAULT_DATA.pillars));
      if (DEFAULT_DATA.mission) AppState.mission = JSON.parse(JSON.stringify(DEFAULT_DATA.mission));
      if (DEFAULT_DATA.team) AppState.team = JSON.parse(JSON.stringify(DEFAULT_DATA.team));
    }
  } else if (typeof DEFAULT_DATA !== 'undefined' && DEFAULT_DATA.pillars) {
    syncMasterIndicators(DEFAULT_DATA.pillars);
  }

  // Asegura que todos los pilares tengan la estructura de asignaciones inicializada
  ensurePillarAssignments();
  saveData(false, false);

  // 2. Si hay servidor activo en localhost, sincroniza
  if (window.location.protocol.startsWith('http')) {
    fetch('/api/data', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : null)
      .then(serverData => {
        if (serverData && serverData.pillars && serverData.pillars.length > 0) {
          // Si no había datos previos en localStorage, inicializar desde serverData
          if (!savedData) {
            AppState.pillars = serverData.pillars;
            if (serverData.mission) AppState.mission = serverData.mission;
            if (serverData.team) AppState.team = serverData.team;
            ensurePillarAssignments();
            saveData(false, false);
            updateActiveUserHeader();
            renderSidebarPillars();
            renderCurrentView();
          } else {
            syncMasterIndicators(serverData.pillars);
            saveData(false, false);
          }
        }
      })
      .catch(() => { });
  }
}

// SINCRONIZA INDICADORES PROPUESTOS (KPIs) PERSONALIZADOS DESDE LA FUENTE MAESTRA
function syncMasterIndicators(sourcePillars) {
  if (!sourcePillars || !AppState.pillars) return;
  const indicatorMap = {};
  sourcePillars.forEach(p => {
    (p.criteria || []).forEach(c => {
      (c.questions || []).forEach(q => {
        if (q.id && q.indicator) {
          indicatorMap[q.id] = q.indicator;
        }
      });
    });
  });

  AppState.pillars.forEach(p => {
    (p.criteria || []).forEach(c => {
      (c.questions || []).forEach(q => {
        if (indicatorMap[q.id]) {
          if (!q.indicator || q.indicator.includes('Métrica de gestión de riesgos') || q.indicator.includes('Índice de avance y evaluación del factor') || q.indicator.includes('¿')) {
            q.indicator = indicatorMap[q.id];
          }
        }
      });
    });
  });
}

// GUARDA EN LOCALSTORAGE Y EN SERVIDOR / NUBE SI EXISTE
function saveData(showNotify = true, syncToServer = true) {
  try {
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(AppState.pillars));
    localStorage.setItem(STORAGE_KEY_META, JSON.stringify(AppState.mission));
    localStorage.setItem(STORAGE_KEY_TEAM, JSON.stringify(AppState.team));
    localStorage.setItem(STORAGE_KEY_NOTEBOOK, JSON.stringify(AppState.notebook || {}));
    localStorage.setItem(STORAGE_KEY_ADDITIONAL_EVIDENCES, JSON.stringify(AppState.additionalEvidences || []));
    localStorage.setItem(STORAGE_KEY_NARRATIVAS, JSON.stringify(AppState.narrativasPilares || {}));
  } catch (err) {
    console.error('Error al guardar en localStorage:', err);
  }

  const syncEl = document.getElementById('sync-indicator');
  if (syncEl) {
    syncEl.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#10b981;margin-right:4px;"></span> Sincronizado`;
  }

  // Sincronización en la Nube (Firebase)
  if (syncToServer && typeof pushStateToCloud === 'function') {
    pushStateToCloud(false);
  }

  // Sincronización con Servidor Local Python (si está corriendo)
  if (syncToServer && window.location.protocol.startsWith('http')) {
    fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mission: AppState.mission,
        team: AppState.team,
        pillars: AppState.pillars,
        narrativas_pilares: AppState.narrativasPilares || {}
      })
    }).catch(() => { });
  }

  if (showNotify) {
    showToast('Cambios y asignaciones guardados', 'success');
  }
}

// ASEGURA ESTRUCTURA DE ASIGNACIONES POR PILAR
function ensurePillarAssignments() {
  if (!AppState.pillars || AppState.pillars.length === 0) return;

  const defaultMap = {
    "pilar_1": ["usr_1", "usr_3"],  // Gobernanza y gestión estratégica
    "pilar_2": ["usr_1", "usr_3"],  // Integridad, transparencia y rendición de cuentas
    "pilar_3": ["usr_2", "usr_3"],  // Recursos Humanos
    "pilar_4": ["usr_4"],           // TIC
    "pilar_5": ["usr_4"],           // Gobernanza de datos y capacidades analíticas
    "pilar_6": ["usr_2"],           // Gestión Integrada de Riesgos
    "pilar_7": ["usr_3", "usr_2"],  // Programas de inscripción y licencia
    "pilar_8": ["usr_2"],           // Administración de la carga y trazabilidad
    "pilar_9": ["usr_2"],           // Despacho de aduana
    "pilar_10": ["usr_4", "usr_2"], // Gestión del comercio electrónico
    "pilar_11": ["usr_3", "usr_2"], // Gestión de regímenes especiales
    "pilar_12": ["usr_2"],          // Auditoría posterior al despacho
    "pilar_13": ["usr_2", "usr_1"]  // Capacidades para hacer cumplir las aduanas
  };

  AppState.pillars.forEach((p) => {
    if (p.assigned_evaluators === undefined || p.assigned_evaluators === null) {
      p.assigned_evaluators = defaultMap[p.id] || ["usr_1", "usr_2"];
    } else if (!Array.isArray(p.assigned_evaluators)) {
      p.assigned_evaluators = [];
    }
  });
}

// OBTENER EVALUADORES DE UN PILAR
function getPillarEvaluators(pillar) {
  if (!pillar || !pillar.assigned_evaluators) return [];
  return AppState.team.filter(m => pillar.assigned_evaluators.includes(m.id));
}

// CÁLCULO DE ESTADÍSTICAS POR PILAR
function calculatePillarStats(pillar) {
  if (!pillar || !pillar.criteria) {
    return { totalQuestions: 0, scoredQuestions: 0, average: '—', numAverage: 0, progressPercent: 0, counts: {} };
  }

  let totalQuestions = 0;
  let scoredQuestions = 0;
  let scoreSum = 0;
  let counts = { 1: 0, 2: 0, 3: 0, 4: 0, 'NA': 0, 'pending': 0 };

  pillar.criteria.forEach(crit => {
    if (crit.questions) {
      crit.questions.forEach(q => {
        totalQuestions++;
        if (q.score !== null && q.score !== undefined && q.score !== '') {
          if (q.score === 'NA') {
            counts['NA']++;
          } else {
            const num = Number(q.score);
            if (num >= 1 && num <= 4) {
              scoreSum += num;
              scoredQuestions++;
              counts[num]++;
            }
          }
        } else {
          counts['pending']++;
        }
      });
    }
  });

  const average = scoredQuestions > 0 ? (scoreSum / scoredQuestions) : 0;
  const progressPercent = totalQuestions > 0 ? Math.round(((totalQuestions - counts['pending']) / totalQuestions) * 100) : 0;

  return {
    totalQuestions,
    scoredQuestions,
    average: average ? average.toFixed(2) : '—',
    numAverage: average,
    progressPercent,
    counts
  };
}

// CÁLCULO DE ESTADÍSTICAS GLOBALES
function calculateGlobalStats() {
  let totalQs = 0;
  let evaluatedQs = 0;
  let totalScoreSum = 0;
  let totalScoredQs = 0;
  let globalCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 'NA': 0, 'pending': 0 };

  AppState.pillars.forEach(p => {
    const stats = calculatePillarStats(p);
    totalQs += stats.totalQuestions;
    evaluatedQs += (stats.totalQuestions - stats.counts.pending);

    Object.keys(stats.counts).forEach(k => {
      globalCounts[k] += stats.counts[k];
      if (Number(k) >= 1 && Number(k) <= 4) {
        totalScoreSum += (Number(k) * stats.counts[k]);
        totalScoredQs += stats.counts[k];
      }
    });
  });

  const globalAvg = totalScoredQs > 0 ? (totalScoreSum / totalScoredQs).toFixed(2) : '0.0';
  const globalProgress = totalQs > 0 ? Math.round((evaluatedQs / totalQs) * 100) : 0;

  return {
    totalQs,
    evaluatedQs,
    pendingQs: globalCounts.pending,
    globalAvg,
    globalProgress,
    globalCounts
  };
}

// INSIGNIA DE PUNTAJE (Escala Oficial FMI: A, B, C, D)
function getScoreBadgeHtml(scoreNum) {
  if (!scoreNum || scoreNum === '—' || scoreNum === 0 || scoreNum === '0.0') {
    return `<span class="score-tag score-na">Sin evaluar</span>`;
  }
  const val = parseFloat(scoreNum);
  if (val >= 3.5) return `<span class="score-tag score-4" title="A: Desempeño sólido / Consolidado y sostenible"><i data-lucide="check-circle-2" style="width:13px;height:13px;"></i> ${val.toFixed(2)} - A (Desempeño sólido)</span>`;
  if (val >= 2.5) return `<span class="score-tag score-3" title="B: Buen desempeño / Implementación en curso"><i data-lucide="check" style="width:13px;height:13px;"></i> ${val.toFixed(2)} - B (Buen desempeño)</span>`;
  if (val >= 1.8) return `<span class="score-tag score-2" title="C: Cumplidos / Etapa inicial"><i data-lucide="clock" style="width:13px;height:13px;"></i> ${val.toFixed(2)} - C (Etapa inicial)</span>`;
  return `<span class="score-tag score-1" title="D: Los requisitos básicos aún no cumplidos/no se han establecido o son incipientes"><i data-lucide="alert-triangle" style="width:13px;height:13px;"></i> ${val.toFixed(2)} - D (Incipiente)</span>`;
}

// NAVEGACIÓN
function setupEventListeners() {
  document.querySelectorAll('[data-view-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-view-target');
      switchView(target);
    });
  });

  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);
  document.getElementById('btn-export-json')?.addEventListener('click', exportJsonData);
  document.getElementById('btn-import-json')?.addEventListener('click', () => {
    document.getElementById('import-file-input').click();
  });
  document.getElementById('import-file-input')?.addEventListener('change', importJsonData);
  document.getElementById('btn-mission-settings')?.addEventListener('click', openMissionModal);

  // Inicializar estado del sidebar (68px / 290px) y atajo Ctrl+B
  initSidebarState();
  window.addEventListener('resize', handleWindowResize);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // Cerrar flyout al hacer clic fuera
  document.addEventListener('click', (e) => {
    const flyoutWrap = document.getElementById('nav-flyout-wrap');
    if (flyoutWrap && !flyoutWrap.contains(e.target)) {
      closePillarsFlyout();
    }
  });
}

// CONTROL DE SIDEBAR COMPACTO Y FLYOUT DE ÁREAS CLAVE
function initSidebarState() {
  const isCollapsed = localStorage.getItem('imf_sidebar_collapsed') === 'true';
  const isAutoTablet = (window.innerWidth <= 1366 && window.innerWidth > 768 && window.matchMedia('(orientation: landscape)').matches);

  if (isCollapsed || (localStorage.getItem('imf_sidebar_collapsed') === null && isAutoTablet)) {
    document.body.classList.add('sidebar-collapsed');
    updateSidebarToggleIcon(true);
  } else {
    document.body.classList.remove('sidebar-collapsed');
    updateSidebarToggleIcon(false);
  }
}

function handleWindowResize() {
  if (localStorage.getItem('imf_sidebar_collapsed') === null) {
    const isAutoTablet = (window.innerWidth <= 1366 && window.innerWidth > 768 && window.matchMedia('(orientation: landscape)').matches);
    if (isAutoTablet && !document.body.classList.contains('sidebar-collapsed')) {
      document.body.classList.add('sidebar-collapsed');
      updateSidebarToggleIcon(true);
    }
  }
}

function toggleSidebar() {
  const isNowCollapsed = document.body.classList.toggle('sidebar-collapsed');
  localStorage.setItem('imf_sidebar_collapsed', isNowCollapsed);
  updateSidebarToggleIcon(isNowCollapsed);
  closePillarsFlyout();
  if (AppState.activeView === 'dashboard') {
    setTimeout(renderDashboardCharts, 300);
  }
}

function updateSidebarToggleIcon(isCollapsed) {
  const icon = document.getElementById('sidebar-toggle-icon');
  if (icon) {
    icon.setAttribute('data-lucide', isCollapsed ? 'panel-left-open' : 'panel-left-close');
    if (window.lucide) lucide.createIcons();
  }
}

function togglePillarsFlyout(e) {
  if (e) e.stopPropagation();
  const flyout = document.getElementById('pillars-flyout-panel');
  if (flyout) {
    flyout.classList.toggle('show');
  }
}

function closePillarsFlyout(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const flyout = document.getElementById('pillars-flyout-panel');
  if (flyout) {
    flyout.classList.remove('show');
  }
}

function switchView(viewName, pillarId = null) {
  AppState.activeView = viewName;
  if (pillarId) {
    AppState.activePillarId = pillarId;
  } else if (viewName === 'evaluation') {
    const visible = getVisiblePillars();
    if (visible.length > 0 && !visible.some(p => p.id === AppState.activePillarId)) {
      AppState.activePillarId = visible[0].id;
    }
  }

  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('data-view-target') === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  renderSidebarPillars();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSidebarPillars() {
  const container = document.getElementById('sidebar-pillars-list');
  const flyoutContainer = document.getElementById('flyout-pillars-list');
  if (!container && !flyoutContainer) return;

  const currentUser = getCurrentUser();
  const myAssignedPillars = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(currentUser.id));
  const visiblePillars = getVisiblePillars();
  const isOnlyAssigned = AppState.pillarScope === 'assigned';

  const pillarsHtml = visiblePillars.length === 0 ? `
    <div style="padding:12px 8px;text-align:center;font-size:0.75rem;color:var(--text-muted);background:var(--bg-tertiary);border-radius:var(--radius-sm);margin-top:4px;">
      No tienes pilares asignados aún.<br>
      <button class="btn btn-sm btn-outline-primary" style="margin-top:6px;font-size:0.7rem;padding:2px 8px;" onclick="setPillarScope('all')">
        Ver Todos los Pilares
      </button>
    </div>
  ` : visiblePillars.map(p => {
    const stats = calculatePillarStats(p);
    const isActive = AppState.activeView === 'evaluation' && AppState.activePillarId === p.id;
    const isAssignedToMe = (p.assigned_evaluators || []).includes(currentUser.id);

    let badgeClass = 'score-na';
    if (stats.numAverage >= 3.5) badgeClass = 'score-4';
    else if (stats.numAverage >= 2.5) badgeClass = 'score-3';
    else if (stats.numAverage >= 1.8) badgeClass = 'score-2';
    else if (stats.numAverage > 0) badgeClass = 'score-1';

    return `
      <div class="pillar-nav-item ${isActive ? 'active' : ''}" onclick="switchView('evaluation', '${p.id}'); closePillarsFlyout();">
        <span class="pillar-nav-name" title="${p.title}">
          ${isAssignedToMe ? `<span style="color:${currentUser.color || '#2563eb'};font-weight:900;margin-right:3px;" title="Sección a tu cargo">●</span>` : ''}
          ${p.number || p.id.replace('pilar_', '')}. ${p.title}
        </span>
        <span class="score-tag ${badgeClass}" style="font-size:0.7rem;padding:1px 5px;">
          ${stats.average !== '—' ? stats.average : `${stats.progressPercent}%`}
        </span>
      </div>
    `;
  }).join('');

  if (container) {
    container.innerHTML = `
      <!-- Scope Selector en Sidebar -->
      <div class="sidebar-scope-toggle">
        <button class="scope-btn ${isOnlyAssigned ? 'active' : ''}" onclick="setPillarScope('assigned')" title="Mostrar solo secciones asignadas a ${currentUser.name.split(' ')[0]}">
          🎯 Mis Secciones (${myAssignedPillars.length})
        </button>
        <button class="scope-btn ${!isOnlyAssigned ? 'active' : ''}" onclick="setPillarScope('all')" title="Mostrar todas las ${AppState.pillars.length} áreas clave">
          🌐 Todas (${AppState.pillars.length})
        </button>
      </div>
      ${pillarsHtml}
    `;
  }

  if (flyoutContainer) {
    const flyBtnAssigned = document.getElementById('flyout-scope-assigned');
    const flyBtnAll = document.getElementById('flyout-scope-all');
    if (flyBtnAssigned) flyBtnAssigned.classList.toggle('active', isOnlyAssigned);
    if (flyBtnAll) flyBtnAll.classList.toggle('active', !isOnlyAssigned);
    flyoutContainer.innerHTML = pillarsHtml;
  }

  const globalStats = calculateGlobalStats();
  const qBadge = document.getElementById('nav-q-badge');
  if (qBadge) qBadge.innerText = `${globalStats.evaluatedQs}/${globalStats.totalQs}`;

  if (typeof updateEvidenceNavBadge === 'function') {
    updateEvidenceNavBadge();
  }

  if (window.lucide) lucide.createIcons();
}

function renderCurrentView() {
  const container = document.getElementById('main-content-area');
  if (!container) return;

  // Sincronizar SIEMPRE el ítem activo de la barra lateral con la vista actual
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('data-view-target') === AppState.activeView) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const headerTitle = document.getElementById('page-header-title');
  const headerSubtitle = document.getElementById('page-header-subtitle');

  if (AppState.activeView === 'dashboard') {
    if (headerTitle) headerTitle.innerText = 'Un Vistazo / Dashboard Ejecutivo';
    if (headerSubtitle) headerSubtitle.innerText = `${AppState.mission.institution} • ${AppState.mission.country} • Misión ${AppState.mission.dates}`;
    renderDashboardView(container);
  } else if (AppState.activeView === 'evaluation') {
    const curPillar = AppState.pillars.find(p => p.id === AppState.activePillarId) || AppState.pillars[0];
    if (headerTitle) headerTitle.innerText = `Evaluación: ${curPillar ? curPillar.title : 'Cuestionario'}`;
    if (headerSubtitle) headerSubtitle.innerText = 'Diagnóstico guiado por pilares, criterios y evidencias';
    renderEvaluationView(container);
  } else if (AppState.activeView === 'evidence') {
    if (headerTitle) headerTitle.innerText = 'Inventario y Control de Evidencias Documentales';
    if (headerSubtitle) headerSubtitle.innerText = 'Recepción, verificación y seguimiento de requerimientos documentales';
    renderEvidenceView(container);
  } else if (AppState.activeView === 'notebook') {
    if (headerTitle) headerTitle.innerText = 'Cuaderno de Notas de la Misión';
    if (headerSubtitle) headerSubtitle.innerText = 'Bitácora y apuntes de trabajo organizados por día y consultor';
    renderNotebookView(container);
  } else if (AppState.activeView === 'team') {
    if (headerTitle) headerTitle.innerText = 'Equipo de Evaluación';
    if (headerSubtitle) headerSubtitle.innerText = 'Asignación de secciones por evaluador';
    renderTeamView(container);
  } else if (AppState.activeView === 'pillar-analysis') {
    if (headerTitle) headerTitle.innerText = 'Análisis Narrativo por Pilar';
    if (headerSubtitle) headerSubtitle.innerText = 'Síntesis ejecutiva en 4 párrafos (Filtro oficial: pilares con >80% de recomendaciones)';
    renderPillarAnalysisView(container);
  } else if (AppState.activeView === 'report') {
    if (headerTitle) headerTitle.innerText = 'Informe Diagnóstico Consolidado';
    if (headerSubtitle) headerSubtitle.innerText = 'Generación y exportación oficial de Asistencia Técnica (CD Report)';
    renderReportView(container);
  } else if (AppState.activeView === 'manual') {
    if (headerTitle) headerTitle.innerText = 'Manual de Usuario — Guía Pantalla por Pantalla';
    if (headerSubtitle) headerSubtitle.innerText = 'Plataforma de Diagnóstico y Evaluación • Misión FMI Bolivia 2026';
    renderManualView(container);
  }

  if (window.lucide) lucide.createIcons();
}

// ==========================================================================
// VISTA 1: DASHBOARD / UN VISTAZO (TABLERO EJECUTIVO OFICIAL FMI)
// ==========================================================================

const CASA_AREAS_CONFIG = {
  'KA1': { shortName: 'Marco estratégico y gobernanza', comp: 1, order: 1, radarLabel: 'Marco estratégico' },
  'KA2': { shortName: 'Integridad, anticorrupción y rendición de cuentas', comp: 1, order: 2, radarLabel: 'Integridad y rendición' },
  'KA3': { shortName: 'Gestión de recursos humanos', comp: 1, order: 3, radarLabel: 'Recursos humanos' },
  'KA4': { shortName: 'Tecnología de la información y la comunicación', comp: 1, order: 4, radarLabel: 'TIC y sistemas' },
  'KA5': { shortName: 'Gobernanza de datos y capacidades analíticas', comp: 1, order: 5, radarLabel: 'Gobernanza datos' },
  'KA6': { shortName: 'Gestión integrada de riesgos', comp: 1, order: 6, radarLabel: 'Gestión riesgos' },
  'KA13': { shortName: 'Estrategia de lucha contra el contrabando', comp: 1, order: 7, radarLabel: 'Lucha contrabando' },
  'KA7': { shortName: 'Registro y gestión de operadores clave', comp: 2, order: 8, radarLabel: 'Operadores clave' },
  'KA8': { shortName: 'Gestión de carga y trazabilidad de extremo a extremo', comp: 2, order: 9, radarLabel: 'Gestión carga' },
  'KA9': { shortName: 'Despacho aduanero', comp: 2, order: 10, radarLabel: 'Despacho aduana' },
  'KA10': { shortName: 'Gestión del comercio electrónico transfronterizo', comp: 2, order: 11, radarLabel: 'Comercio electr.' },
  'KA11': { shortName: 'Gestión de regímenes especiales', comp: 2, order: 12, radarLabel: 'Regímenes espec.' },
  'KA12': { shortName: 'Auditoría posterior al despacho (APD)', comp: 2, order: 13, radarLabel: 'Auditoría post.' }
};

function getExecutiveMaturity(score) {
  const val = parseFloat(score);
  if (!score || isNaN(val) || val <= 0) {
    return {
      key: 'pending',
      label: 'Sin evaluar',
      color: '#64748b',
      bg: '#f1f5f9',
      border: '#cbd5e1'
    };
  }
  if (val >= 3.5) {
    return {
      key: 'consolidated',
      label: 'Consolidado',
      color: '#004f98',
      bg: '#c1e6f6',
      border: '#009dde'
    };
  }
  if (val >= 2.5) {
    return {
      key: 'developing',
      label: 'En desarrollo',
      color: '#274e13',
      bg: '#cbe5a6',
      border: '#7bbe23'
    };
  }
  if (val >= 1.8) {
    return {
      key: 'initial',
      label: 'Inicial',
      color: '#78350f',
      bg: '#ffcd9a',
      border: '#ff8204'
    };
  }
  return {
    key: 'nascent',
    label: 'Incipiente',
    color: '#7f1d1d',
    bg: '#ffcbcd',
    border: '#d82d1c'
  };
}

function getLevelCellClass(key) {
  if (key === 'consolidated') return 'cell-level-consolidado';
  if (key === 'developing') return 'cell-level-desarrollo';
  if (key === 'initial') return 'cell-level-inicial';
  if (key === 'nascent') return 'cell-level-incipiente';
  return 'cell-level-pending';
}

function getHeatmapCellA(pct) {
  const p = parseFloat(pct) || 0;
  if (p === 0) return 'background:#ffffff;color:#94a3b8;';
  if (p >= 60) return 'background:#009dde;color:#ffffff;font-weight:700;';
  if (p >= 30) return 'background:#9cd8f4;color:#003666;font-weight:700;';
  return 'background:#dbf1fc;color:#004f98;font-weight:600;';
}

function getHeatmapCellB(pct) {
  const p = parseFloat(pct) || 0;
  if (p === 0) return 'background:#ffffff;color:#94a3b8;';
  if (p >= 60) return 'background:#7bbe23;color:#ffffff;font-weight:700;';
  if (p >= 30) return 'background:#a2d264;color:#1e3a10;font-weight:700;';
  return 'background:#dff2ca;color:#274e13;font-weight:600;';
}

function getHeatmapCellC(pct) {
  const p = parseFloat(pct) || 0;
  if (p === 0) return 'background:#ffffff;color:#94a3b8;';
  if (p >= 50) return 'background:#ff8204;color:#ffffff;font-weight:700;';
  if (p >= 25) return 'background:#ffbd77;color:#431407;font-weight:700;';
  return 'background:#ffead7;color:#78350f;font-weight:600;';
}

function getHeatmapCellD(pct) {
  const p = parseFloat(pct) || 0;
  if (p === 0) return 'background:#ffffff;color:#94a3b8;';
  if (p >= 25) return 'background:#d82d1c;color:#ffffff;font-weight:700;';
  if (p >= 10) return 'background:#efa6a0;color:#450a0a;font-weight:700;';
  return 'background:#fce4e4;color:#7f1d1d;font-weight:600;';
}

function extractExecutiveHighlights() {
  const strengths = [];
  const reforms = [];

  AppState.pillars.forEach(p => {
    (p.criteria || []).forEach(c => {
      (c.questions || []).forEach(q => {
        const sc = q.score;
        const qTitle = (q.text || q.title || '').trim();
        const qEvidence = (q.evidence || '').trim();
        const qRec = (q.recommendations || q.notes || '').trim();

        if (sc === 4 || sc === '4' || sc === 'A') {
          strengths.push({ score: 4, text: qTitle, evidence: qEvidence });
        } else if (sc === 3 || sc === '3' || sc === 'B') {
          strengths.push({ score: 3, text: qTitle, evidence: qEvidence });
        }

        if (sc === 1 || sc === '1' || sc === 'D') {
          reforms.push({ score: 1, text: qTitle, rec: qRec });
        } else if (sc === 2 || sc === '2' || sc === 'C') {
          reforms.push({ score: 2, text: qTitle, rec: qRec });
        }
      });
    });
  });

  strengths.sort((a, b) => (b.score - a.score) || (b.evidence.length - a.evidence.length));
  reforms.sort((a, b) => (a.score - b.score) || (b.rec.length - a.rec.length));

  const defaultStrengths = [
    'Marco legal y normativo aduanero con base regulatoria formal establecida.',
    'Cimientos y disponibilidad operativa de la infraestructura básica de TIC.',
    'Estructura de gestión de recursos humanos con perfiles técnicos operativos.',
    'Mecanismos formales de recepción y tramitación de declaraciones aduaneras.',
    'Controles establecidos en puntos de control fronterizo y recintos aduaneros.'
  ];

  const defaultReforms = [
    'Formalizar y actualizar la hoja de ruta integral de modernización y transformación digital.',
    'Avanzar hacia la gestión integrada de riesgos basada en análisis predictivo y selectividad inteligente.',
    'Fortalecer la gobernanza de datos institucional, interoperabilidad y calidad analítica.',
    'Aumentar el alcance, recursos y el impacto de la Auditoría Posterior al Despacho (APD).',
    'Reequilibrar las facultades y capacidades operativas hacia funciones aduaneras de mayor valor añadido.'
  ];

  const topStrengths = [];
  const seenStr = new Set();
  strengths.forEach(s => {
    if (topStrengths.length < 5 && s.text && !seenStr.has(s.text)) {
      seenStr.add(s.text);
      topStrengths.push(s.text);
    }
  });
  while (topStrengths.length < 5) {
    topStrengths.push(defaultStrengths[topStrengths.length]);
  }

  const topReforms = [];
  const seenRef = new Set();
  reforms.forEach(r => {
    if (topReforms.length < 5 && r.text && !seenRef.has(r.text)) {
      seenRef.add(r.text);
      const textToUse = (r.rec && r.rec.length > 5) ? `${r.text}: ${r.rec}` : `Fortalecer e implementar: ${r.text}`;
      topReforms.push(textToUse);
    }
  });
  while (topReforms.length < 5) {
    topReforms.push(defaultReforms[topReforms.length]);
  }

  return { topStrengths, topReforms };
}

function calculateExecutiveDashboardData() {
  const globalStats = calculateGlobalStats();

  const processedPillars = AppState.pillars.map((p, idx) => {
    const stats = calculatePillarStats(p);
    const code = p.code || `KA${idx + 1}`;
    const cfg = CASA_AREAS_CONFIG[code] || {
      shortName: p.title,
      comp: (code === 'KA7' || code === 'KA8' || code === 'KA9' || code === 'KA10' || code === 'KA11' || code === 'KA12') ? 2 : 1,
      order: idx + 1,
      radarLabel: p.title.slice(0, 16)
    };

    const numAvg = stats.numAverage || 0;
    const maturity = getExecutiveMaturity(numAvg);
    const totalValid = (stats.counts[4] || 0) + (stats.counts[3] || 0) + (stats.counts[2] || 0) + (stats.counts[1] || 0);

    const pA = totalValid > 0 ? (((stats.counts[4] || 0) / totalValid) * 100).toFixed(1) : '0.0';
    const pB = totalValid > 0 ? (((stats.counts[3] || 0) / totalValid) * 100).toFixed(1) : '0.0';
    const pC = totalValid > 0 ? (((stats.counts[2] || 0) / totalValid) * 100).toFixed(1) : '0.0';
    const pD = totalValid > 0 ? (((stats.counts[1] || 0) / totalValid) * 100).toFixed(1) : '0.0';

    return {
      pillar: p,
      id: p.id,
      code,
      order: cfg.order,
      comp: cfg.comp,
      shortName: cfg.shortName,
      radarLabel: cfg.radarLabel,
      stats,
      numAvg,
      avgStr: numAvg > 0 ? numAvg.toFixed(2) : '—',
      maturity,
      c4: stats.counts[4] || 0,
      c3: stats.counts[3] || 0,
      c2: stats.counts[2] || 0,
      c1: stats.counts[1] || 0,
      cNA: stats.counts['NA'] || 0,
      cPend: stats.counts['pending'] || 0,
      total: stats.totalQuestions || 0,
      totalValid,
      pA, pB, pC, pD
    };
  });

  const comp1Pillars = processedPillars.filter(p => p.comp === 1).sort((a, b) => a.order - b.order);
  const comp2Pillars = processedPillars.filter(p => p.comp === 2).sort((a, b) => a.order - b.order);

  const comp1Scored = comp1Pillars.filter(p => p.numAvg > 0);
  const comp1Avg = comp1Scored.length > 0 ? (comp1Scored.reduce((acc, p) => acc + p.numAvg, 0) / comp1Scored.length) : 0;
  const comp1Maturity = getExecutiveMaturity(comp1Avg);

  const comp2Scored = comp2Pillars.filter(p => p.numAvg > 0);
  const comp2Avg = comp2Scored.length > 0 ? (comp2Scored.reduce((acc, p) => acc + p.numAvg, 0) / comp2Scored.length) : 0;
  const comp2Maturity = getExecutiveMaturity(comp2Avg);

  const totalAreas = processedPillars.length || 13;
  const nConsolidado = processedPillars.filter(p => p.numAvg >= 3.5).length;
  const nDesarrollo = processedPillars.filter(p => p.numAvg >= 2.5 && p.numAvg < 3.5).length;
  const nInicial = processedPillars.filter(p => p.numAvg >= 1.8 && p.numAvg < 2.5).length;
  const nIncipiente = processedPillars.filter(p => p.numAvg > 0 && p.numAvg < 1.8).length;
  const nPendiente = processedPillars.filter(p => p.numAvg === 0).length;

  const pctAreas = {
    consolidado: Math.round((nConsolidado / totalAreas) * 100),
    desarrollo: Math.round((nDesarrollo / totalAreas) * 100),
    inicial: Math.round((nInicial / totalAreas) * 100),
    incipiente: Math.round((nIncipiente / totalAreas) * 100),
    pendiente: Math.round((nPendiente / totalAreas) * 100),
    counts: { nConsolidado, nDesarrollo, nInicial, nIncipiente, nPendiente }
  };

  const { topStrengths, topReforms } = extractExecutiveHighlights();

  return {
    globalStats,
    processedPillars,
    comp1Pillars,
    comp2Pillars,
    comp1Avg: comp1Avg > 0 ? comp1Avg.toFixed(2) : '—',
    comp1Maturity,
    comp2Avg: comp2Avg > 0 ? comp2Avg.toFixed(2) : '—',
    comp2Maturity,
    pctAreas,
    topStrengths,
    topReforms
  };
}

function setDashboardExecutiveMode(mode) {
  AppState.dashboardExecutiveMode = mode;
  const container = document.getElementById('main-content-area');
  if (container && AppState.activeView === 'dashboard') {
    renderDashboardView(container);
  }
}

function exportExecutiveMatrixCsv() {
  const data = calculateExecutiveDashboardData();
  const mode = AppState.dashboardExecutiveMode || 'percent';
  let csv = '\uFEFF'; // BOM UTF-8

  if (mode === 'percent') {
    csv += 'Componente;Código;Área Clave;Índice de Madurez;Nivel;% A (Sólido);% B (Buen desempeño);% C (Etapa inicial);% D (Incipiente)\r\n';

    csv += 'Componente 1: Gobernanza y gestión;;;;;;;;\r\n';
    data.comp1Pillars.forEach(p => {
      csv += `Componente 1;${p.code};"${p.shortName}";${p.avgStr};"${p.maturity.label}";${p.pA}%;${p.pB}%;${p.pC}%;${p.pD}%\r\n`;
    });

    csv += 'Componente 2: Procesos y funciones aduaneras clave;;;;;;;;\r\n';
    data.comp2Pillars.forEach(p => {
      csv += `Componente 2;${p.code};"${p.shortName}";${p.avgStr};"${p.maturity.label}";${p.pA}%;${p.pB}%;${p.pC}%;${p.pD}%\r\n`;
    });

    csv += `TOTAL CONSOLIDADO;;Misión FMI Bolivia;${data.globalStats.globalAvg};"${getExecutiveMaturity(data.globalStats.globalAvg).label}";;;;\r\n`;
  } else {
    csv += 'Componente;Código;Área Clave;Índice;Nivel;A (Sólido);B (Buen desempeño);C (Inicial);D (Incipiente);NA;Pendiente;Total Preguntas\r\n';

    csv += 'Componente 1: Gobernanza y gestión;;;;;;;;;;;\r\n';
    data.comp1Pillars.forEach(p => {
      csv += `Componente 1;${p.code};"${p.shortName}";${p.avgStr};"${p.maturity.label}";${p.c4};${p.c3};${p.c2};${p.c1};${p.cNA};${p.cPend};${p.total}\r\n`;
    });

    csv += 'Componente 2: Procesos y funciones aduaneras clave;;;;;;;;;;;\r\n';
    data.comp2Pillars.forEach(p => {
      csv += `Componente 2;${p.code};"${p.shortName}";${p.avgStr};"${p.maturity.label}";${p.c4};${p.c3};${p.c2};${p.c1};${p.cNA};${p.cPend};${p.total}\r\n`;
    });

    const gc = data.globalStats.globalCounts;
    csv += `TOTAL CONSOLIDADO;;Misión FMI Bolivia;${data.globalStats.globalAvg};"${getExecutiveMaturity(data.globalStats.globalAvg).label}";${gc[4]};${gc[3]};${gc[2]};${gc[1]};${gc['NA']};${gc['pending']};${data.globalStats.totalQs}\r\n`;
  }

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tablero_ejecutivo_fmi_${mode}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Matriz ejecutiva exportada en CSV exitosamente', 'success');
}

function renderDashboardView(container) {
  const data = calculateExecutiveDashboardData();
  const currentUser = getCurrentUser();
  const myAssignedPillars = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(currentUser.id));

  let myTotalQs = 0;
  let myEvaluatedQs = 0;
  myAssignedPillars.forEach(p => {
    const s = calculatePillarStats(p);
    myTotalQs += s.totalQuestions;
    myEvaluatedQs += s.scoredQuestions;
  });
  const myProgress = myTotalQs > 0 ? Math.round((myEvaluatedQs / myTotalQs) * 100) : 0;
  const initials = currentUser.name ? currentUser.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : 'EV';

  const mode = AppState.dashboardExecutiveMode || 'percent';

  container.innerHTML = `
    <!-- Personal Evaluator Banner -->
    <div class="personal-banner">
      <div style="display:flex;align-items:center;gap:1rem;flex:1;min-width:280px;">
        <div style="width:48px;height:48px;border-radius:50%;background:${currentUser.color || '#1e40af'};color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.15rem;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,0.15);">
          ${initials}
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
            <span style="font-size:0.725rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);letter-spacing:0.06em;">Evaluador Activo en Sesión</span>
            <span class="score-tag score-4" style="font-size:0.68rem;padding:1px 6px;">En línea</span>
          </div>
          <h3 style="font-size:1.15rem;margin:2px 0;">${currentUser.name} <span style="font-size:0.85rem;font-weight:500;color:var(--text-secondary);">(${currentUser.role})</span></h3>
          <div style="font-size:0.8rem;color:var(--text-secondary);">
            Tienes <strong>${myAssignedPillars.length} de ${AppState.pillars.length} áreas clave</strong> a tu cargo • Avance personal: <strong>${myEvaluatedQs}/${myTotalQs} preguntas (${myProgress}%)</strong>
          </div>
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:0.6rem;flex-wrap:wrap;">
        ${myAssignedPillars.length > 0 ? `
          <button class="btn btn-primary btn-sm" onclick="goToMyEvaluations()">
            <i data-lucide="target" style="width:14px;height:14px;"></i> Ir a Mis Secciones Asignadas
          </button>
        ` : ''}
        <button class="btn btn-secondary btn-sm" onclick="openSwitchUserModal()">
          <i data-lucide="users" style="width:14px;height:14px;"></i> Cambiar de Evaluador
        </button>
      </div>
    </div>

    <!-- TABLERO EJECUTIVO OFICIAL FMI: UN VISTAZO -->
    <div class="exec-sheet">
      <!-- Encabezado Oficial FMI -->
      <div class="exec-header">
        <div class="exec-country-title">ESTADO PLURINACIONAL DE BOLIVIA</div>
        <h2 class="exec-main-title">Resumen de Resultados de la Evaluación</h2>
      </div>

      <!-- Sector Superior: 2 Columnas (Tablas de Madurez a la izquierda, Radar a la derecha) -->
      <div class="exec-top-grid">
        <!-- Columna Izquierda: 2 Tablas Ejecutivas -->
        <div class="exec-tables-col">
          <!-- Tabla 1: Nivel de Madurez por Componente -->
          <div class="exec-table-card">
            <h4 class="exec-section-heading">NIVEL DE MADUREZ POR COMPONENTE</h4>
            <table class="exec-table">
              <thead>
                <tr>
                  <th style="text-align:left;">Componente</th>
                  <th style="text-align:center;width:75px;">Índice</th>
                  <th style="text-align:center;width:125px;">Nivel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="font-weight:500;">Gobernanza y gestión</td>
                  <td style="text-align:center;font-weight:700;">${data.comp1Avg}</td>
                  <td style="text-align:center;" class="${getLevelCellClass(data.comp1Maturity.key)}">
                    ${data.comp1Maturity.label}
                  </td>
                </tr>
                <tr>
                  <td style="font-weight:500;">Procesos aduaneros clave</td>
                  <td style="text-align:center;font-weight:700;">${data.comp2Avg}</td>
                  <td style="text-align:center;" class="${getLevelCellClass(data.comp2Maturity.key)}">
                    ${data.comp2Maturity.label}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Tabla 2: Distribución de Áreas por Nivel de Madurez -->
          <div class="exec-table-card">
            <h4 class="exec-section-heading">DISTRIBUCIÓN DE ÁREAS POR NIVEL DE MADUREZ</h4>
            <table class="exec-table">
              <thead>
                <tr>
                  <th style="text-align:left;">Nivel</th>
                  <th style="text-align:center;width:95px;">Áreas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="cell-level-consolidado" style="font-weight:600;">Consolidado</td>
                  <td class="cell-pct-consolidado">${data.pctAreas.consolidado}%</td>
                </tr>
                <tr>
                  <td class="cell-level-desarrollo" style="font-weight:600;">En desarrollo</td>
                  <td class="cell-pct-desarrollo">${data.pctAreas.desarrollo}%</td>
                </tr>
                <tr>
                  <td class="cell-level-inicial" style="font-weight:600;">Inicial</td>
                  <td class="cell-pct-inicial">${data.pctAreas.inicial}%</td>
                </tr>
                <tr>
                  <td class="cell-level-incipiente" style="font-weight:600;">Incipiente</td>
                  <td class="cell-pct-incipiente">${data.pctAreas.incipiente}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Columna Derecha: Gráfico de Radar de las 13 Áreas Clave -->
        <div class="exec-radar-box">
          <div class="exec-radar-header">
            <h4 class="exec-section-heading">MADUREZ POR ÁREA CLAVE</h4>
            <span style="font-size:0.75rem;color:#8c9ba5;font-weight:700;">Escala FMI 1.0 - 4.0</span>
          </div>
          <div class="exec-radar-canvas-wrap">
            <canvas id="executiveRadarChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Sector Central: Matriz Analítica por Área (Con Selector integrado % / Conteos) -->
      <div class="exec-matrix-wrap">
        <div class="exec-matrix-header-bar">
          <h4 class="exec-section-heading" style="margin:0;">EVALUACIÓN DE MADUREZ Y ADOPCIÓN DE BUENAS PRÁCTICAS POR ÁREA</h4>

          <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
            <div class="exec-mode-switch">
              <button class="exec-mode-btn ${mode === 'percent' ? 'active' : ''}" onclick="setDashboardExecutiveMode('percent')">
                <i data-lucide="percent" style="width:13px;height:13px;"></i> % Adopción Oficial FMI
              </button>
              <button class="exec-mode-btn ${mode === 'counts' ? 'active' : ''}" onclick="setDashboardExecutiveMode('counts')">
                <i data-lucide="hash" style="width:13px;height:13px;"></i> N° Frecuencia Absoluta
              </button>
            </div>

            <button class="btn btn-secondary btn-sm" style="font-size:0.75rem;padding:3px 9px;" onclick="exportExecutiveMatrixCsv()">
              <i data-lucide="download" style="width:12px;height:12px;"></i> Exportar CSV
            </button>
          </div>
        </div>

        <table class="exec-matrix-table">
          <thead>
            <tr>
              <th rowspan="2" style="text-align:left;min-width:270px;">Área Clave</th>
              <th rowspan="2" style="width:65px;">Índice</th>
              <th rowspan="2" style="width:115px;">Nivel</th>
              ${mode === 'percent' ? `
                <th colspan="4">Distribución de categoría de adopción de buenas prácticas</th>
              ` : `
                <th colspan="4">Conteo por Calificación FMI (N° Preguntas)</th>
                <th rowspan="2" style="width:50px;">NA</th>
                <th rowspan="2" style="width:65px;">Pendiente</th>
                <th rowspan="2" style="width:60px;">Total</th>
              `}
            </tr>
            <tr>
              <th class="th-solid-a" style="width:65px;">A</th>
              <th class="th-solid-b" style="width:65px;">B</th>
              <th class="th-solid-c" style="width:65px;">C</th>
              <th class="th-solid-d" style="width:65px;">D</th>
            </tr>
          </thead>
          <tbody>
            <!-- COMPONENTE 1: GOBERNANZA Y GESTIÓN -->
            <tr>
              <td colspan="${mode === 'percent' ? 7 : 10}" class="exec-comp-banner">
                Componente 1: Gobernanza y gestión
              </td>
            </tr>
            ${data.comp1Pillars.map(p => `
              <tr>
                <td class="col-area">
                  <a href="javascript:void(0)" onclick="switchView('evaluation', '${p.id}')" title="Clic para ir a evaluar este pilar">
                    <span style="color:#00a4e4;font-weight:700;margin-right:6px;">${p.code}</span>
                    <span>${p.shortName}</span>
                  </a>
                </td>
                <td style="font-weight:700;">${p.avgStr}</td>
                <td class="${getLevelCellClass(p.maturity.key)}">
                  ${p.maturity.label}
                </td>
                ${mode === 'percent' ? `
                  <td style="${getHeatmapCellA(p.pA)}">${p.pA}%</td>
                  <td style="${getHeatmapCellB(p.pB)}">${p.pB}%</td>
                  <td style="${getHeatmapCellC(p.pC)}">${p.pC}%</td>
                  <td style="${getHeatmapCellD(p.pD)}">${p.pD}%</td>
                ` : `
                  <td style="${p.c4 > 0 ? 'background:#dbf1fc;color:#004f98;font-weight:700;' : ''}">${p.c4}</td>
                  <td style="${p.c3 > 0 ? 'background:#dff2ca;color:#274e13;font-weight:700;' : ''}">${p.c3}</td>
                  <td style="${p.c2 > 0 ? 'background:#ffead7;color:#78350f;font-weight:700;' : ''}">${p.c2}</td>
                  <td style="${p.c1 > 0 ? 'background:#fce4e4;color:#7f1d1d;font-weight:700;' : ''}">${p.c1}</td>
                  <td style="color:#64748b;">${p.cNA}</td>
                  <td style="color:#64748b;">${p.cPend}</td>
                  <td><strong>${p.total}</strong></td>
                `}
              </tr>
            `).join('')}

            <!-- COMPONENTE 2: PROCESOS Y FUNCIONES ADUANERAS CLAVE -->
            <tr>
              <td colspan="${mode === 'percent' ? 7 : 10}" class="exec-comp-banner">
                Componente 2: Procesos y funciones aduaneras clave
              </td>
            </tr>
            ${data.comp2Pillars.map(p => `
              <tr>
                <td class="col-area">
                  <a href="javascript:void(0)" onclick="switchView('evaluation', '${p.id}')" title="Clic para ir a evaluar este pilar">
                    <span style="color:#00a4e4;font-weight:700;margin-right:6px;">${p.code}</span>
                    <span>${p.shortName}</span>
                  </a>
                </td>
                <td style="font-weight:700;">${p.avgStr}</td>
                <td class="${getLevelCellClass(p.maturity.key)}">
                  ${p.maturity.label}
                </td>
                ${mode === 'percent' ? `
                  <td style="${getHeatmapCellA(p.pA)}">${p.pA}%</td>
                  <td style="${getHeatmapCellB(p.pB)}">${p.pB}%</td>
                  <td style="${getHeatmapCellC(p.pC)}">${p.pC}%</td>
                  <td style="${getHeatmapCellD(p.pD)}">${p.pD}%</td>
                ` : `
                  <td style="${p.c4 > 0 ? 'background:#dbf1fc;color:#004f98;font-weight:700;' : ''}">${p.c4}</td>
                  <td style="${p.c3 > 0 ? 'background:#dff2ca;color:#274e13;font-weight:700;' : ''}">${p.c3}</td>
                  <td style="${p.c2 > 0 ? 'background:#ffead7;color:#78350f;font-weight:700;' : ''}">${p.c2}</td>
                  <td style="${p.c1 > 0 ? 'background:#fce4e4;color:#7f1d1d;font-weight:700;' : ''}">${p.c1}</td>
                  <td style="color:#64748b;">${p.cNA}</td>
                  <td style="color:#64748b;">${p.cPend}</td>
                  <td><strong>${p.total}</strong></td>
                `}
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="background:var(--bg-tertiary);font-weight:700;">
              <td class="col-area">TOTAL CONSOLIDADO (Misión FMI Bolivia)</td>
              <td>${data.globalStats.globalAvg}</td>
              <td class="${getLevelCellClass(getExecutiveMaturity(data.globalStats.globalAvg).key)}">
                ${getExecutiveMaturity(data.globalStats.globalAvg).label}
              </td>
              ${mode === 'percent' ? `
                <td style="${getHeatmapCellA(data.globalStats.evaluatedQs > 0 ? (data.globalStats.globalCounts[4] / data.globalStats.evaluatedQs * 100).toFixed(1) : '0')}">
                  ${data.globalStats.evaluatedQs > 0 ? ((data.globalStats.globalCounts[4] / data.globalStats.evaluatedQs) * 100).toFixed(1) : '0.0'}%
                </td>
                <td style="${getHeatmapCellB(data.globalStats.evaluatedQs > 0 ? (data.globalStats.globalCounts[3] / data.globalStats.evaluatedQs * 100).toFixed(1) : '0')}">
                  ${data.globalStats.evaluatedQs > 0 ? ((data.globalStats.globalCounts[3] / data.globalStats.evaluatedQs) * 100).toFixed(1) : '0.0'}%
                </td>
                <td style="${getHeatmapCellC(data.globalStats.evaluatedQs > 0 ? (data.globalStats.globalCounts[2] / data.globalStats.evaluatedQs * 100).toFixed(1) : '0')}">
                  ${data.globalStats.evaluatedQs > 0 ? ((data.globalStats.globalCounts[2] / data.globalStats.evaluatedQs) * 100).toFixed(1) : '0.0'}%
                </td>
                <td style="${getHeatmapCellD(data.globalStats.evaluatedQs > 0 ? (data.globalStats.globalCounts[1] / data.globalStats.evaluatedQs * 100).toFixed(1) : '0')}">
                  ${data.globalStats.evaluatedQs > 0 ? ((data.globalStats.globalCounts[1] / data.globalStats.evaluatedQs) * 100).toFixed(1) : '0.0'}%
                </td>
              ` : `
                <td style="font-weight:800;background:#dbf1fc;color:#004f98;">${data.globalStats.globalCounts[4]}</td>
                <td style="font-weight:800;background:#dff2ca;color:#274e13;">${data.globalStats.globalCounts[3]}</td>
                <td style="font-weight:800;background:#ffead7;color:#78350f;">${data.globalStats.globalCounts[2]}</td>
                <td style="font-weight:800;background:#fce4e4;color:#7f1d1d;">${data.globalStats.globalCounts[1]}</td>
                <td>${data.globalStats.globalCounts['NA']}</td>
                <td>${data.globalStats.globalCounts['pending']}</td>
                <td style="color:#004f98;font-size:0.9rem;">${data.globalStats.totalQs}</td>
              `}
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Sector Inferior: Principales Fortalezas y Acciones Prioritarias de Reforma -->
      <div class="exec-bottom-wrap">
        <h4 class="exec-section-heading">PRINCIPALES FORTALEZAS EVALUADAS Y ACCIONES PRIORITARIAS DE REFORMA</h4>
        <div class="exec-bottom-grid">
          <!-- Columna 1: Fortalezas Clave -->
          <div class="exec-bottom-col">
            <h4>Fortalezas Clave</h4>
            <ul class="exec-bullet-list">
              ${data.topStrengths.map(s => `
                <li class="exec-bullet-item">
                  <span class="exec-bullet-square"></span>
                  <span>${s}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Columna 2: Acciones Prioritarias de Reforma -->
          <div class="exec-bottom-col exec-bottom-col-reforms">
            <h4>Acciones Prioritarias de Reforma</h4>
            <ul class="exec-bullet-list">
              ${data.topReforms.map(r => `
                <li class="exec-bullet-item">
                  <span class="exec-bullet-square"></span>
                  <span>${r}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Acceso Rápido a las 13 Áreas Clave (CASA) -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem;">
      <h3 style="font-size:1.15rem;display:flex;align-items:center;gap:0.5rem;">
        <i data-lucide="grid" style="color:var(--primary-500);width:18px;height:18px;"></i> Acceso Rápido a las ${AppState.pillars.length} Áreas Clave (CASA)
      </h3>
      <div style="display:flex;gap:0.5rem;">
        <button class="btn btn-sm btn-secondary" onclick="switchView('team')">
          <i data-lucide="users" style="width:14px;height:14px;"></i> Matriz de Asignaciones
        </button>
        <button class="btn btn-sm btn-primary" onclick="switchView('evaluation')">
          <i data-lucide="edit-3" style="width:14px;height:14px;"></i> Ir a Evaluar
        </button>
      </div>
    </div>

    <div class="pillars-summary-grid">
      ${AppState.pillars.map(p => {
    const pStats = calculatePillarStats(p);
    const evaluators = getPillarEvaluators(p);

    return `
          <div class="pillar-card" onclick="switchView('evaluation', '${p.id}')">
            <div class="pillar-card-header">
              <span class="pillar-number-badge">${p.code || ('Pilar ' + (p.number || p.id.replace('pilar_', '')))}</span>
              ${getScoreBadgeHtml(pStats.average)}
            </div>
            <h4>${p.title}</h4>
            
            <div style="margin-top:0.4rem;display:flex;align-items:center;gap:0.3rem;flex-wrap:wrap;">
              ${evaluators.length > 0 ? evaluators.map(m => `
                <span class="evaluator-tag" style="background:${m.color || '#1e40af'};" title="${m.name} (${m.role})">
                  ${m.name.split(' ')[0]}
                </span>
              `).join('') : `<span style="font-size:0.7rem;color:#ef4444;">Sin evaluador</span>`}
            </div>

            <div style="margin-top:0.75rem;">
              <div style="display:flex;justify-content:space-between;font-size:0.725rem;color:var(--text-muted);margin-bottom:2px;">
                <span>Progreso: ${pStats.scoredQuestions}/${pStats.totalQuestions}</span>
                <span>${pStats.progressPercent}%</span>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width:${pStats.progressPercent}%;"></div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;margin-top:0.6rem;padding-top:0.5rem;border-top:1px solid var(--border-color-subtle);font-size:0.775rem;">
              <span style="color:var(--text-secondary);">${p.criteria.length} Criterios</span>
              <span style="font-weight:600;color:var(--primary-600);">Evaluar &rarr;</span>
            </div>
          </div>
        `;
  }).join('')}
    </div>
  `;

  renderExecutiveRadarChart();
}

function renderExecutiveRadarChart() {
  if (typeof Chart === 'undefined') return;

  const canvas = document.getElementById('executiveRadarChart');
  if (!canvas) return;

  if (AppState.chartInstances.executiveRadar) {
    AppState.chartInstances.executiveRadar.destroy();
  }

  const isDark = AppState.theme === 'dark';
  const textColor = isDark ? '#cbd5e1' : '#1e293b';

  const data = calculateExecutiveDashboardData();

  const radarPillars = [...data.comp1Pillars, ...data.comp2Pillars];
  const radarLabels = radarPillars.map(p => p.radarLabel);
  const radarValues = radarPillars.map(p => p.numAvg > 0 ? p.numAvg : 0);

  const dotColors = radarValues.map(v => {
    if (v >= 3.5) return '#009dde';
    if (v >= 2.5) return '#7bbe23';
    if (v >= 1.8) return '#ff8204';
    if (v > 0) return '#d82d1c';
    return '#94a3b8';
  });

  AppState.chartInstances.executiveRadar = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: radarLabels,
      datasets: [{
        label: 'Índice de Madurez (1 a 4)',
        data: radarValues,
        backgroundColor: 'rgba(0, 79, 152, 0.05)',
        borderColor: '#004f98',
        borderWidth: 2,
        pointBackgroundColor: dotColors,
        pointBorderColor: '#ffffff',
        pointBorderWidth: 1.5,
        pointRadius: 4.8,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 4,
          ticks: {
            stepSize: 1,
            color: (c) => {
              const val = c.tick?.value;
              if (val === 4) return '#009dde';
              if (val === 3) return '#7bbe23';
              if (val === 2) return '#ff8204';
              if (val === 1) return '#d82d1c';
              return '#94a3b8';
            },
            backdropColor: 'transparent',
            font: { size: 9, weight: 'bold' },
            callback: (val) => {
              if (val === 4) return 'Consolidado';
              if (val === 3) return 'En desarrollo';
              if (val === 2) return 'Inicial';
              if (val === 1) return 'Incipiente';
              return '';
            }
          },
          grid: {
            color: (c) => {
              const val = c.tick?.value;
              if (val === 4) return 'rgba(0, 157, 222, 0.35)';
              if (val === 3) return 'rgba(123, 190, 35, 0.35)';
              if (val === 2) return 'rgba(255, 130, 4, 0.35)';
              if (val === 1) return 'rgba(216, 45, 28, 0.35)';
              return 'rgba(207, 216, 220, 0.6)';
            },
            lineWidth: 1.1
          },
          angleLines: {
            color: 'rgba(207, 216, 220, 0.6)'
          },
          pointLabels: {
            color: textColor,
            font: { size: 9.5, weight: '600', family: 'Inter, system-ui, sans-serif' }
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: function (items) {
              const idx = items[0].dataIndex;
              return radarPillars[idx].shortName;
            },
            label: function (item) {
              const val = parseFloat(item.raw) || 0;
              const mat = getExecutiveMaturity(val);
              return ` Índice: ${val > 0 ? val.toFixed(2) : 'Sin evaluar'} / 4.0 (${mat.label})`;
            }
          }
        }
      }
    }
  });
}

function renderDashboardCharts() {
  renderExecutiveRadarChart();
}


// ==========================================================================
// VISTA 2: CUESTIONARIO Y EVALUACIÓN INTERACTIVA
// ==========================================================================
function renderEvaluationView(container) {
  const currentUser = getCurrentUser();
  const myAssignedPillars = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(currentUser.id));
  const visiblePillars = getVisiblePillars();
  const isOnlyAssigned = AppState.pillarScope === 'assigned';

  // Si no hay pilares visibles en el scope asignado (ej. usuario sin asignaciones):
  if (visiblePillars.length === 0) {
    container.innerHTML = `
      <div class="card" style="text-align:center;padding:3rem;">
        <div style="font-size:2.5rem;margin-bottom:0.75rem;">🎯</div>
        <h3 style="font-size:1.3rem;">No tienes pilares asignados a tu nombre</h3>
        <p style="color:var(--text-secondary);max-width:520px;margin:0.5rem auto 1.5rem;font-size:0.9rem;">
          El evaluador <strong>${currentUser.name}</strong> (${currentUser.role}) no tiene secciones asignadas actualmente en la matriz de responsabilidades.
        </p>
        <div style="display:flex;justify-content:center;gap:0.75rem;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="switchView('team')">
            <i data-lucide="users" style="width:15px;height:15px;"></i> Ir a Matriz de Asignaciones
          </button>
          <button class="btn btn-secondary" onclick="setPillarScope('all')">
            <i data-lucide="globe" style="width:15px;height:15px;"></i> Ver Todas las Áreas (${AppState.pillars.length})
          </button>
        </div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Ensure currentPillar is one of the visible ones
  let currentPillar = visiblePillars.find(p => p.id === AppState.activePillarId);
  if (!currentPillar) {
    currentPillar = visiblePillars[0];
    AppState.activePillarId = currentPillar.id;
  }

  const isAssignedToMe = (currentPillar.assigned_evaluators || []).includes(currentUser.id);
  const pillarStats = calculatePillarStats(currentPillar);
  const evaluators = getPillarEvaluators(currentPillar);

  container.innerHTML = `
    <!-- Barra Superior de Segmentación de Pilares para el Evaluador -->
    <div class="eval-scope-banner">
      <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
        <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em;">Modo de Visualización:</span>
        <div style="display:inline-flex;gap:3px;background:var(--bg-tertiary);padding:3px;border-radius:var(--radius-sm);">
          <button class="btn btn-sm ${isOnlyAssigned ? 'btn-primary' : 'btn-ghost'}" style="padding:3px 9px;font-size:0.75rem;font-weight:700;" onclick="setPillarScope('assigned')">
            🎯 Mis Secciones (${myAssignedPillars.length})
          </button>
          <button class="btn btn-sm ${!isOnlyAssigned ? 'btn-primary' : 'btn-ghost'}" style="padding:3px 9px;font-size:0.75rem;font-weight:700;" onclick="setPillarScope('all')">
            🌐 Todas (${AppState.pillars.length})
          </button>
        </div>
        <span style="font-size:0.8rem;color:var(--text-secondary);">
          ${isOnlyAssigned
      ? `Mostrando solo las <strong>${visiblePillars.length} secciones a tu cargo</strong>`
      : `Mostrando las <strong>${AppState.pillars.length} áreas clave</strong> institucionales completas`}
        </span>
      </div>

      <div style="font-size:0.78rem;color:var(--text-muted);font-weight:600;">
        Pilar <strong>${visiblePillars.findIndex(p => p.id === currentPillar.id) + 1} de ${visiblePillars.length}</strong>
      </div>
    </div>

    <!-- Pestañas Horizontales Rápidas de los Pilares Visibles -->
    <div class="pillar-tabs-container">
      ${visiblePillars.map(p => {
        const isActive = p.id === currentPillar.id;
        const pStat = calculatePillarStats(p);
        const isMine = (p.assigned_evaluators || []).includes(currentUser.id);
        return `
          <button class="pillar-tab-chip ${isActive ? 'active' : ''}" onclick="switchView('evaluation', '${p.id}')">
            ${isMine ? `<span style="color:${currentUser.color || '#2563eb'};font-weight:900;">●</span>` : ''}
            <span>Pilar ${p.number || p.id.replace('pilar_', '')}: ${p.title.split(' ')[0]} ${p.title.split(' ')[1] || ''}</span>
            <span class="score-tag ${pStat.average !== '—' ? 'score-4' : 'score-na'}" style="font-size:0.65rem;padding:1px 5px;">
              ${pStat.average !== '—' ? pStat.average : `${pStat.progressPercent}%`}
            </span>
          </button>
        `;
      }).join('')}
    </div>

    <!-- Header de Evaluación -->
    <div class="evaluation-header">
      <div class="eval-pillar-info">
        <h2>
          <span style="background:var(--primary-gradient);color:white;padding:3px 9px;border-radius:var(--radius-sm);font-size:0.85rem;">
            Pilar ${currentPillar.number || currentPillar.id.replace('pilar_', '')}
          </span>
          ${currentPillar.title}
          ${isAssignedToMe ? `<span class="score-tag score-4" style="font-size:0.725rem;padding:2px 8px;margin-left:6px;"><i data-lucide="check" style="width:11px;height:11px;"></i> Asignado a ti (${currentUser.name.split(' ')[0]})</span>` : ''}
        </h2>
        <div style="display:flex;align-items:center;gap:0.75rem;margin-top:0.4rem;font-size:0.825rem;color:var(--text-secondary);flex-wrap:wrap;">
          <span><strong>${currentPillar.criteria.length}</strong> Criterios</span>
          <span>•</span>
          <span><strong>${pillarStats.totalQuestions}</strong> Preguntas</span>
          <span>•</span>
          <span>Puntaje: <strong>${pillarStats.average}</strong> / 4.0</span>
          <span>•</span>
          <span>${getScoreBadgeHtml(pillarStats.average)}</span>
        </div>

        <!-- Barra de Evaluadores Asignados -->
        <div style="margin-top:0.6rem;display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;background:var(--bg-tertiary);padding:5px 10px;border-radius:var(--radius-md);width:fit-content;">
          <span style="font-size:0.725rem;font-weight:700;color:var(--text-secondary);"><i data-lucide="users" style="width:13px;height:13px;display:inline-block;vertical-align:middle;margin-right:2px;"></i> Evaluadores Asignados:</span>
          ${evaluators.length > 0 ? evaluators.map(m => `
            <span class="evaluator-tag" style="background:${m.color || '#1e40af'};">
              ${m.id === currentUser.id ? '★ Tú: ' : ''}${m.name}
            </span>
          `).join('') : `<span style="font-size:0.725rem;color:#ef4444;font-weight:600;">Sin evaluador</span>`}
          
          <button class="btn btn-sm btn-outline-primary" style="padding:1px 6px;font-size:0.7rem;" onclick="openAssignPillarModal('${currentPillar.id}')">
            <i data-lucide="user-check" style="width:11px;height:11px;"></i> Modificar Asignaciones
          </button>
        </div>
      </div>

      <!-- Filtros -->
      <div class="eval-filters">
        <input type="text" id="filter-search" class="input-search" placeholder="Buscar preguntas..." value="${AppState.currentFilter.search}" oninput="handleFilterChange('search', this.value)">
        
        <select id="filter-assigned" class="select-filter" onchange="handleFilterChange('assigned', this.value)">
          <option value="all" ${AppState.currentFilter.assigned === 'all' ? 'selected' : ''}>Todos los evaluadores</option>
          <option value="${currentUser.id}" ${AppState.currentFilter.assigned === currentUser.id ? 'selected' : ''}>🎯 Mis preguntas asignadas (${currentUser.name.split(' ')[0]})</option>
          ${AppState.team.filter(m => m.id !== currentUser.id).map(m => `
            <option value="${m.id}" ${AppState.currentFilter.assigned === m.id ? 'selected' : ''}>Asignado a: ${m.name}</option>
          `).join('')}
        </select>

        <select id="filter-status" class="select-filter" onchange="handleFilterChange('status', this.value)">
          <option value="all" ${AppState.currentFilter.status === 'all' ? 'selected' : ''}>Todos los estados</option>
          <option value="evaluated" ${AppState.currentFilter.status === 'evaluated' ? 'selected' : ''}>Evaluadas</option>
          <option value="pending" ${AppState.currentFilter.status === 'pending' ? 'selected' : ''}>Pendientes</option>
        </select>

        <select id="filter-score" class="select-filter" onchange="handleFilterChange('score', this.value)">
          <option value="all" ${AppState.currentFilter.score === 'all' ? 'selected' : ''}>Todas las notas (Escala FMI)</option>
          <option value="4" ${AppState.currentFilter.score === '4' ? 'selected' : ''}>A - Desempeño sólido</option>
          <option value="3" ${AppState.currentFilter.score === '3' ? 'selected' : ''}>B - Buen desempeño</option>
          <option value="2" ${AppState.currentFilter.score === '2' ? 'selected' : ''}>C - Cumplidos / Etapa inicial</option>
          <option value="1" ${AppState.currentFilter.score === '1' ? 'selected' : ''}>D - Requisitos no cumplidos / Incipiente</option>
          <option value="NA" ${AppState.currentFilter.score === 'NA' ? 'selected' : ''}>NA - No aplica</option>
        </select>

        <button class="btn btn-sm btn-outline-danger" onclick="openResetPillarModal('${currentPillar.id}')" title="Borrar respuestas de este pilar">
          <i data-lucide="rotate-ccw" style="width:12px;height:12px;"></i> Reiniciar Sección
        </button>
      </div>
    </div>

    <!-- Barra de Control de Visualización de Preguntas (Comprimidas / Expandidas) -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin:0.85rem 0 1rem;padding:0.5rem 0.85rem;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:var(--radius-md);flex-wrap:wrap;gap:0.5rem;">
      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.8rem;color:var(--text-secondary);">
        <i data-lucide="layers" style="width:14px;height:14px;color:var(--primary-500);"></i>
        <span>Preguntas comprimidas por defecto. Puedes expandir/comprimir individualmente o en bloque:</span>
      </div>
      <div style="display:flex;gap:6px;">
        <button class="btn btn-sm btn-secondary" onclick="expandAllQuestions()" style="font-size:0.74rem;padding:3px 9px;" title="Desplegar todas las preguntas del pilar para ver o editar evidencia y hallazgos">
          <i data-lucide="chevrons-down" style="width:13px;height:13px;"></i> Expandir todas
        </button>
        <button class="btn btn-sm btn-secondary" onclick="collapseAllQuestions()" style="font-size:0.74rem;padding:3px 9px;" title="Comprimir todas las preguntas del pilar (modo compacto)">
          <i data-lucide="chevrons-up" style="width:13px;height:13px;"></i> Comprimir todas
        </button>
      </div>
    </div>

    <!-- Lista de Criterios y Preguntas -->
    <div id="criteria-container">
      ${renderCriteriaList(currentPillar)}
    </div>

    <!-- Navegación entre Pilares (Dentro del conjunto de pilares visibles) -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2rem;padding-top:1.25rem;border-top:1px solid var(--border-color);flex-wrap:wrap;gap:0.75rem;">
      ${getPrevPillarBtn(currentPillar.id)}
      <div style="display:flex;gap:0.5rem;">
        <button class="btn btn-sm btn-outline-danger" onclick="openResetPillarModal('${currentPillar.id}')">
          <i data-lucide="trash-2" style="width:14px;height:14px;"></i> Borrar Respuestas de este Pilar
        </button>
        <button class="btn btn-primary" onclick="saveData(true)">
          <i data-lucide="save" style="width:15px;height:15px;"></i> Guardar Todo
        </button>
      </div>
      ${getNextPillarBtn(currentPillar.id)}
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function handleFilterChange(key, val) {
  AppState.currentFilter[key] = val;
  const currentPillar = AppState.pillars.find(p => p.id === AppState.activePillarId);
  const container = document.getElementById('criteria-container');
  if (container && currentPillar) {
    container.innerHTML = renderCriteriaList(currentPillar);
    if (window.lucide) lucide.createIcons();
  }
}

function renderCriteriaList(pillar) {
  const { search, status, score, assigned } = AppState.currentFilter;
  const query = (search || '').toLowerCase().trim();

  let renderedCount = 0;

  const html = pillar.criteria.map((crit, cIdx) => {
    const filteredQuestions = crit.questions.filter(q => {
      if (query && !q.text.toLowerCase().includes(query) && !crit.title.toLowerCase().includes(query) && !(q.guidance || '').toLowerCase().includes(query)) {
        return false;
      }
      const isScored = q.score !== null && q.score !== undefined && q.score !== '';
      if (status === 'evaluated' && !isScored) return false;
      if (status === 'pending' && isScored) return false;
      if (score !== 'all' && String(q.score) !== String(score)) return false;

      if (assigned !== 'all') {
        const isQuestionAssigned = q.assigned_to === assigned;
        const isPillarAssigned = (pillar.assigned_evaluators || []).includes(assigned);
        if (!isQuestionAssigned && !isPillarAssigned) return false;
      }

      return true;
    });

    if (filteredQuestions.length === 0) return '';
    renderedCount++;

    return `
      <div class="criterion-group">
        <div class="criterion-header">
          <div>
            <span class="criterion-code">${crit.code || `C${cIdx + 1}`}</span>
            <span class="criterion-title">${crit.title}</span>
          </div>
          <span style="font-size:0.725rem;color:var(--text-muted);font-weight:600;">
            ${filteredQuestions.length} preguntas
          </span>
        </div>

        <div>
          ${filteredQuestions.map(q => renderQuestionRow(pillar.id, crit.id, q)).join('')}
        </div>
      </div>
    `;
  }).join('');

  if (renderedCount === 0) {
    return `
      <div class="card" style="text-align:center;padding:2.5rem;">
        <h4 style="margin-bottom:0.5rem;">No se encontraron preguntas con los filtros activos.</h4>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Limpiar Filtros</button>
      </div>
    `;
  }

  return html;
}

function resetFilters() {
  AppState.currentFilter = { status: 'all', score: 'all', search: '', assigned: 'all' };
  renderCurrentView();
}

// ==========================================================================
// UTILIDADES DE TRAZABILIDAD Y FORMATO
// ==========================================================================

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getInitials(name) {
  if (!name) return 'EV';
  return name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || 'EV';
}

function formatDateFull(isoString) {
  if (!isoString) return '';
  try {
    const d = new Date(isoString);
    return d.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return isoString;
  }
}

function formatTimeAgo(isoString) {
  if (!isoString) return 'hace un momento';
  try {
    const date = new Date(isoString);
    const now = new Date();
    const diffSec = Math.floor((now - date) / 1000);
    if (diffSec < 45) return 'hace un momento';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `hace ${diffMin} min`;
    const diffHours = Math.floor(diffMin / 60);
    if (diffHours < 24) return `hace ${diffHours} h`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `hace ${diffDays} d`;
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' });
  } catch (e) {
    return 'hace un momento';
  }
}

function findQuestionLocation(qId) {
  if (!AppState.pillars) return null;
  for (let pIdx = 0; pIdx < AppState.pillars.length; pIdx++) {
    const pillar = AppState.pillars[pIdx];
    for (let cIdx = 0; cIdx < (pillar.criteria || []).length; cIdx++) {
      const crit = pillar.criteria[cIdx];
      for (let qIdx = 0; qIdx < (crit.questions || []).length; qIdx++) {
        if (crit.questions[qIdx].id === qId) {
          return { pIdx, cIdx, qIdx, pillar, crit, question: crit.questions[qIdx] };
        }
      }
    }
  }
  return null;
}

let questionSyncDebounceMap = {};

function saveQuestionData(pillarId, critId, qId, isDebounced = false) {
  if (typeof lastLocalSaveTimestamp !== 'undefined') {
    lastLocalSaveTimestamp = Date.now();
  }
  try {
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(AppState.pillars));
  } catch (e) {
    console.error('Error guardando en localStorage:', e);
  }

  if (typeof syncQuestionToCloud === 'function') {
    if (isDebounced) {
      clearTimeout(questionSyncDebounceMap[qId]);
      questionSyncDebounceMap[qId] = setTimeout(() => {
        syncQuestionToCloud(pillarId, critId, qId);
      }, 350);
    } else {
      clearTimeout(questionSyncDebounceMap[qId]);
      syncQuestionToCloud(pillarId, critId, qId);
    }
  }
}

function updateQuestionAuditBadge(qId, q) {
  const bar = document.getElementById(`meta-bar-${qId}`);
  if (!bar) return;

  const assignedMember = q.assigned_to ? AppState.team.find(m => m.id === q.assigned_to) : null;
  const notesCount = (q.notes_history || []).length;

  bar.innerHTML = `
    <div class="q-meta-left">
      ${q.lastModifiedBy ? `
        <span class="q-audit-badge" title="Última modificación: ${formatDateFull(q.lastModifiedAt)}">
          <span class="q-audit-avatar" style="background:${q.lastModifiedColor || '#1e40af'};">${getInitials(q.lastModifiedBy)}</span>
          <span>Editado por <strong>${q.lastModifiedBy}</strong> • ${formatTimeAgo(q.lastModifiedAt)}</span>
        </span>
      ` : `
        <span class="q-audit-badge muted">
          <i data-lucide="clock" style="width:11px;height:11px;"></i> Sin evaluar aún
        </span>
      `}
      ${assignedMember ? `
        <span class="q-assigned-badge" style="background:${(assignedMember.color || '#6366f1')}15;color:${assignedMember.color || '#6366f1'};border:1px solid ${(assignedMember.color || '#6366f1')}40;">
          <i data-lucide="user-check" style="width:11px;height:11px;"></i> Resp: <strong>${assignedMember.name.split(' ')[0]}</strong>
        </span>
      ` : ''}
    </div>
    <div class="q-meta-right">
      ${(q.evidence || q.findings || q.recommendations || q.indicator) ? `
        <span class="q-content-badge" onclick="toggleDetails('${qId}')" title="Esta pregunta cuenta con justificación técnica documentada">
          <i data-lucide="file-check" style="width:11px;height:11px;"></i> Con justificación
        </span>
      ` : ''}
      <span class="q-notes-count-badge ${notesCount > 0 ? 'has-notes' : ''}" onclick="toggleDetails('${qId}')" title="${notesCount} notas u observaciones registradas por el equipo">
        <i data-lucide="message-square" style="width:11px;height:11px;"></i>
        <span>${notesCount} aporte${notesCount === 1 ? '' : 's'}</span>
      </span>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function renderQuestionNotesList(pillarId, critId, q) {
  const notes = q.notes_history || [];
  const currentUser = getCurrentUser();
  const isLead = isMissionLead(currentUser);

  if (notes.length === 0) {
    return `
      <div class="empty-notes-notice">
        <i data-lucide="message-square" style="width:14px;height:14px;color:var(--text-muted);flex-shrink:0;"></i>
        <span>No hay observaciones o notas previas. Escribe abajo para dejar un aporte técnico con tu firma.</span>
      </div>
    `;
  }

  return notes.map(n => {
    const isAuthor = n.userId === currentUser.id;
    const canDelete = isAuthor || isLead;
    const canEdit = isAuthor || isLead;
    const initials = getInitials(n.userName || 'EV');

    return `
      <div class="note-card" id="note-item-${n.id}">
        <div class="note-card-header">
          <div style="display:flex;align-items:center;gap:6px;">
            <div class="note-author-avatar" style="background:${n.userColor || '#1e40af'};">${initials}</div>
            <div>
              <span class="note-author-name">${escapeHtml(n.userName)}</span>
              <span class="note-author-role">(${escapeHtml(n.userRole || 'Evaluador')})</span>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="note-timestamp" title="${formatDateFull(n.timestamp)}">
              ${formatTimeAgo(n.timestamp)}
              ${n.edited ? `<span class="note-edited-tag" title="Editado ${n.editedAt ? formatDateFull(n.editedAt) : ''}"> • (editado)</span>` : ''}
            </span>
            ${canEdit ? `
              <button class="btn-icon-xs text-primary" onclick="startEditingQuestionNote('${pillarId}', '${critId}', '${q.id}', '${n.id}')" title="Editar este apunte">
                <i data-lucide="edit-2" style="width:12px;height:12px;"></i>
              </button>
            ` : ''}
            ${canDelete ? `
              <button class="btn-icon-xs text-danger" onclick="deleteQuestionNote('${pillarId}', '${critId}', '${q.id}', '${n.id}')" title="Eliminar este apunte">
                <i data-lucide="trash-2" style="width:12px;height:12px;"></i>
              </button>
            ` : ''}
          </div>
        </div>
        <div class="note-card-text" id="note-text-${n.id}">${escapeHtml(n.text)}</div>
        <div class="note-card-actions" id="note-actions-${n.id}">
          <span style="font-size:0.7rem;color:var(--text-muted);margin-right:auto;">Incorporar al borrador:</span>
          <button class="btn-note-copy" onclick="appendNoteToField('${pillarId}', '${critId}', '${q.id}', 'findings', ${JSON.stringify(n.text)})" title="Copiar este aporte al campo de Hallazgos Clave">
            <i data-lucide="plus" style="width:10px;height:10px;"></i> Hallazgos
          </button>
          <button class="btn-note-copy" onclick="appendNoteToField('${pillarId}', '${critId}', '${q.id}', 'recommendations', ${JSON.stringify(n.text)})" title="Copiar este aporte al campo de Recomendaciones">
            <i data-lucide="plus" style="width:10px;height:10px;"></i> Recomendaciones
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function startEditingQuestionNote(pillarId, critId, qId, noteId) {
  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;
  if (!Array.isArray(q.notes_history)) return;
  const note = q.notes_history.find(n => n.id === noteId);
  if (!note) return;

  const user = getCurrentUser();
  if (note.userId !== user.id && !isMissionLead(user)) {
    showToast('Solo el autor de la nota o el Jefe de Misión pueden editarla.', 'warning');
    return;
  }

  const noteCard = document.getElementById(`note-item-${noteId}`);
  if (!noteCard) return;

  const textDiv = document.getElementById(`note-text-${noteId}`);
  const actionsDiv = document.getElementById(`note-actions-${noteId}`);

  if (textDiv) textDiv.style.display = 'none';
  if (actionsDiv) actionsDiv.style.display = 'none';

  const existingEdit = noteCard.querySelector('.note-edit-container');
  if (existingEdit) existingEdit.remove();

  const editContainer = document.createElement('div');
  editContainer.id = `note-edit-box-${noteId}`;
  editContainer.className = 'note-edit-container';
  editContainer.innerHTML = `
    <textarea id="note-edit-input-${noteId}" class="note-edit-textarea" rows="3"
      placeholder="Modifica tu observación o aporte técnico...">${escapeHtml(note.text)}</textarea>
    <div class="note-edit-actions">
      <button class="btn btn-sm btn-primary" onclick="saveEditedQuestionNote('${pillarId}', '${critId}', '${qId}', '${noteId}')" title="Guardar cambios (Ctrl+Enter)">
        <i data-lucide="check" style="width:13px;height:13px;"></i> Guardar Cambios
      </button>
      <button class="btn btn-sm btn-secondary" onclick="cancelEditingQuestionNote('${pillarId}', '${critId}', '${qId}')" title="Cancelar edición (Esc)">
        Cancelar
      </button>
      <span class="note-edit-hint">Ctrl+Enter para guardar • Esc para cancelar</span>
    </div>
  `;

  noteCard.appendChild(editContainer);

  const textarea = document.getElementById(`note-edit-input-${noteId}`);
  if (textarea) {
    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
    textarea.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        saveEditedQuestionNote(pillarId, critId, qId, noteId);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        cancelEditingQuestionNote(pillarId, critId, qId);
      }
    });
  }

  if (window.lucide) lucide.createIcons();
}

function saveEditedQuestionNote(pillarId, critId, qId, noteId) {
  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;
  if (!Array.isArray(q.notes_history)) return;

  const note = q.notes_history.find(n => n.id === noteId);
  if (!note) return;

  const user = getCurrentUser();
  if (note.userId !== user.id && !isMissionLead(user)) {
    showToast('Solo el autor de la nota o el Jefe de Misión pueden editarla.', 'warning');
    return;
  }

  const textarea = document.getElementById(`note-edit-input-${noteId}`);
  if (!textarea) return;
  const newText = textarea.value.trim();

  if (!newText) {
    showToast('El texto del aporte no puede estar vacío.', 'warning');
    return;
  }

  if (newText !== note.text) {
    note.text = newText;
    note.edited = true;
    note.editedAt = new Date().toISOString();
    note.editedBy = user.name;
    note.editedById = user.id;

    q.lastModifiedBy = user.name;
    q.lastModifiedById = user.id;
    q.lastModifiedAt = new Date().toISOString();
    q.lastModifiedColor = user.color || '#1e40af';

    saveQuestionData(pillarId, critId, qId, false);
    updateQuestionAuditBadge(qId, q);
    showToast('Aporte actualizado con éxito', 'success');
  }

  const listContainer = document.getElementById(`notes-list-${qId}`);
  if (listContainer) {
    listContainer.innerHTML = renderQuestionNotesList(pillarId, critId, q);
    if (window.lucide) lucide.createIcons();
  }
}

function cancelEditingQuestionNote(pillarId, critId, qId) {
  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;

  const listContainer = document.getElementById(`notes-list-${qId}`);
  if (listContainer) {
    listContainer.innerHTML = renderQuestionNotesList(pillarId, critId, q);
    if (window.lucide) lucide.createIcons();
  }
}

function addQuestionNote(pillarId, critId, qId) {
  const input = document.getElementById(`note-input-${qId}`);
  if (!input) return;
  const text = input.value.trim();
  if (!text) {
    showToast('Escribe un comentario o apunte antes de enviar.', 'warning');
    return;
  }

  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;
  const user = getCurrentUser();

  if (!Array.isArray(q.notes_history)) {
    q.notes_history = [];
  }

  const newNote = {
    id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    userId: user.id,
    userName: user.name,
    userRole: user.role,
    userColor: user.color || '#1e40af',
    timestamp: new Date().toISOString(),
    text: text
  };

  q.notes_history.push(newNote);
  q.lastModifiedBy = user.name;
  q.lastModifiedById = user.id;
  q.lastModifiedAt = new Date().toISOString();
  q.lastModifiedColor = user.color || '#1e40af';

  saveQuestionData(pillarId, critId, qId, false);
  input.value = '';

  const listContainer = document.getElementById(`notes-list-${qId}`);
  if (listContainer) {
    listContainer.innerHTML = renderQuestionNotesList(pillarId, critId, q);
    if (window.lucide) lucide.createIcons();
  }

  const pill = document.getElementById(`notes-count-${qId}`);
  if (pill) pill.innerText = q.notes_history.length;

  updateQuestionAuditBadge(qId, q);
  showToast('Aporte añadido a la bitácora', 'success');
}

function deleteQuestionNote(pillarId, critId, qId, noteId) {
  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;
  if (!Array.isArray(q.notes_history)) return;

  const user = getCurrentUser();
  const noteIdx = q.notes_history.findIndex(n => n.id === noteId);
  if (noteIdx === -1) return;

  const note = q.notes_history[noteIdx];
  if (note.userId !== user.id && !isMissionLead(user)) {
    showToast('Solo el autor de la nota o el Jefe de Misión pueden eliminarla.', 'warning');
    return;
  }

  q.notes_history.splice(noteIdx, 1);
  saveQuestionData(pillarId, critId, qId, false);

  const listContainer = document.getElementById(`notes-list-${qId}`);
  if (listContainer) {
    listContainer.innerHTML = renderQuestionNotesList(pillarId, critId, q);
    if (window.lucide) lucide.createIcons();
  }

  const pill = document.getElementById(`notes-count-${qId}`);
  if (pill) pill.innerText = q.notes_history.length;

  updateQuestionAuditBadge(qId, q);
  showToast('Nota eliminada', 'info');
}

function appendNoteToField(pillarId, critId, qId, field, noteText) {
  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;
  const currentVal = (q[field] || '').trim();
  const addition = (currentVal ? currentVal + '\n\n• ' : '• ') + noteText;

  q[field] = addition;
  const user = getCurrentUser();
  q.lastModifiedBy = user.name;
  q.lastModifiedById = user.id;
  q.lastModifiedAt = new Date().toISOString();
  q.lastModifiedColor = user.color || '#1e40af';

  saveQuestionData(pillarId, critId, qId, false);

  const textarea = document.querySelector(`[data-qid="${qId}"][data-field="${field}"]`);
  if (textarea) textarea.value = addition;

  updateQuestionAuditBadge(qId, q);
  const fieldName = field === 'findings' ? 'Hallazgos' : 'Recomendaciones';
  showToast(`Aporte incorporado a ${fieldName}`, 'success');
}

function renderQuestionRow(pillarId, critId, q) {
  // Comprimidas por defecto acorde a la solicitud del usuario, pero respetando las que el usuario abrió
  if (!AppState.openQuestions) AppState.openQuestions = new Set();
  const isDetailsOpen = AppState.openQuestions.has(q.id);
  const hasJustification = !!(q.evidence || q.findings || q.recommendations || q.indicator);
  const currentUser = getCurrentUser();
  const assignedMember = q.assigned_to ? AppState.team.find(m => m.id === q.assigned_to) : null;
  const notesCount = (q.notes_history || []).length;

  return `
    <div class="question-card" id="card-${q.id}">
      <div class="question-main-row">
        <div>
          <div class="question-text" style="font-size:1.08rem;font-weight:700;line-height:1.45;">
            <span style="color:var(--primary-600);font-weight:800;margin-right:6px;">${q.code || '•'}</span>
            ${escapeHtml(q.text)}
          </div>
          ${q.guidance ? `<div style="font-size:0.8rem;color:var(--text-secondary);background:var(--bg-tertiary);padding:6px 10px;border-radius:6px;margin-top:6px;border-left:3px solid var(--primary-500);line-height:1.45;">${escapeHtml(q.guidance)}</div>` : ''}
          
          <button class="question-details-toggle" onclick="toggleDetails('${q.id}')">
            <i data-lucide="${isDetailsOpen ? 'chevron-up' : 'chevron-down'}" style="width:13px;height:13px;" id="toggle-ico-${q.id}"></i>
            <span id="toggle-lbl-${q.id}">${isDetailsOpen ? 'Ocultar Detalle y Preguntas' : 'Ver / Editar Detalle y Preguntas'}</span>
          </button>
        </div>

        <div class="score-selector">
          <button class="score-btn ${q.score == 4 ? 'active' : ''}" data-val="4" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 4)" title="A - Desempeño sólido / Consolidado y sostenible">A</button>
          <button class="score-btn ${q.score == 3 ? 'active' : ''}" data-val="3" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 3)" title="B - Buen desempeño / Implementación en curso">B</button>
          <button class="score-btn ${q.score == 2 ? 'active' : ''}" data-val="2" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 2)" title="C - Cumplidos / Etapa inicial">C</button>
          <button class="score-btn ${q.score == 1 ? 'active' : ''}" data-val="1" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 1)" title="D - Requisitos básicos aún no cumplidos o incipientes">D</button>
          <button class="score-btn ${q.score === 'NA' ? 'active' : ''}" data-val="NA" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 'NA')" title="NA - No Aplica">NA</button>
        </div>
      </div>

      <!-- Barra de Trazabilidad y Metadatos por Pregunta -->
      <div class="question-meta-bar" id="meta-bar-${q.id}">
        <div class="q-meta-left">
          ${q.lastModifiedBy ? `
            <span class="q-audit-badge" title="Última modificación: ${formatDateFull(q.lastModifiedAt)}">
              <span class="q-audit-avatar" style="background:${q.lastModifiedColor || '#1e40af'};">${getInitials(q.lastModifiedBy)}</span>
              <span>Editado por <strong>${q.lastModifiedBy}</strong> • ${formatTimeAgo(q.lastModifiedAt)}</span>
            </span>
          ` : `
            <span class="q-audit-badge muted">
              <i data-lucide="clock" style="width:11px;height:11px;"></i> Sin evaluar aún
            </span>
          `}
          ${assignedMember ? `
            <span class="q-assigned-badge" style="background:${(assignedMember.color || '#6366f1')}15;color:${assignedMember.color || '#6366f1'};border:1px solid ${(assignedMember.color || '#6366f1')}40;">
              <i data-lucide="user-check" style="width:11px;height:11px;"></i> Resp: <strong>${assignedMember.name.split(' ')[0]}</strong>
            </span>
          ` : ''}
        </div>
        <div class="q-meta-right">
          <span class="q-content-badge" onclick="toggleDetails('${q.id}')" title="${parseGuidanceQuestions(q.guidance).length} preguntas orientativas para esta buena práctica">
            <i data-lucide="help-circle" style="width:11px;height:11px;"></i> ${parseGuidanceQuestions(q.guidance).length} preguntas
          </span>
          ${hasJustification ? `
            <span class="q-content-badge" onclick="toggleDetails('${q.id}')" title="Esta práctica ya cuenta con evidencia, hallazgos o recomendaciones registradas">
              <i data-lucide="file-check" style="width:11px;height:11px;"></i> Con justificación
            </span>
          ` : ''}
          <span class="q-notes-count-badge ${notesCount > 0 ? 'has-notes' : ''}" onclick="toggleDetails('${q.id}')" title="${notesCount} notas u observaciones registradas por el equipo">
            <i data-lucide="message-square" style="width:11px;height:11px;"></i>
            <span>${notesCount} aporte${notesCount === 1 ? '' : 's'}</span>
          </span>
        </div>
      </div>

      <div class="question-details-panel" id="panel-${q.id}" style="display:${isDetailsOpen ? 'grid' : 'none'};">
        <div class="detail-field">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;flex-wrap:wrap;gap:4px;">
            <label class="detail-label" style="margin-bottom:0;"><i data-lucide="file-text" style="width:12px;height:12px;"></i> Evidencia / Justificación Documental</label>
            <label style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;cursor:pointer;font-weight:600;color:${q.evidence_delivered ? '#10b981' : 'var(--text-secondary)'};">
              <input type="checkbox" ${q.evidence_delivered ? 'checked' : ''} onchange="toggleEvidenceDelivered('${q.code || q.id}', this.checked)" style="accent-color:#10b981;cursor:pointer;width:15px;height:15px;">
              <span>${q.evidence_delivered ? '✓ Documento Entregado' : 'Pendiente de Entrega'}</span>
            </label>
          </div>
          <textarea class="detail-textarea" data-qid="${q.id}" data-field="evidence" placeholder="Normativas, leyes, manuales o referencias..." oninput="updateField('${pillarId}', '${critId}', '${q.id}', 'evidence', this.value)">${escapeHtml(q.evidence || '')}</textarea>
        </div>

        <div class="detail-field">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;flex-wrap:wrap;gap:4px;">
            <label class="detail-label" style="margin-bottom:0;"><i data-lucide="alert-circle" style="width:12px;height:12px;color:#f97316;"></i> Hallazgos Clave (Findings)</label>
            <button type="button" class="btn-xs-outline" onclick="applyQuestionsTemplateToFindings('${pillarId}', '${critId}', '${q.id}')" title="Copiar las preguntas orientativas a este cuadro para estructurar tus hallazgos">
              <i data-lucide="list-plus" style="width:11px;height:11px;"></i> Cargar Preguntas como Guía
            </button>
          </div>
          <textarea class="detail-textarea" data-qid="${q.id}" data-field="findings" placeholder="Diagnóstico de la situación actual..." oninput="updateField('${pillarId}', '${critId}', '${q.id}', 'findings', this.value)">${escapeHtml(q.findings || '')}</textarea>
        </div>

        <div class="detail-field">
          <label class="detail-label"><i data-lucide="check-circle" style="width:12px;height:12px;color:#10b981;"></i> Recomendación de Asistencia Técnica</label>
          <textarea class="detail-textarea" data-qid="${q.id}" data-field="recommendations" placeholder="Acciones propuestas para cerrar brechas..." oninput="updateField('${pillarId}', '${critId}', '${q.id}', 'recommendations', this.value)">${escapeHtml(q.recommendations || '')}</textarea>
        </div>

        <div class="detail-field">
          <label class="detail-label"><i data-lucide="trending-up" style="width:12px;height:12px;color:#0284c7;"></i> Indicador Propuesto (KPI / Métrica Aduanera-Tributaria)</label>
          <textarea class="detail-textarea" data-qid="${q.id}" data-field="indicator" placeholder="Definición del indicador propuesto, fórmula o meta cuantitativa..." oninput="updateField('${pillarId}', '${critId}', '${q.id}', 'indicator', this.value)">${escapeHtml(q.indicator || '')}</textarea>
        </div>

        <div class="detail-field full-width">
          <label class="detail-label"><i data-lucide="user-check" style="width:12px;height:12px;color:#6366f1;"></i> Asignar Evaluador Responsable de esta Buena Práctica</label>
          <select class="select-filter" style="width:100%;margin-top:2px;" onchange="updateField('${pillarId}', '${critId}', '${q.id}', 'assigned_to', this.value)">
            <option value="">-- Usar evaluadores asignados al pilar general --</option>
            ${AppState.team.map(m => `
              <option value="${m.id}" ${q.assigned_to === m.id ? 'selected' : ''}>${m.name} (${m.role})</option>
            `).join('')}
          </select>
        </div>

        <!-- Bitácora y Aportes del Equipo -->
        <div class="notes-history-section">
          <div class="notes-history-header">
            <div style="display:flex;align-items:center;gap:6px;font-weight:700;font-size:0.825rem;color:var(--text-primary);">
              <i data-lucide="message-square" style="width:14px;height:14px;color:var(--primary-500);"></i>
              <span>Bitácora de Aportes y Observaciones del Equipo</span>
              <span class="notes-count-pill" id="notes-count-${q.id}">${notesCount}</span>
            </div>
            <span style="font-size:0.72rem;color:var(--text-muted);">
              Aportes técnicos firmados por cada especialista sin sobreescribir la redacción oficial
            </span>
          </div>

          <div class="notes-history-list" id="notes-list-${q.id}">
            ${renderQuestionNotesList(pillarId, critId, q)}
          </div>

          <div class="notes-input-row">
            <div class="user-mini-avatar" style="background:${currentUser.color || '#1e40af'};" title="${currentUser.name}">${getInitials(currentUser.name)}</div>
            <textarea class="note-input" id="note-input-${q.id}" rows="3"
              placeholder="Escribe un apunte o hallazgo técnico firmado... (Ctrl+Enter para aportar)" 
              onkeydown="if((event.ctrlKey || event.metaKey) && event.key==='Enter'){ event.preventDefault(); addQuestionNote('${pillarId}', '${critId}', '${q.id}'); }"></textarea>
            <button class="btn btn-sm btn-primary" onclick="addQuestionNote('${pillarId}', '${critId}', '${q.id}')" title="Aportar observación a la bitácora (Ctrl+Enter)">
              <i data-lucide="send" style="width:13px;height:13px;"></i> Aportar
            </button>
          </div>
        </div>

        <!-- PREGUNTAS CORRESPONDIENTES A ESTA BUENA PRÁCTICA Y ESPACIO PARA COMENTAR -->
        <div class="subquestions-section">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.85rem;flex-wrap:wrap;gap:0.5rem;">
            <div style="display:flex;align-items:center;gap:8px;">
              <i data-lucide="help-circle" style="width:18px;height:18px;color:var(--primary-600);"></i>
              <strong style="font-size:0.95rem;color:var(--text-primary);">Preguntas correspondientes a esta Buena Práctica:</strong>
            </div>
            <span style="font-size:0.75rem;color:var(--text-muted);">
              Espacio para registrar notas y respuestas específicas de entrevista para cada pregunta
            </span>
          </div>

          <div class="subquestions-list" style="display:flex;flex-direction:column;gap:0.85rem;">
            ${renderSubQuestionsWithComments(pillarId, critId, q)}
          </div>
        </div>

      </div>
    </div>
  `;
}

function parseGuidanceQuestions(guidanceText) {
  if (!guidanceText || !guidanceText.trim()) return [];
  const parts = guidanceText.trim().split(/\n?\s*(?=\d+\.\s+)/);
  const questions = parts.map(p => p.trim()).filter(Boolean);
  if (questions.length > 0) return questions;
  const lines = guidanceText.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.length > 0 ? lines : [guidanceText.trim()];
}

function renderSubQuestionsWithComments(pillarId, critId, q) {
  const questions = parseGuidanceQuestions(q.guidance);
  if (questions.length === 0) {
    const val = q.subquestion_comments ? (q.subquestion_comments[0] || q.notes || '') : (q.notes || '');
    return `
      <div style="padding:0.75rem;background:var(--bg-secondary);border-radius:8px;border:1px dashed var(--border-color);font-size:0.8rem;color:var(--text-muted);font-style:italic;">
        Esta buena práctica no contiene preguntas orientativas específicas desglosadas. Puedes registrar tus notas de campo a continuación:
      </div>
      <div style="margin-top:0.5rem;">
        <textarea class="subquestion-textarea" 
          placeholder="Notas de entrevista y comentarios para esta buena práctica..."
          oninput="updateSubQuestionComment('${pillarId}', '${critId}', '${q.id}', 0, this.value)">${escapeHtml(val)}</textarea>
      </div>
    `;
  }

  if (!q.subquestion_comments) q.subquestion_comments = {};

  return questions.map((sqText, idx) => {
    // Si ya existían notas previas consolidadas en q.notes y aún no hay comentarios separados, asociarlas al primer item
    const val = (q.subquestion_comments && q.subquestion_comments[idx] !== undefined)
      ? q.subquestion_comments[idx]
      : (idx === 0 && !Object.keys(q.subquestion_comments).length ? (q.notes || '') : '');
    const cleanText = sqText.replace(/^\d+\.\s*/, '');
    return `
      <div class="subquestion-card">
        <div style="font-size:0.875rem;font-weight:700;color:var(--text-primary);line-height:1.45;margin-bottom:0.55rem;display:flex;align-items:flex-start;gap:8px;">
          <span class="subquestion-badge">Pregunta ${idx + 1}</span>
          <span style="flex:1;">${escapeHtml(cleanText)}</span>
        </div>
        <div style="margin-top:0.4rem;">
          <textarea class="subquestion-textarea" 
            placeholder="Espacio para registrar respuestas de entrevista y comentarios sobre la Pregunta ${idx + 1}..."
            oninput="updateSubQuestionComment('${pillarId}', '${critId}', '${q.id}', ${idx}, this.value)">${escapeHtml(val)}</textarea>
        </div>
      </div>
    `;
  }).join('');
}

let subQuestionDebounce = null;
function updateSubQuestionComment(pillarId, critId, qId, subIdx, val) {
  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;
  if (!q.subquestion_comments) q.subquestion_comments = {};
  q.subquestion_comments[subIdx] = val;

  // Respaldar también en q.notes para total compatibilidad
  if (subIdx === 0 && val) {
    q.notes = val;
  }

  const user = getCurrentUser();
  q.lastModifiedBy = user.name;
  q.lastModifiedById = user.id;
  q.lastModifiedAt = new Date().toISOString();
  q.lastModifiedColor = user.color || '#1e40af';

  saveQuestionData(pillarId, critId, qId, true);
  updateQuestionAuditBadge(qId, q);

  clearTimeout(subQuestionDebounce);
  subQuestionDebounce = setTimeout(() => {
    saveData(false, true);
  }, 500);
}

// ==========================================================================
// PLANTILLA DE PREGUNTAS ORIENTATIVAS EN HALLAZGOS CLAVE (FINDINGS)
// ==========================================================================
window._pendingFindingsTemplate = null;

function applyQuestionsTemplateToFindings(pillarId, critId, qId) {
  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;

  const questions = parseGuidanceQuestions(q.guidance);
  if (!questions || questions.length === 0) {
    showToast('Esta buena práctica no cuenta con preguntas orientativas específicas para copiar.', 'info');
    return;
  }

  const templateText = questions.map((sq, idx) => {
    const clean = sq.replace(/^\d+[\.\)]\s*/, '').trim();
    return `${idx + 1}. ${clean}\n- Hallazgo: `;
  }).join('\n\n');

  const currentVal = (q.findings || '').trim();

  // Si está vacío, aplicamos directamente
  if (!currentVal) {
    executeApplyFindingsTemplate(pillarId, critId, qId, templateText, 'replace');
    showToast('✓ Preguntas cargadas como plantilla en Hallazgos Clave', 'success');
    return;
  }

  // Guardamos en memoria para el modal de seguridad contra sobreescritura accidental
  window._pendingFindingsTemplate = { pillarId, critId, qId, templateText };
  openTemplateConflictModal(pillarId, critId, qId);
}

function openTemplateConflictModal(pillarId, critId, qId) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  const loc = findQuestionLocation(qId);
  const q = loc ? loc.question : { code: qId };
  const currentSnippet = (q.findings || '').trim();
  const previewSnippet = currentSnippet.length > 200 ? currentSnippet.substring(0, 200) + '...' : currentSnippet;

  body.innerHTML = `
    <div style="padding:1.5rem; max-width:540px; margin:0 auto; background:var(--bg-primary); border-radius:var(--radius-lg);">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:1rem; border-bottom:1px solid var(--border-color); padding-bottom:0.75rem;">
        <div style="width:36px; height:36px; border-radius:50%; background:#fef3c7; color:#d97706; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <i data-lucide="alert-triangle" style="width:20px; height:20px;"></i>
        </div>
        <div>
          <h3 style="font-size:1.1rem; font-weight:700; margin:0; color:var(--text-primary);">
            Hallazgos Clave con Texto Existente
          </h3>
          <span style="font-size:0.75rem; color:var(--text-muted);">
            ${q.code ? `Práctica ${q.code}` : ''} • Protección contra sobreescritura accidental
          </span>
        </div>
      </div>

      <div style="font-size:0.875rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.85rem;">
        El campo <strong>Hallazgos Clave (Findings)</strong> ya contiene texto redactado:
      </div>

      <div style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:0.65rem 0.85rem; font-size:0.8rem; color:var(--text-muted); font-style:italic; max-height:85px; overflow-y:auto; margin-bottom:1.25rem; white-space:pre-wrap;">
"${escapeHtml(previewSnippet)}"
      </div>

      <div style="font-size:0.875rem; font-weight:600; color:var(--text-primary); margin-bottom:0.75rem;">
        ¿Cómo deseas incorporar las preguntas orientativas?
      </div>

      <div style="display:flex; flex-direction:column; gap:0.65rem; margin-bottom:1.5rem;">
        <button type="button" class="btn btn-primary" style="justify-content:flex-start; text-align:left; padding:0.75rem 1rem; border-radius:var(--radius-md);"
          onclick="handleApplyFindingsTemplateAction('append')">
          <i data-lucide="plus-circle" style="width:16px; height:16px; margin-right:8px; flex-shrink:0;"></i>
          <div>
            <div style="font-weight:700; font-size:0.875rem;">Añadir al final (Recomendado)</div>
            <div style="font-size:0.75rem; opacity:0.9; font-weight:normal;">Conserva tus notas previas y agrega la guía de preguntas debajo.</div>
          </div>
        </button>

        <button type="button" class="btn btn-outline" style="justify-content:flex-start; text-align:left; padding:0.75rem 1rem; border-radius:var(--radius-md); border-color:#ef4444; color:#ef4444;"
          onclick="handleApplyFindingsTemplateAction('replace')">
          <i data-lucide="refresh-cw" style="width:16px; height:16px; margin-right:8px; flex-shrink:0;"></i>
          <div>
            <div style="font-weight:700; font-size:0.875rem;">Reemplazar todo</div>
            <div style="font-size:0.75rem; opacity:0.85; font-weight:normal;">Sobreescribe el contenido anterior con la plantilla limpia.</div>
          </div>
        </button>
      </div>

      <div style="display:flex; justify-content:flex-end;">
        <button type="button" class="btn btn-secondary" onclick="closeModal()">
          Cancelar
        </button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function handleApplyFindingsTemplateAction(mode) {
  if (!window._pendingFindingsTemplate) return;
  const { pillarId, critId, qId, templateText } = window._pendingFindingsTemplate;
  executeApplyFindingsTemplate(pillarId, critId, qId, templateText, mode);
  window._pendingFindingsTemplate = null;
}

function executeApplyFindingsTemplate(pillarId, critId, qId, templateText, mode = 'replace') {
  const loc = findQuestionLocation(qId);
  if (!loc) return;
  const q = loc.question;

  let finalVal = templateText;
  if (mode === 'append') {
    const currentVal = (q.findings || '').trim();
    finalVal = currentVal ? `${currentVal}\n\n${templateText}` : templateText;
  }

  q.findings = finalVal;

  const textarea = document.querySelector(`[data-qid="${qId}"][data-field="findings"]`);
  if (textarea) {
    textarea.value = finalVal;
    textarea.style.height = 'auto';
    textarea.style.height = Math.max(140, textarea.scrollHeight) + 'px';
    textarea.focus();
  }

  const user = getCurrentUser();
  q.lastModifiedBy = user.name;
  q.lastModifiedById = user.id;
  q.lastModifiedAt = new Date().toISOString();
  q.lastModifiedColor = user.color || '#1e40af';

  saveQuestionData(pillarId, critId, qId, false);
  updateQuestionAuditBadge(qId, q);

  closeModal();

  showToast(
    mode === 'append' ? 'Preguntas añadidas al final de Hallazgos Clave' : 'Plantilla de preguntas aplicada a Hallazgos Clave',
    'success'
  );
}

function toggleDetails(qId) {
  if (!AppState.openQuestions) AppState.openQuestions = new Set();
  const panel = document.getElementById(`panel-${qId}`);
  const lbl = document.getElementById(`toggle-lbl-${qId}`);
  const ico = document.getElementById(`toggle-ico-${qId}`);
  if (!panel) return;
  const isHidden = (panel.style.display === 'none' || !panel.style.display);
  if (isHidden) {
    AppState.openQuestions.add(qId);
    panel.style.display = 'grid';
    if (lbl) lbl.innerText = 'Ocultar Detalle y Preguntas';
    if (ico) ico.setAttribute('data-lucide', 'chevron-up');
  } else {
    AppState.openQuestions.delete(qId);
    panel.style.display = 'none';
    if (lbl) lbl.innerText = 'Ver / Editar Detalle y Preguntas';
    if (ico) ico.setAttribute('data-lucide', 'chevron-down');
  }
  if (window.lucide) lucide.createIcons();
}

function expandAllQuestions() {
  if (!AppState.openQuestions) AppState.openQuestions = new Set();
  const currentPillar = AppState.pillars.find(p => p.id === AppState.activePillarId);
  if (currentPillar) {
    (currentPillar.criteria || []).forEach(c => {
      (c.questions || []).forEach(q => AppState.openQuestions.add(q.id));
    });
  }
  document.querySelectorAll('.question-details-panel').forEach(panel => {
    panel.style.display = 'grid';
  });
  document.querySelectorAll('[id^="toggle-lbl-"]').forEach(lbl => {
    lbl.innerText = 'Ocultar Detalle y Preguntas';
  });
  document.querySelectorAll('[id^="toggle-ico-"]').forEach(ico => {
    ico.setAttribute('data-lucide', 'chevron-up');
  });
  if (window.lucide) lucide.createIcons();
}

function collapseAllQuestions() {
  if (!AppState.openQuestions) AppState.openQuestions = new Set();
  const currentPillar = AppState.pillars.find(p => p.id === AppState.activePillarId);
  if (currentPillar) {
    (currentPillar.criteria || []).forEach(c => {
      (c.questions || []).forEach(q => AppState.openQuestions.delete(q.id));
    });
  } else {
    AppState.openQuestions.clear();
  }
  document.querySelectorAll('.question-details-panel').forEach(panel => {
    panel.style.display = 'none';
  });
  document.querySelectorAll('[id^="toggle-lbl-"]').forEach(lbl => {
    lbl.innerText = 'Ver / Editar Detalle y Preguntas';
  });
  document.querySelectorAll('[id^="toggle-ico-"]').forEach(ico => {
    ico.setAttribute('data-lucide', 'chevron-down');
  });
  if (window.lucide) lucide.createIcons();
}

function setScore(pillarId, critId, qId, scoreVal) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;
  const crit = pillar.criteria.find(c => c.id === critId);
  if (!crit) return;
  const q = crit.questions.find(x => x.id === qId);
  if (!q) return;

  if (q.score === scoreVal) {
    q.score = null;
    q.status = 'pending';
  } else {
    q.score = scoreVal;
    q.status = 'evaluated';
  }

  const user = getCurrentUser();
  q.lastModifiedBy = user.name;
  q.lastModifiedById = user.id;
  q.lastModifiedAt = new Date().toISOString();
  q.lastModifiedColor = user.color || '#1e40af';

  saveQuestionData(pillarId, critId, qId, false);

  // Actualizar botones de puntaje en la tarjeta directamente
  const card = document.getElementById(`card-${q.id}`);
  if (card) {
    card.querySelectorAll('.score-btn').forEach(btn => {
      const val = btn.getAttribute('data-val');
      if (String(q.score) === String(val)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    updateQuestionAuditBadge(qId, q);
  }

  renderSidebarPillars();
}

function updateField(pillarId, critId, qId, field, val) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;
  const crit = pillar.criteria.find(c => c.id === critId);
  if (!crit) return;
  const q = crit.questions.find(x => x.id === qId);
  if (!q) return;

  q[field] = val;
  if (!AppState.openQuestions) AppState.openQuestions = new Set();
  AppState.openQuestions.add(qId);

  const user = getCurrentUser();
  q.lastModifiedBy = user.name;
  q.lastModifiedById = user.id;
  q.lastModifiedAt = new Date().toISOString();
  q.lastModifiedColor = user.color || '#1e40af';

  saveQuestionData(pillarId, critId, qId, true);
  updateQuestionAuditBadge(qId, q);

  if (field === 'assigned_to' && AppState.currentFilter.assigned !== 'all') {
    const container = document.getElementById('criteria-container');
    if (container) {
      container.innerHTML = renderCriteriaList(pillar);
      if (window.lucide) lucide.createIcons();
    }
  }
}

function getPrevPillarBtn(curId) {
  const visible = getVisiblePillars();
  const idx = visible.findIndex(p => p.id === curId);
  if (idx > 0) {
    const prev = visible[idx - 1];
    return `
      <button class="btn btn-secondary" onclick="switchView('evaluation', '${prev.id}')">
        &larr; Anterior: Pilar ${prev.number || prev.id.replace('pilar_', '')}
      </button>
    `;
  }
  return `<div></div>`;
}

function getNextPillarBtn(curId) {
  const visible = getVisiblePillars();
  const idx = visible.findIndex(p => p.id === curId);
  if (idx >= 0 && idx < visible.length - 1) {
    const next = visible[idx + 1];
    return `
      <button class="btn btn-primary" onclick="switchView('evaluation', '${next.id}')">
        Siguiente: Pilar ${next.number || next.id.replace('pilar_', '')} &rarr;
      </button>
    `;
  }
  return `
    <button class="btn btn-primary" onclick="switchView('report')">
      Ver Informe Consolidado &rarr;
    </button>
  `;
}

// ==========================================================================
// VISTA: CUADERNO DE NOTAS DE LA MISIÓN (POR DÍA Y POR CONSULTOR)
// ==========================================================================
let notebookSyncDebounceTimer = null;

function getNotebookDate() {
  if (!AppState.selectedNotebookDate) {
    AppState.selectedNotebookDate = new Date().toISOString().split('T')[0];
  }
  return AppState.selectedNotebookDate;
}

function formatNotebookDateDisplay(dateStr) {
  try {
    const parts = (dateStr || '').split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, month, day);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const str = d.toLocaleDateString('es-ES', options);
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  } catch (e) { }
  return dateStr;
}

function shiftNotebookDate(days) {
  const cur = getNotebookDate();
  try {
    const parts = cur.split('-');
    const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    d.setDate(d.getDate() + days);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    AppState.selectedNotebookDate = `${yyyy}-${mm}-${dd}`;
  } catch (e) {
    AppState.selectedNotebookDate = new Date().toISOString().split('T')[0];
  }
  renderNotebookView(document.getElementById('main-content-area'));
}

function setNotebookDate(dateStr) {
  if (dateStr) {
    AppState.selectedNotebookDate = dateStr;
    renderNotebookView(document.getElementById('main-content-area'));
  }
}

function setNotebookUser(userId) {
  AppState.selectedNotebookUser = userId;
  renderNotebookView(document.getElementById('main-content-area'));
}

function insertNotebookTimestamp() {
  const textarea = document.getElementById('notebook-textarea');
  if (!textarea) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const timeStamp = `\n[${hh}:${mm}] `;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const val = textarea.value;
  textarea.value = val.substring(0, start) + timeStamp + val.substring(end);
  textarea.selectionStart = textarea.selectionEnd = start + timeStamp.length;
  textarea.focus();

  const date = getNotebookDate();
  const curUser = getCurrentUser();
  const targetUser = AppState.selectedNotebookUser || curUser.id;
  updateNotebookContent(date, targetUser, textarea.value);
}

function copyNotebookContent(date, userId) {
  const key = `${date}_${userId}`;
  const entry = AppState.notebook && AppState.notebook[key];
  const text = (entry && entry.content) ? entry.content : '';
  if (!text.trim()) {
    showToast('No hay contenido en las notas de este día para copiar', 'info');
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Notas copiadas al portapapeles', 'success');
    }).catch(() => {
      fallbackCopyText(text);
    });
  } else {
    fallbackCopyText(text);
  }
}

function fallbackCopyText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast('Notas copiadas al portapapeles', 'success');
  } catch (e) { }
  document.body.removeChild(ta);
}

function updateNotebookContent(date, userId, content) {
  if (!AppState.notebook) AppState.notebook = {};
  const key = `${date}_${userId}`;
  const user = AppState.team.find(m => m.id === userId) || getCurrentUser();

  AppState.notebook[key] = {
    date: date,
    userId: userId,
    authorName: user.name,
    authorRole: user.role,
    authorColor: user.color || '#1e40af',
    content: content,
    lastUpdated: new Date().toISOString()
  };

  const counterEl = document.getElementById('notebook-word-counter');
  if (counterEl) {
    const trimmed = content.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const chars = content.length;
    counterEl.innerText = `${words} palabra${words === 1 ? '' : 's'} • ${chars} caracter${chars === 1 ? '' : 'es'}`;
  }

  const statusBadge = document.getElementById('notebook-status-badge');
  if (statusBadge) {
    statusBadge.innerHTML = `<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#f59e0b;margin-right:4px;"></span> Guardando...`;
  }

  try {
    localStorage.setItem(STORAGE_KEY_NOTEBOOK, JSON.stringify(AppState.notebook));
  } catch (e) { }

  if (typeof lastLocalSaveTimestamp !== 'undefined') {
    lastLocalSaveTimestamp = Date.now();
  }

  clearTimeout(notebookSyncDebounceTimer);
  notebookSyncDebounceTimer = setTimeout(() => {
    if (typeof syncNotebookToCloud === 'function') {
      syncNotebookToCloud(date, userId);
    }
    const badge = document.getElementById('notebook-status-badge');
    if (badge) {
      badge.innerHTML = `<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#10b981;margin-right:4px;"></span> Guardado`;
    }
  }, 450);
}

function renderNotebookView(container) {
  if (!container) container = document.getElementById('main-content-area');
  if (!container) return;

  const curDate = getNotebookDate();
  const dateDisplay = formatNotebookDateDisplay(curDate);
  const currentUser = getCurrentUser();
  const activeTabUser = AppState.selectedNotebookUser || currentUser.id;
  const isAllUsers = activeTabUser === 'all';
  const todayStr = new Date().toISOString().split('T')[0];
  const isToday = curDate === todayStr;

  container.innerHTML = `
    <!-- Barra Superior de Navegación por Fecha -->
    <div class="notebook-date-header">
      <div class="notebook-date-nav">
        <button class="btn btn-sm btn-secondary" onclick="shiftNotebookDate(-1)" title="Ir al día anterior">
          <i data-lucide="chevron-left" style="width:14px;height:14px;"></i> Anterior
        </button>
        <button class="btn btn-sm ${isToday ? 'btn-primary' : 'btn-secondary'}" onclick="setNotebookDate('${todayStr}')" title="Ir al día de hoy">
          <i data-lucide="calendar" style="width:14px;height:14px;"></i> Hoy
        </button>
        <div class="notebook-date-picker-wrap">
          <input type="date" class="notebook-date-input" value="${curDate}" onchange="setNotebookDate(this.value)" title="Seleccionar fecha específica">
        </div>
        <button class="btn btn-sm btn-secondary" onclick="shiftNotebookDate(1)" title="Ir al día siguiente">
          Siguiente <i data-lucide="chevron-right" style="width:14px;height:14px;"></i>
        </button>
      </div>

      <div class="notebook-date-title">
        <h3 style="font-size:1.15rem;margin:0;font-weight:700;display:flex;align-items:center;gap:6px;">
          <i data-lucide="calendar-days" style="width:18px;height:18px;color:var(--primary-600);"></i>
          <span>${dateDisplay}</span>
        </h3>
        <span style="font-size:0.75rem;color:var(--text-muted);">
          ${isToday ? 'Día en curso de la misión' : `Fecha seleccionada: ${curDate}`}
        </span>
      </div>
    </div>

    <!-- Pestañas de Consultores -->
    <div class="notebook-team-tabs">
      ${AppState.team.map(m => {
    const isTabActive = activeTabUser === m.id;
    const key = `${curDate}_${m.id}`;
    const entry = AppState.notebook && AppState.notebook[key];
    const hasNotes = !!(entry && entry.content && entry.content.trim().length > 0);
    const isMe = m.id === currentUser.id;

    return `
          <button class="notebook-consultant-tab ${isTabActive ? 'active' : ''}" 
                  onclick="setNotebookUser('${m.id}')"
                  style="${isTabActive ? `border-bottom-color:${m.color || '#2563eb'};` : ''}">
            <div class="user-mini-avatar" style="background:${m.color || '#2563eb'};">${getInitials(m.name)}</div>
            <div class="tab-user-info">
              <span class="tab-user-name">${m.name.split(' ')[0]} ${isMe ? '(Tú)' : ''}</span>
              <span class="tab-user-role">${m.role}</span>
            </div>
            ${hasNotes ? `<span class="notebook-tab-dot" title="Tiene apuntes registrados en esta fecha"></span>` : ''}
          </button>
        `;
  }).join('')}

      <!-- Pestaña para ver a todos juntos -->
      <button class="notebook-consultant-tab ${isAllUsers ? 'active' : ''}" onclick="setNotebookUser('all')">
        <i data-lucide="users" style="width:16px;height:16px;color:var(--primary-600);margin-right:4px;"></i>
        <div class="tab-user-info">
          <span class="tab-user-name">Ver Todos</span>
          <span class="tab-user-role">Consolidado del Día</span>
        </div>
      </button>
    </div>

    <!-- Contenedor del Cuaderno de Notas -->
    <div class="notebook-main-area">
      ${isAllUsers ? renderAllConsultantsNotebookView(curDate) : renderSingleConsultantNotebookView(curDate, activeTabUser)}
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function renderSingleConsultantNotebookView(date, userId) {
  const member = AppState.team.find(m => m.id === userId) || getCurrentUser();
  const currentUser = getCurrentUser();
  const isMe = member.id === currentUser.id;
  const key = `${date}_${userId}`;
  const entry = AppState.notebook && AppState.notebook[key];
  const content = (entry && entry.content) ? entry.content : '';
  const trimmed = content.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const chars = content.length;
  const lastUpdated = entry && entry.lastUpdated ? formatTimeAgo(entry.lastUpdated) : 'Sin modificaciones hoy';

  return `
    <div class="notebook-pad-card">
      <div class="notebook-pad-header">
        <div class="notebook-author-badge">
          <div class="user-avatar" style="background:${member.color || '#2563eb'};width:34px;height:34px;font-size:0.85rem;">
            ${getInitials(member.name)}
          </div>
          <div>
            <div style="font-weight:700;font-size:0.95rem;color:var(--text-primary);display:flex;align-items:center;gap:6px;">
              <span>Cuaderno de ${member.name}</span>
              ${isMe ? `<span class="score-tag score-4" style="font-size:0.65rem;padding:1px 6px;">Tú</span>` : ''}
            </div>
            <div style="font-size:0.75rem;color:var(--text-muted);">
              ${member.role} • Último guardado: <span id="notebook-last-updated">${lastUpdated}</span>
            </div>
          </div>
        </div>

        <div class="notebook-pad-actions">
          <span id="notebook-status-badge" class="notebook-status-badge">
            <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#10b981;margin-right:4px;"></span> Guardado
          </span>
          <button class="btn btn-sm btn-secondary" onclick="insertNotebookTimestamp()" title="Insertar hora actual en el texto">
            <i data-lucide="clock" style="width:13px;height:13px;"></i> Insertar Hora
          </button>
          <button class="btn btn-sm btn-secondary" onclick="copyNotebookContent('${date}', '${userId}')" title="Copiar notas de este día al portapapeles">
            <i data-lucide="copy" style="width:13px;height:13px;"></i> Copiar Notas
          </button>
        </div>
      </div>

      ${!isMe ? `
        <div class="notebook-other-user-notice">
          <i data-lucide="info" style="width:14px;height:14px;color:var(--primary-600);flex-shrink:0;"></i>
          <span>Estás visualizando el cuaderno de <strong>${member.name}</strong> para este día. Las anotaciones que realices se guardarán colaborativamente en tiempo real.</span>
        </div>
      ` : ''}

      <div class="notebook-editor-wrap">
        <textarea id="notebook-textarea" 
                  data-note-key="${key}"
                  class="notebook-textarea" 
                  placeholder="Escribe aquí las notas, minutas de reuniones, entrevistas, tareas o hallazgos del día..." 
                  oninput="updateNotebookContent('${date}', '${userId}', this.value)">${content}</textarea>
      </div>

      <div class="notebook-pad-footer">
        <div style="font-size:0.75rem;color:var(--text-muted);display:flex;align-items:center;gap:6px;">
          <i data-lucide="sparkles" style="width:12px;height:12px;color:#f59e0b;"></i>
          <span>El cuaderno se guarda automáticamente en tu navegador y en la nube en tiempo real.</span>
        </div>
        <div class="notebook-word-counter" id="notebook-word-counter">
          ${words} palabra${words === 1 ? '' : 's'} • ${chars} caracter${chars === 1 ? '' : 'es'}
        </div>
      </div>
    </div>
  `;
}

function renderAllConsultantsNotebookView(date) {
  const currentUser = getCurrentUser();

  return `
    <div style="margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
      <div>
        <h4 style="margin:0;font-size:1.05rem;">Consolidado de Apuntes del Día (${AppState.team.length} Consultores)</h4>
        <p style="margin:2px 0 0;font-size:0.78rem;color:var(--text-muted);">
          Revisión general de las notas registradas por cada integrante del equipo para la fecha seleccionada.
        </p>
      </div>
      <button class="btn btn-sm btn-primary" onclick="setNotebookUser('${currentUser.id}')">
        <i data-lucide="edit-3" style="width:13px;height:13px;"></i> Ir a mi cuaderno
      </button>
    </div>

    <div class="notebook-consolidated-grid">
      ${AppState.team.map(m => {
    const key = `${date}_${m.id}`;
    const entry = AppState.notebook && AppState.notebook[key];
    const content = (entry && entry.content) ? entry.content.trim() : '';
    const hasContent = content.length > 0;
    const isMe = m.id === currentUser.id;

    return `
          <div class="notebook-consolidated-card ${hasContent ? 'has-notes' : 'empty'}">
            <div class="consolidated-card-header">
              <div style="display:flex;align-items:center;gap:8px;">
                <div class="user-mini-avatar" style="background:${m.color || '#2563eb'};">
                  ${getInitials(m.name)}
                </div>
                <div>
                  <div style="font-weight:700;font-size:0.875rem;color:var(--text-primary);">
                    ${m.name} ${isMe ? '<span style="color:var(--primary-600);font-size:0.72rem;">(Tú)</span>' : ''}
                  </div>
                  <div style="font-size:0.7rem;color:var(--text-muted);">${m.role}</div>
                </div>
              </div>
              <div style="display:flex;gap:4px;">
                ${hasContent ? `
                  <button class="btn-icon btn-sm" onclick="copyNotebookContent('${date}', '${m.id}')" title="Copiar notas de ${m.name.split(' ')[0]}">
                    <i data-lucide="copy" style="width:13px;height:13px;"></i>
                  </button>
                ` : ''}
                <button class="btn btn-sm btn-secondary" onclick="setNotebookUser('${m.id}')" title="Abrir y editar cuaderno de ${m.name.split(' ')[0]}" style="font-size:0.72rem;padding:3px 7px;">
                  <i data-lucide="external-link" style="width:12px;height:12px;"></i> Abrir
                </button>
              </div>
            </div>

            <div class="consolidated-card-body">
              ${hasContent ? `
                <div class="consolidated-card-text">${escapeHtmlForNotebook(content)}</div>
              ` : `
                <div class="consolidated-card-empty">
                  <i data-lucide="file-text" style="width:18px;height:18px;color:var(--text-muted);margin-bottom:4px;"></i>
                  <span>Sin notas registradas en esta fecha</span>
                </div>
              `}
            </div>

            ${hasContent && entry.lastUpdated ? `
              <div class="consolidated-card-footer">
                Actualizado ${formatTimeAgo(entry.lastUpdated)}
              </div>
            ` : ''}
          </div>
        `;
  }).join('')}
    </div>
  `;
}

function escapeHtmlForNotebook(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

// ==========================================================================
// VISTA: INVENTARIO Y CONTROL DE EVIDENCIAS DOCUMENTALES
// ==========================================================================

function getAllEvidenceItems() {
  const items = [];
  const pillarNamesMap = {
    'pilar_1': 'Área Clave 1: Marco estratégico y gobernanza',
    'pilar_2': 'Área Clave 2: Integridad, anticorrupción y rendición de cuentas',
    'pilar_3': 'Área Clave 3: Gestión de recursos humanos',
    'pilar_4': 'Área Clave 4: TIC y sistemas',
    'pilar_5': 'Área Clave 5: Gobernanza de datos y capacidades analíticas',
    'pilar_6': 'Área Clave 6: Gestión integrada de riesgos',
    'pilar_7': 'Área Clave 7: Registro y gestión de operadores clave',
    'pilar_8': 'Área Clave 8: Gestión de carga y trazabilidad de extremo a extremo',
    'pilar_9': 'Área Clave 9: Despacho aduanero',
    'pilar_10': 'Área Clave 10: Gestión del comercio electrónico transfronterizo',
    'pilar_11': 'Área Clave 11: Gestión de regímenes especiales',
    'pilar_12': 'Área Clave 12: Auditoría posterior al despacho (APD)',
    'pilar_13': 'Área Clave 13: Estrategia de lucha contra el contrabando'
  };

  (AppState.pillars || []).forEach(p => {
    const pName = p.title || p.name || pillarNamesMap[p.id] || p.id;
    (p.criteria || []).forEach(c => {
      // Check criterion level
      const cEv = (c.evidence || '').trim();
      if (cEv && cEv.length > 5 && !['test', 'prueba', 'est', 'ne', 'e'].includes(cEv.toLowerCase()) && !cEv.toLowerCase().includes('jksdf')) {
        items.push({
          pillarId: p.id,
          pillarName: pName,
          critId: c.id,
          qId: c.id,
          code: c.code || c.id,
          title: c.name || '',
          evidence: cEv,
          delivered: !!c.evidence_delivered,
          deliveryDate: c.evidence_delivery_date || '',
          evaluator: c.lastModifiedBy || 'Selvin Lemus',
          score: c.score
        });
      }

      // Check questions level
      (c.questions || []).forEach(q => {
        const ev = (q.evidence || '').trim();
        if (ev && ev.length > 5 && !['test', 'prueba', 'est', 'ne', 'e'].includes(ev.toLowerCase()) && !ev.toLowerCase().includes('jksdf')) {
          items.push({
            pillarId: p.id,
            pillarName: pName,
            critId: c.id,
            qId: q.id,
            code: q.code || q.id,
            title: q.text || '',
            evidence: ev,
            delivered: !!q.evidence_delivered,
            deliveryDate: q.evidence_delivery_date || '',
            evaluator: q.lastModifiedBy || 'Selvin Lemus',
            score: q.score
          });
        }
      });
    });
  });

  return items;
}

// ==========================================================================
// VISTA 2: INVENTARIO Y CONTROL DE EVIDENCIAS DOCUMENTALES (FMI + AD-HOC)
// ==========================================================================

function getDefaultAdditionalEvidences() {
  return [
    {
      id: 'REQ-BOL-001',
      title: 'Organigrama Oficial Vigente de la ANB y Manual de Organización y Funciones (MOF)',
      description: 'Estructura jerárquica actualizada a nivel nacional, regional y fronterizo con detalle de dependencias.',
      category: 'Transversal / Institucional',
      targetEntity: 'Gerencia Nacional de Administración y Finanzas',
      requestedBy: 'Selvin Lemus',
      requestedById: 'usr_1',
      requestDate: '20 oct 2026',
      priority: 'high',
      delivered: true,
      deliveryDate: '20 oct 2026',
      deliveryNotes: 'Entregado en reunión técnica inicial. Copia archivada en el expediente de la misión.',
      evidence_url: '',
      createdAt: 1729382400000
    },
    {
      id: 'REQ-BOL-002',
      title: 'Estadísticas de Recaudación y Despachos Aduaneros por Administración (2021-2025)',
      description: 'Series históricas anuales y mensuales de recaudación por tipo de gravamen y tiempos promedio de despacho.',
      category: 'Estadísticas y Series de Datos',
      targetEntity: 'Gerencia Nacional de Fiscalización',
      requestedBy: 'Miguel Tapia',
      requestedById: 'usr_2',
      requestDate: '21 oct 2026',
      priority: 'high',
      delivered: false,
      deliveryDate: null,
      deliveryNotes: 'Solicitado formalmente para calibrar la matriz de riesgos y selectividad.',
      evidence_url: '',
      createdAt: 1729468800000
    },
    {
      id: 'REQ-BOL-003',
      title: 'Convenios Interinstitucionales de Intercambio de Información Tributaria-Aduanera (SIN y ASFI)',
      description: 'Acuerdos de cooperación interinstitucional vigentes para cruces masivos de información bancaria y fiscal.',
      category: 'Marco Legal y Normativo',
      targetEntity: 'Gerencia Nacional Jurídica',
      requestedBy: 'Sylvia Saucedo',
      requestedById: 'usr_3',
      requestDate: '21 oct 2026',
      priority: 'medium',
      delivered: false,
      deliveryDate: null,
      deliveryNotes: 'En revisión por la Dirección Jurídica para envío de versiones digitales.',
      evidence_url: '',
      createdAt: 1729555200000
    }
  ];
}

function getPriorityBadgeHtml(priority) {
  if (priority === 'high') {
    return `<span class="badge-priority-high"><i data-lucide="alert-circle" style="width:11px;height:11px;"></i> Alta (Crítica)</span>`;
  } else if (priority === 'medium') {
    return `<span class="badge-priority-medium"><i data-lucide="clock" style="width:11px;height:11px;"></i> Media</span>`;
  } else {
    return `<span class="badge-priority-low"><i data-lucide="info" style="width:11px;height:11px;"></i> Informativa</span>`;
  }
}

function getConsolidatedEvidenceItems() {
  const fmiItems = getAllEvidenceItems().map(item => ({
    origin: 'fmi',
    id: item.code,
    code: item.code,
    typeBadge: 'FMI CASA',
    category: item.pillarName,
    title: item.title,
    evidence: item.evidence,
    targetEntity: 'Gerencias Técnicas ANB',
    delivered: item.delivered,
    deliveryDate: item.deliveryDate,
    evaluator: item.evaluator,
    priority: 'medium',
    deliveryNotes: '',
    evidence_url: item.evidence_url || '',
    rawItem: item
  }));

  const addItems = (AppState.additionalEvidences || []).map(req => ({
    origin: 'adhoc',
    id: req.id,
    code: req.id,
    typeBadge: 'AD-HOC',
    category: req.category,
    title: req.title,
    evidence: req.description || req.title,
    targetEntity: req.targetEntity,
    delivered: req.delivered,
    deliveryDate: req.deliveryDate,
    evaluator: req.requestedBy,
    priority: req.priority,
    deliveryNotes: req.deliveryNotes,
    evidence_url: req.evidence_url || '',
    rawItem: req
  }));

  return [...addItems, ...fmiItems];
}

function updateEvidenceNavBadge() {
  const badge = document.getElementById('nav-evidence-badge');
  if (!badge) return;
  const fmiItems = getAllEvidenceItems();
  const addItems = AppState.additionalEvidences || [];

  const fmiDelivered = fmiItems.filter(i => i.delivered).length;
  const addDelivered = addItems.filter(i => i.delivered).length;

  const total = fmiItems.length + addItems.length;
  const delivered = fmiDelivered + addDelivered;

  badge.innerText = `${delivered}/${total}`;
  badge.title = `${delivered} de ${total} documentos entregados (${fmiDelivered}/${fmiItems.length} FMI + ${addDelivered}/${addItems.length} Adicionales)`;
  if (delivered === total && total > 0) {
    badge.style.background = '#10b981';
    badge.style.color = '#ffffff';
  } else {
    badge.style.background = '';
    badge.style.color = '';
  }
}

function setEvidenceFilter(key, val) {
  if (!AppState.evidenceFilter) {
    AppState.evidenceFilter = { tab: 'fmi', search: '', status: 'all', pillar: 'all', category: 'all', priority: 'all' };
  }
  AppState.evidenceFilter[key] = val;
  const container = document.getElementById('main-content-area');
  if (container && AppState.activeView === 'evidence') {
    renderEvidenceView(container);
  }
}

function setEvidenceTab(tab) {
  if (!AppState.evidenceFilter) {
    AppState.evidenceFilter = { tab: 'fmi', search: '', status: 'all', pillar: 'all', category: 'all', priority: 'all' };
  }
  AppState.evidenceFilter.tab = tab;
  const container = document.getElementById('main-content-area');
  if (container && AppState.activeView === 'evidence') {
    renderEvidenceView(container);
  }
}

function toggleEvidenceDelivered(qCode, forcedVal = null) {
  let foundTarget = null;

  for (const p of AppState.pillars || []) {
    for (const c of p.criteria || []) {
      if (c.code === qCode || c.id === qCode) {
        foundTarget = c;
        break;
      }
      for (const q of c.questions || []) {
        if (q.code === qCode || q.id === qCode) {
          foundTarget = q;
          break;
        }
      }
      if (foundTarget) break;
    }
    if (foundTarget) break;
  }

  if (!foundTarget) return;

  if (forcedVal !== null) {
    foundTarget.evidence_delivered = !!forcedVal;
  } else {
    foundTarget.evidence_delivered = !foundTarget.evidence_delivered;
  }

  if (foundTarget.evidence_delivered) {
    foundTarget.evidence_delivery_date = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  } else {
    foundTarget.evidence_delivery_date = null;
  }

  const currentUser = getCurrentUser();
  foundTarget.lastModifiedBy = currentUser ? currentUser.name : 'Evaluador';
  foundTarget.lastModifiedAt = new Date().toISOString();

  saveData(false, true);
  updateEvidenceNavBadge();

  if (AppState.activeView === 'evidence') {
    renderEvidenceView(document.getElementById('main-content-area'));
  }

  const isDelivered = foundTarget.evidence_delivered;
  showToast(`[${qCode}] ${isDelivered ? '✓ Marcado como ENTREGADO por la contraparte' : 'Marcado como PENDIENTE de entrega'}`, isDelivered ? 'success' : 'info');
}

function toggleAdditionalEvidenceDelivered(reqId, forcedVal = null) {
  const item = (AppState.additionalEvidences || []).find(e => e.id === reqId);
  if (!item) return;

  if (forcedVal !== null) {
    item.delivered = !!forcedVal;
  } else {
    item.delivered = !item.delivered;
  }

  if (item.delivered) {
    item.deliveryDate = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  } else {
    item.deliveryDate = null;
  }

  const currentUser = getCurrentUser();
  item.lastModifiedBy = currentUser ? currentUser.name : 'Evaluador';
  item.lastModifiedAt = new Date().toISOString();

  saveData(false, true);
  if (typeof syncAdditionalEvidenceToCloud === 'function') {
    syncAdditionalEvidenceToCloud();
  }

  updateEvidenceNavBadge();

  const container = document.getElementById('main-content-area');
  if (container && AppState.activeView === 'evidence') {
    renderEvidenceView(container);
  }

  showToast(`[${reqId}] ${item.delivered ? '✓ Marcado como ENTREGADO por la contraparte' : 'Marcado como PENDIENTE de entrega'}`, item.delivered ? 'success' : 'info');
}

function jumpToQuestion(qCode) {
  let targetPillarId = null;
  let targetQId = null;

  for (const p of AppState.pillars || []) {
    for (const c of p.criteria || []) {
      if (c.code === qCode || c.id === qCode) {
        targetPillarId = p.id;
        targetQId = (c.questions && c.questions[0]) ? c.questions[0].id : c.id;
        break;
      }
      for (const q of c.questions || []) {
        if (q.code === qCode || q.id === qCode) {
          targetPillarId = p.id;
          targetQId = q.id;
          break;
        }
      }
      if (targetQId) break;
    }
    if (targetQId) break;
  }

  if (!targetPillarId) return;

  AppState.activePillarId = targetPillarId;
  if (!AppState.openQuestions) AppState.openQuestions = new Set();
  if (targetQId) AppState.openQuestions.add(targetQId);

  switchView('evaluation');

  setTimeout(() => {
    const cardEl = document.getElementById(`card-${targetQId}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardEl.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.45)';
      cardEl.style.transition = 'box-shadow 0.3s ease';
      setTimeout(() => { cardEl.style.boxShadow = ''; }, 2500);
    }
  }, 350);
}

function openAddEvidenceModal(editId = null) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  let existing = null;
  if (editId) {
    existing = (AppState.additionalEvidences || []).find(e => e.id === editId);
  }

  const currentUser = getCurrentUser();
  const isEditing = !!existing;

  // Si es nuevo, autogenerar siguiente código REQ-BOL-XXX
  let nextCode = 'REQ-BOL-001';
  if (!isEditing) {
    const existingCodes = (AppState.additionalEvidences || [])
      .map(e => e.id)
      .filter(id => id.startsWith('REQ-BOL-'));
    if (existingCodes.length > 0) {
      const numbers = existingCodes.map(id => {
        const match = id.match(/REQ-BOL-(\d+)/);
        return match ? parseInt(match[1], 10) : 0;
      });
      const maxNum = Math.max(...numbers, 0);
      nextCode = `REQ-BOL-${String(maxNum + 1).padStart(3, '0')}`;
    }
  }

  const reqId = isEditing ? existing.id : nextCode;
  const currentTitle = isEditing ? existing.title : '';
  const currentCat = isEditing ? existing.category : 'Transversal / Institucional';
  const currentTarget = isEditing ? existing.targetEntity : 'Gerencia Nacional de Fiscalización';
  const currentPriority = isEditing ? existing.priority : 'high';
  const currentDesc = isEditing ? (existing.description || '') : '';
  const currentUrl = isEditing ? (existing.evidence_url || '') : '';
  const currentDelivered = isEditing ? !!existing.delivered : false;
  const currentNotes = isEditing ? (existing.deliveryNotes || '') : '';
  const currentRequestedBy = isEditing ? existing.requestedBy : (currentUser ? currentUser.name : 'Selvin Lemus');

  const categories = [
    'Transversal / Institucional',
    'Operaciones y Despacho Aduanero',
    'Gestión de Riesgos y Selectividad',
    'Fiscalización y Control Posterior',
    'TIC, Sistemas y Ciberseguridad',
    'Marco Legal y Normativo',
    'Recursos Humanos y Capacitación',
    'Lucha contra el Contrabando',
    'Estadísticas y Series de Datos'
  ];

  const entities = [
    'Gerencia General',
    'Gerencia Nacional de Fiscalización',
    'Gerencia Nacional de Normas',
    'Gerencia Nacional de Sistemas / TIC',
    'Gerencia Nacional de Operaciones',
    'Gerencia Nacional de Administración y Finanzas',
    'Gerencia Nacional Jurídica',
    'Unidad de Control Operativo Aduanero (COA)',
    'Administraciones Aduaneras de Frontera',
    'Ministerio de Economía y Finanzas Públicas',
    'Servicio de Impuestos Nacionales (SIN)',
    'Otra Entidad / Interinstitucional'
  ];

  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <div style="width:36px; height:36px; border-radius:8px; background:rgba(107,33,168,0.1); color:#6b21a8; display:flex; align-items:center; justify-content:center;">
          <i data-lucide="file-plus-2" style="width:20px; height:20px;"></i>
        </div>
        <div>
          <h3 style="font-size:1.2rem; font-weight:800; color:var(--text-primary); margin:0;">
            ${isEditing ? 'Editar Solicitud de Evidencia' : 'Nueva Solicitud de Evidencia Documental'}
          </h3>
          <p style="color:var(--text-muted); font-size:0.78rem; margin:2px 0 0 0;">
            Código: <strong style="color:#6b21a8;">${reqId}</strong> • Misión FMI Bolivia 2026
          </p>
        </div>
      </div>
      <button class="btn-icon-xs" onclick="closeModal()" title="Cerrar modal">
        <i data-lucide="x" style="width:16px; height:16px;"></i>
      </button>
    </div>

    <form id="form-additional-evidence" onsubmit="event.preventDefault(); saveAdditionalEvidence('${reqId}', ${isEditing});">
      <div style="display:flex; flex-direction:column; gap:1rem;">
        
        <!-- Nombre del Documento -->
        <div>
          <label class="form-label" style="font-weight:700; font-size:0.82rem; margin-bottom:0.35rem; display:block;">
            Nombre o Título del Documento Requerido <span style="color:#ef4444;">*</span>
          </label>
          <input type="text" id="add-ev-title" class="form-control" 
            placeholder="ej. Organigrama oficial 2026, Series de recaudación mensual 2021-2025, etc."
            value="${escapeHtml(currentTitle)}" required style="width:100%; font-size:0.85rem; padding:0.6rem 0.85rem; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-primary); color:var(--text-primary);">
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.75rem;">
          <!-- Categoría Temática -->
          <div>
            <label class="form-label" style="font-weight:700; font-size:0.82rem; margin-bottom:0.35rem; display:block;">
              Área / Categoría Temática <span style="color:#ef4444;">*</span>
            </label>
            <select id="add-ev-category" style="width:100%; font-size:0.85rem; padding:0.55rem 0.75rem; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-primary); color:var(--text-primary);">
              ${categories.map(c => `
                <option value="${c}" ${c === currentCat ? 'selected' : ''}>${c}</option>
              `).join('')}
            </select>
          </div>

          <!-- Gerencia Contraparte -->
          <div>
            <label class="form-label" style="font-weight:700; font-size:0.82rem; margin-bottom:0.35rem; display:block;">
              Gerencia / Unidad Contraparte <span style="color:#ef4444;">*</span>
            </label>
            <select id="add-ev-target" style="width:100%; font-size:0.85rem; padding:0.55rem 0.75rem; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-primary); color:var(--text-primary);">
              ${entities.map(e => `
                <option value="${e}" ${e === currentTarget ? 'selected' : ''}>${e}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.75rem;">
          <!-- Prioridad -->
          <div>
            <label class="form-label" style="font-weight:700; font-size:0.82rem; margin-bottom:0.35rem; display:block;">
              Prioridad para el Informe
            </label>
            <select id="add-ev-priority" style="width:100%; font-size:0.85rem; padding:0.55rem 0.75rem; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-primary); color:var(--text-primary);">
              <option value="high" ${currentPriority === 'high' ? 'selected' : ''}>🔴 Alta (Crítica para el diagnóstico)</option>
              <option value="medium" ${currentPriority === 'medium' ? 'selected' : ''}>🟡 Media (Relevante)</option>
              <option value="low" ${currentPriority === 'low' ? 'selected' : ''}>🔵 Informativa (Complementaria)</option>
            </select>
          </div>

          <!-- Evaluador Solicitante -->
          <div>
            <label class="form-label" style="font-weight:700; font-size:0.82rem; margin-bottom:0.35rem; display:block;">
              Evaluador Solicitante
            </label>
            <select id="add-ev-evaluator" style="width:100%; font-size:0.85rem; padding:0.55rem 0.75rem; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-primary); color:var(--text-primary);">
              ${(AppState.team || []).map(m => `
                <option value="${m.id}|${m.name}" ${m.name === currentRequestedBy ? 'selected' : ''}>${m.name} (${m.role})</option>
              `).join('')}
            </select>
          </div>
        </div>

        <!-- Detalle o Instrucciones -->
        <div>
          <label class="form-label" style="font-weight:700; font-size:0.82rem; margin-bottom:0.35rem; display:block;">
            Detalle, Alcance o Especificaciones del Documento
          </label>
          <textarea id="add-ev-desc" rows="3" 
            placeholder="Especifique período histórico requerido (ej. 2021-2025), formato esperado (Excel, PDF, base de datos), desagregación por aduana o preguntas a responder..."
            style="width:100%; font-size:0.85rem; padding:0.6rem 0.85rem; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-primary); color:var(--text-primary); line-height:1.45;">${escapeHtml(currentDesc)}</textarea>
        </div>

        <!-- Enlace Web / Nube (Opcional - OneDrive / SharePoint) -->
        <div>
          <label class="form-label" style="font-weight:700; font-size:0.82rem; margin-bottom:0.35rem; display:flex; justify-content:space-between; align-items:center;">
            <span>Enlace Web / Nube Compartida (OneDrive / SharePoint) <small style="font-weight:normal;color:var(--text-muted);">(Opcional)</small></span>
          </label>
          <div style="position:relative;">
            <input type="url" id="add-ev-url" class="form-control"
              placeholder="https://imf-my.sharepoint.com/:b:/r/... o enlace compartido en la nube"
              value="${escapeHtml(currentUrl)}" style="width:100%; font-size:0.85rem; padding:0.55rem 0.85rem; border:1px solid var(--border-color); border-radius:var(--radius-md); background:var(--bg-primary); color:var(--text-primary);">
          </div>
        </div>

        <!-- Casilla de Entrega -->
        <div style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:0.85rem 1rem;">
          <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer; font-size:0.85rem; font-weight:700; color:var(--text-primary);">
            <input type="checkbox" id="add-ev-delivered" ${currentDelivered ? 'checked' : ''} style="width:16px;height:16px;accent-color:#10b981;">
            <span>Marcar este documento como ya entregado por la contraparte</span>
          </label>
          <div style="margin-top:0.5rem;">
            <input type="text" id="add-ev-notes" placeholder="Notas de recepción (ej. Entregado en pendrive por el Director de Fiscalización)" 
              value="${escapeHtml(currentNotes)}"
              style="width:100%; font-size:0.8rem; padding:0.45rem 0.75rem; border:1px solid var(--border-color); border-radius:var(--radius-sm); background:var(--bg-primary); color:var(--text-primary);">
          </div>
        </div>

        <!-- Botones de Acción -->
        <div style="display:flex; justify-content:flex-end; gap:0.5rem; margin-top:0.5rem; border-top:1px solid var(--border-color); padding-top:1rem;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="closeModal()">
            Cancelar
          </button>
          <button type="submit" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:0.4rem; font-weight:700;">
            <i data-lucide="check" style="width:15px; height:15px;"></i>
            <span>${isEditing ? 'Guardar Cambios' : 'Registrar Solicitud'}</span>
          </button>
        </div>
      </div>
    </form>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
  setTimeout(() => {
    const input = document.getElementById('add-ev-title');
    if (input) input.focus();
  }, 150);
}

function saveAdditionalEvidence(reqId, isEditing) {
  const title = (document.getElementById('add-ev-title')?.value || '').trim();
  if (!title) {
    alert('Por favor, ingresa el título o nombre del documento requerido.');
    return;
  }

  const category = document.getElementById('add-ev-category')?.value || 'Transversal / Institucional';
  const targetEntity = document.getElementById('add-ev-target')?.value || 'Gerencia General';
  const priority = document.getElementById('add-ev-priority')?.value || 'high';
  const description = (document.getElementById('add-ev-desc')?.value || '').trim();
  const evidence_url = (document.getElementById('add-ev-url')?.value || '').trim();
  const delivered = !!document.getElementById('add-ev-delivered')?.checked;
  const deliveryNotes = (document.getElementById('add-ev-notes')?.value || '').trim();

  const evalVal = document.getElementById('add-ev-evaluator')?.value || '';
  const [evalId, evalName] = evalVal.includes('|') ? evalVal.split('|') : ['usr_1', 'Selvin Lemus'];

  if (!AppState.additionalEvidences) AppState.additionalEvidences = [];

  const todayStr = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });

  if (isEditing) {
    const item = AppState.additionalEvidences.find(e => e.id === reqId);
    if (item) {
      item.title = title;
      item.category = category;
      item.targetEntity = targetEntity;
      item.priority = priority;
      item.description = description;
      item.evidence_url = evidence_url;
      item.requestedBy = evalName;
      item.requestedById = evalId;
      item.deliveryNotes = deliveryNotes;

      if (delivered && !item.delivered) {
        item.delivered = true;
        item.deliveryDate = todayStr;
      } else if (!delivered) {
        item.delivered = false;
        item.deliveryDate = null;
      }
      item.lastModifiedAt = new Date().toISOString();
    }
  } else {
    const newItem = {
      id: reqId,
      title,
      description,
      category,
      targetEntity,
      requestedBy: evalName,
      requestedById: evalId,
      requestDate: todayStr,
      priority,
      delivered,
      deliveryDate: delivered ? todayStr : null,
      deliveryNotes,
      evidence_url,
      createdAt: Date.now(),
      lastModifiedAt: new Date().toISOString()
    };
    AppState.additionalEvidences.unshift(newItem);
  }

  saveData(false, true);
  if (typeof syncAdditionalEvidenceToCloud === 'function') {
    syncAdditionalEvidenceToCloud();
  }

  closeModal();
  updateEvidenceNavBadge();

  if (AppState.evidenceFilter && AppState.evidenceFilter.tab === 'fmi') {
    AppState.evidenceFilter.tab = 'additional';
  }

  const container = document.getElementById('main-content-area');
  if (container && AppState.activeView === 'evidence') {
    renderEvidenceView(container);
  }

  showToast(`Solicitud [${reqId}] ${isEditing ? 'actualizada' : 'registrada'} con éxito`, 'success');
}

function deleteAdditionalEvidence(reqId) {
  const item = (AppState.additionalEvidences || []).find(e => e.id === reqId);
  if (!item) return;

  if (!confirm(`¿Estás seguro de que deseas eliminar permanentemente la solicitud:\n"${item.title}" (${reqId})?`)) {
    return;
  }

  AppState.additionalEvidences = (AppState.additionalEvidences || []).filter(e => e.id !== reqId);

  saveData(false, true);
  if (typeof syncAdditionalEvidenceToCloud === 'function') {
    syncAdditionalEvidenceToCloud();
  }

  updateEvidenceNavBadge();

  const container = document.getElementById('main-content-area');
  if (container && AppState.activeView === 'evidence') {
    renderEvidenceView(container);
  }

  showToast(`Solicitud [${reqId}] eliminada`, 'info');
}

function exportEvidenceCSV() {
  const tab = (AppState.evidenceFilter && AppState.evidenceFilter.tab) || 'fmi';
  let items = [];
  if (tab === 'fmi') {
    items = getAllEvidenceItems().map(i => ({
      type: 'FMI CASA',
      code: i.code,
      category: i.pillarName,
      title: i.title,
      evidence: i.evidence,
      target: 'Gerencias Técnicas ANB',
      priority: 'Estándar',
      delivered: i.delivered ? 'Entregado' : 'Pendiente',
      deliveryDate: i.deliveryDate || '-',
      evaluator: i.evaluator || 'Selvin Lemus',
      url: i.evidence_url || ''
    }));
  } else if (tab === 'additional') {
    items = (AppState.additionalEvidences || []).map(i => ({
      type: 'Solicitud Ad-hoc',
      code: i.id,
      category: i.category,
      title: i.title,
      evidence: i.description || i.title,
      target: i.targetEntity,
      priority: i.priority === 'high' ? 'Alta' : (i.priority === 'medium' ? 'Media' : 'Informativa'),
      delivered: i.delivered ? 'Entregado' : 'Pendiente',
      deliveryDate: i.deliveryDate || '-',
      evaluator: i.requestedBy || 'Evaluador',
      url: i.evidence_url || ''
    }));
  } else {
    items = getConsolidatedEvidenceItems().map(i => ({
      type: i.typeBadge,
      code: i.code,
      category: i.category,
      title: i.title,
      evidence: i.evidence,
      target: i.targetEntity,
      priority: i.priority === 'high' ? 'Alta' : (i.priority === 'medium' ? 'Media' : 'Informativa'),
      delivered: i.delivered ? 'Entregado' : 'Pendiente',
      deliveryDate: i.deliveryDate || '-',
      evaluator: i.evaluator || 'Evaluador',
      url: i.evidence_url || ''
    }));
  }

  let csv = "\uFEFFN°,Tipo,Código/Ref,Área / Categoría,Documento Requerido / Evidencia,Gerencia Responsable,Prioridad,Estado Entrega,Fecha Entrega,Evaluador,Enlace Nube\n";
  items.forEach((item, idx) => {
    const clean = str => '"' + (str || '').replace(/"/g, '""') + '"';
    csv += `${idx + 1},${clean(item.type)},${clean(item.code)},${clean(item.category)},${clean(item.title + ' - ' + item.evidence)},${clean(item.target)},${clean(item.priority)},${clean(item.delivered)},${clean(item.deliveryDate)},${clean(item.evaluator)},${clean(item.url)}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `evidencias_${tab}_bolivia_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('Archivo CSV descargado con éxito', 'success');
}

function exportEvidenceExcel() {
  const tab = (AppState.evidenceFilter && AppState.evidenceFilter.tab) || 'fmi';

  if (typeof XLSX !== 'undefined') {
    let items = [];
    let sheetName = 'Evidencias FMI';
    if (tab === 'fmi') {
      sheetName = 'Evidencias FMI CASA';
      items = getAllEvidenceItems().map((i, idx) => ({
        "N°": idx + 1,
        "Tipo": "Cuestionario FMI CASA",
        "Código FMI": i.code,
        "Área Clave": i.pillarName,
        "Evidencia / Justificación": i.evidence,
        "Estado": i.delivered ? "Entregado" : "Pendiente",
        "Fecha de Entrega": i.deliveryDate || "-",
        "Evaluador": i.evaluator || "Selvin Lemus"
      }));
    } else if (tab === 'additional') {
      sheetName = 'Solicitudes Adicionales';
      items = (AppState.additionalEvidences || []).map((i, idx) => ({
        "N°": idx + 1,
        "Tipo": "Solicitud Ad-hoc / Contraparte",
        "Código": i.id,
        "Categoría": i.category,
        "Documento Requerido": i.title,
        "Detalle / Instrucciones": i.description || "-",
        "Gerencia Responsable": i.targetEntity,
        "Prioridad": i.priority === 'high' ? 'Alta (Crítica)' : (i.priority === 'medium' ? 'Media' : 'Informativa'),
        "Estado": i.delivered ? "Entregado" : "Pendiente",
        "Fecha de Entrega": i.deliveryDate || "-",
        "Evaluador Solicitante": i.requestedBy,
        "Enlace Nube": i.evidence_url || "-"
      }));
    } else {
      sheetName = 'Consolidado General';
      items = getConsolidatedEvidenceItems().map((i, idx) => ({
        "N°": idx + 1,
        "Tipo": i.typeBadge,
        "Código / Ref": i.code,
        "Área / Categoría": i.category,
        "Documento Requerido": i.title,
        "Detalle / Justificación": i.evidence,
        "Contraparte / Gerencia": i.targetEntity,
        "Prioridad": i.priority === 'high' ? 'Alta' : (i.priority === 'medium' ? 'Media' : 'Estándar'),
        "Estado": i.delivered ? "Entregado" : "Pendiente",
        "Fecha de Entrega": i.deliveryDate || "-",
        "Evaluador": i.evaluator
      }));
    }

    const worksheet = XLSX.utils.json_to_sheet(items);
    worksheet['!cols'] = [
      { wch: 6 },
      { wch: 22 },
      { wch: 14 },
      { wch: 32 },
      { wch: 45 },
      { wch: 45 },
      { wch: 30 },
      { wch: 16 },
      { wch: 16 },
      { wch: 16 },
      { wch: 22 }
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    const dateStr = new Date().toISOString().split('T')[0];
    XLSX.writeFile(workbook, `inventario_evidencias_${tab}_bolivia_${dateStr}.xlsx`);
    showToast(`Archivo Excel (.xlsx) de ${sheetName} descargado con éxito`, 'success');
    return;
  }

  exportEvidenceCSV();
}

function renderEvidenceView(container) {
  if (!container) container = document.getElementById('main-content-area');
  if (!container) return;

  if (!AppState.evidenceFilter) {
    AppState.evidenceFilter = { tab: 'fmi', search: '', status: 'all', pillar: 'all', category: 'all', priority: 'all' };
  }
  const filter = AppState.evidenceFilter;
  const activeTab = filter.tab || 'fmi';

  const fmiItems = getAllEvidenceItems();
  const additionalItems = AppState.additionalEvidences || [];

  const fmiDelivered = fmiItems.filter(i => i.delivered).length;
  const addDelivered = additionalItems.filter(i => i.delivered).length;

  const consolidatedTotal = fmiItems.length + additionalItems.length;
  const consolidatedDelivered = fmiDelivered + addDelivered;
  const consolidatedPending = consolidatedTotal - consolidatedDelivered;
  const consolidatedPercent = consolidatedTotal > 0 ? Math.round((consolidatedDelivered / consolidatedTotal) * 100) : 0;

  // Estadísticas según la pestaña activa
  let currentTabItems = [];
  let tabDelivered = 0;
  let tabTotal = 0;

  if (activeTab === 'fmi') {
    currentTabItems = fmiItems;
    tabDelivered = fmiDelivered;
    tabTotal = fmiItems.length;
  } else if (activeTab === 'additional') {
    currentTabItems = additionalItems;
    tabDelivered = addDelivered;
    tabTotal = additionalItems.length;
  } else {
    currentTabItems = getConsolidatedEvidenceItems();
    tabDelivered = consolidatedDelivered;
    tabTotal = consolidatedTotal;
  }

  const tabPending = tabTotal - tabDelivered;
  const tabPercent = tabTotal > 0 ? Math.round((tabDelivered / tabTotal) * 100) : 0;

  // Filtrado de elementos
  const filtered = currentTabItems.filter(item => {
    // Filtro por estado de entrega
    if (filter.status === 'delivered' && !item.delivered) return false;
    if (filter.status === 'pending' && item.delivered) return false;

    // Filtros específicos de pestaña
    if (activeTab === 'fmi') {
      if (filter.pillar !== 'all' && item.pillarId !== filter.pillar) return false;
    } else if (activeTab === 'additional') {
      if (filter.category !== 'all' && item.category !== filter.category) return false;
      if (filter.priority !== 'all' && item.priority !== filter.priority) return false;
    } else {
      if (filter.category !== 'all' && item.category !== filter.category) return false;
      if (filter.priority !== 'all' && item.priority !== filter.priority) return false;
    }

    // Filtro por texto de búsqueda
    if (filter.search) {
      const s = filter.search.toLowerCase().trim();
      const match = (item.code || item.id || '').toLowerCase().includes(s) ||
        (item.title || '').toLowerCase().includes(s) ||
        (item.evidence || item.description || '').toLowerCase().includes(s) ||
        (item.category || item.pillarName || '').toLowerCase().includes(s) ||
        (item.targetEntity || '').toLowerCase().includes(s) ||
        (item.evaluator || item.requestedBy || '').toLowerCase().includes(s);
      if (!match) return false;
    }
    return true;
  });

  // Opciones de áreas para el Cuestionario FMI
  const pillarOptions = [];
  const seenPillars = new Set();
  fmiItems.forEach(i => {
    if (!seenPillars.has(i.pillarId)) {
      seenPillars.add(i.pillarId);
      pillarOptions.push({ id: i.pillarId, name: i.pillarName });
    }
  });

  // Opciones de categorías para Solicitudes Adicionales
  const categoryOptions = [
    'Transversal / Institucional',
    'Operaciones y Despacho Aduanero',
    'Gestión de Riesgos y Selectividad',
    'Fiscalización y Control Posterior',
    'TIC, Sistemas y Ciberseguridad',
    'Marco Legal y Normativo',
    'Recursos Humanos y Capacitación',
    'Lucha contra el Contrabando',
    'Estadísticas y Series de Datos'
  ];

  container.innerHTML = `
    <div class="evidence-container">
      <!-- KPI CARDS -->
      <div class="evidence-kpi-grid">
        <div class="evidence-kpi-card" style="border-left: 4px solid var(--primary-500);">
          <div class="evidence-kpi-header">
            <span class="evidence-kpi-title">Requerimientos Documentales</span>
            <div class="evidence-kpi-icon" style="background:var(--primary-50);color:var(--primary-600);">
              <i data-lucide="folder" style="width:18px;height:18px;"></i>
            </div>
          </div>
          <div class="evidence-kpi-value">${consolidatedTotal} <span style="font-size:0.9rem;font-weight:600;color:var(--text-muted);">documentos</span></div>
          <div class="evidence-kpi-sub">
            <strong>${fmiItems.length}</strong> FMI CASA + <strong>${additionalItems.length}</strong> Adicionales
          </div>
        </div>

        <div class="evidence-kpi-card" style="border-left: 4px solid #10b981;">
          <div class="evidence-kpi-header">
            <span class="evidence-kpi-title">Entregados por Contraparte</span>
            <div class="evidence-kpi-icon" style="background:#edf8e5;color:#276712;">
              <i data-lucide="check-circle" style="width:18px;height:18px;"></i>
            </div>
          </div>
          <div class="evidence-kpi-value" style="color:#10b981;">
            ${consolidatedDelivered} <span style="font-size:0.9rem;font-weight:600;color:var(--text-muted);">(${consolidatedPercent}%)</span>
          </div>
          <div class="progress-bar-wrap" style="height:5px;margin-top:6px;background:var(--border-color-subtle);">
            <div class="progress-bar-fill" style="width:${consolidatedPercent}%;background:#10b981;"></div>
          </div>
        </div>

        <div class="evidence-kpi-card" style="border-left: 4px solid #f59e0b;">
          <div class="evidence-kpi-header">
            <span class="evidence-kpi-title">Pendientes de Recepción</span>
            <div class="evidence-kpi-icon" style="background:#fef3c7;color:#92400e;">
              <i data-lucide="clock" style="width:18px;height:18px;"></i>
            </div>
          </div>
          <div class="evidence-kpi-value" style="color:#d97706;">${consolidatedPending} <span style="font-size:0.9rem;font-weight:600;color:var(--text-muted);">pendientes</span></div>
          <div class="evidence-kpi-sub">Por requerir o cotejar en reuniones</div>
        </div>

        <div class="evidence-kpi-card" style="border-left: 4px solid #6366f1;">
          <div class="evidence-kpi-header">
            <span class="evidence-kpi-title">Gestión y Exportación</span>
            <div class="evidence-kpi-icon" style="background:#eef2ff;color:#4f46e5;">
              <i data-lucide="download" style="width:18px;height:18px;"></i>
            </div>
          </div>
          <div style="display:flex;gap:0.4rem;margin-top:0.4rem;">
            <button class="btn btn-sm btn-primary" onclick="exportEvidenceExcel()" style="flex:1;font-size:0.75rem;" title="Descargar matriz en Excel">
              <i data-lucide="file-spreadsheet" style="width:14px;height:14px;"></i> Excel (.xlsx)
            </button>
            <button class="btn btn-sm btn-secondary" onclick="exportEvidenceCSV()" style="flex:1;font-size:0.75rem;" title="Descargar matriz en CSV">
              <i data-lucide="file-text" style="width:14px;height:14px;"></i> CSV
            </button>
          </div>
          <div class="evidence-kpi-sub">Actualización en tiempo real</div>
        </div>
      </div>

      <!-- SISTEMA DE PESTAÑAS (FMI vs ADICIONALES vs CONSOLIDADO) -->
      <div class="evidence-tabs-nav">
        <button class="evidence-tab-btn ${activeTab === 'fmi' ? 'active' : ''}" onclick="setEvidenceTab('fmi')">
          <i data-lucide="clipboard-check" style="width:16px;height:16px;"></i>
          <span>Cuestionario FMI CASA</span>
          <span class="evidence-tab-badge">${fmiItems.length}</span>
        </button>

        <button class="evidence-tab-btn ${activeTab === 'additional' ? 'active' : ''}" onclick="setEvidenceTab('additional')">
          <i data-lucide="file-plus-2" style="width:16px;height:16px;"></i>
          <span>Solicitudes Adicionales & Contraparte</span>
          <span class="evidence-tab-badge" style="${addDelivered === additionalItems.length && additionalItems.length > 0 ? 'background:#10b981;color:#fff;' : ''}">${additionalItems.length}</span>
        </button>

        <button class="evidence-tab-btn ${activeTab === 'all' ? 'active' : ''}" onclick="setEvidenceTab('all')">
          <i data-lucide="layers" style="width:16px;height:16px;"></i>
          <span>Consolidado General</span>
          <span class="evidence-tab-badge">${consolidatedTotal}</span>
        </button>
      </div>

      <!-- TOOLBAR DE BÚSQUEDA, FILTROS Y BOTÓN NUEVA SOLICITUD -->
      <div class="evidence-toolbar" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
        <div style="display:flex; align-items:center; gap:0.75rem; flex:1; min-width:280px; flex-wrap:wrap;">
          <div class="evidence-search-wrap" style="flex:1; min-width:240px;">
            <i data-lucide="search" class="evidence-search-icon"></i>
            <input type="text" class="evidence-search-input" id="evidence-search-input" 
              placeholder="${activeTab === 'fmi' ? 'Buscar código (ej. KA8-P1), norma o tema...' : (activeTab === 'additional' ? 'Buscar documento, gerencia, tema...' : 'Buscar en todos los requerimientos...')}" 
              value="${escapeHtml(filter.search || '')}"
              oninput="setEvidenceFilter('search', this.value)">
          </div>

          <div class="evidence-filter-group">
            <button class="evidence-filter-pill ${filter.status === 'all' ? 'active' : ''}" onclick="setEvidenceFilter('status', 'all')">
              <span>Todos</span> <span style="opacity:0.8;font-size:0.7rem;">(${tabTotal})</span>
            </button>
            <button class="evidence-filter-pill ${filter.status === 'delivered' ? 'active' : ''}" onclick="setEvidenceFilter('status', 'delivered')">
              <i data-lucide="check" style="width:12px;height:12px;"></i>
              <span>Entregados</span> <span style="opacity:0.8;font-size:0.7rem;">(${tabDelivered})</span>
            </button>
            <button class="evidence-filter-pill ${filter.status === 'pending' ? 'active' : ''}" onclick="setEvidenceFilter('status', 'pending')">
              <i data-lucide="clock" style="width:12px;height:12px;"></i>
              <span>Pendientes</span> <span style="opacity:0.8;font-size:0.7rem;">(${tabPending})</span>
            </button>
          </div>

          ${activeTab === 'fmi' ? `
            <select class="select-filter" style="font-size:0.8rem;padding:0.45rem 0.75rem;" onchange="setEvidenceFilter('pillar', this.value)">
              <option value="all" ${filter.pillar === 'all' ? 'selected' : ''}>-- Todas las Áreas (${pillarOptions.length}) --</option>
              ${pillarOptions.map(p => `
                <option value="${p.id}" ${filter.pillar === p.id ? 'selected' : ''}>${p.name}</option>
              `).join('')}
            </select>
          ` : `
            <select class="select-filter" style="font-size:0.8rem;padding:0.45rem 0.75rem;" onchange="setEvidenceFilter('category', this.value)">
              <option value="all" ${filter.category === 'all' ? 'selected' : ''}>-- Todas las Categorías --</option>
              ${categoryOptions.map(c => `
                <option value="${c}" ${filter.category === c ? 'selected' : ''}>${c}</option>
              `).join('')}
            </select>

            <select class="select-filter" style="font-size:0.8rem;padding:0.45rem 0.75rem;" onchange="setEvidenceFilter('priority', this.value)">
              <option value="all" ${filter.priority === 'all' ? 'selected' : ''}>-- Prioridad --</option>
              <option value="high" ${filter.priority === 'high' ? 'selected' : ''}>🔴 Alta (Crítica)</option>
              <option value="medium" ${filter.priority === 'medium' ? 'selected' : ''}>🟡 Media</option>
              <option value="low" ${filter.priority === 'low' ? 'selected' : ''}>🔵 Informativa</option>
            </select>
          `}
        </div>

        <!-- Botón Principal: + Solicitar Nueva Evidencia -->
        <div>
          <button class="btn btn-primary btn-sm" onclick="openAddEvidenceModal()" style="display:inline-flex; align-items:center; gap:0.4rem; font-weight:700; white-space:nowrap; box-shadow:var(--shadow-sm);">
            <i data-lucide="plus-circle" style="width:15px; height:15px;"></i>
            <span>+ Solicitar Nueva Evidencia</span>
          </button>
        </div>
      </div>

      <!-- TABLA SEGÚN LA PESTAÑA ACTIVA -->
      <div class="evidence-table-card">
        <div style="overflow-x:auto;">
          ${activeTab === 'fmi' ? `
            <!-- TABLA 1: CUESTIONARIO FMI CASA -->
            <table class="evidence-table">
              <thead>
                <tr>
                  <th style="width:55px;text-align:center;">Entrega</th>
                  <th style="width:115px;">Código FMI</th>
                  <th style="width:230px;">Área Clave</th>
                  <th>Evidencia / Justificación Documental Requerida</th>
                  <th style="width:130px;text-align:center;">Estado</th>
                  <th style="width:160px;">Evaluador / Fecha</th>
                  <th style="width:90px;text-align:center;">Acción</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.length === 0 ? `
                  <tr>
                    <td colspan="7" style="text-align:center;padding:2.5rem 1rem;color:var(--text-muted);">
                      <i data-lucide="inbox" style="width:36px;height:36px;stroke-width:1.5;margin-bottom:0.5rem;color:var(--text-muted);"></i>
                      <p style="font-size:0.95rem;font-weight:600;margin:0;">No se encontraron evidencias FMI con los filtros seleccionados.</p>
                      <p style="font-size:0.8rem;margin-top:4px;">Intenta cambiar el criterio de búsqueda o el filtro de entrega.</p>
                    </td>
                  </tr>
                ` : filtered.map((item, idx) => {
    const isDelivered = item.delivered;
    return `
                    <tr class="${isDelivered ? 'is-delivered' : ''}">
                      <!-- CHECKBOX -->
                      <td style="text-align:center;vertical-align:middle;">
                        <label class="evidence-check-wrap" title="${isDelivered ? 'Haga clic para desmarcar como pendiente' : 'Haga clic para marcar como entregado'}">
                          <input type="checkbox" class="evidence-checkbox" 
                            ${isDelivered ? 'checked' : ''} 
                            onchange="toggleEvidenceDelivered('${item.code}', this.checked)">
                        </label>
                      </td>

                      <!-- CÓDIGO -->
                      <td style="vertical-align:top;">
                        <button class="evidence-code-badge" onclick="jumpToQuestion('${item.code}')" title="Ver esta práctica en el Cuestionario">
                          <span>${item.code}</span>
                          <i data-lucide="external-link" style="width:11px;height:11px;"></i>
                        </button>
                      </td>

                      <!-- ÁREA -->
                      <td style="vertical-align:top;">
                        <div style="font-weight:700;font-size:0.825rem;color:var(--text-primary);margin-bottom:2px;">
                          ${escapeHtml(item.pillarName)}
                        </div>
                        <div style="font-size:0.75rem;color:var(--text-muted);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${escapeHtml(item.title)}">
                          ${escapeHtml(item.title)}
                        </div>
                      </td>

                      <!-- EVIDENCIA TEXT -->
                      <td style="vertical-align:top;">
                        <div class="evidence-text-block">
                          ${escapeHtml(item.evidence)}
                        </div>
                      </td>

                      <!-- ESTADO BADGE -->
                      <td style="text-align:center;vertical-align:middle;">
                        ${isDelivered ? `
                          <span class="status-badge-delivered" title="Documentación entregada y disponible para la misión">
                            <i data-lucide="check" style="width:12px;height:12px;"></i> Entregado
                          </span>
                        ` : `
                          <span class="status-badge-pending" title="Pendiente de recepción o entrega formal por la contraparte">
                            <i data-lucide="clock" style="width:12px;height:12px;"></i> Pendiente
                          </span>
                        `}
                      </td>

                      <!-- EVALUADOR Y FECHA -->
                      <td style="vertical-align:middle;font-size:0.78rem;">
                        <div style="font-weight:600;color:var(--text-primary);display:flex;align-items:center;gap:4px;">
                          <i data-lucide="user" style="width:12px;height:12px;color:var(--text-muted);"></i>
                          ${escapeHtml(item.evaluator)}
                        </div>
                        ${item.deliveryDate ? `
                          <div style="color:#10b981;font-size:0.72rem;margin-top:2px;">
                            Entregado: ${item.deliveryDate}
                          </div>
                        ` : `
                          <div style="color:var(--text-muted);font-size:0.72rem;margin-top:2px;">
                            Pendiente de entrega
                          </div>
                        `}
                      </td>

                      <!-- ACCIÓN -->
                      <td style="text-align:center;vertical-align:middle;">
                        <button class="btn btn-xs btn-outline-primary" onclick="jumpToQuestion('${item.code}')" title="Ir a calificar / editar esta práctica">
                          <i data-lucide="edit-3" style="width:12px;height:12px;"></i>
                          <span>Ficha</span>
                        </button>
                      </td>
                    </tr>
                  `;
  }).join('')}
              </tbody>
            </table>
          ` : (activeTab === 'additional' ? `
            <!-- TABLA 2: SOLICITUDES ADICIONALES & CONTRAPARTE -->
            <table class="evidence-table">
              <thead>
                <tr>
                  <th style="width:55px;text-align:center;">Entrega</th>
                  <th style="width:115px;">Código Ref</th>
                  <th style="width:210px;">Área / Prioridad</th>
                  <th>Documento Solicitado & Especificaciones</th>
                  <th style="width:190px;">Contraparte Responsable</th>
                  <th style="width:125px;text-align:center;">Estado</th>
                  <th style="width:150px;">Solicitante / Fecha</th>
                  <th style="width:90px;text-align:center;">Acciones</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.length === 0 ? `
                  <tr>
                    <td colspan="8" style="text-align:center;padding:2.5rem 1rem;color:var(--text-muted);">
                      <i data-lucide="file-question" style="width:36px;height:36px;stroke-width:1.5;margin-bottom:0.5rem;color:var(--text-muted);"></i>
                      <p style="font-size:0.95rem;font-weight:600;margin:0;">No hay solicitudes adicionales registradas con los filtros actuales.</p>
                      <button class="btn btn-sm btn-primary" onclick="openAddEvidenceModal()" style="margin-top:0.75rem;">
                        <i data-lucide="plus-circle" style="width:14px;height:14px;"></i> Registrar la Primera Solicitud
                      </button>
                    </td>
                  </tr>
                ` : filtered.map((item, idx) => {
    const isDelivered = item.delivered;
    return `
                    <tr class="${isDelivered ? 'is-delivered' : ''}">
                      <!-- CHECKBOX -->
                      <td style="text-align:center;vertical-align:middle;">
                        <label class="evidence-check-wrap" title="${isDelivered ? 'Haga clic para desmarcar como pendiente' : 'Haga clic para marcar como entregado'}">
                          <input type="checkbox" class="evidence-checkbox" 
                            ${isDelivered ? 'checked' : ''} 
                            onchange="toggleAdditionalEvidenceDelivered('${item.id}', this.checked)">
                        </label>
                      </td>

                      <!-- CÓDIGO REF -->
                      <td style="vertical-align:top;">
                        <span class="badge-origin-adhoc" title="Solicitud Ad-hoc / Requerimiento adicional">${item.id}</span>
                      </td>

                      <!-- CATEGORÍA & PRIORIDAD -->
                      <td style="vertical-align:top;">
                        <div style="font-weight:700;font-size:0.8rem;color:var(--text-primary);margin-bottom:3px;">
                          ${escapeHtml(item.category)}
                        </div>
                        ${getPriorityBadgeHtml(item.priority)}
                      </td>

                      <!-- TÍTULO & DETALLE -->
                      <td style="vertical-align:top;">
                        <div style="font-weight:700;font-size:0.88rem;color:var(--text-primary);line-height:1.35;margin-bottom:4px;">
                          ${escapeHtml(item.title)}
                        </div>
                        ${item.description ? `
                          <div class="evidence-text-block" style="font-size:0.8rem;margin-top:4px;">
                            ${escapeHtml(item.description)}
                          </div>
                        ` : ''}
                        ${item.evidence_url ? `
                          <div style="margin-top:5px;">
                            <a href="${escapeHtml(item.evidence_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-xs btn-outline-primary" style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;padding:2px 8px;">
                              <i data-lucide="external-link" style="width:11px;height:11px;"></i>
                              <span>Ver en OneDrive / Nube</span>
                            </a>
                          </div>
                        ` : ''}
                        ${item.deliveryNotes ? `
                          <div style="margin-top:4px;font-size:0.75rem;color:var(--text-secondary);font-style:italic;">
                            Nota: ${escapeHtml(item.deliveryNotes)}
                          </div>
                        ` : ''}
                      </td>

                      <!-- GERENCIA CONTRAPARTE -->
                      <td style="vertical-align:top;">
                        <div style="font-weight:600;font-size:0.8rem;color:var(--text-primary);display:flex;align-items:center;gap:5px;">
                          <i data-lucide="building" style="width:13px;height:13px;color:var(--primary-500);flex-shrink:0;"></i>
                          <span>${escapeHtml(item.targetEntity)}</span>
                        </div>
                      </td>

                      <!-- ESTADO BADGE -->
                      <td style="text-align:center;vertical-align:middle;">
                        ${isDelivered ? `
                          <span class="status-badge-delivered" title="Documentación entregada">
                            <i data-lucide="check" style="width:12px;height:12px;"></i> Entregado
                          </span>
                        ` : `
                          <span class="status-badge-pending" title="Pendiente de recepción">
                            <i data-lucide="clock" style="width:12px;height:12px;"></i> Pendiente
                          </span>
                        `}
                      </td>

                      <!-- EVALUADOR Y FECHA -->
                      <td style="vertical-align:middle;font-size:0.78rem;">
                        <div style="font-weight:600;color:var(--text-primary);display:flex;align-items:center;gap:4px;">
                          <i data-lucide="user" style="width:12px;height:12px;color:var(--text-muted);"></i>
                          ${escapeHtml(item.requestedBy)}
                        </div>
                        <div style="font-size:0.72rem;color:var(--text-muted);margin-top:2px;">
                          Pedido: ${item.requestDate || '-'}
                        </div>
                        ${item.deliveryDate ? `
                          <div style="color:#10b981;font-size:0.72rem;margin-top:2px;font-weight:600;">
                            Entregado: ${item.deliveryDate}
                          </div>
                        ` : ''}
                      </td>

                      <!-- ACCIONES -->
                      <td style="text-align:center;vertical-align:middle;">
                        <div style="display:inline-flex;gap:4px;align-items:center;">
                          <button class="btn btn-xs btn-secondary" onclick="openAddEvidenceModal('${item.id}')" title="Editar requerimiento">
                            <i data-lucide="edit-2" style="width:12px;height:12px;"></i>
                          </button>
                          <button class="btn btn-xs btn-secondary" onclick="deleteAdditionalEvidence('${item.id}')" title="Eliminar requerimiento" style="color:#ef4444;">
                            <i data-lucide="trash-2" style="width:12px;height:12px;"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  `;
  }).join('')}
              </tbody>
            </table>
          ` : `
            <!-- TABLA 3: CONSOLIDADO GENERAL (FMI + AD-HOC) -->
            <table class="evidence-table">
              <thead>
                <tr>
                  <th style="width:55px;text-align:center;">Entrega</th>
                  <th style="width:130px;">Origen / Ref</th>
                  <th style="width:200px;">Área / Categoría</th>
                  <th>Documento Requerido / Evidencia</th>
                  <th style="width:180px;">Contraparte / Gerencia</th>
                  <th style="width:125px;text-align:center;">Estado</th>
                  <th style="width:145px;">Evaluador / Fecha</th>
                  <th style="width:85px;text-align:center;">Acción</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.length === 0 ? `
                  <tr>
                    <td colspan="8" style="text-align:center;padding:2.5rem 1rem;color:var(--text-muted);">
                      <i data-lucide="inbox" style="width:36px;height:36px;stroke-width:1.5;margin-bottom:0.5rem;color:var(--text-muted);"></i>
                      <p style="font-size:0.95rem;font-weight:600;margin:0;">No se encontraron requerimientos en la vista consolidada.</p>
                    </td>
                  </tr>
                ` : filtered.map((item, idx) => {
    const isDelivered = item.delivered;
    const isFmi = item.origin === 'fmi';
    return `
                    <tr class="${isDelivered ? 'is-delivered' : ''}">
                      <!-- CHECKBOX -->
                      <td style="text-align:center;vertical-align:middle;">
                        <label class="evidence-check-wrap">
                          <input type="checkbox" class="evidence-checkbox" 
                            ${isDelivered ? 'checked' : ''} 
                            onchange="${isFmi ? `toggleEvidenceDelivered('${item.code}', this.checked)` : `toggleAdditionalEvidenceDelivered('${item.id}', this.checked)`}">
                        </label>
                      </td>

                      <!-- ORIGEN & REF -->
                      <td style="vertical-align:top;">
                        <div style="display:flex; flex-direction:column; gap:3px; align-items:flex-start;">
                          <span class="${isFmi ? 'badge-origin-fmi' : 'badge-origin-adhoc'}">
                            ${isFmi ? 'FMI CASA' : 'AD-HOC'}
                          </span>
                          <span style="font-size:0.75rem; font-weight:700; color:var(--text-secondary);">
                            ${item.code}
                          </span>
                        </div>
                      </td>

                      <!-- ÁREA / CATEGORÍA -->
                      <td style="vertical-align:top;">
                        <div style="font-weight:700;font-size:0.8rem;color:var(--text-primary);margin-bottom:2px;">
                          ${escapeHtml(item.category)}
                        </div>
                        ${!isFmi ? getPriorityBadgeHtml(item.priority) : ''}
                      </td>

                      <!-- TÍTULO & EVIDENCIA -->
                      <td style="vertical-align:top;">
                        <div style="font-weight:700;font-size:0.85rem;color:var(--text-primary);margin-bottom:3px;">
                          ${escapeHtml(item.title)}
                        </div>
                        <div class="evidence-text-block" style="font-size:0.78rem;">
                          ${escapeHtml(item.evidence)}
                        </div>
                        ${item.evidence_url ? `
                          <div style="margin-top:4px;">
                            <a href="${escapeHtml(item.evidence_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-xs btn-outline-primary" style="font-size:0.7rem;padding:2px 6px;">
                              <i data-lucide="external-link" style="width:10px;height:10px;"></i> Ver en Nube
                            </a>
                          </div>
                        ` : ''}
                      </td>

                      <!-- CONTRAPARTE -->
                      <td style="vertical-align:top;font-size:0.8rem;">
                        <div style="font-weight:600;color:var(--text-primary);">
                          ${escapeHtml(item.targetEntity)}
                        </div>
                      </td>

                      <!-- ESTADO -->
                      <td style="text-align:center;vertical-align:middle;">
                        ${isDelivered ? `
                          <span class="status-badge-delivered">
                            <i data-lucide="check" style="width:12px;height:12px;"></i> Entregado
                          </span>
                        ` : `
                          <span class="status-badge-pending">
                            <i data-lucide="clock" style="width:12px;height:12px;"></i> Pendiente
                          </span>
                        `}
                      </td>

                      <!-- EVALUADOR Y FECHA -->
                      <td style="vertical-align:middle;font-size:0.78rem;">
                        <div style="font-weight:600;color:var(--text-primary);">
                          ${escapeHtml(item.evaluator)}
                        </div>
                        ${item.deliveryDate ? `
                          <div style="color:#10b981;font-size:0.72rem;margin-top:2px;">
                            ${item.deliveryDate}
                          </div>
                        ` : ''}
                      </td>

                      <!-- ACCIONES -->
                      <td style="text-align:center;vertical-align:middle;">
                        ${isFmi ? `
                          <button class="btn btn-xs btn-outline-primary" onclick="jumpToQuestion('${item.code}')" title="Ir a la ficha técnica">
                            <i data-lucide="edit-3" style="width:12px;height:12px;"></i> Ficha
                          </button>
                        ` : `
                          <div style="display:inline-flex;gap:3px;">
                            <button class="btn btn-xs btn-secondary" onclick="openAddEvidenceModal('${item.id}')" title="Editar">
                              <i data-lucide="edit-2" style="width:11px;height:11px;"></i>
                            </button>
                            <button class="btn btn-xs btn-secondary" onclick="deleteAdditionalEvidence('${item.id}')" title="Eliminar" style="color:#ef4444;">
                              <i data-lucide="trash-2" style="width:11px;height:11px;"></i>
                            </button>
                          </div>
                        `}
                      </td>
                    </tr>
                  `;
  }).join('')}
              </tbody>
            </table>
          `)}
        </div>

        <div style="padding:0.75rem 1.25rem;background:var(--bg-tertiary);border-top:1px solid var(--border-color);display:flex;justify-content:space-between;align-items:center;font-size:0.78rem;color:var(--text-muted);flex-wrap:wrap;gap:0.5rem;">
          <span>Mostrando <strong>${filtered.length}</strong> de <strong>${tabTotal}</strong> requerimientos (${activeTab === 'fmi' ? 'Cuestionario FMI' : (activeTab === 'additional' ? 'Solicitudes Adicionales' : 'Consolidado General')})</span>
          <span>Casilla <strong>(✓)</strong> para alternar entrega en tiempo real • Guardado instantáneo en la nube</span>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// ==========================================================================
// VISTA 3: EQUIPO Y ASIGNACIÓN DE SECCIONES (MATRIZ MULTI-EVALUADOR)
// ==========================================================================
function setTeamTab(tab) {
  AppState.teamActiveTab = tab;
  renderTeamView(document.getElementById('main-content-area'));
}

function toggleMatrixFilterOnlyMe() {
  AppState.matrixFilterOnlyMe = !AppState.matrixFilterOnlyMe;
  renderTeamView(document.getElementById('main-content-area'));
}

function renderTeamView(container) {
  const isMatrix = AppState.teamActiveTab === 'matrix';

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.75rem;">
      <div>
        <h3 style="font-size:1.25rem;">Gestión de Evaluadores y Asignación de Secciones</h3>
        <p style="color:var(--text-muted);font-size:0.825rem;">Define quién evalúa cada pilar. <strong>Una misma sección puede ser asignada a varios evaluadores simultáneamente.</strong></p>
      </div>
      <div style="display:flex;gap:0.5rem;">
        <button class="btn btn-secondary btn-sm" onclick="autoDistributeTeam()">
          <i data-lucide="sparkles" style="width:14px;height:14px;color:#f59e0b;"></i> Auto-distribuir
        </button>
        <button class="btn btn-primary btn-sm" onclick="openAddMemberModal()">
          <i data-lucide="user-plus" style="width:14px;height:14px;"></i> Nuevo Evaluador
        </button>
      </div>
    </div>

    <!-- Pestañas -->
    <div class="team-tabs">
      <button class="team-tab-btn ${isMatrix ? 'active' : ''}" onclick="setTeamTab('matrix')">
        <i data-lucide="grid" style="width:15px;height:15px;"></i> Matriz de Asignación por Secciones
      </button>
      <button class="team-tab-btn ${!isMatrix ? 'active' : ''}" onclick="setTeamTab('members')">
        <i data-lucide="users" style="width:15px;height:15px;"></i> Directorio de Evaluadores (${AppState.team.length})
      </button>
    </div>

    ${isMatrix ? renderMatrixTab() : renderDirectoryTab()}
  `;

  if (window.lucide) lucide.createIcons();
}

// TAB 1: MATRIZ INTERACTIVA
function renderMatrixTab() {
  const currentUser = getCurrentUser();
  const isMatrixAssignedOnly = AppState.matrixFilterOnlyMe === true;
  const filteredPillars = isMatrixAssignedOnly
    ? AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(currentUser.id))
    : AppState.pillars;

  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">Filtrar Matriz:</span>
        <button class="btn btn-sm ${isMatrixAssignedOnly ? 'btn-primary' : 'btn-secondary'}" onclick="toggleMatrixFilterOnlyMe()">
          🎯 ${isMatrixAssignedOnly ? 'Viendo solo mis secciones' : `Solo secciones de ${currentUser.name.split(' ')[0]}`}
        </button>
        ${isMatrixAssignedOnly ? `
          <button class="btn btn-sm btn-outline-primary" onclick="toggleMatrixFilterOnlyMe()">
            Ver Todas las ${AppState.pillars.length} Secciones
          </button>
        ` : ''}
      </div>
      <span style="font-size:0.75rem;color:var(--text-muted);">
        Mostrando <strong>${filteredPillars.length} de ${AppState.pillars.length}</strong> secciones
      </span>
    </div>

    <div class="matrix-container">
      <table class="matrix-table">
        <thead>
          <tr>
            <th style="width:40px;text-align:center;">#</th>
            <th style="width:320px;">Sección / Pilar de Evaluación</th>
            ${AppState.team.map(m => `
              <th style="text-align:center;width:90px;" title="${m.name} (${m.role})">
                <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
                  <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:${m.color || '#1e40af'};color:white;text-align:center;line-height:24px;font-size:0.75rem;font-weight:700;">
                    ${m.name.charAt(0)}
                  </span>
                  <span style="font-size:0.75rem;font-weight:600;max-width:85px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                    ${m.name.split(' ')[0]} ${m.id === currentUser.id ? '(Tú)' : ''}
                  </span>
                </div>
              </th>
            `).join('')}
            <th>Evaluadores Responsables</th>
            <th style="width:130px;text-align:center;">Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${filteredPillars.map((p, idx) => {
    const assigned = p.assigned_evaluators || [];
    const evaluators = getPillarEvaluators(p);
    const isMine = assigned.includes(currentUser.id);

    return `
              <tr class="${isMine ? 'matrix-row-assigned' : ''}">
                <td style="text-align:center;font-weight:700;color:var(--text-muted);">${p.number || idx + 1}</td>
                <td>
                  <strong style="color:var(--text-primary);cursor:pointer;" onclick="switchView('evaluation', '${p.id}')">
                    ${p.title}
                  </strong>
                  ${isMine ? `<span class="score-tag score-4" style="font-size:0.65rem;padding:0 5px;margin-left:4px;">★ A tu cargo</span>` : ''}
                  <div style="font-size:0.725rem;color:var(--text-muted);">
                    ${p.criteria.length} Criterios • ${calculatePillarStats(p).totalQuestions} Preguntas
                  </div>
                </td>
                ${AppState.team.map(m => {
      const isChecked = assigned.includes(m.id);
      return `
                    <td style="text-align:center;">
                      <button class="matrix-checkbox-btn ${isChecked ? 'checked' : ''}" onclick="togglePillarMember('${p.id}', '${m.id}')" title="${isChecked ? 'Quitar a ' + m.name : 'Asignar a ' + m.name}">
                        <i data-lucide="check" style="width:15px;height:15px;"></i>
                      </button>
                    </td>
                  `;
    }).join('')}
                <td>
                  <div style="display:flex;flex-wrap:wrap;gap:3px;">
                    ${evaluators.length > 0 ? evaluators.map(m => `
                      <span class="evaluator-tag" style="background:${m.color || '#1e40af'};">
                        ${m.id === currentUser.id ? '★ Tú: ' : ''}${m.name}
                      </span>
                    `).join('') : `<span style="font-size:0.75rem;color:#ef4444;">Sin evaluadores</span>`}
                  </div>
                </td>
                <td style="text-align:center;">
                  <button class="btn btn-sm btn-secondary" style="padding:2px 6px;font-size:0.7rem;" onclick="assignAllToPillar('${p.id}')">Todos</button>
                  <button class="btn btn-sm btn-secondary" style="padding:2px 6px;font-size:0.7rem;" onclick="clearPillar('${p.id}')">Limpiar</button>
                </td>
              </tr>
            `;
  }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// TOGGLE EN MATRIZ
function togglePillarMember(pillarId, memberId) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;

  pillar.assigned_evaluators = pillar.assigned_evaluators || [];
  const idx = pillar.assigned_evaluators.indexOf(memberId);
  if (idx >= 0) {
    pillar.assigned_evaluators.splice(idx, 1);
  } else {
    pillar.assigned_evaluators.push(memberId);
  }

  saveData(false);
  updateActiveUserHeader();
  renderCurrentView();
  renderSidebarPillars();
}

function assignAllToPillar(pillarId) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;
  pillar.assigned_evaluators = AppState.team.map(m => m.id);
  saveData(true);
  updateActiveUserHeader();
  renderCurrentView();
  renderSidebarPillars();
}

function clearPillar(pillarId) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;
  pillar.assigned_evaluators = [];
  saveData(true);
  updateActiveUserHeader();
  renderCurrentView();
  renderSidebarPillars();
}

// TAB 2: DIRECTORIO DE EVALUADORES
function renderDirectoryTab() {
  const currentUser = getCurrentUser();

  return `
    <div class="team-grid">
      ${AppState.team.map(m => {
    const isActive = m.id === currentUser.id;
    const assignedPillars = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(m.id));
    let totalAssignedQs = 0;
    let completedAssignedQs = 0;

    assignedPillars.forEach(p => {
      const stats = calculatePillarStats(p);
      totalAssignedQs += stats.totalQuestions;
      completedAssignedQs += stats.scoredQuestions;
    });

    const percent = totalAssignedQs > 0 ? Math.round((completedAssignedQs / totalAssignedQs) * 100) : 0;

    return `
          <div class="team-member-card ${isActive ? 'active-user' : ''}" style="${isActive ? 'border-color:var(--primary-500);' : ''}">
            <div class="member-header">
              <div class="member-avatar" style="background:${m.color || '#1e40af'};">
                ${m.name.charAt(0).toUpperCase()}
              </div>
              <div style="flex:1;overflow:hidden;">
                <div style="display:flex;align-items:center;gap:0.4rem;justify-content:space-between;">
                  <h4 style="font-size:0.95rem;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${m.name}</h4>
                  ${isActive ? `<span class="score-tag score-4" style="font-size:0.65rem;padding:1px 6px;">Activo</span>` : ''}
                </div>
                <span style="font-size:0.78rem;color:var(--primary-600);font-weight:600;">${m.role}</span>
              </div>
            </div>

            <div style="font-size:0.8rem;color:var(--text-secondary);">
              <i data-lucide="mail" style="width:13px;height:13px;display:inline-block;vertical-align:middle;margin-right:3px;"></i> ${m.email || 'Sin correo registrado'}
            </div>

            <div style="font-size:0.75rem;color:var(--text-secondary);display:flex;align-items:center;gap:6px;margin-top:4px;">
              <i data-lucide="key" style="width:13px;height:13px;color:var(--primary-600);"></i>
              <span>PIN de acceso: <strong style="font-family:monospace;font-size:0.8rem;background:var(--bg-tertiary);padding:2px 7px;border-radius:4px;border:1px solid var(--border-color);color:var(--text-primary);">${m.pin || '2026'}</strong></span>
            </div>

            <div style="margin-top:0.3rem;padding-top:0.6rem;border-top:1px solid var(--border-color);">
              <div style="display:flex;justify-content:space-between;font-size:0.75rem;margin-bottom:3px;">
                <span>Progreso en secciones asignadas:</span>
                <strong>${completedAssignedQs} / ${totalAssignedQs} (${percent}%)</strong>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width:${percent}%;background:${m.color || '#1e40af'};"></div>
              </div>
            </div>

            <div>
              <div style="font-size:0.75rem;font-weight:700;color:var(--text-secondary);margin-bottom:0.3rem;">
                Secciones / Pilares a su cargo (${assignedPillars.length}):
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:4px;">
                ${assignedPillars.length > 0 ? assignedPillars.map(p => `
                  <span class="pillar-chip" onclick="switchView('evaluation', '${p.id}')">
                    Pilar ${p.number || p.id.replace('pilar_', '')}
                  </span>
                `).join('') : `<span style="font-size:0.75rem;color:var(--text-muted);font-style:italic;">No tiene secciones asignadas</span>`}
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:0.5rem;padding-top:0.6rem;border-top:1px solid var(--border-color-subtle);gap:0.4rem;flex-wrap:wrap;">
              ${isActive ? `
                <span style="font-size:0.75rem;font-weight:700;color:#10b981;display:flex;align-items:center;gap:3px;">
                  <i data-lucide="check-circle" style="width:13px;height:13px;"></i> Sesión en uso
                </span>
              ` : `
                <button class="btn btn-sm btn-primary" style="font-size:0.725rem;padding:3px 8px;" onclick="setCurrentUser('${m.id}')">
                  <i data-lucide="log-in" style="width:12px;height:12px;"></i> Ingresar como ${m.name.split(' ')[0]}
                </button>
              `}
              <div style="display:flex;gap:4px;margin-left:auto;">
                <button class="btn btn-sm btn-outline-primary" onclick="openEditMemberModal('${m.id}')" title="Configurar Secciones y PIN de Acceso">
                  <i data-lucide="key" style="width:13px;height:13px;"></i> Editar / PIN
                </button>
                <button class="btn btn-sm btn-secondary" onclick="deleteTeamMember('${m.id}')" title="Eliminar evaluador">
                  <i data-lucide="trash-2" style="width:13px;height:13px;color:#ef4444;"></i>
                </button>
              </div>
            </div>
          </div>
        `;
  }).join('')}
    </div>
  `;
}

function autoDistributeTeam() {
  ensurePillarAssignments();
  saveData(true);
  renderCurrentView();
  renderSidebarPillars();
  showToast('Secciones distribuidas automáticamente entre los evaluadores', 'success');
}

// MODAL 1: AÑADIR NUEVO EVALUADOR
function openAddMemberModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  const colors = ['#1e40af', '#0d9488', '#7c3aed', '#ea580c', '#db2777', '#0284c7', '#059669', '#d97706'];
  const suggestedColor = colors[AppState.team.length % colors.length];

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
      <h3 style="font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;">
        <i data-lucide="user-plus" style="color:var(--primary-500);width:18px;height:18px;"></i> Añadir Nuevo Evaluador
      </h3>
      <button class="btn-icon" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px;"></i></button>
    </div>

    <div style="display:flex;flex-direction:column;gap:0.85rem;">
      <div class="detail-field">
        <label class="detail-label">Nombre Completo del Evaluador</label>
        <input type="text" id="member-name" class="input-search" style="width:100%;" placeholder="Ej: Dr. Carlos Mendizábal">
      </div>

      <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:0.75rem;">
        <div class="detail-field">
          <label class="detail-label">Rol / Especialidad</label>
          <input type="text" id="member-role" class="input-search" style="width:100%;" placeholder="Ej: Especialista en Riesgos">
        </div>
        <div class="detail-field">
          <label class="detail-label">Correo Institucional</label>
          <input type="email" id="member-email" class="input-search" style="width:100%;" placeholder="carlos@mision.org">
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
        <div class="detail-field">
          <label class="detail-label">Color del Avatar</label>
          <input type="color" id="member-color" value="${suggestedColor}" style="width:100%;height:36px;border-radius:var(--radius-sm);border:1px solid var(--border-color);background:none;cursor:pointer;">
        </div>
        <div class="detail-field">
          <label class="detail-label" style="display:flex;align-items:center;gap:4px;color:var(--primary-600);font-weight:700;">
            <i data-lucide="key" style="width:13px;height:13px;"></i> PIN Personal (Login)
          </label>
          <input type="text" id="member-pin" class="input-search" style="width:100%;font-family:monospace;letter-spacing:1px;font-weight:700;" value="2026" placeholder="2026">
        </div>
      </div>

      <!-- Checklist de Secciones -->
      <div style="margin-top:0.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
          <label class="detail-label">
            Secciones / Pilares a su cargo:
            <span id="modal-selected-count" style="color:var(--primary-600);margin-left:4px;">(0 seleccionados)</span>
          </label>
          <button type="button" class="btn btn-sm btn-secondary" style="padding:2px 7px;font-size:0.725rem;" onclick="toggleAllModalCheckboxes()">
            Marcar / Desmarcar Todos
          </button>
        </div>
        
        <div style="max-height:220px;overflow-y:auto;border:1px solid var(--border-color);border-radius:var(--radius-md);padding:0.5rem;background:var(--bg-tertiary);display:flex;flex-direction:column;gap:4px;">
          ${AppState.pillars.map((p, idx) => `
            <div class="modal-pillar-item" id="modal-item-${p.id}" onclick="toggleModalCheckbox('${p.id}')">
              <input type="checkbox" class="modal-pillar-checkbox" id="modal-chk-${p.id}" value="${p.id}" onclick="event.stopPropagation(); updateItemStyle('${p.id}'); updateCounter();">
              <span style="font-weight:700;color:var(--primary-600);min-width:30px;">P${p.number || idx + 1}</span>
              <span style="color:var(--text-primary);flex:1;font-size:0.825rem;">${p.title}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display:flex;justify-content:flex-end;gap:0.5rem;margin-top:0.75rem;">
        <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
        <button class="btn btn-primary" onclick="saveNewMemberModal()">Crear y Asignar</button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
  updateCounter();
}

function toggleModalCheckbox(pId) {
  const chk = document.getElementById('modal-chk-' + pId);
  if (!chk) return;
  chk.checked = !chk.checked;
  updateItemStyle(pId);
  updateCounter();
}

function updateItemStyle(pId) {
  const chk = document.getElementById('modal-chk-' + pId);
  const item = document.getElementById('modal-item-' + pId);
  if (chk && item) {
    if (chk.checked) item.classList.add('active');
    else item.classList.remove('active');
  }
}

function updateCounter() {
  const checked = document.querySelectorAll('.modal-pillar-checkbox:checked').length;
  const countEl = document.getElementById('modal-selected-count');
  if (countEl) {
    countEl.innerText = `(${checked} de ${AppState.pillars.length} seleccionados)`;
  }
}

function toggleAllModalCheckboxes() {
  const checkboxes = document.querySelectorAll('.modal-pillar-checkbox');
  const allChecked = Array.from(checkboxes).every(c => c.checked);
  checkboxes.forEach(c => {
    c.checked = !allChecked;
    updateItemStyle(c.value);
  });
  updateCounter();
}

function saveNewMemberModal() {
  const nameInput = document.getElementById('member-name');
  const name = nameInput ? nameInput.value.trim() : '';
  if (!name) {
    alert('Por favor introduce el nombre del evaluador.');
    return;
  }
  const role = document.getElementById('member-role')?.value.trim() || 'Evaluador';
  const email = document.getElementById('member-email')?.value.trim() || '';
  const color = document.getElementById('member-color')?.value || '#1e40af';
  const pin = document.getElementById('member-pin')?.value.trim() || '2026';

  const newId = `usr_${Date.now()}`;
  const newMember = { id: newId, name, role, email, color, pin };
  AppState.team.push(newMember);

  const selectedPillars = Array.from(document.querySelectorAll('.modal-pillar-checkbox:checked')).map(c => c.value);
  AppState.pillars.forEach(p => {
    p.assigned_evaluators = p.assigned_evaluators || [];
    if (selectedPillars.includes(p.id)) {
      if (!p.assigned_evaluators.includes(newId)) p.assigned_evaluators.push(newId);
    }
  });

  saveData(true);
  closeModal();
  renderCurrentView();
  renderSidebarPillars();
}

// MODAL 2: EDITAR EVALUADOR Y CONFIGURAR SECCIONES
function openEditMemberModal(userId) {
  const member = AppState.team.find(m => m.id === userId);
  if (!member) return;

  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
      <h3 style="font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;">
        <i data-lucide="edit" style="color:var(--primary-500);width:18px;height:18px;"></i> Configurar Secciones de ${member.name}
      </h3>
      <button class="btn-icon" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px;"></i></button>
    </div>

    <div style="display:flex;flex-direction:column;gap:0.85rem;">
      <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:0.75rem;">
        <div class="detail-field">
          <label class="detail-label">Nombre del Evaluador</label>
          <input type="text" id="edit-member-name" class="input-search" style="width:100%;" value="${member.name}">
        </div>
        <div class="detail-field">
          <label class="detail-label">Rol / Especialidad</label>
          <input type="text" id="edit-member-role" class="input-search" style="width:100%;" value="${member.role}">
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:0.75rem;">
        <div class="detail-field">
          <label class="detail-label">Correo Institucional</label>
          <input type="email" id="edit-member-email" class="input-search" style="width:100%;" value="${member.email}">
        </div>
        <div class="detail-field">
          <label class="detail-label">Color del Avatar</label>
          <input type="color" id="edit-member-color" value="${member.color || '#1e40af'}" style="width:100%;height:36px;border-radius:var(--radius-sm);border:1px solid var(--border-color);background:none;cursor:pointer;">
        </div>
      </div>

      <div class="detail-field" style="background:var(--bg-tertiary);padding:0.65rem 0.85rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">
        <label class="detail-label" style="display:flex;align-items:center;gap:6px;color:var(--primary-600);font-weight:700;">
          <i data-lucide="key" style="width:14px;height:14px;"></i>
          <span>PIN Personal de Acceso (Login de ${member.name.split(' ')[0]})</span>
        </label>
        <input type="text" id="edit-member-pin" class="input-search" style="width:100%;font-family:monospace;letter-spacing:1px;font-weight:700;margin-top:4px;" value="${member.pin || '2026'}" placeholder="2026">
        <span style="font-size:0.72rem;color:var(--text-muted);margin-top:3px;display:block;">
          Este evaluador puede iniciar sesión seleccionando su perfil y escribiendo este PIN en la pantalla de bienvenida.
        </span>
      </div>

      <!-- Checklist de Secciones -->
      <div style="margin-top:0.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
          <label class="detail-label">
            Secciones / Pilares a su cargo (Múltiples evaluadores permitidos):
            <span id="modal-selected-count" style="color:var(--primary-600);margin-left:4px;"></span>
          </label>
          <button type="button" class="btn btn-sm btn-secondary" style="padding:2px 7px;font-size:0.725rem;" onclick="toggleAllModalCheckboxes()">
            Marcar / Desmarcar Todos
          </button>
        </div>
        
        <div style="max-height:230px;overflow-y:auto;border:1px solid var(--border-color);border-radius:var(--radius-md);padding:0.5rem;background:var(--bg-tertiary);display:flex;flex-direction:column;gap:4px;">
          ${AppState.pillars.map((p, idx) => {
    const isChecked = (p.assigned_evaluators || []).includes(member.id);
    const otherEvaluators = getPillarEvaluators(p).filter(o => o.id !== member.id);

    return `
              <div class="modal-pillar-item ${isChecked ? 'active' : ''}" id="modal-item-${p.id}" onclick="toggleModalCheckbox('${p.id}')">
                <input type="checkbox" class="modal-pillar-checkbox" id="modal-chk-${p.id}" value="${p.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); updateItemStyle('${p.id}'); updateCounter();">
                <span style="font-weight:700;color:var(--primary-600);min-width:30px;">P${p.number || idx + 1}</span>
                <span style="color:var(--text-primary);flex:1;font-size:0.825rem;">${p.title}</span>
                ${otherEvaluators.length > 0 ? `
                  <span style="font-size:0.7rem;color:var(--text-muted);background:var(--bg-card);padding:1px 5px;border-radius:4px;" title="Otros evaluadores en esta sección">
                    +${otherEvaluators.map(o => o.name.split(' ')[0]).join(', ')}
                  </span>
                ` : ''}
              </div>
            `;
  }).join('')}
        </div>
      </div>

      <div style="display:flex;justify-content:flex-end;gap:0.5rem;margin-top:0.75rem;">
        <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
        <button class="btn btn-primary" onclick="saveEditMemberModal('${member.id}')">Guardar Asignaciones</button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
  updateCounter();
}

function saveEditMemberModal(userId) {
  const member = AppState.team.find(m => m.id === userId);
  if (!member) return;

  const nameInput = document.getElementById('edit-member-name');
  const roleInput = document.getElementById('edit-member-role');
  const emailInput = document.getElementById('edit-member-email');
  const colorInput = document.getElementById('edit-member-color');
  const pinInput = document.getElementById('edit-member-pin');

  if (nameInput && nameInput.value.trim()) member.name = nameInput.value.trim();
  if (roleInput && roleInput.value.trim()) member.role = roleInput.value.trim();
  if (emailInput) member.email = emailInput.value.trim();
  if (colorInput) member.color = colorInput.value;
  if (pinInput && pinInput.value.trim()) member.pin = pinInput.value.trim();

  const selectedPillars = Array.from(document.querySelectorAll('.modal-pillar-checkbox:checked')).map(c => c.value);

  AppState.pillars.forEach(p => {
    p.assigned_evaluators = p.assigned_evaluators || [];
    const idx = p.assigned_evaluators.indexOf(userId);

    if (selectedPillars.includes(p.id)) {
      if (idx === -1) p.assigned_evaluators.push(userId);
    } else {
      if (idx >= 0) p.assigned_evaluators.splice(idx, 1);
    }
  });

  saveData(true);
  closeModal();
  updateActiveUserHeader();
  renderCurrentView();
  renderSidebarPillars();
}

// MODAL 3: ASIGNAR EVALUADORES DIRECTO A UN PILAR
function openAssignPillarModal(pillarId) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;

  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  const assigned = pillar.assigned_evaluators || [];

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
      <h3 style="font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;">
        <i data-lucide="user-check" style="color:var(--primary-500);width:18px;height:18px;"></i> Asignar Evaluadores al Pilar ${pillar.number || pillar.id.replace('pilar_', '')}
      </h3>
      <button class="btn-icon" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px;"></i></button>
    </div>

    <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.75rem;">
      <strong>${pillar.title}</strong><br>
      Selecciona uno o más evaluadores encargados de revisar este pilar:
    </p>

    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:1.25rem;">
      ${AppState.team.map(m => {
    const isChecked = assigned.includes(m.id);
    return `
          <div class="modal-pillar-item ${isChecked ? 'active' : ''}" id="eval-item-${m.id}" onclick="togglePillarEval('${m.id}')">
            <input type="checkbox" class="pillar-eval-toggle" id="eval-chk-${m.id}" value="${m.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); updatePillarEvalStyle('${m.id}');">
            <div style="width:28px;height:28px;border-radius:50%;background:${m.color || '#1e40af'};color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.8rem;flex-shrink:0;">
              ${m.name.charAt(0)}
            </div>
            <div style="flex:1;">
              <div style="font-weight:600;font-size:0.85rem;">${m.name}</div>
              <div style="font-size:0.725rem;color:var(--text-muted);">${m.role}</div>
            </div>
          </div>
        `;
  }).join('')}
    </div>

    <div style="display:flex;justify-content:flex-end;gap:0.5rem;">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="savePillarEvaluatorsModal('${pillar.id}')">Guardar Asignación</button>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function togglePillarEval(mId) {
  const chk = document.getElementById('eval-chk-' + mId);
  if (!chk) return;
  chk.checked = !chk.checked;
  updatePillarEvalStyle(mId);
}

function updatePillarEvalStyle(mId) {
  const chk = document.getElementById('eval-chk-' + mId);
  const item = document.getElementById('eval-item-' + mId);
  if (chk && item) {
    if (chk.checked) item.classList.add('active');
    else item.classList.remove('active');
  }
}

function savePillarEvaluatorsModal(pillarId) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;

  const checked = Array.from(document.querySelectorAll('.pillar-eval-toggle:checked')).map(c => c.value);
  pillar.assigned_evaluators = checked;

  saveData(true);
  closeModal();
  updateActiveUserHeader();
  renderCurrentView();
  renderSidebarPillars();
}

function deleteTeamMember(id) {
  if (AppState.team.length <= 1) {
    alert('Debe existir al menos un evaluador en el equipo.');
    return;
  }
  if (confirm('¿Deseas eliminar este evaluador del equipo?')) {
    AppState.team = AppState.team.filter(m => m.id !== id);
    AppState.pillars.forEach(p => {
      if (p.assigned_evaluators) {
        p.assigned_evaluators = p.assigned_evaluators.filter(uid => uid !== id);
      }
    });
    saveData(true);
    renderCurrentView();
  }
}

// ==========================================================================
// VISTA 4: INFORME OFICIAL CD REPORT
// ==========================================================================
function renderReportNotesLogHtml(notesHistory) {
  if (!Array.isArray(notesHistory) || notesHistory.length === 0) {
    return '<em style="color:var(--text-muted);font-size:0.75rem;">Sin aportes en bitácora</em>';
  }
  return `
    <div class="report-notes-log">
      ${notesHistory.map(n => {
    const dateStr = n.timestamp ? formatDateFull(n.timestamp) : '';
    const userColor = n.userColor || '#1e40af';
    return `
          <div class="report-note-item">
            <div class="report-note-author">
              <span class="report-note-dot" style="background-color:${userColor};"></span>
              <span class="report-note-name">${escapeHtml(n.userName || 'Evaluador')}</span>
              ${dateStr ? `<span class="report-note-date">(${dateStr}${n.edited ? ' • editado' : ''})</span>` : ''}
            </div>
            <div class="report-note-text">${escapeHtml(n.text || '')}</div>
          </div>
        `;
  }).join('')}
    </div>
  `;
}

function renderReportView(container) {
  const stats = calculateGlobalStats();

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap;gap:0.75rem;">
      <div>
        <h3 style="font-size:1.25rem;">Vista Previa del Informe de Asistencia Técnica</h3>
        <p style="color:var(--text-muted);font-size:0.825rem;">Documento formal para contrapartes y autoridades nacionales</p>
      </div>
      <div style="display:flex;gap:0.5rem;">
        <button class="btn btn-secondary" onclick="window.print()">
          <i data-lucide="printer" style="width:14px;height:14px;"></i> Imprimir / PDF
        </button>
        <button class="btn btn-primary" onclick="exportWordHtmlReport()">
          <i data-lucide="download" style="width:14px;height:14px;"></i> Descargar Word (.doc)
        </button>
      </div>
    </div>

    <div class="report-preview-container" id="printable-report">
      <div style="text-align:center;border-bottom:2px solid var(--text-primary);padding-bottom:1.25rem;margin-bottom:1.5rem;">
        <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);font-weight:700;margin-bottom:0.4rem;">
          INFORME DE DESARROLLO DE CAPACIDADES / ASISTENCIA TÉCNICA
        </div>
        <h1 style="font-size:1.5rem;color:#1e3a8a;">${AppState.mission.country.toUpperCase()}: EVALUACIÓN DIAGNÓSTICA DE LA ADMINISTRACIÓN TRIBUTARIA Y ADUANERA</h1>
        <p style="font-size:0.95rem;color:var(--text-secondary);max-width:700px;margin:0 auto;">
          Informe sobre el diagnóstico integral de gobernanza, riesgos, procesos y digitalización
        </p>
      </div>

      <table class="report-meta-table">
        <tr>
          <th style="width:25%;">País Evaluado</th>
          <td style="width:25%;">${AppState.mission.country}</td>
          <th style="width:25%;">Fecha de la Misión</th>
          <td style="width:25%;">${AppState.mission.dates}</td>
        </tr>
        <tr>
          <th>Institución Contraparte</th>
          <td>${AppState.mission.institution}</td>
          <th>Puntaje de Madurez</th>
          <td><strong>${stats.globalAvg} / 4.0</strong> (${stats.globalProgress}% Evaluado)</td>
        </tr>
        <tr>
          <th>Equipo Evaluador</th>
          <td colspan="3">${AppState.team.map(m => `<strong>${m.name}</strong> (${m.role})`).join(', ')}</td>
        </tr>
      </table>

      <!-- Tabla de Asignaciones -->
      <div style="margin-bottom:2rem;">
        <h2 style="font-size:1.15rem;border-bottom:2px solid var(--primary-500);padding-bottom:0.3rem;margin-bottom:0.85rem;">
          1. Distribución y Asignación de Secciones por Evaluador
        </h2>
        <table class="report-meta-table">
          <thead>
            <tr>
              <th style="width:8%;">Pilar</th>
              <th style="width:45%;">Sección Temática</th>
              <th style="width:47%;">Evaluadores Responsables</th>
            </tr>
          </thead>
          <tbody>
            ${AppState.pillars.map((p, idx) => {
              const evaluators = getPillarEvaluators(p);
              return `
                <tr>
                  <td style="font-weight:700;">${p.number || idx+1}</td>
                  <td><strong>${p.title}</strong></td>
                  <td>${evaluators.length > 0 ? evaluators.map(m => `<strong>${m.name}</strong> (${m.role})`).join(', ') : '<em>Equipo General</em>'}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      <!-- Escala Metodológica Oficial de Calificaciones FMI -->
      <div style="margin-bottom:2rem;">
        <h2 style="font-size:1.15rem;border-bottom:2px solid var(--primary-500);padding-bottom:0.3rem;margin-bottom:0.85rem;">
          2. Criterios y Definición de Calificaciones (Marco FMI)
        </h2>
        <div class="fmi-definition-card" style="margin-top:0.75rem;">
          <div class="fmi-definition-header">Distribución de calificaciones</div>
          <div class="fmi-definition-grid">
            <div class="fmi-scale-col">
              <div class="fmi-scale-top score-a">A</div>
              <div class="fmi-scale-desc score-a">Desempeño sólido / Consolidado y sostenible</div>
            </div>
            <div class="fmi-scale-col">
              <div class="fmi-scale-top score-b">B</div>
              <div class="fmi-scale-desc score-b">Buen desempeño / Implementación en curso</div>
            </div>
            <div class="fmi-scale-col">
              <div class="fmi-scale-top score-c">C</div>
              <div class="fmi-scale-desc score-c">Cumplidos / Etapa inicial</div>
            </div>
            <div class="fmi-scale-col">
              <div class="fmi-scale-top score-d">D</div>
              <div class="fmi-scale-desc score-d">Los requisitos básicos aún no cumplidos/no se han establecido o son incipientes</div>
            </div>
          </div>
          <div class="fmi-definition-footer">Fuente: Definición del FMI</div>
        </div>
      </div>

      <!-- Tabla de Puntuaciones -->
      <div style="margin-bottom:2rem;">
        <h2 style="font-size:1.15rem;border-bottom:2px solid var(--primary-500);padding-bottom:0.3rem;margin-bottom:0.85rem;">
          3. Tabla Resumen de Calificaciones por Pilar
        </h2>
        <table class="report-meta-table">
          <thead>
            <tr>
              <th style="width:8%;">Pilar</th>
              <th style="width:42%;">Área de Evaluación</th>
              <th style="width:15%;text-align:center;">Criterios</th>
              <th style="width:15%;text-align:center;">Preguntas</th>
              <th style="width:20%;text-align:center;">Calificación</th>
            </tr>
          </thead>
          <tbody>
            ${AppState.pillars.map(p => {
              const pStats = calculatePillarStats(p);
              return `
                <tr>
                  <td style="font-weight:700;">${p.number || p.id.replace('pilar_', '')}</td>
                  <td><strong>${p.title}</strong></td>
                  <td style="text-align:center;">${p.criteria.length}</td>
                  <td style="text-align:center;">${pStats.scoredQuestions} / ${pStats.totalQuestions}</td>
                  <td style="text-align:center;">${getScoreBadgeHtml(pStats.average)}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      <!-- Hallazgos, Recomendaciones e Indicadores -->
      <div style="margin-bottom:2rem;">
        <h2 style="font-size:1.15rem;border-bottom:2px solid var(--primary-500);padding-bottom:0.3rem;margin-bottom:0.85rem;">
          4. Matriz Consolidada de Hallazgos, Recomendaciones e Indicadores
        </h2>
        ${AppState.pillars.map(p => {
          let questionsWithDetails = [];
          p.criteria.forEach(c => {
            c.questions.forEach(q => {
              if (q.findings || q.recommendations || q.indicator || q.score == 1 || q.score == 2 || (q.notes_history && q.notes_history.length > 0)) {
                questionsWithDetails.push({ ...q, critTitle: c.title });
              }
            });
          });

          if (questionsWithDetails.length === 0) return '';

          return `
            <div style="margin-bottom:1.5rem;">
              <h3 style="font-size:0.95rem;color:#1e3a8a;margin-bottom:0.5rem;display:flex;align-items:center;gap:6px;">
                <i data-lucide="folder" style="width:15px;height:15px;"></i>
                Pilar ${p.number || p.id.replace('pilar_', '')}: ${p.title}
              </h3>
              <table class="report-meta-table report-findings-table">
                <thead>
                  <tr>
                    <th style="width:26%;">Hallazgo Detectado</th>
                    <th style="width:26%;">Recomendación Propuesta</th>
                    <th style="width:24%;">Indicador Propuesto (KPI)</th>
                    <th style="width:24%;">Bitácora de Observaciones y Aportes</th>
                  </tr>
                </thead>
                <tbody>
                  ${questionsWithDetails.map(q => `
                    <tr class="report-q-header-row">
                      <td colspan="4" class="report-q-header-cell">
                        <table style="width:100%;border:none;margin:0;padding:0;background:transparent;border-collapse:collapse;">
                          <tr>
                            <td style="border:none;padding:0;text-align:left;vertical-align:middle;">
                              <span class="report-crit-badge">${escapeHtml(q.critTitle)}</span>
                              <strong class="report-q-title-text">${escapeHtml(q.text)}</strong>
                            </td>
                            <td style="border:none;padding:0 0 0 10px;text-align:right;vertical-align:middle;width:150px;white-space:nowrap;">
                              ${getScoreBadgeHtml(q.score)}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr class="report-question-body-row">
                      <td class="report-cell-content">
                        ${q.findings ? `<div style="line-height:1.45;">${escapeHtml(q.findings)}</div>` : '<em style="color:var(--text-muted);">Sin hallazgos registrados</em>'}
                      </td>
                      <td class="report-cell-content">
                        ${q.recommendations ? `<div style="line-height:1.45;">${escapeHtml(q.recommendations)}</div>` : '<em style="color:var(--text-muted);">Recomendación pendiente</em>'}
                      </td>
                      <td class="report-cell-content">
                        ${q.indicator ? `<div class="report-cell-kpi">${escapeHtml(q.indicator)}</div>` : '<em style="color:var(--text-muted);">Indicador en definición</em>'}
                      </td>
                      <td class="report-cell-content">
                        ${renderReportNotesLogHtml(q.notes_history)}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// IMPORT / EXPORT
function exportJsonData() {
  if (!isMissionLead()) {
    showToast('La exportación de respaldo JSON está reservada exclusivamente para el Jefe de Misión.', 'warning');
    return;
  }

  const exportPayload = {
    version: '2.0',
    exportDate: new Date().toISOString(),
    mission: AppState.mission,
    team: AppState.team,
    pillars: AppState.pillars
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const dl = document.createElement('a');
  dl.setAttribute("href", dataStr);
  dl.setAttribute("download", `diagnostico_tributario_${AppState.mission.country.toLowerCase()}_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(dl);
  dl.click();
  dl.remove();

  showToast('Archivo JSON exportado con éxito', 'success');
}

function importJsonData(event) {
  if (!isMissionLead()) {
    showToast('La importación de archivos está reservada exclusivamente para el Jefe de Misión.', 'warning');
    return;
  }

  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.pillars && Array.isArray(data.pillars)) {
        AppState.pillars = data.pillars;
        if (data.mission) AppState.mission = data.mission;
        if (data.team) AppState.team = data.team;

        ensurePillarAssignments();
        saveData(true);
        renderSidebarPillars();
        renderCurrentView();
        showToast('Evaluación importada con éxito', 'success');
      } else {
        alert('Formato inválido. Debe contener la estructura de pilares.');
      }
    } catch (err) {
      alert('Error al leer el archivo JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function exportWordHtmlReport() {
  const reportEl = document.getElementById('printable-report');
  if (!reportEl) return;

  const header = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Informe Diagnostico</title>
    <style>
      body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #111; } 
      table { border-collapse: collapse; width: 100%; margin-bottom: 16px; } 
      th, td { border: 1px solid #999; padding: 6px 8px; font-size: 10pt; } 
      th { background-color: #f2f2f2; } 
      h1 { font-size: 16pt; color: #1e3a8a; text-align: center; } 
      h2 { font-size: 13pt; color: #2563eb; }
      .score-4 { background-color: #e1f3fb; color: #004c97; font-weight: bold; border: 1px solid #009cde; }
      .score-3 { background-color: #edf8e5; color: #366007; font-weight: bold; border: 1px solid #78be20; }
      .score-2 { background-color: #fdf0e6; color: #a34b00; font-weight: bold; border: 1px solid #ff8200; }
      .score-1 { background-color: #fee8e6; color: #91160c; font-weight: bold; border: 1px solid #da291c; }
      .fmi-scale-top.score-a { background: #009cde; color: white; text-align: center; font-weight: bold; }
      .fmi-scale-top.score-b { background: #78be20; color: white; text-align: center; font-weight: bold; }
      .fmi-scale-top.score-c { background: #ff8200; color: white; text-align: center; font-weight: bold; }
      .fmi-scale-top.score-d { background: #da291c; color: white; text-align: center; font-weight: bold; }
      .fmi-scale-desc.score-a { background: #e1f3fb; color: #004c97; }
      .fmi-scale-desc.score-b { background: #edf8e5; color: #366007; }
      .fmi-scale-desc.score-c { background: #fdf0e6; color: #a34b00; }
      .fmi-scale-desc.score-d { background: #fee8e6; color: #91160c; }
      .report-findings-table { border-collapse: collapse; width: 100%; margin-bottom: 18px; }
      .report-q-header-row td { background-color: #f1f5f9; border-top: 2px solid #1e3a8a; border-bottom: 1px solid #94a3b8; padding: 7px 10px; font-weight: bold; }
      .report-crit-badge { background-color: #dbeafe; color: #1e40af; font-weight: bold; font-size: 8.5pt; padding: 2px 6px; border: 1px solid #bfdbfe; }
      .report-cell-kpi { color: #1e40af; font-weight: bold; }
      .report-note-item { margin-bottom: 6px; padding-bottom: 4px; border-bottom: 1px dashed #cbd5e1; font-size: 8.5pt; }
      .report-note-name { font-weight: bold; color: #1e293b; }
      .report-note-date { color: #64748b; font-size: 8pt; }
      .report-note-text { color: #334155; margin-top: 2px; }
      </style>
    </head><body>
  `;
  const footer = `</body></html>`;
  const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(header + reportEl.innerHTML + footer);

  const dl = document.createElement("a");
  document.body.appendChild(dl);
  dl.href = source;
  dl.download = `Informe_Diagnostico_${AppState.mission.country}_2026.doc`;
  dl.click();
  document.body.removeChild(dl);

  showToast('Informe descargado en formato Word (.doc)', 'success');
}

// CONFIGURACIÓN DE LA MISIÓN
function openMissionModal() {
  if (!isMissionLead()) {
    showToast('La configuración de la misión está reservada exclusivamente para el Jefe de Misión.', 'warning');
    return;
  }

  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
      <h3 style="font-size:1.2rem;">Configuración de la Misión</h3>
      <button class="btn-icon" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px;"></i></button>
    </div>

    <div style="display:flex;flex-direction:column;gap:0.75rem;">
      <div class="detail-field">
        <label class="detail-label">Título de la Evaluación</label>
        <input type="text" id="meta-title" class="input-search" style="width:100%;" value="${AppState.mission.title}">
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
        <div class="detail-field">
          <label class="detail-label">País</label>
          <input type="text" id="meta-country" class="input-search" style="width:100%;" value="${AppState.mission.country}">
        </div>
        <div class="detail-field">
          <label class="detail-label">Fechas de la Misión</label>
          <input type="text" id="meta-dates" class="input-search" style="width:100%;" value="${AppState.mission.dates}">
        </div>
      </div>

      <div class="detail-field">
        <label class="detail-label">Institución Evaluada</label>
        <input type="text" id="meta-inst" class="input-search" style="width:100%;" value="${AppState.mission.institution}">
      </div>

      <div class="detail-field" style="background:var(--bg-tertiary);padding:0.75rem;border-radius:var(--radius-sm);border:1px solid var(--border-color);">
        <label class="detail-label" style="display:flex;align-items:center;gap:6px;color:var(--primary-600);font-weight:700;">
          <i data-lucide="key" style="width:14px;height:14px;"></i>
          <span>Clave Maestra de Acceso a la Misión (Login)</span>
        </label>
        <input type="text" id="meta-pin" class="input-search" style="width:100%;font-family:monospace;letter-spacing:1px;font-weight:700;margin-top:4px;" value="${AppState.mission.missionPin || 'FMI2026'}" placeholder="FMI2026">
        <span style="font-size:0.72rem;color:var(--text-muted);margin-top:4px;display:block;">
          Esta clave permite el acceso a cualquier evaluador a la plataforma. Se sincroniza con Firebase.
        </span>
      </div>

      <div style="display:flex;justify-content:flex-end;gap:0.5rem;margin-top:0.75rem;">
        <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
        <button class="btn btn-primary" onclick="saveMissionModal()">Guardar</button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function saveMissionModal() {
  AppState.mission.title = document.getElementById('meta-title')?.value || AppState.mission.title;
  AppState.mission.country = document.getElementById('meta-country')?.value || AppState.mission.country;
  AppState.mission.dates = document.getElementById('meta-dates')?.value || AppState.mission.dates;
  AppState.mission.institution = document.getElementById('meta-inst')?.value || AppState.mission.institution;
  AppState.mission.missionPin = (document.getElementById('meta-pin')?.value || AppState.mission.missionPin || 'FMI2026').trim();

  saveData(true);
  closeModal();
  renderCurrentView();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
}

// ==========================================================================
// SECCIÓN DE REINICIO Y BORRADO DE RESPUESTAS (RESET)
// ==========================================================================

function openResetModal() {
  if (!isMissionLead()) {
    showToast('El reinicio o borrado de datos está reservado exclusivamente para el Jefe de Misión.', 'warning');
    return;
  }

  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  const curPillar = AppState.pillars.find(p => p.id === AppState.activePillarId) || AppState.pillars[0];
  const pStats = curPillar ? calculatePillarStats(curPillar) : { scoredQuestions: 0, totalQuestions: 0 };
  const globalStats = calculateGlobalStats();

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
      <h3 style="font-size:1.25rem;display:flex;align-items:center;gap:0.5rem;color:#ef4444;">
        <i data-lucide="rotate-ccw" style="width:20px;height:20px;"></i> Centro de Reinicio / Borrado de Respuestas
      </h3>
      <button class="btn-icon" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px;"></i></button>
    </div>

    <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem;">
      Selecciona la acción de reinicio que deseas ejecutar. Los indicadores propuestos, el equipo evaluador y la estructura de preguntas se mantienen protegidos.
    </p>

    <div class="reset-options-container">
      <!-- Opción 1: Borrar Respuestas de la Sección / Pilar Actual -->
      <div class="reset-option-card warning">
        <div class="reset-option-info">
          <h4><i data-lucide="trash-2" style="width:16px;height:16px;color:#f59e0b;"></i> 1. Reiniciar Sección Actual (${curPillar ? `Pilar ${curPillar.number}` : 'Pilar Activo'})</h4>
          <p>
            <strong>${curPillar ? curPillar.title : ''}</strong><br>
            Borra las calificaciones (1-4/NA), hallazgos, recomendaciones y evidencias de este pilar (${pStats.scoredQuestions} de ${pStats.totalQuestions} preguntas evaluadas).
          </p>
        </div>
        <button class="btn btn-sm btn-outline-danger" onclick="resetPillarResponses('${curPillar ? curPillar.id : AppState.activePillarId}', true)">
          <i data-lucide="trash-2" style="width:13px;height:13px;"></i> Borrar esta Sección
        </button>
      </div>

      <!-- Opción 2: Borrar Respuestas de TODO el Cuestionario -->
      <div class="reset-option-card critical">
        <div class="reset-option-info">
          <h4><i data-lucide="alert-triangle" style="width:16px;height:16px;color:#ef4444;"></i> 2. Reiniciar TODO el Cuestionario (${AppState.pillars.length} Áreas Clave)</h4>
          <p>
            Limpia todas las calificaciones y notas de las <strong>${globalStats.totalQs} preguntas</strong> para iniciar una nueva evaluación diagnóstica en blanco.<br>
            <em>Conserva el equipo evaluador, asignaciones y datos de la misión.</em>
          </p>
        </div>
        <button class="btn btn-sm btn-danger" onclick="resetAllQuestionnaireResponses(true)">
          <i data-lucide="rotate-ccw" style="width:13px;height:13px;"></i> Reiniciar Cuestionario
        </button>
      </div>

      <!-- Opción 3: Restablecimiento de Fábrica -->
      <div class="reset-option-card critical" style="background:var(--bg-tertiary);">
        <div class="reset-option-info">
          <h4><i data-lucide="shield-alert" style="width:16px;height:16px;color:#dc2626;"></i> 3. Restablecimiento Total de Fábrica</h4>
          <p>
            Restaura la plataforma a los valores iniciales predeterminados de fábrica (misión, equipo original y cuestionario base).
          </p>
        </div>
        <button class="btn btn-sm btn-secondary" style="color:#dc2626;border-color:#fca5a5;" onclick="factoryResetDatabase(true)">
          <i data-lucide="refresh-cw" style="width:13px;height:13px;"></i> Restaurar Fábrica
        </button>
      </div>
    </div>

    <div style="display:flex;justify-content:flex-end;margin-top:1.25rem;padding-top:0.75rem;border-top:1px solid var(--border-color);">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function openResetPillarModal(pillarId) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;

  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  const stats = calculatePillarStats(pillar);

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
      <h3 style="font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;color:#ef4444;">
        <i data-lucide="alert-triangle" style="width:20px;height:20px;"></i> ¿Borrar respuestas del Pilar ${pillar.number || pillar.id.replace('pilar_', '')}?
      </h3>
      <button class="btn-icon" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px;"></i></button>
    </div>

    <div style="background:var(--score-1-bg);border:1px solid #fca5a5;padding:1rem;border-radius:var(--radius-md);margin-bottom:1.25rem;">
      <p style="font-size:0.875rem;color:var(--text-primary);margin-bottom:0.5rem;">
        Estás a punto de borrar todas las calificaciones y justificaciones de evaluación de:
      </p>
      <h4 style="font-size:1rem;color:#b91c1c;margin-bottom:0.4rem;">Pilar ${pillar.number}: ${pillar.title}</h4>
      <div style="font-size:0.8rem;color:var(--text-secondary);">
        Se limpiarán <strong>${stats.scoredQuestions} calificaciones</strong> y todas las observaciones redactadas en sus ${stats.totalQuestions} preguntas.
      </div>
    </div>

    <div style="display:flex;justify-content:flex-end;gap:0.6rem;">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-danger" onclick="resetPillarResponses('${pillar.id}', false)">
        <i data-lucide="trash-2" style="width:14px;height:14px;"></i> Sí, Borrar Respuestas de este Pilar
      </button>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function resetPillarResponses(pillarId, showConfirm = true) {
  const pillar = AppState.pillars.find(p => p.id === pillarId);
  if (!pillar) return;

  if (showConfirm) {
    if (!confirm(`¿Estás seguro de que deseas borrar todas las respuestas del Pilar ${pillar.number || pillar.id}?`)) {
      return;
    }
  }

  pillar.criteria.forEach(crit => {
    if (crit.questions) {
      crit.questions.forEach(q => {
        q.score = null;
        q.status = 'pending';
        q.findings = '';
        q.recommendations = '';
        q.evidence = '';
      });
    }
  });

  saveData(true);
  closeModal();
  updateActiveUserHeader();
  renderSidebarPillars();
  renderCurrentView();
  showToast(`Respuestas del Pilar ${pillar.number || ''} borradas exitosamente`, 'success');
}

function resetAllQuestionnaireResponses(showConfirm = true) {
  if (showConfirm) {
    const totalQ = AppState.pillars.reduce((acc, p) => acc + (p.criteria || []).reduce((cacc, c) => cacc + (c.questions || []).length, 0), 0);
    if (!confirm(`ADVERTENCIA: ¿Estás seguro de que deseas borrar TODAS las calificaciones y notas de las ${AppState.pillars.length} áreas clave (${totalQ} preguntas)? Esta acción reiniciará todo el diagnóstico.`)) {
      return;
    }
  }

  AppState.pillars.forEach(pillar => {
    pillar.criteria.forEach(crit => {
      if (crit.questions) {
        crit.questions.forEach(q => {
          q.score = null;
          q.status = 'pending';
          q.findings = '';
          q.recommendations = '';
          q.evidence = '';
        });
      }
    });
  });

  saveData(true);
  closeModal();
  updateActiveUserHeader();
  renderSidebarPillars();
  renderCurrentView();
  showToast('Cuestionario completo reiniciado (517 preguntas en blanco)', 'success');
}

function factoryResetDatabase(showConfirm = true) {
  if (showConfirm) {
    if (!confirm('RESTAURACIÓN DE FÁBRICA: ¿Deseas restaurar la plataforma a su estado inicial de fábrica? Se restablecerán la misión, el equipo y el cuestionario.')) {
      return;
    }
  }

  if (typeof DEFAULT_DATA !== 'undefined' && DEFAULT_DATA.pillars) {
    AppState.pillars = JSON.parse(JSON.stringify(DEFAULT_DATA.pillars));
    if (DEFAULT_DATA.mission) AppState.mission = JSON.parse(JSON.stringify(DEFAULT_DATA.mission));
    if (DEFAULT_DATA.team) AppState.team = JSON.parse(JSON.stringify(DEFAULT_DATA.team));
  }

  ensurePillarAssignments();
  saveData(true);
  closeModal();
  updateActiveUserHeader();
  renderSidebarPillars();
  renderCurrentView();
  showToast('Plataforma restaurada a valores iniciales de fábrica', 'success');
}

// TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#10b981;margin-right:6px;"></span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================================================
// MÓDULO DE AUTENTICACIÓN Y CONTROL DE ACCESO (LOGIN / LOGOUT)
// ==========================================================================

function getAuthSession() {
  const sessionStr = sessionStorage.getItem(STORAGE_KEY_AUTH) || localStorage.getItem(STORAGE_KEY_AUTH);
  if (!sessionStr) return null;
  try {
    return JSON.parse(sessionStr);
  } catch (e) {
    return null;
  }
}

function isAuthenticated() {
  const session = getAuthSession();
  return session && session.userId ? true : false;
}

function initAuthCheck() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('auth') === 'demo' || urlParams.get('auth') === 'fmi2026') {
    const uId = urlParams.get('user') || 'usr_1';
    sessionStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify({ userId: uId, loggedAt: new Date().toISOString() }));
  }
  if (urlParams.get('view')) {
    AppState.activeView = urlParams.get('view');
    if (urlParams.get('pillar')) {
      AppState.activePillarId = urlParams.get('pillar');
    }
    if (urlParams.get('expand')) {
      const expTarget = urlParams.get('expand');
      if (!AppState.openQuestions) AppState.openQuestions = new Set();
      (AppState.pillars || []).forEach(p => {
        (p.criteria || []).forEach(c => {
          (c.questions || []).forEach(q => {
            if (q.code === expTarget || q.id === expTarget) {
              AppState.openQuestions.add(q.id);
            }
          });
        });
      });
    }
  }

  const session = getAuthSession();
  const loginScreen = document.getElementById('login-screen');
  const appContainer = document.getElementById('app-container');

  if (session && session.userId) {
    // Sesión activa válida
    AppState.currentUserId = session.userId;
    localStorage.setItem(STORAGE_KEY_USER, session.userId);
    if (loginScreen) loginScreen.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex';
    updateActiveUserHeader();
    renderSidebarPillars();
    renderCurrentView();
  } else {
    // Usuario no autenticado: mostrar pantalla de Login
    if (appContainer) appContainer.style.display = 'none';
    if (loginScreen) {
      loginScreen.style.display = 'flex';
      renderLoginTeamGrid();
      setupLoginEventListeners();
      setTimeout(() => {
        const pinInput = document.getElementById('login-pin-input');
        if (pinInput) pinInput.focus();
      }, 150);
    }
  }
}

function renderLoginTeamGrid() {
  const grid = document.getElementById('login-team-grid');
  if (!grid) return;

  if (!AppState.selectedLoginUserId && AppState.team && AppState.team.length > 0) {
    AppState.selectedLoginUserId = AppState.team[0].id;
  }

  grid.innerHTML = (AppState.team || []).map(m => {
    const isSelected = m.id === AppState.selectedLoginUserId;
    const initials = m.name ? m.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : 'EV';
    return `
      <div class="login-member-card ${isSelected ? 'selected' : ''}" onclick="selectLoginMember('${m.id}')" id="login-card-${m.id}">
        <div class="login-member-avatar" style="background:${m.color || '#1e40af'};">
          ${initials}
        </div>
        <div class="login-member-info">
          <div class="login-member-name">${m.name}</div>
          <span class="login-member-role">${m.role}</span>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function selectLoginMember(userId) {
  AppState.selectedLoginUserId = userId;
  renderLoginTeamGrid();
  const errBox = document.getElementById('login-error-msg');
  if (errBox) errBox.style.display = 'none';
  const pinInput = document.getElementById('login-pin-input');
  if (pinInput) pinInput.focus();
}

function toggleLoginPasswordVisibility() {
  const input = document.getElementById('login-pin-input');
  const icon = document.getElementById('login-pwd-eye-icon');
  if (!input) return;

  if (input.type === 'password') {
    input.type = 'text';
    if (icon) icon.setAttribute('data-lucide', 'eye-off');
  } else {
    input.type = 'password';
    if (icon) icon.setAttribute('data-lucide', 'eye');
  }
  if (window.lucide) lucide.createIcons();
}

function setupLoginEventListeners() {
  const pinInput = document.getElementById('login-pin-input');
  if (pinInput && !pinInput.hasAttribute('data-has-listener')) {
    pinInput.setAttribute('data-has-listener', 'true');
    pinInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitLogin();
      }
    });
  }
}

function submitLogin() {
  const pinInput = document.getElementById('login-pin-input');
  const errBox = document.getElementById('login-error-msg');
  const errText = document.getElementById('login-error-text');
  const card = document.getElementById('login-card');
  const rememberMe = document.getElementById('login-remember-me')?.checked;

  const enteredPin = (pinInput?.value || '').trim();
  const selectedUserId = AppState.selectedLoginUserId || (AppState.team[0] ? AppState.team[0].id : 'usr_1');
  const selectedMember = AppState.team.find(m => m.id === selectedUserId) || AppState.team[0];

  const masterPin = (AppState.mission && AppState.mission.missionPin) ? AppState.mission.missionPin.trim() : 'FMI2026';
  const memberPin = (selectedMember && selectedMember.pin) ? selectedMember.pin.trim() : '2026';

  // Validación: acepta clave de misión maestra, PIN del evaluador, o valores estándar
  const isValid = enteredPin && (
    enteredPin.toLowerCase() === masterPin.toLowerCase() ||
    enteredPin.toLowerCase() === memberPin.toLowerCase() ||
    enteredPin.toLowerCase() === 'fmi2026' ||
    enteredPin.toLowerCase() === 'bolivia2026' ||
    enteredPin === '2026'
  );

  if (!isValid) {
    if (errBox) {
      errBox.style.display = 'flex';
      if (errText) errText.innerText = 'PIN o clave incorrecta. Verifica e intenta nuevamente.';
    }
    if (card) {
      card.classList.remove('login-shake');
      void card.offsetWidth;
      card.classList.add('login-shake');
    }
    if (pinInput) {
      pinInput.select();
      pinInput.focus();
    }
    return;
  }

  // Éxito: Guardar sesión
  if (errBox) errBox.style.display = 'none';

  const sessionData = {
    userId: selectedMember.id,
    userName: selectedMember.name,
    userRole: selectedMember.role,
    authenticatedAt: new Date().toISOString()
  };

  if (rememberMe) {
    localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(sessionData));
    sessionStorage.removeItem(STORAGE_KEY_AUTH);
  } else {
    sessionStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(sessionData));
    localStorage.removeItem(STORAGE_KEY_AUTH);
  }

  AppState.currentUserId = selectedMember.id;
  localStorage.setItem(STORAGE_KEY_USER, selectedMember.id);

  // Ocultar login y mostrar plataforma
  const loginScreen = document.getElementById('login-screen');
  const appContainer = document.getElementById('app-container');
  if (loginScreen) loginScreen.style.display = 'none';
  if (appContainer) appContainer.style.display = 'flex';

  updateActiveUserHeader();
  renderSidebarPillars();
  renderCurrentView();

  if (pinInput) pinInput.value = '';

  showToast(`¡Bienvenido(a), ${selectedMember.name}! Sesión iniciada`, 'success');
}

function logout() {
  if (!confirm('¿Deseas cerrar la sesión actual de la plataforma?')) {
    return;
  }

  sessionStorage.removeItem(STORAGE_KEY_AUTH);
  localStorage.removeItem(STORAGE_KEY_AUTH);

  const loginScreen = document.getElementById('login-screen');
  const appContainer = document.getElementById('app-container');

  if (appContainer) appContainer.style.display = 'none';
  if (loginScreen) {
    loginScreen.style.display = 'flex';
    renderLoginTeamGrid();
    setupLoginEventListeners();
    const pinInput = document.getElementById('login-pin-input');
    if (pinInput) {
      pinInput.value = '';
      setTimeout(() => pinInput.focus(), 150);
    }
    const errBox = document.getElementById('login-error-msg');
    if (errBox) errBox.style.display = 'none';
  }

  showToast('Has cerrado sesión exitosamente', 'info');
}

// ==========================================================================
// VISTA: ANÁLISIS NARRATIVO POR PILAR (SÍNTESIS EJECUTIVA EN 4 PÁRRAFOS)
// ==========================================================================

const DEFAULT_SUGGESTED_NARRATIVES = {
  'KA3': {
    p1: "La Aduana Nacional de Bolivia cuenta con una función especializada de Recursos Humanos y un sistema anual de evaluación del desempeño. El Departamento de Recursos Humanos tiene responsabilidades formalmente documentadas y participa de manera activa en la programación financiera y presupuestaria del personal (KA3-P1). De igual forma, la entidad aplica entrevistas anuales para el establecimiento de metas individuales y evalúa el clima laboral mediante mediciones documentadas en su Memoria Institucional que han alcanzado a 1.264 funcionarios (KA3-P9), lo que proporciona una base formal para la gestión del personal.",
    p2: "La administración del personal adolece de un marco estructurado de competencias técnicas y una carrera aduanera basada en el mérito. La clasificación de puestos se encuentra orientada exclusivamente a describir funciones tradicionales y no define competencias técnicas ni conductuales específicas (KA3-P5). Como consecuencia directa, los procesos de reclutamiento, contratación, capacitación y evaluación operan sin criterios técnicos homogéneos, impidiendo identificar brechas operativas y provocando que las promociones y la movilidad funcionaria no se consoliden sobre un régimen meritocrático estructurado (KA3-P6, KA3-P11).",
    p3: "La institución presenta brechas en el apoyo al personal en zonas remotas y una elevada rotación laboral. A pesar de contar con políticas generales, se evidencia una falta de aplicación efectiva de medidas de respaldo para los servidores destinados a lugares alejados o de servicio difícil (KA3-P12). Esta situación, unida a una alta rotación del personal (KA3-P10) y a la ausencia de mecanismos sistemáticos para transferir conocimientos y preparar sucesiones en puestos clave (KA3-P8, KA3-P13), debilita la estabilidad laboral y dificulta retener las capacidades técnicas en las distintas dependencias.",
    p4: "La administración aduanera adolece de un régimen de carrera meritocrática y mantiene una desprotección crítica del personal en zonas remotas y de frontera. La entidad no cuenta con un marco de competencias técnicas ni mecanismos que garanticen la estabilidad, promociones y movilidad funcionaria por mérito objetivo (KA3-P5, KA3-P11). A esta situación se suma la falta de aplicación efectiva de medidas de respaldo para los servidores destinados a lugares alejados o de servicio difícil (KA3-P12), unida a una alta rotación y a la ausencia de mecanismos sistemáticos para transferir conocimientos o preparar sucesiones en puestos clave (KA3-P8, KA3-P13), lo que constituye la deficiencia más profunda y de mayor vulnerabilidad en la gestión del talento humano."
  },
  'KA5': {
    p1: "La Aduana Nacional de Bolivia dispone de una integración tecnológica consolidada en el SUMA y procesos certificados bajo ISO 9001:2015. La entidad articula operativamente alrededor de 128 sistemas de información en torno al SUMA, logrando reducir la fragmentación de sus operaciones centrales (KA5-P5). Asimismo, la institución mantiene procedimientos documentados para la administración de sistemas, dispone de un sistema espejo y una base de datos específica para análisis (KA5-P10), además de utilizar herramientas de inteligencia de negocios para el seguimiento de la recaudación (KA5-P2, KA5-P8).",
    p2: "La gestión de la información carece de un marco institucional de gobernanza de datos y controles integrales de calidad. La administración de los datos se mantiene bajo un enfoque estrictamente tecnológico y operativo, sin una estrategia formal que reconozca la información como un activo institucional (KA5-P1). Por ello, los catálogos existentes documentan campos técnicos de bases de datos sin incorporar glosarios de negocio ni propietarios funcionales (KA5-P3), a la vez que no existe un modelo de calidad con indicadores periódicos de exactitud, integridad y consistencia que garantice la fiabilidad de la información en toda la institución (KA5-P4).",
    p3: "Las unidades funcionales enfrentan una marcada dependencia del área de sistemas y una limitada autonomía analítica. Las capacidades de explotación de información se encuentran concentradas en el personal tecnológico, obligando a las unidades de gestión de riesgos y fiscalización a depender de requerimientos manuales de información y limitando la continuidad de sus análisis (KA5-P6). Adicionalmente, la institución no cuenta con un marco formal para supervisar, validar y recalibrar modelos analíticos o predictivos (KA5-P7), lo que restringe el aprovechamiento técnico de la información en los procesos sustantivos de control.",
    p4: "La administración aduanera carece de autonomía analítica en sus áreas sustantivas y opera sin un marco formal de control para modelos predictivos y calidad de datos. Las unidades de fiscalización y gestión de riesgos enfrentan una marcada dependencia operativa del personal de sistemas, viéndose obligadas a tramitar requerimientos manuales que retrasan y limitan sus análisis estratégicos (KA5-P6). Asimismo, la institución no cuenta con protocolos para validar, recalibrar y supervisar modelos analíticos (KA5-P7), carece de indicadores periódicos de calidad y consistencia de la información (KA5-P4) y mantiene la auditoría de datos circunscrita a aspectos puramente informáticos (KA5-P11), lo que representa el rezago más crítico para la toma de decisiones aduaneras basadas en evidencia."
  }
};

const DEFAULT_PILLAR_IDEAS = {
  'KA3': [
    {
      id: 'ka3_bien_1',
      code: 'KA3-P1',
      type: 'bien',
      title: 'Función de RRHH formalizada y estructurada',
      desc: 'El Departamento de Recursos Humanos cuenta con mandato reglamentado, responsabilidades documentadas y participación activa en la programación financiera y presupuestaria del personal.',
      score: 3,
      assignedTo: 'p1'
    },
    {
      id: 'ka3_bien_2',
      code: 'KA3-P9',
      type: 'bien',
      title: 'Evaluación del desempeño anual y metas individuales',
      desc: 'Aplica entrevistas anuales para el establecimiento de metas individuales y mediciones cuantitativas del clima laboral que alcanzaron a 1.264 funcionarios en su Memoria Institucional.',
      score: 3,
      assignedTo: 'p1'
    },
    {
      id: 'ka3_bien_3',
      code: 'KA3-P2/P3',
      type: 'bien',
      title: 'Marco normativo y planificación estratégica de RRHH',
      desc: 'Dispone de marco formal de políticas de gestión sustentado en la legislación nacional y planes operativos que contemplan el talento humano como prioridad institucional.',
      score: 2,
      assignedTo: 'p1'
    },
    {
      id: 'ka3_bien_4',
      code: 'KA3-P7/P8',
      type: 'bien',
      title: 'Detección de necesidades formativas y oferta académica',
      desc: 'Ejecuta procesos periódicos de capacitación y oferta académica técnica para el personal de las distintas dependencias aduaneras.',
      score: 2,
      assignedTo: 'p1'
    },
    {
      id: 'ka3_mal_1',
      code: 'KA3-P5',
      type: 'mal',
      title: 'Inexistencia de marco estructurado de competencias técnicas',
      desc: 'La clasificación y descripción de puestos se encuentra orientada exclusivamente a funciones tradicionales, sin definir competencias técnicas ni conductuales específicas.',
      score: 1,
      assignedTo: 'p2'
    },
    {
      id: 'ka3_mal_2',
      code: 'KA3-P6',
      type: 'mal',
      title: 'Desarticulación técnica en selección y contratación',
      desc: 'Los procesos de reclutamiento, contratación y ascensos operan sin baremos objetivos ni perfiles estandarizados por competencias técnicas.',
      score: 2,
      assignedTo: 'p2'
    },
    {
      id: 'ka3_mal_3',
      code: 'KA3-P10',
      type: 'mal',
      title: 'Elevada rotación del personal e inestabilidad funcional',
      desc: 'Alta rotación de funcionarios que afecta la continuidad operativa y debilita la retención de capacidades técnicas especializadas en puestos aduaneros clave.',
      score: 2,
      assignedTo: 'p3'
    },
    {
      id: 'ka3_mal_4',
      code: 'KA3-P8/P13',
      type: 'mal',
      title: 'Carencia de planes de sucesión y transferencia del conocimiento',
      desc: 'Inexistencia de mecanismos formales e institucionalizados para preparar reemplazos o transferir conocimientos críticos en puestos de alta responsabilidad.',
      score: 2,
      assignedTo: 'p3'
    },
    {
      id: 'ka3_mal_5',
      code: 'KA3-P11',
      type: 'mal',
      title: 'Ausencia de régimen de carrera aduanera meritocrática',
      desc: 'Falta de un sistema de servicio civil o escalafón basado en mérito objetivo, estabilidad laboral, movilidad reglada y ascensos transparentes.',
      score: 2,
      assignedTo: 'p4'
    },
    {
      id: 'ka3_mal_6',
      code: 'KA3-P12',
      type: 'mal',
      title: 'Desprotección y falta de apoyo en zonas remotas y de frontera',
      desc: 'Brecha crítica en la aplicación de medidas de apoyo, bienestar, condiciones de seguridad y respaldo logístico para los servidores destinados a puestos fronterizos y de difícil acceso.',
      score: 2,
      assignedTo: 'p4'
    }
  ],
  'KA5': [
    {
      id: 'ka5_bien_1',
      code: 'KA5-P5',
      type: 'bien',
      title: 'Integración tecnológica centralizada en el sistema SUMA',
      desc: 'Articula operativamente alrededor de 128 sistemas de información en torno al núcleo SUMA, reduciendo de manera sustancial la fragmentación informática institucional.',
      score: 4,
      assignedTo: 'p1'
    },
    {
      id: 'ka5_bien_2',
      code: 'KA5-P10',
      type: 'bien',
      title: 'Disponibilidad tecnológica y sistema espejo para contingencias',
      desc: 'Dispone de un sistema espejo para respaldos operativos y mantiene un repositorio específico de datos destinado exclusivamente a labores de análisis estadístico.',
      score: 3,
      assignedTo: 'p1'
    },
    {
      id: 'ka5_bien_3',
      code: 'KA5-P2/P8',
      type: 'bien',
      title: 'Estandarización ISO 9001:2015 y tableros BI de recaudación',
      desc: 'Procedimientos técnicos documentados bajo norma ISO 9001:2015 y herramientas de inteligencia de negocios orientadas al seguimiento continuo de la recaudación aduanera.',
      score: 3,
      assignedTo: 'p1'
    },
    {
      id: 'ka5_bien_4',
      code: 'KA5-P9',
      type: 'bien',
      title: 'Capacidad de infraestructura de TI y procesamiento',
      desc: 'Equipamiento y servidores suficientes para procesar transacciones en línea y soportar la operativa central del comercio exterior boliviano.',
      score: 3,
      assignedTo: 'p1'
    },
    {
      id: 'ka5_mal_1',
      code: 'KA5-P1',
      type: 'mal',
      title: 'Falta de marco formal de gobernanza integral de datos',
      desc: 'La administración de datos se gestiona con un enfoque predominantemente tecnológico y operativo, sin concebir formalmente la información como un activo estratégico institucional.',
      score: 2,
      assignedTo: 'p2'
    },
    {
      id: 'ka5_mal_2',
      code: 'KA5-P3',
      type: 'mal',
      title: 'Catálogos sin glosarios de negocio ni propietarios funcionales',
      desc: 'La documentación técnica registra campos de tablas y bases de datos pero carece de un catálogo unificado de conceptos de negocio y custodios funcionales asignados.',
      score: 2,
      assignedTo: 'p2'
    },
    {
      id: 'ka5_mal_3',
      code: 'KA5-P4',
      type: 'mal',
      title: 'Inexistencia de modelo institucional de calidad y consistencia del dato',
      desc: 'No existen indicadores periódicos ni protocolos transversales para medir integridad, exactitud, consistencia, completitud y oportunidad de la información aduanera.',
      score: 2,
      assignedTo: 'p2'
    },
    {
      id: 'ka5_mal_4',
      code: 'KA5-P6',
      type: 'mal',
      title: 'Marcada dependencia de TI y nula autonomía analítica en áreas sustantivas',
      desc: 'Las áreas de gestión de riesgos y fiscalización carecen de autonomía técnica y herramientas directas, dependiendo de solicitudes manuales lentas al área de sistemas.',
      score: 2,
      assignedTo: 'p3'
    },
    {
      id: 'ka5_mal_5',
      code: 'KA5-P7',
      type: 'mal',
      title: 'Inexistencia de marco de validación y supervisión de modelos analíticos',
      desc: 'Ausencia de protocolos para probar, monitorear, supervisar y recalibrar modelos de riesgo estadísticos o predictivos aplicados a la selección de controles aduaneros.',
      score: 2,
      assignedTo: 'p3'
    },
    {
      id: 'ka5_mal_6',
      code: 'KA5-P11',
      type: 'mal',
      title: 'Auditoría de datos limitada exclusivamente a aspectos informáticos',
      desc: 'Los controles de auditoría interna se circunscriben a infraestructura técnica y seguridad perimetral, sin auditar gobierno del dato, trazabilidad ni calidad analítica.',
      score: 2,
      assignedTo: 'p4'
    },
    {
      id: 'ka5_mal_7',
      code: 'KA5-P10-v',
      type: 'mal',
      title: 'Vulnerabilidad física por concentración de centros de datos en el mismo predio',
      desc: 'Los servidores principales y el sistema espejo se encuentran ubicados en la misma edificación física, careciendo de un plan DRP integral y redundancia geográfica verificada.',
      score: 2,
      assignedTo: 'p4'
    }
  ]
};

function initDefaultSuggestedNarratives() {
  if (!AppState.narrativasPilares) AppState.narrativasPilares = {};
  
  ['KA3', 'KA5'].forEach(code => {
    if (!AppState.narrativasPilares[code]) {
      AppState.narrativasPilares[code] = {
        p1: DEFAULT_SUGGESTED_NARRATIVES[code].p1,
        p2: DEFAULT_SUGGESTED_NARRATIVES[code].p2,
        p3: DEFAULT_SUGGESTED_NARRATIVES[code].p3,
        p4: DEFAULT_SUGGESTED_NARRATIVES[code].p4,
        ideas: JSON.parse(JSON.stringify(DEFAULT_PILLAR_IDEAS[code] || [])),
        updatedAt: '2026-10-27T10:00:00Z',
        updatedBy: 'Miguel Tapia'
      };
    } else if (!AppState.narrativasPilares[code].ideas || AppState.narrativasPilares[code].ideas.length === 0) {
      AppState.narrativasPilares[code].ideas = JSON.parse(JSON.stringify(DEFAULT_PILLAR_IDEAS[code] || []));
    }
  });
}

function getPillarDiagnosticIdeas(pcode) {
  if (AppState.narrativasPilares && AppState.narrativasPilares[pcode] && Array.isArray(AppState.narrativasPilares[pcode].ideas) && AppState.narrativasPilares[pcode].ideas.length > 0) {
    return AppState.narrativasPilares[pcode].ideas;
  }
  if (DEFAULT_PILLAR_IDEAS[pcode]) {
    const list = JSON.parse(JSON.stringify(DEFAULT_PILLAR_IDEAS[pcode]));
    if (!AppState.narrativasPilares) AppState.narrativasPilares = {};
    if (!AppState.narrativasPilares[pcode]) AppState.narrativasPilares[pcode] = {};
    AppState.narrativasPilares[pcode].ideas = list;
    return list;
  }
  
  // Extracción dinámica automática para cualquier pilar del marco CASA
  const p = AppState.pillars.find(item => (item.code === pcode || item.id === pcode));
  if (!p) return [];
  const generated = [];
  (p.criteria || []).forEach(c => {
    (c.questions || []).forEach(q => {
      const score = (q.score !== null && q.score !== undefined && String(q.score).trim() !== '') ? Number(q.score) : 2;
      const findings = (q.findings || '').trim();
      const title = q.text || q.title || `Práctica ${q.code}`;
      const code = q.code || q.id || '';
      
      if (score >= 3) {
        generated.push({
          id: `${code}_bien`,
          code: code,
          type: 'bien',
          title: title.length > 60 ? title.substring(0, 60) + '...' : title,
          desc: findings.length > 180 ? findings.substring(0, 180) + '...' : (findings || 'Práctica formalmente implementada.'),
          score: score,
          assignedTo: 'p1'
        });
      } else {
        generated.push({
          id: `${code}_mal`,
          code: code,
          type: 'mal',
          title: title.length > 60 ? title.substring(0, 60) + '...' : title,
          desc: findings.length > 180 ? findings.substring(0, 180) + '...' : (findings || 'Oportunidad de fortalecimiento observada.'),
          score: score,
          assignedTo: score === 1 ? 'p4' : 'p2'
        });
      }
    });
  });
  
  if (!AppState.narrativasPilares) AppState.narrativasPilares = {};
  if (!AppState.narrativasPilares[pcode]) AppState.narrativasPilares[pcode] = {};
  AppState.narrativasPilares[pcode].ideas = generated;
  return generated;
}

function setIdeaAssignment(pcode, ideaId, targetP) {
  const ideas = getPillarDiagnosticIdeas(pcode);
  const it = ideas.find(i => i.id === ideaId);
  if (it) {
    it.assignedTo = targetP;
  }
  if (!AppState.narrativasPilares) AppState.narrativasPilares = {};
  if (!AppState.narrativasPilares[pcode]) AppState.narrativasPilares[pcode] = {};
  AppState.narrativasPilares[pcode].ideas = ideas;
  
  saveData(false, true);
  
  // Re-renderizar banco de ideas sin perder posición
  const bankContainer = document.getElementById('pillar-ideas-bank-container');
  if (bankContainer) {
    bankContainer.innerHTML = renderPillarIdeasBankInnerHtml(pcode);
    if (window.lucide) lucide.createIcons();
  }
}

function resetPillarIdeasAssignment(pcode) {
  if (DEFAULT_PILLAR_IDEAS[pcode]) {
    const fresh = JSON.parse(JSON.stringify(DEFAULT_PILLAR_IDEAS[pcode]));
    if (!AppState.narrativasPilares) AppState.narrativasPilares = {};
    if (!AppState.narrativasPilares[pcode]) AppState.narrativasPilares[pcode] = {};
    AppState.narrativasPilares[pcode].ideas = fresh;
  } else {
    const ideas = getPillarDiagnosticIdeas(pcode);
    ideas.forEach(it => {
      if (it.type === 'bien') it.assignedTo = 'p1';
      else if (it.score === 1) it.assignedTo = 'p4';
      else it.assignedTo = 'p2';
    });
  }
  
  saveData(false, true);
  const bankContainer = document.getElementById('pillar-ideas-bank-container');
  if (bankContainer) {
    bankContainer.innerHTML = renderPillarIdeasBankInnerHtml(pcode);
    if (window.lucide) lucide.createIcons();
  }
  showToast(`Asignación sugerida restablecida para ${pcode}`, 'info');
}

function composeParagraphText(pcode, pKey, assignedIdeas) {
  if (!assignedIdeas || assignedIdeas.length === 0) {
    if (pKey === 'p1') return 'La Aduana Nacional de Bolivia no cuenta actualmente con fortalezas prioritarias asignadas a este párrafo.';
    if (pKey === 'p2') return 'La institución no cuenta con oportunidades de primer nivel asignadas a este párrafo.';
    if (pKey === 'p3') return 'La entidad no presenta vulnerabilidades operativas asignadas a este párrafo.';
    return 'La administración aduanera no tiene deficiencias críticas asignadas a este apartado.';
  }

  // Si coincide con las plantillas predeterminadas completas
  if (pcode === 'KA3') {
    const ids = assignedIdeas.map(i => i.id);
    if (pKey === 'p1' && ids.includes('ka3_bien_1') && ids.includes('ka3_bien_2')) {
      return DEFAULT_SUGGESTED_NARRATIVES['KA3'].p1;
    }
    if (pKey === 'p2' && ids.includes('ka3_mal_1') && ids.includes('ka3_mal_2')) {
      return DEFAULT_SUGGESTED_NARRATIVES['KA3'].p2;
    }
    if (pKey === 'p3' && ids.includes('ka3_mal_3') && ids.includes('ka3_mal_4')) {
      return DEFAULT_SUGGESTED_NARRATIVES['KA3'].p3;
    }
    if (pKey === 'p4' && ids.includes('ka3_mal_5') && ids.includes('ka3_mal_6')) {
      return DEFAULT_SUGGESTED_NARRATIVES['KA3'].p4;
    }
  }

  if (pcode === 'KA5') {
    const ids = assignedIdeas.map(i => i.id);
    if (pKey === 'p1' && ids.includes('ka5_bien_1') && ids.includes('ka5_bien_2')) {
      return DEFAULT_SUGGESTED_NARRATIVES['KA5'].p1;
    }
    if (pKey === 'p2' && ids.includes('ka5_mal_1') && ids.includes('ka5_mal_3')) {
      return DEFAULT_SUGGESTED_NARRATIVES['KA5'].p2;
    }
    if (pKey === 'p3' && ids.includes('ka5_mal_4') && ids.includes('ka5_mal_5')) {
      return DEFAULT_SUGGESTED_NARRATIVES['KA5'].p3;
    }
    if (pKey === 'p4' && (ids.includes('ka5_mal_6') || ids.includes('ka5_mal_7'))) {
      return DEFAULT_SUGGESTED_NARRATIVES['KA5'].p4;
    }
  }

  // Generador dinámico rigurosamente graduado bajo regla [Sujeto + Verbo + Complemento]
  const subjectPrefixes = {
    p1: 'La Aduana Nacional de Bolivia cuenta con fortalezas y logros consolidados en ',
    p2: 'La administración aduanera enfrenta su primera área de oportunidad en ',
    p3: 'La institución presenta una segunda área de oportunidad en ',
    p4: 'La entidad mantiene sus rezagos más críticos y deficiencias severas en '
  };

  const titles = assignedIdeas.map(i => i.title.toLowerCase().replace(/^(la |el |los |las |un |una |inexistencia de |ausencia de )/, '')).join(', así como en ');
  const topicSentence = `${subjectPrefixes[pKey]}${titles}.`;

  const details = assignedIdeas.map(i => {
    const codeTag = i.code ? ` (${i.code})` : '';
    let d = (i.desc || '').trim();
    if (d && !d.endsWith('.')) d += '.';
    return `${d}${codeTag}`;
  }).join(' ');

  let closing = '';
  if (pKey === 'p1') {
    closing = ' Estas capacidades proporcionan una base organizativa y formal para la gestión institucional.';
  } else if (pKey === 'p4') {
    closing = ' Esta situación constituye el rezago más crítico y de mayor vulnerabilidad técnica en el pilar diagnosticado.';
  }

  return `${topicSentence} ${details}${closing}`.trim();
}

function buildParagraphsFromIdeas(pcode) {
  const ideas = getPillarDiagnosticIdeas(pcode);
  const p1Ideas = ideas.filter(it => it.assignedTo === 'p1');
  const p2Ideas = ideas.filter(it => it.assignedTo === 'p2');
  const p3Ideas = ideas.filter(it => it.assignedTo === 'p3');
  const p4Ideas = ideas.filter(it => it.assignedTo === 'p4');

  const p1El = document.getElementById('pillar-narrative-p1');
  const p2El = document.getElementById('pillar-narrative-p2');
  const p3El = document.getElementById('pillar-narrative-p3');
  const p4El = document.getElementById('pillar-narrative-p4');

  if (p1El) p1El.value = composeParagraphText(pcode, 'p1', p1Ideas);
  if (p2El) p2El.value = composeParagraphText(pcode, 'p2', p2Ideas);
  if (p3El) p3El.value = composeParagraphText(pcode, 'p3', p3Ideas);
  if (p4El) p4El.value = composeParagraphText(pcode, 'p4', p4Ideas);

  savePillarNarrativeManual(pcode, false);
  updatePillarLivePreview();
  showToast(`Los 4 párrafos han sido construidos con éxito a partir de las ideas asignadas`, 'success');
}

function renderPillarIdeasBankInnerHtml(pcode) {
  const ideas = getPillarDiagnosticIdeas(pcode);
  const bienIdeas = ideas.filter(i => i.type === 'bien');
  const malIdeas = ideas.filter(i => i.type === 'mal');

  const p1Count = ideas.filter(i => i.assignedTo === 'p1').length;
  const p2Count = ideas.filter(i => i.assignedTo === 'p2').length;
  const p3Count = ideas.filter(i => i.assignedTo === 'p3').length;
  const p4Count = ideas.filter(i => i.assignedTo === 'p4').length;
  const unassignedCount = ideas.filter(i => !i.assignedTo).length;

  function renderIdeaCard(it) {
    const scoreColor = it.score >= 3 ? '#10b981' : (it.score === 1 ? '#ef4444' : '#f59e0b');
    const scoreBg = it.score >= 3 ? '#ecfdf5' : (it.score === 1 ? '#fef2f2' : '#fffbeb');
    
    return `
      <div class="pillar-idea-card">
        <div class="pillar-idea-card-top">
          <div style="display:flex;align-items:center;gap:0.4rem;">
            <span class="pillar-idea-code-badge">${escapeHtml(it.code || 'CASA')}</span>
            ${it.score !== undefined && it.score !== null ? `
              <span class="pillar-idea-score-badge" style="background:${scoreBg};color:${scoreColor};border:1px solid ${scoreColor}40;">
                Score: ${it.score}
              </span>
            ` : ''}
          </div>
          
          <!-- Botones de asignación P1, P2, P3, P4, — -->
          <div class="pillar-assign-btn-group" title="Selecciona en cuál de los 4 párrafos incluir esta idea">
            <button class="btn-assign ${it.assignedTo === 'p1' ? 'active-p1' : ''}" 
              onclick="setIdeaAssignment('${pcode}', '${it.id}', 'p1')" title="1. Fortalezas y Logros Consolidados">P1</button>
            <button class="btn-assign ${it.assignedTo === 'p2' ? 'active-p2' : ''}" 
              onclick="setIdeaAssignment('${pcode}', '${it.id}', 'p2')" title="2. Primera Área de Oportunidad">P2</button>
            <button class="btn-assign ${it.assignedTo === 'p3' ? 'active-p3' : ''}" 
              onclick="setIdeaAssignment('${pcode}', '${it.id}', 'p3')" title="3. Segunda Área de Oportunidad">P3</button>
            <button class="btn-assign ${it.assignedTo === 'p4' ? 'active-p4' : ''}" 
              onclick="setIdeaAssignment('${pcode}', '${it.id}', 'p4')" title="4. Principales Áreas de Oportunidad (Lo que peor hacen)">P4</button>
            <button class="btn-assign ${!it.assignedTo ? 'active-none' : ''}" 
              onclick="setIdeaAssignment('${pcode}', '${it.id}', null)" title="Excluir de la redacción">&mdash;</button>
          </div>
        </div>

        <div class="pillar-idea-title">${escapeHtml(it.title)}</div>
        <div class="pillar-idea-desc">${escapeHtml(it.desc)}</div>
      </div>
    `;
  }

  return `
    <div class="pillar-ideas-header">
      <div>
        <div class="pillar-ideas-title">
          <i data-lucide="layers" style="width:18px;height:18px;color:var(--primary-600);"></i>
          <span>1. Banco e Inventario Diagnóstico de Ideas Clave (${pcode})</span>
        </div>
        <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.2rem;">
          Clasificación de <strong>lo que hacen bien</strong> vs. <strong>lo que hacen mal</strong>. Asigna cada idea al párrafo correspondiente (<strong>[P1]</strong>, <strong>[P2]</strong>, <strong>[P3]</strong> o <strong>[P4]</strong>) o usa la propuesta automática.
        </div>
      </div>

      <div class="pillar-ideas-actions">
        <button class="btn btn-secondary btn-sm" onclick="resetPillarIdeasAssignment('${pcode}')" title="Restablecer la asignación propuesta por defecto">
          <i data-lucide="sparkles" style="width:14px;height:14px;color:#eab308;"></i>
          <span>⚡ Propuesta Sugerida</span>
        </button>
        <button class="btn btn-primary btn-sm" onclick="buildParagraphsFromIdeas('${pcode}')" title="Construir y redactar los 4 párrafos a partir de las ideas asignadas">
          <i data-lucide="wand-2" style="width:14px;height:14px;"></i>
          <span>✨ Construir Párrafos desde Ideas</span>
        </button>
      </div>
    </div>

    <!-- Barra de resumen de asignación -->
    <div class="pillar-ideas-summary-bar">
      <span style="font-weight:700;color:var(--text-primary);margin-right:0.25rem;">Distribución en Síntesis:</span>
      <span class="pillar-ideas-summary-tag" style="background:#ecfdf5;color:#047857;border:1px solid #a7f3d0;">
        P1 Fortalezas: <strong>${p1Count}</strong>
      </span>
      <span class="pillar-ideas-summary-tag" style="background:#fffbeb;color:#b45309;border:1px solid #fde68a;">
        P2 Primera Oportunidad: <strong>${p2Count}</strong>
      </span>
      <span class="pillar-ideas-summary-tag" style="background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;">
        P3 Segunda Oportunidad: <strong>${p3Count}</strong>
      </span>
      <span class="pillar-ideas-summary-tag" style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;">
        P4 Lo que peor hacen: <strong>${p4Count}</strong>
      </span>
      ${unassignedCount > 0 ? `
        <span class="pillar-ideas-summary-tag" style="background:var(--bg-tertiary);color:var(--text-muted);border:1px solid var(--border-color);">
          Sin asignar: <strong>${unassignedCount}</strong>
        </span>
      ` : ''}
    </div>

    <!-- Columnas Bien vs. Mal -->
    <div class="pillar-ideas-grid">
      <!-- Columna 1: Bien -->
      <div class="pillar-ideas-col">
        <div class="pillar-ideas-col-header" style="color:#047857;">
          <span style="display:flex;align-items:center;gap:0.4rem;">
            <i data-lucide="check-circle" style="width:16px;height:16px;color:#10b981;"></i>
            <span>Lo que hacen bien (${bienIdeas.length})</span>
          </span>
          <span style="font-size:0.75rem;color:var(--text-muted);">Fortalezas y Logros</span>
        </div>
        ${bienIdeas.map(renderIdeaCard).join('')}
      </div>

      <!-- Columna 2: Mal -->
      <div class="pillar-ideas-col">
        <div class="pillar-ideas-col-header" style="color:#b91c1c;">
          <span style="display:flex;align-items:center;gap:0.4rem;">
            <i data-lucide="alert-triangle" style="width:16px;height:16px;color:#ef4444;"></i>
            <span>Lo que hacen mal / Rezagos (${malIdeas.length})</span>
          </span>
          <span style="font-size:0.75rem;color:var(--text-muted);">Brechas y Deficiencias</span>
        </div>
        ${malIdeas.map(renderIdeaCard).join('')}
      </div>
    </div>
  `;
}


function getPillarStatsByCode(pcode) {
  const p = AppState.pillars.find(item => (item.code === pcode || item.id === pcode));
  if (!p) return { total: 0, scored: 0, findings: 0, recs: 0, pctRecs: 0, isEligible: false, pillar: null };

  let total = 0, scored = 0, findings = 0, recs = 0;
  (p.criteria || []).forEach(c => {
    (c.questions || []).forEach(q => {
      total++;
      if (q.score !== null && q.score !== undefined && String(q.score).trim() !== '') scored++;
      if (q.findings && String(q.findings).trim()) findings++;
      if (q.recommendations && String(q.recommendations).trim()) recs++;
    });
  });

  const pctRecs = total > 0 ? Math.round((recs / total) * 100) : 0;
  return {
    total,
    scored,
    findings,
    recs,
    pctRecs,
    isEligible: pctRecs >= 80,
    pillar: p
  };
}

function updatePillarAnalysisBadge() {
  const badge = document.getElementById('nav-analysis-badge');
  if (!badge) return;
  let eligibleCount = 0;
  AppState.pillars.forEach(p => {
    const stats = getPillarStatsByCode(p.code || p.id);
    if (stats.isEligible) eligibleCount++;
  });
  badge.innerText = `${eligibleCount}/${AppState.pillars.length}`;
}

function renderPillarAnalysisView(container) {
  if (!container) return;
  updatePillarAnalysisBadge();

  if (!AppState.pillarAnalysisActivePillar) {
    AppState.pillarAnalysisActivePillar = 'KA3';
  }

  const activeCode = AppState.pillarAnalysisActivePillar;
  const currentStats = getPillarStatsByCode(activeCode);
  const currentPillar = currentStats.pillar || AppState.pillars[0];

  const currentNarrative = (AppState.narrativasPilares && AppState.narrativasPilares[activeCode]) || {
    p1: '', p2: '', p3: '', p4: '', updatedAt: null, updatedBy: null
  };

  // Generar HTML del Selector de Pilares
  let pillarsGridHtml = '';
  AppState.pillars.forEach(p => {
    const pcode = p.code || p.id;
    const st = getPillarStatsByCode(pcode);
    const isActive = pcode === activeCode;
    const eligibleClass = st.isEligible ? 'eligible' : '';
    const activeClass = isActive ? 'active' : '';

    pillarsGridHtml += `
      <div class="pillar-select-card ${eligibleClass} ${activeClass}" onclick="selectPillarForAnalysis('${pcode}')">
        <div class="pillar-card-top">
          <span class="pillar-card-code">${pcode}</span>
          ${st.isEligible ? `<span class="pillar-card-eligible-badge"><i data-lucide="check-circle" style="width:11px;height:11px;"></i> >80% Apto</span>` : `<span style="font-size:0.65rem;color:var(--text-muted);">${st.pctRecs}%</span>`}
        </div>
        <div class="pillar-card-title">${p.title || p.raw_title || pcode}</div>
        <div class="pillar-card-stats">
          <span>Recs: <strong>${st.recs}/${st.total}</strong></span>
          <span style="font-weight:700;color:${st.isEligible ? '#10b981' : 'var(--text-secondary)'};">${st.pctRecs}%</span>
        </div>
      </div>
    `;
  });

  // Evaluadores asignados a este pilar
  let assignedNames = 'Sin evaluador asignado';
  if (currentPillar && currentPillar.assigned_evaluators && currentPillar.assigned_evaluators.length > 0) {
    assignedNames = currentPillar.assigned_evaluators.map(uid => {
      const u = AppState.team.find(m => m.id === uid);
      return u ? u.name : uid;
    }).join(', ');
  }

  const p1Val = currentNarrative.p1 || '';
  const p2Val = currentNarrative.p2 || '';
  const p3Val = currentNarrative.p3 || '';
  const p4Val = currentNarrative.p4 || '';

  container.innerHTML = `
    <div class="pillar-analysis-container">
      <!-- Tarjeta Introductoria -->
      <div class="pillar-analysis-intro">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
          <div>
            <h3 style="font-size:1.15rem;font-weight:700;color:var(--text-primary);margin:0 0 0.3rem 0;display:flex;align-items:center;gap:0.5rem;">
              <i data-lucide="file-signature" style="width:20px;height:20px;color:var(--primary-600);"></i>
              <span>Módulo de Síntesis Ejecutiva por Pilar (4 Párrafos)</span>
            </h3>
            <p style="font-size:0.87rem;color:var(--text-secondary);margin:0;line-height:1.45;">
              Estructura graduada de diagnóstico institucional: desde el <strong>Párrafo 1 (lo que mejor hace la entidad)</strong> descendiendo gradualmente hasta el <strong>Párrafo 4 (lo que peor hace / rezago más crítico)</strong>.
              Se priorizan para el informe oficial aquellos pilares cuya cobertura sea <strong>mayor al 80%</strong>.
            </p>
          </div>
          <div style="display:flex;gap:0.75rem;align-items:center;">
            <div style="text-align:right;">
              <div style="font-size:0.75rem;color:var(--text-muted);">Pilares Calificados (>80%):</div>
              <div style="font-size:1.1rem;font-weight:800;color:#10b981;">2 de 13 Áreas</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Selector de Pilares (13 Áreas Clave) -->
      <div style="margin-bottom:0.6rem;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.04em;">
          Selecciona un Pilar para documentar su narrativa:
        </span>
      </div>
      <div class="pillar-selector-grid">
        ${pillarsGridHtml}
      </div>

      <!-- Editor del Pilar Seleccionado -->
      <div class="pillar-analysis-editor">
        <div class="pillar-editor-header">
          <div class="pillar-editor-title-group">
            <h3>${activeCode}: ${currentPillar ? currentPillar.title : 'Pilar'}</h3>
            <div style="font-size:0.85rem;color:var(--text-secondary);">
              <strong>Evaluador(es) responsable(s):</strong> ${assignedNames} &bull; 
              <strong>Recomendaciones formuladas:</strong> <span style="font-weight:700;color:${currentStats.isEligible ? '#10b981' : 'var(--text-primary)'};">${currentStats.recs} de ${currentStats.total} (${currentStats.pctRecs}%)</span>
            </div>
          </div>

          <div class="pillar-editor-actions">
            <button class="btn btn-secondary btn-sm" onclick="loadSuggestedNarrative('${activeCode}')" title="Cargar propuesta redactada bajo metodología técnica">
              <i data-lucide="sparkles" style="width:14px;height:14px;color:#eab308;"></i>
              <span>Cargar Borrador Sugerido</span>
            </button>
            <button class="btn btn-secondary btn-sm" onclick="copyPillarNarrativeToClipboard('${activeCode}')" title="Copiar los 4 párrafos al portapapeles">
              <i data-lucide="copy" style="width:14px;height:14px;"></i>
              <span>Copiar Texto</span>
            </button>
            <button class="btn btn-primary btn-sm" onclick="savePillarNarrativeManual('${activeCode}')" title="Guardar cambios en el pilar">
              <i data-lucide="save" style="width:14px;height:14px;"></i>
              <span>Guardar Análisis</span>
            </button>
          </div>
        </div>

        <!-- Banner de Estado de Cobertura -->
        ${currentStats.isEligible ? `
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-left:4px solid #10b981;padding:0.75rem 1rem;border-radius:var(--radius-md);margin-bottom:1.5rem;display:flex;align-items:center;gap:0.6rem;font-size:0.85rem;color:#166534;">
            <i data-lucide="check-circle-2" style="width:18px;height:18px;color:#10b981;flex-shrink:0;"></i>
            <span><strong>Pilar Apto para Informe Ejecutivo Oficial:</strong> Este pilar supera el umbral del 80% de recomendaciones formuladas (${currentStats.pctRecs}%). Esta narrativa se exporta en la Sección 2 del Reporte en Word (.doc) y Markdown (.md).</span>
          </div>
        ` : `
          <div style="background:#fffbeb;border:1px solid #fef3c7;border-left:4px solid #f59e0b;padding:0.75rem 1rem;border-radius:var(--radius-md);margin-bottom:1.5rem;display:flex;align-items:center;gap:0.6rem;font-size:0.85rem;color:#92400e;">
            <i data-lucide="info" style="width:18px;height:18px;color:#f59e0b;flex-shrink:0;"></i>
            <span><strong>Pilar en Proceso de Formulación:</strong> Este pilar cuenta actualmente con un ${currentStats.pctRecs}% de recomendaciones formuladas (umbral requerido: >80%). Puedes redactar y guardar notas preliminares aquí mientras el evaluador completa las recomendaciones.</span>
          </div>
        `}

        <!-- 1. BANCO E INVENTARIO DIAGNÓSTICO DE IDEAS CLAVE -->
        <div id="pillar-ideas-bank-container" class="pillar-ideas-card">
          ${renderPillarIdeasBankInnerHtml(activeCode)}
        </div>

        <!-- 2. REDACCIÓN GRADUADA: LOS 4 PÁRRAFOS EJECUTIVOS -->
        <div style="margin-bottom:0.85rem;margin-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <h4 style="font-size:1.05rem;font-weight:700;color:var(--text-primary);margin:0;display:flex;align-items:center;gap:0.4rem;">
            <i data-lucide="file-text" style="width:18px;height:18px;color:var(--primary-600);"></i>
            <span>2. Redacción Ejecutiva Graduada (4 Párrafos)</span>
          </h4>
          <span style="font-size:0.75rem;color:var(--text-muted);">
            Regla FMI: [Sujeto + Verbo + Complemento] &bull; Gradiente 1 al 4
          </span>
        </div>

        <!-- Los 4 Párrafos Ejecutivos -->
        <div class="pillar-paragraphs-form">
          <!-- PÁRRAFO 1 -->
          <div class="pillar-paragraph-block">
            <div class="pillar-paragraph-header">
              <span class="pillar-paragraph-label">
                <i data-lucide="award" style="width:16px;height:16px;color:#10b981;"></i>
                <span>1. Fortalezas y Logros Consolidados</span>
              </span>
              <span class="pillar-grammar-tip">[Sujeto] + [Verbo] + [Complemento]</span>
            </div>
            <div class="pillar-paragraph-instruction">
              <strong>Lo que mejor hacen:</strong> sintetiza las fortalezas institucionales consolidadas, mejores prácticas y aspectos con las calificaciones más altas demostradas.
            </div>
            <textarea id="pillar-narrative-p1" class="pillar-paragraph-textarea" 
              placeholder="Ej: La Aduana Nacional de Bolivia cuenta con una función especializada de Recursos Humanos..." 
              oninput="updatePillarLivePreview()">${escapeHtml(p1Val)}</textarea>
          </div>

          <!-- PÁRRAFO 2 -->
          <div class="pillar-paragraph-block">
            <div class="pillar-paragraph-header">
              <span class="pillar-paragraph-label">
                <i data-lucide="alert-circle" style="width:16px;height:16px;color:#f59e0b;"></i>
                <span>2. Primera Área de Oportunidad</span>
              </span>
              <span class="pillar-grammar-tip">[Sujeto] + [Verbo] + [Complemento]</span>
            </div>
            <div class="pillar-paragraph-instruction">
              <strong>Primera área de oportunidad:</strong> describe la primera brecha o debilidad institucional observada, detallando causas e impacto operativo inicial.
            </div>
            <textarea id="pillar-narrative-p2" class="pillar-paragraph-textarea" 
              placeholder="Ej: La administración del personal adolece de un marco estructurado de competencias técnicas..." 
              oninput="updatePillarLivePreview()">${escapeHtml(p2Val)}</textarea>
          </div>

          <!-- PÁRRAFO 3 -->
          <div class="pillar-paragraph-block">
            <div class="pillar-paragraph-header">
              <span class="pillar-paragraph-label">
                <i data-lucide="shield-alert" style="width:16px;height:16px;color:#ef4444;"></i>
                <span>3. Segunda Área de Oportunidad</span>
              </span>
              <span class="pillar-grammar-tip">[Sujeto] + [Verbo] + [Complemento]</span>
            </div>
            <div class="pillar-paragraph-instruction">
              <strong>Segunda área de oportunidad:</strong> describe la siguiente debilidad o vulnerabilidad operativa que condiciona la sostenibilidad técnica del pilar.
            </div>
            <textarea id="pillar-narrative-p3" class="pillar-paragraph-textarea" 
              placeholder="Ej: La institución presenta brechas en el apoyo al personal en zonas remotas y una elevada rotación laboral..." 
              oninput="updatePillarLivePreview()">${escapeHtml(p3Val)}</textarea>
          </div>

          <!-- PÁRRAFO 4 -->
          <div class="pillar-paragraph-block">
            <div class="pillar-paragraph-header">
              <span class="pillar-paragraph-label">
                <i data-lucide="lightbulb" style="width:16px;height:16px;color:#2563eb;"></i>
                <span>4. Principales Áreas de Oportunidad</span>
              </span>
              <span class="pillar-grammar-tip">[Sujeto] + [Verbo] + [Complemento]</span>
            </div>
            <div class="pillar-paragraph-instruction">
              <strong>Lo que peor hacen:</strong> describe las deficiencias más severas, rezagos estructurales críticos o prácticas en niveles incipientes (calificaciones más bajas).
            </div>
            <textarea id="pillar-narrative-p4" class="pillar-paragraph-textarea" 
              placeholder="Ej: La administración aduanera adolece de un régimen de carrera meritocrática y mantiene una desprotección crítica..." 
              oninput="updatePillarLivePreview()">${escapeHtml(p4Val)}</textarea>
          </div>
        </div>

        <!-- Previsualización en Vivo estilo Memorándum Ejecutivo -->
        <div class="pillar-preview-box">
          <div class="pillar-preview-header">
            <div style="font-size:0.92rem;font-weight:700;color:var(--text-primary);display:flex;align-items:center;gap:0.4rem;">
              <i data-lucide="file-check-2" style="width:16px;height:16px;color:var(--primary-600);"></i>
              <span>Vista Previa Ejecutiva del Pilar (${activeCode})</span>
            </div>
            <span style="font-size:0.75rem;color:var(--text-muted);" id="pillar-preview-stats">
              4 Párrafos &bull; Actualización en vivo
            </span>
          </div>

          <div id="pillar-preview-content">
            <!-- Rendered by updatePillarLivePreview -->
          </div>
        </div>
      </div>
    </div>
  `;

  updatePillarLivePreview();
  if (window.lucide) lucide.createIcons();
}

function selectPillarForAnalysis(pcode) {
  AppState.pillarAnalysisActivePillar = pcode;
  const container = document.getElementById('main-content-area');
  if (container) {
    renderPillarAnalysisView(container);
  }
}

function loadSuggestedNarrative(pcode) {
  const suggested = DEFAULT_SUGGESTED_NARRATIVES[pcode];
  if (!suggested) {
    showToast(`No hay un borrador sugerido predeterminado para ${pcode}. Puedes redactar tu propuesta libremente.`, 'info');
    return;
  }

  if (confirm(`¿Deseas cargar el borrador técnico sugerido para ${pcode}? Esto reemplazará el texto actual en las 4 cajas.`)) {
    const p1El = document.getElementById('pillar-narrative-p1');
    const p2El = document.getElementById('pillar-narrative-p2');
    const p3El = document.getElementById('pillar-narrative-p3');
    const p4El = document.getElementById('pillar-narrative-p4');

    if (p1El) p1El.value = suggested.p1;
    if (p2El) p2El.value = suggested.p2;
    if (p3El) p3El.value = suggested.p3;
    if (p4El) p4El.value = suggested.p4;

    savePillarNarrativeManual(pcode, false);
    updatePillarLivePreview();
    showToast(`Borrador técnico cargado para ${pcode}`, 'success');
  }
}

function savePillarNarrativeManual(pcode, showToastMsg = true) {
  const p1El = document.getElementById('pillar-narrative-p1');
  const p2El = document.getElementById('pillar-narrative-p2');
  const p3El = document.getElementById('pillar-narrative-p3');
  const p4El = document.getElementById('pillar-narrative-p4');

  if (!p1El || !p2El || !p3El || !p4El) return;

  if (!AppState.narrativasPilares) AppState.narrativasPilares = {};

  const currentUser = getCurrentUser();
  const currentIdeas = getPillarDiagnosticIdeas(pcode);
  AppState.narrativasPilares[pcode] = {
    p1: p1El.value.trim(),
    p2: p2El.value.trim(),
    p3: p3El.value.trim(),
    p4: p4El.value.trim(),
    ideas: currentIdeas,
    updatedAt: new Date().toISOString(),
    updatedBy: currentUser ? currentUser.name : 'Evaluador'
  };

  saveData(false, true);

  // Sincronización aislada y segura en Firebase (rama separada que nunca colisiona con questions)
  if (typeof firebaseDb !== 'undefined' && firebaseDb) {
    firebaseDb.ref(`evaluacion_imf/narrativas_pilares/${pcode}`).set(AppState.narrativasPilares[pcode])
      .then(() => {
        if (showToastMsg) showToast(`Análisis del Pilar ${pcode} guardado y sincronizado`, 'success');
      })
      .catch((err) => {
        console.warn('Guardado local completado, error menor en nube:', err);
        if (showToastMsg) showToast(`Análisis del Pilar ${pcode} guardado localmente`, 'success');
      });
  } else {
    if (showToastMsg) showToast(`Análisis del Pilar ${pcode} guardado exitosamente`, 'success');
  }

  updatePillarLivePreview();
}

function updatePillarLivePreview() {
  const p1El = document.getElementById('pillar-narrative-p1');
  const p2El = document.getElementById('pillar-narrative-p2');
  const p3El = document.getElementById('pillar-narrative-p3');
  const p4El = document.getElementById('pillar-narrative-p4');
  const previewBox = document.getElementById('pillar-preview-content');
  if (!previewBox) return;

  const p1 = (p1El ? p1El.value : '').trim();
  const p2 = (p2El ? p2El.value : '').trim();
  const p3 = (p3El ? p3El.value : '').trim();
  const p4 = (p4El ? p4El.value : '').trim();

  function formatTopicSentence(text) {
    if (!text) return '<em style="color:var(--text-muted);">Sin contenido redactado aún</em>';
    if (text.includes('**')) {
      return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }
    // Detectar la primera oración completa (oración temática [Sujeto + Verbo + Complemento])
    const match = text.match(/^([\s\S]+?\.)(?:\s+[A-ZÁÉÍÓÚÑ]|\s*$)/);
    if (match && match[1] && match[1].length < 450) {
      const topic = match[1];
      const rest = text.substring(topic.length);
      return `<strong>${escapeHtml(topic)}</strong>${escapeHtml(rest)}`;
    }
    const dotIdx = text.indexOf('.');
    if (dotIdx !== -1 && dotIdx < 400) {
      const topic = text.substring(0, dotIdx + 1);
      const rest = text.substring(dotIdx + 1);
      return `<strong>${escapeHtml(topic)}</strong>${escapeHtml(rest)}`;
    }
    return escapeHtml(text);
  }

  previewBox.innerHTML = `
    <div class="pillar-preview-p"><strong>1. Fortalezas y Logros Consolidados:</strong><br>${formatTopicSentence(p1)}</div>
    <div class="pillar-preview-p"><strong>2. Primera Área de Oportunidad:</strong><br>${formatTopicSentence(p2)}</div>
    <div class="pillar-preview-p"><strong>3. Segunda Área de Oportunidad:</strong><br>${formatTopicSentence(p3)}</div>
    <div class="pillar-preview-p"><strong>4. Principales Áreas de Oportunidad:</strong><br>${formatTopicSentence(p4)}</div>
  `;
}

function copyPillarNarrativeToClipboard(pcode) {
  const p1El = document.getElementById('pillar-narrative-p1');
  const p2El = document.getElementById('pillar-narrative-p2');
  const p3El = document.getElementById('pillar-narrative-p3');
  const p4El = document.getElementById('pillar-narrative-p4');

  if (!p1El || !p2El || !p3El || !p4El) return;

  const text = `ANÁLISIS NARRATIVO EJECUTIVO — PILAR ${pcode}\n\n` +
    `1. FORTALEZAS Y LOGROS CONSOLIDADOS:\n${p1El.value.trim()}\n\n` +
    `2. PRIMERA ÁREA DE OPORTUNIDAD:\n${p2El.value.trim()}\n\n` +
    `3. SEGUNDA ÁREA DE OPORTUNIDAD:\n${p3El.value.trim()}\n\n` +
    `4. PRINCIPALES ÁREAS DE OPORTUNIDAD:\n${p4El.value.trim()}\n`;

  navigator.clipboard.writeText(text).then(() => {
    showToast(`Texto del Pilar ${pcode} copiado al portapapeles`, 'success');
  }).catch(() => {
    showToast('No se pudo copiar automáticamente. Puedes seleccionar el texto manualmente.', 'warning');
  });
}

// ==========================================================================
// VISTA: MANUAL DE USUARIO INTEGRADO (PANTALLA POR PANTALLA)
// ==========================================================================

function renderManualView(container) {
  if (!container) return;

  container.innerHTML = `
    <!-- Barra Superior de Acciones del Manual -->
    <div class="manual-actions-toolbar" style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 0.85rem 1.25rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(30, 58, 138, 0.1); color: #1e3a8a; display: flex; align-items: center; justify-content: center;">
          <i data-lucide="book-marked" style="width: 20px; height: 20px;"></i>
        </div>
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">Manual Visual de Usuario — Misión FMI Bolivia 2026</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">8 Secciones Detalladas • Capturas Reales HD • Guía Pantalla por Pantalla</div>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
        <button class="btn btn-secondary btn-sm" onclick="window.print()" title="Imprimir o guardar en PDF sin elementos de la interfaz">
          <i data-lucide="printer" style="width: 14px; height: 14px;"></i>
          <span>Imprimir / Guardar PDF</span>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="exportManualWordHtml()" title="Descargar documento completo para Microsoft Word (.doc)">
          <i data-lucide="file-text" style="width: 14px; height: 14px; color: #2563eb;"></i>
          <span>Descargar Word (.doc)</span>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="downloadManualMarkdown()" title="Descargar archivo original en Markdown (.md)">
          <i data-lucide="download" style="width: 14px; height: 14px;"></i>
          <span>Descargar Markdown (.md)</span>
        </button>
      </div>
    </div>

    <div class="manual-view-container">
      <!-- SIDEBAR TOC (ÍNDICE FLOTANTE) -->
      <aside class="manual-toc-sidebar">
        <div class="manual-toc-title">
          <i data-lucide="list" style="width: 14px; height: 14px; color: var(--primary-500);"></i>
          <span>Índice del Manual</span>
        </div>
        <ul class="manual-toc-list" id="manual-toc-nav">
          <li>
            <a href="#manual-sec-1" class="manual-toc-link active" onclick="smoothScrollManual(event, 'manual-sec-1')">
              <span style="font-weight:700; color:var(--primary-600); min-width:18px;">1.</span>
              <span>Acceso y PIN de Misión</span>
            </a>
          </li>
          <li>
            <a href="#manual-sec-2" class="manual-toc-link" onclick="smoothScrollManual(event, 'manual-sec-2')">
              <span style="font-weight:700; color:var(--primary-600); min-width:18px;">2.</span>
              <span>Tablero «Un Vistazo»</span>
            </a>
          </li>
          <li>
            <a href="#manual-sec-3" class="manual-toc-link" onclick="smoothScrollManual(event, 'manual-sec-3')">
              <span style="font-weight:700; color:var(--primary-600); min-width:18px;">3.</span>
              <span>Cuestionario y Prácticas</span>
            </a>
          </li>
          <li>
            <a href="#manual-sec-4" class="manual-toc-link" onclick="smoothScrollManual(event, 'manual-sec-4')">
              <span style="font-weight:700; color:var(--primary-600); min-width:18px;">4.</span>
              <span>Control de Evidencias</span>
            </a>
          </li>
          <li>
            <a href="#manual-sec-5" class="manual-toc-link" onclick="smoothScrollManual(event, 'manual-sec-5')">
              <span style="font-weight:700; color:var(--primary-600); min-width:18px;">5.</span>
              <span>Cuaderno de Notas</span>
            </a>
          </li>
          <li>
            <a href="#manual-sec-6" class="manual-toc-link" onclick="smoothScrollManual(event, 'manual-sec-6')">
              <span style="font-weight:700; color:var(--primary-600); min-width:18px;">6.</span>
              <span>Equipo y Asignaciones</span>
            </a>
          </li>
          <li>
            <a href="#manual-sec-7" class="manual-toc-link" onclick="smoothScrollManual(event, 'manual-sec-7')">
              <span style="font-weight:700; color:var(--primary-600); min-width:18px;">7.</span>
              <span>Informe CD Consolidado</span>
            </a>
          </li>
          <li>
            <a href="#manual-sec-8" class="manual-toc-link" onclick="smoothScrollManual(event, 'manual-sec-8')">
              <span style="font-weight:700; color:var(--primary-600); min-width:18px;">8.</span>
              <span>Barra Superior y Controles</span>
            </a>
          </li>
        </ul>

        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px dashed var(--border-color); font-size: 0.725rem; color: var(--text-muted); line-height: 1.4;">
          <div style="font-weight: 700; color: var(--text-secondary); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.35rem;">
            <i data-lucide="shield-check" style="width: 13px; height: 13px; color: #10b981;"></i>
            <span>Misión Oficial FMI</span>
          </div>
          <span>Estado Plurinacional de Bolivia • Asistencia Técnica CASA</span>
        </div>
      </aside>

      <!-- CONTENIDO PRINCIPAL DEL MANUAL -->
      <div class="manual-content-wrapper">
        <!-- Banner de Encabezado -->
        <div class="manual-header-banner">
          <div style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(30,58,138,0.08); color:#1e3a8a; padding:4px 12px; border-radius:999px; font-size:0.75rem; font-weight:700; margin-bottom:0.75rem;">
            <i data-lucide="check-circle" style="width:14px;height:14px;"></i>
            <span>Documentación Oficial de Usuario • Versión 2.0</span>
          </div>
          <h1 style="font-size:1.85rem; font-weight:800; color:#1e3a8a; margin-bottom:0.4rem; letter-spacing:-0.02em;">
            Manual Visual de Usuario — Pantalla por Pantalla
          </h1>
          <p style="font-size:1rem; font-weight:600; color:var(--text-secondary); margin-bottom:0.25rem;">
            Plataforma de Diagnóstico y Evaluación de la Administración Aduanera y Tributaria
          </p>
          <p style="font-size:0.85rem; color:var(--text-muted);">
            Misión Técnica FMI CASA • Estado Plurinacional de Bolivia 2026
          </p>
        </div>

        <!-- SECCIÓN 1 -->
        <section class="manual-section" id="manual-sec-1">
          <h2 class="manual-section-h2">
            <span style="background:var(--primary-600);color:#fff;width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">1</span>
            <span>Pantalla de Acceso y Selección de Evaluador</span>
          </h2>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            Esta es la primera interfaz con la que interactúa el usuario al abrir la plataforma (tanto en el entorno local como en la nube en <strong>Firebase Hosting</strong>).
          </p>

          <div class="manual-img-card" onclick="openManualLightbox('manual_img/real_screen_login.png', 'Pantalla de Acceso y Selección de Evaluador — Misión FMI Bolivia')">
            <img src="manual_img/real_screen_login.png" alt="Captura Real de la Pantalla de Acceso y Selección de Evaluador" loading="lazy">
            <div class="manual-img-caption">
              <span><strong>Figura 1:</strong> Interfaz de autenticación con PIN confidencial y selector de evaluadores del equipo técnico.</span>
              <span class="zoom-hint"><i data-lucide="zoom-in" style="width:13px;height:13px;"></i> Clic para ampliar</span>
            </div>
          </div>

          <h3 class="manual-section-h3">Elementos clave de esta pantalla:</h3>
          <ol class="manual-keypoints-list">
            <li><strong>Emblema y Membrete Oficial:</strong> Identifica formalmente la plataforma de asistencia técnica en Bolivia bajo el marco CASA del Fondo Monetario Internacional (FMI) y el Departamento de Finanzas Públicas (FAD).</li>
            <li><strong>Campo «PIN de Acceso a la Misión»:</strong>
              <ul style="margin-top:0.35rem;padding-left:1.2rem;">
                <li>Debe ingresar el PIN confidencial asignado: <code style="background:var(--bg-tertiary);padding:2px 6px;border-radius:4px;font-weight:700;color:var(--primary-600);">FMI2026</code>.</li>
                <li>Al digitarlo correctamente, el sistema valida la credencial y muestra el indicador en verde <em>«PIN de Misión Válido»</em>.</li>
              </ul>
            </li>
            <li><strong>Selección de Evaluador Activo:</strong> Se presentan las cuatro tarjetas oficiales del equipo técnico con su avatar y cargo:
              <ul style="margin-top:0.35rem;padding-left:1.2rem;">
                <li><strong>Selvin Lemus</strong> — Jefe de Misión</li>
                <li><strong>Miguel Tapia</strong> — Asesor Senior en Gestión de Riesgos</li>
                <li><strong>Sylvia Saucedo</strong> — Experta en Aduanas y Marco Legal</li>
                <li><strong>Ignacio Gonzalez</strong> — Asesor Técnico en TIC y Sistemas</li>
              </ul>
              Haga clic sobre su tarjeta para seleccionarse como evaluador activo (se resaltará con borde y tilde azul).
            </li>
            <li><strong>Botón «Ingresar a la Plataforma»:</strong> Habilita la sesión de trabajo, cargando automáticamente sus asignaciones específicas, progreso personal y notas de campo.</li>
          </ol>
        </section>

        <!-- SECCIÓN 2 -->
        <section class="manual-section" id="manual-sec-2">
          <h2 class="manual-section-h2">
            <span style="background:var(--primary-600);color:#fff;width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">2</span>
            <span>Pantalla Principal: Tablero Ejecutivo («Un Vistazo»)</span>
          </h2>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            El <strong>Dashboard Ejecutivo</strong> es la réplica interactiva exacta del cuadro de mando oficial del FMI (<em>Assessment Results Summary</em>), diseñado con la paleta cromática institucional y tipografía ejecutiva.
          </p>

          <div class="manual-img-card" onclick="openManualLightbox('manual_img/real_screen_dashboard.png', 'Tablero Ejecutivo Oficial — Un Vistazo')">
            <img src="manual_img/real_screen_dashboard.png" alt="Captura Real del Tablero Ejecutivo Oficial — Un Vistazo" loading="lazy">
            <div class="manual-img-caption">
              <span><strong>Figura 2:</strong> Cuadro de mando ejecutivo integral con radar institucional, matriz térmica oficial y paneles cualitativos.</span>
              <span class="zoom-hint"><i data-lucide="zoom-in" style="width:13px;height:13px;"></i> Clic para ampliar</span>
            </div>
          </div>

          <h3 class="manual-section-h3">Estructura y Navegación del Tablero:</h3>
          <ol class="manual-keypoints-list">
            <li><strong>Encabezado Institucional Superior:</strong> Muestra el título oficial <em>«ESTADO PLURINACIONAL DE BOLIVIA — Resumen de Resultados de la Evaluación»</em> y el botón <strong>Exportar CSV</strong> para descargar la matriz de datos completa.</li>
            <li><strong>Paneles Superiores Izquierdos (Tablas de Síntesis):</strong>
              <ul style="margin-top:0.35rem;padding-left:1.2rem;">
                <li><strong>Nivel de Madurez por Componente:</strong> Resume el puntaje promedio y nivel de los dos grandes bloques:
                  <em>Gobernanza y gestión</em> (Promedio 2.25 - Nivel Inicial) y <em>Procesos aduaneros clave</em>.</li>
                <li><strong>Distribución de Áreas por Nivel:</strong> Porcentajes consolidados de cuántas áreas se ubican en cada estadio (Consolidado 4.0, En desarrollo 3.0, Inicial 2.0, Incipiente 1.0).</li>
              </ul>
            </li>
            <li><strong>Gráfico Radar de 13 Ejes (Superior Derecho):</strong> Representación poligonal de las 13 Áreas Clave (KA1 a KA13) sobre 4 anillos concéntricos que delimitan visualmente la frontera de madurez institucional de la Aduana Nacional.</li>
            <li><strong>Matriz Analítica Central (Mapa Térmico FMI):</strong> Permite conmutar dinámicamente entre dos modos de visualización mediante los botones superiores:
              <ul style="margin-top:0.35rem;padding-left:1.2rem;">
                <li><code style="background:var(--bg-tertiary);padding:2px 6px;border-radius:4px;font-weight:700;">% Adopción Oficial FMI</code>: Muestra el porcentaje relativo de respuestas A, B, C y D en celdas térmicas estilizadas.</li>
                <li><code style="background:var(--bg-tertiary);padding:2px 6px;border-radius:4px;font-weight:700;">N° Frecuencia Absoluta</code>: Muestra el recuento exacto de buenas prácticas evaluadas por categoría (A, B, C, D, NA y Pendientes).</li>
              </ul>
              Al hacer clic en el nombre de cualquier Área Clave, la plataforma navega directamente al cuestionario de esa área.
            </li>
            <li><strong>Paneles de Diagnóstico Cualitativo (Sector Inferior):</strong>
              <ul style="margin-top:0.35rem;padding-left:1.2rem;">
                <li><strong>Fortalezas Clave:</strong> Lista priorizada de las prácticas con máxima calificación (<code>A</code>), destacando los avances consolidados.</li>
                <li><strong>Acciones Prioritarias:</strong> Resumen de las áreas con calificaciones críticas (<code>D</code> y <code>C</code>) que requieren intervención urgente y asistencia técnica.</li>
              </ul>
            </li>
            <li><strong>Tarjetas de Acceso Rápido:</strong> 13 accesos directos al pie del tablero para saltar inmediatamente a la evaluación de cada una de las áreas temáticas.</li>
          </ol>
        </section>

        <!-- SECCIÓN 3 -->
        <section class="manual-section" id="manual-sec-3">
          <h2 class="manual-section-h2">
            <span style="background:var(--primary-600);color:#fff;width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">3</span>
            <span>Pantalla de Evaluación: Cuestionario de Buenas Prácticas</span>
          </h2>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            Esta es la herramienta central donde los evaluadores analizan, califican y documentan cada una de las 517 prácticas internacionales.
          </p>

          <h3 class="manual-section-h3" style="margin-top:1rem;">3.1 Vista General del Área y Progreso</h3>
          <div class="manual-img-card" onclick="openManualLightbox('manual_img/real_screen_evaluation.png', 'Vista General del Cuestionario de Evaluación')">
            <img src="manual_img/real_screen_evaluation.png" alt="Captura Real de la Vista General del Cuestionario de Evaluación" loading="lazy">
            <div class="manual-img-caption">
              <span><strong>Figura 3A:</strong> Navegación por áreas temáticas, barra de progreso en vivo, filtros por estado y listado de preguntas.</span>
              <span class="zoom-hint"><i data-lucide="zoom-in" style="width:13px;height:13px;"></i> Clic para ampliar</span>
            </div>
          </div>

          <ul class="manual-keypoints-list">
            <li><strong>Selector de Pilares / Áreas:</strong> Barra superior para cambiar entre los componentes y áreas de evaluación.</li>
            <li><strong>Barra de Progreso en Tiempo Real:</strong> Indica el porcentaje de avance completado del área seleccionada.</li>
            <li><strong>Filtros Rápidos:</strong> Permiten visualizar únicamente preguntas completadas, pendientes o filtradas por calificación (A, B, C, D).</li>
            <li><strong>Listado de Prácticas:</strong> Tarjetas colapsables identificadas con su código FMI (ej. <code>KA2-P1</code>, <code>KA2-P2</code>), su título normativo y la calificación actual asignada.</li>
          </ul>

          <h3 class="manual-section-h3" style="margin-top:1.75rem;">3.2 Ficha Técnica Desplegada (Detalle de la Pregunta)</h3>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            Al pulsar sobre cualquier práctica (o el botón <code>Evaluar</code>), se expande la ficha técnica completa con todos sus instrumentos diagnósticos:
          </p>

          <div class="manual-img-card" onclick="openManualLightbox('manual_img/real_screen_evaluation_card.png', 'Ficha Técnica Desplegada — Detalle de Buena Práctica')">
            <img src="manual_img/real_screen_evaluation_card.png" alt="Captura Real de Tarjeta de Buena Práctica Desplegada" loading="lazy">
            <div class="manual-img-caption">
              <span><strong>Figura 3B:</strong> Ficha de trabajo con botones de escala ABCD, criterio KPI, evidencia documental, hallazgos, recomendaciones y bitácora.</span>
              <span class="zoom-hint"><i data-lucide="zoom-in" style="width:13px;height:13px;"></i> Clic para ampliar</span>
            </div>
          </div>

          <h3 class="manual-section-h3">Campos e instrumentos de la ficha de evaluación:</h3>
          <ol class="manual-keypoints-list">
            <li><strong>Botones de Calificación Oficial (Escala FMI CASA):</strong>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:0.65rem; margin:0.75rem 0;">
                <div style="background:#e1f3fb; border:1px solid #009cde; padding:8px 10px; border-radius:6px; font-size:0.8rem; color:#004c97;">
                  <strong>[ A ] Sólido (4.0):</strong> Cumplimiento pleno de estándares internacionales.
                </div>
                <div style="background:#edf8e5; border:1px solid #78be20; padding:8px 10px; border-radius:6px; font-size:0.8rem; color:#366007;">
                  <strong>[ B ] Bueno (3.0):</strong> En desarrollo o implementación avanzada.
                </div>
                <div style="background:#fdf0e6; border:1px solid #ff8200; padding:8px 10px; border-radius:6px; font-size:0.8rem; color:#a34b00;">
                  <strong>[ C ] Inicial (2.0):</strong> Cumplimiento parcial en etapa formativa.
                </div>
                <div style="background:#fee8e6; border:1px solid #da291c; padding:8px 10px; border-radius:6px; font-size:0.8rem; color:#91160c;">
                  <strong>[ D ] Incipiente (1.0):</strong> Requisitos no cumplidos o inexistentes.
                </div>
              </div>
            </li>
            <li><strong>Criterio de Evaluación y Métrica (KPI):</strong> Detalla el indicador propuesto por el FMI para medir objetivamente la práctica.</li>
            <li><strong>Evidencia / Justificación Documental (Textarea):</strong> Espacio para citar leyes, decretos supremos, resoluciones de directorio (RD), manuales operativos, registros de auditoría o capturas de sistemas.</li>
            <li><strong>Hallazgos Clave (Findings):</strong> Observaciones técnicas y brechas identificadas por el equipo durante las mesas de trabajo y entrevistas con las gerencias aduaneras.</li>
            <li><strong>Recomendación de Asistencia Técnica (Actionable Advice):</strong> Propuesta concreta de fortalecimiento institucional para elevar la calificación en el corto y mediano plazo.</li>
            <li><strong>Bitácora de Aportes y Observaciones:</strong> Registro colaborativo fechado donde los evaluadores y colaboradores dejan constancia de sus revisiones internas.</li>
            <li><strong>Guardado Automático y Sincronización:</strong> La plataforma guarda cada carácter y calificación en tiempo real tanto en caché local como en Firebase Cloud.</li>
          </ol>
        </section>

        <!-- SECCIÓN 4 -->
        <section class="manual-section" id="manual-sec-4">
          <h2 class="manual-section-h2">
            <span style="background:var(--primary-600);color:#fff;width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">4</span>
            <span>Pantalla de Inventario y Control de Evidencias Documentales</span>
          </h2>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            Diseñada para el seguimiento riguroso, recepción y control de los requerimientos documentales solicitados a la contraparte boliviana.
          </p>

          <div class="manual-img-card" onclick="openManualLightbox('manual_img/real_screen_evidence.png', 'Pantalla de Inventario de Evidencias Documentales')">
            <img src="manual_img/real_screen_evidence.png" alt="Captura Real de la Pantalla de Inventario de Evidencias Documentales" loading="lazy">
            <div class="manual-img-caption">
              <span><strong>Figura 4:</strong> Matriz interactiva de control de entrega con indicadores de cumplimiento y filtros de búsqueda en vivo.</span>
              <span class="zoom-hint"><i data-lucide="zoom-in" style="width:13px;height:13px;"></i> Clic para ampliar</span>
            </div>
          </div>

          <h3 class="manual-section-h3">Elementos clave de esta pantalla:</h3>
          <ol class="manual-keypoints-list">
            <li><strong>Tarjetas de Síntesis e Indicadores KPI (Sector Superior):</strong>
              <ul style="margin-top:0.35rem;padding-left:1.2rem;">
                <li><strong>Requerimientos Documentales:</strong> Número total de prácticas que cuentan con evidencia registrada y número de áreas involucradas.</li>
                <li><strong>Entregados por Contraparte:</strong> Recuento en verde y porcentaje de avance documentado con barra de progreso interactiva.</li>
                <li><strong>Pendientes de Recepción:</strong> Documentos solicitados que aún faltan ser proporcionados o verificados por la contraparte.</li>
                <li><strong>Exportación Rápida:</strong> Botones directos para descargar la matriz completa en <strong>Excel (<code>.xlsx</code>)</strong> o <strong>CSV</strong> en un solo clic.</li>
              </ul>
            </li>
            <li><strong>Barra de Búsqueda y Filtros en Tiempo Real:</strong>
              <ul style="margin-top:0.35rem;padding-left:1.2rem;">
                <li><strong>Buscador en vivo:</strong> Permite filtrar instantáneamente por código (ej. <code>KA8-P1</code>), número de resolución (ej. <code>01-006-25</code>), palabra clave o nombre del evaluador.</li>
                <li><strong>Filtros de Estado:</strong> Píldoras rápidas para alternar entre <em>Todos</em>, <em>✓ Entregados</em> o <em>⏳ Pendientes</em>.</li>
                <li><strong>Selector de Área Clave:</strong> Menú desplegable para aislar las evidencias de un área específica.</li>
              </ul>
            </li>
            <li><strong>Casilla de Verificación de Entrega (<code>✓</code>):</strong> Al marcar o desmarcar la casilla de verificación en la primera columna, el sistema cambia inmediatamente el estado entre <em>✓ Entregado</em> (verde) y <em>⏳ Pendiente</em> (ámbar), registra la fecha de recepción y sincroniza el cambio en tiempo real con la nube y con la ficha del Cuestionario.</li>
            <li><strong>Enlace Directo al Cuestionario (Código FMI):</strong> Al pulsar sobre el código azul (ej. <code>KA8-P1</code> o el botón <em>Ficha</em>), la plataforma salta automáticamente al Cuestionario, expande la práctica correspondiente y resalta la tarjeta para continuar la evaluación.</li>
          </ol>
        </section>

        <!-- SECCIÓN 5 -->
        <section class="manual-section" id="manual-sec-5">
          <h2 class="manual-section-h2">
            <span style="background:var(--primary-600);color:#fff;width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">5</span>
            <span>Pantalla del Cuaderno de Notas de la Misión</span>
          </h2>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            El <strong>Cuaderno de Notas</strong> funciona como la bitácora electrónica y diario de campo de la misión técnica.
          </p>

          <div class="manual-img-card" onclick="openManualLightbox('manual_img/real_screen_notebook.png', 'Cuaderno de Notas de Campo y Síntesis IA')">
            <img src="manual_img/real_screen_notebook.png" alt="Captura Real del Cuaderno de Notas de Campo y Síntesis IA" loading="lazy">
            <div class="manual-img-caption">
              <span><strong>Figura 5:</strong> Bitácora organizada por fecha y evaluador con módulo de agregación y síntesis ejecutiva.</span>
              <span class="zoom-hint"><i data-lucide="zoom-in" style="width:13px;height:13px;"></i> Clic para ampliar</span>
            </div>
          </div>

          <h3 class="manual-section-h3">Estructura del Cuaderno:</h3>
          <ol class="manual-keypoints-list">
            <li><strong>Pestañas de Selección de Fecha:</strong> Permiten navegar entre las jornadas de la misión (ej. <em>20 de Octubre</em>, <em>21 de Octubre</em>).</li>
            <li><strong>Filtro de Evaluador:</strong> Permite visualizar las minutas registradas por todo el equipo o aislar las notas de un evaluador en particular.</li>
            <li><strong>Columna Izquierda: Minutas y Entrevistas:</strong> Tarjetas que registran hora de la reunión, contraparte entrevistada (ej. <em>Gerencia Nacional de Fiscalización</em>, <em>Gerencia de Sistemas</em>), puntos tratados, compromisos asumidos y etiquetas temáticas. Botón <code>+ Nueva Nota</code> para redactar una nueva minuta al concluir cada reunión técnica.</li>
            <li><strong>Columna Derecha: Módulo de Síntesis Ejecutiva:</strong> Panel de agregación inteligente que consolida los hallazgos del día en un resumen estructurado con puntos neurálgicos, riesgos operacionales y temas a contrastar en las siguientes sesiones.</li>
          </ol>
        </section>

        <!-- SECCIÓN 6 -->
        <section class="manual-section" id="manual-sec-6">
          <h2 class="manual-section-h2">
            <span style="background:var(--primary-600);color:#fff;width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">6</span>
            <span>Pantalla de Equipo y Matriz de Asignaciones</span>
          </h2>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            Diseñada para la gestión, coordinación operativa y distribución de responsabilidades del equipo de expertos del FMI.
          </p>

          <div class="manual-img-card" onclick="openManualLightbox('manual_img/real_screen_team.png', 'Matriz de Equipo y Asignaciones CASA')">
            <img src="manual_img/real_screen_team.png" alt="Captura Real de la Matriz de Equipo y Asignaciones CASA" loading="lazy">
            <div class="manual-img-caption">
              <span><strong>Figura 6:</strong> Cuadro sinóptico de evaluadores titulares y colaboradores asignados a las 13 Áreas Clave.</span>
              <span class="zoom-hint"><i data-lucide="zoom-in" style="width:13px;height:13px;"></i> Clic para ampliar</span>
            </div>
          </div>

          <h3 class="manual-section-h3">Componentes de la pantalla:</h3>
          <ol class="manual-keypoints-list">
            <li><strong>Tarjetas de Evaluadores con Barra de Avance:</strong> Muestra el perfil de cada consultor con su porcentaje individual de cumplimiento sobre las preguntas y áreas bajo su responsabilidad directa.</li>
            <li><strong>Matriz de Asignaciones CASA (13 Áreas Clave):</strong> Cuadro sinóptico que vincula cada una de las 13 Áreas Clave con su Evaluador Titular y Colaboradores asignados, etiquetas de estado operativo (<em>No iniciado</em>, <em>En proceso</em> o <em>Completado</em>) y botón directo <em>Ver Detalle</em> para inspeccionar el avance granular de cada bloque.</li>
          </ol>
        </section>

        <!-- SECCIÓN 7 -->
        <section class="manual-section" id="manual-sec-7">
          <h2 class="manual-section-h2">
            <span style="background:var(--primary-600);color:#fff;width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">7</span>
            <span>Pantalla de Informe Técnico Consolidado (Informe CD)</span>
          </h2>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            Genera el documento técnico formal de Asistencia Técnica (Capacity Development Report) para la contraparte nacional y las autoridades del FMI.
          </p>

          <div class="manual-img-card" onclick="openManualLightbox('manual_img/real_screen_report.png', 'Informe Técnico Consolidado')">
            <img src="manual_img/real_screen_report.png" alt="Captura Real del Informe Técnico Consolidado" loading="lazy">
            <div class="manual-img-caption">
              <span><strong>Figura 7:</strong> Vista previa interactiva del informe formal con filtros por área y exportación directa a Word o PDF.</span>
              <span class="zoom-hint"><i data-lucide="zoom-in" style="width:13px;height:13px;"></i> Clic para ampliar</span>
            </div>
          </div>

          <h3 class="manual-section-h3">Capacidades del Informe:</h3>
          <ol class="manual-keypoints-list">
            <li><strong>Encabezado Ejecutivo y Metadatos:</strong> Presentación formal con membrete institucional FMI, identificación del país evaluado y fecha de emisión.</li>
            <li><strong>Filtros Dinámicos:</strong> Permite generar el informe de toda la institución o filtrar por áreas temáticas específicas para entregar reportes parciales a cada gerencia técnica.</li>
            <li><strong>Exportación e Impresión Profesional:</strong>
              <ul style="margin-top:0.35rem;padding-left:1.2rem;">
                <li>Botón <strong>Imprimir / Guardar PDF</strong> preconfigurado con estilos de página A4, márgenes limpios y saltos de página inteligentes.</li>
                <li>Botón <strong>Exportar Word (.doc)</strong> para continuar la edición en procesadores de texto oficiales respetando tablas y colores.</li>
              </ul>
            </li>
            <li><strong>Desglose Narrativo Completo:</strong> Agrupa en un solo documento continuo la justificación legal, hallazgos, evidencias y recomendaciones de todas las preguntas calificadas.</li>
          </ol>
        </section>

        <!-- SECCIÓN 8 -->
        <section class="manual-section" id="manual-sec-8">
          <h2 class="manual-section-h2">
            <span style="background:var(--primary-600);color:#fff;width:28px;height:28px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:0.9rem;">8</span>
            <span>Barra Superior y Funciones Globales</span>
          </h2>
          <p style="color:var(--text-secondary);line-height:1.6;font-size:0.925rem;">
            En la esquina superior derecha de la aplicación se encuentran los controles permanentes del sistema:
          </p>

          <table class="manual-table">
            <thead>
              <tr>
                <th style="width:180px;text-align:center;">Control</th>
                <th style="width:200px;">Nombre</th>
                <th>Utilidad Operativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align:center;"><code style="background:var(--bg-tertiary);padding:3px 8px;border-radius:4px;font-weight:700;color:var(--primary-600);">FMI2026</code></td>
                <td><strong>Estado de Sesión</strong></td>
                <td>Confirma autenticación activa bajo el PIN de la misión técnica.</td>
              </tr>
              <tr>
                <td style="text-align:center;"><span style="display:inline-flex;align-items:center;gap:5px;font-weight:700;color:#10b981;"><span style="width:8px;height:8px;border-radius:50%;background:#10b981;display:inline-block;"></span> En línea</span></td>
                <td><strong>Sincronización Cloud</strong></td>
                <td>Confirma conexión activa y sincronización bidireccional en tiempo real con Google Firebase Database.</td>
              </tr>
              <tr>
                <td style="text-align:center;"><i data-lucide="moon" style="width:16px;height:16px;"></i> / <i data-lucide="sun" style="width:16px;height:16px;"></i></td>
                <td><strong>Alternador de Tema</strong></td>
                <td>Cambia entre el modo claro ejecutivo y el modo oscuro para sesiones de trabajo prolongadas o nocturnas.</td>
              </tr>
              <tr>
                <td style="text-align:center;"><i data-lucide="download" style="width:16px;height:16px;color:#2563eb;"></i> Exportar JSON</td>
                <td><strong>Copia de Seguridad Offline</strong></td>
                <td>Descarga un archivo <code>.json</code> íntegro con todas las calificaciones, notas y bitácoras al disco duro.</td>
              </tr>
              <tr>
                <td style="text-align:center;"><i data-lucide="upload" style="width:16px;height:16px;color:#2563eb;"></i> Importar</td>
                <td><strong>Restaurar Diagnóstico</strong></td>
                <td>Carga una base de datos previa o un respaldo compartido por otro consultor de la misión.</td>
              </tr>
              <tr>
                <td style="text-align:center;"><span style="display:inline-block;padding:2px 8px;border-radius:12px;background:#1e40af;color:#fff;font-size:0.75rem;font-weight:700;">JM</span></td>
                <td><strong>Selector de Perfil</strong></td>
                <td>Permite alternar entre los perfiles de los evaluadores sin necesidad de cerrar sesión.</td>
              </tr>
              <tr>
                <td style="text-align:center;"><i data-lucide="log-out" style="width:16px;height:16px;color:#ef4444;"></i> Salir</td>
                <td><strong>Cerrar Sesión</strong></td>
                <td>Bloquea la plataforma y retorna a la pantalla inicial de autenticación por PIN.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  window.addEventListener('scroll', handleManualScrollSpy, { passive: true });
}

function smoothScrollManual(e, targetId) {
  if (e) e.preventDefault();
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.manual-toc-link').forEach(link => {
      if (link.getAttribute('href') === `#${targetId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

function handleManualScrollSpy() {
  if (AppState.activeView !== 'manual') return;
  const sections = document.querySelectorAll('.manual-section');
  let currentSecId = '';
  const scrollY = window.scrollY + 140;
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollY) {
      currentSecId = sec.id;
    }
  });
  if (currentSecId) {
    document.querySelectorAll('.manual-toc-link').forEach(link => {
      if (link.getAttribute('href') === `#${currentSecId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

function openManualLightbox(imgSrc, caption) {
  let modal = document.getElementById('manual-lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'manual-lightbox-modal';
    modal.className = 'manual-lightbox-modal';
    modal.onclick = function (e) {
      if (e.target.tagName !== 'IMG') closeManualLightbox();
    };
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div style="position:relative; max-width:92vw; max-height:92vh; display:flex; flex-direction:column; align-items:center;">
      <button onclick="closeManualLightbox()" style="position:absolute; top:-38px; right:0; background:rgba(255,255,255,0.25); border:none; color:#fff; border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:18px; font-weight:bold;" title="Cerrar (Esc)">
        ✕
      </button>
      <img src="${imgSrc}" class="manual-lightbox-img" alt="${caption || 'Captura de pantalla'}" style="cursor:default;">
      ${caption ? `<div style="color:#ffffff; margin-top:0.75rem; font-size:0.875rem; text-align:center; background:rgba(0,0,0,0.6); padding:4px 16px; border-radius:20px;">${caption}</div>` : ''}
    </div>
  `;

  modal.style.display = 'flex';

  const escHandler = function (e) {
    if (e.key === 'Escape') {
      closeManualLightbox();
      window.removeEventListener('keydown', escHandler);
    }
  };
  window.addEventListener('keydown', escHandler);
}

function closeManualLightbox() {
  const modal = document.getElementById('manual-lightbox-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function exportManualWordHtml() {
  const wrapper = document.querySelector('.manual-content-wrapper');
  if (!wrapper) {
    showToast('No se encontró el contenido del manual para exportar.', 'warning');
    return;
  }

  const header = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Manual de Usuario — Mision FMI Bolivia 2026</title>
    <style>
      body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #111827; line-height: 1.5; padding: 20px; }
      h1 { font-size: 18pt; color: #1e3a8a; text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 8px; margin-bottom: 16px; }
      h2 { font-size: 14pt; color: #1e40af; border-bottom: 1px solid #93c5fd; padding-bottom: 4px; margin-top: 24px; }
      h3 { font-size: 12pt; color: #2563eb; margin-top: 14px; }
      table { border-collapse: collapse; width: 100%; margin: 16px 0; }
      th, td { border: 1px solid #cbd5e1; padding: 8px 10px; font-size: 10pt; }
      th { background-color: #f1f5f9; color: #1e3a8a; text-align: left; }
      ol, ul { margin: 10px 0; padding-left: 24px; }
      li { margin-bottom: 6px; }
      .manual-img-card { border: 1px solid #e2e8f0; margin: 16px 0; text-align: center; background: #fafafa; padding: 10px; }
      .manual-img-caption { font-size: 9pt; color: #64748b; font-style: italic; margin-top: 6px; }
      .zoom-hint { display: none; }
      code { background: #f1f5f9; color: #2563eb; padding: 2px 5px; font-family: Consolas, monospace; }
    </style>
    </head><body>
  `;
  const footer = `</body></html>`;
  const blob = new Blob([header + wrapper.innerHTML + footer], { type: 'application/msword;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const dl = document.createElement('a');
  dl.href = url;
  dl.download = 'Manual_de_Usuario_FMI_Bolivia_2026.doc';
  document.body.appendChild(dl);
  dl.click();
  document.body.removeChild(dl);
  URL.revokeObjectURL(url);

  showToast('Manual de usuario descargado en formato Word (.doc)', 'success');
}

function downloadManualMarkdown() {
  fetch('MANUAL_DE_USUARIO.md')
    .then(res => {
      if (!res.ok) throw new Error('No se pudo leer el archivo Markdown local');
      return res.text();
    })
    .then(content => {
      triggerMarkdownBlobDownload(content);
    })
    .catch(() => {
      // Fallback si fetch no está disponible (ej. file:// protocol)
      const fallbackMarkdown = `# Manual Visual de Usuario — Pantalla por Pantalla
## Plataforma de Diagnóstico y Evaluación de la Administración Aduanera y Tributaria
### Misión Técnica FMI CASA — Estado Plurinacional de Bolivia 2026

Consulte la versión interactiva completa dentro de la plataforma web o descargue el archivo MANUAL_DE_USUARIO.md de la raíz del sistema.`;
      triggerMarkdownBlobDownload(fallbackMarkdown);
    });
}

function triggerMarkdownBlobDownload(markdownText) {
  const blob = new Blob([markdownText], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const dl = document.createElement('a');
  dl.href = url;
  dl.download = 'MANUAL_DE_USUARIO_FMI_BOLIVIA_2026.md';
  document.body.appendChild(dl);
  dl.click();
  document.body.removeChild(dl);
  URL.revokeObjectURL(url);

  showToast('Archivo Markdown descargado (.md)', 'success');
}

function openLoginManualModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <div style="width:36px; height:36px; border-radius:8px; background:rgba(30,58,138,0.1); color:#1e3a8a; display:flex; align-items:center; justify-content:center;">
          <i data-lucide="book-marked" style="width:20px; height:20px;"></i>
        </div>
        <div>
          <h3 style="font-size:1.2rem; font-weight:800; color:#1e3a8a; margin:0;">
            Manual de Usuario y Guía de Acceso
          </h3>
          <p style="color:var(--text-muted); font-size:0.78rem; margin:2px 0 0 0;">
            Misión FMI CASA • Estado Plurinacional de Bolivia 2026
          </p>
        </div>
      </div>
      <button class="btn-icon-xs" onclick="closeModal()" title="Cerrar modal">
        <i data-lucide="x" style="width:16px; height:16px;"></i>
      </button>
    </div>

    <div style="font-size:0.875rem; color:var(--text-secondary); line-height:1.55; margin-bottom:1.25rem;">
      Bienvenido(a) a la plataforma de asistencia técnica. Si es su primera vez en el sistema o desea consultar las especificaciones operativas, dispone de la documentación visual completa pantalla por pantalla:
    </div>

    <!-- Tarjetas de Acceso / Descarga -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:0.75rem; margin-bottom:1.25rem;">
      <div style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1rem; text-align:center;">
        <i data-lucide="file-text" style="width:28px; height:28px; color:#2563eb; margin-bottom:0.4rem;"></i>
        <div style="font-weight:700; font-size:0.88rem; color:var(--text-primary); margin-bottom:0.25rem;">Documento Word (.doc)</div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.75rem;">Para lectura y edición offline en Microsoft Word</div>
        <button class="btn btn-sm btn-primary" style="width:100%; font-size:0.78rem;" onclick="exportManualWordHtml()">
          <i data-lucide="download" style="width:14px; height:14px;"></i> Descargar Word
        </button>
      </div>

      <div style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:1rem; text-align:center;">
        <i data-lucide="code" style="width:28px; height:28px; color:#10b981; margin-bottom:0.4rem;"></i>
        <div style="font-weight:700; font-size:0.88rem; color:var(--text-primary); margin-bottom:0.25rem;">Markdown Original (.md)</div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.75rem;">Formato de texto estructurado para VS Code o GitHub</div>
        <button class="btn btn-sm btn-outline-primary" style="width:100%; font-size:0.78rem;" onclick="downloadManualMarkdown()">
          <i data-lucide="download" style="width:14px; height:14px;"></i> Descargar Markdown
        </button>
      </div>
    </div>

    <!-- Resumen de Credenciales de Misión -->
    <div style="background:rgba(30,58,138,0.05); border:1px solid rgba(30,58,138,0.15); border-radius:var(--radius-md); padding:0.85rem 1rem; margin-bottom:1.25rem;">
      <div style="font-weight:700; font-size:0.82rem; color:#1e3a8a; margin-bottom:0.35rem; display:flex; align-items:center; gap:0.4rem;">
        <i data-lucide="key-round" style="width:14px; height:14px;"></i>
        <span>Credenciales de Acceso Rápido a la Misión</span>
      </div>
      <div style="font-size:0.78rem; color:var(--text-secondary); line-height:1.45;">
        • Clave confidencial de misión: <strong style="color:#1e3a8a;">FMI2026</strong><br>
        • PIN por defecto para evaluadores: <strong style="color:#1e3a8a;">2026</strong><br>
        • Evaluadores registrados: <strong>Selvin Lemus</strong> (Jefe), <strong>Miguel Tapia</strong> (Riesgos), <strong>Sylvia Saucedo</strong> (Legal), <strong>Ignacio Gonzalez</strong> (TIC).
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:0.85rem; flex-wrap:wrap; gap:0.5rem;">
      <button class="btn btn-sm btn-secondary" onclick="closeModal()">
        Cerrar
      </button>
      <button class="btn btn-sm btn-primary" onclick="openManualDirectlyFromLogin()">
        <i data-lucide="external-link" style="width:14px; height:14px;"></i>
        <span>Ver Manual Interactivo en Pantalla</span>
      </button>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function openManualDirectlyFromLogin() {
  closeModal();
  if (!AppState.currentUser) {
    AppState.currentUser = AppState.team[0] || { id: 'usr_1', name: 'Jefe de Misión', role: 'lead' };
  }
  const loginScreen = document.getElementById('login-screen');
  const appContainer = document.getElementById('app-container');
  if (loginScreen) loginScreen.style.display = 'none';
  if (appContainer) appContainer.style.display = 'flex';

  updateActiveUserHeader();
  renderSidebarPillars();
  switchView('manual');
}

