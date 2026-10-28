# Manual Visual de Usuario — Pantalla por Pantalla
## Plataforma de Diagnóstico y Evaluación de la Administración Aduanera y Tributaria
### Misión Técnica FMI CASA — Estado Plurinacional de Bolivia 2026

---

## 1. Pantalla de Acceso y Selección de Evaluador

Esta es la primera interfaz con la que interactúa el usuario al abrir la plataforma (en red local `localhost:8000` o en la nube Firebase `https://fmicustomsassessment-2026.web.app`).

![Captura Real de la Pantalla de Acceso y Selección de Evaluador](./manual_img/real_screen_login.png)

### Elementos clave de esta pantalla:
1. **Emblema y Membrete Oficial:** Identifica la plataforma de la misión de asistencia técnica en Bolivia del Fondo Monetario Internacional (FMI) y el Departamento de Finanzas Públicas (FAD).
2. **Campo «PIN de Acceso a la Misión»:** 
   - Debe ingresar el PIN confidencial asignado: `FMI2026`.
   - Al digitarlo correctamente, el sistema valida la credencial y muestra el indicador en verde `PIN de Misión Válido`.
3. **Selección de Evaluador Activo:** 
   - Se presentan las cuatro tarjetas oficiales del equipo técnico con su avatar y cargo:
     - **Selvin Lemus** — Jefe de Misión
     - **Miguel Tapia** — Asesor Senior en Gestión de Riesgos
     - **Sylvia Saucedo** — Experta en Aduanas y Marco Legal
     - **Ignacio Gonzalez** — Asesor Técnico en TIC y Sistemas
   - Haga clic sobre su tarjeta para seleccionarse como evaluador activo (se resaltará con borde y tilde azul).
4. **Botón «Ingresar a la Plataforma»:** 
   - Habilita la sesión de trabajo, cargando automáticamente sus asignaciones específicas, progreso personal y notas de campo.

---

## 2. Pantalla Principal: Tablero Ejecutivo («Un Vistazo»)

El **Dashboard Ejecutivo** es la réplica interactiva exacta del cuadro de mando oficial del FMI (*Assessment Results Summary*), diseñado con la paleta cromática institucional y tipografía ejecutiva.

![Captura Real del Tablero Ejecutivo Oficial — Un Vistazo](./manual_img/real_screen_dashboard.png)

### Estructura y Navegación del Tablero:

1. **Encabezado Institucional Superior:**
   - Muestra el título *«ESTADO PLURINACIONAL DE BOLIVIA — Resumen de Resultados de la Evaluación»* y el botón **Exportar CSV** para descargar la matriz de datos completa.
2. **Paneles Superiores Izquierdos (Tablas de Síntesis):**
   - **Nivel de Madurez por Componente:** Resume el puntaje promedio y nivel de los dos grandes bloques:
     - *Gobernanza y gestión:* Promedio **2.25** (Nivel Inicial).
     - *Procesos aduaneros clave:* Estado de avance en evaluación.
   - **Distribución de Áreas por Nivel:** Porcentajes consolidados de cuántas áreas se ubican en cada estadio (*Consolidado 4.0*, *En desarrollo 3.0*, *Inicial 2.0*, *Incipiente 1.0*).
3. **Gráfico Radar de 13 Ejes (Superior Derecho):**
   - Representación poligonal de las 13 Áreas Clave (KA1 a KA13) sobre 4 anillos concéntricos que delimitan visualmente la frontera de madurez institucional de la Aduana Nacional.
4. **Matriz Analítica Central (Mapa Térmico FMI):**
   - Permite conmutar dinámicamente entre dos modos de visualización mediante los botones superiores:
     - **`% Adopción Oficial FMI`**: Muestra el porcentaje relativo de respuestas A, B, C y D en celdas térmicas estilizadas.
     - **`N° Frecuencia Absoluta`**: Muestra el recuento exacto de buenas prácticas evaluadas por categoría (A, B, C, D, NA y Pendientes).
   - Las filas están divididas por los dos componentes canónicos:
     - **Componente 1: Gobernanza y gestión** (KA1 a KA6 y KA13).
     - **Componente 2: Procesos aduaneros clave** (KA7 a KA12).
   - Al hacer clic en el nombre de cualquier Área Clave, la plataforma navega directamente al cuestionario de esa área.
5. **Paneles de Diagnóstico Cualitativo (Sector Inferior):**
   - **Fortalezas Clave:** Lista priorizada de las prácticas con máxima calificación (`A`), destacando los avances consolidados.
   - **Acciones Prioritarias:** Resumen de las áreas con calificaciones críticas (`D` y `C`) que requieren intervención urgente y asistencia técnica.
6. **Tarjetas de Acceso Rápido:**
   - 13 accesos directos al pie del tablero para saltar inmediatamente a la evaluación de cada una de las áreas temáticas.

---

## 3. Pantalla de Evaluación: Cuestionario de Buenas Prácticas

Esta es la herramienta central donde los evaluadores analizan, califican y documentan cada una de las prácticas internacionales.

### 3.1 Vista General del Área y Progreso

![Captura Real de la Vista General del Cuestionario de Evaluación](./manual_img/real_screen_evaluation.png)

* **Selector de Pilares / Áreas:** Barra superior para cambiar entre los componentes y áreas de evaluación.
* **Barra de Progreso en Tiempo Real:** Indica el porcentaje de avance completado del área seleccionada (ej. *Pilar 2: Integridad y Gobernanza*).
* **Filtros Rápidos:** Permiten visualizar únicamente preguntas completadas, pendientes o filtradas por calificación (A, B, C, D).
* **Listado de Prácticas:** Tarjetas colapsables identificadas con su código FMI (ej. `KA2-P1`, `KA2-P2`, `KA2-P3`), su título normativo y la calificación actual asignada.

---

### 3.2 Tarjeta de Evaluación Desplegada (Detalle Técnico)

Al pulsar sobre cualquier práctica (o el botón `Evaluar`), se expande la ficha técnica completa con todos sus instrumentos:

![Captura Real de Tarjeta de Buena Práctica Desplegada (KA2-P1)](./manual_img/real_screen_evaluation_card.png)

### Campos e instrumentos de la ficha de evaluación:

1. **Botones de Calificación Oficial (Escala FMI CASA):**
   - **`[ A ]` (4.0 - Azul):** Desempeño sólido y consolidado / Cumplimiento pleno de estándares internacionales.
   - **`[ B ]` (3.0 - Verde):** Buen desempeño / En desarrollo o implementación avanzada.
   - **`[ C ]` (2.0 - Amarillo/Naranja):** Cumplimiento parcial / En etapa inicial de implementación.
   - **`[ D ]` (1.0 - Rojo):** Requisitos básicos no cumplidos / Incipiente o inexistente.
   - **`[ NA ]` (Gris):** No aplica al contexto legal o institucional evaluado.
2. **Criterio de Evaluación y Métrica (KPI):**
   - Detalla el indicador propuesto por el FMI para medir objetivamente la práctica (ej. *Criterio C1: Existencia de código de conducta formalmente aprobado y difundido*).
3. **Evidencia / Justificación Documental (Textarea):**
   - Espacio para citar leyes, decretos supremos, resoluciones de directorio (RD), manuales operativos, registros de auditoría o capturas de sistemas.
4. **Hallazgos Clave (Findings):**
   - Observaciones técnicas y brechas identificadas por el equipo durante las mesas de trabajo y entrevistas con las gerencias aduaneras.
5. **Recomendación de Asistencia Técnica (Actionable Advice):**
   - Propuesta concreta de fortalecimiento institucional para elevar la calificación en el corto/mediano plazo.
6. **Bitácora de Aportes y Comentarios:**
   - Registro colaborativo fechado donde los evaluadores y colaboradores dejan constancia de sus revisiones internas.
7. **Guardado Automático y Sincronización:**
   - La plataforma guarda cada carácter y calificación en tiempo real tanto en caché local como en Firebase Cloud.

---

## 4. Pantalla de Inventario y Control de Evidencias Documentales

Diseñada para el seguimiento, recepción y control de requerimientos documentales solicitados a la contraparte boliviana.

![Captura Real de la Pantalla de Inventario de Evidencias Documentales](./manual_img/real_screen_evidence.png)

### Elementos clave de esta pantalla:
1. **Tarjetas de Síntesis e Indicadores KPI (Sector Superior):**
   - **Requerimientos Documentales:** Número total de prácticas que cuentan con evidencia registrada y número de áreas involucradas.
   - **Entregados por Contraparte:** Recuento en verde y porcentaje de avance documentado con barra de progreso interactiva.
   - **Pendientes de Recepción:** Documentos solicitados que aún faltan ser proporcionados o verificados por la contraparte.
   - **Exportación Rápida:** Botones directos para descargar la matriz completa en **Excel (`.xlsx`)** o **CSV** en un solo clic.
2. **Barra de Búsqueda y Filtros en Tiempo Real:**
   - **Buscador en vivo:** Permite filtrar instantáneamente por código (ej. `KA8-P1`), número de resolución (ej. `01-006-25`), palabra clave o nombre del evaluador.
   - **Filtros de Estado:** Píldoras rápidas para alternar entre `Todos`, `✓ Entregados` o `⏳ Pendientes`.
   - **Selector de Área Clave:** Menú desplegable para aislar las evidencias de un área específica (ej. *Gestión de la Carga y Tránsito*).
3. **Casilla de Verificación de Entrega (`✓`):**
   - Al marcar o desmarcar la casilla de verificación en la primera columna, el sistema:
     - Cambia inmediatamente el estado entre `✓ Entregado` (verde) y `⏳ Pendiente` (ámbar).
     - Registra la fecha de recepción.
     - Sincroniza el cambio en tiempo real con la nube (Firebase) y con la ficha del Cuestionario.
4. **Enlace Directo al Cuestionario (Código FMI):**
   - Al pulsar sobre el código azul (ej. `KA8-P1` o el botón `Ficha`), la plataforma salta automáticamente al Cuestionario, expande la práctica correspondiente y resalta la tarjeta para continuar la evaluación.

---

## 5. Pantalla del Cuaderno de Notas de la Misión

El **Cuaderno de Notas** funciona como la bitácora electrónica y diario de campo de la misión técnica.

![Captura Real del Cuaderno de Notas de Campo y Síntesis IA](./manual_img/real_screen_notebook.png)

### Estructura del Cuaderno:
1. **Pestañas de Selección de Fecha:**
   - Permiten navegar entre las jornadas de la misión (ej. *20 de Octubre*, *21 de Octubre*).
2. **Filtro de Evaluador:**
   - Permite visualizar las minutas registradas por todo el equipo o aislar las notas de un evaluador en particular.
3. **Columna Izquierda: Minutas y Entrevistas:**
   - Tarjetas que registran hora de la reunión, contraparte entrevistada (ej. *Gerencia Nacional de Fiscalización*, *Gerencia de Sistemas*), puntos tratados, compromisos asumidos y etiquetas temáticas.
   - Botón `+ Nueva Nota` para redactar una nueva minuta al concluir cada reunión técnica.
4. **Columna Derecha: Módulo de Síntesis Ejecutiva:**
   - Panel de agregación inteligente que consolida los hallazgos del día en un resumen estructurado con puntos neurálgicos, riesgos operacionales y temas a contrastar en las siguientes sesiones.

---

## 6. Pantalla de Equipo y Matriz de Asignaciones

Diseñada para la gestión y coordinación operativa del equipo de expertos del FMI.

![Captura Real de la Matriz de Equipo y Asignaciones CASA](./manual_img/real_screen_team.png)

### Componentes de la pantalla:
1. **Tarjetas de Evaluadores con Barra de Avance:**
   - Muestra el perfil de cada consultor con su porcentaje individual de cumplimiento sobre las preguntas y áreas bajo su responsabilidad directa.
2. **Matriz de Asignaciones CASA (13 Áreas Clave):**
   - Cuadro sinóptico que vincula cada una de las 13 Áreas Clave con su Evaluador Titular y Colaboradores asignados.
   - Etiquetas de estado operativo: `No iniciado`, `En proceso` o `Completado`.
   - Botón directo `Ver Detalle` para inspeccionar el avance granular de cada bloque.

---

## 7. Pantalla de Informe Técnico Consolidado (Informe CD)

Genera el documento técnico consolidado para la contraparte nacional y las autoridades del FMI.

![Captura Real del Informe Técnico Consolidado](./manual_img/real_screen_report.png)

### Capacidades del Informe:
1. **Encabezado Ejecutivo y Metadatos:** Presentación formal con logotipo FMI, identificación del país evaluado y fecha de emisión.
2. **Filtros Dinámicos:** Permite generar el informe de toda la institución o filtrar por áreas temáticas específicas para entregar reportes parciales a cada gerencia técnica.
3. **Exportación e Impresión Profesional:**
   - Botón `Imprimir / Guardar PDF` preconfigurado con estilos de página A4, márgenes limpios y saltos de página inteligentes.
   - Botón `Exportar Word / Documento` para continuar la edición en procesadores de texto oficiales.
4. **Desglose Narrativo Completo:** Agrupa en un solo documento continuo la justificación legal, hallazgos, evidencias y recomendaciones de todas las preguntas calificadas.

---

## 8. Barra Superior y Funciones Globales

En la esquina superior derecha de la aplicación se encuentran los controles del sistema:

| Control | Nombre | Utilidad Operativa |
| :---: | :--- | :--- |
| **`FMI2026`** | Estado de Sesión | Confirma autenticación activa bajo el PIN de la misión. |
| **Punto Verde / En línea** | Sincronización en Tiempo Real | Confirma conexión activa con la base de datos Firebase Cloud. |
| **Sol / Luna** | Alternador de Tema | Cambia entre el modo claro ejecutivo y el modo oscuro para trabajo nocturno. |
| **Flecha Abajo (Exportar JSON)** | Copia de Seguridad Offline | Descarga un archivo `.json` íntegro con todas las calificaciones, notas y bitácoras al disco duro. |
| **Flecha Arriba (Importar JSON)** | Restaurar Diagnóstico | Carga una base de datos previa o un respaldo compartido por otro consultor. |
| **Avatar / Cambiar Evaluador** | Selector Rápido de Perfil | Permite conmutar entre los perfiles de los evaluadores sin cerrar la sesión. |
| **Cerrar Sesión** | Salir | Bloquea la plataforma y retorna a la pantalla inicial de PIN. |


