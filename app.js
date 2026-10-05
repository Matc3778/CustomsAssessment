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
    notes: 'Diagnóstico institucional integral basado en el marco de evaluación de buenas prácticas.'
  },
  team: (typeof DEFAULT_DATA !== 'undefined' && DEFAULT_DATA.team) ? DEFAULT_DATA.team : [
    { id: 'usr_1', name: 'Jefe de Misión', role: 'Coordinador General', email: 'lider@mision.org', color: '#1e40af' },
    { id: 'usr_2', name: 'Especialista en Riesgos y Procesos', role: 'Evaluador Senior', email: 'riesgos@mision.org', color: '#0d9488' },
    { id: 'usr_3', name: 'Especialista Legal y Gobernanza', role: 'Evaluador Legal', email: 'legal@mision.org', color: '#7c3aed' },
    { id: 'usr_4', name: 'Especialista en TI y Datos', role: 'Evaluador TI', email: 'ti@mision.org', color: '#ea580c' }
  ],
  pillars: (typeof DEFAULT_DATA !== 'undefined' && DEFAULT_DATA.pillars) ? DEFAULT_DATA.pillars : [],
  chartInstances: {},
  theme: localStorage.getItem('theme') || 'light'
};

// STORAGE KEYS
const STORAGE_KEY_DATA = 'imf_tax_eval_v2_data';
const STORAGE_KEY_META = 'imf_tax_eval_v2_meta';
const STORAGE_KEY_TEAM = 'imf_tax_eval_v2_team';
const STORAGE_KEY_USER = 'imf_tax_eval_active_user';

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadData();
  setupEventListeners();
  updateActiveUserHeader();
  renderSidebarPillars();
  renderCurrentView();
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

  if (savedMeta) {
    try { AppState.mission = JSON.parse(savedMeta); } catch(e) {}
  }
  if (savedTeam) {
    try { AppState.team = JSON.parse(savedTeam); } catch(e) {}
  }
  if (savedData) {
    try {
      const parsedPillars = JSON.parse(savedData);
      if (Array.isArray(parsedPillars) && parsedPillars.length > 0) {
        AppState.pillars = parsedPillars;
      }
    } catch(e) {
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
  saveData(false);

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
      .catch(() => {});
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

// GUARDA EN LOCALSTORAGE Y EN SERVIDOR SI EXISTE
function saveData(showNotify = true, syncToServer = true) {
  try {
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(AppState.pillars));
    localStorage.setItem(STORAGE_KEY_META, JSON.stringify(AppState.mission));
    localStorage.setItem(STORAGE_KEY_TEAM, JSON.stringify(AppState.team));
  } catch (err) {
    console.error('Error al guardar en localStorage:', err);
  }

  const syncEl = document.getElementById('sync-indicator');
  if (syncEl) {
    syncEl.innerHTML = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#10b981;margin-right:4px;"></span> Sincronizado`;
  }

  if (syncToServer && window.location.protocol.startsWith('http')) {
    fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mission: AppState.mission,
        team: AppState.team,
        pillars: AppState.pillars
      })
    }).catch(() => {});
  }

  if (showNotify) {
    showToast('Cambios y asignaciones guardados', 'success');
  }
}

// ASEGURA ESTRUCTURA DE ASIGNACIONES POR PILAR
function ensurePillarAssignments() {
  if (!AppState.pillars || AppState.pillars.length === 0) return;

  const defaultMap = {
    "pilar_1": ["usr_1", "usr_3"],
    "pilar_2": ["usr_2", "usr_1"],
    "pilar_3": ["usr_3", "usr_1"],
    "pilar_4": ["usr_4", "usr_2"],
    "pilar_5": ["usr_4"],
    "pilar_6": ["usr_1", "usr_3"],
    "pilar_7": ["usr_2", "usr_3"],
    "pilar_8": ["usr_2", "usr_3"],
    "pilar_9": ["usr_2"],
    "pilar_10": ["usr_2", "usr_4"],
    "pilar_11": ["usr_2", "usr_4"],
    "pilar_12": ["usr_3", "usr_2"],
    "pilar_13": ["usr_4", "usr_2"],
    "pilar_14": ["usr_3", "usr_2"]
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

// INSIGNIA DE PUNTAJE
function getScoreBadgeHtml(scoreNum) {
  if (!scoreNum || scoreNum === '—' || scoreNum === 0 || scoreNum === '0.0') {
    return `<span class="score-tag score-na">Sin evaluar</span>`;
  }
  const val = parseFloat(scoreNum);
  if (val >= 3.5) return `<span class="score-tag score-4"><i data-lucide="check-circle-2" style="width:13px;height:13px;"></i> ${val.toFixed(2)} - Alto</span>`;
  if (val >= 2.5) return `<span class="score-tag score-3"><i data-lucide="alert-triangle" style="width:13px;height:13px;"></i> ${val.toFixed(2)} - Medio</span>`;
  if (val >= 1.8) return `<span class="score-tag score-2"><i data-lucide="alert-circle" style="width:13px;height:13px;"></i> ${val.toFixed(2)} - Bajo</span>`;
  return `<span class="score-tag score-1"><i data-lucide="x-circle" style="width:13px;height:13px;"></i> ${val.toFixed(2)} - Crítico</span>`;
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
  if (!container) return;

  const currentUser = getCurrentUser();
  const myAssignedPillars = AppState.pillars.filter(p => (p.assigned_evaluators || []).includes(currentUser.id));
  const visiblePillars = getVisiblePillars();
  const isOnlyAssigned = AppState.pillarScope === 'assigned';

  container.innerHTML = `
    <!-- Scope Selector en Sidebar -->
    <div class="sidebar-scope-toggle">
      <button class="scope-btn ${isOnlyAssigned ? 'active' : ''}" onclick="setPillarScope('assigned')" title="Mostrar solo pilares asignados a ${currentUser.name.split(' ')[0]}">
        🎯 Mis Pilares (${myAssignedPillars.length})
      </button>
      <button class="scope-btn ${!isOnlyAssigned ? 'active' : ''}" onclick="setPillarScope('all')" title="Mostrar todos los 14 pilares">
        🌐 Todos (14)
      </button>
    </div>

    ${visiblePillars.length === 0 ? `
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
        <div class="pillar-nav-item ${isActive ? 'active' : ''}" onclick="switchView('evaluation', '${p.id}')">
          <span class="pillar-nav-name" title="${p.title}">
            ${isAssignedToMe ? `<span style="color:${currentUser.color || '#2563eb'};font-weight:900;margin-right:3px;" title="Sección a tu cargo">●</span>` : ''}
            ${p.number || p.id.replace('pilar_', '')}. ${p.title}
          </span>
          <span class="score-tag ${badgeClass}" style="font-size:0.7rem;padding:1px 5px;">
            ${stats.average !== '—' ? stats.average : `${stats.progressPercent}%`}
          </span>
        </div>
      `;
    }).join('')}
  `;

  const globalStats = calculateGlobalStats();
  const qBadge = document.getElementById('nav-q-badge');
  if (qBadge) qBadge.innerText = `${globalStats.evaluatedQs}/${globalStats.totalQs}`;
  
  if (window.lucide) lucide.createIcons();
}

function renderCurrentView() {
  const container = document.getElementById('main-content-area');
  if (!container) return;

  const headerTitle = document.getElementById('page-header-title');
  const headerSubtitle = document.getElementById('page-header-subtitle');

  if (AppState.activeView === 'dashboard') {
    if (headerTitle) headerTitle.innerText = 'Un Vistazo / Dashboard Ejecutivo';
    if (headerSubtitle) headerSubtitle.innerText = `${AppState.mission.institution} • ${AppState.mission.country} • Misión ${AppState.mission.dates}`;
    renderDashboardView(container);
  } else if (AppState.activeView === 'evaluation') {
    const curPillar = AppState.pillars.find(p => p.id === AppState.activePillarId) || AppState.pillars[0];
    if (headerTitle) headerTitle.innerText = `Evaluación: ${curPillar ? curPillar.title : 'Cuestionario'}`;
    if (headerSubtitle) headerSubtitle.innerText = 'Diagnóstico guiado por pilares, criterios y evidencias documentales';
    renderEvaluationView(container);
  } else if (AppState.activeView === 'team') {
    if (headerTitle) headerTitle.innerText = 'Equipo de Evaluación y Asignación de Secciones';
    if (headerSubtitle) headerSubtitle.innerText = 'Configura qué evaluadores ejecutarán cada una de las 14 secciones (multi-evaluador permitido)';
    renderTeamView(container);
  } else if (AppState.activeView === 'report') {
    if (headerTitle) headerTitle.innerText = 'Informe Diagnóstico Consolidado';
    if (headerSubtitle) headerSubtitle.innerText = 'Generación y exportación de informe oficial de Asistencia Técnica (CD Report)';
    renderReportView(container);
  }

  if (window.lucide) lucide.createIcons();
}

// ==========================================================================
// VISTA 1: DASHBOARD / UN VISTAZO
// ==========================================================================
function renderDashboardView(container) {
  const stats = calculateGlobalStats();
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
            Tienes <strong>${myAssignedPillars.length} de 14 pilares</strong> a tu cargo • Avance personal: <strong>${myEvaluatedQs}/${myTotalQs} preguntas (${myProgress}%)</strong>
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

    <!-- Hero Banner -->
    <div class="dashboard-hero">
      <div class="hero-grid">
        <div class="hero-title">
          <h2>${AppState.mission.institution}</h2>
          <p>${AppState.mission.title} — ${AppState.mission.country}. Diagnóstico institucional integral estructurado conforme al marco de asistencia técnica y desarrollo de capacidades.</p>
        </div>
        <div class="hero-metrics">
          <div class="metric-card-hero">
            <div class="number">${stats.globalAvg} <span style="font-size:0.9rem;color:#cbd5e1;">/ 4.0</span></div>
            <div class="label">Puntaje Global</div>
          </div>
          <div class="metric-card-hero">
            <div class="number">${stats.globalProgress}%</div>
            <div class="label">Avance Diagnóstico</div>
          </div>
          <div class="metric-card-hero">
            <div class="number">${AppState.pillars.length}</div>
            <div class="label">Pilares Evaluados</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Analytics Charts Grid -->
    <div class="analytics-grid">
      <div class="card">
        <div class="card-header">
          <h3><i data-lucide="radar" style="color:var(--primary-500);width:18px;height:18px;"></i> Madurez por Pilar Institucional</h3>
          <span style="font-size:0.75rem;color:var(--text-muted);">Escala 1.0 a 4.0</span>
        </div>
        <div class="chart-container">
          <canvas id="pillarRadarChart"></canvas>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h3><i data-lucide="pie-chart" style="color:var(--primary-500);width:18px;height:18px;"></i> Distribución de Calificaciones</h3>
          <span style="font-size:0.75rem;color:var(--text-muted);">${stats.evaluatedQs} de ${stats.totalQs} Preguntas</span>
        </div>
        <div class="chart-container">
          <canvas id="scoreDistChart"></canvas>
        </div>
      </div>
    </div>

    <!-- Pillars Summary Grid -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem;">
      <h3 style="font-size:1.15rem;display:flex;align-items:center;gap:0.5rem;">
        <i data-lucide="grid" style="color:var(--primary-500);width:18px;height:18px;"></i> Resumen Ejecutivo de los 14 Pilares
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
              <span class="pillar-number-badge">Pilar ${p.number || p.id.replace('pilar_', '')}</span>
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

  renderDashboardCharts();
}

function renderDashboardCharts() {
  if (typeof Chart === 'undefined') return;

  const isDark = AppState.theme === 'dark';
  const textColor = isDark ? '#cbd5e1' : '#475569';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  // 1. RADAR CHART
  const radarCanvas = document.getElementById('pillarRadarChart');
  if (radarCanvas) {
    if (AppState.chartInstances.radar) AppState.chartInstances.radar.destroy();
    
    const labels = AppState.pillars.map((p, idx) => `P${idx+1}`);
    const dataVals = AppState.pillars.map(p => {
      const stats = calculatePillarStats(p);
      return stats.numAverage > 0 ? stats.numAverage : 0;
    });

    AppState.chartInstances.radar = new Chart(radarCanvas, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Nivel de Madurez (1 a 4)',
          data: dataVals,
          backgroundColor: isDark ? 'rgba(59, 130, 246, 0.35)' : 'rgba(37, 99, 235, 0.25)',
          borderColor: '#3b82f6',
          pointBackgroundColor: '#2563eb',
          pointBorderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 4,
            ticks: { stepSize: 1, color: textColor, backdropColor: 'transparent', font: { size: 9 } },
            grid: { color: gridColor },
            angleLines: { color: gridColor },
            pointLabels: { color: textColor, font: { size: 10, weight: '600' } }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: function(context) {
                const idx = context[0].dataIndex;
                return AppState.pillars[idx].title;
              },
              label: function(context) {
                return ` Puntaje Promedio: ${context.formattedValue} / 4.0`;
              }
            }
          }
        }
      }
    });
  }

  // 2. DISTRIBUTION DOUGHNUT CHART
  const barCanvas = document.getElementById('scoreDistChart');
  if (barCanvas) {
    if (AppState.chartInstances.bar) AppState.chartInstances.bar.destroy();
    
    const stats = calculateGlobalStats();
    AppState.chartInstances.bar = new Chart(barCanvas, {
      type: 'doughnut',
      data: {
        labels: [
          '4 - Cumple Plenamente',
          '3 - Cumple Sustancialmente',
          '2 - En Desarrollo / Parcial',
          '1 - Brecha Crítica',
          'No Aplica',
          'Pendiente de Evaluación'
        ],
        datasets: [{
          data: [
            stats.globalCounts[4],
            stats.globalCounts[3],
            stats.globalCounts[2],
            stats.globalCounts[1],
            stats.globalCounts['NA'],
            stats.globalCounts['pending']
          ],
          backgroundColor: [
            '#10b981',
            '#eab308',
            '#f97316',
            '#ef4444',
            '#64748b',
            isDark ? '#334155' : '#e2e8f0'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: textColor, font: { size: 10 }, boxWidth: 10, padding: 8 }
          }
        },
        cutout: '65%'
      }
    });
  }
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
            <i data-lucide="globe" style="width:15px;height:15px;"></i> Ver Todos los 14 Pilares
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
            🎯 Mis Pilares (${myAssignedPillars.length})
          </button>
          <button class="btn btn-sm ${!isOnlyAssigned ? 'btn-primary' : 'btn-ghost'}" style="padding:3px 9px;font-size:0.75rem;font-weight:700;" onclick="setPillarScope('all')">
            🌐 Todos los Pilares (14)
          </button>
        </div>
        <span style="font-size:0.8rem;color:var(--text-secondary);">
          ${isOnlyAssigned 
            ? `Mostrando solo las <strong>${visiblePillars.length} secciones a tu cargo</strong>` 
            : `Mostrando las <strong>14 secciones</strong> institucionales completas`}
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
          <option value="all" ${AppState.currentFilter.score === 'all' ? 'selected' : ''}>Todas las notas</option>
          <option value="4" ${AppState.currentFilter.score === '4' ? 'selected' : ''}>4 - Plenamente</option>
          <option value="3" ${AppState.currentFilter.score === '3' ? 'selected' : ''}>3 - Sustancialmente</option>
          <option value="2" ${AppState.currentFilter.score === '2' ? 'selected' : ''}>2 - Parcial</option>
          <option value="1" ${AppState.currentFilter.score === '1' ? 'selected' : ''}>1 - Brecha crítica</option>
          <option value="NA" ${AppState.currentFilter.score === 'NA' ? 'selected' : ''}>No aplica</option>
        </select>

        <button class="btn btn-sm btn-outline-danger" onclick="openResetPillarModal('${currentPillar.id}')" title="Borrar respuestas de este pilar">
          <i data-lucide="rotate-ccw" style="width:12px;height:12px;"></i> Reiniciar Sección
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
      if (query && !q.text.toLowerCase().includes(query) && !crit.title.toLowerCase().includes(query) && !(q.guidance||'').toLowerCase().includes(query)) {
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
            <span class="criterion-code">${crit.code || `C${cIdx+1}`}</span>
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

function renderQuestionRow(pillarId, critId, q) {
  const isDetailsOpen = q.findings || q.recommendations || q.evidence || q.indicator;

  return `
    <div class="question-card" id="card-${q.id}">
      <div class="question-main-row">
        <div>
          <div class="question-text">
            <span style="color:var(--primary-600);font-weight:700;margin-right:4px;">${q.code || '•'}</span>
            ${q.text}
          </div>
          ${q.guidance ? `<div style="font-size:0.8rem;color:var(--text-secondary);background:var(--bg-tertiary);padding:4px 8px;border-radius:4px;margin-top:4px;border-left:3px solid var(--primary-500);">${q.guidance}</div>` : ''}
          
          <button class="question-details-toggle" onclick="toggleDetails('${q.id}')">
            <i data-lucide="edit-3" style="width:12px;height:12px;"></i>
            <span id="toggle-lbl-${q.id}">${isDetailsOpen ? 'Ocultar Evidencia, Hallazgos, Recomendaciones e Indicador' : 'Agregar Evidencia, Hallazgos, Recomendaciones e Indicador'}</span>
          </button>
        </div>

        <div class="score-selector">
          <button class="score-btn ${q.score == 4 ? 'active' : ''}" data-val="4" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 4)" title="4 - Cumple Plenamente">4</button>
          <button class="score-btn ${q.score == 3 ? 'active' : ''}" data-val="3" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 3)" title="3 - Cumple Sustancialmente">3</button>
          <button class="score-btn ${q.score == 2 ? 'active' : ''}" data-val="2" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 2)" title="2 - En Desarrollo / Parcial">2</button>
          <button class="score-btn ${q.score == 1 ? 'active' : ''}" data-val="1" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 1)" title="1 - Brecha Crítica">1</button>
          <button class="score-btn ${q.score === 'NA' ? 'active' : ''}" data-val="NA" onclick="setScore('${pillarId}', '${critId}', '${q.id}', 'NA')" title="NA - No Aplica">NA</button>
        </div>
      </div>

      <div class="question-details-panel" id="panel-${q.id}" style="display:${isDetailsOpen ? 'grid' : 'none'};">
        <div class="detail-field">
          <label class="detail-label"><i data-lucide="file-text" style="width:12px;height:12px;"></i> Evidencia / Justificación Documental</label>
          <textarea class="detail-textarea" placeholder="Normativas, leyes, manuales o referencias..." oninput="updateField('${pillarId}', '${critId}', '${q.id}', 'evidence', this.value)">${q.evidence || ''}</textarea>
        </div>

        <div class="detail-field">
          <label class="detail-label"><i data-lucide="alert-circle" style="width:12px;height:12px;color:#f97316;"></i> Hallazgos Clave (Findings)</label>
          <textarea class="detail-textarea" placeholder="Diagnóstico de la situación actual..." oninput="updateField('${pillarId}', '${critId}', '${q.id}', 'findings', this.value)">${q.findings || ''}</textarea>
        </div>

        <div class="detail-field">
          <label class="detail-label"><i data-lucide="check-circle" style="width:12px;height:12px;color:#10b981;"></i> Recomendación de Asistencia Técnica</label>
          <textarea class="detail-textarea" placeholder="Acciones propuestas para cerrar brechas..." oninput="updateField('${pillarId}', '${critId}', '${q.id}', 'recommendations', this.value)">${q.recommendations || ''}</textarea>
        </div>

        <div class="detail-field">
          <label class="detail-label"><i data-lucide="trending-up" style="width:12px;height:12px;color:#0284c7;"></i> Indicador Propuesto (KPI / Métrica Aduanera-Tributaria)</label>
          <textarea class="detail-textarea" placeholder="Definición del indicador propuesto, fórmula o meta cuantitativa..." oninput="updateField('${pillarId}', '${critId}', '${q.id}', 'indicator', this.value)">${q.indicator || ''}</textarea>
        </div>

        <div class="detail-field full-width">
          <label class="detail-label"><i data-lucide="user-check" style="width:12px;height:12px;color:#6366f1;"></i> Asignar Evaluador Responsable de esta Pregunta</label>
          <select class="select-filter" style="width:100%;margin-top:2px;" onchange="updateField('${pillarId}', '${critId}', '${q.id}', 'assigned_to', this.value)">
            <option value="">-- Usar evaluadores asignados al pilar general --</option>
            ${AppState.team.map(m => `
              <option value="${m.id}" ${q.assigned_to === m.id ? 'selected' : ''}>${m.name} (${m.role})</option>
            `).join('')}
          </select>
        </div>
      </div>
    </div>
  `;
}

function toggleDetails(qId) {
  const panel = document.getElementById(`panel-${qId}`);
  const lbl = document.getElementById(`toggle-lbl-${qId}`);
  if (!panel) return;
  if (panel.style.display === 'none') {
    panel.style.display = 'grid';
    if (lbl) lbl.innerText = 'Ocultar Evidencia, Hallazgos, Recomendaciones e Indicador';
  } else {
    panel.style.display = 'none';
    if (lbl) lbl.innerText = 'Agregar Evidencia, Hallazgos, Recomendaciones e Indicador';
  }
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

  saveData(false);
  renderEvaluationView(document.getElementById('main-content-area'));
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
  saveData(false);

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
            Ver Todas las 14 Secciones
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
                <td style="text-align:center;font-weight:700;color:var(--text-muted);">${p.number || idx+1}</td>
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
                <button class="btn btn-sm btn-outline-primary" onclick="openEditMemberModal('${m.id}')" title="Configurar Secciones">
                  <i data-lucide="edit" style="width:13px;height:13px;"></i> Secciones
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

      <div class="detail-field">
        <label class="detail-label">Color del Avatar</label>
        <input type="color" id="member-color" value="${suggestedColor}" style="width:100%;height:36px;border-radius:var(--radius-sm);border:1px solid var(--border-color);background:none;cursor:pointer;">
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
              <span style="font-weight:700;color:var(--primary-600);min-width:30px;">P${p.number || idx+1}</span>
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

  const newId = `usr_${Date.now()}`;
  const newMember = { id: newId, name, role, email, color };
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
                <span style="font-weight:700;color:var(--primary-600);min-width:30px;">P${p.number || idx+1}</span>
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

  if (nameInput && nameInput.value.trim()) member.name = nameInput.value.trim();
  if (roleInput && roleInput.value.trim()) member.role = roleInput.value.trim();
  if (emailInput) member.email = emailInput.value.trim();
  if (colorInput) member.color = colorInput.value;

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

      <!-- Tabla de Puntuaciones -->
      <div style="margin-bottom:2rem;">
        <h2 style="font-size:1.15rem;border-bottom:2px solid var(--primary-500);padding-bottom:0.3rem;margin-bottom:0.85rem;">
          2. Tabla Resumen de Calificaciones por Pilar
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
          3. Matriz Consolidada de Hallazgos, Recomendaciones e Indicadores
        </h2>
        ${AppState.pillars.map(p => {
          let questionsWithDetails = [];
          p.criteria.forEach(c => {
            c.questions.forEach(q => {
              if (q.findings || q.recommendations || q.indicator || q.score == 1 || q.score == 2) {
                questionsWithDetails.push({ ...q, critTitle: c.title });
              }
            });
          });

          if (questionsWithDetails.length === 0) return '';

          return `
            <div style="margin-bottom:1.25rem;">
              <h3 style="font-size:0.95rem;color:#1e3a8a;margin-bottom:0.4rem;">Pilar ${p.number || p.id.replace('pilar_', '')}: ${p.title}</h3>
              <table class="report-meta-table">
                <thead>
                  <tr>
                    <th style="width:22%;">Criterio / Pregunta</th>
                    <th style="width:10%;text-align:center;">Puntaje</th>
                    <th style="width:23%;">Hallazgo Detectado</th>
                    <th style="width:23%;">Recomendación Propuesta</th>
                    <th style="width:22%;">Indicador Propuesto (KPI)</th>
                  </tr>
                </thead>
                <tbody>
                  ${questionsWithDetails.map(q => `
                    <tr>
                      <td style="font-size:0.78rem;">
                        <strong>${q.critTitle}</strong><br>
                        <span style="color:var(--text-muted);">${q.text}</span>
                      </td>
                      <td style="text-align:center;">${getScoreBadgeHtml(q.score)}</td>
                      <td style="font-size:0.78rem;">${q.findings || '<em style="color:var(--text-muted);">Sin observaciones</em>'}</td>
                      <td style="font-size:0.78rem;">${q.recommendations || '<em style="color:var(--text-muted);">Recomendación pendiente</em>'}</td>
                      <td style="font-size:0.78rem;color:var(--primary-700);font-weight:600;">${q.indicator || '<em style="color:var(--text-muted);font-weight:normal;">Indicador en definición</em>'}</td>
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
  dl.setAttribute("download", `diagnostico_tributario_${AppState.mission.country.toLowerCase()}_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(dl);
  dl.click();
  dl.remove();

  showToast('Archivo JSON exportado con éxito', 'success');
}

function importJsonData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
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
    <style>body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; } table { border-collapse: collapse; width: 100%; margin-bottom: 16px; } th, td { border: 1px solid #999; padding: 6px 8px; font-size: 10pt; } th { background-color: #f2f2f2; } h1 { font-size: 16pt; color: #1e3a8a; text-align: center; } h2 { font-size: 13pt; color: #2563eb; }</style>
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
          <h4><i data-lucide="alert-triangle" style="width:16px;height:16px;color:#ef4444;"></i> 2. Reiniciar TODO el Cuestionario (14 Pilares)</h4>
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
    if (!confirm('ADVERTENCIA: ¿Estás seguro de que deseas borrar TODAS las calificaciones y notas de los 14 pilares (517 preguntas)? Esta acción reiniciará todo el diagnóstico.')) {
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
