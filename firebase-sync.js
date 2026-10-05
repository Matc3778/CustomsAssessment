/**
 * SINCRONIZACIÓN EN LA NUBE EN TIEMPO REAL (Firebase Realtime Database)
 * Permite que múltiples evaluadores trabajen simultáneamente desde cualquier dispositivo en GitHub Pages.
 */

const STORAGE_KEY_FIREBASE_CONFIG = 'imf_tax_eval_firebase_config';
let firebaseApp = null;
let firebaseDb = null;
let isRemoteUpdate = false;
let cloudSyncTimeout = null;

// Configuración predeterminada (si existe en firebase-config.js)
const DEFAULT_FIREBASE_CONFIG = (typeof FIREBASE_CONFIG !== 'undefined') ? FIREBASE_CONFIG : null;

// Inicialización de la Sincronización en la Nube
function initCloudSync() {
  const savedConfigStr = localStorage.getItem(STORAGE_KEY_FIREBASE_CONFIG);
  let config = null;

  if (savedConfigStr) {
    try {
      config = JSON.parse(savedConfigStr);
    } catch (e) {
      console.error('Error parseando configuración de Firebase guardada:', e);
    }
  } else if (DEFAULT_FIREBASE_CONFIG && DEFAULT_FIREBASE_CONFIG.apiKey) {
    config = DEFAULT_FIREBASE_CONFIG;
  }

  if (config && config.databaseURL) {
    connectToFirebase(config, false);
  } else {
    updateCloudStatusBadge('disconnected', 'Modo Local');
  }
}

// Conectar con Firebase
function connectToFirebase(config, showToastMsg = true) {
  try {
    if (firebase.apps.length > 0) {
      firebase.apps.forEach(app => app.delete());
    }

    firebaseApp = firebase.initializeApp(config);
    firebaseDb = firebase.database();

    updateCloudStatusBadge('connecting', 'Conectando...');

    // Probar conexión y escuchar cambios en tiempo real
    const evalRef = firebaseDb.ref('evaluacion_imf');
    
    // Escucha en tiempo real (cuando cualquier dispositivo hace un cambio)
    evalRef.on('value', (snapshot) => {
      const cloudData = snapshot.val();
      updateCloudStatusBadge('connected', 'Nube Sincronizada');

      if (cloudData && cloudData.pillars && Array.isArray(cloudData.pillars)) {
        if (!isRemoteUpdate) {
          isRemoteUpdate = true;
          
          AppState.pillars = cloudData.pillars;
          if (cloudData.mission) AppState.mission = cloudData.mission;
          if (cloudData.team) AppState.team = cloudData.team;

          // Guardar copia de seguridad en localStorage
          try {
            localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(AppState.pillars));
            if (cloudData.mission) localStorage.setItem(STORAGE_KEY_META, JSON.stringify(AppState.mission));
            if (cloudData.team) localStorage.setItem(STORAGE_KEY_TEAM, JSON.stringify(AppState.team));
          } catch(e) {}

          updateActiveUserHeader();
          renderSidebarPillars();
          renderCurrentView();
          
          if (showToastMsg) {
            showToast('Sincronizado con la nube en tiempo real', 'success');
          }
          
          setTimeout(() => { isRemoteUpdate = false; }, 300);
        }
      } else if (!cloudData) {
        // La base de datos está vacía, subir el estado actual
        pushStateToCloud(false);
      }
    }, (error) => {
      console.error('Error de lectura en Firebase:', error);
      updateCloudStatusBadge('error', 'Error Permisos Nube');
      if (showToastMsg) {
        showToast('Error de permisos en Firebase. Verifica que las reglas permitan lectura/escritura.', 'danger');
      }
    });

    // Guardar la configuración en localStorage
    localStorage.setItem(STORAGE_KEY_FIREBASE_CONFIG, JSON.stringify(config));
    
    if (showToastMsg) {
      showToast('Conexión con la nube establecida exitosamente', 'success');
    }

    return true;
  } catch (err) {
    console.error('Error al inicializar Firebase:', err);
    updateCloudStatusBadge('error', 'Error Conexión');
    if (showToastMsg) {
      showToast(`Error de conexión: ${err.message}`, 'danger');
    }
    return false;
  }
}

// Subir estado actual a Firebase con debounce (evita saturar peticiones mientras se escribe)
function pushStateToCloud(showIndicator = true) {
  if (!firebaseDb || isRemoteUpdate) return;

  if (showIndicator) {
    updateCloudStatusBadge('syncing', 'Guardando...');
  }

  clearTimeout(cloudSyncTimeout);
  cloudSyncTimeout = setTimeout(() => {
    try {
      const payload = {
        lastUpdated: new Date().toISOString(),
        lastUpdatedBy: getCurrentUser() ? getCurrentUser().name : 'Evaluador',
        mission: AppState.mission,
        team: AppState.team,
        pillars: AppState.pillars
      };

      firebaseDb.ref('evaluacion_imf').set(payload)
        .then(() => {
          updateCloudStatusBadge('connected', 'Nube Sincronizada');
        })
        .catch((err) => {
          console.error('Error al guardar en Firebase:', err);
          updateCloudStatusBadge('error', 'Error al Guardar');
          showToast('No se pudo guardar en la nube. Verifica permisos.', 'danger');
        });
    } catch (e) {
      console.error('Error en pushStateToCloud:', e);
    }
  }, 400); // 400ms debounce
}

// Actualiza la insignia visual en el encabezado
function updateCloudStatusBadge(status, text) {
  const badge = document.getElementById('cloud-sync-btn');
  if (!badge) return;

  let icon = 'cloud';
  let color = 'var(--text-secondary)';
  let bg = 'var(--bg-card)';
  let borderColor = 'var(--border-color)';

  if (status === 'connected') {
    icon = 'cloud';
    color = '#10b981';
    bg = 'rgba(16, 185, 129, 0.08)';
    borderColor = '#10b981';
  } else if (status === 'syncing' || status === 'connecting') {
    icon = 'refresh-cw';
    color = '#3b82f6';
    bg = 'rgba(59, 130, 246, 0.08)';
    borderColor = '#3b82f6';
  } else if (status === 'error') {
    icon = 'cloud-off';
    color = '#ef4444';
    bg = 'rgba(239, 68, 68, 0.08)';
    borderColor = '#ef4444';
  } else {
    icon = 'cloud';
    color = 'var(--text-muted)';
  }

  badge.style.borderColor = borderColor;
  badge.style.background = bg;
  badge.style.color = color;
  badge.innerHTML = `
    <i data-lucide="${icon}" style="width:15px;height:15px;${status === 'syncing' ? 'animation:spin 1s linear infinite;' : ''}"></i>
    <span style="font-weight:600;font-size:0.75rem;">${text}</span>
  `;

  if (window.lucide) lucide.createIcons();
}

// Modal de Configuración de la Nube
function openCloudSyncModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  if (!overlay || !body) return;

  const currentConfigStr = localStorage.getItem(STORAGE_KEY_FIREBASE_CONFIG) || '';
  const isConnected = firebaseDb !== null;

  body.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
      <div style="display:flex;align-items:center;gap:0.6rem;">
        <div style="width:36px;height:36px;border-radius:8px;background:rgba(59,130,246,0.1);color:var(--primary-600);display:flex;align-items:center;justify-content:center;">
          <i data-lucide="cloud" style="width:20px;height:20px;"></i>
        </div>
        <div>
          <h3 style="font-size:1.15rem;margin:0;">Sincronización en la Nube (Multi-dispositivo)</h3>
          <p style="color:var(--text-muted);font-size:0.8rem;margin:2px 0 0 0;">
            Conecta Firebase Realtime Database para que todos los evaluadores trabajen en vivo desde cualquier dispositivo
          </p>
        </div>
      </div>
      <button class="btn-icon" onclick="closeModal()"><i data-lucide="x" style="width:16px;height:16px;"></i></button>
    </div>

    <!-- Estado actual -->
    <div style="padding:0.85rem 1rem;border-radius:8px;margin-bottom:1.25rem;display:flex;align-items:center;justify-content:space-between;background:var(--bg-secondary);border:1px solid var(--border-color);">
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <div style="width:12px;height:12px;border-radius:50%;background:${isConnected ? '#10b981' : '#94a3b8'};"></div>
        <div>
          <strong style="font-size:0.9rem;">${isConnected ? 'Conectado a la Nube' : 'Modo Solo Local'}</strong>
          <div style="font-size:0.78rem;color:var(--text-muted);">
            ${isConnected ? 'Las respuestas y notas se sincronizan automáticamente en tiempo real' : 'Las respuestas solo se guardan en el navegador de este dispositivo'}
          </div>
        </div>
      </div>
      ${isConnected ? `
        <button class="btn btn-sm btn-outline-danger" onclick="disconnectCloud()">
          <i data-lucide="power" style="width:13px;height:13px;"></i> Desconectar
        </button>
      ` : ''}
    </div>

    <!-- Instrucciones y Formulario -->
    <div style="margin-bottom:1.2rem;">
      <label style="display:block;font-size:0.85rem;font-weight:600;margin-bottom:0.4rem;">
        Pegar Objeto de Configuración de Firebase (JSON o código JS):
      </label>
      <textarea id="cloud-config-input" class="form-control" rows="7" style="font-family:monospace;font-size:0.8rem;resize:vertical;" placeholder='{\n  "apiKey": "AIzaSy...",\n  "authDomain": "tu-proyecto.firebaseapp.com",\n  "databaseURL": "https://tu-proyecto-default-rtdb.firebaseio.com",\n  "projectId": "tu-proyecto",\n  "storageBucket": "tu-proyecto.appspot.com",\n  "appId": "1:..."\n}'>${currentConfigStr}</textarea>
      <span style="font-size:0.75rem;color:var(--text-muted);display:block;margin-top:4px;">
        💡 Puedes pegar directamente el objeto completo <code>firebaseConfig = { ... }</code> generado en la consola de Firebase.
      </span>
    </div>

    <div style="background:rgba(59,130,246,0.05);border:1px dashed var(--primary-300);border-radius:8px;padding:0.85rem;margin-bottom:1.25rem;font-size:0.8rem;color:var(--text-secondary);">
      <strong>¿Cómo obtener tu configuración en 3 pasos rápidos?</strong>
      <ol style="margin:6px 0 0 1.2rem;padding:0;line-height:1.5;">
        <li>Entra a <a href="https://console.firebase.google.com/" target="_blank" style="color:var(--primary-600);font-weight:600;">console.firebase.google.com</a> y crea un proyecto gratuito.</li>
        <li>En el menú <strong>Realtime Database</strong> crea una base de datos en <em>Modo de prueba</em>.</li>
        <li>En la configuración del proyecto (icono ⚙️), registra una app Web <code>&lt;/&gt;</code> y copia las credenciales aquí.</li>
      </ol>
    </div>

    <div style="display:flex;justify-content:flex-end;gap:0.6rem;">
      <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveCloudConfigFromUI()">
        <i data-lucide="save" style="width:14px;height:14px;"></i> Guardar y Conectar
      </button>
    </div>
  `;

  overlay.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

// Guardar configuración desde el modal
function saveCloudConfigFromUI() {
  const input = document.getElementById('cloud-config-input');
  if (!input) return;

  let raw = input.value.trim();
  if (!raw) {
    showToast('Por favor ingresa la configuración de Firebase', 'warning');
    return;
  }

  // Si pegaron `const firebaseConfig = { ... };` extraer solo el objeto JSON
  if (raw.includes('{') && raw.includes('}')) {
    const firstBrace = raw.indexOf('{');
    const lastBrace = raw.lastIndexOf('}');
    let jsonCandidate = raw.substring(firstBrace, lastBrace + 1);

    // Ajustar formato si no tiene comillas dobles estrictas
    try {
      // Intentar primero JSON.parse directo
      const parsed = JSON.parse(jsonCandidate);
      if (validateAndConnect(parsed)) return;
    } catch(e) {
      try {
        // Eval seguro con Function para objetos JS válidos
        const fn = new Function(`return (${jsonCandidate})`);
        const parsed = fn();
        if (parsed && typeof parsed === 'object') {
          if (validateAndConnect(parsed)) return;
        }
      } catch (err) {
        showToast('Formato inválido. Asegúrate de copiar el objeto de configuración correctamente.', 'danger');
        return;
      }
    }
  } else {
    showToast('El texto ingresado no parece ser un objeto de configuración válido.', 'danger');
  }
}

function validateAndConnect(config) {
  if (!config.apiKey || !config.databaseURL) {
    if (!config.databaseURL && config.projectId) {
      config.databaseURL = `https://${config.projectId}-default-rtdb.firebaseio.com`;
    } else {
      showToast('Falta apiKey o databaseURL en la configuración.', 'warning');
      return false;
    }
  }

  const success = connectToFirebase(config, true);
  if (success) {
    // Si se conectó, forzar sincronización inicial
    pushStateToCloud(true);
    closeModal();
    return true;
  }
  return false;
}

// Desconectar Firebase y volver a modo local
function disconnectCloud() {
  if (firebaseDb) {
    try {
      firebaseDb.ref('evaluacion_imf').off();
    } catch (e) {}
    firebaseDb = null;
  }
  if (firebaseApp) {
    try { firebaseApp.delete(); } catch(e) {}
    firebaseApp = null;
  }
  localStorage.removeItem(STORAGE_KEY_FIREBASE_CONFIG);
  updateCloudStatusBadge('disconnected', 'Modo Local');
  closeModal();
  showToast('Desconectado de la nube. Modo local activo.', 'info');
}
