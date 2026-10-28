/** DATOS BASE INICIALES - CARGA DIRECTA PARA FUNCIONAR SIN SERVIDOR (FILE://) O CON SERVIDOR */
const DEFAULT_DATA = {
  "mission": {
    "country": "Bolivia",
    "dates": "Octubre 2026",
    "institution": "Aduana Nacional / Servicio de Impuestos Nacionales",
    "lead": "Misión Técnica FMI CASA (Customs Administration Self-Assessment)",
    "missionPin": "FMI2026",
    "notes": "Diagnóstico institucional integral basado en las 13 áreas clave de buenas prácticas aduaneras internacionales.",
    "title": "Evaluación Diagnóstica de la Administración Aduanera y Tributaria"
  },
  "team": [
    {
      "color": "#1e40af",
      "email": "lider@mision.org",
      "id": "usr_1",
      "name": "Selvin Lemus",
      "pin": "2026",
      "role": "Jefe de misión"
    },
    {
      "color": "#0d9488",
      "email": "riesgos@mision.org",
      "id": "usr_2",
      "name": "Miguel Tapia",
      "pin": "2026",
      "role": "Gestión de Riesgos"
    },
    {
      "color": "#7c3aed",
      "email": "legal@mision.org",
      "id": "usr_3",
      "name": "Sylvia Saucedo",
      "pin": "2026",
      "role": "Evaluador Legal"
    },
    {
      "color": "#ea580c",
      "email": "ti@mision.org",
      "id": "usr_4",
      "name": "Ignacio Gonzalez",
      "pin": "2026",
      "role": "Evaluador TI"
    },
    {
      "color": "#db2777",
      "email": "APerez2@imf.org",
      "id": "usr_1792525030420",
      "name": "Azael Perez",
      "pin": "AzaelPerez",
      "role": "Manager"
    }
  ],
  "pillars": [
    {
      "assigned_evaluators": [
        "usr_1",
        "usr_4",
        "usr_1792525030420"
      ],
      "code": "KA1",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "assigned_to": "usr_1",
              "code": "KA1-P1",
              "evidence": "Presentación ppt\nBorrador del PEI\nMatriz de capacidad instalada de la aduana\n",
              "evidence_delivered": false,
              "findings": "Principal: Heidy Torrico, Jefe de la Unidad de Planificación, Estadística y Gestión de Control\n\nSu planificación se encuentra alineada a la planificación Nacional\n\n1. Plan General de Desarrollo Económico y Social \nAún no está aprobado por la Asamblea\n2. PEDES\n3. PEI a 5 años - 2026 - 2030\nAún no está actualizado a la espera de la aprobación del PGDES\nYa se ha iniciado pero estan en un momento de transición.\nYe están tarde, pues el plan se plantea iniciar al 2026 y aún no esta aprobado.\nSe han dado directrices de parte del gobierno aunque aún no se han oficializado.\n3. Planificación operativa\nEl actual se diseñó con base al PE1 anterior.\nEl plan operativo 2027 está basado en el nuevo plan.\nSe pueden realizar hasta 4 modificaciones por año.\n\n\nLey 777, Ley de planificación. Obliga a tener primero aprobado el PGDES antes de aprobar el PEI.\n\nCambios entre plan 2020-2025 vs 2026-2030  es que el primero estaba más enfocado a la recaudación, mientras este segundo más a facilitar el cumplimiento.\n\n\n7 ejes del PGDES, de los cuales la aduana contribuiría con 4.\n\nEje 1., Eje 2, Eje 4, Eje 5.\n\nLa lucha contra el contrabando está en el Eje 5.\n\nAplican un proceso bueno para definir su PEI.\n\nAduana ha definido 4 Acciones Estrategicas Institucionales:\n1. Facilitación del comercio\n2. Control Inteligente.\n3.Transparencia.\n4. Fortalecimiento institucional\n\nTienen un sistema de gestión de calidad.\nel FODA se hace por área, lo cual genera una desvinculación del todo y no genera una visión de procesos.\n\nCuentan con una Misión y Visión nueva",
              "guidance": "1. ¿Tiene la administración un plan estratégico plurianual vigente aprobado formalmente?\n2. ¿Está el plan estratégico alineado con las prioridades del gobierno y con el mandato y las funciones principales de la administración aduanera?\n3. ¿Define el plan objetivos estratégicos, prioridades y resultados esperados?\n4. ¿Se revisa y actualiza periódicamente el plan en función de los avances en la aplicación y los cambios en el entorno operativo?",
              "id": "pilar_1_c1_q1",
              "indicator": "KPI [KA1-P1]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-24T23:59:58.726Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "FODA de arriba hacia abajo y no al contrario.",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer, ejecutar, revisar y actualizar periódicamente un plan estratégico plurianual aprobado formalmente y alineado con las prioridades del gobierno y el mandato y las funciones principales de la administración aduanera."
            },
            {
              "code": "KA1-P2",
              "evidence": "",
              "findings": "No han tomado en cuenta al sector privado, solo se considera como parte interesada. Solo se se han recogido recomendaciones.\nNo se han considerado a otras agencias en la elaboración del PEI en elaboración.\n",
              "guidance": "1. ¿Ofrece el plan estratégico (o documento equivalente) evidencia clara y documentada de la participación o consulta activa de los principales grupos de interés internos o externos durante su elaboración?\n2. ¿Se llevó a cabo y documentó un proceso formal e integral de consulta interna con las partes interesadas para elaborar el plan estratégico (o documento equivalente)?\n3. ¿Se llevó a cabo y documentó un proceso formal e integral de consulta externa a las partes interesadas para elaborar el plan estratégico (o documento equivalente)?",
              "id": "pilar_1_c1_q2",
              "indicator": "KPI [KA1-P2]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T13:12:14.468Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792423357787_0jmf",
                  "text": "La planificación estratégica está alineada a los ejes estratégicos de la nación",
                  "timestamp": "2026-10-19T15:22:37.787Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Evaluador Senior"
                }
              ],
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Implicar a los principales grupos de interés internos y externos en la elaboración del plan estratégico para garantizar que las prioridades, limitaciones y expectativas se reflejen adecuadamente."
            },
            {
              "code": "KA1-P3",
              "evidence": "",
              "findings": "Al parece solo tienen acciones estratéticas y POA, sin planes de acción de iniciativa por ",
              "guidance": "1. ¿Tienen todos los proyectos un conjunto integral y equilibrado de indicadores clave de desempeño y un plan de ejecución acorde con la hoja de ruta estratégica definida en el plan estratégico (o documento equivalente)?\n2. ¿Esta práctica se ha establecido formalmente a través de disposiciones jurídicas, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n3. ¿Con qué consistencia es la administración capaz de traducir el plan estratégico en planes operativos y de reforma anuales priorizados en las operaciones, unidades o localidades pertinentes?\n4. ¿Abordan los acuerdos a los gerentes responsables, metas de desempeño claramente definidas, actividades, responsabilidades, plazos, hitos, riesgos y supuestos?",
              "id": "pilar_1_c1_q3",
              "indicator": "KPI [KA1-P3]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-22T10:15:15.833Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "notes_history": [
                {
                  "id": "note_1792422815093_misg",
                  "text": "El plan operativo 2027, ya está hecho basado en el plan estrategico nuevo",
                  "timestamp": "2026-10-19T15:13:35.093Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Evaluador Senior"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Traducir el plan estratégico en planes operativos y de reforma anuales priorizados con gerentes responsables, y metas de desempeño, actividades, responsabilidades, cronogramas, hitos, riesgos y supuestos claramente definidos."
            }
          ],
          "title": "Planificación estratégica"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA1-P4",
              "evidence": "",
              "findings": "El seguimiento se hace a través de Planificación y el sistema de gestión de calidad. Ellos informan al presidente.\nTienen objetivos que reportan al Ministerio e indicadores del POA. Todos tienen metas.\nSe da seguimiento mensual y trimestral de las tareas incluidas en el POA.\nManejan una codificación para vincular los objetivos  estratégicos y las acciones anuales.\nSIP - Sistema integrado de planificación pero no calcula los indicadores.\n688 tareas que se revisan una a una para ver si cumplen.",
              "guidance": "1. ¿Tienen cada Indicador Clave de Desempeño (KPI) vinculado al plan estratégico (o documento equivalente) un punto de partida verificado (escenario base) y un destino cuantificado (objetivo)?\n2. ¿Se define, mide y supervisa periódicamente un conjunto exhaustivo de indicadores clave de desempeño en consonancia con el plan estratégico (o documento equivalente)?\n3. ¿Existe una correspondencia clara que demuestre que las metas operativas se complementan directamente con hitos tácticos que, en última instancia, alimentan objetivos estratégicos más amplios dentro del plan estratégico (o documento equivalente)?\n4. ¿Se realizan exámenes estructurados y periódicos en virtud de los cuales quedar por debajo del nivel de referencia establecido en el plan estratégico (o documento equivalente) desencadena medidas correctivas inmediatas, un giro de la estrategia o una reasignación de recursos?",
              "id": "pilar_1_c2_q1",
              "indicator": "KPI [KA1-P4]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "lastModifiedAt": "2026-10-25T13:12:52.615Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792424827514_mcpw",
                  "text": "El área de planeación es quien le da seguimiento a los proyectos",
                  "timestamp": "2026-10-19T15:47:07.514Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1792424855294_tfwy",
                  "text": "No hay un comité que realmente vaya haciendo el seguimiento",
                  "timestamp": "2026-10-19T15:47:35.294Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer y operar un marco de seguimiento del desempeño institucional."
            },
            {
              "code": "KA1-P5",
              "evidence": "Se solicitó una copia de un informe de análisis de la recaudación.",
              "findings": "Se monitorea la recaudación.\nLa unidad de estadística \nel Área de Estadística analiza las causas pero solo bajo demanda",
              "guidance": "1. ¿La recaudación de ingresos se analiza periódicamente en detalle para evaluar la correspondencia con los objetivos establecidos en el plan estratégico (o documento equivalente)?\n2. ¿Se analizan periódicamente los factores impulsores subyacentes de los aumentos o disminuciones de los ingresos y se usan para ajustar los pronósticos y perfeccionar el plan estratégico (o documento equivalente)?\n3. ¿Esta práctica se establece formalmente a través de disposiciones jurídicas, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n4. ¿Con qué frecuencia es capaz la administración de analizar las tendencias de desempeño institucional y sus factores impulsores subyacentes en las operaciones, unidades o ubicaciones pertinentes?\n5. ¿Se abordan los acuerdos los ingresos, los volúmenes de comercio, el cumplimiento, la facilitación, la prestación de servicios y los resultados del control, según corresponda, para apoyar la planificación estratégica, la asignación de recursos, la gestión del desempeño y la toma de decisiones fundamentadas?",
              "id": "pilar_1_c2_q2",
              "indicator": "KPI [KA1-P5]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "lastModifiedAt": "2026-10-24T23:35:22.594Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Analizar las tendencias de desempeño institucional y sus factores determinantes."
            },
            {
              "code": "KA1-P6",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de aplicar un enfoque de gestión basada en resultados a la planificación estratégica y la ejecución de las reformas, utilizando información sobre el desempeño y los resultados de las evaluaciones para ajustar prioridades, asignar recursos, abordar limitaciones de implementación y fortalecer la toma de decisiones de gestión y la rendición de cuentas en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_1_c2_q3",
              "indicator": "KPI [KA1-P6]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-22T10:15:46.732Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Aplicar un enfoque de gestión basado en resultados en la planificación estratégica y la ejecución de las reformas."
            }
          ],
          "title": "Gestión del desempeño y rendición de cuentas"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA1-P7",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia la administración puede establecer mecanismos eficaces de gobernanza y toma de decisiones de la alta gerencia para revisar periódicamente las prioridades estratégicas, el desempeño institucional, la implementación de reformas, los recursos necesarios y las cuestiones interfuncionales entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan los acuerdos las responsabilidades claramente asignadas, las decisiones documentadas y los mecanismos de seguimiento?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_1_c3_q1",
              "indicator": "KPI [KA1-P7]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-22T10:16:11.687Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer mecanismos eficaces de gobernanza y toma de decisiones para la alta gerencia con el fin de revisar periódicamente las prioridades estratégicas, el desempeño institucional, la implementación de reformas, los recursos necesarios y las cuestiones interfuncionales."
            },
            {
              "code": "KA1-P8",
              "evidence": "",
              "findings": "Hace falta de recursos humanos.\nSistema de Gestión de Calidad Certificados desde 2023.\nActualmente se está revisando la estructura organizativa, es una reorganización. Ya se han puesto en funcionamiento algunas unidades nuevas.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de establecer, documentar, publicar y actualizar periódicamente una estructura administrativa aduanera alineada con las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan los acuerdos los objetivos estratégicos de la administración aduanera con funciones claramente definidas, responsabilidades, líneas de presentación de informes y rendición de cuentas, y una separación adecuada de las funciones estratégicas, tácticas y operativas?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_1_c3_q2",
              "indicator": "KPI [KA1-P8]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-22T10:16:19.754Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer, documentar, publicar y actualizar periódicamente una estructura organizacional alineada con los objetivos estratégicos de la administración aduanera, que incluya una definición clara de funciones, responsabilidades, líneas de presentación de informes y rendición de cuentas, y una separación adecuada de las funciones estratégicas, tácticas y operativas."
            },
            {
              "code": "KA1-P9",
              "evidence": "",
              "findings": "La Unidad de Planificación, Estadísticas y Gestión de control. Desearían que fuera una gerencia.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de establecer una función de gestión estratégica y reformadora específica, o designar funcionarios a cargo de coordinar la planificación estratégica, el seguimiento de la implementación de las reformas, los tableros de control del desempeño, la presentación de informes, el asesoramiento interno y los procedimientos y sistemas de gestión relacionados en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_1_c3_q3",
              "indicator": "KPI [KA1-P9]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-24T14:30:27.058Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Establecer una función específica de gestión estratégica y de reformas o funcionarios designados a cargo de coordinar la planificación estratégica, el seguimiento de la ejecución de las reformas, los tableros de control del desempeño, la presentación de informes, el asesoramiento interno y los procedimientos y sistemas de gestión relacionados."
            },
            {
              "code": "KA1-P10",
              "evidence": "",
              "findings": "son 10 personas en total, pero no a nivel de gerencia y reportan a la Gerencia General como todas las demás gerencias. Dashboards para que se realicen de forma automática. \nEstadísticas extrae datos pero no genera informes regulaes.\nSistema online es una propuesta del POA, pero aún no se tiene.\nBoletín estadístico es un trabajo recurrente que se produce.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de garantizar que los responsables y funcionarios encargados de la reforma estén capacitados en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abbarcan los acuerdos las competencias necesarias en la gestión de la reforma y el cambio, los recursos, las herramientas, los sistemas y la capacitación para planificar, coordinar, implementar, supervisar e informar las iniciativas de reforma con eficacia?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_1_c3_q4",
              "indicator": "KPI [KA1-P10]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T14:29:07.649Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792938547649_l44l",
                  "text": "- Hay una plataforma Sistema Integral de Planificación (SIP), las unidades alimentan la información y refleja el avance trimestral (VERIFICAR CON PLANIFICACIÓN)",
                  "timestamp": "2026-10-25T14:29:07.649Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Asegurar que los responsables y los funcionarios encargados de la reforma estén dotados de las competencias, recursos, herramientas, sistemas y capacitación necesarios para planificar, coordinar, implementar, supervisar e informar las iniciativas de reforma con eficacia."
            }
          ],
          "title": "gobernanza y mecanismos organizativos"
        },
        {
          "code": "C4",
          "id": "c4",
          "questions": [
            {
              "code": "KA1-P11",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de definir y aplicar una estrategia de gestión del cambio alineada con el plan estratégico y la agenda de reformas en todas las operaciones, unidades o localidades pertinentes?\n3. ¿Se abordan los acuerdos el impacto de las partes interesadas, la preparación para el cambio, las responsabilidades, las medidas de apoyo, los riesgos de implementación, la gestión de la resistencia y el seguimiento de la adopción del cambio?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_1_c4_q1",
              "indicator": "KPI [KA1-P11]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-24T14:31:10.936Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Definir y aplicar una estrategia de gestión del cambio acorde con el plan estratégico y la agenda de reformas, que abarque el impacto de las partes interesadas, la preparación para el cambio, las responsabilidades, las medidas de apoyo, los riesgos de implementación, la gestión de la resistencia y el seguimiento de la adopción del cambio."
            },
            {
              "code": "KA1-P12",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se ha publicado el plan estratégico (o documento equivalente) y se ha comunicado a las partes interesadas internas?\n2. ¿Se comunican a las partes interesadas internas los resultados de las evaluaciones periódicas del plan estratégico (o documento equivalente)?\n3. ¿Se ha publicado el plan estratégico (o documento equivalente) y se ha comunicado a partes interesadas externas?",
              "id": "pilar_1_c4_q2",
              "indicator": "KPI [KA1-P12]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-22T10:16:51.686Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Comunicar y asegurar que todo el personal de la administración aduanera, así como las partes interesadas externas pertinentes, tengan una comprensión clara del plan estratégico."
            },
            {
              "code": "KA1-P13",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se ha publicado el plan estratégico (o documento equivalente) y se ha comunicado a las partes interesadas internas?\n2. ¿Se comunican a las partes interesadas internas los resultados de las evaluaciones periódicas del plan estratégico (o documento equivalente)?\n3. ¿Se ha publicado el plan estratégico (o documento equivalente) y se ha comunicado a partes interesadas externas?",
              "id": "pilar_1_c4_q3",
              "indicator": "KPI [KA1-P13]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T14:43:38.878Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Informar periódicamente al personal, los órganos de supervisión y las partes interesadas pertinentes sobre la ejecución de los planes estratégicos y de reforma."
            }
          ],
          "title": "Reforma y gestión del cambio"
        },
        {
          "code": "C5",
          "id": "c5",
          "questions": [
            {
              "code": "KA1-P14",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Tienen cada Indicador Clave de Desempeño (KPI) vinculado al plan estratégico (o documento equivalente) un punto de partida verificado (escenario base) y un destino cuantificado (objetivo)?\n2. ¿Se define, mide y supervisa periódicamente un conjunto exhaustivo de indicadores clave de desempeño en consonancia con el plan estratégico (o documento equivalente)?\n3. ¿Existe una correspondencia clara que demuestre que las metas operativas se complementan directamente con hitos tácticos que, en última instancia, alimentan objetivos estratégicos más amplios dentro del plan estratégico (o documento equivalente)?\n4. ¿Se realizan exámenes estructurados y periódicos en virtud de los cuales quedar por debajo del nivel de referencia establecido en el plan estratégico (o documento equivalente) desencadena medidas correctivas inmediatas, un giro de la estrategia o una reasignación de recursos?",
              "id": "pilar_1_c5_q1",
              "indicator": "KPI [KA1-P14]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T13:26:35.364Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Adoptar un enfoque de gestión basado en procesos acorde con el plan estratégico, garantizando que los principales procesos aduaneros se documenten, se asignen a los propietarios responsables y se supervisen."
            },
            {
              "code": "KA1-P15",
              "evidence": "",
              "findings": "Se relaciona el POA con el presupuesto.\n",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia puede la administración alinear la formulación del presupuesto y la asignación de recursos entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan los acuerdos los objetivos estratégicos, los resultados esperados, las iniciativas prioritarias y las metas de desempeño institucional?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_1_c5_q2",
              "indicator": "KPI [KA1-P15]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T14:51:32.902Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Alinear la formulación del presupuesto y la asignación de recursos con los objetivos estratégicos, los resultados esperados, las iniciativas prioritarias y las metas de desempeño institucional."
            }
          ],
          "title": "Gestión de procesos y recursos"
        },
        {
          "code": "C6",
          "id": "c6",
          "questions": [
            {
              "code": "KA1-P16",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia puede la administración establecer mecanismos de consulta formales y periódicas entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se dirigen los acuerdos a grupos representativos de la comunidad comercial y otras instituciones gubernamentales para analizar cambios regulatorios, problemas operativos, riesgos de cumplimiento e iniciativas de facilitación del comercio?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_1_c6_q1",
              "indicator": "KPI [KA1-P16]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T13:28:12.583Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Establecer mecanismos formales y regulares de consulta con grupos representativos de la comunidad comercial y otras instituciones gubernamentales para analizar cambios regulatorios, problemas operativos, riesgos de cumplimiento e iniciativas de facilitación del comercio."
            },
            {
              "code": "KA1-P17",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia es capaz la administración de implementar programas estructurados de asistencia comercial, educación y divulgación en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan los acuerdos los servicios de consulta accesibles, para mejorar la comprensión de los requisitos aduaneros, reducir los errores, apoyar la autocorrección y promover el cumplimiento voluntario?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_1_c6_q2",
              "indicator": "KPI [KA1-P17]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-25T13:29:24.906Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Poner en práctica programas estructurados de asistencia al operador, educación y divulgación."
            },
            {
              "code": "KA1-P18",
              "evidence": "",
              "findings": "Solo lo publican en la página we y en la Intranet.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de establecer un marco institucional para la divulgación voluntaria y el cumplimiento cooperativo que incentive a los operadores a identificar y divulgar errores, corregir el incumplimiento y interactuar de manera proactiva con la aduana en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan los procedimientos transparentes y el trato proporcionado?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_1_c6_q3",
              "indicator": "KPI [KA1-P18]: Tiempo promedio de tramitación de registros/licencias y % de operadores OEA certificados.",
              "lastModifiedAt": "2026-10-22T10:18:04.688Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Establecer un marco institucional para la divulgación voluntaria y el cumplimiento cooperativo que incentive a los operadores a detectar y divulgar errores, corregir el incumplimiento y interactuar de manera proactiva con la aduana."
            }
          ],
          "title": "Asociación entre las partes interesadas en las aduanas y facilitación del cumplimiento"
        }
      ],
      "id": "pilar_1",
      "number": "1",
      "raw_title": "Gobernanza y gestión estratégica",
      "title": "1. Gobernanza y gestión estratégica"
    },
    {
      "assigned_evaluators": [
        "usr_1",
        "usr_3",
        "usr_1792525030420"
      ],
      "code": "KA2",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "code": "KA2-P1",
              "evidence": "Estrategia publicada en la página",
              "findings": "Las funciones y líneas de acción de las Unidades de Transparencia y lucha contra la corrupción y  Técnica de Inspeccion de Servicios Aduaneros están orientadas a verificar la integridad en alineación con la Declaración de Arusha, sin embargo no hay una estrategia documentada que derive del PEI",
              "guidance": "1. ¿Existe una estrategia de integridad documentada que apruebe la gerencia?\n2. ¿Incluye la estrategia un plan de acción con responsabilidades y plazos claros?\n3. ¿Se supervisa e informa periódicamente la implementación?",
              "id": "pilar_2_c1_q1",
              "indicator": "KPI [KA2-P1]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-27T22:56:19.406Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "revisar la necesidad de incorporar planes de acción ",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer y aplicar una estrategia y un plan de acción en materia de integridad aduanera acordes con la Declaración de Arusha revisada de la OMA y basados en la Guía de Desarrollo de la Integridad de la OMA o en una autoevaluación equivalente, que incluya claramente las prioridades, las responsabilidades, los recursos, las medidas de tratamiento del riesgo y los mecanismos de supervisión."
            },
            {
              "code": "KA2-P2",
              "evidence": "",
              "findings": "El marco jurídico involucra diversas leyes.\nEl DS. 5706 Declara  prioridad nacional la promoción de la integridad pública y la lucha contra la corrupción.\nEntre las consecuencias están en materia penal, civil y administrativa\nCuentan con un código de conducta que prevé una descripción de conductas consideradas indebidas",
              "guidance": "1. ¿Están claramente establecidas en la legislación, las políticas y los procedimientos las obligaciones en materia de integridad, ética y lucha contra la corrupción?\n2. ¿Existe un código de conducta que cubra los conflictos de intereses, los regalos, las declaraciones patrimoniales y las interacciones con usuarios?\n3. ¿Las infracciones se investigan y sancionan de forma sistemática?",
              "id": "pilar_2_c1_q2",
              "indicator": "KPI [KA2-P2]: Tasa de resolución oportuna de investigaciones y denuncias de integridad (< 60 días).",
              "lastModifiedAt": "2026-10-27T23:04:17.706Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Mantener un marco jurídico, procedimental y ético claro que limite la discrecionalidad, salvaguarde los derechos de los usuarios, defina las consecuencias en caso de incumplimiento e incluya un código de conducta vinculante práctica que cubra los conflictos de intereses, los regalos, las obligaciones de divulgación y las interacciones con los usuarios."
            },
            {
              "code": "KA2-P3",
              "evidence": "",
              "findings": "Realizan talleres, socializaciones, capacitaciones internas y con grupos sociales que tengan relación con la ANB. Explican la normativa. ",
              "guidance": "1. ¿Promueven activamente los altos dirigentes la integridad y el comportamiento ético?\n2. ¿Recibe el personal capacitación periódica sobre integridad y ética?\n3. ¿Participa el personal en actividades de comunicación, sensibilización y mecanismos de consulta?",
              "id": "pilar_2_c1_q3",
              "indicator": "KPI [KA2-P3]: Tasa de resolución oportuna de investigaciones y denuncias de integridad (< 60 días).",
              "lastModifiedAt": "2026-10-27T23:05:53.556Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Promover una cultura de integridad y profesionalismo mediante un liderazgo visible, la comunicación, la capacitación basada en funciones, la participación del personal y la tolerancia cero a las conductas indebidas."
            },
            {
              "code": "KA2-P4",
              "evidence": "",
              "findings": "Los funcionarios tienen obligación de presentar declaración jurada de bienes y rentas\nAhora el el Viceministerio de Transparencia puede hacer un cruce de cuentas con esta declaración\nConsidero que la gestión de los RH es deficiente en esta práctica",
              "guidance": "1. ¿Los procesos de contratación, ascenso y despliegue son meritocráticos y transparentes?\n2. ¿Se aplican controles adicionales a las posiciones sensibles o de alto riesgo?\n3. ¿Las declaraciones de activos y participaciones se presentan periódicamente de manera electrónica, se verifican y se hacen un seguimiento?",
              "id": "pilar_2_c1_q4",
              "indicator": "KPI [KA2-P4]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T23:10:48.963Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Aplicar controles de recursos humanos sensibles a la integridad, incluidos el cribado y la supervisión de puestos sensibles, rotación basada en el riesgo, segregación de funciones, controles de acceso y declaraciones verificadas de activos e intereses."
            }
          ],
          "title": "Integridad, gobernanza, estrategia y cultura"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA2-P5",
              "evidence": "",
              "findings": "Con conocimiento de la práctica saben que las áreas más sensibles son las operativas\nTienen cuidado especial con RH trabajando coordinadamente en operativos para verificar el perfil\nLa U de Inspeccion de Servicios Aduaneros  tiene insumos que es un sistema de alerta temprana con indicadores cuantitativos, informacion del SUMA de despachos y variables cualitativas y con ello planifican. \nNo hay evidencia de un mapa de riesgos ni de que se apliquen, supervisen y examinen las medidas de mitigación",
              "guidance": "1. ¿Existe una metodología documentada para identificar y evaluar los riesgos para la integridad?\n2. ¿Se mantiene y actualiza un registro de riesgos en materia de integridad o un mapa de riesgos?\n3. ¿Se aplican, supervisan y examinan las medidas de mitigación?",
              "id": "pilar_2_c2_q1",
              "indicator": "KPI [KA2-P5]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T23:22:24.919Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Identificar, evaluar, clasificar y tratar los riesgos de integridad y corrupción."
            },
            {
              "code": "KA2-P6",
              "evidence": "",
              "findings": "El SUMA ha automatizado la mayor parte de los procesos\nSi hay actividades de control de auditoría interna con regularidad POA",
              "guidance": "1. ¿Se automatizan los procedimientos básicos para reducir la toma de decisiones discrecionales y el contacto personal?\n2. ¿Existe una trazabilidad digital adecuada de las transacciones y las decisiones?\n3. ¿Se llevan a cabo y se llevan a cabo actividades de control de auditoría interna con regularidad?",
              "id": "pilar_2_c2_q2",
              "indicator": "KPI [KA2-P6]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T23:31:45.038Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Utilizar automatización, trazabilidad digital, controles internos y mecanismos de auditoría para prevenir, detectar y responder a ellos riesgos en materia de integridad."
            },
            {
              "code": "KA2-P7",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Existen canales confidenciales para denunciar conductas indebidas?\n2. ¿Existen mecanismos institucionales y de gobernanza que permitan garantizar mecanismos eficaces de declaración de información confidencial, investigación de asuntos internos y gestión de casos?\n3. ¿Las denuncias y denuncias se investigan mediante procedimientos documentados?\n4. ¿Están protegidos los denunciantes y denunciantes de represalias?",
              "id": "pilar_2_c2_q3",
              "indicator": "KPI [KA2-P7]: Tasa de resolución oportuna de investigaciones y denuncias de integridad (< 60 días).",
              "lastModifiedAt": "2026-10-27T23:37:52.889Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Establecer mecanismos confidenciales de información y asuntos internos, investigación y gestión de casos, y garantizar mecanismos para atender las denuncias de los usuarios que abarquen la admisión, la determinación de prioridades, la protección contra represalias, el debido proceso, la gestión de pruebas, las sanciones, las derivaciones, el seguimiento y las lecciones aprendidas."
            },
            {
              "code": "KA2-P8",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Existen acuerdos formales con las autoridades de aplicación y otras autoridades competentes?\n2. ¿Existen canales seguros para intercambiar información con otros organismos encargados de hacer cumplir la ley?\n3. ¿Se hace seguimiento y seguimiento de los casos derivados?",
              "id": "pilar_2_c2_q4",
              "indicator": "KPI [KA2-P8]: Eficacia de operativos basados en inteligencia (% de intervenciones con hallazgo positivo).",
              "recommendations": "",
              "status": "pending",
              "text": "Coordinar investigaciones, derivaciones e intercambio de información con autoridades extranjeras competentes."
            }
          ],
          "title": "Prevención, controles e investigación del riesgo"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA2-P9",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Está a disposición pública y oportuna de las partes interesadas la información aduanera de importancia clave, y se actualiza periódicamente?\n2. ¿Se consulta periódicamente a operadores, corredores de bolsa y otras partes interesadas?\n3. ¿Se usan los resultados de encuestas, las quejas, los hallazgos de auditoría y los indicadores de integridad para mejorar el desempeño?",
              "id": "pilar_2_c3_q1",
              "indicator": "KPI [KA2-P9]: Tasa de resolución oportuna de investigaciones y denuncias de integridad (< 60 días).",
              "lastModifiedAt": "2026-10-27T23:40:02.870Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Promover la transparencia y la rendición de cuentas de las partes interesadas mediante la publicación de información aduanera clara y actualizada, los puestos de asistencia técnica y canales de consulta asequibles, y la interacción regular con los usuarios y las partes interesadas para identificar inquietudes en materia de integridad y mejorar los procedimientos."
            },
            {
              "code": "KA2-P10",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia la administración puede medir, informar y mejorar el desempeño en materia de integridad utilizando encuestas de percepción, quejas, indicadores, resultados de auditorías e investigaciones y demás evidencia pertinente para identificar riesgos en materia de integridad, implementar medidas correctivas, monitorear su eficacia e informar los resultados en todas las operaciones, unidades o localidades pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_2_c3_q2",
              "indicator": "KPI [KA2-P10]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "recommendations": "",
              "status": "pending",
              "text": "Medir, informar y mejorar el desempeño en materia de integridad utilizando encuestas de percepción, quejas, indicadores, resultados de auditorías e investigaciones, y demás evidencia pertinente a fin de identificar riesgos para la integridad, implementar medidas correctivas, monitorear su eficacia e informar sobre los resultados."
            }
          ],
          "title": "Transparencia, compromiso, medición y rendición de cuentas"
        }
      ],
      "id": "pilar_2",
      "number": "2",
      "raw_title": "Integridad, transparencia y rendición de cuentas",
      "title": "2. Integridad, transparencia y rendición de cuentas"
    },
    {
      "assigned_evaluators": [
        "usr_2",
        "usr_3",
        "usr_1792525030420"
      ],
      "code": "KA3",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA3-P1",
              "evidence": "Se solicita el plan operativo anual, donde se solicita los recursos humanos para cada aduana\nSe solicita el plan de capacitación\nSe solicita el perfil de puesto de los aforadores\n\nLey N.º 1178 – Administración y Control Gubernamentales: https://www.planificacion.gob.bo/uploads/marco-legal/ley1178.pdf\n\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nManual de Organización y Funciones de la Aduana Nacional, aprobado mediante RA-PE-02-085-24: https://portal.aduana.gob.bo/aduana7/MOF%20-%20RA-PE-02-085-24.pdf\n\nDepartamento de Recursos Humanos – Atribuciones institucionales: https://portal.aduana.gob.bo/aduana7/content/departamento-de-recursos-humanos-2\n\n",
              "evidence_delivered": false,
              "findings": "La Aduana Nacional de Bolivia cuenta con una función especializada de Recursos Humanos, formalmente establecida y con responsabilidades documentadas en materia estratégica, operativa, de asesoramiento y supervisión. Asimismo, dispone de personal asignado y participa en la programación financiera anual de los recursos humanos, lo que constituye una base organizativa para el cumplimiento de sus funciones. Sin embargo, no se dispone de información suficiente para valorar la adecuación de su dotación de personal, presupuesto y herramientas. Adicionalmente, la participación identificada del área se concentra principalmente en la planificación financiera, sin evidencia de una intervención activa en las decisiones estratégicas sobre la composición, distribución y desarrollo de la fuerza laboral. En este contexto, se identifica la oportunidad de fortalecer su participación en la planificación estratégica del talento humano, más allá de sus funciones administrativas y presupuestarias.",
              "guidance": "1. ¿Ha creado formalmente la administración aduanera una función de gestión de recursos humanos con un mandato claramente definido?\n2. ¿Se documentan formalmente las responsabilidades estratégicas, operativas, de asesoramiento y supervisión de la función de GRH?\n3. ¿Dispone la función de GRH de personal, presupuesto y herramientas suficientes para cumplir con sus responsabilidades?\n4. ¿Participa la función de GRH activamente en la toma de decisiones relacionadas con la fuerza de trabajo en toda la administración aduanera?",
              "id": "pilar_3_c1_q1",
              "indicator": "Número ",
              "lastModifiedAt": "2026-10-27T02:27:22.259Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con un área especializada de Recursos Humanos, formalmente establecida dentro de su estructura organizacional, lo que proporciona una base institucional para la administración del personal y la gestión del talento humano.\n\nReferencia normativa: Ley N.º 1178, de Administración y Control Gubernamentales, artículo 9, relativo al Sistema de Administración de Personal; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal; Manual de Organización y Funciones de la Aduana Nacional.",
              "recommendations": "Diseñar e implementar un plan de fortalecimiento de la función de Recursos Humanos para evolucionar de un rol netamente transaccional/administrativo a un socio estratégico institucional, dotando al área de herramientas analíticas de cargas de trabajo y facultades formales para planificar y optimizar la distribución de la fuerza laboral aduanera.",
              "score": 3,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con un área especializada de Recursos Humanos, formalmente establecida dentro de su estructura organizacional, lo que proporciona una base institucional para la administración del personal y la gestión del talento humano.\n\nReferencia normativa: Ley N.º 1178, de Administración y Control Gubernamentales, artículo 9, relativo al Sistema de Administración de Personal; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal; Manual de Organización y Funciones de la Aduana Nacional.",
                "Hallazgo: Las responsabilidades de la función de Recursos Humanos se encuentran formalmente documentadas, incluyendo atribuciones de carácter estratégico, operativo, de asesoramiento y supervisión. Esta definición proporciona una base organizativa para delimitar sus funciones y responsabilidades dentro de la institución.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones relativas a la organización del Sistema de Administración de Personal; Manual de Organización y Funciones de la Aduana Nacional, que establece las atribuciones de las distintas unidades organizacionales.",
                "Hallazgo: El área de Recursos Humanos dispone de personal asignado y participa en la programación anual de los recursos financieros destinados a la gestión del personal de las distintas dependencias aduaneras. Sin embargo, no se cuenta con información suficiente para determinar si la dotación de personal, el presupuesto y las herramientas disponibles resultan adecuados para atender integralmente sus responsabilidades estratégicas y operativas.\n\nReferencia normativa: Ley N.º 1178, artículos 6 y 9, relativos a la programación de operaciones y administración de personal; Decreto Supremo N.º 26115, disposiciones sobre la planificación y administración de recursos humanos.",
                "Hallazgo: La función de Recursos Humanos participa en la planificación financiera anual de los recursos destinados al personal, contribuyendo a la programación presupuestaria institucional. Sin embargo, su participación identificada se concentra en aspectos financieros y administrativos, sin evidencia de una intervención activa en decisiones estratégicas relacionadas con la composición, distribución, capacidades y desarrollo de la fuerza laboral en las distintas dependencias aduaneras.\n\nReferencia normativa: Ley N.º 1178, artículos 6 y 9; Decreto Supremo N.º 26115, disposiciones relativas a la planificación y administración de personal; Manual de Organización y Funciones de la Aduana Nacional."
              ],
              "text": "Establecer e implantar una función de gestión de recursos humanos con mandato claro y suficiente dotación de recursos, que incluya funciones estratégicas, operativas, de asesoramiento y supervisión."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA3-P2",
              "evidence": "Ley N.º 2027 – Estatuto del Funcionario Público: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/Ley_2027_Estatuto_Funcionario_P%C3%BAblico.pdf\n\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nReglamento Específico del Sistema de Administración de Personal y Reglamento Interno de Personal de la Aduana Nacional (antecedente de 2013): https://portal.aduana.gob.bo/aduana7/content/2602013\n\nDepartamento de Recursos Humanos – Atribuciones institucionales: https://portal.aduana.gob.bo/aduana7/content/departamento-de-recursos-humanos-2\n\nMapa y flujo de procesos institucionales de la Aduana Nacional: https://www.aduana.gob.bo/PLANE_flujoprocesos\n",
              "evidence_delivered": true,
              "evidence_delivery_date": "25 oct 2026",
              "findings": "La Aduana Nacional de Bolivia dispone de un marco formal de políticas y procedimientos de gestión de recursos humanos, sustentado principalmente en la legislación nacional aplicable a los servidores públicos. Asimismo, la publicación de la normativa en el portal institucional facilita su consulta y proporciona una base común para su aplicación en las distintas dependencias. Sin embargo, se identifica un desarrollo limitado de disposiciones específicas que atiendan las particularidades técnicas y operativas de la función aduanera. Adicionalmente, no se cuenta con evidencia suficiente sobre mecanismos periódicos de difusión interna ni sobre la aplicación homogénea de las políticas en todas las unidades. Finalmente, permanece pendiente verificar la existencia y efectividad de mecanismos de comunicación bidireccional, participación del personal y atención de inquietudes relacionadas con la gestión de recursos humanos.\n\nLa descripción institucional del Departamento de Recursos Humanos incluye expresamente la elaboración y difusión de instrumentos normativos, así como la supervisión de su aplicación. Esto permite identificar responsabilidades formalmente asignadas, pero no verificar por sí solo la periodicidad de la comunicación ni la uniformidad de su cumplimiento.",
              "guidance": "1. ¿Se documentan formalmente y aprueban las políticas, normas y procedimientos de GRH?\n2. ¿Se comunican periódicamente las políticas y los procedimientos de HRM a todos los empleados?\n3. ¿Se aplican las políticas de HRM de manera uniforme a todos los departamentos y grupos de empleados?\n4. ¿Existen mecanismos de apoyo a la transparencia, la integridad, el compromiso del personal y la comunicación bidireccional sobre cuestiones de RR. HH.?",
              "id": "pilar_3_c1_q2",
              "indicator": "",
              "lastModifiedAt": "2026-10-27T02:27:49.377Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con un marco normativo formalmente aprobado que regula los principales procesos de gestión de recursos humanos, sustentado fundamentalmente en las disposiciones nacionales aplicables a los servidores públicos. Sin embargo, se identifica un desarrollo limitado de políticas y procedimientos específicos que respondan a las particularidades operativas, técnicas y organizacionales de la administración aduanera.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal; Reglamento Específico del Sistema de Administración de Personal (RE-SAP) de la Aduana Nacional.",
              "recommendations": "Formular un Estatuto / Reglamento Específico de Personal Aduanero adaptado a las particularidades técnicas y operativas del servicio, estableciendo protocolos de comunicación bidireccional y auditorías periódicas para asegurar su aplicación homogénea en administraciones de frontera e interior.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con un marco normativo formalmente aprobado que regula los principales procesos de gestión de recursos humanos, sustentado fundamentalmente en las disposiciones nacionales aplicables a los servidores públicos. Sin embargo, se identifica un desarrollo limitado de políticas y procedimientos específicos que respondan a las particularidades operativas, técnicas y organizacionales de la administración aduanera.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal; Reglamento Específico del Sistema de Administración de Personal (RE-SAP) de la Aduana Nacional.",
                "Hallazgo: La institución pone a disposición de los funcionarios sus políticas y procedimientos de recursos humanos mediante su publicación en el sitio web institucional, lo que favorece la transparencia y el acceso a la información normativa. No obstante, la publicación de estos documentos no permite acreditar que existan mecanismos periódicos de comunicación interna que aseguren su difusión, conocimiento y comprensión por parte de todo el personal.\n\nReferencia normativa: Ley N.º 2027, disposiciones sobre derechos y obligaciones de los servidores públicos; Decreto Supremo N.º 26115, marco regulatorio de la administración de personal; normativa institucional publicada en el portal oficial de la Aduana Nacional.",
                "Hallazgo: La normativa nacional establece un marco común para la administración de personal, aplicable a las distintas dependencias institucionales según el régimen jurídico correspondiente. Sin embargo, la existencia de disposiciones generales no constituye evidencia suficiente para confirmar su aplicación homogénea en todas las unidades, localidades y grupos de funcionarios de la Aduana Nacional.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal; Reglamento Específico del Sistema de Administración de Personal de la Aduana Nacional.",
                "Hallazgo: La institución se encuentra sujeta a un marco normativo nacional que establece obligaciones de transparencia e integridad en la gestión pública. No obstante, durante el diagnóstico no se obtuvo información suficiente para identificar y evaluar mecanismos específicos de participación del personal, comunicación bidireccional o atención de inquietudes relacionadas con la gestión de recursos humanos. Por tanto, este aspecto permanece pendiente de verificación.\n\nReferencia normativa: Ley N.º 2027, disposiciones sobre derechos, deberes y régimen de los servidores públicos; Ley N.º 1178, de Administración y Control Gubernamentales; normativa institucional sobre transparencia y gestión de recursos humanos."
              ],
              "text": "Definir, documentar, comunicar, aplicar de manera coherente y revisar periódicamente las políticas, sistemas, normas y procedimientos de GRH en toda la organización a fin de respaldar la transparencia, la previsibilidad, la equidad, la integridad, el profesionalismo, el compromiso del personal, el cumplimiento de las normas jurídicas y éticas aplicables y una comunicación bidireccional eficaz."
            }
          ],
          "title": "Gobernanza, mandato institucional y marco de política de GRH."
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA3-P3",
              "evidence": "Decreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nLey N.º 2027 – Estatuto del Funcionario Público: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/Ley_2027_Estatuto_Funcionario_P%C3%BAblico.pdf\n\nPlan Estratégico Institucional 2021–2025 de la Aduana Nacional: https://www.aduana.gob.bo/sites/default/files/BibliotecaAduanera/pei%202021-2025%20RD%2001-013-22.pdf\n\nDepartamento de Recursos Humanos – Atribuciones institucionales: https://portal.aduana.gob.bo/aduana7/content/departamento-de-recursos-humanos-2\n\nMapa y flujo de procesos institucionales: https://www.aduana.gob.bo/PLANE_flujoprocesos\n",
              "evidence_delivered": true,
              "evidence_delivery_date": "25 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con instrumentos de planificación estratégica que contemplan el fortalecimiento de los recursos humanos como una prioridad institucional, así como con una estructura administrativa responsable de la planificación y gestión del personal. No obstante, de acuerdo con los hallazgos del diagnóstico, la existencia formal de un régimen de carrera administrativa no se traduce en una incorporación efectiva de funcionarios a dicho régimen ni en planes de carrera estructurados. Asimismo, no se identificó evidencia de que las competencias requeridas por puesto y las brechas de capacidades se incorporen sistemáticamente a la planificación de la fuerza laboral. Finalmente, permanece pendiente verificar la existencia de un plan de personal que proyecte las necesidades actuales y futuras, así como de mecanismos específicos de seguimiento y evaluación de sus resultados.\n\nEl artículo 12 del Decreto Supremo N.º 26115 contempla expresamente la formulación de un Plan de Personal. Además, la descripción institucional del Departamento de Recursos Humanos incluye su implementación entre las funciones asignadas. Esto hace especialmente importante verificar el documento vigente y su ejecución antes de concluir que no existe planificación de personal. \n\nTambién se localizó un antecedente institucional de 2020 que informa la aprobación y difusión de un diccionario de competencias técnicas y una malla curricular. Este antecedente no demuestra que exista un marco de competencias vigente y aplicado, pero conviene contrastarlo con los hallazgos del diagnóstico para determinar si esos instrumentos continúan utilizándose. ",
              "guidance": "1. ¿Cuenta la administración aduanera con una estrategia documentada de GRH alineada con los objetivos administrativos y las prioridades operativas de la aduana?\n2. ¿Existe un plan de personal que determine las necesidades actuales y futuras de personal?\n3. ¿Se incorporan las brechas de competencias, dotación de personal o capacidad identificadas a las decisiones de planificación de la fuerza laboral?\n4. ¿Se realiza periódicamente un seguimiento y revisión de los avances en relación con la estrategia de HRM y el plan de personal técnico?",
              "id": "pilar_3_c2_q1",
              "indicator": "KPI [KA3-P3]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-27T02:28:18.216Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con una estrategia documentada de gestión de recursos humanos, alineada con los objetivos institucionales y las prioridades operativas, lo que proporciona un marco de referencia para orientar la administración del personal. No obstante, su existencia no permite determinar por sí sola el grado de implementación ni su contribución efectiva al cumplimiento de los objetivos estratégicos.\n\nReferencia normativa: Ley N.º 1178, artículo 6, relativo a la programación de operaciones; Decreto Supremo N.º 26115, disposiciones del subsistema de dotación de personal sobre programación de necesidades; Plan Estratégico Institucional de la Aduana Nacional.",
              "recommendations": "Desarrollar un Plan Plurianual de Dotación de Personal (2026-2030) basado en estudios rigurosos de cargas laborales y medición de brechas en funciones críticas (aforo, valoración, APD y control fronterizo), vinculado al plan estratégico de la institución.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con una estrategia documentada de gestión de recursos humanos, alineada con los objetivos institucionales y las prioridades operativas, lo que proporciona un marco de referencia para orientar la administración del personal. No obstante, su existencia no permite determinar por sí sola el grado de implementación ni su contribución efectiva al cumplimiento de los objetivos estratégicos.\n\nReferencia normativa: Ley N.º 1178, artículo 6, relativo a la programación de operaciones; Decreto Supremo N.º 26115, disposiciones del subsistema de dotación de personal sobre programación de necesidades; Plan Estratégico Institucional de la Aduana Nacional.",
                "Hallazgo: La normativa contempla un régimen de carrera administrativa y mecanismos de planificación de personal. Sin embargo, de acuerdo con la información recopilada, no se identifican funcionarios incorporados efectivamente a la carrera administrativa ni planes de carrera estructurados. Asimismo, los perfiles de puestos no se encuentran sustentados en competencias definidas, lo que limita la capacidad para proyectar las necesidades futuras de personal y orientar su desarrollo profesional. La existencia de un plan específico de dotación de personal que cuantifique las necesidades actuales y futuras permanece pendiente de verificación.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público, disposiciones sobre carrera administrativa; Decreto Supremo N.º 26115, subsistemas de dotación y movilidad de personal, relativos a la planificación de necesidades y desarrollo de los servidores públicos.",
                "La institución dispone de mecanismos administrativos para la gestión y programación de recursos humanos. Sin embargo, no se identificó evidencia de un modelo formal de competencias que permita determinar las capacidades requeridas para cada puesto ni evaluar sistemáticamente las brechas existentes. En consecuencia, no es posible acreditar que estas brechas se incorporen de manera estructurada a las decisiones de planificación de la fuerza laboral. Tampoco se dispone de información suficiente para valorar cómo se consideran las necesidades de dotación y capacidad operativa.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones relativas a la programación de necesidades de personal, descripción de puestos, evaluación del desempeño y capacitación productiva; Manual de Puestos de la Aduana Nacional.",
                "Hallazgo: La institución dispone de instrumentos de planificación y seguimiento de la gestión institucional. Sin embargo, durante el diagnóstico no se identificaron mecanismos específicos de seguimiento y revisión periódica de la estrategia de recursos humanos y de la planificación del personal técnico, ni evidencia de indicadores que permitan evaluar su cumplimiento y realizar ajustes conforme a las necesidades operativas.\n\nReferencia normativa: Ley N.º 1178, artículo 6, sobre programación y seguimiento de operaciones; Decreto Supremo N.º 26115, disposiciones relativas a la planificación y administración de personal; Plan Estratégico Institucional de la Aduana Nacional."
              ],
              "text": "Formular y aplicar una estrategia de gestión de recursos humanos y un plan de personal acorde con los objetivos de la organización, las prioridades operativas, las necesidades de personal actuales y futuras y las deficiencias de capacidad identificadas."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA3-P4",
              "evidence": "Se solicita un ejemplo de evaluacLey N.º 1178 – Administración y Control Gubernamentales: https://www.planificacion.gob.bo/uploads/marco-legal/ley1178.pdf\n\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nManual de Organización y Funciones de la Aduana Nacional, aprobado mediante RA-PE-02-085-24: https://portal.aduana.gob.bo/aduana7/MOF%20-%20RA-PE-02-085-24.pdf\n\nDepartamento de Recursos Humanos – Atribuciones institucionales: https://portal.aduana.gob.bo/aduana7/content/departamento-de-recursos-humanos-2ión del desempeño y establecimeinto de metas",
              "evidence_delivered": true,
              "evidence_delivery_date": "25 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con un marco normativo que contempla la administración sistemática de información del personal, así como procesos de planificación y evaluación de recursos humanos. Sin embargo, durante el diagnóstico no se presentó evidencia documental que permita verificar la implementación de un sistema de información de recursos humanos con indicadores clave de desempeño. Tampoco fue posible acreditar que se realicen mediciones periódicas sobre la dotación, distribución, capacidades y resultados de la fuerza laboral, ni que dicha información se utilice sistemáticamente para orientar la asignación de recursos y la toma de decisiones. Esta situación limita la posibilidad de evaluar el grado de madurez de la gestión basada en datos y pone de manifiesto la necesidad de verificar los sistemas, reportes e indicadores disponibles antes de determinar su alcance y efectividad.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia la administración puede establecer y utilizar un sistema de información de RR.HH. e indicadores clave de desempeño de la RRHH para respaldar la planificación de la dotación de personal, la asignación de recursos y las decisiones de gestión basadas en datos en las operaciones, unidades o localidades pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_3_c2_q2",
              "indicator": "KPI [KA3-P4]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-27T02:28:48.916Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con un marco normativo general que regula la administración de personal y contempla la generación y gestión de información sobre los recursos humanos. Sin embargo, durante el diagnóstico no se presentó evidencia documental que permita verificar la existencia de un sistema institucional de información de recursos humanos, formalmente establecido, que integre indicadores clave de desempeño para apoyar la planificación y la toma de decisiones.\n\nReferencia normativa: Ley N.º 1178, artículo 9, relativo al Sistema de Administración de Personal; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal, disposiciones sobre el Sistema de Información de Personal.",
              "recommendations": "Modernizar las herramientas informáticas de RRHH hacia un Sistema Integrado de Información de Recursos Humanos (SIRH) que incluya un módulo analítico con cuadro de mando (rotación, desempeño, productividad y brechas formativas) interoperable con los sistemas aduaneros centrales.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con un marco normativo general que regula la administración de personal y contempla la generación y gestión de información sobre los recursos humanos. Sin embargo, durante el diagnóstico no se presentó evidencia documental que permita verificar la existencia de un sistema institucional de información de recursos humanos, formalmente establecido, que integre indicadores clave de desempeño para apoyar la planificación y la toma de decisiones.\n\nReferencia normativa: Ley N.º 1178, artículo 9, relativo al Sistema de Administración de Personal; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal, disposiciones sobre el Sistema de Información de Personal.",
                "Hallazgo: La normativa nacional contempla mecanismos para organizar y administrar la información del personal. No obstante, durante el diagnóstico no se presentó evidencia sobre la implementación y utilización de un sistema de información de recursos humanos ni de indicadores de gestión que permitan evaluar sistemáticamente la dotación, distribución, capacidades y desempeño del personal. En consecuencia, no fue posible determinar en qué medida la información disponible respalda las decisiones de planificación y asignación de recursos en las distintas unidades y dependencias aduaneras.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones relativas al Sistema de Información de Personal y a la programación de necesidades de personal; Manual de Organización y Funciones de la Aduana Nacional, en lo relativo a las atribuciones de gestión de recursos humanos.",
                "Hallazgo: El marco normativo establece procesos de planificación, evaluación y seguimiento de la administración de personal. Sin embargo, no se obtuvo evidencia de que la función de Recursos Humanos disponga de indicadores de gestión medidos periódicamente ni de mecanismos documentados que vinculen sus resultados con ajustes en la planificación, las prioridades institucionales o la adopción de medidas correctivas. Por tanto, la aplicación de un esquema de gestión basado en indicadores permanece pendiente de verificación.\n\nReferencia normativa: Ley N.º 1178, artículo 6, relativo a la programación y seguimiento de operaciones; Decreto Supremo N.º 26115, disposiciones sobre evaluación del desempeño y Sistema de Información de Personal."
              ],
              "text": "Establecer y utilizar un sistema de información en RR.HH. e indicadores clave de desempeño en RRHH para respaldar la planificación de la dotación de personal, la asignación de recursos y la toma de decisiones de gestión basada en datos."
            }
          ],
          "title": "Gestión estratégica de recursos humanos y planificación de la fuerza de trabajo"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA3-P5",
              "evidence": "ntes de información\n1. Ley N.º 2027 – Estatuto del Funcionario Público: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/Ley_2027_Estatuto_Funcionario_P%C3%BAblico.pdf\n2. Decreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n3. Manual de Puestos de la Aduana Nacional: https://portal.aduana.gob.bo/aduana7/content/manual-de-puestos\n4. Reglamento Específico del Sistema de Administración de Personal (RE-SAP), versión histórica de 2013: https://portal.aduana.gob.bo/aduana7/content/2602013\n5 Manual de puestos",
              "evidence_delivered": false,
              "findings": "La Aduana Nacional de Bolivia dispone de instrumentos formales de clasificación y descripción de puestos que establecen las responsabilidades y requisitos asociados a las distintas funciones institucionales. Sin embargo, estos instrumentos se encuentran orientados principalmente a la definición de funciones y no se sustentan en un marco estructurado de competencias técnicas y conductuales. Esta limitación se extiende a los procesos de contratación, capacitación, evaluación del desempeño y desarrollo profesional, que no se encuentran articulados mediante criterios homogéneos de competencias. Asimismo, la ausencia de un modelo formal impide establecer mecanismos sistemáticos para su revisión y actualización, lo que limita la capacidad institucional para identificar brechas de capacidades y orientar el desarrollo del personal conforme a las necesidades operativas.\n\nLa ausencia de un marco formal de competencias y su falta de integración en los procesos de recursos humanos corresponden a los hallazgos proporcionados durante el diagnóstico. Las referencias normativas sustentan la existencia de los procesos administrativos, pero no acreditan por sí mismas dichas deficiencias.",
              "guidance": "1. ¿Ha establecido la administración aduanera un marco formal de competencias que cubra las funciones y funciones principales?\n2. ¿Las clasificaciones de puestos y las descripciones de puestos se basan en competencias definidas?\n3. ¿Se emplean las competencias en los procesos de contratación, capacitación, gestión del desempeño y desarrollo profesional?\n4. ¿Se revisa y actualiza periódicamente el marco de competencias?",
              "id": "pilar_3_c3_q1",
              "indicator": "KPI [KA3-P5]: % de personal aduanero evaluado por competencias y con plan anual de formación ejecutado.",
              "lastModifiedAt": "2026-10-27T02:29:25.694Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con instrumentos formales de descripción de puestos que establecen responsabilidades y requisitos para el desempeño de las distintas funciones institucionales. Sin embargo, no dispone de un marco integral de competencias que defina los conocimientos, habilidades y comportamientos requeridos para los principales grupos ocupacionales. Los perfiles existentes se encuentran orientados principalmente a la descripción de responsabilidades, sin constituir un modelo estructurado de gestión por competencias.\n\nReferencia normativa: Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal, disposiciones relativas a la clasificación, valoración y descripción de puestos; Manual de Puestos de la Aduana Nacional.",
              "recommendations": "Diseñar e implantar con carácter prioritario un Diccionario Institucional de Competencias y una nueva Arquitectura de Puestos aduanera (conforme a los estándares de la OMA), que sirva de cimiento transversal para los procesos de selección, evaluación del desempeño y planes de carrera.",
              "score": 1,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con instrumentos formales de descripción de puestos que establecen responsabilidades y requisitos para el desempeño de las distintas funciones institucionales. Sin embargo, no dispone de un marco integral de competencias que defina los conocimientos, habilidades y comportamientos requeridos para los principales grupos ocupacionales. Los perfiles existentes se encuentran orientados principalmente a la descripción de responsabilidades, sin constituir un modelo estructurado de gestión por competencias.\n\nReferencia normativa: Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal, disposiciones relativas a la clasificación, valoración y descripción de puestos; Manual de Puestos de la Aduana Nacional.",
                "Hallazgo: La institución dispone de una estructura formal de clasificación y descripción de puestos, que proporciona una base para delimitar funciones, responsabilidades y requisitos de ocupación. No obstante, de acuerdo con el diagnóstico, estos instrumentos no se encuentran sustentados en competencias previamente definidas, lo que limita la identificación de las capacidades técnicas y conductuales necesarias para el desempeño de cada función.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones del subsistema de dotación de personal relativas a la clasificación, valoración y descripción de puestos; Manual de Puestos de la Aduana Nacional.",
                "Hallazgo: La Aduana Nacional cuenta con procesos formales de contratación, capacitación y evaluación del desempeño, regulados por la normativa de administración de personal. Sin embargo, estos procesos no se encuentran articulados mediante un marco común de competencias, lo que limita la integración de la selección, la formación, la evaluación y el desarrollo profesional bajo criterios homogéneos de capacidades y desempeño.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público; Decreto Supremo N.º 26115, subsistemas de dotación de personal, evaluación del desempeño, capacitación productiva y movilidad de personal; Reglamento Específico del Sistema de Administración de Personal de la Aduana Nacional.",
                "Hallazgo: La institución dispone de instrumentos administrativos para la gestión de puestos y funciones. Sin embargo, al no contar con un marco formal de competencias, tampoco se realizan procesos periódicos de revisión y actualización de estas, lo que impide disponer de una referencia institucional para adaptar sistemáticamente las capacidades requeridas a la evolución de las funciones y necesidades operativas aduaneras.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones relativas a la administración de puestos y capacitación productiva; Manual de Puestos de la Aduana Nacional. Estas disposiciones constituyen un marco general y no acreditan la existencia de un procedimiento específico de actualización de competencias."
              ],
              "text": "Desarrollar e implementar un marco de gestión de recursos humanos y una arquitectura de puestos basado en competencias."
            }
          ],
          "title": "Gestión de competencias y arquitectura de puestos"
        },
        {
          "code": "C4",
          "id": "c4",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA3-P6",
              "evidence": "Ley N.º 2027 – Estatuto del Funcionario Público, artículos 23 a 25: https://wipolex-res.wipo.int/edocs/lexdocs/laws/es/bo/bo055es.html\n\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal, artículos 17 a 19: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nManual de Puestos de la Aduana Nacional: https://portal.aduana.gob.bo/aduana7/content/manual-de-puestos\n\nManual de Organización Funcional de la Aduana Nacional: https://www.aduana.gob.bo/manual-de-organizaci-n-funcional",
              "evidence_delivered": true,
              "evidence_delivery_date": "24 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con un marco normativo que establece principios de transparencia, mérito e idoneidad para la contratación, así como con un Manual de Puestos que define los perfiles y requisitos de selección. Asimismo, el ingreso del personal está sujeto al cumplimiento de los requisitos legales y se identifica un mecanismo de acompañamiento inicial para los aforadores. Sin embargo, las entrevistas realizadas señalan que las decisiones de contratación no se sustentan habitualmente en criterios meritocráticos y competencias demostradas. Adicionalmente, se identifican debilidades en la incorporación del personal operativo, particularmente por la amplitud de los perfiles profesionales admitidos, la ausencia de un programa estructurado de inducción y la falta de guías y certificación de los mentores responsables de la formación inicial. Finalmente, permanece pendiente verificar la transparencia de los procesos de publicación de vacantes y el alcance de las verificaciones de integridad y referencias laborales.\n\nEl artículo 18 del Decreto Supremo N.º 26115 establece requisitos de publicidad, mérito y evaluación técnica en los procesos de reclutamiento y selección; el artículo 19 regula la inducción del personal. La documentación institucional también contempla responsabilidades relacionadas con la inducción de nuevos funcionarios. Por ello, el hallazgo relativo a la ausencia de un programa estructurado debe interpretarse como una deficiencia de implementación reportada durante el diagnóstico, no como ausencia de regulación.",
              "guidance": "1. ¿Las vacantes se anuncian públicamente o se comunican mediante procesos de contratación transparentes?\n2. ¿Se definen criterios de selección y métodos de evaluación antes de iniciar la contratación?\n3. ¿Se toman decisiones de selección y contratación basadas en el mérito y en competencias demostradas?\n4. ¿Se llevan a cabo verificaciones de integridad y referencias en su caso?\n5. ¿Completan los nuevos empleados un programa estructurado de inducción o incorporación antes del despliegue?",
              "id": "pilar_3_c4_q1",
              "indicator": "KPI [KA3-P6]: % de personal aduanero evaluado por competencias y con plan anual de formación ejecutado.",
              "lastModifiedAt": "2026-10-27T02:29:58.983Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: El marco normativo nacional establece principios de transparencia e igualdad de oportunidades para el acceso a la función pública. Sin embargo, durante el diagnóstico no se obtuvo información suficiente para determinar si las vacantes de la Aduana Nacional se difunden públicamente y si los procedimientos de contratación garantizan condiciones de transparencia y acceso equitativo.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público, disposiciones sobre ingreso a la función pública y carrera administrativa; Decreto Supremo N.º 26115, subsistema de dotación de personal, que regula el reclutamiento y selección",
              "recommendations": "Institucionalizar un protocolo riguroso de selección por mérito y competencias que incorpore exámenes técnicos prácticos estandarizados y pruebas situacionales aduaneras, complementado con un programa obligatorio de inducción y mentoría técnica inicial de 3 meses.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: El marco normativo nacional establece principios de transparencia e igualdad de oportunidades para el acceso a la función pública. Sin embargo, durante el diagnóstico no se obtuvo información suficiente para determinar si las vacantes de la Aduana Nacional se difunden públicamente y si los procedimientos de contratación garantizan condiciones de transparencia y acceso equitativo.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público, disposiciones sobre ingreso a la función pública y carrera administrativa; Decreto Supremo N.º 26115, subsistema de dotación de personal, que regula el reclutamiento y selección",
                "Hallazgo: La Aduana Nacional cuenta con un Manual de Puestos que establece los requisitos y perfiles para los diferentes cargos, proporcionando una base formal para los procesos de selección. No obstante, la existencia de perfiles documentados no permite confirmar que los métodos de evaluación se definan previamente ni que se apliquen de manera uniforme en todos los procesos de contratación.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones relativas a la clasificación, valoración y descripción de puestos, así como al reclutamiento y selección de personal; Manual de Puestos de la Aduana Nacional.",
                "Hallazgo: La normativa establece criterios de mérito, capacidad e igualdad de oportunidades para el ingreso a la función pública. Sin embargo, las entrevistas realizadas indican que las decisiones de selección y contratación no se sustentan habitualmente en la valoración objetiva de competencias demostradas, lo que evidencia una brecha entre los principios normativos y las prácticas institucionales reportadas.\n\nReferencia normativa: Ley N.º 2027, disposiciones sobre ingreso y carrera administrativa; Decreto Supremo N.º 26115, subsistema de dotación de personal, relativo a los criterios y procedimientos de selección.",
                "Hallazgo: El ingreso a la Aduana Nacional está sujeto al cumplimiento de los requisitos legales aplicables a los servidores públicos, lo que constituye un mecanismo formal de control de elegibilidad. No obstante, la información disponible no permite determinar si se realizan verificaciones adicionales de integridad, antecedentes y referencias laborales, particularmente para puestos con responsabilidades sensibles o exposición a riesgos de corrupción.\n\nReferencia normativa: Ley N.º 2027, disposiciones sobre requisitos e impedimentos para el ejercicio de la función pública; Decreto Supremo N.º 26115, subsistema de dotación de personal; Ley N.º 1178, de Administración y Control Gubernamentales.",
                "Hallazgo: Se identifica un mecanismo de acompañamiento inicial para los aforadores, consistente en una mentoría de diez días en la aduana, bajo la responsabilidad de un funcionario designado por el administrador. Sin embargo, este proceso no forma parte de un programa estructurado de inducción y presenta limitaciones relevantes: los perfiles profesionales definidos para el puesto son generales y no necesariamente garantizan la idoneidad técnica; los mentores no cuentan con una guía metodológica estandarizada ni con una certificación que acredite sus competencias como instructores. Estas condiciones limitan la homogeneidad de la formación inicial y la posibilidad de verificar que los nuevos funcionarios hayan adquirido las competencias necesarias antes de asumir sus responsabilidades operativas.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones del subsistema de dotación de personal relativas a la inducción o integración del personal; Manual de Puestos de la Aduana Nacional; Reglamento Específico del Sistema de Administración de Personal (RE-SAP)."
              ],
              "text": "Implementar procesos de contratación, selección e incorporación transparentes, basados en el mérito y en función de las competencias."
            }
          ],
          "title": "Contratación, selección e incorporación"
        },
        {
          "code": "C5",
          "id": "c5",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA3-P7",
              "evidence": "Ley N.º 2027 – Estatuto del Funcionario Público: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/Ley_2027_Estatuto_Funcionario_P%C3%BAblico.pdf\n\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nReglamento Específico del Sistema de Administración de Personal (RE-SAP), aprobado mediante RD 02-029-21: https://www.aduana.gob.bo/sites/default/files/pac/PAC-2025.pdf\n\nPlan Anual de Capacitación 2025 de la Aduana Nacional: https://www.aduana.gob.bo/aduana7/sites/default/files/Archivo/%20PLAN%20ANUAL%20DE%20CAPACITACI%C3%93N%20-%20GESTI%C3%93N%202025.pdf\n\nManual de Procedimiento para Detección, Desarrollo y Evaluación de Capacitación, aprobado mediante RA-PE-02-018-21: https://www.aduana.gob.bo/sites/default/files/pac/PAC-2025.pdf\n",
              "evidence_delivered": true,
              "evidence_delivery_date": "24 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con un proceso de identificación de necesidades de capacitación y una oferta académica dirigida a sus funcionarios, además de incorporar compromisos de formación en las evaluaciones del desempeño, lo que constituye una base favorable para promover el aprendizaje continuo. Asimismo, se identificó documentalmente un Plan Anual de Capacitación 2025, aunque el diagnóstico todavía no acredita su implementación como un plan integral de desarrollo profesional basado en competencias. Persisten oportunidades de mejora en la vinculación de las necesidades formativas con las competencias requeridas y en la estructuración de programas de desarrollo de liderazgo para directivos actuales y futuros. Finalmente, no se dispone de evidencia suficiente para determinar si se evalúa sistemáticamente la eficacia de las capacitaciones y si sus resultados se utilizan para mejorar las iniciativas posteriores de aprendizaje.\n\nPlan Anual de Capacitación 2025 hace referencia expresa al RE-SAP aprobado en 2021, a un procedimiento institucional de capacitación y a una malla curricular orientada al desarrollo de competencias.   Esto permite acreditar la existencia de instrumentos formales, pero no demuestra por sí solo que se aplique un modelo de gestión por competencias. Conviene solicitar la documentación de implementación para contrastarla con los hallazgos de las entrevistas.",
              "guidance": "1. ¿Se evalúan periódicamente las necesidades de capacitación y desarrollo a nivel de la administración aduanera, de las unidades o de las personas?\n2. ¿Existe un plan de aprendizaje y desarrollo basado en las necesidades identificadas?\n3. ¿Existen programas de desarrollo de liderazgo para gerentes actuales y futuros?\n4. ¿Se evalúa la eficacia de la capacitación y se utiliza para mejorar las iniciativas de aprendizaje futuras?\n5. ¿Se anima y apoya a los empleados para que participen en actividades de aprendizaje continuo?",
              "id": "pilar_3_c5_q1",
              "indicator": "KPI [KA3-P7]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-27T02:30:20.705Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional dispone de un proceso de identificación y evaluación de necesidades de capacitación, que constituye una base para orientar las acciones de formación del personal. Sin embargo, no se identifican registros que permitan verificar su vinculación con un modelo de competencias, lo que limita la identificación estructurada de brechas de conocimientos y habilidades en los distintos niveles de la institución.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 33 a 35, relativos al subsistema de capacitación productiva, la detección de necesidades y la programación de actividades formativas; Ley N.º 2027, artículo 34, sobre capacitación productiva.",
              "recommendations": "Crear la Escuela Aduanera Nacional y reestructurar el PAC en mallas curriculares técnicas progresivas y certificables por especialidad (clasificación, valoración, reglas de origen, auditoría y análisis de riesgo), vinculando la capacitación a promociones y asignaciones operativas.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional dispone de un proceso de identificación y evaluación de necesidades de capacitación, que constituye una base para orientar las acciones de formación del personal. Sin embargo, no se identifican registros que permitan verificar su vinculación con un modelo de competencias, lo que limita la identificación estructurada de brechas de conocimientos y habilidades en los distintos niveles de la institución.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 33 a 35, relativos al subsistema de capacitación productiva, la detección de necesidades y la programación de actividades formativas; Ley N.º 2027, artículo 34, sobre capacitación productiva.",
                "Existe un plan de aprendizaje y desarrollo basado en las necesidades identificadas?\nHallazgo: La institución dispone de una oferta académica dirigida al personal aduanero, lo que facilita el acceso a oportunidades de formación. No obstante, de acuerdo con el diagnóstico, no se identifica un plan integral de aprendizaje y desarrollo que articule las necesidades detectadas con objetivos formativos, competencias requeridas y trayectorias de desarrollo profesional.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 34 a 36, relativos a la identificación de necesidades, programación y ejecución de la capacitación; Plan Anual de Capacitación de la Aduana Nacional, gestión 2025, como antecedente documental de programación formativa.",
                "Hallazgo: La normativa general contempla el desarrollo de capacidades de los servidores públicos mediante procesos de capacitación. Sin embargo, de acuerdo con el diagnóstico, la Aduana Nacional no dispone de programas estructurados de desarrollo de liderazgo orientados al fortalecimiento de las competencias directivas y a la preparación de futuros responsables de unidades administrativas y operativas.\n\nReferencia normativa: Ley N.º 2027, artículo 34, relativo a la capacitación productiva; Decreto Supremo N.º 26115, artículos 33 a 39, que establecen el marco general de capacitación y desarrollo del personal. Estas disposiciones no acreditan la existencia de programas específicos de liderazgo.",
                "Hallazgo: El marco normativo contempla mecanismos para evaluar los resultados de las actividades de capacitación. No obstante, durante el diagnóstico no se obtuvo evidencia suficiente que permita determinar si la institución evalúa sistemáticamente la eficacia de la formación ni si sus resultados se utilizan para mejorar la planificación y ejecución de futuras iniciativas de aprendizaje. En consecuencia, este aspecto permanece pendiente de verificación.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones del subsistema de capacitación productiva relativas a la evaluación de los resultados de la capacitación.",
                "¿Se promueve y apoya la participación de los funcionarios en actividades de aprendizaje continuo?\nHallazgo: La Aduana Nacional incorpora la identificación de necesidades y compromisos de capacitación dentro del proceso de evaluación del desempeño, lo que favorece la participación del personal en actividades de aprendizaje continuo. Esta práctica constituye un mecanismo de vinculación entre la gestión del desempeño y el desarrollo profesional, aunque todavía no se cuenta con elementos para valorar su alcance y efectividad.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 22 a 26 y 33 a 39, relativos a la evaluación del desempeño y capacitación productiva; Ley N.º 2027, artículo 34."
              ],
              "text": "Diseñar e implementar un sistema de aprendizaje, liderazgo y desarrollo profesional basado en competencias que esté alineado con los objetivos estratégicos, las necesidades operativas, las evaluaciones de competencias, los hallazgos de auditoría y las prioridades de reforma, que cubra las competencias técnicas, de gestión, de liderazgo y conductuales."
            },
            {
              "code": "KA3-P8",
              "evidence": "Ley N.º 2027 – Estatuto del Funcionario Público: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/Ley_2027_Estatuto_Funcionario_P%C3%BAblico.pdf\n\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nReglamento Específico del Sistema de Administración de Personal de la Aduana Nacional (versión histórica de 2013): https://portal.aduana.gob.bo/aduana7/content/2602013\n\nPlan Anual de Capacitación 2025 de la Aduana Nacional: https://www.aduana.gob.bo/aduana7/sites/default/files/Archivo/%20PLAN%20ANUAL%20DE%20CAPACITACI%C3%93N%20-%20GESTI%C3%93N%202025.pdf",
              "evidence_delivered": true,
              "evidence_delivery_date": "24 oct 2026",
              "findings": "1.La Aduana Nacional de Bolivia cuenta con un proceso formal de capacitación que contempla la identificación anual de necesidades de formación a partir de las evaluaciones del desempeño, proporcionando una base para la planificación del desarrollo del personal. Sin embargo, no se dispone de evidencia suficiente sobre la existencia de mecanismos estructurados para preservar y transferir conocimientos críticos, tales como mentorías, comunidades de práctica y procesos de transferencia de conocimientos en puestos estratégicos. Adicionalmente, se identifica que una proporción importante de las capacitaciones presenciales está dirigida a escuelas y no directamente a los funcionarios, mientras que los horarios de formación no siempre resultan adecuados, lo que podría limitar la cobertura y efectividad de las actividades de capacitación.\n\n- Hallazgo: Gran parte de las caacitaciones presenciales se dan a las escuelas no a los empleados, los horarios de capacitación no sen necesariamente pactados con las areas operativos ocacionando traslape con sus obligaciones",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de institucionalizar la gestión del conocimiento y los mecanismos de aprendizaje administrativo aduanero para preservar, transferir y difundir conocimientos críticos aduaneros entre las operaciones, unidades o localidades pertinentes?\n3. ¿Abbarcan los acuerdos la mentoría, el asesoramiento, las comunidades de práctica, los procedimientos documentados y las lecciones aprendidas, los procesos estructurados de traspaso y salida, y la transferencia de conocimientos para puestos críticos?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_3_c5_q2",
              "indicator": "KPI [KA3-P8]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T02:30:38.675Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "allazgo: La Aduana Nacional cuenta con un proceso formal de capacitación que contempla la identificación y recopilación de necesidades de formación del personal, lo que constituye una base institucional para el desarrollo de capacidades. No obstante, la existencia de este proceso no permite determinar si se dispone de una política integral de gestión del conocimiento que garantice su preservación, transferencia y difusión dentro de la institución.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 33 a 39, relativos al subsistema de capacitación productiva, que contempla la detección de necesidades, programación, ejecución y evaluación de las actividades de capacitación.",
              "recommendations": "Establecer un Programa Institucional de Gestión del Conocimiento que incluya repositorios digitales de criterios y lecciones aprendidas, manuales operativos estandarizados y esquemas de mentoría de expertos senior a funcionarios junior en áreas de alta complejidad.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "allazgo: La Aduana Nacional cuenta con un proceso formal de capacitación que contempla la identificación y recopilación de necesidades de formación del personal, lo que constituye una base institucional para el desarrollo de capacidades. No obstante, la existencia de este proceso no permite determinar si se dispone de una política integral de gestión del conocimiento que garantice su preservación, transferencia y difusión dentro de la institución.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 33 a 39, relativos al subsistema de capacitación productiva, que contempla la detección de necesidades, programación, ejecución y evaluación de las actividades de capacitación.",
                "Hallazgo: Se realiza anualmente un levantamiento de necesidades de capacitación a partir de los resultados de la evaluación del desempeño, lo que proporciona un mecanismo recurrente para identificar requerimientos de formación. Sin embargo, esta práctica, por sí sola, no permite acreditar la existencia de mecanismos institucionalizados para preservar, compartir y transferir conocimientos críticos entre las distintas unidades y dependencias aduaneras.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 33 a 36, relativos a la detección de necesidades y programación de la capacitación; Ley N.º 2027, artículo 34, sobre capacitación productiva.",
                "Hallazgo: La institución utiliza los resultados de las evaluaciones del desempeño como insumo para identificar necesidades de capacitación, lo que favorece la vinculación entre la evaluación individual y la planificación formativa. No obstante, la información disponible no permite determinar si se han implementado mecanismos específicos de mentoría, acompañamiento, documentación de lecciones aprendidas o transferencia estructurada de conocimientos para puestos críticos.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 33 a 39, que regulan la capacitación y su evaluación. Estas disposiciones constituyen un marco general y no acreditan por sí mismas la existencia de los mecanismos específicos mencionados en la pregunta.",
                "Hallazgo: Se identifican actividades de capacitación presencial que reflejan la existencia de acciones formativas institucionales. Sin embargo, de acuerdo con el diagnóstico, una proporción importante de estas actividades se dirige a escuelas y no directamente a los funcionarios de la Aduana Nacional. Adicionalmente, los horarios establecidos para la capacitación no siempre resultan adecuados para las necesidades del personal, lo que podría limitar su participación y cobertura efectiva. Se requiere complementar la evaluación con información sobre beneficiarios, asistencia y resultados de las actividades de formación.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 36 a 39, relativos a la ejecución, evaluación y seguimiento de la capacitación; Plan Anual de Capacitación de la Aduana Nacional, gestión 2025."
              ],
              "text": "Institucionalizar la gestión del conocimiento y los mecanismos de aprendizaje organizativo para preservar, transferir y difundir los conocimientos aduaneros críticos."
            }
          ],
          "title": "Capacidad de aprendizaje, desarrollo y liderazgo"
        },
        {
          "code": "C6",
          "id": "c6",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA3-P9",
              "evidence": "Ley N.º 2027 – Estatuto del Funcionario Público: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/Ley_2027_Estatuto_Funcionario_P%C3%BAblico.pdf\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\nReglamento Específico del Sistema de Administración de Personal de la Aduana Nacional (versión histórica de 2013): https://portal.aduana.gob.bo/aduana7/content/2602013\nProcedimiento de evaluación del desempeño de la Aduana Nacional (antecedente institucional de 2015): https://www.aduana.gob.bo/sites/default/files/archivos/circular2662015.pdf\nEntrevistas con funcionarios de la Aduana Nacional: Fuente primaria del diagnóstico institucional, sin enlace público.",
              "findings": "La Aduana Nacional de Bolivia cuenta con un sistema formal de evaluación del desempeño que contempla el establecimiento de metas individuales, la realización de entrevistas anuales y la definición de compromisos de capacitación para la siguiente gestión. Estas prácticas constituyen una base para la gestión y el desarrollo del personal. Sin embargo, el sistema presenta limitaciones importantes al no incorporar un enfoque de competencias ni contar con evidencia suficiente de que las metas establecidas sean objetivamente mensurables. Asimismo, la retroalimentación identificada se concentra en la evaluación anual y las acciones de formación no se encuentran vinculadas con brechas específicas de competencias. Finalmente, permanece pendiente la revisión de los instrumentos de evaluación para determinar si contemplan el registro y seguimiento de medidas correctivas y planes individuales de desarrollo.\n\nLos hallazgos sobre la aplicación del sistema se sustentan en la información proporcionada durante el diagnóstico. Las referencias normativas establecen las obligaciones generales y los antecedentes institucionales, sin que ello implique que todas las prácticas descritas estén expresamente reguladas o verificadas documentalmente.",
              "guidance": "1. ¿Utiliza la administración aduanera un sistema formal de gestión del desempeño con objetivos e indicadores de desempeño definidos?\n2. ¿Se les brinda a los empleados retroalimentación periódica sobre su desempeño durante todo el ciclo de evaluación?\n3. ¿Las evaluaciones de desempeño se basan en resultados mensurables y competencias demostradas?\n4. ¿Se usan los resultados de las evaluaciones del desempeño para identificar deficiencias en las competencias y necesidades de desarrollo?\n5. ¿Se implementan las medidas correctivas y los planes de desarrollo cuando se identifican deficiencias en el desempeño?",
              "id": "pilar_3_c6_q1",
              "indicator": "KPI [KA3-P9]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-27T02:30:58.315Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con un sistema formal de evaluación del desempeño, que establece objetivos y metas individuales al inicio de cada gestión. Sin embargo, el modelo no se encuentra articulado con un marco de competencias, lo que limita su capacidad para evaluar integralmente el desempeño y las capacidades profesionales de los funcionarios.\n\nReferencia normativa: Ley N.º 2027, artículos 27 y 28, relativos a la evaluación del desempeño; Decreto Supremo N.º 26115, artículos 22 a 26, sobre el subsistema de evaluación del desempeño.",
              "recommendations": "Evolucionar la evaluación del desempeño hacia un modelo por competencias y resultados tangibles, alineando las metas individuales con los KPIs operativos de cada administración y utilizando la calificación como factor determinante para ascensos y estímulos profesionales.",
              "score": 3,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con un sistema formal de evaluación del desempeño, que establece objetivos y metas individuales al inicio de cada gestión. Sin embargo, el modelo no se encuentra articulado con un marco de competencias, lo que limita su capacidad para evaluar integralmente el desempeño y las capacidades profesionales de los funcionarios.\n\nReferencia normativa: Ley N.º 2027, artículos 27 y 28, relativos a la evaluación del desempeño; Decreto Supremo N.º 26115, artículos 22 a 26, sobre el subsistema de evaluación del desempeño.",
                "Hallazgo: Se realiza una entrevista anual de evaluación del desempeño, cuyos resultados son comunicados a los funcionarios y formalizados mediante su firma de conformidad. Este mecanismo constituye una práctica institucional de retroalimentación documentada. No obstante, no se cuenta con evidencia de que la retroalimentación se proporcione periódicamente durante el año, más allá de la evaluación anual.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 23 a 26, relativos a la programación, ejecución y comunicación de los resultados de la evaluación del desempeño.",
                "allazgo: El sistema contempla la definición de metas individuales al inicio de cada gestión, lo que proporciona una referencia para valorar el desempeño de los funcionarios. Sin embargo, no se identifican mecanismos de evaluación basados en competencias ni evidencia suficiente de que las metas establecidas cuenten con indicadores objetivos y mensurables, lo que limita la capacidad para determinar el grado de cumplimiento y comparar los resultados de manera consistente.\n\nReferencia normativa: Ley N.º 2027, artículo 28; Decreto Supremo N.º 26115, artículos 22 y 25, relativos a la evaluación de resultados y criterios de valoración del desempeño.",
                "Hallazgo: El proceso de evaluación contempla la identificación y concertación de actividades de formación para la siguiente gestión, lo que constituye un mecanismo favorable para vincular los resultados del desempeño con la capacitación del personal. Sin embargo, estas acciones no se encuentran sustentadas en una evaluación estructurada de competencias, lo que limita la identificación de brechas específicas y la orientación de los programas de desarrollo profesional.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 33 a 36, relativos a la capacitación productiva y la detección de necesidades de capacitación.",
                "Hallazgo: El marco normativo contempla la adopción de medidas correctivas y acciones de capacitación derivadas de los resultados de la evaluación del desempeño. No obstante, aún se requiere revisar el formato institucional de evaluación para determinar si las deficiencias identificadas, los compromisos de mejora y los planes de desarrollo quedan formalmente registrados y sujetos a seguimiento.\n\nReferencia normativa: Decreto Supremo N.º 26115, artículos 26 y 35 a 39, relativos a los resultados de la evaluación del desempeño, la capacitación y las medidas de mejora."
              ],
              "text": "Aplicar un sistema de gestión del desempeño transparente, meritocrático y basado en competencias que alinee los objetivos individuales y de equipo con las prioridades estratégicas y operativas."
            },
            {
              "code": "KA3-P10",
              "evidence": "Ley N.º 2027 – Estatuto del Funcionario Público: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/Ley_2027_Estatuto_Funcionario_P%C3%BAblico.pdf\n\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nMemoria Institucional 2025 de la Aduana Nacional: https://www.aduana.gob.bo/sites/default/files/memoria/MEMORIA%202025_0.pdf\n\nManual de Organización y Funciones de la Aduana Nacional (2024): https://www.aduana.gob.bo/aduana7/MOF%20-%20RA-PE-02-085-24.pdf",
              "findings": "La Aduana Nacional de Bolivia presenta avances en el mejoramiento de las condiciones laborales mediante la renovación de sus instalaciones. Asimismo, las entrevistas realizadas señalan que la dotación de personal es suficiente, aunque esta apreciación deberá contrastarse con el análisis cualitativo de las áreas operativas para determinar su correspondencia con las necesidades institucionales. Por otra parte, la elevada rotación de personal constituye un factor desfavorable para la estabilidad del clima laboral y el fortalecimiento del compromiso institucional. Finalmente, aún se requiere verificar la existencia de una política específica que articule las acciones de bienestar, comunicación interna y participación del personal, así como los mecanismos que permitan evaluar su aplicación efectiva.\n\nLa Memoria Institucional 2025 documenta una evaluación del clima organizacional con participación de 1.264 funcionarios, lo que constituye evidencia de seguimiento institucional, aunque no permite determinar por sí solo la efectividad de las medidas de bienestar laboral",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de promover el compromiso del personal, el bienestar y un clima administrativo favorable en las aduanas en todas las operaciones, unidades o localidades pertinentes?\n3. ¿Se abordan los acuerdos condiciones de trabajo seguras y favorables, el diálogo constructivo, la comunicación interna eficaz, la participación del personal técnico y medidas que refuercen el compromiso y la confianza?\n4. ¿Son adecuados las responsabilidades, la dotación de personal, las competencias, la capacitación y los recursos para el alcance y la carga de trabajo de la práctica?",
              "id": "pilar_3_c6_q2",
              "indicator": "KPI [KA3-P10]: % de personal aduanero evaluado por competencias y con plan anual de formación ejecutado.",
              "lastModifiedAt": "2026-10-27T02:31:32.419Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La normativa nacional establece disposiciones generales para la administración de recursos humanos, incluyendo la evaluación del desempeño, la capacitación y las condiciones de trabajo. No obstante, aún no se dispone de elementos suficientes para determinar si la Aduana Nacional cuenta con una política institucional específica e integral para promover el compromiso, bienestar y clima laboral de sus funcionarios.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal. Estas disposiciones constituyen el marco general, pero no acreditan por sí mismas la existencia de una política específica de bienestar laboral.",
              "recommendations": "Aprobar una Política Integral de Bienestar y Clima Laboral que defina planes de acción concretos frente a los resultados de las encuestas de clima, medidas para mitigar la rotación y el desgaste laboral, e instancias formales de participación y diálogo con el personal.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La normativa nacional establece disposiciones generales para la administración de recursos humanos, incluyendo la evaluación del desempeño, la capacitación y las condiciones de trabajo. No obstante, aún no se dispone de elementos suficientes para determinar si la Aduana Nacional cuenta con una política institucional específica e integral para promover el compromiso, bienestar y clima laboral de sus funcionarios.\n\nReferencia normativa: Ley N.º 2027, Estatuto del Funcionario Público; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal. Estas disposiciones constituyen el marco general, pero no acreditan por sí mismas la existencia de una política específica de bienestar laboral.",
                "Hallazgo: La Aduana Nacional dispone de instrumentos de administración de personal que proporcionan una base para la gestión del ambiente laboral. Sin embargo, el diagnóstico identifica una elevada rotación de personal que constituye un factor desfavorable para la estabilidad de los equipos de trabajo, la continuidad de las relaciones laborales y el fortalecimiento del compromiso institucional.\n\nReferencia normativa y documental: Decreto Supremo N.º 26115, disposiciones sobre movilidad y evaluación del desempeño; Memoria Institucional 2025 de la Aduana Nacional, apartado relativo a la evaluación del clima organizacional.",
                "Hallazgo: Se identifican avances en el mejoramiento de las condiciones físicas de trabajo mediante la renovación de las instalaciones aduaneras, lo que representa una acción favorable para el entorno laboral. No obstante, aún no se cuenta con información suficiente para evaluar la efectividad de los mecanismos de comunicación interna, diálogo constructivo, participación del personal técnico y fortalecimiento de la confianza institucional.\n\nReferencia normativa y documental: Ley N.º 2027, disposiciones relativas a los derechos de los servidores públicos; Ley General de Higiene, Seguridad Ocupacional y Bienestar, aprobada mediante Decreto Ley N.º 16998; Memoria Institucional 2025 de la Aduana Nacional.",
                "Hallazgo: Las entrevistas realizadas indican que la dotación de personal se considera suficiente para atender las necesidades institucionales, lo que constituye una percepción favorable respecto de la disponibilidad de recursos humanos. No obstante, esta apreciación deberá contrastarse con los resultados del análisis cualitativo de las áreas operativas, a fin de determinar su correspondencia con las cargas de trabajo, las competencias requeridas y los recursos disponibles.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones relativas a la dotación de personal, evaluación del desempeño y capacitación productiva; Manual de Organización y Funciones de la Aduana Nacional (2024)."
              ],
              "text": "Promover la participación del personal, el bienestar y un clima organizativo favorable."
            }
          ],
          "title": "Gestión del desempeño y desarrollo del personal"
        },
        {
          "code": "C7",
          "id": "c7",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA3-P11",
              "evidence": "1. Ley N.º 2027 – Estatuto del Funcionario Público (1999): [https://www.economiayfinanzas.gob.bo/node/6008](https://www.economiayfinanzas.gob.bo/node/6008?utm_source=chatgpt.com)\n2. Decreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal (2001): [https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf](https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf?utm_source=chatgpt.com)\n3. Ley N.º 1178 – Administración y Control Gubernamentales (1990): [https://institucional.correos.gob.bo/index.php/leyes-y-decretos/](https://institucional.correos.gob.bo/index.php/leyes-y-decretos/?utm_source=chatgpt.com)\n4. Reglamento Específico del Sistema de Administración de Personal (RE-SAP): [https://portal.aduana.gob.bo/aduana7/content/2602013](https://portal.aduana.gob.bo/aduana7/content/2602013?utm_source=chatgpt.com)\n5. Reglamento Interno de Personal (RIP) de la Aduana Nacional: [https://portal.aduana.gob.bo/aduana7/content/2602013](https://portal.aduana.gob.bo/aduana7/content/2602013?utm_source=chatgpt.com)\n6. Memoria Institucional 2025 de la Aduana Nacional: [https://www.aduana.gob.bo/sites/default/files/memoria/MEMORIA%202025_0.pdf](https://www.aduana.gob.bo/sites/default/files/memoria/MEMORIA%202025_0.pdf?utm_source=chatgpt.com)\n7. Escalas salariales y disposiciones administrativas de la Aduana Nacional: [https://www.aduana.gob.bo/sites/default/files/memoria/MEMORIA%202025_0.pdf](https://www.aduana.gob.bo/sites/default/files/memoria/MEMORIA%202025_0.pdf?utm_source=chatgpt.com)\n8. Entrevistas con funcionarios de la Aduana Nacional: Fuente primaria del diagnóstico institucional, sin enlace público.\n\nNota: Se debe verificar la vigencia de las versiones del RE-SAP y del RIP.",
              "findings": "La Aduana Nacional de Bolivia cuenta con un marco normativo que regula los principales procesos de administración y desarrollo de recursos humanos, incluyendo la promoción, movilidad, evaluación del desempeño y remuneraciones. Sin embargo, las entrevistas realizadas sugieren que su implementación no se encuentra plenamente consolidada, particularmente en materia de ascensos meritocráticos, planificación de carreras y retención del talento. Se identifica una oportunidad para fortalecer la gestión estratégica de recursos humanos, mediante mecanismos que vinculen de manera efectiva el desempeño, las competencias y el desarrollo profesional con las necesidades operativas e institucionales.\n\nLa primera pregunta no cuenta todavía con un hallazgo proporcionado. Por tanto, no se califica como cumplimiento ni incumplimiento; queda pendiente de verificación.",
              "guidance": "1. ¿Las decisiones de ascenso se basan en criterios transparentes y meritocráticos?\n2. ¿Se definen claramente las carreras o oportunidades de progresión para los principales grupos de empleados?\n3. ¿Se utilizan mecanismos de rotación o movilidad del personal para apoyar el desarrollo de los empleados y las necesidades administrativas de las aduanas?\n4. ¿Se examinan periódicamente la remuneración, las prestaciones y las condiciones de trabajo para facilitar la contratación y la retención?\n5. ¿Se han adoptado medidas para identificar y retener al personal de alto desempeño o crítico?",
              "id": "pilar_3_c7_q1",
              "indicator": "KPI [KA3-P11]: Tasa de resolución oportuna de investigaciones y denuncias de integridad (< 60 días).",
              "lastModifiedAt": "2026-10-27T02:34:58.439Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Se cuenta con un marco normativo nacional e institucional que establece criterios de mérito, igualdad de oportunidades, transparencia y evaluación del desempeño para la promoción del personal. La normativa aduanera contempla mecanismos de promoción horizontal y vertical, sujetos al cumplimiento de requisitos y procedimientos específicos. No obstante, la existencia de estas disposiciones no permite confirmar que los ascensos se realicen sistemáticamente con base en el desempeño y las competencias. Es necesario verificar su aplicación efectiva, particularmente la utilización de evaluaciones objetivas, convocatorias competitivas y criterios documentados para sustentar las decisiones de promoción.\n\nReferencia normativa:\n- Ley N.º 2027, Estatuto del Funcionario Público, artículos 28, 31, 32 y 33.\n- Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal.\n- Reglamento de Personal de la Aduana Nacional, artículo 117, relativo a la promoción horizontal y vertical.",
              "recommendations": "Diseñar e implementar un Régimen de Carrera Aduanera Profesional que establezca trayectorias de desarrollo técnico y directivo, criterios transparentes y meritocráticos de promoción, así como mecanismos de retención e incentivos para el personal altamente especializado, particularmente auditores, peritos y analistas. Como alternativa, se propone desarrollar planes de carrera vinculados a los puestos y no a las personas, que definan las trayectorias de progresión profesional, las competencias, la experiencia y los requisitos necesarios para acceder a cada posición, favoreciendo la profesionalización, la movilidad y la continuidad institucional.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Se cuenta con un marco normativo nacional e institucional que establece criterios de mérito, igualdad de oportunidades, transparencia y evaluación del desempeño para la promoción del personal. La normativa aduanera contempla mecanismos de promoción horizontal y vertical, sujetos al cumplimiento de requisitos y procedimientos específicos. No obstante, la existencia de estas disposiciones no permite confirmar que los ascensos se realicen sistemáticamente con base en el desempeño y las competencias. Es necesario verificar su aplicación efectiva, particularmente la utilización de evaluaciones objetivas, convocatorias competitivas y criterios documentados para sustentar las decisiones de promoción.\n\nReferencia normativa:\n- Ley N.º 2027, Estatuto del Funcionario Público, artículos 28, 31, 32 y 33.\n- Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal.\n- Reglamento de Personal de la Aduana Nacional, artículo 117, relativo a la promoción horizontal y vertical.",
                "La legislación boliviana reconoce la carrera administrativa como un mecanismo para promover el desarrollo profesional, la estabilidad laboral y la progresión de los servidores públicos, condicionada al desempeño. Asimismo, la normativa aduanera contempla distintas modalidades de promoción y mecanismos de capacitación. Sin embargo, la documentación pública revisada no permite identificar trayectorias de carrera claramente diferenciadas para los principales grupos ocupacionales de la Aduana Nacional, con requisitos de progresión, competencias y oportunidades de desarrollo previamente definidos. En consecuencia, se requiere verificar la existencia de planes institucionales de carrera que articulen la capacitación, la evaluación del desempeño y las oportunidades de promoción.\n\nReferencia normativa:\n- Ley N.º 2027, artículos 7, 18, 31 a 34.\n- Reglamento de Personal de la Aduana Nacional, artículo 117.\n- Resolución de Directorio N.º RD 02-020-13, de 29 de noviembre de 2013, que aprueba el Reglamento Específico del Sistema de Administración de Personal (RE-SAP) y el Reglamento Interno de Personal (RIP)",
                "La Aduana Nacional dispone de un marco normativo específico para la movilidad del personal, que contempla mecanismos de promoción, rotación, permuta y transferencia. La rotación se establece como un instrumento para responder a las necesidades institucionales, favorecer el aprendizaje y evitar la obsolescencia laboral, con especial atención al personal de las aduanas operativas. No obstante, la información pública revisada no permite determinar si estos mecanismos se aplican mediante una planificación periódica vinculada al desarrollo de competencias, la cobertura de puestos críticos y las necesidades operativas. Resulta necesario verificar su frecuencia, criterios de asignación y contribución al fortalecimiento de las capacidades institucionales.\n\nReferencia normativa:\n- Ley N.º 2027, artículo 30, relativo a la movilidad.\n- Decreto Supremo N.º 26115, subsistema de movilidad de personal.\n- Reglamento de Personal de la Aduana Nacional, artículos 115 y 116 y disposiciones sobre rotación.",
                "La Aduana Nacional cuenta con mecanismos formales para la valoración de puestos, la administración de remuneraciones y la revisión de las condiciones laborales. Se identifican actualizaciones de la escala salarial en 2024, 2025 y 2026, así como evaluaciones del clima organizacional orientadas a identificar oportunidades de mejora. Sin embargo, las revisiones salariales han respondido también a criterios de optimización presupuestaria y reorganización de puestos, sin que se identifique evidencia pública suficiente de una política integral de compensaciones y beneficios orientada específicamente a la atracción y retención del talento. Tampoco se acredita que estas revisiones incorporen sistemáticamente estudios de competitividad salarial, rotación del personal o necesidades de perfiles especializados.\n\nReferencia normativa y documental:\n- Ley N.º 2027, artículos 7 y 22, relativos a los derechos de los servidores públicos y la valoración de puestos y remuneraciones.\n- Decreto Supremo N.º 26115, artículo 13, sobre valoración de puestos y remuneración.\n- Resolución Ministerial N.º 072, de 21 de marzo de 2025, que aprueba la escala salarial de la Aduana Nacional.\n- Escala Salarial 2026, aprobada el 31 de marzo de 2026.\n- Memoria Institucional 2025, apartados 10.4.1 y 10.4.2.",
                "El marco normativo establece la evaluación periódica del desempeño y contempla mecanismos de reconocimiento e incentivos vinculados a resultados sobresalientes. Asimismo, la Aduana Nacional dispone de funciones institucionales orientadas a la capacitación, evaluación y desarrollo de sus recursos humanos. No obstante, la documentación pública consultada no permite identificar una estrategia integral de gestión del talento que contemple la identificación sistemática de funcionarios de alto desempeño, la determinación de puestos críticos, la planificación de sucesiones y la adopción de medidas específicas de retención. En consecuencia, si bien existen instrumentos normativos que podrían sustentar estas prácticas, no se cuenta con evidencia suficiente de su implementación como parte de una política institucional de gestión del talento.\n\nLey N.º 2027, artículos 27 y 28, sobre evaluación del desempeño; artículo 34, sobre capacitación productiva; y artículo 37, sobre incentivos y motivación.\nDecreto Supremo N.º 26115, subsistemas de evaluación del desempeño y capacitación productiva.\nManual de Organización y Funciones de la Aduana Nacional, Departamento de Recursos Humanos, funciones relacionadas con evaluación, capacitación, políticas de personal y planificación institucional."
              ],
              "text": "Implementar mecanismos de gestión de desarrollo profesional, movilidad, remuneración y retención de activos que respalden el ascenso basado en el mérito, la rotación, las trayectorias profesionales, la remuneración adecuada, las prestaciones, las condiciones de trabajo, la motivación del personal, la retención de personal cualificado y los altos estándares de integridad."
            },
            {
              "code": "KA3-P12",
              "evidence": "Ley N.º 2027 – Estatuto del Funcionario Público: https://www.economiayfinanzas.gob.bo/node/6008\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\nPlan Estratégico Institucional 2021-2025 de la Aduana Nacional: https://www.aduana.gob.bo/sites/default/files/BibliotecaAduanera/pei%202021-2025%20RD%2001-013-22.pdf\nManual de Organización y Funciones de la Aduana Nacional (2024): https://www.aduana.gob.bo/aduana7/MOF%20-%20RA-PE-02-085-24.pdf\nPlan Anual de Capacitación 2025 de la Aduana Nacional: https://www.aduana.gob.bo/aduana7/sites/default/files/Archivo/%20PLAN%20ANUAL%20DE%20CAPACITACI%C3%93N%20-%20GESTI%C3%93N%202025.pdf\n",
              "findings": "La Aduana Nacional de Bolivia cuenta con un marco normativo y una política formalmente establecida que proporcionan las bases para la gestión del personal. Sin embargo, se identifica una brecha en su aplicación, particularmente en lo relacionado con el apoyo al personal destinado a zonas remotas, de alto riesgo o de difícil servicio. Adicionalmente, aún no se dispone de información suficiente para evaluar si las responsabilidades, la dotación de personal, las competencias, la capacitación y los recursos disponibles son adecuados en relación con las necesidades operativas y las cargas de trabajo de las distintas dependencias.\n\nPolitica de apoyo al personal en zona  remotas",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de proporcionar apoyo adecuado al personal en lugares remotos, de alto riesgo o de servicio difícil, sobre la base de criterios transparentes y condiciones operativas locales en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Son adecuados las responsabilidades, dotación de personal, competencias, capacitación y recursos para el alcance y la carga de trabajo de la práctica?",
              "id": "pilar_3_c7_q2",
              "indicator": "",
              "lastModifiedAt": "2026-10-25T18:13:15.960Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: Se cuenta con un marco normativo nacional y disposiciones institucionales que regulan la administración del personal, así como con una política formalmente establecida que proporciona las bases para su implementación. No obstante, resulta necesario verificar los mecanismos de seguimiento y evaluación que permitan determinar su aplicación efectiva.\n\nReferencia normativa:\n- Ley N.º 2027, Estatuto del Funcionario Público.\n- Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal.\n- Reglamento Específico del Sistema de Administración de Personal (RE-SAP) de la Aduana Nacional.",
              "recommendations": "Crear un Régimen Especial de Servicio Fronterizo y Zonas Remotas que garantice condiciones dignas de habitabilidad, rotaciones programadas transparentes (máximo 12 a 24 meses), primas de frontera/riesgo, y esquemas de salud y apoyo psicosocial permanente.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: Se cuenta con un marco normativo nacional y disposiciones institucionales que regulan la administración del personal, así como con una política formalmente establecida que proporciona las bases para su implementación. No obstante, resulta necesario verificar los mecanismos de seguimiento y evaluación que permitan determinar su aplicación efectiva.\n\nReferencia normativa:\n- Ley N.º 2027, Estatuto del Funcionario Público.\n- Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal.\n- Reglamento Específico del Sistema de Administración de Personal (RE-SAP) de la Aduana Nacional.",
                "La planificación estratégica institucional contempla el fortalecimiento de la infraestructura y de las condiciones operativas en las zonas fronterizas. Sin embargo, de acuerdo con el diagnóstico realizado, no se identifican mecanismos sistemáticos que garanticen apoyos diferenciados al personal destinado a ubicaciones remotas, de alto riesgo o de difícil servicio, considerando las condiciones particulares de cada puesto. Esta situación evidencia una oportunidad de mejora en la gestión de las condiciones laborales y el bienestar del personal operativo.\n\nReferencia normativa: Plan Estratégico Institucional 2021-2025, relativo al fortalecimiento de la infraestructura fronteriza y los recursos humanos; Manual de Organización y Funciones de la Aduana Nacional, aprobado en diciembre de 2024, que contempla responsabilidades en materia de seguridad y salud ocupacional. \n\naduana.gob.bo",
                "La Aduana Nacional dispone de una estructura organizacional que establece responsabilidades para la administración del personal, así como instrumentos de planificación y capacitación orientados al fortalecimiento de las competencias institucionales. No obstante, aún no se cuenta con información suficiente para determinar si la dotación, las competencias y los recursos disponibles son adecuados respecto de las cargas de trabajo y las necesidades operativas, por lo que este criterio queda pendiente de evaluación.\n\nReferencia normativa: Manual de Organización y Funciones de la Aduana Nacional (2024); Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal; Plan Anual de Capacitación 2025."
              ],
              "text": "Proporcionar apoyo adecuado al personal en lugares remotos, de alto riesgo o de servicio difícil, sobre la base de criterios transparentes y condiciones operativas locales."
            },
            {
              "code": "KA3-P13",
              "evidence": "Normatividad de procedimientos de gestion de riesgos previo y durante el despacho\n",
              "evidence_delivered": false,
              "findings": "La institución cuenta con un marco normativo nacional que regula la gestión de recursos humanos y establece las bases para la evaluación del desempeño, el desarrollo del talento y la planificación de sucesiones. Asimismo, se realiza una evaluación anual del desempeño basada en metas individuales, lo que constituye un mecanismo formal de seguimiento a la gestión del personal. Sin embargo, se identifican oportunidades de mejora en la adaptación de la normativa a las particularidades de la administración aduanera y en la vinculación de las metas individuales con los objetivos estratégicos institucionales, dado que actualmente se definen principalmente a partir de entrevistas anuales y se concentran en aspectos operativos. Por otra parte, aunque el marco normativo contempla mecanismos de gestión del talento y planes de sucesión, la información recabada indica que su aplicación efectiva es limitada y que los procesos de promoción y ascenso no responden de manera sistemática a criterios de desempeño, mérito y competencias.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia es capaz la administración de establecer mecanismos de planificación de sucesión y gestión de talento para cargos técnicos, gerenciales y de liderazgo de importancia crítica, identificando funciones clave, posibles sucesores, lagunas en las competencias y medidas de desarrollo —incluidas capacitación, mentoría, coaching, movilidad y asignaciones de actuación— para garantizar la continuidad de los conocimientos, el liderazgo y el desempeño institucional en todas las operaciones, unidades o localidades pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_3_c7_q3",
              "indicator": "KPI [KA3-P13]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "lastModifiedAt": "2026-10-27T02:35:20.319Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Se cuenta con una normatividad a nivel nacional, aunque no cuentan con las particularidades aduaneras\n",
              "recommendations": "Implementar una Política Formal de Gestión del Talento y Planes de Sucesión para identificar puestos directivos y técnicos de criticidad alta, mapear potenciales sucesores internos y brindarles planes de desarrollo acelerado y pasantías antes de asumir la titularidad.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Se cuenta con una normatividad a nivel nacional, aunque no cuentan con las particularidades aduaneras\n",
                "Aunque en la teoría se establece que hay pñanes de suceciones y gestión del talento, han referido que ésto no es asi en la realidad",
                "Existe una evaluación del deseméño anual, alineada a metas individuales, sin embargo, éstas no necesariamente están alineadas a los objetivos institucionales."
              ],
              "text": "Establecer mecanismos de sucesión y gestión de talento para los cargos técnicos, gerenciales y de liderazgo de importancia crítica, identificando funciones clave, posibles sucesores, lagunas en las competencias y medidas de desarrollo —incluidas capacitación, mentoría, coaching, movilidad y tareas de actuación— para garantizar la continuidad de los conocimientos, el liderazgo y el desempeño institucional."
            }
          ],
          "title": "Gestión de carrera, movilidad, remuneración y retención"
        }
      ],
      "id": "pilar_3",
      "number": "3",
      "raw_title": "Recursos Humanos",
      "title": "3. Recursos Humanos"
    },
    {
      "assigned_evaluators": [
        "usr_4",
        "usr_2",
        "usr_1792525030420"
      ],
      "code": "KA4",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "assigned_to": "usr_4",
              "code": "KA4-P1",
              "evidence": "",
              "findings": "Incapacidad ",
              "guidance": "1. ¿Se documentan formalmente las responsabilidades de gobernanza, las facultades decisorias y los mecanismos de rendición de cuentas de las TIC?\n2. ¿Están acordes las prioridades TIC y las decisiones de asignación de recursos con los objetivos estratégicos y las prioridades operativas de las aduanas?\n3. ¿La gerencia examina periódicamente el riesgo TIC y se incorpora a la toma de decisiones en la gestión del riesgo TIC?",
              "id": "pilar_4_c1_q1",
              "indicator": "KPI [KA4-P1]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-27T22:43:55.185Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792439308749_bzmi",
                  "text": "Arquitectura centralizada, los demás se interconectan",
                  "timestamp": "2026-10-19T19:48:28.749Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1792439345261_i7e6",
                  "text": "Operadores de sistemas por zona, es propio",
                  "timestamp": "2026-10-19T19:49:05.261Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1792439411088_gchg",
                  "text": "Prioridad operativa para atender requerimientos",
                  "timestamp": "2026-10-19T19:50:11.088Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "edited": true,
                  "editedAt": "2026-10-27T22:43:55.185Z",
                  "editedBy": "Selvin Lemus",
                  "editedById": "usr_1",
                  "id": "note_1793140783788_7h8f",
                  "text": "Nivel de automatización alto, incluso más que muchas aduanas\nPero la informática no es un elemento central de las decisiones estratégicas\nLa Gerencia de TI tiene perfecta conciencia de las limitaciones personales (ser. 24hs), materiales (replicación-) y de otra índole.\nNo existe mecanismo formal que la integre en la alineación estratégica",
                  "timestamp": "2026-10-27T22:39:43.788Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                },
                {
                  "id": "note_1793140897208_4w03",
                  "text": "Tienen buenas acciones para seguir digitalizando, pero no se ha sido capaz de traducir el diagnóstico en estrategia en lo que respecta al fortalecimiento de las capacidades tecnológicas",
                  "timestamp": "2026-10-27T22:41:37.208Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Institucionalizar la gobernanza y la alineación estratégica de las TIC mediante responsabilidades claras, toma de decisiones, priorización, asignación de recursos, gestión de riesgos y supervisión acorde con los objetivos aduaneros, las necesidades operativas y las prioridades operativas."
            },
            {
              "assigned_to": "usr_4",
              "code": "KA4-P2",
              "evidence": "",
              "findings": "Falta de previsibilidad de los recursos para la implementación de nuevas tecnologías y reparación de carencias detectadas y reportadas, como las falencias en respaldo. Además, la falta de una planificación de proyectos institucionales de mediano y largo plazo, también dificultan la elaboración de una ruta de modernización más predecible.",
              "guidance": "1. ¿Mantiene la administración documentación de la estrategia TIC y de una hoja de ruta de modernización?\n2. ¿Define la hoja de ruta las prioridades, los plazos de implementación, las dependencias, los recursos y los beneficios esperados?\n3. ¿Se hace un seguimiento y se informa periódicamente sobre los avances con respecto a la hoja de ruta?",
              "id": "pilar_4_c1_q2",
              "indicator": "KPI [KA4-P2]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T22:45:49.594Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792440237757_vlfk",
                  "text": "Si hay una hoja de ruta electrónica",
                  "timestamp": "2026-10-19T20:03:57.757Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Mantener una estrategia TIC y una hoja de ruta de modernización que defina prioridades, secuenciación, dependencias, necesidades de recursos e inversión, beneficios esperados, riesgos de implementación, consideraciones de sostenibilidad y mecanismos de supervisión."
            },
            {
              "code": "KA4-P3",
              "evidence": "Ley General de Aduanas y los distintos reglamentos.",
              "findings": "",
              "guidance": "1. ¿Reconocen las leyes o normas las transacciones electrónicas y los registros digitales con fines aduaneros?\n2. ¿Las firmas electrónicas, notificaciones o evidencia digital están respaldadas por la ley y aceptadas operativamente?\n3. ¿Se incorporan requisitos de privacidad y protección de datos personales a los procesos aduaneros digitales?",
              "id": "pilar_4_c1_q3",
              "indicator": "KPI [KA4-P3]: % de personal aduanero evaluado por competencias y con plan anual de formación ejecutado.",
              "lastModifiedAt": "2026-10-27T22:47:11.273Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Garantizar una base legal y reglamentaria adecuada para los procesos aduaneros digitales que permita las transacciones electrónicas, los registros digitales, las firmas y notificaciones electrónicas, el procesamiento automatizado, las pruebas digitales y el intercambio de datos, al tiempo que se brindan salvaguardias adecuadas para la privacidad y la protección de datos personales."
            }
          ],
          "title": "Gobernanza y alineación estratégica"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA4-P4",
              "evidence": "Documento de arquitectura tecnológica, recibido.",
              "findings": "La carencia de la oferta a los usuarios de herramientas y funcionalidades como son un Data warehouse, data marts, gestión autonoma de reglas y soluciones de BI, deberían ser priorizadas.",
              "guidance": "1. ¿Se utiliza un marco de arquitectura institucional para orientar las inversiones tecnológicas y el desarrollo de sistemas?\n2. ¿Define la arquitectura normas para los procesos, aplicaciones, datos e infraestructura empresariales?\n3. ¿Exige el marco de arquitectura institucional que los paradigmas arquitectónicos modernos (como el MBP, microservicios y la orquestación de bajo código o operaciones) sustituyan a las plataformas heredadas rígidas y codificadas?\n4. ¿Define la arquitectura normas explícitas de usabilidad, interfaz y experiencia del usuario para garantizar que los sistemas entregados sean intuitivos para los funcionarios internos y los usuarios de la comunidad comercial?\n5. ¿Se diseñan e implementan las normas de integración arquitectónica e intercambio de datos para garantizar un procesamiento fluido de extremo a extremo y eliminar la dependencia de soluciones manuales fuera de línea?",
              "id": "pilar_4_c2_q1",
              "indicator": "KPI [KA4-P4]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T23:00:46.436Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792440576641_gpfa",
                  "text": "hay un linemiento para la arquitectura, estan migrando a software libre",
                  "timestamp": "2026-10-19T20:09:36.641Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer y mantener una arquitectura institucional que alinee los procesos institucionales, las aplicaciones, los datos, la infraestructura tecnológica, la seguridad, la interoperabilidad y las necesidades de servicio, y que oriente el desarrollo, adquisición, integración, modernización y retiro de las soluciones de TIC."
            },
            {
              "code": "KA4-P5",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Los proyectos tecnológicos se gestionan mediante procesos de gestión y gobernanza de proyectos documentados?\n2. ¿Se realizan sistemáticamente pruebas de pruebas, control del cambio, documentación y actividades de aceptación de los usuarios antes de implementarse?\n3. ¿Se lleva a cabo un seguimiento periódico del desempeño, los niveles de servicio, los resultados y las obligaciones contractuales de los proveedores?",
              "id": "pilar_4_c2_q2",
              "indicator": "KPI [KA4-P5]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T23:02:32.079Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792440644317_3xkf",
                  "text": "los norma el dtec supremo",
                  "timestamp": "2026-10-19T20:10:44.317Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1792440716474_zf8i",
                  "text": "Todo está hecho con recursos propio",
                  "timestamp": "2026-10-19T20:11:56.474Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1792440801741_zbn7",
                  "text": "Curva de aprendizaje grande",
                  "timestamp": "2026-10-19T20:13:21.741Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Gestionar las soluciones de TIC, proyectos, contratos y proveedores a lo largo de su ciclo de vida de la vida."
            },
            {
              "code": "KA4-P6",
              "evidence": "",
              "evidence_delivered": true,
              "evidence_delivery_date": "27 oct 2026",
              "findings": "La percepción de los usarios permite calificar el soporte de forma adecuado, no obstante esto se logra no de una forma sostenible sino en base a un esfuerzo extraordinario del staff. ",
              "guidance": "1. ¿Se ofrece a los usuarios capacitación periódica sobre los sistemas pertinentes a sus funciones?\n2. ¿Hay servicios de apoyo funcional y técnico a disposición de los usuarios?\n3. ¿Se utilizan las observaciones de los usuarios y las actividades de gestión del cambio para mejorar la adopción y reducir las soluciones manuales?\n4. ¿Las interfaces internas están diseñadas de forma intuitiva para facilitar las operaciones diarias y prevenir activamente la necesidad de soluciones fuera del sistema?\n5. ¿Pueden los equipos operativos gestionar, configurar o adaptar flujos de tareas mediante autoservicio y bajo código sin que las TIC tengan que reescribir el código heredado?",
              "id": "pilar_4_c2_q3",
              "indicator": "KPI [KA4-P6]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T23:41:46.973Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Mantener capacidades internas de TIC adecuadas y un apoyo eficaz al usuario."
            }
          ],
          "title": "Arquitectura, soluciones y capacidades"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA4-P7",
              "evidence": "",
              "findings": "Las estadísticas de disponibilidad de servicio muestan valores razonables, pero las carencias de infraestructura y otros recursos, tanto actuales como planificados, ponen en riesgo la disponibilidad y el rendimiento de los servicios TIC.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de garantizar la disponibilidad, capacidad, rendimiento y fiabilidad de la infraestructura, los sistemas y los servicios de TIC críticos en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan los acuerdos la gestión adecuada de la infraestructura, el seguimiento, el mantenimiento, la gestión de incidentes y problemas, la disposición a nivel de servicio y la resolución oportuna de fallos del sistema y limitaciones de rendimiento?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_4_c3_q1",
              "indicator": "KPI [KA4-P7]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T23:48:47.006Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Garantizar la disponibilidad, capacidad, rendimiento y fiabilidad de infraestructuras, sistemas y servicios de TIC críticos."
            },
            {
              "code": "KA4-P8",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se implementan controles de seguridad de la información para los sistemas y datos críticos?\n2. ¿Los derechos de acceso se gestionan mediante controles de acceso basados en funciones, autenticación sólida y segregación de funciones?\n3. ¿Se establecen y operan los procesos de registro, supervisión, respuesta a incidentes y recuperación?",
              "id": "pilar_4_c3_q2",
              "indicator": "KPI [KA4-P8]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-22T10:21:06.885Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Proteger los sistemas, servicios y datos críticos mediante un marco de seguridad de la información y ciberseguridad que abarca la gestión de identidades y accesos, autenticación estricta, segregación de funciones, registro y seguimiento, gestión de vulnerabilidades y parches, pruebas de seguridad, controles de privacidad, y detección, respuesta y recuperación de ciberincidentes."
            },
            {
              "code": "KA4-P9",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Existen planes documentados de continuidad de las operaciones y recuperación ante desastres para los sistemas críticos?\n2. ¿Se mantienen copias de seguridad, mecanismos de replicación y procedimientos de recuperación con regularidad?\n3. ¿Se prueban periódicamente la continuidad y los mecanismos de recuperación?",
              "id": "pilar_4_c3_q3",
              "indicator": "KPI [KA4-P9]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-22T10:21:12.018Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Garantizar la continuidad de las operaciones, la recuperación ante desastres y la resiliencia operativa de los sistemas, servicios y datos de TIC críticos."
            }
          ],
          "title": "Seguridad, continuidad y resiliencia"
        },
        {
          "code": "C4",
          "id": "c4",
          "questions": [
            {
              "code": "KA4-P10",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Las transacciones aduaneras principales se procesan a través de sistemas electrónicos en lugar de procedimientos impresos?\n2. ¿Facilitan los sistemas la captura, validación, procesamiento, almacenamiento y trazabilidad de las transacciones aduaneras?\n3. ¿Se han reducido las soluciones manuales mediante la automatización y la integración de sistemas?\n4. ¿Las operaciones principales aduaneras se organizan mediante plataformas modernas de bajo código, orientadas a procesos, que permiten el desarrollo rápido de aplicaciones y la automatización de procesos, en lugar de depender de tecnologías heredadas codificadas en tiempo real?",
              "id": "pilar_4_c4_q1",
              "indicator": "KPI [KA4-P10]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-22T10:21:19.393Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Digitalizar, automatizar y respaldar el uso eficaz de los principales sistemas aduaneros en todos los procesos operativos y de la oficina auxiliar a fin de registrar, validar, procesar, almacenar y rastrear declaraciones, documentos de respaldo, pagos, devoluciones, garantías, licencias, permisos, certificados y otras transacciones aduaneras, minimizando al mismo tiempo el uso de procesos manuales o paralelos."
            },
            {
              "code": "KA4-P11",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Los sistemas registran y supervisan los derechos aduaneros, impuestos, exenciones y regímenes especiales?\n2. ¿Puede la administración hacer un seguimiento de eventos operativos tales como depósito, tránsito, detenciones y notificaciones mediante los registros del sistema?\n3. ¿Se utilizan controles automatizados para respaldar el seguimiento del cumplimiento y las actividades de cumplimiento?",
              "id": "pilar_4_c4_q2",
              "indicator": "KPI [KA4-P11]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-22T10:21:38.513Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Proporcionar capacidades integradas en sistemas para administrar y supervisar las obligaciones, los procedimientos y los eventos operacionales aduaneros."
            },
            {
              "assigned_to": "usr_4",
              "code": "KA4-P12",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Hay servicios en línea seguros disponibles para que los operadores y otros usuarios externos puedan realizar transacciones y pagos electrónicos?\n2. ¿Todos los servicios externos críticos están diseñados con normas modernas de funcionalidad que faciliten interacciones intuitivas de autoservicio para la comunidad comercial?\n3. ¿Todos los datos y solicitudes críticos presentados por usuarios externos se integran directamente en los flujos de trabajo centrales automatizados sin tener que ser procesados manualmente, reingresar o evitar soluciones extraterritoriales por parte del personal de la aduana?\n4. ¿Facilita la plataforma digital la interoperabilidad completa y moderna entre sistemas (como las API) que permita a los operadores comerciales externos integrar sus propios sistemas informáticos sin problema con los procesos aduaneros?\n5. ¿Existe un nivel efectivo de integración con los usuarios externos mediante notificaciones automatizadas y oportunas que los actualicen de manera proactiva sobre el estado de la transacción y las acciones que deben tomarse durante el proceso de autorización?",
              "id": "pilar_4_c4_q3",
              "indicator": "KPI [KA4-P12]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T02:17:05.241Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Ofrecer servicios digitales seguros y orientados al usuario para los operadores y otros usuarios externos."
            },
            {
              "code": "KA4-P13",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Están los sistemas aduaneros conectados de manera electrónica con los organismos gubernamentales pertinentes o con plataformas externas?\n2. ¿El intercambio automático de información respalda actividades de validación, cumplimiento o control fronterizo?\n3. ¿Ha reducido la interoperabilidad la presentación de datos duplicados o el intercambio manual de información?",
              "id": "pilar_4_c4_q4",
              "indicator": "KPI [KA4-P13]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-22T10:21:47.027Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Facilitar la interoperabilidad segura y el intercambio coordinado de información entre los sistemas aduaneros y con la administración tributaria, otros organismos fronterizos y gubernamentales, administraciones aduaneras y plataformas externas pertinentes."
            },
            {
              "code": "KA4-P14",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Ha adoptado y desplegado la administración nuevas tecnologías para respaldar las operaciones aduaneras o las funciones de control?\n2. ¿Se definieron los requisitos empresariales, los cambios de procesos y los requisitos de integración antes de implementarse?\n3. ¿Están las tecnologías integradas con los sistemas, flujos de datos y procesos operativos pertinentes?\n4. ¿Existen mecanismos de apoyo operativo, mantenimiento, capacitación del usuario y gestión del cambio para las tecnologías desplegadas?",
              "id": "pilar_4_c4_q5",
              "indicator": "KPI [KA4-P14]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-22T10:22:00.316Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Evaluar, adoptar y operacionalizar tecnologías emergentes que aporten valor demostrable a los procesos y servicios aduaneros."
            }
          ],
          "title": "Integración operativa, servicios digitales y automatización"
        },
        {
          "code": "C5",
          "id": "c5",
          "questions": [
            {
              "code": "KA4-P15",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se emplean indicadores y tableros de control para monitorear el rendimiento de los procesos facilitados por la tecnología?\n2. ¿Se comunica periódicamente a la gerencia información sobre la disponibilidad del sistema, los niveles de servicio, la seguridad y los resultados operativos?\n3. ¿Se utilizan los resultados para identificar debilidades y impulsar mejoras operativas o tecnológicas?",
              "id": "pilar_4_c5_q1",
              "indicator": "KPI [KA4-P15]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-22T10:22:05.609Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Supervisar el desempeño, la disponibilidad, la seguridad, el uso, la calidad del servicio, los costos, los riesgos y las ventajas de los sistemas de TIC y los procesos facilitados por la tecnología."
            }
          ],
          "title": "Supervisión del desempeño y supervisión de la gerencia"
        }
      ],
      "id": "pilar_4",
      "number": "4",
      "raw_title": "Tecnología de la Información y las Comunicaciones",
      "title": "4. Tecnología de la Información y las Comunicaciones"
    },
    {
      "assigned_evaluators": [
        "usr_4",
        "usr_2",
        "usr_1792525030420"
      ],
      "code": "KA5",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA5-P1",
              "evidence": "Se solicitaron las carátulas e indices de los procesos certificados\n\nLa Aduana Nacional renovó su certificación ISO 9001:2015 el 15 de octubre de 2026, otorgada por ICONTEC. La institución informa que esta recertificación comprende procesos y servicios a nivel nacional. \n\nAdemás, la publicación institucional del 17 de marzo de 2025 identifica expresamente dentro del alcance los procesos de recaudación, trámites y operaciones aduaneras, instrumentos de control, lucha contra el contrabando, disposición de mercancías y gestión y ejecución tributaria aduanera, respaldados por procesos estratégicos y de apoyo. \n\nEsto nos permite fortalecer la valoración positiva del sistema de gestión de calidad, aunque sigue sin acreditar por sí mismo la existencia de una estrategia integral de gobierno de datos.\nReferencias oficiales complementarias\n- Aduana Nacional – Renovación ISO 9001:2015, octubre de 2026\n- Aduana Nacional – Alcance y auditoría del Sistema de Gestión de Calidad\n- Aduana Nacional – Gestión de la Calidad\n- Aduana Nacional – Sistema SUMA\n- Ley N.º 1178 – Administración y Control Gubernamentales",
              "findings": "La Aduana Nacional de Bolivia presenta fortalezas importantes en la administración de información, sustentadas en el desarrollo y consolidación del SUMA y en la implementación de un sistema de gestión de calidad bajo la norma ISO 9001:2015. Estas capacidades han favorecido la estructuración, estandarización y seguimiento de los procesos institucionales, constituyendo una base sólida para avanzar hacia un modelo integral de gobierno de datos. Sin embargo, las prácticas existentes mantienen un enfoque predominantemente tecnológico y operativo, sin que se haya identificado una estrategia formal que reconozca y gestione la información como un activo estratégico. Se considera necesario aprovechar las capacidades existentes para evolucionar hacia un modelo de gobernanza transversal que fortalezca la calidad, integridad, disponibilidad y aprovechamiento analítico de los datos, orientado a mejorar la gestión de riesgos, la fiscalización, la facilitación del comercio y la toma de decisiones institucionales.",
              "guidance": "1. ¿Ha aprobado formalmente la administración un marco de gestión de gobierno y análisis de datos alineado con sus objetivos estratégicos?\n2. ¿Define el marco principios, alcance, prioridades, recursos, cronogramas de implementación, mecanismos de supervisión y mecanismos de examen periódico?\n3. ¿Se aplica el marco en todas las funciones aduaneras pertinentes, desde la creación de datos hasta la retención, uso, intercambio y eliminación?\n4. ¿Se revisan periódicamente los avances y los resultados de la aplicación, y se utilizan para actualizar el marco?",
              "id": "pilar_5_c1_q1",
              "indicator": "KPI [KA5-P1]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-26T22:21:52.897Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional de Bolivia presenta avances importantes en la gestión de información, sustentados en el desarrollo y consolidación del SUMA, así como en la implementación de un sistema de gestión de calidad bajo la norma ISO 9001:2015. Estas capacidades han favorecido la estructuración, documentación y estandarización de los procesos institucionales. Sin embargo, no se identificó evidencia de la aprobación formal de una estrategia integral de gobierno y análisis de datos alineada con los objetivos institucionales. Las prácticas existentes mantienen un enfoque predominantemente tecnológico y operativo, sin que se observe una estrategia transversal orientada a reconocer y gestionar la información como un activo estratégico para fortalecer la gestión de riesgos, la fiscalización y la toma de decisiones.\n\nReferencias normativas y documentales:\n- Ley N.º 1178 de Administración y Control Gubernamentales, artículo 1, sobre la generación de información útil, oportuna y confiable.\n- Ley N.º 164, artículos 75 y 76, relativos al gobierno electrónico y las tecnologías de información.\n- ISO 9001:2015, numerales 4.4 y 6.2, sobre gestión de procesos y objetivos de calidad.\n- Aduana Nacional, documentación institucional del SUMA.",
              "notes_history": [
                {
                  "id": "note_1793037347980_77hn",
                  "text": "Si tienen arquitectura",
                  "timestamp": "2026-10-26T17:55:47.980Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1793037383328_7bl5",
                  "text": "Preocupa la alta disponibilidad, todo esta centralizado",
                  "timestamp": "2026-10-26T17:56:23.328Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1793052632903_z1tn",
                  "text": "128 sistemas\n77 servicios\nArquitectura centralizada\n638 servidores virtuales\nAlta disponibilidad SUMA\nOnpremise\nLogos de auditoría\nMonitoreo 4x7\nResolución directorio",
                  "timestamp": "2026-10-26T22:10:32.903Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "Diseñar e implementar una estrategia institucional de gobierno y análisis de datos, alineada con los objetivos estratégicos de la Aduana Nacional, que aproveche las capacidades tecnológicas del SUMA y los mecanismos de gestión, seguimiento y mejora continua establecidos bajo la norma ISO 9001:2015.\n\nLa estrategia debería contemplar la designación de responsables institucionales de los datos, la definición de políticas y estándares de calidad, integridad, seguridad e interoperabilidad, así como mecanismos para administrar su ciclo de vida. Asimismo, se recomienda establecer un comité multidisciplinario de gobierno de datos, con participación de las áreas operativas, tecnológicas, de fiscalización y gestión de riesgos, responsable de definir prioridades, supervisar su implementación y evaluar periódicamente los resultados mediante indicadores que permitan medir el aprovechamiento de la información y su contribución a los objetivos institucionales.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional de Bolivia presenta avances importantes en la gestión de información, sustentados en el desarrollo y consolidación del SUMA, así como en la implementación de un sistema de gestión de calidad bajo la norma ISO 9001:2015. Estas capacidades han favorecido la estructuración, documentación y estandarización de los procesos institucionales. Sin embargo, no se identificó evidencia de la aprobación formal de una estrategia integral de gobierno y análisis de datos alineada con los objetivos institucionales. Las prácticas existentes mantienen un enfoque predominantemente tecnológico y operativo, sin que se observe una estrategia transversal orientada a reconocer y gestionar la información como un activo estratégico para fortalecer la gestión de riesgos, la fiscalización y la toma de decisiones.\n\nReferencias normativas y documentales:\n- Ley N.º 1178 de Administración y Control Gubernamentales, artículo 1, sobre la generación de información útil, oportuna y confiable.\n- Ley N.º 164, artículos 75 y 76, relativos al gobierno electrónico y las tecnologías de información.\n- ISO 9001:2015, numerales 4.4 y 6.2, sobre gestión de procesos y objetivos de calidad.\n- Aduana Nacional, documentación institucional del SUMA.",
                "Hallazgo: La Aduana Nacional dispone de estructuras organizativas, procedimientos y mecanismos de seguimiento asociados con la administración de sus sistemas de información y la gestión de calidad, lo que constituye una fortaleza para la organización y supervisión de sus procesos. No obstante, al no identificarse un marco integral de gobierno de datos, tampoco se cuenta con evidencia de una definición articulada de principios, prioridades, responsabilidades, recursos, cronogramas y mecanismos de supervisión específicos para su implementación. Si bien la certificación ISO 9001:2015 aporta mecanismos de control y mejora continua dentro de su alcance, no se ha demostrado que estos se encuentren integrados en una estrategia institucional de aprovechamiento y gestión de los datos.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 6 y 7, sobre programación de operaciones y organización administrativa.\n- Decreto Supremo N.º 3251, relativo a la implementación del gobierno electrónico.\n- ISO 9001:2015, numerales 5.3, 6.2, 7.1 y 9.3, relacionados con responsabilidades, objetivos, recursos y revisión por la dirección.",
                "Hallazgo: El desarrollo del SUMA ha permitido establecer prácticas estructuradas para la captura, procesamiento, almacenamiento y utilización de información en los principales procesos aduaneros. Adicionalmente, la certificación ISO 9001:2015 representa un antecedente favorable en materia de documentación, control y trazabilidad de los procesos comprendidos en su alcance. Sin embargo, estas capacidades responden principalmente a necesidades operativas y tecnológicas, sin evidencia suficiente de un modelo transversal que abarque integralmente el ciclo de vida de los datos en todas las funciones institucionales. Particularmente, no se identificaron mecanismos comunes para administrar la calidad, integridad, interoperabilidad, conservación, aprovechamiento analítico y eliminación de la información bajo una estructura de gobernanza institucional.\n\nReferencias normativas y documentales:\n- Ley N.º 164, artículos 75 y 76, sobre gobierno electrónico y tecnologías de información.\n- Decreto Supremo N.º 3251, sobre el marco de gobierno electrónico.\n- ISO 9001:2015, numerales 7.5 y 8.1, relacionados con información documentada y planificación y control operacional.\n- Aduana Nacional, documentación institucional del SUMA.",
                "Hallazgo: La evolución del SUMA y la implementación de un sistema de gestión de calidad bajo la norma ISO 9001:2015 reflejan capacidades institucionales para el seguimiento, evaluación y mejora de los procesos. La norma contempla mecanismos de auditoría interna, revisión por la dirección y mejora continua que constituyen una base favorable para fortalecer la supervisión institucional. Sin embargo, no se identificó evidencia de que estos mecanismos se utilicen para evaluar periódicamente la implementación y efectividad de una estrategia integral de gobierno de datos, ni de indicadores específicos que permitan medir la calidad, disponibilidad y aprovechamiento estratégico de la información. El seguimiento parece concentrarse principalmente en el funcionamiento de los sistemas y los procesos operativos, sin que se observe una evaluación sistemática del valor generado por los datos para los objetivos institucionales.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 13 y 19, relativos al control gubernamental y la evaluación de resultados.\n- ISO 9001:2015, numerales 9.1, 9.2, 9.3 y 10.3, sobre seguimiento, auditoría interna, revisión por la dirección y mejora continua.\n- Decreto Supremo N.º 3251, sobre seguimiento de la implementación del gobierno electrónico."
              ],
              "text": "Adoptar e implementar un marco de gobernanza en materia de datos y análisis acorde con los objetivos estratégicos de la administración aduanera, con principios claros, alcance, acuerdos institucionales, prioridades, recursos, cronogramas de implementación, mecanismos de supervisión y mecanismos para el examen periódico a lo largo de todo el ciclo de vida de los datos"
            },
            {
              "assigned_to": "usr_2",
              "code": "KA5-P2",
              "evidence": "- Ley N.º 1178 de Administración y Control Gubernamentales: https://www.contraloria.gob.bo/wp-content/uploads/2022/06/20121217_319.pdf\n- Ley N.º 164 de Telecomunicaciones, Tecnologías de Información y Comunicación: https://www.lexivox.org/norms/BO-L-N164.html\n- Decreto Supremo N.º 3251 de Gobierno Electrónico: https://agetic.gob.bo/sites/default/files/2025-06/decreto-supremo-3251.pdf\n- Norma ISO 9001:2015, Sistemas de Gestión de la Calidad: https://www.iso.org/standard/62085.html\n- Aduana Nacional de Bolivia, Sistema SUMA: https://www.aduana.gob.bo/infosuma/suma.php\n",
              "evidence_delivered": true,
              "evidence_delivery_date": "26 oct 2026",
              "findings": "La Aduana Nacional de Bolivia presenta avances relevantes en la asignación de responsabilidades para la administración y custodia de la información, sustentados en una distribución funcional entre la Gerencia Nacional de Normas y la Gerencia de Sistemas, así como en los procedimientos asociados a la certificación ISO 9001:2015. Estas prácticas constituyen una fortaleza institucional y proporcionan una base organizativa para avanzar hacia un modelo integral de gobierno de datos. Sin embargo, la distribución actual de responsabilidades mantiene un enfoque predominantemente operativo y tecnológico, sin evidencia suficiente de una estructura transversal que incorpore de manera sistemática la gestión de calidad, integridad, acceso, protección, intercambio y aprovechamiento analítico de los datos en todas las áreas institucionales\n\nNota metodológica: Las responsabilidades atribuidas a las gerencias se basan en la información recabada durante el diagnóstico. Las referencias normativas constituyen criterios de evaluación y no acreditan, por sí mismas, la asignación específica de propiedad o custodia de datos dentro de la Aduana Nacional..",
              "guidance": "1. ¿Se asignan formalmente responsabilidades de propiedad, administración y coordinación de los datos para los principales conjuntos de datos y procesos aduaneros?\n2. ¿Se entienden y aplican las funciones y responsabilidades en las funciones de negocios, tecnología, análisis y control?\n3. ¿Son los propietarios o administradores responsables de la calidad, el acceso, la protección, el intercambio y el uso de los datos?\n4. ¿Existe un mecanismo de coordinación activa para resolver cuestiones de gobernanza de datos interfuncionales?",
              "id": "pilar_5_c1_q2",
              "indicator": "KPI [KA5-P2]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-26T22:28:40.837Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con una distribución de responsabilidades para la administración de la información, identificando a la Gerencia Nacional de Normas como responsable de su propiedad funcional y a la Gerencia de Sistemas como responsable de su custodia tecnológica. Esta estructura se encuentra respaldada por las prácticas de documentación y asignación de responsabilidades asociadas al sistema de gestión de calidad ISO 9001:2015. Sin embargo, no se identificó evidencia suficiente de que estas responsabilidades se encuentren formalmente definidas para los principales conjuntos de datos institucionales, particularmente en lo relacionado con su calidad, integridad, disponibilidad y aprovechamiento estratégico.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 7 y 13, relativos a la organización administrativa y los mecanismos de control interno.\n- ISO 9001:2015, numeral 5.3, sobre roles, responsabilidades y autoridades en la organización.\n- ISO 9001:2015, numeral 7.5, relativo al control de la información documentada.",
              "recommendations": "Formalizar y fortalecer un modelo institucional de responsabilidades para el gobierno de datos, aprovechando la estructura organizativa existente y los mecanismos de gestión establecidos bajo ISO 9001:2015. Se recomienda definir propietarios funcionales y custodios tecnológicos para los principales conjuntos de datos, establecer responsabilidades específicas sobre su calidad, integridad, acceso, protección e intercambio, e incorporar a las áreas operativas, de fiscalización y gestión de riesgos en los procesos de administración y aprovechamiento de la información. Asimismo, se propone establecer un mecanismo de coordinación transversal que permita resolver problemas interfuncionales, definir prioridades y supervisar el cumplimiento de las políticas de gobierno de datos, mediante indicadores y evaluaciones periódicas.",
              "score": 3,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con una distribución de responsabilidades para la administración de la información, identificando a la Gerencia Nacional de Normas como responsable de su propiedad funcional y a la Gerencia de Sistemas como responsable de su custodia tecnológica. Esta estructura se encuentra respaldada por las prácticas de documentación y asignación de responsabilidades asociadas al sistema de gestión de calidad ISO 9001:2015. Sin embargo, no se identificó evidencia suficiente de que estas responsabilidades se encuentren formalmente definidas para los principales conjuntos de datos institucionales, particularmente en lo relacionado con su calidad, integridad, disponibilidad y aprovechamiento estratégico.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 7 y 13, relativos a la organización administrativa y los mecanismos de control interno.\n- ISO 9001:2015, numeral 5.3, sobre roles, responsabilidades y autoridades en la organización.\n- ISO 9001:2015, numeral 7.5, relativo al control de la información documentada.",
                "Hallazgo: La distribución de funciones entre las áreas normativas y tecnológicas refleja una delimitación de responsabilidades que favorece la administración y operación de los sistemas de información. Asimismo, la implementación de ISO 9001:2015 contribuye a la estandarización y documentación de los procesos, facilitando el conocimiento de las responsabilidades institucionales. No obstante, no se cuenta con evidencia suficiente de que estas funciones se encuentren articuladas transversalmente con las áreas de análisis, fiscalización y gestión de riesgos, particularmente en lo relacionado con la definición de requerimientos, validación de información y aprovechamiento analítico de los datos.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 7 y 13, sobre organización administrativa y control interno.\n- ISO 9001:2015, numerales 5.3 y 7.4, relacionados con responsabilidades institucionales y comunicación.\n- ISO 9001:2015, numeral 7.2, relativo a las competencias del personal.",
                "Hallazgo: La Aduana Nacional dispone de mecanismos de administración, custodia y protección de la información, asociados principalmente con la operación del SUMA y los procedimientos institucionales de gestión de calidad. La asignación de responsabilidades entre las áreas normativas y tecnológicas constituye una fortaleza para el control de los datos. Sin embargo, no se identificó evidencia suficiente de una distribución formal e integral de responsabilidades que abarque la calidad, el acceso, la protección, el intercambio y el aprovechamiento analítico de la información, ni de indicadores que permitan evaluar sistemáticamente el cumplimiento de estas funciones por parte de los responsables de los datos.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 13, sobre información confiable y control gubernamental.\n- Ley N.º 164, artículos 75 y 76, relativos al gobierno electrónico y las tecnologías de información.\n- ISO 9001:2015, numerales 7.5 y 9.1, sobre control de la información documentada y seguimiento, medición, análisis y evaluación.",
                "Hallazgo: La Aduana Nacional cuenta con mecanismos de coordinación entre las áreas normativas y tecnológicas para la administración, protección e intercambio de información, apoyados en los procedimientos establecidos dentro de su sistema de gestión de calidad ISO 9001:2015. Estas prácticas representan una base favorable para la coordinación institucional. Sin embargo, no se identificó evidencia de un mecanismo formal y transversal de gobierno de datos que incorpore sistemáticamente a las áreas operativas, de fiscalización, gestión de riesgos y análisis, con atribuciones específicas para resolver problemas de calidad, establecer prioridades de información, autorizar intercambios y supervisar el aprovechamiento estratégico de los datos.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 7 y 13, sobre organización administrativa y control interno.\n- ISO 9001:2015, numerales 5.3, 7.4 y 9.3, relativos a responsabilidades, comunicación y revisión por la dirección.\n- Decreto Supremo N.º 3251, relacionado con la implementación del gobierno electrónico y la coordinación institucional."
              ],
              "text": "Asignar de forma clara responsabilidades de propiedad, custodia y coordinación de datos para la gestión, protección, intercambio y"
            }
          ],
          "title": "Gobernanza, estrategia y mecanismos institucionales"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA5-P3",
              "evidence": "Ley N.º 1178 de Administración y Control Gubernamentales: https://www.contraloria.gob.bo/wp-content/uploads/2022/06/20121217_319.pdf\n\nLey N.º 164 de Telecomunicaciones, Tecnologías de Información y Comunicación: https://www.lexivox.org/norms/BO-L-N164.html\n\nNorma ISO 9001:2015, Sistemas de Gestión de la Calidad: https://www.iso.org/standard/62085.html\n\nDAMA International, DAMA-DMBOK2 – Data Management Body of Knowledge: https://www.dama.org/cpages/body-of-knowledge\n\nAduana Nacional de Bolivia, Sistema SUMA: https://www.aduana.gob.bo/infosuma/suma.php",
              "evidence_delivered": true,
              "evidence_delivery_date": "26 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con capacidades relevantes para la documentación técnica de sus sistemas de información, particularmente mediante los catálogos asociados al SUMA, que permiten identificar y administrar las estructuras de datos utilizadas en los procesos aduaneros. Sin embargo, estos instrumentos mantienen un enfoque predominantemente tecnológico, orientado a documentar campos y estructuras de bases de datos, sin incorporar integralmente los componentes de negocio y gobernanza necesarios para gestionar la información como un activo institucional. Se identifican oportunidades de mejora en la incorporación de glosarios de negocio, clasificación de datos críticos, identificación de responsables, trazabilidad, requisitos de calidad, restricciones de acceso y gestión del ciclo de vida de la información, así como en el establecimiento de mecanismos periódicos para su actualización.",
              "guidance": "1. ¿Mantiene la administración un catálogo o inventario de datos institucionales que abarque las principales fuentes de datos internos y externos?\n2. ¿Identifica en el catálogo el origen de los datos, el contenido, la importancia crítica, los requisitos de calidad, las restricciones de uso, los propietarios o administradores y las normas de retención?\n3. ¿Se documentan y aplican las normas de acceso, intercambio, confidencialidad y utilización en los conjuntos de datos catalogados?\n4. ¿El catálogo se revisa y actualiza periódicamente para reflejar cambios en los sistemas, procesos y utilización de datos?",
              "id": "pilar_5_c2_q1",
              "indicator": "KPI [KA5-P3]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-26T22:33:21.425Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con un catálogo de datos asociado a sus sistemas de información, particularmente al SUMA, que permite documentar las estructuras, campos y características técnicas de la información utilizada en los procesos aduaneros. Esta práctica constituye una fortaleza para la administración y mantenimiento de sus sistemas tecnológicos. Sin embargo, de acuerdo con lo señalado durante las entrevistas, el catálogo responde principalmente a un enfoque técnico de documentación de bases de datos, sin incorporar elementos propios de un catálogo institucional de datos, como un glosario de negocio, la identificación integral de fuentes internas y externas o la clasificación de la información según su importancia estratégica para las distintas funciones aduaneras.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, sobre la generación de información útil, oportuna y confiable para la gestión pública.\n- ISO 9001:2015, numerales 4.4 y 7.5, relativos a la gestión de procesos y el control de la información documentada.\n- DAMA-DMBOK2, área de conocimiento de gestión de metadatos, como referencia internacional para la administración de catálogos de datos.",
              "notes_history": [
                {
                  "id": "note_1793038229248_8c4f",
                  "text": "Tipo de dato\nNo hay definido un ciclo de vida de los datos\nSi hay un ambiente be para analiticaa",
                  "timestamp": "2026-10-26T18:10:29.248Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1793038275881_8j1f",
                  "text": "No ha}}ha y un ciclo de vida de la info",
                  "timestamp": "2026-10-26T18:11:15.881Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1793038328420_tknm",
                  "text": "Base de datos en momgodb",
                  "timestamp": "2026-10-26T18:12:08.420Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1793038340301_zlkk",
                  "text": "DBs de explotación progress",
                  "timestamp": "2026-10-26T18:12:20.301Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1793038413116_94sb",
                  "text": "BD en postgres y otras bases todavía como como Oracle",
                  "timestamp": "2026-10-26T18:13:33.116Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1793038888101_za4s",
                  "text": ", GIBLABSistema GREC gestor de retenimiento.",
                  "timestamp": "2026-10-26T18:21:28.101Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1793038959317_yyip",
                  "text": "Calidad clásica de sistemas",
                  "timestamp": "2026-10-26T18:22:39.317Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "Evolucionar el catálogo técnico existente hacia un catálogo institucional de datos, aprovechando las capacidades tecnológicas y de documentación desarrolladas en el SUMA y los mecanismos de control documental establecidos bajo ISO 9001:2015. Se recomienda incorporar progresivamente metadatos de negocio y de gobernanza, incluyendo definiciones funcionales, fuentes de origen, propietarios y custodios, clasificación de criticidad y confidencialidad, reglas de calidad, restricciones de acceso e intercambio, trazabilidad y periodos de conservación. Asimismo, establecer un procedimiento formal de actualización y validación periódica, con participación de las áreas operativas, normativas, tecnológicas, de fiscalización y gestión de riesgos, priorizando los conjuntos de datos de mayor relevancia institucional.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con un catálogo de datos asociado a sus sistemas de información, particularmente al SUMA, que permite documentar las estructuras, campos y características técnicas de la información utilizada en los procesos aduaneros. Esta práctica constituye una fortaleza para la administración y mantenimiento de sus sistemas tecnológicos. Sin embargo, de acuerdo con lo señalado durante las entrevistas, el catálogo responde principalmente a un enfoque técnico de documentación de bases de datos, sin incorporar elementos propios de un catálogo institucional de datos, como un glosario de negocio, la identificación integral de fuentes internas y externas o la clasificación de la información según su importancia estratégica para las distintas funciones aduaneras.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, sobre la generación de información útil, oportuna y confiable para la gestión pública.\n- ISO 9001:2015, numerales 4.4 y 7.5, relativos a la gestión de procesos y el control de la información documentada.\n- DAMA-DMBOK2, área de conocimiento de gestión de metadatos, como referencia internacional para la administración de catálogos de datos.",
                "allazgo: El catálogo existente permite identificar elementos técnicos de las bases de datos, como campos, tipos de datos y estructuras utilizadas por los sistemas institucionales, facilitando su administración y mantenimiento. No obstante, según la información proporcionada durante las entrevistas, no incorpora de manera integral metadatos de negocio y de gobernanza que permitan identificar el significado funcional de la información, su origen, criticidad, requisitos de calidad, restricciones de uso, responsables y periodos de conservación. Esta limitación dificulta establecer una visión institucional del ciclo de vida de los datos y su utilización bajo criterios comunes de gestión y control.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 13, relativos a la confiabilidad de la información y el control gubernamental.\n- ISO 9001:2015, numeral 7.5, sobre identificación, disponibilidad, protección, conservación y disposición de la información documentada.\n- DAMA-DMBOK2, áreas de gestión de metadatos, calidad de datos y gobierno de datos.",
                "Hallazgo: La Aduana Nacional dispone de mecanismos tecnológicos y procedimientos institucionales para administrar el acceso, protección e intercambio de información, apoyados en la operación del SUMA y en las prácticas de control documental asociadas a ISO 9001:2015. Sin embargo, no se identificó evidencia de que estas disposiciones se encuentren integradas y documentadas sistemáticamente dentro del catálogo de datos, mediante atributos que permitan identificar los niveles de confidencialidad, restricciones de acceso, condiciones de intercambio y reglas de utilización para cada conjunto de información. En consecuencia, los controles existentes parecen administrarse principalmente desde los sistemas tecnológicos, sin una vinculación integral con un modelo institucional de clasificación y gobernanza de datos.\n\nReferencias normativas y documentales:\n- Ley N.º 164, artículos 75 y 76, relacionados con el gobierno electrónico y el uso de tecnologías de información.\n- ISO 9001:2015, numeral 7.5.3, sobre control de la información documentada, incluyendo acceso, recuperación, almacenamiento, conservación y disposición.\n- DAMA-DMBOK2, áreas de seguridad de datos y gestión de metadatos.",
                "Cada unidad de neHallazgo: La evolución y mantenimiento del SUMA requieren prácticas de actualización de las estructuras y documentación técnica de sus sistemas, lo que constituye una base favorable para mantener vigente la información tecnológica. Sin embargo, durante las entrevistas no se identificó evidencia suficiente de un procedimiento formal de revisión periódica del catálogo desde una perspectiva institucional de gobierno de datos, que incorpore cambios en las definiciones de negocio, fuentes de información, responsables, criterios de calidad, restricciones de uso y periodos de conservación. En este sentido, las actualizaciones parecen responder principalmente a modificaciones tecnológicas y operativas, más que a un proceso sistemático de mantenimiento de metadatos de negocio y gobernanza.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, sobre mecanismos de control interno y supervisión.\n- ISO 9001:2015, numerales 7.5.2 y 7.5.3, relacionados con la creación, actualización y control de la información documentada.\n- DAMA-DMBOK2, área de gestión de metadatos, sobre mantenimiento y actualización de los activos de información.gocio es dueño del sistema\n"
              ],
              "text": "Mantener catálogos de datos institucionales, inventarios y reglas de clasificación que identifiquen las principales fuentes de datos, los orígenes, el contenido, la importancia crítica, los requisitos de calidad, las restricciones de uso, la responsabilidad de los propietarios o administradores y las normas de acceso, intercambio, retención, confidencialidad y uso."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA5-P4",
              "evidence": "Ley N.º 1178 de Administración y Control Gubernamentales: https://www.contraloria.gob.bo/wp-content/uploads/2022/06/20121217_319.pdf\n\nISO 9001:2015, Sistemas de Gestión de la Calidad: https://www.iso.org/standard/62085.html\n\nDAMA International, DAMA-DMBOK2 – Data Management Body of Knowledge: https://www.dama.org/cpages/body-of-knowledge\n\nAduana Nacional de Bolivia, Sistema SUMA: https://www.aduana.gob.bo/infosuma/suma.php",
              "evidence_delivered": true,
              "evidence_delivery_date": "26 oct 2026",
              "findings": "La Aduana Nacional de Bolivia presenta fortalezas en la administración tecnológica de la información, sustentadas en el desarrollo del SUMA y en las prácticas de control, seguimiento y mejora continua asociadas con la certificación ISO 9001:2015. Estas capacidades han favorecido la incorporación de validaciones operativas y mecanismos para supervisar el desempeño de los sistemas. Sin embargo, no se identificó un modelo integral de gestión de calidad de datos que permita evaluar sistemáticamente su integridad, exactitud, consistencia, oportunidad y fiabilidad. Los mecanismos existentes se concentran principalmente en el funcionamiento de las soluciones tecnológicas, sin indicadores específicos sobre la calidad de la información ni procedimientos transversales para identificar, corregir y prevenir inconsistencias. Esta situación limita el aprovechamiento confiable de los datos para la gestión de riesgos, la fiscalización, el análisis institucional y la toma de decisiones.\n\nNota metodológica: Los hallazgos se basan en la información proporcionada durante las entrevistas. La existencia de validaciones técnicas y mecanismos de gestión de calidad no demuestra, por sí misma, que exista un programa institucional de calidad de datos. Las referencias normativas y técnicas se presentan como criterios de evaluación, sin atribuirles obligaciones específicas que no establezcan expresamente.",
              "guidance": "1. ¿Se definen controles de calidad, validación y depuración de los datos para los datos utilizados en las operaciones, la gestión de riesgos, el análisis y la vigilancia del rendimiento?\n2. ¿Están estos controles integrados en sistemas, flujos de tareas o procedimientos, en lugar de aplicarse únicamente de forma ad hoc?\n3. ¿Se realizan un seguimiento de los problemas de calidad de los datos, se asignan para su resolución y se hace seguimiento hasta que se corrigan?\n4. ¿Los resultados de calidad de los datos se miden y se informan a los gerentes o órganos de gobernanza responsables?",
              "id": "pilar_5_c2_q2",
              "indicator": "KPI [KA5-P4]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-26T22:43:08.370Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con mecanismos de validación y control de información asociados principalmente con la operación del SUMA, que contribuyen a mantener la integridad y consistencia de los registros utilizados en los procesos aduaneros. Estas prácticas representan una fortaleza en la administración tecnológica de la información. Sin embargo, de acuerdo con lo señalado durante las entrevistas, los controles existentes responden principalmente a requerimientos funcionales y técnicos de los sistemas, sin que se haya identificado un marco integral de calidad de datos que establezca criterios, estándares y procedimientos específicos para evaluar sistemáticamente su exactitud, integridad, consistencia, oportunidad y fiabilidad, particularmente para su utilización en la gestión de riesgos, la fiscalización y el análisis institucional.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, relativo a la generación de información útil, oportuna y confiable.\n- ISO 9001:2015, numerales 8.1 y 9.1, relacionados con el control operacional y el seguimiento, medición, análisis y evaluación de los procesos.\n- DAMA-DMBOK2, área de conocimiento de calidad de datos, como referencia internacional para definir dimensiones, reglas y controles de calidad.",
              "recommendations": "mplementar un modelo institucional de gestión de calidad de datos, aprovechando las capacidades tecnológicas del SUMA y los mecanismos de control y mejora continua establecidos bajo ISO 9001:2015. Se recomienda definir estándares y reglas de validación para los principales conjuntos de datos, establecer indicadores de integridad, exactitud, consistencia, oportunidad y duplicidad, e incorporar controles automatizados que permitan identificar anomalías y discrepancias. Asimismo, desarrollar un procedimiento formal para registrar, clasificar, asignar responsables y dar seguimiento a los problemas de calidad hasta su resolución, incorporando mecanismos de análisis de causas y prevención de recurrencias. Los resultados deberán integrarse en tableros de seguimiento y presentarse periódicamente a los responsables funcionales y directivos, priorizando la información utilizada en la gestión de riesgos, la fiscalización y los procesos críticos de la institución.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con mecanismos de validación y control de información asociados principalmente con la operación del SUMA, que contribuyen a mantener la integridad y consistencia de los registros utilizados en los procesos aduaneros. Estas prácticas representan una fortaleza en la administración tecnológica de la información. Sin embargo, de acuerdo con lo señalado durante las entrevistas, los controles existentes responden principalmente a requerimientos funcionales y técnicos de los sistemas, sin que se haya identificado un marco integral de calidad de datos que establezca criterios, estándares y procedimientos específicos para evaluar sistemáticamente su exactitud, integridad, consistencia, oportunidad y fiabilidad, particularmente para su utilización en la gestión de riesgos, la fiscalización y el análisis institucional.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, relativo a la generación de información útil, oportuna y confiable.\n- ISO 9001:2015, numerales 8.1 y 9.1, relacionados con el control operacional y el seguimiento, medición, análisis y evaluación de los procesos.\n- DAMA-DMBOK2, área de conocimiento de calidad de datos, como referencia internacional para definir dimensiones, reglas y controles de calidad.",
                "Hallazgo: El desarrollo y consolidación del SUMA han permitido incorporar validaciones técnicas y funcionales dentro de los procesos automatizados, favoreciendo la estandarización y consistencia de la información registrada. Asimismo, los procedimientos asociados al sistema de gestión de calidad ISO 9001:2015 constituyen una base favorable para la aplicación de controles documentados. No obstante, no se identificó evidencia suficiente de que existan controles sistemáticos de calidad de datos integrados a lo largo de su ciclo de vida, que incluyan procesos automatizados de depuración, conciliación, identificación de anomalías y monitoreo de calidad de la información utilizada por las distintas áreas institucionales, más allá de las validaciones necesarias para la operación de los sistemas.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, relativo a los sistemas de control interno.\n- ISO 9001:2015, numerales 8.1 y 8.5.1, sobre planificación, control operacional y condiciones controladas para la prestación de servicios.\n- DAMA-DMBOK2, áreas de calidad de datos e integración e interoperabilidad de datos.",
                "Hallazgo: La Aduana Nacional dispone de mecanismos de atención y resolución de incidencias tecnológicas asociados con la administración y mantenimiento de sus sistemas de información, respaldados por las prácticas de seguimiento y mejora continua del sistema de gestión de calidad ISO 9001:2015. Sin embargo, no se identificó evidencia de un procedimiento específico para registrar, clasificar, priorizar y resolver problemas de calidad de datos, que permita distinguirlos de las incidencias tecnológicas y asignar responsabilidades funcionales para su corrección. Tampoco se cuenta con evidencia de mecanismos sistemáticos para analizar las causas de las inconsistencias, verificar su resolución y prevenir su recurrencia, particularmente cuando afectan la información utilizada en los procesos analíticos y de gestión de riesgos.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 13, relativos a la confiabilidad de la información y el control gubernamental.\n- ISO 9001:2015, numerales 10.2 y 10.3, relacionados con no conformidades, acciones correctivas y mejora continua.\n- DAMA-DMBOK2, área de calidad de datos, sobre identificación, seguimiento y resolución de problemas de calidad.",
                "Hallazgo: La Aduana Nacional cuenta con indicadores de desempeño asociados con la operación y rendimiento de sus sistemas tecnológicos, lo que permite supervisar su funcionamiento y disponibilidad. Sin embargo, durante las entrevistas se señaló que estos indicadores se concentran en el desempeño de los sistemas y no en la calidad de los datos que administran. No se identificaron métricas institucionales específicas para evaluar dimensiones como integridad, exactitud, consistencia, oportunidad y duplicidad de la información, ni mecanismos formales para comunicar periódicamente estos resultados a los responsables funcionales y directivos. Esta situación limita la capacidad institucional para identificar deterioros en la calidad de la información y evaluar su impacto en la gestión de riesgos, la fiscalización y la toma de decisiones.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, sobre la generación de información útil, oportuna y confiable para la gestión institucional.\n- ISO 9001:2015, numerales 9.1 y 9.3, relativos al seguimiento, medición, análisis, evaluación y revisión por la dirección.\n- DAMA-DMBOK2, área de calidad de datos, relativa a la definición y seguimiento de indicadores de calidad."
              ],
              "text": "Implementar controles de calidad, validación y depuración de datos para garantizar la integridad, coherencia, puntualidad, fiabilidad e idoneidad de los datos utilizados para las operaciones, la gestión de riesgos, el análisis y la supervisión del rendimiento."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA5-P5",
              "evidence": "- Aduana Nacional – Informe de la VUCE\n- Aduana Nacional – Modernización SUMA 2\n- AGETIC – Plataforma de Interoperabilidad del Estado\n- OMA – Modelo de Datos",
              "evidence_delivered": true,
              "evidence_delivery_date": "26 oct 2026",
              "findings": "DesarrLa Aduana Nacional de Bolivia presenta fortalezas significativas en materia de integración tecnológica, sustentadas en un ecosistema de aproximadamente 128 sistemas de información articulados operativamente alrededor del SUMA. Esta infraestructura constituye una base sólida para la integración de los principales procesos aduaneros y representa un avance importante en la reducción de la fragmentación tecnológica. Sin embargo, no se cuenta con evidencia suficiente para determinar si esta arquitectura proporciona una visión institucional unificada de los datos para fines analíticos, ni para evaluar integralmente su interoperabilidad con instituciones externas y la aplicación homogénea de estándares de seguridad e intercambio de información. El principal desafío consiste en aprovechar la integración operativa existente para evolucionar hacia una arquitectura institucional de datos que facilite su disponibilidad, trazabilidad y aprovechamiento transversal en las funciones de gestión de riesgos, fiscalización, facilitación del comercio y evaluación del desempeño.",
              "guidance": "1. ¿Ha desarrollado la administración una arquitectura de datos integrada que reduzca la duplicación y los silos de datos entre las funciones principales de la aduana?\n2. ¿Proporciona la arquitectura una visión institucional unificada de los principales datos aduaneros para fines operativos y analíticos?\n3. ¿Promueve este intercambio seguro de información con las entidades públicas pertinentes, los organismos fronterizos, las administraciones aduaneras, las administraciones aduaneras internacionales y las partes interesadas?\n4. ¿Se aplican las normas y salvaguardias pertinentes para garantizar la interoperabilidad, la confidencialidad, la integridad y el intercambio controlado de datos?",
              "id": "pilar_5_c2_q3",
              "indicator": "KPI [KA5-P5]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-26T22:43:32.692Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional presenta un nivel importante de integración tecnológica, sustentado en un ecosistema de aproximadamente 128 sistemas de información que, de acuerdo con lo observado durante el diagnóstico, se encuentran articulados operativamente alrededor del SUMA. Esta arquitectura constituye una fortaleza institucional, al favorecer la integración de los procesos aduaneros y reducir la fragmentación de la información operativa. Sin embargo, no se cuenta con evidencia suficiente para determinar si esta integración comprende la totalidad de los datos institucionales, particularmente aquellos utilizados en funciones de análisis, fiscalización y gestión de riesgos, ni si se han establecido mecanismos transversales para prevenir la duplicidad y eliminar los silos de información fuera del ámbito operativo.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, relativo a la generación de información útil, oportuna y confiable para la gestión institucional.\n- Ley N.º 164, artículos 75 y 76, relacionados con el gobierno electrónico y las tecnologías de información.\n- Decreto Supremo N.º 3251, relativo a los planes de gobierno electrónico y software libre.\n- ISO 9001:2015, numeral 4.4, sobre la gestión de procesos y sus interacciones.",
              "recommendations": "Fortalecer la arquitectura institucional de datos a partir de la integración tecnológica existente, priorizando su aprovechamiento transversal para fines operativos, analíticos y de intercambio interinstitucional. Se recomienda realizar un diagnóstico de los flujos de información de los 128 sistemas, identificando posibles duplicidades, fuentes maestras, dependencias y conjuntos de datos críticos, así como evaluar la conveniencia de implementar una arquitectura analítica integrada que permita consolidar información histórica y estandarizada sin afectar la operación del SUMA. Adicionalmente, se propone documentar y fortalecer los mecanismos de interoperabilidad con instituciones nacionales e internacionales, incorporando estándares comunes de intercambio, controles de acceso, trazabilidad y salvaguardias de seguridad que garanticen la confidencialidad e integridad de la información.\n\nAl tener tantos sistemas integrados es donde aportan mayor valor contar con catélogos bien estructurados y enriquecidos",
              "score": 4,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional presenta un nivel importante de integración tecnológica, sustentado en un ecosistema de aproximadamente 128 sistemas de información que, de acuerdo con lo observado durante el diagnóstico, se encuentran articulados operativamente alrededor del SUMA. Esta arquitectura constituye una fortaleza institucional, al favorecer la integración de los procesos aduaneros y reducir la fragmentación de la información operativa. Sin embargo, no se cuenta con evidencia suficiente para determinar si esta integración comprende la totalidad de los datos institucionales, particularmente aquellos utilizados en funciones de análisis, fiscalización y gestión de riesgos, ni si se han establecido mecanismos transversales para prevenir la duplicidad y eliminar los silos de información fuera del ámbito operativo.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, relativo a la generación de información útil, oportuna y confiable para la gestión institucional.\n- Ley N.º 164, artículos 75 y 76, relacionados con el gobierno electrónico y las tecnologías de información.\n- Decreto Supremo N.º 3251, relativo a los planes de gobierno electrónico y software libre.\n- ISO 9001:2015, numeral 4.4, sobre la gestión de procesos y sus interacciones.",
                "Hallazgo: La integración de los sistemas institucionales alrededor del SUMA proporciona una base tecnológica sólida para consolidar la información de los principales procesos operativos aduaneros, facilitando su consulta, procesamiento y utilización. No obstante, durante el diagnóstico no se identificó evidencia suficiente de que esta arquitectura permita disponer de una visión institucional unificada para fines analíticos, particularmente mediante repositorios integrados, modelos de datos comunes o mecanismos de acceso transversal que respondan a las necesidades de fiscalización, gestión de riesgos y evaluación del desempeño. En este sentido, la integración operativa representa un avance relevante, aunque no necesariamente garantiza la disponibilidad de información consolidada, histórica y estandarizada para el análisis institucional.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, sobre la generación y utilización de información para la toma de decisiones.\n- ISO 9001:2015, numerales 7.1.3 y 9.1, relacionados con infraestructura y seguimiento, medición, análisis y evaluación.\n- DAMA-DMBOK2, áreas de arquitectura de datos, integración e interoperabilidad y almacenamiento de datos e inteligencia de negocios.",
                "Hallazgo: La arquitectura tecnológica de la Aduana Nacional, articulada alrededor del SUMA, constituye una plataforma favorable para el intercambio de información con otras instituciones y actores vinculados con las operaciones de comercio exterior. Sin embargo, la integración observada corresponde principalmente al ecosistema tecnológico interno y no permite establecer, por sí misma, el alcance de la interoperabilidad con entidades públicas, organismos de control fronterizo, administraciones aduaneras extranjeras y demás actores del comercio internacional. Durante el diagnóstico no se obtuvo evidencia suficiente sobre la cobertura, mecanismos de intercambio, estándares utilizados y procedimientos de coordinación que permitan evaluar integralmente estas capacidades de interoperabilidad externa.\n\nReferencias normativas y documentales:\n- Ley N.º 164, artículos 75 y 76, relativos al gobierno electrónico y las tecnologías de información.\n- Decreto Supremo N.º 3251, sobre la implementación de instrumentos de gobierno electrónico.\n- Organización Mundial de Aduanas (OMA), Modelo de Datos de la OMA, como referencia internacional para la armonización y el intercambio de información aduanera.\n- Marco Normativo SAFE de la OMA, sobre cooperación e intercambio de información entre administraciones aduaneras y otros actores de la cadena logística.",
                "Hallazgo: La Aduana Nacional dispone de una infraestructura tecnológica integrada y de procedimientos institucionales asociados con la gestión y operación de sus sistemas de información. Asimismo, las prácticas derivadas de su sistema de gestión de calidad ISO 9001:2015 constituyen una base favorable para la documentación y estandarización de procesos. No obstante, no se cuenta con evidencia suficiente para evaluar integralmente la aplicación de estándares específicos de interoperabilidad y seguridad de la información, particularmente en lo relacionado con la clasificación de datos, mecanismos de autenticación, autorización, trazabilidad, cifrado y control de intercambios entre sistemas e instituciones. En consecuencia, resulta necesario verificar si las salvaguardias existentes se encuentran formalmente documentadas y se aplican de manera homogénea a los distintos flujos de información.\n\nReferencias normativas y documentales:\n- Ley N.º 164, disposiciones relativas al uso de tecnologías de información y comunicación.\n- Decreto Supremo N.º 3251, relativo al marco de gobierno electrónico.\n- ISO 9001:2015, numeral 7.5.3, sobre control y protección de la información documentada.\n- ISO/IEC 27001:2022, como referencia internacional para la gestión de seguridad de la información.\n- Modelo de Datos de la OMA, como referencia técnica para la interoperabilidad aduanera."
              ],
              "text": "Desarrollar una arquitectura de datos integrada e interoperable, acorde con el contexto operativo de las administraciones, que reduzca los silos de datos, ofrezca una visión institucional unificada en todas las funciones básicas de la aduana y apoye el intercambio seguro de información con entidades públicas, administraciones aduaneras, organismos internacionales y partes interesadas fronterizas, utilizando las normas y salvaguardas pertinentes."
            }
          ],
          "title": "Gestión, calidad e interoperabilidad de los datos"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA5-P6",
              "evidence": "Aduana Nacional – Memoria Institucional 2024\nAduana Nacional – Memoria de Gestión de Presidencia Ejecutiva\nOMA – Compendio de Gestión de Riesgos Aduaneros\nISO – Orientaciones sobre evaluación de competencias\nAduana Nacional – Sistema SUMA\n\nLa revisión documental identifica capacidades adicionales que conviene considerar antes de cerrar la evaluación. La Memoria Institucional 2024 describe el Sistema Integral de Riesgos Operativos (SIRO), basado en perfiles, algoritmos e información histórica del SUMA. Una memoria institucional posterior también documenta el Sistema de Análisis de Riesgo Aduanero (SARA) y el Módulo de Expediente de Riesgo del Operador (MERO), orientados a la explotación de datos y generación de indicadores. \n\nPor tanto, la principal oportunidad de mejora no debe plantearse como una ausencia absoluta de herramientas analíticas, sino como la necesidad de ampliar su disponibilidad, fortalecer las competencias del personal y formalizar las metodologías de análisis. Conviene verificar durante el diagnóstico qué herramientas se encuentran efectivamente disponibles para los analistas y con qué nivel de autonomía.\n\nAsimismo, ISO 9001:2015 contempla la determinación de competencias y la conservación de evidencia apropiada sobre ellas, pero no exige por sí misma un programa específico de formación en analítica aduanera. \n",
              "findings": "La Aduana Nacional de Bolivia presenta avances importantes en materia de infraestructura tecnológica y disponibilidad de información, destacando el desarrollo del SUMA y la construcción de una base de datos específica para fines analíticos. Sin embargo, estas capacidades no se han traducido plenamente en el fortalecimiento de las competencias analíticas institucionales, debido a su concentración en el área de sistemas y a la limitada autonomía de las unidades funcionales para acceder y explotar la información. Se identifican debilidades en la disponibilidad de personal especializado, la documentación y estandarización de metodologías analíticas y la formación técnica basada en funciones. La dependencia de requerimientos de información y de esquemas informales de mentoría limita la oportunidad, continuidad y reproducibilidad de los análisis, particularmente en las funciones de gestión de riesgos, fiscalización y evaluación del desempeño.",
              "guidance": "1. ¿Dispone la administración de herramientas y métodos analíticos exclusivos para respaldar la toma de decisiones, la gestión de riesgos, la focalización, el control, la facilitación, la gestión del cumplimiento y la supervisión del rendimiento?\n2. ¿Se asigna personal con conocimientos analíticos especializados a las funciones aduaneras o unidades analíticas pertinentes?\n3. ¿Los métodos analíticos están documentados, son repetibles y se someten a revisión o control de calidad?\n4. ¿Se ofrece capacitación basada en funciones para que los usuarios operativos y de gestión puedan interpretar y utilizar eficazmente los resultados analíticos?",
              "id": "pilar_5_c3_q1",
              "indicator": "KPI [KA5-P6]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-26T23:09:59.077Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con una infraestructura tecnológica desarrollada alrededor del SUMA y ha construido una base de datos específica para fines analíticos, lo que representa un avance importante para el aprovechamiento de la información institucional. Sin embargo, las capacidades analíticas se encuentran concentradas principalmente en el área de sistemas, mientras que las unidades responsables de su utilización, particularmente la de gestión de riesgos, dependen de requerimientos de información para acceder a los datos. Esta situación limita su autonomía para realizar análisis, desarrollar modelos de riesgo y generar información oportuna para la toma de decisiones. Asimismo, no se identificaron herramientas y metodologías analíticas institucionalizadas que permitan aprovechar sistemáticamente la información disponible en las distintas funciones aduaneras.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, sobre la generación de información útil, oportuna y confiable para la gestión pública.\n- ISO 9001:2015, numeral 7.1.3, relativo a la infraestructura necesaria para la operación de los procesos.\n- ISO 9001:2015, numeral 9.1, sobre seguimiento, medición, análisis y evaluación.\n- Organización Mundial de Aduanas (OMA), Compendio de Gestión de Riesgos Aduaneros, como referencia técnica para el uso de información y análisis en la selección de controles.",
              "recommendations": "Desarrollar un programa institucional de fortalecimiento de capacidades analíticas, aprovechando la infraestructura tecnológica existente y la base de datos construida para fines analíticos. Se recomienda habilitar mecanismos de acceso directo, seguro y controlado a la información para las unidades de gestión de riesgos y fiscalización, dotándolas de herramientas especializadas para la exploración, procesamiento y análisis de datos, sin depender de requerimientos recurrentes al área de sistemas. Asimismo, fortalecer los perfiles técnicos mediante la incorporación o formación de profesionales en estadística, análisis de datos y aprendizaje automático; documentar metodologías estandarizadas para el desarrollo, validación y seguimiento de modelos; e implementar un programa de capacitación diferenciado por funciones, con materiales técnicos, ejercicios prácticos y mecanismos de evaluación de competencias, que permita consolidar capacidades analíticas sostenibles dentro de las áreas responsables de la toma de decisiones.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con una infraestructura tecnológica desarrollada alrededor del SUMA y ha construido una base de datos específica para fines analíticos, lo que representa un avance importante para el aprovechamiento de la información institucional. Sin embargo, las capacidades analíticas se encuentran concentradas principalmente en el área de sistemas, mientras que las unidades responsables de su utilización, particularmente la de gestión de riesgos, dependen de requerimientos de información para acceder a los datos. Esta situación limita su autonomía para realizar análisis, desarrollar modelos de riesgo y generar información oportuna para la toma de decisiones. Asimismo, no se identificaron herramientas y metodologías analíticas institucionalizadas que permitan aprovechar sistemáticamente la información disponible en las distintas funciones aduaneras.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, sobre la generación de información útil, oportuna y confiable para la gestión pública.\n- ISO 9001:2015, numeral 7.1.3, relativo a la infraestructura necesaria para la operación de los procesos.\n- ISO 9001:2015, numeral 9.1, sobre seguimiento, medición, análisis y evaluación.\n- Organización Mundial de Aduanas (OMA), Compendio de Gestión de Riesgos Aduaneros, como referencia técnica para el uso de información y análisis en la selección de controles.",
                "Hallazgo: La Aduana Nacional dispone de personal técnico especializado en la administración de sus sistemas de información y en el desarrollo de soluciones tecnológicas, lo que constituye una fortaleza para el mantenimiento y evolución de su infraestructura. Sin embargo, de acuerdo con lo señalado durante las entrevistas, las competencias del personal en materia de análisis de datos son limitadas y se encuentran concentradas principalmente en el área de sistemas. No se identificó evidencia suficiente de una distribución de profesionales con conocimientos especializados en estadística, análisis de datos y desarrollo de modelos predictivos dentro de las unidades operativas, de fiscalización y gestión de riesgos. Esta concentración genera dependencia tecnológica y restringe la capacidad de las áreas funcionales para desarrollar análisis de manera autónoma.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 9, relativo al Sistema de Administración de Personal.\n- ISO 9001:2015, numerales 7.1.2 y 7.2, sobre recursos humanos y competencias del personal.\n- OMA, Compendio de Gestión de Riesgos Aduaneros, como referencia para el desarrollo de capacidades especializadas en análisis y gestión de riesgos.",
                "Hallazgo: La Aduana Nacional cuenta con procedimientos documentados para la operación de sus sistemas tecnológicos, respaldados por las prácticas de gestión de calidad asociadas a la certificación ISO 9001:2015. Sin embargo, durante las entrevistas no se identificaron metodologías analíticas formalmente documentadas que establezcan procedimientos estandarizados para la extracción, preparación, validación, análisis e interpretación de datos, así como para el desarrollo, evaluación y seguimiento de modelos analíticos. La documentación existente se concentra principalmente en los sistemas y sus procesos operativos, sin que se haya demostrado la aplicación de mecanismos específicos para garantizar la reproducibilidad, trazabilidad y control de calidad de los análisis utilizados en la gestión de riesgos y la toma de decisiones.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, relativo a los mecanismos de control interno.\n- ISO 9001:2015, numerales 7.5 y 9.1, sobre información documentada y seguimiento, medición, análisis y evaluación.\n- DAMA-DMBOK2, áreas de calidad de datos, integración de datos e inteligencia de negocios, como referencia para la gestión de información utilizada en procesos analíticos.",
                "Hallazgo: La Aduana Nacional cuenta con prácticas de transferencia de conocimientos mediante esquemas de mentoría y capacitación asociadas a la operación de sus sistemas, apoyadas en los mecanismos generales de gestión de competencias establecidos bajo ISO 9001:2015. Sin embargo, no se identificó evidencia de un programa formal y estructurado de formación en análisis de datos, diferenciado según las responsabilidades y necesidades de las áreas operativas, directivas, de fiscalización y gestión de riesgos. La capacitación depende principalmente de la transmisión de conocimientos entre el personal, sin materiales metodológicos especializados ni mecanismos documentados para evaluar sistemáticamente la adquisición de competencias analíticas y su aplicación en las funciones institucionales.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 9, sobre administración de personal.\n- ISO 9001:2015, numerales 7.2 y 7.3, relativos a competencias y toma de conciencia.\n- OMA, Compendio de Gestión de Riesgos Aduaneros, como referencia para el fortalecimiento de competencias del personal encargado de análisis y control."
              ],
              "text": "Desarrollar capacidades analíticas institucionales —mediante herramientas adecuadas, conocimientos especializados especializados, métodos documentados y capacitación basada en funciones— para respaldar la toma de decisiones, la gestión de riesgos, el cumplimiento, la focalización, la supervisión del desempeño y la gestión de las reformas."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA5-P7",
              "evidence": "Aduana Nacional – Memoria de Gestión de Presidencia Ejecutiva\n\nAduana Nacional – Implementación de Tecnologías de la Información\n\nOMA – Compendio de Gestión de Riesgos Aduaneros\n\nNIST – Marco de Gestión de Riesgos de Inteligencia Artificial\n\nLa revisión de documentación institucional permite identificar capacidades que conviene incorporar a la evaluación. La Aduana Nacional reporta la implementación del Sistema de Análisis de Riesgo Aduanero (SARA), orientado a la explotación de datos y generación de reportes por mercancía y canal de control, y del Módulo de Expediente de Riesgos de Operadores (MERO), que permite analizar operaciones, identificar patrones y generar indicadores de riesgo. También documenta un entorno de análisis de datos mediante inteligencia artificial implementado durante 2024. \nEsto no acredita que existan modelos predictivos en producción ni mecanismos específicos para validarlos y recalibrarlos. Sin embargo, sí hace necesario distinguir entre las herramientas de análisis de riesgos documentadas y los modelos estadísticos o de aprendizaje automático cuya existencia y utilización efectiva aún deben verificarse.",
              "evidence_delivered": true,
              "evidence_delivery_date": "26 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con prácticas institucionalizadas para el desarrollo, prueba y seguimiento de sus sistemas tecnológicos, así como con herramientas de inteligencia de negocios orientadas principalmente al análisis de la recaudación. Estas capacidades representan una base favorable para avanzar hacia una gestión formal de modelos analíticos. Sin embargo, no se identificó evidencia suficiente de un marco específico de gobernanza, validación y supervisión de modelos estadísticos o predictivos aplicados a la gestión de riesgos aduaneros. Los mecanismos existentes se concentran principalmente en la validación funcional de los sistemas y en indicadores operativos, sin contemplar procedimientos especializados para evaluar la precisión, estabilidad, efectividad y contribución de los modelos a la selección de controles y detección de incumplimientos. En consecuencia, la principal oportunidad de mejora consiste en desarrollar capacidades y procedimientos que permitan incorporar progresivamente modelos analíticos bajo criterios de calidad, trazabilidad, supervisión y rendición de cuentas.\n\nRecomiendo conservar como hallazgo principal la falta de evidencia sobre una gobernanza específica de modelos analíticos, pero evitar afirmar categóricamente que la Aduana Nacional carece de herramientas de análisis de riesgos, ya que su documentación institucional identifica varias.",
              "guidance": "1. ¿Existen mecanismos de gobernanza para los modelos analíticos, incluidas la aprobación, la rendición de cuentas, la documentación y el control del cambio?\n2. ¿Los modelos se prueban y validan antes de usarse en la toma de decisiones operativas o la selección de riesgos?\n3. ¿Se lleva a cabo un seguimiento periódico del desempeño, la precisión y los impactos operacionales del modelo?\n4. ¿Se aplican recalibración, supervisión humana, trazabilidad y salvaguardias en los casos en que se emplea automatización, análisis avanzados o inteligencia artificial?",
              "id": "pilar_5_c3_q2",
              "indicator": "KPI [KA5-P7]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T21:21:21.133Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con herramientas de análisis y seguimiento de la recaudación, incluyendo soluciones de inteligencia de negocios (BI), así como mecanismos de control y documentación asociados con el desarrollo y mantenimiento de sus sistemas informáticos. Estas capacidades constituyen una base favorable para la administración de soluciones analíticas. Sin embargo, durante las entrevistas no se identificó evidencia de un marco específico de gobernanza de modelos analíticos que establezca responsabilidades sobre su desarrollo, aprobación, documentación, implementación y control de cambios. Particularmente, no se acreditó la existencia de procedimientos diferenciados para administrar modelos estadísticos o predictivos destinados a la identificación de riesgos, la selección de operaciones o la focalización de controles aduaneros.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 13, relativos a la confiabilidad de la información y los mecanismos de control gubernamental.\n- ISO 9001:2015, numerales 5.3 y 7.5, sobre responsabilidades institucionales y control de la información documentada.\n- ISO 9001:2015, numeral 8.5.6, relativo al control de cambios en los procesos.\n- Organización Mundial de Aduanas (OMA), Compendio de Gestión de Riesgos Aduaneros, como referencia técnica para el desarrollo y administración de herramientas de análisis de riesgos.",
              "recommendations": "Establecer un marco institucional de gobernanza y gestión del ciclo de vida de los modelos analíticos, aprovechando los procedimientos existentes de desarrollo, pruebas y control de cambios de los sistemas tecnológicos. Se recomienda definir responsabilidades para la aprobación, documentación, validación, implementación y seguimiento de modelos; incorporar pruebas estadísticas y de desempeño independientes de las validaciones funcionales; y establecer indicadores para medir su precisión, estabilidad y efectividad operativa, particularmente en la gestión de riesgos y fiscalización. Asimismo, se propone desarrollar mecanismos de trazabilidad, supervisión humana y recalibración periódica, que permitan identificar desviaciones y asegurar que los modelos mantengan su capacidad para apoyar decisiones institucionales confiables.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con herramientas de análisis y seguimiento de la recaudación, incluyendo soluciones de inteligencia de negocios (BI), así como mecanismos de control y documentación asociados con el desarrollo y mantenimiento de sus sistemas informáticos. Estas capacidades constituyen una base favorable para la administración de soluciones analíticas. Sin embargo, durante las entrevistas no se identificó evidencia de un marco específico de gobernanza de modelos analíticos que establezca responsabilidades sobre su desarrollo, aprobación, documentación, implementación y control de cambios. Particularmente, no se acreditó la existencia de procedimientos diferenciados para administrar modelos estadísticos o predictivos destinados a la identificación de riesgos, la selección de operaciones o la focalización de controles aduaneros.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 13, relativos a la confiabilidad de la información y los mecanismos de control gubernamental.\n- ISO 9001:2015, numerales 5.3 y 7.5, sobre responsabilidades institucionales y control de la información documentada.\n- ISO 9001:2015, numeral 8.5.6, relativo al control de cambios en los procesos.\n- Organización Mundial de Aduanas (OMA), Compendio de Gestión de Riesgos Aduaneros, como referencia técnica para el desarrollo y administración de herramientas de análisis de riesgos.",
                "Hallazgo: La Aduana Nacional dispone de un procedimiento estructurado de pruebas para sus desarrollos tecnológicos, que contempla cuatro etapas de revisión y la participación de los usuarios funcionales antes de su puesta en operación. Esta práctica constituye una fortaleza para verificar el funcionamiento de las soluciones informáticas y su correspondencia con los requerimientos operativos. Sin embargo, estas pruebas se orientan principalmente a la validación funcional y tecnológica de los sistemas, sin que se haya identificado evidencia de procedimientos específicos para evaluar la calidad estadística, capacidad predictiva, estabilidad y efectividad de modelos analíticos. En particular, no se acreditó la aplicación de metodologías de validación independientes para modelos destinados a la gestión de riesgos o selección de controles aduaneros.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, relativo al control interno.\n- ISO 9001:2015, numerales 8.3.4 y 8.6, relacionados con controles del diseño y desarrollo, verificación, validación y liberación de productos y servicios, cuando resulten aplicables al proceso.\n- OMA, Compendio de Gestión de Riesgos Aduaneros, como referencia para la evaluación de herramientas utilizadas en la gestión de riesgos.",
                "Hallazgo: La Aduana Nacional cuenta con indicadores y herramientas de inteligencia de negocios para supervisar la recaudación, así como métricas de disponibilidad y rendimiento de sus sistemas tecnológicos. Estas prácticas permiten dar seguimiento a resultados operativos y al funcionamiento de la infraestructura informática. Sin embargo, no se identificaron modelos predictivos de gestión de riesgos sujetos a evaluaciones periódicas de precisión, capacidad discriminatoria o efectividad operativa. Tampoco se obtuvo evidencia de indicadores destinados a medir el impacto de modelos analíticos sobre la selección de controles, la detección de incumplimientos o los resultados de fiscalización. En consecuencia, los mecanismos de seguimiento observados no permiten acreditar una supervisión sistemática del desempeño de modelos analíticos de riesgo.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, relativo a la evaluación de resultados y la generación de información para la toma de decisiones.\n- ISO 9001:2015, numerales 9.1 y 9.3, sobre seguimiento, medición, análisis, evaluación y revisión por la dirección.\n- OMA, Compendio de Gestión de Riesgos Aduaneros, como referencia para evaluar la efectividad de los instrumentos de selección y tratamiento de riesgos.",
                "Hallazgo: La Aduana Nacional dispone de mecanismos de control y seguimiento para sus sistemas informáticos, respaldados por procedimientos de gestión tecnológica y calidad. No obstante, durante las entrevistas no se identificó la utilización de modelos avanzados de aprendizaje automático o inteligencia artificial en los procesos de selección de riesgos que requieran mecanismos específicos de recalibración, supervisión humana y monitoreo de desviaciones en su desempeño. Por consiguiente, no se cuenta con evidencia para evaluar la aplicación efectiva de estas salvaguardias en modelos de esta naturaleza. Esta situación representa una oportunidad para establecer anticipadamente los criterios de control y supervisión que deberán observarse ante la futura incorporación de modelos analíticos avanzados.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, sobre control interno.\n- ISO 9001:2015, numerales 7.5, 9.1 y 10.2, relativos al control documental, seguimiento y acciones correctivas.\n- NIST, Artificial Intelligence Risk Management Framework (AI RMF 1.0), como referencia técnica para la gobernanza, validación, supervisión y gestión de riesgos asociados con sistemas de inteligencia artificial."
              ],
              "text": "Establecer mecanismos de gobernanza, validación y supervisión para los modelos analíticos."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA5-P8",
              "evidence": "Ley N.º 1178 de Administración y Control Gubernamentales: https://www.contraloria.gob.bo/wp-content/uploads/2022/06/20121217_319.pdf\n\nISO 9001:2015, Sistemas de Gestión de la Calidad: https://www.iso.org/standard/62085.html\n\nDAMA International, DAMA-DMBOK2 – Data Management Body of Knowledge: https://www.dama.org/cpages/body-of-knowledge\n\nOMA, Compendio de Gestión de Riesgos Aduaneros: https://www.wcoomd.org/en/Topics/Facilitation/Instrument%20and%20Tools/Tools/Risk%20Management%20Compendium\n\nSe mostraron los tableros de control de recaudación",
              "evidence_delivered": true,
              "evidence_delivery_date": "26 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con capacidades institucionales para el seguimiento y evaluación de determinados procesos, sustentadas en herramientas de inteligencia de negocios, indicadores de desempeño tecnológico y mecanismos de control asociados con la certificación ISO 9001:2015. Asimismo, se identificaron prácticas de documentación, revisión y utilización de resultados para adoptar medidas correctivas. Sin embargo, estas capacidades se encuentran concentradas en funciones específicas y no forman parte de un modelo integral de gobierno de datos. No se identificaron indicadores ni tableros orientados a evaluar sistemáticamente la calidad, integridad, custodia, disponibilidad y utilización de la información, ni mecanismos transversales que permitan supervisar su contribución a la gestión de riesgos, la fiscalización y el desempeño institucional.\n\nDesarrollar un sistema institucional de indicadores y tableros de control para el gobierno y aprovechamiento de datos, utilizando como punto de partida los mecanismos de seguimiento y documentación existentes bajo ISO 9001:2015. Se recomienda establecer indicadores específicos de calidad, integridad, oportunidad, disponibilidad, utilización y seguridad de la información, así como documentar sus definiciones, fuentes, reglas de cálculo, periodicidad y responsables. Asimismo, ampliar progresivamente la cobertura de los tableros hacia las funciones de gestión de riesgos, fiscalización y desempeño operativo, incorporando mecanismos de revisión periódica que permitan identificar desviaciones, asignar acciones correctivas y evaluar su cumplimiento. La implementación deberá priorizar los conjuntos de datos críticos y aprovechar la infraestructura tecnológica y analítica existente.",
              "guidance": "1. ¿Se definen formalmente indicadores y tableros de control basados en datos para medir la calidad, administración, disponibilidad, utilización y cumplimiento de las políticas de gobernanza de los datos?\n2. ¿Los gerentes elaboran tableros de control o informes para respaldar el desempeño operativo, la gestión de riesgos, las iniciativas de reforma y la rendición de cuentas?\n3. ¿Se documentan las definiciones de los indicadores, las fuentes de datos, la frecuencia de actualización y los propietarios responsables?\n4. ¿Se examinan los resultados del tablero de control y se actúan al respecto cuando ponen de manifiesto debilidades o lagunas de desempeño?",
              "id": "pilar_5_c3_q3",
              "indicator": "KPI [KA5-P8]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T21:31:11.249Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con indicadores de desempeño asociados principalmente con la disponibilidad y funcionamiento de sus sistemas tecnológicos, así como con mecanismos de seguimiento derivados de su sistema de gestión de calidad ISO 9001:2015. Estas prácticas constituyen una base favorable para la supervisión institucional. Sin embargo, no se identificaron políticas integrales de gobierno de datos ni indicadores específicos que permitan evaluar sistemáticamente la calidad, integridad, oportunidad, custodia, utilización y cumplimiento de estándares de gestión de la información. Los mecanismos existentes mantienen un enfoque predominantemente tecnológico y operativo, sin que se haya desarrollado un esquema de medición orientado a evaluar la información como un activo estratégico institucional.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, relativo a la generación de información útil, oportuna y confiable para la gestión pública.\n- ISO 9001:2015, numeral 9.1, sobre seguimiento, medición, análisis y evaluación del desempeño.\n- DAMA-DMBOK2, áreas de gobierno y calidad de datos, como referencia para establecer indicadores de gestión y cumplimiento de políticas.",
              "recommendations": "La Aduana Nacional de Bolivia cuenta con capacidades institucionales para el seguimiento y evaluación de determinados procesos, sustentadas en herramientas de inteligencia de negocios, indicadores de desempeño tecnológico y mecanismos de control asociados con la certificación ISO 9001:2015. Asimismo, se identificaron prácticas de documentación, revisión y utilización de resultados para adoptar medidas correctivas. Sin embargo, estas capacidades se encuentran concentradas en funciones específicas y no forman parte de un modelo integral de gobierno de datos. No se identificaron indicadores ni tableros orientados a evaluar sistemáticamente la calidad, integridad, custodia, disponibilidad y utilización de la información, ni mecanismos transversales que permitan supervisar su contribución a la gestión de riesgos, la fiscalización y el desempeño institucional.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con indicadores de desempeño asociados principalmente con la disponibilidad y funcionamiento de sus sistemas tecnológicos, así como con mecanismos de seguimiento derivados de su sistema de gestión de calidad ISO 9001:2015. Estas prácticas constituyen una base favorable para la supervisión institucional. Sin embargo, no se identificaron políticas integrales de gobierno de datos ni indicadores específicos que permitan evaluar sistemáticamente la calidad, integridad, oportunidad, custodia, utilización y cumplimiento de estándares de gestión de la información. Los mecanismos existentes mantienen un enfoque predominantemente tecnológico y operativo, sin que se haya desarrollado un esquema de medición orientado a evaluar la información como un activo estratégico institucional.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, relativo a la generación de información útil, oportuna y confiable para la gestión pública.\n- ISO 9001:2015, numeral 9.1, sobre seguimiento, medición, análisis y evaluación del desempeño.\n- DAMA-DMBOK2, áreas de gobierno y calidad de datos, como referencia para establecer indicadores de gestión y cumplimiento de políticas.",
                "Hallazgo: La Aduana Nacional dispone de herramientas de inteligencia de negocios y reportes de seguimiento, particularmente en materia de recaudación y desempeño de los sistemas tecnológicos, que proporcionan información para supervisar determinados resultados institucionales. Asimismo, el sistema de gestión de calidad ISO 9001:2015 contempla mecanismos de evaluación y presentación de resultados. No obstante, durante las entrevistas se identificó que la disponibilidad de tableros de control es limitada y se concentra en determinadas funciones, sin que se haya acreditado una cobertura integral de las necesidades de información de las áreas operativas, gestión de riesgos, fiscalización y seguimiento de reformas. Esta situación restringe la capacidad de los responsables institucionales para contar con una visión transversal y oportuna del desempeño y de los resultados de la gestión aduanera.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 6, relativos a la evaluación de resultados y la programación de operaciones.\n- ISO 9001:2015, numerales 9.1 y 9.3, sobre seguimiento del desempeño y revisión por la dirección.\n- Organización Mundial de Aduanas (OMA), Compendio de Gestión de Riesgos Aduaneros, como referencia para el seguimiento de resultados y efectividad de la gestión de riesgos.",
                "Hallazgo: La Aduana Nacional dispone de mecanismos formales de documentación y seguimiento de indicadores asociados con su sistema de gestión de calidad ISO 9001:2015, lo que favorece la estandarización de las mediciones y la asignación de responsabilidades sobre los resultados. Sin embargo, no se identificó evidencia suficiente de que estas prácticas se extiendan a la totalidad de los indicadores institucionales, particularmente aquellos relacionados con la calidad, custodia, disponibilidad y aprovechamiento de los datos. Tampoco se acreditó la existencia de un catálogo centralizado que integre las definiciones, fuentes de información, periodicidad de actualización, reglas de cálculo y responsables de los indicadores utilizados en las distintas funciones aduaneras.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 1, sobre la confiabilidad y oportunidad de la información institucional.\n- ISO 9001:2015, numerales 7.5 y 9.1, relativos al control de la información documentada y a la definición de mecanismos de seguimiento y medición.\n- DAMA-DMBOK2, áreas de gestión de metadatos y gobierno de datos, como referencia para la documentación y administración de indicadores institucionales.",
                "Hallazgo: La Aduana Nacional realiza actividades de seguimiento y revisión de los resultados contenidos en los tableros e informes disponibles, utilizando esta información para identificar desviaciones y adoptar medidas correctivas en los procesos supervisados. Esta práctica, apoyada en los mecanismos de evaluación y mejora continua de ISO 9001:2015, constituye una fortaleza institucional. Sin embargo, debido a la cobertura limitada de los tableros existentes y a la ausencia de indicadores específicos de gobierno y calidad de datos, estas revisiones no permiten identificar y atender sistemáticamente las debilidades relacionadas con la integridad, confiabilidad, disponibilidad y aprovechamiento de la información en todas las funciones aduaneras.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, relativo a los mecanismos de control interno.\n- ISO 9001:2015, numerales 9.1, 9.3 y 10.2, relacionados con seguimiento, revisión por la dirección y acciones correctivas.\n- DAMA-DMBOK2, áreas de gobierno y calidad de datos, como referencia para la supervisión de indicadores y la mejora continua."
              ],
              "text": "Definir, gobernar y usar indicadores y tableros de control basados en datos para supervisar la calidad y la custodia y la disponibilidad de datos, su utilización, el cumplimiento de las políticas de gobernanza y la fiabilidad de la información utilizada para respaldar el desempeño operativo, la gestión de riesgos, las iniciativas de reforma y la rendición de cuentas institucional."
            }
          ],
          "title": "Capacidades analíticas y toma de decisiones basadas en evidencias"
        },
        {
          "code": "C4",
          "id": "c4",
          "questions": [
            {
              "assigned_to": "usr_2",
              "code": "KA5-P9",
              "evidence": "Ley N.º 1178 de Administración y Control Gubernamentales: https://www.contraloria.gob.bo/wp-content/uploads/2022/06/20121217_319.pdf\n\nDecreto Supremo N.º 0181, Normas Básicas del Sistema de Administración de Bienes y Servicios: https://www.lexivox.org/norms/BO-DS-N181.html\n\nISO 9001:2015, Sistemas de Gestión de la Calidad: https://www.iso.org/standard/62085.html\n\nISO/IEC 27001:2022, Sistemas de Gestión de Seguridad de la Información: https://www.iso.org/standard/27001\n\nISO 22301:2019, Sistemas de Gestión de Continuidad del Negocio: https://www.iso.org/standard/75106.html\n\nAduana Nacional de Bolivia, Sistema SUMA: https://www.aduana.gob.bo/infosuma/suma.php",
              "findings": "La Aduana Nacional de Bolivia presenta fortalezas importantes en materia de infraestructura tecnológica y capacidad de respuesta, destacando la integración de sus sistemas alrededor del SUMA, la disponibilidad de una base de datos para fines analíticos y la atención efectiva y oportuna de los requerimientos de información durante la misión. No obstante, persisten limitaciones estructurales relacionadas con la concentración de los servidores en un mismo edificio, lo que representa un riesgo para la continuidad operativa ante eventos que afecten las instalaciones, aun cuando se dispone de mecanismos de respaldo y replicación. La institución reconoce esta vulnerabilidad y ha evaluado una inversión aproximada de USD 8 millones para fortalecer su infraestructura, cuya ejecución se ha visto limitada por restricciones presupuestarias. Adicionalmente, las capacidades analíticas continúan concentradas en el área de sistemas, con un desarrollo limitado de competencias en las unidades funcionales. En este contexto, resulta necesario fortalecer la planificación tecnológica, la gestión de continuidad y la evaluación de inversiones, priorizando las medidas de mayor impacto sobre la disponibilidad de información y la sostenibilidad de los servicios institucionales.\n\nNota metodológica: Los hallazgos se sustentan en la información proporcionada durante las entrevistas y en las observaciones de la misión. El costo estimado de USD 8 millones corresponde a lo manifestado por la institución y no constituye una valoración independiente. Asimismo, la existencia de un sistema espejo no permite confirmar redundancia geográfica ni capacidad efectiva de recuperación ante un incidente que afecte al edificio donde se concentra la infraestructura.",
              "guidance": "1. ¿Evalúa periódicamente la administración si los sistemas, la infraestructura, las herramientas y las competencias satisfacen las necesidades analíticas y de gestión de datos?\n2. ¿Se traducen oportunamente las brechas tecnológicas y de aptitudes detectadas en planes de inversión, medidas de contratación pública o iniciativas de fortalecimiento de las capacidades?\n3. ¿Las evaluaciones de tecnología están vinculadas a los requisitos operativos, las prioridades institucionales y las proyecciones de la carga de trabajo o el volumen de datos futuras?\n4. ¿Se hace un seguimiento de los avances en la implementación y de las ventajas de las inversiones en tecnología después del despliegue?",
              "id": "pilar_5_c4_q1",
              "indicator": "KPI [KA5-P9]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-26T23:23:10.765Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con una infraestructura tecnológica desarrollada y personal especializado que, pese a la concentración de las capacidades analíticas en el área de sistemas, ha demostrado una respuesta efectiva y oportuna a los requerimientos de información formulados durante la misión. Asimismo, se identificó que la institución reconoce sus principales limitaciones tecnológicas, particularmente en materia de redundancia y continuidad operativa. Sin embargo, no se obtuvo evidencia suficiente de evaluaciones periódicas e integrales que permitan determinar si la infraestructura, las herramientas y las competencias del personal responden adecuadamente a las necesidades presentes y futuras de análisis y gestión de datos de las distintas áreas institucionales.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 6, relativos a la gestión eficiente de los recursos públicos y la programación de operaciones.\n- ISO 9001:2015, numerales 7.1.3, 7.2 y 9.1, relacionados con infraestructura, competencias y evaluación del desempeño.\n- ISO/IEC 27001:2022, como referencia técnica para evaluar riesgos relacionados con la disponibilidad y continuidad de la información.",
              "recommendations": "Desarrollar un plan integral de fortalecimiento tecnológico y continuidad operativa, sustentado en una evaluación de riesgos, capacidades actuales y necesidades futuras de procesamiento y análisis de información. Se recomienda priorizar la reducción de los riesgos derivados de la concentración física de la infraestructura, mediante una estrategia gradual de redundancia geográfica, respaldos externos y recuperación ante desastres, considerando alternativas de implementación acordes con las restricciones presupuestarias de la institución. Asimismo, establecer evaluaciones periódicas de capacidad y crecimiento de la infraestructura, acompañadas de un programa de fortalecimiento de competencias analíticas en las áreas funcionales. Las inversiones deberán priorizarse mediante criterios de criticidad, costo-beneficio y reducción de riesgos, incorporando indicadores que permitan evaluar los avances, resultados y beneficios obtenidos después de su implementación.\n\nEn particular, considerando el costo estimado de USD 8 millones para el proyecto de redundancia, se recomienda evaluar alternativas de implementación por etapas, comenzando por los servicios y bases de datos de mayor criticidad, así como definir objetivos de tiempo y punto de recuperación (RTO y RPO) que permitan dimensionar técnicamente las necesidades de inversión y justificar su priorización presupuestaria.",
              "score": 3,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con una infraestructura tecnológica desarrollada y personal especializado que, pese a la concentración de las capacidades analíticas en el área de sistemas, ha demostrado una respuesta efectiva y oportuna a los requerimientos de información formulados durante la misión. Asimismo, se identificó que la institución reconoce sus principales limitaciones tecnológicas, particularmente en materia de redundancia y continuidad operativa. Sin embargo, no se obtuvo evidencia suficiente de evaluaciones periódicas e integrales que permitan determinar si la infraestructura, las herramientas y las competencias del personal responden adecuadamente a las necesidades presentes y futuras de análisis y gestión de datos de las distintas áreas institucionales.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 6, relativos a la gestión eficiente de los recursos públicos y la programación de operaciones.\n- ISO 9001:2015, numerales 7.1.3, 7.2 y 9.1, relacionados con infraestructura, competencias y evaluación del desempeño.\n- ISO/IEC 27001:2022, como referencia técnica para evaluar riesgos relacionados con la disponibilidad y continuidad de la información.",
                "Hallazgo: La Aduana Nacional ha identificado necesidades relevantes de inversión tecnológica, particularmente para fortalecer la redundancia de su infraestructura y garantizar la continuidad operativa. De acuerdo con lo señalado durante las entrevistas, se ha evaluado un proyecto de aproximadamente USD 8 millones para atender estas necesidades, lo que evidencia conocimiento de las brechas existentes y una valoración preliminar de los recursos necesarios. Sin embargo, las restricciones presupuestarias han limitado su ejecución, manteniéndose la concentración de la infraestructura de servidores en un mismo edificio. De manera complementaria, no se identificó evidencia suficiente de un programa integral de fortalecimiento de competencias analíticas que permita reducir la dependencia del área de sistemas y ampliar las capacidades de las unidades funcionales.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 6 y 8, relativos a la programación de operaciones y a la administración de bienes y servicios.\n- Decreto Supremo N.º 0181, Normas Básicas del Sistema de Administración de Bienes y Servicios, como marco aplicable a la contratación pública.\n- ISO 9001:2015, numerales 7.1 y 7.2, relacionados con la provisión de recursos y las competencias del personal.",
                "Hallazgo: La evolución del SUMA, la integración de los sistemas institucionales y la construcción de una base de datos específica para fines analíticos reflejan esfuerzos de adecuación tecnológica a las necesidades operativas de la Aduana Nacional. Asimismo, la identificación de riesgos asociados con la concentración física de los servidores evidencia una preocupación institucional por garantizar la disponibilidad y continuidad de los servicios. No obstante, no se identificó evidencia suficiente de que las evaluaciones tecnológicas se encuentren sustentadas sistemáticamente en proyecciones documentadas de crecimiento de operaciones, volumen de información, demanda analítica y requerimientos futuros de capacidad. Esta situación puede dificultar la priorización de inversiones y la planificación de una infraestructura escalable y resiliente.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 6, sobre eficiencia en la utilización de recursos y programación institucional.\n- ISO 9001:2015, numerales 6.1 y 7.1.3, relativos a la planificación de acciones frente a riesgos y oportunidades y a la disponibilidad de infraestructura.\n- ISO/IEC 27001:2022, como referencia para la evaluación de riesgos tecnológicos y de continuidad de la información.\n- ISO 22301:2019, como referencia internacional para la gestión de continuidad del negocio.",
                "Hallazgo: La Aduana Nacional cuenta con mecanismos de seguimiento del desempeño de sus sistemas tecnológicos, así como con prácticas de evaluación y mejora continua asociadas a la certificación ISO 9001:2015. Estas capacidades permiten supervisar el funcionamiento de las soluciones implementadas y atender necesidades operativas dentro de las restricciones presupuestarias existentes. Sin embargo, no se identificó evidencia suficiente de una metodología institucional para evaluar sistemáticamente los beneficios de las inversiones tecnológicas después de su implementación, particularmente en términos de reducción de riesgos operativos, mejoras en la continuidad del servicio, eficiencia de los procesos y fortalecimiento de las capacidades analíticas. Las limitaciones presupuestarias también han condicionado la ejecución de proyectos estratégicos de infraestructura, por lo que resulta relevante fortalecer los mecanismos de priorización y seguimiento de las inversiones.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 6, relativos a la evaluación de resultados y la programación de operaciones.\n- ISO 9001:2015, numerales 9.1 y 9.3, sobre seguimiento, medición, análisis, evaluación y revisión por la dirección.\n- ISO 22301:2019, como referencia para la evaluación y mejora de las capacidades de continuidad operativa."
              ],
              "text": "Garantizar una adecuada capacidad tecnológica para la gestión y el análisis de datos."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA5-P10",
              "evidence": "",
              "findings": "La Aduana Nacional de Bolivia presenta fortalezas relevantes en materia de protección y disponibilidad de información, destacando la implementación de un sistema espejo, la existencia de una base de datos destinada a fines analíticos y la estandarización de procesos bajo ISO 9001:2015. Estas capacidades constituyen buenas prácticas considerando las restricciones presupuestarias y tecnológicas de la institución. \n\nSin embargo, la concentración de la infraestructura de servidores en un mismo edificio representa una vulnerabilidad importante para la continuidad operativa, particularmente ante incidentes que puedan afectar simultáneamente los sistemas principales y sus mecanismos de respaldo.\n\n Adicionalmente, no se obtuvo evidencia suficiente de planes integrales de recuperación ante desastres, programas periódicos de pruebas y mecanismos específicos para evaluar y mejorar la efectividad de las medidas de seguridad y continuidad. En consecuencia, resulta necesario fortalecer la gestión de estos riesgos mediante una planificación basada en la criticidad de los servicios y una estrategia gradual de redundancia y recuperación.",
              "guidance": "1. ¿Los controles de seguridad de los datos y del sistema están definidos de manera formal y son proporcionales a la importancia crítica de los datos aduaneros, los sistemas y los servicios analíticos?\n2. ¿Se documentan los planes de respaldo, recuperación y continuidad de las operaciones para los sistemas y conjuntos de datos aduaneros críticos?\n3. ¿Se prueban periódicamente los mecanismos de seguridad, respaldo, recuperación y continuidad?\n4. ¿Se usan los resultados de las pruebas, los incidentes y las lecciones aprendidas para mejorar los mecanismos de seguridad y continuidad?",
              "id": "pilar_5_c4_q2",
              "indicator": "KPI [KA5-P10]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T21:36:11.097Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con mecanismos de protección de la información, entre los que destacan un sistema espejo y una base de datos destinada a fines analíticos, que constituyen buenas prácticas considerando las capacidades y recursos disponibles. Asimismo, dispone de procesos estandarizados y documentados en el marco de su sistema de gestión de calidad ISO 9001:2015. Sin embargo, no se identificó evidencia suficiente de una clasificación institucional de los datos y sistemas según su criticidad, ni de que los controles de seguridad se encuentren diferenciados en función de los riesgos asociados con su disponibilidad, confidencialidad e integridad. Adicionalmente, la concentración de la infraestructura tecnológica en un mismo edificio representa una vulnerabilidad ante incidentes que puedan afectar simultáneamente los sistemas principales y sus mecanismos de respaldo.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, relativo a los mecanismos de control interno y protección de los recursos institucionales.\n- ISO 9001:2015, numerales 6.1 y 7.5.3, relacionados con la gestión de riesgos y el control de la información documentada.\n- ISO/IEC 27001:2022, como referencia técnica para establecer controles de seguridad proporcionales a los riesgos y a la criticidad de la información.",
              "recommendations": "Fortalecer los mecanismos de seguridad, respaldo y continuidad de los datos mediante una estrategia gradual basada en riesgos y criticidad, aprovechando la infraestructura y los procedimientos institucionales existentes. Se recomienda establecer una clasificación de los sistemas y conjuntos de datos críticos, documentar y verificar los planes de respaldo y recuperación, definir objetivos de tiempo y punto de recuperación (RTO y RPO) y desarrollar un programa periódico de pruebas de restauración y simulacros de continuidad. Asimismo, priorizar alternativas de respaldo externo y redundancia geográfica que reduzcan la exposición derivada de la concentración de los servidores en un mismo edificio, considerando las restricciones presupuestarias de la institución. Los resultados de las pruebas e incidentes deberán documentarse y utilizarse para actualizar los procedimientos, establecer acciones correctivas y evaluar periódicamente la efectividad de los controles.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con mecanismos de protección de la información, entre los que destacan un sistema espejo y una base de datos destinada a fines analíticos, que constituyen buenas prácticas considerando las capacidades y recursos disponibles. Asimismo, dispone de procesos estandarizados y documentados en el marco de su sistema de gestión de calidad ISO 9001:2015. Sin embargo, no se identificó evidencia suficiente de una clasificación institucional de los datos y sistemas según su criticidad, ni de que los controles de seguridad se encuentren diferenciados en función de los riesgos asociados con su disponibilidad, confidencialidad e integridad. Adicionalmente, la concentración de la infraestructura tecnológica en un mismo edificio representa una vulnerabilidad ante incidentes que puedan afectar simultáneamente los sistemas principales y sus mecanismos de respaldo.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, relativo a los mecanismos de control interno y protección de los recursos institucionales.\n- ISO 9001:2015, numerales 6.1 y 7.5.3, relacionados con la gestión de riesgos y el control de la información documentada.\n- ISO/IEC 27001:2022, como referencia técnica para establecer controles de seguridad proporcionales a los riesgos y a la criticidad de la información.",
                "Hallazgo: La Aduana Nacional dispone de mecanismos tecnológicos de respaldo mediante un sistema espejo, así como de procedimientos estandarizados y documentados bajo ISO 9001:2015, lo que representa una fortaleza para la administración y protección de sus sistemas. Asimismo, la institución ha identificado la necesidad de fortalecer su infraestructura de redundancia y continuidad operativa, habiendo evaluado un proyecto de inversión estimado en USD 8 millones. No obstante, no se obtuvo evidencia suficiente de planes integrales de recuperación ante desastres y continuidad operativa que establezcan prioridades de restablecimiento, responsables, procedimientos alternativos y objetivos de recuperación diferenciados según la criticidad de los sistemas y conjuntos de datos. La concentración de los servidores en un mismo edificio limita la capacidad de recuperación ante eventos que afecten las instalaciones.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1 y 13, relativos a la eficiencia de la gestión y al control gubernamental.\n- ISO 9001:2015, numerales 7.1.3 y 7.5, sobre infraestructura e información documentada.\n- ISO 22301:2019, como referencia internacional para la planificación y documentación de la continuidad del negocio.\n- ISO/IEC 27001:2022, controles del Anexo A relacionados con respaldo de información y preparación de las TIC para la continuidad.",
                "Hallazgo: La Aduana Nacional cuenta con mecanismos de respaldo y replicación de información que favorecen la disponibilidad de sus sistemas, así como con prácticas de seguimiento y control de procesos asociadas con ISO 9001:2015. Sin embargo, durante las entrevistas no se obtuvo evidencia suficiente de un programa formal de pruebas periódicas que permita verificar la efectividad de los respaldos, la recuperación de bases de datos, la restauración de servicios críticos y la continuidad de las operaciones ante incidentes tecnológicos. Particularmente, no se acreditó la realización de simulacros integrales de recuperación ante desastres ni la medición de tiempos efectivos de restablecimiento. La existencia de un sistema espejo constituye una medida favorable, aunque por sí sola no garantiza la capacidad de recuperación ante fallas simultáneas o incidentes que afecten las instalaciones.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, sobre mecanismos de control interno.\n- ISO 9001:2015, numerales 9.1 y 9.2, relacionados con seguimiento, medición y auditoría interna.\n- ISO 22301:2019, numeral 8.5, relativo a ejercicios y pruebas de los procedimientos de continuidad.\n- ISO/IEC 27001:2022, como referencia para verificar la eficacia de los controles de seguridad y continuidad.",
                "Hallazgo: La Aduana Nacional dispone de mecanismos institucionales de seguimiento, evaluación y mejora continua asociados con su sistema de gestión de calidad ISO 9001:2015, que proporcionan una base favorable para identificar desviaciones e implementar acciones correctivas. Asimismo, el reconocimiento de las limitaciones de su infraestructura y la evaluación de alternativas de inversión reflejan una preocupación institucional por fortalecer la continuidad de los servicios. Sin embargo, no se identificó evidencia suficiente de un procedimiento específico que integre sistemáticamente los resultados de pruebas de recuperación, incidentes tecnológicos y lecciones aprendidas para actualizar los mecanismos de seguridad, respaldo y continuidad de datos. Tampoco se acreditó la existencia de indicadores que permitan evaluar periódicamente la efectividad de estas medidas y el nivel de riesgo residual de los servicios críticos.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículo 13, relativo al control interno.\n- ISO 9001:2015, numerales 9.3, 10.2 y 10.3, sobre revisión por la dirección, acciones correctivas y mejora continua.\n- ISO 22301:2019, como referencia para la evaluación, mantenimiento y mejora de los mecanismos de continuidad.\n- ISO/IEC 27001:2022, como referencia para la gestión de incidentes y la mejora de los controles de seguridad."
              ],
              "text": "Establecer revisión y comprobación periódica de mecanismos de seguridad, respaldo, recuperación y continuidad de los datos para los conjuntos de datos aduaneros y servicios analíticos, de acuerdo con la importancia crítica y coherente con los mecanismos de seguridad y continuidad de las TIC en el Área Clave 2: Tecnología de la Información y la Comunicación."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA5-P11",
              "evidence": "Ley N.º 1178 de Administración y Control Gubernamentales: https://www.contraloria.gob.bo/wp-content/uploads/2022/06/20121217_319.pdf\n\nISO 9001:2015, Sistemas de Gestión de la Calidad: https://www.iso.org/standard/62085.html\n\nISO/IEC 27001:2022, Sistemas de Gestión de Seguridad de la Información: https://www.iso.org/standard/27001\n\nDAMA International, DAMA-DMBOK2 – Data Management Body of Knowledge: https://www.dama.org/cpages/body-of-knowledge",
              "findings": "La Aduana Nacional de Bolivia presenta una base institucional favorable para la supervisión y control de sus sistemas de información, sustentada en procedimientos tecnológicos documentados y en mecanismos de auditoría, seguimiento y mejora continua asociados con la certificación ISO 9001:2015. Sin embargo, estas capacidades responden principalmente a un enfoque tradicional de administración de sistemas, sin que se haya desarrollado un marco integral de gobierno de datos que establezca políticas, responsabilidades, procesos y mecanismos específicos de aseguramiento. \n\nEn consecuencia, no se cuenta con elementos suficientes para evaluar sistemáticamente la gobernanza, calidad, seguridad y aprovechamiento analítico de la información desde una perspectiva institucional transversal. La principal oportunidad de mejora consiste en aprovechar las capacidades existentes para evolucionar hacia un modelo que reconozca la información como un activo estratégico, fortalezca las competencias del personal y promueva su utilización como generador de valor para la gestión de riesgos, la fiscalización, la facilitación del comercio y la toma de decisiones.\n\nNota metodológica: Los hallazgos se sustentan en la información proporcionada durante las entrevistas. La existencia de auditorías internas y controles documentados bajo ISO 9001:2015 no demuestra, por sí misma, que estos abarquen integralmente el gobierno y análisis de datos. Las normas y referencias técnicas citadas constituyen criterios de evaluación y deben distinguirse de las obligaciones legales expresamente aplicables.",
              "guidance": "1. ¿La gobernanza, seguridad y análisis de datos se incluyen en la auditoría interna o en los planes de aseguramiento?\n2. ¿Las actividades de auditoría o garantía abarcan el acceso a los datos, los cambios de datos, el cumplimiento de normas de gobernanza, los controles del modelo y las salvaguardias de calidad, seguridad, confidencialidad e integridad?\n3. ¿Se incorporan los hallazgos y las recomendaciones de la auditoría a las medidas de la gerencia y su cierre?\n4. ¿Se usan los resultados de auditoría o aseguramiento para reforzar el uso institucional de los datos y el análisis?",
              "id": "pilar_5_c4_q3",
              "indicator": "KPI [KA5-P11]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-27T21:59:40.709Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con mecanismos institucionales de control, auditoría y seguimiento de sus procesos, respaldados por la implementación de un sistema de gestión de calidad bajo la norma ISO 9001:2015. Estas prácticas constituyen una fortaleza para la supervisión de los sistemas tecnológicos y el cumplimiento de los procedimientos establecidos. Sin embargo, no se identificó evidencia de que los planes de auditoría incorporen evaluaciones específicas de gobierno y análisis de datos desde una perspectiva institucional integral. Esta limitación se relaciona con la ausencia de una política formal de gobierno de datos, de procesos transversales y de una instancia responsable de su coordinación, lo que dificulta establecer criterios específicos para evaluar su implementación y efectividad.\n\nReferencias normativas y documentales:\n- Ley N.º 1178 de Administración y Control Gubernamentales, artículos 13 y 15, relativos al control gubernamental y la auditoría interna.\n- ISO 9001:2015, numerales 9.2 y 9.3, relacionados con auditorías internas y revisión por la dirección.\n- DAMA-DMBOK2, área de gobierno de datos, como referencia técnica para establecer mecanismos de supervisión y evaluación.",
              "notes_history": [
                {
                  "id": "note_1793039623184_538d",
                  "text": "Indicadores de servio … tienen una bitácora",
                  "timestamp": "2026-10-26T18:33:43.185Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "Desarrollar e implementar un marco institucional de gobierno de datos que incorpore mecanismos específicos de auditoría y aseguramiento, aprovechando las estructuras de control, documentación y mejora continua existentes bajo ISO 9001:2015. Se recomienda formalizar políticas, responsabilidades y procedimientos para la gestión de los datos, establecer una instancia multidisciplinaria de coordinación y ampliar progresivamente el alcance de los planes de auditoría hacia la calidad, integridad, seguridad, trazabilidad, acceso y aprovechamiento analítico de la información. Asimismo, fortalecer las competencias del personal mediante programas estructurados de capacitación y transferencia de conocimientos, e incorporar mecanismos de seguimiento de hallazgos y acciones correctivas que permitan evaluar la efectividad del gobierno de datos. Este proceso deberá orientarse no solamente al cumplimiento tecnológico y normativo, sino principalmente a consolidar la información como un activo estratégico capaz de generar valor agregado para la institución.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con mecanismos institucionales de control, auditoría y seguimiento de sus procesos, respaldados por la implementación de un sistema de gestión de calidad bajo la norma ISO 9001:2015. Estas prácticas constituyen una fortaleza para la supervisión de los sistemas tecnológicos y el cumplimiento de los procedimientos establecidos. Sin embargo, no se identificó evidencia de que los planes de auditoría incorporen evaluaciones específicas de gobierno y análisis de datos desde una perspectiva institucional integral. Esta limitación se relaciona con la ausencia de una política formal de gobierno de datos, de procesos transversales y de una instancia responsable de su coordinación, lo que dificulta establecer criterios específicos para evaluar su implementación y efectividad.\n\nReferencias normativas y documentales:\n- Ley N.º 1178 de Administración y Control Gubernamentales, artículos 13 y 15, relativos al control gubernamental y la auditoría interna.\n- ISO 9001:2015, numerales 9.2 y 9.3, relacionados con auditorías internas y revisión por la dirección.\n- DAMA-DMBOK2, área de gobierno de datos, como referencia técnica para establecer mecanismos de supervisión y evaluación.",
                "Hallazgo: La Aduana Nacional dispone de procedimientos y controles asociados con la administración de sus sistemas de información, incluyendo mecanismos de documentación, gestión de cambios y protección de la información, que proporcionan una base favorable para su evaluación mediante auditorías tecnológicas y de calidad. Sin embargo, no se obtuvo evidencia suficiente de que las actividades de aseguramiento comprendan de manera integral la calidad, integridad, confidencialidad, trazabilidad y utilización de los datos, así como la gobernanza y validación de modelos analíticos. La ausencia de políticas específicas de gobierno de datos limita la disponibilidad de criterios institucionales para evaluar estos componentes de manera sistemática, más allá de los controles tradicionales de los sistemas informáticos.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 13 y 15, relativos al control interno y la auditoría interna.\n- ISO 9001:2015, numerales 7.5, 8.5.6 y 9.2, sobre información documentada, control de cambios y auditoría interna.\n- ISO/IEC 27001:2022, como referencia técnica para evaluar controles de seguridad, acceso e integridad de la información.\n- DAMA-DMBOK2, áreas de gobierno, seguridad y calidad de datos.",
                "Hallazgo: La Aduana Nacional cuenta con mecanismos de seguimiento de hallazgos, acciones correctivas y mejora continua asociados con su sistema de gestión de calidad ISO 9001:2015, lo que constituye una práctica favorable para atender las desviaciones identificadas en los procesos institucionales. Sin embargo, al no existir un marco formal de gobierno de datos, no se identificó evidencia de que estos mecanismos contemplen específicamente la asignación, seguimiento y cierre de recomendaciones relacionadas con la calidad, custodia, aprovechamiento y gobernanza de la información. En este sentido, los procedimientos existentes representan una base institucional que podría ampliarse para incorporar los riesgos y controles propios de una gestión integral de datos.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 13 y 15, relativos al control gubernamental y la auditoría interna.\n- ISO 9001:2015, numerales 9.2, 10.2 y 10.3, relacionados con auditorías internas, acciones correctivas y mejora continua.\n- DAMA-DMBOK2, área de gobierno de datos, como referencia para establecer responsabilidades y mecanismos de supervisión.",
                "Hallazgo: La Aduana Nacional dispone de prácticas institucionalizadas de evaluación y mejora de procesos que, apoyadas en los mecanismos de auditoría y seguimiento establecidos bajo ISO 9001:2015, contribuyen al fortalecimiento de la administración tecnológica y operativa de la información. Sin embargo, no se identificó evidencia de que los resultados de estas evaluaciones se utilicen sistemáticamente para fortalecer el aprovechamiento estratégico de los datos, desarrollar capacidades analíticas o mejorar su utilización en la gestión de riesgos, fiscalización y toma de decisiones. La ausencia de una estrategia integral de gobierno de datos limita la posibilidad de orientar los resultados del aseguramiento hacia la generación de valor institucional a partir de la información.\n\nReferencias normativas y documentales:\n- Ley N.º 1178, artículos 1, 13 y 15, relativos a la generación de información confiable, control gubernamental y auditoría interna.\n- ISO 9001:2015, numerales 9.3 y 10.3, sobre revisión por la dirección y mejora continua.\n- DAMA-DMBOK2, áreas de gobierno de datos e inteligencia de negocios, como referencia para el aprovechamiento institucional de la información."
              ],
              "text": "Incluir gestión de gobierno, seguridad y análisis de datos en los planes de auditoría y aseguramiento que abarquen el acceso y los cambios a los datos, el cumplimiento de normas de gobernanza, los controles de modelos, las salvaguardias de calidad, seguridad, confidencialidad, integridad y uso institucional."
            }
          ],
          "title": "Seguridad, continuidad y seguridad"
        }
      ],
      "id": "pilar_5",
      "number": "5",
      "raw_title": "Gobernanza de datos y capacidades analíticas",
      "title": "5. Gobernanza de datos y capacidades analíticas"
    },
    {
      "assigned_evaluators": [
        "usr_1",
        "usr_2",
        "usr_1792525030420"
      ],
      "code": "KA6",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "assigned_to": "usr_1",
              "code": "KA6-P1",
              "evidence": "Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23 (2023): https://www.aduana.gob.bo/sites/default/files/archivos/circular2172023.pdf\n\nReglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25 (2025): https://www.aduana.gob.bo/sites/default/files/DocumentosAplicacionInterna/REGLAMENTO%20DE%20GESTION%20DE%20RIESGOS%20PARA%20CONTROL%20ADUANERO%20RD%2002_018_25.pdf\n\nRegistro oficial de reglamentos vigentes de la Aduana Nacional: https://www.aduana.gob.bo/reglamento-vigente?body_value=ad&page=1\n\nLey N.º 1178 – Administración y Control Gubernamentales: https://www.lexivox.org/norms/BO-L-1178.html\n\nDecreto Supremo N.º 23215 – Reglamento para el Ejercicio de las Atribuciones de la Contraloría General: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/Decreto_Supremo_N_23215.pdf",
              "findings": "La Aduana Nacional de Bolivia cuenta con un marco normativo formal para la gestión de riesgos, que contempla tanto una regulación institucional de alcance general, aprobada en 2023, como disposiciones específicas para la gestión de riesgos de control aduanero, aprobadas en 2025. El reglamento de 2023 establece responsabilidades para las distintas áreas de la institución y lineamientos para la identificación, evaluación, mitigación y seguimiento de riesgos. \n\n\n Sin embargo, la existencia de estos instrumentos no permite confirmar su aplicación efectiva como un sistema integrado de gestión de riesgos institucionales y de cumplimiento aduanero. Tampoco se dispone de evidencia suficiente sobre el grado de conocimiento del marco en las distintas dependencias, la aplicación homogénea de sus metodologías o la incorporación sistemática de análisis de causas fundamentales y vulnerabilidades en procesos, datos, tecnología, infraestructura y recursos humanos. Por tanto, el principal aspecto pendiente de evaluación es la implementación y articulación efectiva de los mecanismos previstos en la normativa.\n\nEl Reglamento para la Gestión de Riesgos de 2023 tiene un alcance institucional amplio y contempla expresamente la creación y funcionamiento de un Comité de Gestión de Riesgos, así como la integración de la gestión de riesgos en la estructura organizacional. \n\n Por ello, antes de concluir que no existe un marco integrado o un mecanismo de gobernanza, conviene verificar su implementación efectiva, la conformación del comité y la existencia de registros de evaluación y tratamiento de riesgos.",
              "guidance": "1. ¿Existe un marco integrado de gestión de riesgos aprobado y vigente de forma formal?\n2. ¿Abarca el marco tanto los riesgos institucionales como los riesgos de cumplimiento aduanero?\n3. ¿Las principales áreas de la administración aduanera conocen y comprenden el marco?\n4. ¿Existe una metodología documentada para identificar, evaluar, tratar y vigilar riesgos significativos?\n5. ¿Considera la metodología las causas fundamentales y las vulnerabilidades de los procesos, los datos, la tecnología, la infraestructura y los recursos humanos?",
              "id": "pilar_6_c1_q1",
              "indicator": "",
              "lastModifiedAt": "2026-10-25T18:46:16.530Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes": "Hallazgo: La Aduana Nacional dispone de normativa formal para la gestión de riesgos de cumplimiento aduanero, que proporciona una base institucional para la identificación y tratamiento de operaciones de riesgo. Sin embargo, la existencia de este instrumento no permite acreditar que se haya establecido un marco integrado de gestión de riesgos que abarque a toda la institución, incluyendo los riesgos estratégicos, operativos, tecnológicos, financieros y de integridad.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25; Ley N.º 1178, de Administración y Control Gubernamentales, como marco general de administración y control institucional.",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional dispone de normativa formal para la gestión de riesgos de cumplimiento aduanero, que proporciona una base institucional para la identificación y tratamiento de operaciones de riesgo. Sin embargo, la existencia de este instrumento no permite acreditar que se haya establecido un marco integrado de gestión de riesgos que abarque a toda la institución, incluyendo los riesgos estratégicos, operativos, tecnológicos, financieros y de integridad.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25; Ley N.º 1178, de Administración y Control Gubernamentales, como marco general de administración y control institucional.",
                "Hallazgo: Se identifica un marco normativo específico para la gestión de riesgos asociados al cumplimiento de las obligaciones aduaneras, particularmente mediante criterios de selectividad y tratamientos de control. No obstante, no se cuenta con evidencia suficiente para determinar si este marco se encuentra articulado con la gestión de riesgos institucionales, tales como los relacionados con recursos humanos, tecnología, continuidad operativa, integridad y gestión financiera.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Ley N.º 1178, disposiciones sobre sistemas de administración y control gubernamentales.",
                "Hallazgo: La institución dispone de normativa que establece lineamientos para la gestión de riesgos aduaneros. Sin embargo, durante el diagnóstico no se proporcionó información que permita verificar su difusión, conocimiento y comprensión por parte de las principales unidades administrativas y operativas. Por tanto, este aspecto permanece pendiente de evaluación.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Manual de Organización y Funciones de la Aduana Nacional, relativo a la distribución de responsabilidades institucionales.",
                "Hallazgo: La normativa de gestión de riesgos aduaneros proporciona una base para la identificación, análisis y tratamiento de operaciones con probabilidad de incumplimiento. Sin embargo, no se dispone de evidencia suficiente para determinar si existe una metodología institucional documentada que contemple de manera integral la identificación, evaluación, priorización, tratamiento y seguimiento de los riesgos significativos de todas las áreas y procesos de la Aduana Nacional.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Ley N.º 1178, como marco general de control institucional.",
                "Hallazgo: La gestión de riesgos de cumplimiento aduanero constituye una base para identificar operaciones susceptibles de control. Sin embargo, no se cuenta con información suficiente para verificar que la metodología incorpore un análisis estructurado de causas fundamentales y vulnerabilidades institucionales relacionadas con procesos, calidad de datos, sistemas tecnológicos, infraestructura y capacidades del personal. Esta dimensión requiere una revisión específica de los instrumentos metodológicos y de los registros de evaluación de riesgos.\n\nReferencia normativa: Ley N.º 1178, disposiciones sobre control interno y responsabilidad por la función pública; Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25, en su ámbito específico de aplicación."
              ],
              "text": "Establecer e implementar un marco formal de gestión integrada de riesgos para toda la institución que abarque los riesgos de cumplimiento, se difunde y adopte en toda la administración aduanera, y que establezca una metodología documentada para identificar, analizar, evaluar, priorizar, tratar, supervisar, comunicar y revisar los riesgos significativos y sus causas subyacentes."
            },
            {
              "assigned_to": "usr_1",
              "code": "KA6-P2",
              "evidence": "Solicitar una evidencia del funcionamiento de comité de riesgos (institucionales)\n\nReglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23 (2023): https://www.aduana.gob.bo/sites/default/files/archivos/circular2172023.pdf \n\nReglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25 (2025): https://www.aduana.gob.bo/sites/default/files/DocumentosAplicacionInterna/REGLAMENTO%20DE%20GESTION%20DE%20RIESGOS%20PARA%20CONTROL%20ADUANERO%20RD%2002_018_25.pdf \n\nRegistro de documentos de aplicación interna de la Aduana Nacional: https://www.aduana.gob.bo/documentos-aplicacion-interna \n",
              "evidence_delivered": false,
              "findings": "La Aduana Nacional de Bolivia cuenta con una función especializada de gestión de riesgos y procedimientos para la definición e implementación de criterios de selectividad, así como con instrumentos normativos que contemplan mecanismos de gobernanza institucional. Sin embargo, de acuerdo con los hallazgos del diagnóstico, no se encuentra operando un comité de gestión de riesgos que permita revisar y validar colegiadamente las decisiones, coordinar el tratamiento de riesgos institucionales y de cumplimiento, y establecer compromisos de seguimiento. Esta limitación se complementa con debilidades tecnológicas relevantes: las reglas se implementan directamente en el código mediante la intervención de informática, sin disponer de un motor de reglas operativo ni de un ambiente de pruebas que permita simular y validar sus efectos antes de su puesta en producción. En consecuencia, resulta prioritario fortalecer la gobernanza mediante un mecanismo multidisciplinario de decisión y seguimiento, así como incorporar capacidades tecnológicas que permitan gestionar y probar los criterios de selectividad de manera controlada, trazable y oportuna.",
              "guidance": "1. ¿Existe un comité de riesgos u otro mecanismo oficial de gobernanza para la gestión del riesgo aduanero?\n2. ¿Se definen claramente el mandato, el alcance, la frecuencia y las expectativas de resultados del comité?\n3. ¿Se reúne el comité con suficiente regularidad para responder a los cambios en el comercio exterior y los riesgos emergentes?\n4. ¿Analiza el comité riesgos institucionales y de cumplimiento, no solo los criterios de selectividad?\n5. ¿Se documentan las decisiones del comité con las partes responsables, los plazos y las acciones de seguimiento?",
              "id": "pilar_6_c1_q2",
              "indicator": "KPI [KA6-P2]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T18:47:44.060Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional dispone de un equipo especializado que administra los criterios de selectividad y coordina con el área de informática su implementación. Sin embargo, de acuerdo con la información recopilada, no se encuentra constituido ni opera un comité de gestión de riesgos que permita supervisar y validar colegiadamente las decisiones. Actualmente, los cambios en las reglas son definidos por el equipo de riesgos e implementados directamente en el código por informática, sin disponer de un motor de reglas operativo ni de un entorno de pruebas para simular sus efectos antes de su aplicación.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, aprobado mediante RD 01-053-23, que contempla un Comité de Gestión de Riesgos; Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25.",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional dispone de un equipo especializado que administra los criterios de selectividad y coordina con el área de informática su implementación. Sin embargo, de acuerdo con la información recopilada, no se encuentra constituido ni opera un comité de gestión de riesgos que permita supervisar y validar colegiadamente las decisiones. Actualmente, los cambios en las reglas son definidos por el equipo de riesgos e implementados directamente en el código por informática, sin disponer de un motor de reglas operativo ni de un entorno de pruebas para simular sus efectos antes de su aplicación.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, aprobado mediante RD 01-053-23, que contempla un Comité de Gestión de Riesgos; Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25.",
                "Hallazgo: La normativa institucional contempla mecanismos de gobernanza para la gestión de riesgos. No obstante, al no encontrarse constituido ni operar el comité, no se identifican disposiciones efectivamente implementadas que permitan establecer su mandato operativo, alcance, periodicidad de reuniones y resultados esperados. Esta situación limita la asignación colegiada de responsabilidades y la supervisión de las decisiones relacionadas con los riesgos institucionales y aduaneros.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23, disposiciones relativas a la conformación y funcionamiento del Comité de Gestión de Riesgos; Manual de Organización y Funciones de la Aduana Nacional.",
                "Hallazgo: El equipo especializado de riesgos realiza ajustes a los criterios de selectividad, lo que permite responder operativamente a necesidades identificadas. Sin embargo, al no existir un comité de gestión de riesgos en funcionamiento, no se realizan reuniones colegiadas periódicas para revisar riesgos emergentes, evaluar cambios en el entorno comercial y priorizar medidas de tratamiento. Adicionalmente, la dependencia de informática y la ausencia de un entorno de simulación limitan la agilidad y capacidad de validación de las modificaciones propuestas.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23, relativo a la gobernanza institucional; Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25.",
                "Hallazgo: La institución desarrolla actividades especializadas de análisis de riesgos de cumplimiento aduanero, principalmente mediante la definición y actualización de criterios de selectividad. Sin embargo, al no contar con un comité operativo, no se identifica un mecanismo colegiado que articule el análisis de estos riesgos con los de carácter institucional, tales como los tecnológicos, operativos, financieros, de integridad y de recursos humanos. Esta situación limita la coordinación transversal y la adopción de una perspectiva integrada de gestión de riesgos.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23, de alcance institucional; Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25, relativo a riesgos de cumplimiento.",
                "Hallazgo: Las modificaciones a las reglas de selectividad se gestionan mediante la coordinación entre el equipo de riesgos y el área de informática, lo que constituye un procedimiento operativo para su implementación. Sin embargo, al no encontrarse constituido ni operar un comité de gestión de riesgos, no existen decisiones colegiadas que puedan documentarse mediante actas con responsables, plazos y compromisos de seguimiento. Tampoco se dispone de evidencia suficiente sobre mecanismos equivalentes de seguimiento de las decisiones relacionadas con la gestión integral de riesgos.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23; Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25."
              ],
              "text": "Mantener un comité multidisciplinario de gestión de riesgos o un mecanismo de gobernanza equivalente."
            },
            {
              "assigned_to": "usr_1",
              "code": "KA6-P3",
              "evidence": "Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25: https://www.aduana.gob.bo/sites/default/files/DocumentosAplicacionInterna/REGLAMENTO%20DE%20GESTION%20DE%20RIESGOS%20PARA%20CONTROL%20ADUANERO%20RD%2002_018_25.pdf \n\nFicha oficial del Reglamento de Gestión de Riesgos para Control Aduanero: https://www.aduana.gob.bo/node/1407705 \n\nManual de Organización y Funciones de la Aduana Nacional, RA-PE-02-085-24: https://portal.aduana.gob.bo/aduana7/MOF%20-%20RA-PE-02-085-24.pdf\n\nFunciones de las administraciones de Aduana Interior: https://portal.aduana.gob.bo/aduana7/content/administraci%C3%B3n-aduana-interior",
              "findings": "La Gerencia de Riesgos y Fiscalización cubre esta función.\n\nLa Aduana Nacional de Bolivia cuenta con una función central especializada de gestión de riesgos, ejercida por la Gerencia Nacional de Riesgos y Fiscalización, y con un marco normativo que establece responsabilidades tanto para esta instancia como para las administraciones aduaneras. Asimismo, el esquema contempla la participación de las aduanas en la identificación de riesgos locales y la asignación de controles, lo que permite incorporar información operativa a la gestión de la selectividad. Sin embargo, la facultad de selección local, reportada hasta en un 7 % de los canales rojo y amarillo, requiere mecanismos de coordinación y supervisión que aseguren su consistencia con los criterios nacionales. Adicionalmente, la revisión de riesgos por parte de las administraciones aduaneras, independientemente de las alertas del sistema, hace necesario delimitar las responsabilidades entre la identificación de riesgos y la ejecución de controles. Finalmente, no se dispone de evidencia suficiente para evaluar la independencia funcional, la adecuación de los recursos y la efectividad de la coordinación entre las instancias centrales y operativas.\n\nLa normativa consultada confirma la distribución de responsabilidades entre la función central de riesgos y las administraciones aduaneras. El límite específico del 7 % procede de la información proporcionada durante el diagnóstico y requiere contrastarse con la disposición operativa aplicable. Asimismo, la revisión de riesgos por las aduanas no demuestra, por sí sola, una falta de independencia funcional: es necesario verificar quién autoriza los criterios de selección y quién ejecuta los controles.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia la administración puede establecer una función centralizada de gestión de riesgos especializada en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan estos acuerdos un mandato claro, autoridad y recursos adecuados e independencia funcional respecto a la ejecución de controles en primera línea?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_6_c1_q3",
              "indicator": "KPI [KA6-P3]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T18:54:23.038Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes": "Hallazgo: La Aduana Nacional cuenta con una función especializada de gestión de riesgos, ejercida por la Gerencia de Riesgos y Fiscalización, lo que proporciona una estructura formal para coordinar el análisis de riesgos y los criterios de selectividad. Asimismo, las administraciones aduaneras disponen de facultades para asignar localmente hasta un 7 % de los controles correspondientes a canales rojo y amarillo. Este esquema combina una función central especializada con atribuciones de selección descentralizadas.\n\nReferencia normativa: Manual de Organización y Funciones de la Aduana Nacional; Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25, relativo a las responsabilidades de las unidades que intervienen en la gestión de riesgos y la selectividad.",
              "notes_history": [
                {
                  "id": "note_1792432353761_ix2s",
                  "text": "Se menciona centralización de datos",
                  "timestamp": "2026-10-19T17:52:33.761Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1792433035520_5hy7",
                  "text": "Las eduanas pueden pedir que se bloquee  un canal",
                  "timestamp": "2026-10-19T18:03:55.520Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                },
                {
                  "id": "note_1792433059214_p0vi",
                  "text": "2 o tres casos por semana",
                  "timestamp": "2026-10-19T18:04:19.214Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con una función especializada de gestión de riesgos, ejercida por la Gerencia de Riesgos y Fiscalización, lo que proporciona una estructura formal para coordinar el análisis de riesgos y los criterios de selectividad. Asimismo, las administraciones aduaneras disponen de facultades para asignar localmente hasta un 7 % de los controles correspondientes a canales rojo y amarillo. Este esquema combina una función central especializada con atribuciones de selección descentralizadas.\n\nReferencia normativa: Manual de Organización y Funciones de la Aduana Nacional; Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25, relativo a las responsabilidades de las unidades que intervienen en la gestión de riesgos y la selectividad.",
                "Hallazgo: La Gerencia de Riesgos y Fiscalización constituye la instancia especializada para la gestión de riesgos a nivel institucional, mientras que las administraciones aduaneras pueden intervenir en la selección local de operaciones para control, dentro del límite establecido. Esta distribución de responsabilidades permite combinar criterios centrales con el conocimiento operativo de las aduanas. Sin embargo, no se dispone de evidencia suficiente para determinar si existen mecanismos homogéneos de coordinación, supervisión y evaluación de los criterios locales en todas las dependencias.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Manual de Organización y Funciones de la Aduana Nacional, en lo relativo a las atribuciones de la Gerencia de Riesgos y Fiscalización y de las administraciones aduaneras.",
                "Hallazgo: La función especializada de gestión de riesgos cuenta con un mandato institucional diferenciado de las actividades operativas de control. No obstante, las administraciones aduaneras conservan facultades de selección local y, de acuerdo con la información recopilada, revisan los riesgos de las operaciones independientemente de las alertas emitidas por el sistema. Esta práctica hace necesario precisar la delimitación entre las responsabilidades de análisis y selección de riesgos y las de ejecución de controles. Asimismo, no se dispone de evidencia suficiente para determinar si los recursos asignados y los mecanismos de independencia funcional resultan adecuados.\n\nReferencia normativa: Manual de Organización y Funciones de la Aduana Nacional; Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25, sobre las atribuciones de las unidades responsables de la gestión de riesgos y la ejecución de controles.",
                "Hallazgo: La existencia de la Gerencia de Riesgos y Fiscalización y de facultades de selección local constituye evidencia de un esquema organizativo de gestión de riesgos con participación central y operativa. Sin embargo, no se presentaron resultados desagregados que permitan evaluar la cobertura y consistencia de este esquema entre las distintas administraciones aduaneras, ni comparar la efectividad de los criterios centrales y locales. Se requiere examinar los registros de selectividad, las incidencias detectadas y los resultados de los controles para determinar su desempeño y contribución a la gestión institucional de riesgos.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Manual de Organización y Funciones de la Aduana Nacional."
              ],
              "text": "Establecer una función central especializada de gestión de riesgos con un mandato claro, autoridad y recursos adecuados, e independencia funcional respecto a la ejecución de controles en primera línea."
            },
            {
              "assigned_to": "usr_1",
              "code": "KA6-P4",
              "evidence": "Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23: https://www.aduana.gob.bo/sites/default/files/archivos/circular2172023.pdf \n\nReglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25: https://www.aduana.gob.bo/node/1407705 \n\nRegistro oficial de reglamentos vigentes: https://www.aduana.gob.bo/reglamento-vigente?body_value=ad&page=1 \n\nReglamento a la Ley General de Aduanas, DS N.º 25870: https://www.aduana.gob.bo/rlga_view \n",
              "evidence_delivered": true,
              "evidence_delivery_date": "25 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con instrumentos normativos que establecen un marco para la gestión de riesgos institucionales y de cumplimiento aduanero, así como con mecanismos de recepción anticipada de información que pueden contribuir a la identificación temprana de operaciones de riesgo. Sin embargo, de acuerdo con los hallazgos del diagnóstico, la gestión se concentra predominantemente en riesgos fiscales y normativos, especialmente en valor, sin evidencia suficiente de una articulación efectiva con los riesgos tecnológicos, operativos, de infraestructura, integridad y recursos humanos. Asimismo, permanece pendiente verificar el grado de conocimiento y aplicación homogénea del marco en las distintas dependencias. En materia de información anticipada, los plazos reportados de veinte días para mercancías de ultramar y la ampliación prevista de uno a cinco días para el transporte terrestre representan elementos relevantes para fortalecer el análisis previo al arribo, aunque requieren validación normativa y operativa. En consecuencia, resulta necesario evaluar tanto la integración efectiva de los distintos ámbitos de riesgo como la oportunidad y calidad de la información utilizada para anticipar los controles.",
              "guidance": "1. ¿Existe un marco integrado de gestión de riesgos aprobado y vigente de forma formal?\n2. ¿Abarca el marco tanto los riesgos institucionales como los riesgos de cumplimiento aduanero?\n3. ¿Las principales áreas de la administración aduanera conocen y comprenden el marco?\n4. ¿Existe una metodología documentada para identificar, evaluar, tratar y vigilar riesgos significativos?\n5. ¿Considera la metodología las causas fundamentales y las vulnerabilidades de los procesos, los datos, la tecnología, la infraestructura y los recursos humanos?",
              "id": "pilar_6_c1_q4",
              "indicator": "KPI [KA6-P4]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T05:23:34.924Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con disposiciones normativas formalmente aprobadas para la gestión de riesgos institucionales y de cumplimiento aduanero, lo que proporciona una base regulatoria para su identificación y tratamiento. Sin embargo, su aplicación se concentra principalmente en riesgos de carácter fiscal y normativo, sin evidencia suficiente de una integración efectiva de las distintas categorías de riesgo en un esquema institucional único.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, aprobado mediante RD 01-053-23; Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25.",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con disposiciones normativas formalmente aprobadas para la gestión de riesgos institucionales y de cumplimiento aduanero, lo que proporciona una base regulatoria para su identificación y tratamiento. Sin embargo, su aplicación se concentra principalmente en riesgos de carácter fiscal y normativo, sin evidencia suficiente de una integración efectiva de las distintas categorías de riesgo en un esquema institucional único.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, aprobado mediante RD 01-053-23; Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25.",
                "Hallazgo: La institución dispone de normativa que contempla la gestión de riesgos institucionales y de cumplimiento aduanero. No obstante, de acuerdo con la información recopilada, su aplicación operativa se orienta predominantemente a los riesgos fiscales y al cumplimiento de las disposiciones aduaneras. En consecuencia, no se cuenta con evidencia suficiente de que los riesgos tecnológicos, operativos, de integridad, infraestructura y recursos humanos sean evaluados y tratados de manera articulada con los riesgos de cumplimiento.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23, de alcance institucional; Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25, relativo al análisis y tratamiento de riesgos aduaneros; Ley N.º 1178, de Administración y Control Gubernamentales.",
                "Hallazgo: La Aduana Nacional dispone de instrumentos normativos que establecen responsabilidades para la gestión de riesgos. Sin embargo, no se cuenta con información suficiente para determinar si estos instrumentos se difunden y comprenden de manera homogénea en las distintas áreas institucionales. La orientación predominantemente fiscal y normativa observada en su aplicación plantea la necesidad de verificar el grado de conocimiento y apropiación del enfoque integral de riesgos por parte de las unidades administrativas y operativas.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23; Manual de Organización y Funciones de la Aduana Nacional.",
                "Hallazgo: La institución cuenta con disposiciones que regulan la identificación y tratamiento de riesgos aduaneros, así como con mecanismos para recibir información anticipada de las operaciones de comercio exterior. Se reportan plazos de referencia de veinte días para mercancías provenientes de ultramar y una modificación prevista de uno a cinco días para el transporte terrestre. Sin embargo, es necesario verificar su fundamento normativo, alcance y entrada en vigor. Adicionalmente, no se dispone de evidencia suficiente sobre la aplicación de una metodología homogénea que abarque la identificación, evaluación, tratamiento y seguimiento de los riesgos significativos de todos los procesos institucionales.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23; Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Ley N.º 1990, Ley General de Aduanas, y su Reglamento, aprobado mediante Decreto Supremo N.º 25870, en materia de control aduanero y presentación de información.",
                "Hallazgo: La gestión de riesgos aduaneros se encuentra orientada principalmente a la identificación de incumplimientos fiscales y normativos. Sin embargo, no se identificó evidencia suficiente de que la metodología aplicada contemple sistemáticamente el análisis de causas fundamentales y vulnerabilidades relacionadas con procesos, calidad y disponibilidad de datos, tecnología, infraestructura y capacidades del personal. Esta limitación dificulta determinar si las medidas de tratamiento atienden las causas subyacentes de los riesgos y no únicamente sus manifestaciones operativas.\n\nReferencia normativa: Reglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23; Ley N.º 1178, disposiciones sobre administración y control institucional; Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25."
              ],
              "text": "Aplicar una gestión integrada de riesgos que abarquen los riesgos relevantes en materia de ingresos, facilitación del comercio, seguridad, integridad y protección fronteriza. a lo largo de los procesos comerciales aduaneros, según corresponda. y."
            },
            {
              "assigned_to": "usr_1",
              "code": "KA6-P5",
              "evidence": "",
              "findings": "No se segmentan a los operadores con base en tamaña y ",
              "guidance": "1. ¿Se identifican riesgos de cumplimiento prioritarios para los cuales se requieren planes de mejora?\n2. ¿Identifican los planes las causas subyacentes de los riesgos?\n3. ¿Se definen los planes tratamientos diferenciados según el tipo de operador, su tamaño, su comportamiento de cumplimiento y el nivel de riesgo?\n4. ¿Incluyen los planes medidas de educación, asistencia, facilitación, control y aplicación de sanciones, según corresponda?\n5. ¿Asignan en los planes a las partes responsables, plazos, recursos e indicadores de supervisión?",
              "id": "pilar_6_c1_q5",
              "indicator": "KPI [KA6-P5]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T18:56:40.518Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Desarrollar, ejecutar y revisar periódicamente planes de mejora del cumplimiento para los riesgos prioritarios que identifiquen el riesgo y sus factores impulsores subyacentes y definan medidas de tratamiento diferenciadas según su tamaño y niveles de riesgo, que van desde educación y facilitación para operadores de menor riesgo hasta controles y medidas de ejecución más intensivas para los de mayor riesgo."
            }
          ],
          "title": "Gestión integrada de riesgos a nivel de toda la institución"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "assigned_to": "usr_1",
              "code": "KA6-P6",
              "evidence": "",
              "findings": "Consideran que la calidad de los datos es buena.",
              "guidance": "1. ¿Integra la administración la información electrónica anticipada y declarada al análisis de riesgos?\n2. ¿Utiliza el análisis de riesgos los resultados de control, inteligencia, historial de cumplimiento y fuentes de datos internos y externos relevantes?\n3. ¿Son los datos utilizados para el análisis de riesgos fiables, oportunos e interoperables?",
              "id": "pilar_6_c2_q1",
              "indicator": "KPI [KA6-P6]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T19:01:11.142Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792435479794_bk8h",
                  "text": "Los datos dependen de Ttecnología y pueden variar de quien los atienda",
                  "timestamp": "2026-10-19T18:44:39.794Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Garantizar que existan datos fiables, oportunos, suficientemente completos, accesibles, seguros e interoperables para la gestión del riesgo."
            },
            {
              "assigned_to": "usr_1",
              "code": "KA6-P7",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia es capaz la administración de mantener perfiles consolidados y actualizados de importadores, exportadores, corredores, transportistas y otros actores pertinentes de la cadena de suministro, utilizando mecanismos confiables de identificación y resolución de entidades para conectar sus transacciones, relaciones, autorizaciones, historial de cumplimiento, resultados de control, determinaciones de auditoría, delitos y demás información de riesgo pertinente entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_6_c2_q2",
              "indicator": "KPI [KA6-P7]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-25T19:06:11.507Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Mantener perfiles consolidados y actualizados de importadores, exportadores, corredores, transportistas y otros actores pertinentes de la cadena de suministro."
            },
            {
              "assigned_to": "usr_1",
              "code": "KA6-P8",
              "evidence": "",
              "findings": "No",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de mantener un perfil de cumplimiento de 360 grados para cada importador y exportador que consolide información relativa a sus características generales, transacciones históricas por código SA, valores declarados, despachantes de aduana utilizados, regímenes aduaneros aplicados, historial tributario y de cumplimiento, resultados de controles, determinaciones de auditoría, pagos y devoluciones entre las operaciones y unidades pertinentes. ¿o ubicaciones?\n3. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_6_c2_q3",
              "indicator": "KPI [KA6-P8]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-25T19:10:50.048Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792435593064_thpi",
                  "text": "Tienen identificasos a los contribuyentes que siempre subvaloran",
                  "timestamp": "2026-10-19T18:46:33.064Z",
                  "userColor": "#0d9488",
                  "userId": "usr_2",
                  "userName": "Miguel Tapia",
                  "userRole": "Gestión de Riesgos"
                }
              ],
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Mantener un perfil de cumplimiento de 360 grados para cada importador y exportador que consolide información sobre sus características generales, transacciones históricas por código SA, valores declarados, despachantes de aduana utilizados, regímenes aduaneros aplicados, historial tributario y de cumplimiento, resultados de controles, hallazgos de auditoría, pagos y devoluciones."
            },
            {
              "assigned_to": "usr_1",
              "code": "KA6-P9",
              "evidence": "",
              "findings": "si lo hacen con los reportes que les da el área de informática y usan Excel para analizar.",
              "guidance": "1. ¿Utiliza la administración técnicas de análisis de datos para detectar patrones y anomalías de riesgo?\n2. ¿Utiliza la administración herramientas como la cotejación de datos, el análisis de tendencias, la detección de anomalías, los modelos predictivos, el análisis de redes o la visualización?\n3. ¿Se identifican las amenazas emergentes mediante análisis sistemáticos?",
              "id": "pilar_6_c2_q4",
              "indicator": "KPI [KA6-P9]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T19:16:58.178Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Utilizar técnicas analíticas documentadas y adecuadas para identificar riesgos conocidos e incipientes, patrones, anomalías, cambios de comportamiento y relaciones relevantes."
            },
            {
              "assigned_to": "usr_1",
              "code": "KA6-P10",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se desarrollan, prueban, validan y actualizan sistemáticamente los perfiles de riesgo, las reglas y los criterios de selectividad?\n2. ¿Los perfiles de riesgo y las reglas se basan en criterios objetivos, documentados y rastreables?\n3. ¿Se aplican tratamientos de los riesgos de manera uniforme en todos los puntos de control, modos de transporte, segmentos de la cadena de suministro y tiempo?",
              "id": "pilar_6_c2_q5",
              "indicator": "KPI [KA6-P10]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T19:20:24.112Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes": "Hallazgo: La Aduana Nacional dispone de un equipo de diez analistas dedicado a la revisión de reglas de selectividad y al análisis de declaraciones asignadas a canal verde, con el propósito de identificar operaciones que ameriten controles diferidos, con o sin presencia de mercancías. Asimismo, cuenta con diversas fuentes de información y un motor de reglas de negocio. Sin embargo, la capacidad analítica se encuentra limitada por la dependencia del área de informática para la extracción de datos y la implementación de reglas, así como por el uso de Excel como principal herramienta de análisis. Aunque existe un motor de reglas, este no se utiliza operativamente y las propuestas se documentan para su posterior implementación por informática. Estas condiciones restringen la autonomía de los analistas y la agilidad para desarrollar, probar y actualizar criterios de selección. No se dispone de evidencia suficiente sobre procedimientos sistemáticos de validación y evaluación de la efectividad de las reglas.\n\nReferencia normativa: Decreto Supremo N.º 25870, Reglamento a la Ley General de Aduanas, disposiciones relativas al control aduanero y la selectividad; normativa interna de gestión de riesgos de la Aduana Nacional, particularmente la disposición que asigna al área de informática la carga de reglas de selección.",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "subquestion_comments": [
                "",
                "",
                ""
              ],
              "text": "Desarrollar, someter a prueba, validar, aprobar, desplegar, supervisar, revisar, actualizar, suspender y retirar perfiles de riesgo, normas y criterios de selectividad basados en información e inteligencia."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA6-P11",
              "evidence": "Clasificacion de las reglas  por  tipo de regla (Locales, nacionales, aleatorio, normativas)\n\nReglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25 (2025): https://www.aduana.gob.bo/sites/default/files/DocumentosAplicacionInterna/REGLAMENTO%20DE%20GESTION%20DE%20RIESGOS%20PARA%20CONTROL%20ADUANERO%20RD%2002_018_25.pdf \n\nFicha institucional de publicación del Reglamento de Gestión de Riesgos (2025): https://www.aduana.gob.bo/node/1407705 \n\nReglamento para la Gestión de Riesgos en la Aduana Nacional, RD 01-053-23 (antecedente de 2023): https://www.aduana.gob.bo/sites/default/files/archivos/circular2172023.pdf \n\nResultados de efectividad y periodicidad de evaluación: Información proporcionada durante el diagnóstico institucional, sin enlace público.",
              "evidence_delivered": true,
              "evidence_delivery_date": "25 oct 2026",
              "findings": "La Aduana Nacional de Bolivia dispone de un marco normativo para la evaluación de los criterios de selectividad y realiza mediciones mensuales de su efectividad, alcanzando un índice de acierto del 75 % a nivel nacional. No obstante, la metodología se concentra en la proporción de controles con incidencias, sin considerar el monto recaudado ni el impacto fiscal de cada criterio, lo que limita una evaluación integral de su contribución a los objetivos institucionales. Destaca particularmente el 49 % de efectividad del criterio aleatorio, que constituye una señal relevante de incumplimiento entre las operaciones seleccionadas por este mecanismo y amerita un análisis específico para estimar su alcance. Por otra parte, el 100 % de efectividad de los criterios locales debe interpretarse considerando las exigencias normativas que condicionan su aplicación. Finalmente, no se dispone de evidencia suficiente para establecer si las evaluaciones mensuales se traducen sistemáticamente en ajustes de las reglas y tratamientos de riesgo, por lo que resulta pertinente fortalecer la evaluación incorporando indicadores de impacto fiscal y mecanismos documentados de retroalimentación.\n\nEl 49 % de acierto del criterio aleatorio no debe equipararse automáticamente con una tasa nacional de incumplimiento. Para realizar esa inferencia es necesario verificar que la selección sea verdaderamente aleatoria, que la muestra sea representativa y que las incidencias correspondan a una definición consistente de incumplimiento.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de aplicar una metodología transparente para evaluar y actualizar sistemática y regularmente los criterios de selectividad, utilizando análisis de riesgo y resultados de desempeño para mejorar la focalización entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_6_c2_q6",
              "indicator": "KPI [KA6-P11]:  Disminución de la reincidencia interanual (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T04:37:50.100Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con disposiciones normativas que establecen la evaluación periódica de la efectividad de los criterios de selectividad, mediante un indicador que relaciona los controles con resultados positivos respecto del total de controles realizados. Este mecanismo proporciona una base formal para evaluar el desempeño de las reglas. Sin embargo, la metodología utilizada no incorpora el monto recaudado como variable de evaluación, lo que limita la posibilidad de valorar su impacto económico y fiscal.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero de la Aduana Nacional, aprobado mediante RD 02-018-25; Decreto Supremo N.º 25870, Reglamento a la Ley General de Aduanas, artículo 106, relativo al sistema selectivo o aleatorio.",
              "recommendations": "Es necesario incorporar el monto de recaudación esperado por control para cada criterio de selección, a fin de evaluar las reglas considerando su impacto fiscal. Asimismo, se requiere desarrollar indicadores que permitan medir los cambios en el comportamiento de los contribuyentes como resultado de las acciones de control.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con disposiciones normativas que establecen la evaluación periódica de la efectividad de los criterios de selectividad, mediante un indicador que relaciona los controles con resultados positivos respecto del total de controles realizados. Este mecanismo proporciona una base formal para evaluar el desempeño de las reglas. Sin embargo, la metodología utilizada no incorpora el monto recaudado como variable de evaluación, lo que limita la posibilidad de valorar su impacto económico y fiscal.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero de la Aduana Nacional, aprobado mediante RD 02-018-25; Decreto Supremo N.º 25870, Reglamento a la Ley General de Aduanas, artículo 106, relativo al sistema selectivo o aleatorio.",
                "¿Con qué consistencia aplica la administración una metodología transparente para evaluar y actualizar sistemáticamente los criterios de selectividad, utilizando análisis de riesgos y resultados de desempeño?\nHallazgo: La institución aplica una metodología de evaluación mensual de los criterios de selectividad, utilizando como principal indicador la proporción de controles efectivos respecto del total de controles realizados. Los resultados reportados muestran un índice de efectividad del 75 % a nivel nacional, con valores del 100 % para los criterios locales y del 49 % para el criterio aleatorio. Sin embargo, el resultado de los criterios locales debe interpretarse considerando que la normativa exige dicho nivel de efectividad, por lo que no necesariamente constituye evidencia de una mayor capacidad predictiva. Asimismo, la evaluación se concentra en la frecuencia de hallazgos, sin incorporar el monto recaudado ni otros indicadores que permitan comparar el impacto fiscal de las reglas. No se dispone de evidencia suficiente sobre la utilización sistemática de estos resultados para actualizar los criterios de selección.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25; Reglamento para la Gestión de Riesgos de la Aduana Nacional, aprobado mediante RD 01-053-23, como antecedente normativo.",
                "¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?\nHallazgo: La Aduana Nacional realiza evaluaciones mensuales de la efectividad de los criterios de selectividad, lo que permite disponer de información periódica sobre los resultados de los controles. Destaca que el criterio aleatorio registra una efectividad del 49 %, resultado que constituye una señal relevante sobre la frecuencia de incumplimientos detectados en operaciones seleccionadas sin criterios específicos de riesgo. No obstante, este porcentaje requiere analizarse según la naturaleza y gravedad de las incidencias, así como su representatividad estadística, antes de utilizarlo como estimación del incumplimiento general. Adicionalmente, no se identificó evidencia suficiente de que los resultados mensuales se traduzcan sistemáticamente en ajustes de reglas, prioridades o medidas correctivas, ni de que se evalúe su impacto en términos de recaudación.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25; Decreto"
              ],
              "text": "Aplicar una metodología transparente para evaluar y actualizar sistemática y regularmente los criterios de selectividad."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA6-P12",
              "evidence": "Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25: https://www.aduana.gob.bo/node/1407705\n\nManual de Organización y Funciones de la Aduana Nacional, aprobado mediante RA-PE-02-085-24: https://portal.aduana.gob.bo/aduana7/MOF%20-%20RA-PE-02-085-24.pdf\n\nDecreto Supremo N.º 26115 – Normas Básicas del Sistema de Administración de Personal: https://www.economiayfinanzas.gob.bo/sites/default/files/2021-08/DS_N_26115_NB_SAP.pdf\n\nManual de Puestos de la Aduana Nacional: https://portal.aduana.gob.bo/aduana7/content/manual-de-puestos",
              "evidence_delivered": true,
              "evidence_delivery_date": "25 oct 2026",
              "findings": "La Aduana Nacional de Bolivia cuenta con una función especializada de gestión de riesgos y un equipo de diez profesionales responsables de desarrollar actividades de análisis e inteligencia aduanera. Esta dotación podría resultar suficiente para atender las necesidades institucionales, siempre que disponga de las competencias técnicas y herramientas adecuadas. Sin embargo, se identifican limitaciones importantes en la capacidad analítica, derivadas del uso predominante de Excel, la falta de herramientas estadísticas especializadas y la dependencia del área de tecnología para obtener información. Asimismo, no se dispone de evidencia suficiente sobre la definición de competencias específicas, los mecanismos de selección y los programas estructurados de formación para los analistas de riesgos. En consecuencia, resulta prioritario fortalecer las capacidades técnicas del equipo y dotarlo de herramientas que permitan incrementar su autonomía, productividad y capacidad para desarrollar análisis de mayor complejidad. La necesidad de ampliar la plantilla deberá determinarse posteriormente, a partir de una evaluación objetiva de las cargas de trabajo y de los resultados obtenidos con estas mejoras.\n\nLa existencia de una función especializada y de un equipo de diez profesionales constituye un hallazgo del diagnóstico. La suficiencia de la plantilla es una hipótesis que requiere validación mediante un análisis de cargas de trabajo, mientras que las limitaciones tecnológicas y las necesidades de fortalecimiento técnico corresponden a las condiciones observadas.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia puede la administración mantener una capacidad de inteligencia y análisis de riesgos profesional en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abbarcan los acuerdos las competencias definidas, la selección basada en el mérito, la dotación de personal adecuada y la capacitación inicial y continua estructuradas?\n4. ¿Son adecuados las responsabilidades, la dotación de personal, las competencias, la capacitación y los recursos para el alcance y la carga de trabajo de la práctica?",
              "id": "pilar_6_c2_q7",
              "indicator": "KPI [KA6-P12]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T19:32:05.113Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes": "Hallazgo: La Aduana Nacional cuenta con una función especializada de gestión de riesgos, respaldada por disposiciones normativas que regulan sus responsabilidades y procedimientos. Asimismo, dispone de un equipo de diez profesionales dedicados al análisis de riesgos. Sin embargo, la existencia de este marco formal no permite acreditar que se hayan establecido todos los requisitos técnicos, las herramientas analíticas y los mecanismos de desarrollo profesional necesarios para garantizar una capacidad especializada de inteligencia y análisis de riesgos.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25; Manual de Organización y Funciones de la Aduana Nacional; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal.",
              "recommendations": "El área de riesgos debe tener cierto nivel de independencia en el uso de los datos y no estar sujeto  a la atención de  del área de tecnología,  para lograrlo, es necesario adquirir herramienta  que se lo permitan y capacitar al personal en las mismas.",
              "score": 1,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con una función especializada de gestión de riesgos, respaldada por disposiciones normativas que regulan sus responsabilidades y procedimientos. Asimismo, dispone de un equipo de diez profesionales dedicados al análisis de riesgos. Sin embargo, la existencia de este marco formal no permite acreditar que se hayan establecido todos los requisitos técnicos, las herramientas analíticas y los mecanismos de desarrollo profesional necesarios para garantizar una capacidad especializada de inteligencia y análisis de riesgos.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25; Manual de Organización y Funciones de la Aduana Nacional; Decreto Supremo N.º 26115, Normas Básicas del Sistema de Administración de Personal.",
                "Hallazgo: La institución dispone de un equipo especializado de diez profesionales que desarrolla actividades de análisis y evaluación de riesgos aduaneros. No obstante, su capacidad operativa se encuentra condicionada por la ausencia de herramientas especializadas para el análisis estadístico, el uso predominante de Excel y la dependencia del área de tecnología para la extracción de información. Estas limitaciones reducen la autonomía y agilidad de los analistas para desarrollar estudios, identificar patrones de incumplimiento y atender oportunamente las necesidades de las distintas dependencias aduaneras. No se dispone de evidencia suficiente para determinar la cobertura y consistencia de estas capacidades en todas las operaciones y localidades.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Manual de Organización y Funciones de la Aduana Nacional, en lo relativo a las responsabilidades de análisis y gestión de riesgos.",
                "Hallazgo: La Aduana Nacional cuenta con un equipo de profesionales asignado a la gestión de riesgos y dispone de un marco general de administración de personal que contempla requisitos de selección y capacitación. Sin embargo, se identifican necesidades de fortalecimiento de las capacidades técnicas de los analistas, particularmente en métodos estadísticos y herramientas analíticas especializadas. Adicionalmente, no se dispone de evidencia suficiente sobre la existencia de perfiles de competencias específicos para la función de riesgos, mecanismos de selección basados en su demostración o programas estructurados de formación inicial y continua para estos profesionales.\n\nReferencia normativa: Decreto Supremo N.º 26115, disposiciones relativas a la descripción de puestos, reclutamiento y selección, evaluación del desempeño y capacitación productiva; Manual de Puestos de la Aduana Nacional; Reglamento de Gestión de Riesgos para Control Aduanero.",
                "Hallazgo: El equipo de riesgos está integrado por diez profesionales, una dotación que podría resultar suficiente para atender sus responsabilidades si contara con las competencias y herramientas tecnológicas adecuadas. Sin embargo, la dependencia de informática para acceder a los datos y el uso limitado de herramientas analíticas restringen su productividad y capacidad de respuesta. En este contexto, se requiere fortalecer las competencias técnicas del personal e incorporar soluciones que faciliten el acceso, procesamiento y análisis autónomo de la información. La suficiencia de la dotación deberá valorarse mediante un análisis de cargas de trabajo y productividad, considerando las responsabilidades asignadas y el alcance de las operaciones aduaneras.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Decreto Supremo N.º 26115, disposiciones sobre programación de necesidades de personal y capacitación productiva; Manual de Organización y Funciones de la Aduana Nacional."
              ],
              "text": "Mantener una capacidad profesional de inteligencia y análisis de riesgos."
            },
            {
              "assigned_to": "usr_2",
              "code": "KA6-P13",
              "evidence": "Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25: https://www.aduana.gob.bo/node/1407705\n\nReglamento del Sistema Informático de Selectividad, RA-PE 02-025-19 (antecedente normativo): https://portal.aduana.gob.bo/aduana7/sites/default/files/SCGNNDTA/otros/RA-PE%2002-025-19.pdf\n\nManual de Organización y Funciones de la Aduana Nacional, RA-PE-02-085-24: https://portal.aduana.gob.bo/aduana7/MOF%20-%20RA-PE-02-085-24.pdf",
              "evidence_delivered": false,
              "findings": "La Aduana Nacional de Bolivia cuenta con mecanismos tecnológicos para implementar reglas de selectividad y dispone de controles de auditoría sobre sus modificaciones, lo que proporciona una base para la trazabilidad de los cambios. Sin embargo, el equipo de gestión de riesgos depende del área de Tecnologías de la Información para incorporar, modificar y aplicar las reglas, sin disponer de autonomía operativa para administrar directamente estos procesos. Esta dependencia puede limitar la oportunidad de respuesta y la capacidad para realizar ajustes ante cambios en los patrones de riesgo. Adicionalmente, aunque existen mecanismos de auditoría, no se cuenta con un comité multidisciplinario que permita fortalecer la coordinación, supervisión y validación de las decisiones relacionadas con los criterios de selectividad. En este contexto, resulta conveniente evaluar un esquema de administración directa de reglas por personal autorizado de riesgos, sujeto a controles de acceso, segregación de funciones, autorizaciones y trazabilidad, así como fortalecer los mecanismos de gobernanza institucional.\n\nLa dependencia de Tecnología, la existencia de controles de auditoría y la ausencia de un comité corresponden a los hallazgos proporcionados. Se recomienda verificar documentalmente el alcance de los rastros de auditoría y las responsabilidades previstas en la normativa vigente antes de definir cambios en la administración de las reglas.",
              "guidance": "1. ¿Puede el personal autorizado de gestión de riesgos configurar perfiles de riesgo, reglas y criterios de selectividad directamente en el sistema TIC de la aduana?\n2. ¿Puede el personal autorizado crear, aplicar, actualizar, validar y supervisar reglas sobre riesgo sin apoyo TIC?\n3. ¿Se mantienen mecanismos de gobernanza y rastros de auditoría para los cambios en las reglas de riesgo?",
              "id": "pilar_6_c2_q8",
              "indicator": "",
              "lastModifiedAt": "2026-10-27T02:37:43.759Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes": "Hallazgo: La Aduana Nacional cuenta con mecanismos tecnológicos para la implementación de perfiles de riesgo y criterios de selectividad. Sin embargo, el personal especializado en gestión de riesgos no dispone de autonomía para configurar directamente las reglas en el sistema, por lo que depende del área de Tecnologías de la Información para su implementación. Esta dependencia limita la agilidad operativa y la capacidad de respuesta ante cambios en los patrones de incumplimiento.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25; Reglamento del Sistema Informático de Selectividad, aprobado mediante RA-PE 02-025-19, como antecedente normativo. Es necesario contrastar las responsabilidades asignadas a Tecnología y Gestión de Riesgos con la versión vigente del reglamento.",
              "recommendations": "Reactivar y fortalecer el Comité Multidisciplinario de Gestión de Riesgos como instancia responsable de supervisar la estrategia institucional de riesgos, evaluar la efectividad de los criterios de selectividad y orientar las decisiones de control. Establecer un protocolo de evaluación trimestral de las reglas de selectividad, considerando su tasa de acierto y rendimiento recaudatorio, y facultar a la Unidad de Riesgos para su parametrización directa y oportuna, bajo mecanismos estrictos de autorización, trazabilidad y auditoría de cambios.",
              "score": 2,
              "status": "evaluated",
              "subquestion_comments": [
                "Hallazgo: La Aduana Nacional cuenta con mecanismos tecnológicos para la implementación de perfiles de riesgo y criterios de selectividad. Sin embargo, el personal especializado en gestión de riesgos no dispone de autonomía para configurar directamente las reglas en el sistema, por lo que depende del área de Tecnologías de la Información para su implementación. Esta dependencia limita la agilidad operativa y la capacidad de respuesta ante cambios en los patrones de incumplimiento.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, aprobado mediante RD 02-018-25; Reglamento del Sistema Informático de Selectividad, aprobado mediante RA-PE 02-025-19, como antecedente normativo. Es necesario contrastar las responsabilidades asignadas a Tecnología y Gestión de Riesgos con la versión vigente del reglamento.",
                "Hallazgo: El equipo de gestión de riesgos participa en la elaboración y revisión de criterios de selectividad, lo que constituye una capacidad técnica instalada. No obstante, la aplicación y modificación de las reglas requieren necesariamente la intervención del área de Tecnologías de la Información, sin que los analistas dispongan de herramientas para administrar directamente su ciclo operativo. Esta situación genera dependencia tecnológica y puede retrasar la implementación de ajustes, así como las pruebas y actualizaciones necesarias para mantener la efectividad de los criterios de selección.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Reglamento del Sistema Informático de Selectividad, RA-PE 02-025-19, como antecedente; Manual de Organización y Funciones de la Aduana Nacional.",
                "Hallazgo: La institución dispone de mecanismos de auditoría que permiten mantener controles sobre las modificaciones realizadas a las reglas de riesgo, lo que constituye una fortaleza para su trazabilidad. Sin embargo, no cuenta con un comité multidisciplinario de gobernanza que supervise y valide de manera colegiada las decisiones relacionadas con la incorporación, modificación y eliminación de criterios de selectividad. Esta ausencia limita la existencia de un mecanismo formal de coordinación entre las áreas responsables de la gestión de riesgos, las operaciones aduaneras y la tecnología.\n\nReferencia normativa: Reglamento de Gestión de Riesgos para Control Aduanero, RD 02-018-25; Manual de Organización y Funciones de la Aduana Nacional. La normativa citada constituye el marco institucional de referencia, sin que ello implique que establezca expresamente la obligación de contar con un comité multidisciplinario."
              ],
              "text": "Evaluar periódicamente la eficacia de los tratamientos del riesgo, perfiles, reglas y criterios de selectividad."
            }
          ],
          "title": "Datos, análisis, perfilamiento y tratamiento"
        }
      ],
      "id": "pilar_6",
      "number": "6",
      "raw_title": "Gestión Integrada de Riesgos",
      "title": "6. Gestión Integrada de Riesgos"
    },
    {
      "assigned_evaluators": [
        "usr_3",
        "usr_2",
        "usr_1792525030420"
      ],
      "code": "KA7",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "code": "KA7-P1",
              "evidence": "Reglamentos",
              "findings": "Existen Reglamentos para la concesión de servicios aduaneros (Recintos) y en el RLGA se regula a los despachantes. \nHasta ahora los reglamentos no parecen ser.muy completos en cuanto a obligaciones, sanciones y procedimientos de suspensión y/o cancelación\n",
              "guidance": "1. ¿Existe un marco jurídico y regulatorio que defina qué operadores económicos e intermediarios aduaneros deben registrarse en la aduana?\n2. ¿Los requisitos de inscripción y autorización son accesibles al público y están enmarcados en un lenguaje sencillo de forma que los no especialistas en aduanas puedan comprender fácilmente sus obligaciones?\n3. ¿Se definen claramente en el marco las obligaciones y responsabilidades de los operadores y intermediarios aduaneros registrados?\n4. ¿Exige el marco regulatorio que los operadores demuestren la tecnología y los sistemas necesarios para un intercambio fluido de datos con la infraestructura TIC de las aduanas, en línea con su papel específico en la trazabilidad de la carga de extremo a extremo?",
              "id": "pilar_7_c1_q1",
              "indicator": "KPI [KA7-P1]: Tiempo promedio de tramitación de registros/licencias y % de operadores OEA certificados.",
              "lastModifiedAt": "2026-10-25T00:14:32.060Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792538652464_nfh7",
                  "text": "efjhfv,kerwhfkwjrkgfje4rlkwj45jw5terlkthjrk34hrtw",
                  "timestamp": "2026-10-20T23:24:12.464Z",
                  "userColor": "#db2777",
                  "userId": "usr_1792525030420",
                  "userName": "Azael Perez",
                  "userRole": "Supervisor"
                },
                {
                  "id": "note_1792538665521_6oko",
                  "text": "jrehjg,rtehwg,fkehrtkgh5tlekhg",
                  "timestamp": "2026-10-20T23:24:25.521Z",
                  "userColor": "#db2777",
                  "userId": "usr_1792525030420",
                  "userName": "Azael Perez",
                  "userRole": "Supervisor"
                },
                {
                  "id": "note_1792783938599_t8w4",
                  "text": "- Reglamento para la regulación y control de operadores de comercio exterior (diferente a los AFPA, despachantes)\n- Reglamento para la regulación y control de los AFPA. vigente 109 de 2024. Actualmente les piden una oficina y empleado permanente en la aduana donde operen.",
                  "timestamp": "2026-10-23T19:32:18.601Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "Revisar y actualizar requisitos\nImplementar autorizaciones basadas en análisis de riesgo",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer y publicar un marco jurídico y regulatorio claro para el registro, la identificación, la autorización y la vigilancia de los operadores económicos."
            },
            {
              "code": "KA7-P2",
              "evidence": "Sistema de registron con acceso y validación por NIT",
              "findings": "Uso del NIT para el registro.\nSe valida con información de Impuestos Nacionales",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia puede la administración usar un identificador único reconocido por el gobierno para cada operador económico, preferentemente el número de identificación del contribuyente, y garantizar que la información de registro correspondiente se mantenga actualizada y sincronizada entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan los acuerdos el registro de contribuyentes de la administración tributaria?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_7_c1_q2",
              "indicator": "KPI [KA7-P2]: Tiempo promedio de tramitación de registros/licencias y % de operadores OEA certificados.",
              "lastModifiedAt": "2026-10-25T00:15:50.337Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792784090982_0f2i",
                  "text": "- Utilizan el NIT.",
                  "timestamp": "2026-10-23T19:34:50.982Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Utilizar un identificador único reconocido por el gobierno para cada operador económico, preferiblemente el número de identificación del contribuyente, y asegurarse de que la información de registro asociada se mantenga actualizada y sincronizada con el registro de contribuyentes de la administración tributaria."
            },
            {
              "code": "KA7-P3",
              "evidence": "El sistema de registro",
              "findings": "El registro se realiza por sistema\nEs autogestionable\nPermite actualizaciones",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia es capaz la administración de implementar un sistema de registro electrónico interoperable que soporte registro, autorización, actualizaciones, consultas, notificaciones, firmas electrónicas, monitoreo de procesos e intercambio seguro de datos entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan las autoridades tributarias y otras fuentes de datos públicas o privadas pertinentes?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_7_c1_q3",
              "indicator": "KPI [KA7-P3]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T19:46:47.935Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792784170780_sb6b",
                  "text": "Hay interoperabilidad con SEGIP, SIN, SEPREC, BANCO UNION -única entidad financiera para recaudar los impuestos a la importación-. Hay necesidad de interoperabilidad con otras instituciones",
                  "timestamp": "2026-10-23T19:36:10.780Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "Continuar con la integración de otras instituciones necesarias",
              "score": 4,
              "status": "evaluated",
              "text": "Implantar un sistema de registro electrónico interoperable que permita la inscripción, autorización, actualizaciones, consultas, notificaciones, firmas electrónicas, seguimiento de procesos e intercambio seguro de datos con las autoridades tributarias y otras fuentes de datos públicas o privadas pertinentes."
            },
            {
              "code": "KA7-P4",
              "evidence": "POA -incorpora la función de validación trimestral\nSISTEMA",
              "findings": "Se hacen validaciones electrónicas por sistema antes de aprobar el registro\nLos registros se revisan trimestralemente (actividad POA)\nSe cruza información con sistemas externos (de identificación, de la SIN, etc)\nLa validación es meramente formal y no basada en riesgo",
              "guidance": "1. ¿Se realizan validaciones electrónicas antes de aprobar las inscripciones o autorizaciones?\n2. ¿Los registros de los operadores se revisan y limpian periódicamente para eliminar información inexacta u obsoleta?\n3. ¿La aduana verifica electrónicamente la existencia legal, los representantes, el domicilio y la condición del contribuyente utilizando fuentes autorizadas?",
              "id": "pilar_7_c1_q4",
              "indicator": "KPI [KA7-P4]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T00:24:10.814Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792784442822_4fvx",
                  "text": "- El Departamento realiza un control de fiabilidad de manera trimestral. Verifican físicamente el domicilio y la vigencia de la documentación en el sistema\n- Este modelo no está orientado para que sea un insumo de la GIR\n- El registro procede en sistema siempre y cuando se cumpa con los requisitos formales",
                  "timestamp": "2026-10-23T19:40:42.822Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "Es necesario que la validación no se limite a temas formales, que integre una gestión de riesgo",
              "score": 2,
              "status": "evaluated",
              "text": "Aplicar validación automatizada, supervisión basada en riesgos y procesos de limpieza periódica del registro para mantener información exacta, completa y fiable de los operadores y garantizar la continua admisibilidad para el registro y la autorización."
            },
            {
              "code": "KA7-P5",
              "evidence": "Reglamento del Programa Operador Económico Autorizado (OEA) y art. 296 bis del RLGA",
              "findings": "- Tienen programa OEA\n- Les dan tratamiento diferenciado\n- Si bien la norma establece requisitos, sanciones, etc. en el área de registro no se identifica que se evalúe su mejora continúa",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia la administración puede implementar y mejorar de manera continua un AEO o un programa similar de operadores de confianza que promueva el cumplimiento voluntario en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan en estos acuerdos criterios claros de admisibilidad, prestaciones significativas, supervisión basada en los riesgos, revalidaciones periódicas y consultas periódicas con los participantes?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_7_c1_q5",
              "indicator": "KPI [KA7-P5]: Tiempo promedio de tramitación de registros/licencias y % de operadores OEA certificados.",
              "lastModifiedAt": "2026-10-25T00:33:26.933Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792784579217_hhf2",
                  "text": "- Principales operadores de comercio exterior 177, tienen un tratamiento diferenciado y OEA 62 (sistema exclusivo para ellos)",
                  "timestamp": "2026-10-23T19:42:59.217Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Implementar y mejorar de manera continua un AEO o un programa similar de operadores de confianza que promueva el cumplimiento voluntario."
            }
          ],
          "title": "Registro de operadores, marco jurídico e interconexión entre la aduana y la fiscal"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA7-P6",
              "evidence": "Reglamento LGA. art. 158\nRD 01-008-25 (Reglamento para la Concesión de Servicios en Recintos Aduaneros)",
              "findings": "- Los requisitos de autorización (condiciones generales, doscumentación fiscal y legal básica, infraestructura, seguridad tecnología, interpoerabilidad están determinados.\n- Los operadores son responsables por las mercancías bajo su custodia Art. 158 RLGA\n- Deben mantener registros electrónicos que garanticen trazabilidad. art. 8 Reglamento y Aenxo 3.",
              "guidance": "1. ¿Son los operadores legalmente responsables por las mercancías bajo su custodia mientras están bajo control aduanero?\n2. ¿Los operadores deben mantener registros electrónicos que garanticen una trazabilidad detallada de los movimientos de mercancías?\n3. ¿Los operadores deben informar oportunamente a la aduana sobre pérdidas, escasez, irregularidades o incidentes de seguridad por medios electrónicos?",
              "id": "pilar_7_c2_q1",
              "indicator": "KPI [KA7-P6]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-25T20:21:46.469Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Definir el alcance jurídico y los requisitos de autorización para las instalaciones y actividades bajo control aduanero."
            },
            {
              "code": "KA7-P7",
              "evidence": "Procedimiento para el registro en el SUMA (revisar si hay un manual interno)",
              "findings": "El sistema valida requisitos antes de que se concluya con el registro\n- Entre los requisitos está el cumplimiento tributario y aduanero (no tener cargos pendientes con el Estado (art. 52 RLGA)\n- Por lo que hace a la solvencia financiera se requiere la constitución de una garantía",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia puede la administración realizar evaluaciones previas de riesgos y verificaciones de idoneidad antes de otorgar o renovar autorizaciones para las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abbarcan los acuerdos el cumplimiento tributario y aduanero, la solvencia financiera, los beneficiarios finales según corresponda, los representantes legales, las instalaciones físicas, los sistemas de inventario, los mecanismos de seguridad, la capacidad de continuidad de las operaciones y los riesgos de integridad?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_7_c2_q2",
              "indicator": "KPI [KA7-P7]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T20:21:49.703Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792786725050_r157",
                  "text": "- El registro procede en sistema siempre y cuando se cumpa con los requisitos formales\n- Registro a través del SUMA\n- Revisión por técnico analista\n- El operador se presenta en la oficina para ser habilitado (fotografía y presentación de garantía)\n- Verificación del domicilio fiscal. 7 días posterior a la habilitación y hacen un control de fiabilidad (validan algunos datos). La verificación la hace la oficina de plataforma.",
                  "timestamp": "2026-10-23T20:18:45.050Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "Incorporación de análisis de riesgo en registro y renovación",
              "score": 3,
              "status": "evaluated",
              "text": "Realizar evaluaciones previas de riesgos y verificaciones de idoneidad antes de otorgar o renovar la autorización, que abarquen el cumplimiento tributario y aduanero, la solvencia financiera, la identificación de los beneficiarios finales cuando corresponda, los representantes legales, las instalaciones físicas, los sistemas de inventario, los mecanismos de seguridad, la capacidad de continuidad de las operaciones y los riesgos de integridad."
            },
            {
              "code": "KA7-P8",
              "evidence": "LGA y su reglamento",
              "findings": "- Habría que revisar cómo se aplica en la práctica. ¿De la garantía anual?",
              "guidance": "1. ¿Son los operadores legalmente responsables por las mercancías bajo su custodia mientras están bajo control aduanero?\n2. ¿Los operadores deben mantener registros electrónicos que garanticen una trazabilidad detallada de los movimientos de mercancías?\n3. ¿Los operadores deben informar oportunamente a la aduana sobre pérdidas, escasez, irregularidades o incidentes de seguridad por medios electrónicos?",
              "id": "pilar_7_c2_q3",
              "indicator": "KPI [KA7-P8]: Tiempo promedio de tramitación de registros/licencias y % de operadores OEA certificados.",
              "lastModifiedAt": "2026-10-25T20:27:19.125Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1792787238798_k7j7",
                  "text": "El artículo 118 de la LGA lo señala como responsable ante el importador. Existe la obligación en RLGA arts. 158. Habría que verificar en la práctica cómo lo ejecutan",
                  "timestamp": "2026-10-23T20:27:18.798Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Responsabilizar a los operadores autorizados por las mercancías sujetas a control aduanero."
            },
            {
              "code": "KA7-P9",
              "evidence": "Sistema?",
              "findings": "La obligación legal existe\n- ",
              "guidance": "1. ¿Mantienen los operadores sistemas electrónicos de inventario que puedan ser examinados por la aduana?\n2. ¿Concilian las aduanas los registros de inventario con las declaraciones, manifiestos u otros datos aduaneros?\n3. ¿Realiza la aduana un seguimiento basado en los riesgos, inspecciones, auditorías o exámenes de autorización de estos operadores?",
              "id": "pilar_7_c2_q4",
              "indicator": "KPI [KA7-P9]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-25T01:15:17.456Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792787708942_2z4h",
                  "text": "Art. 16 - 3 del reglamento para la concesion de servicios en recintos aduaneros",
                  "timestamp": "2026-10-23T20:35:08.942Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Mantener controles de inventarios interoperables y supervisión aduanera continua."
            },
            {
              "code": "KA7-P10",
              "evidence": "",
              "findings": "- Este modelo no está orientado para que sea un insumo de la GIR. No llevan indicadores",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia es capaz la administración de reevaluar periódicamente a los operadores autorizados utilizando criterios basados en el riesgo e indicadores de desempeño para verificar el cumplimiento continuo en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan los acuerdos los requisitos de autorización y si deben mantenerse, modificarse, suspenderse o revocarse el estado de las prestaciones de facilitación o de la autorización?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_7_c2_q5",
              "indicator": "KPI [KA7-P10]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T01:16:28.942Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792788052543_qc8t",
                  "text": "- El Departamento realiza un control de fiabilidad de manera trimestral. Verifican  la vigencia de la documentación en el sistema\n- Este modelo no está orientado para que sea un insumo de la GIR. No llevan indicadores",
                  "timestamp": "2026-10-23T20:40:52.543Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Reevaluar periódicamente a los operadores autorizados utilizando criterios basados en el riesgo e indicadores de desempeño para verificar el cumplimiento continuo de los requisitos de autorización y determinar si se deben mantener, modificar el estado de las prestaciones de facilitación o de la autorización."
            }
          ],
          "title": "Operadores autorizados que almacenan, tienen o gestionan provisionalmente bienes bajo control aduanero"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA7-P11",
              "evidence": "Sistema SUMA\nRLGA",
              "findings": "- En la página de la Aduana no se observa que se repliquen los requisitos para obtener la licencia, únicamente los de registro.\n- Los requisitos específicos están en el RLGA (art. 41 en adelante)\n- El art. 58 del RLGA establece la obligación de contar con infraestructura y equipamiento para garantizar la actualización tecnológica indispensable para la elaboración, transmisión electrónica y archivo documental de las declaraciones y otros documentos",
              "guidance": "1. ¿Se publican, sirven de fácil acceso y se actualizan periódicamente las normas, condiciones y procedimientos relativos a los despachantes de aduana?\n2. ¿Son las normas coherentes con los compromisos de facilitación del comercio, garantizando que se evite el uso obligatorio de corredores en los casos en que los operadores de comercio opten por la representación directa?\n3. ¿Establece el marco regulatorio obligaciones legales explícitas para que los despachantes de aduana adopten y utilicen plataformas aduaneras digitales modernas y procedimientos electrónicos?",
              "id": "pilar_7_c3_q1",
              "indicator": "KPI [KA7-P11]: Tiempo promedio de levante de mercancías (Time Release Study - TRS) en canal verde y rojo.",
              "lastModifiedAt": "2026-10-25T01:31:38.618Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "Incoporar comunicación en lenguaje simple de los requisitos. ",
              "score": 3,
              "status": "evaluated",
              "text": "Garantizar que las normas sobre el uso de despachantes de aduana sean transparentes y coherentes con los compromisos de facilitación del comercio, evitando requisitos innecesarios de uso obligatorio y publicando las normas, condiciones y procedimientos aplicables de un modo fácilmente accesible."
            },
            {
              "code": "KA7-P12",
              "evidence": "RLGA, SUMA",
              "findings": "El RLGA establece requisitos que incorporan la acreditación de buen conducta.\nTener experiencia previa (dos años)\nNo tener sentencias ejecutoriadas en materia penal\nNo haber sido destituído como funcionario\nPresentar exámenes de conocimiento teórico y práctico\n",
              "guidance": "1. ¿Los requisitos de permisos para despachantes de aduana son transparentes, objetivos y se basan en la competencia técnica demostrada, los exámenes profesionales y los controles de integridad?\n2. ¿Existen requisitos formales de desarrollo profesional continuo o de mantenimiento periódico de competencias para los corredores activos?\n3. ¿Puede los importadores/exportadores otorgar, verificar, alcance o revocar autorizaciones de despachantes directamente dentro de la plataforma de software de aduanas?",
              "id": "pilar_7_c3_q2",
              "indicator": "KPI [KA7-P12]: % de personal aduanero evaluado por competencias y con plan anual de formación ejecutado.",
              "lastModifiedAt": "2026-10-25T01:37:39.961Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Aplicar requisitos transparentes en materia de licencias, autorizaciones y competencia para los despachantes de aduana."
            },
            {
              "code": "KA7-P13",
              "evidence": "LGA y su Reglamento",
              "findings": "- El marco legal contiene disposiciones relativas a la honestidad y buen desempeño\n- Valores éticos en el Reglamento de despachantes (art. 35)\n- Está prevista la suspensión por contravenciones aduaneras\n- También está prevista la revocación en casos de sentencias firmes por delitos ",
              "guidance": "1. ¿Están establecidas y son aplicables las salvaguardias legales explícitas frente al conflicto de intereses, como un código de ética específico que impida a los intermediarios actuar como importadores de mercancías que compiten—?\n2. ¿Los despachantes de aduana deben cooperar con la aduana y notificar las sospechas de irregularidad?\n3. ¿Esta práctica se establece formalmente a través de disposiciones jurídicas, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n4. ¿Con qué consistencia es posible la administración para definir las obligaciones de representación de los corredores, responsabilidad, ética y diligencia debida en las operaciones, unidades o ubicaciones pertinentes?\n5. ¿Abbarcan los acuerdos el alcance de la práctica, las pruebas de representación, la verificación de operadores, las salvaguardias en caso de conflicto de intereses, la trazabilidad de las operaciones, los fundamentos y procedimientos para suspensión o revocación, y las sanciones por incumplimiento?",
              "id": "pilar_7_c3_q3",
              "indicator": "KPI [KA7-P13]: Tasa de resolución oportuna de investigaciones y denuncias de integridad (< 60 días).",
              "lastModifiedAt": "2026-10-25T02:03:11.079Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Definir la representación del corredor, la responsabilidad civil, las obligaciones éticas y de diligencia debida."
            },
            {
              "code": "KA7-P14",
              "evidence": "",
              "findings": "- Se realiza la revisión trimestral del registro (requisitos formales)\n- El área de registro no efectúa análisis de riesgo\n- El marco legal sí establece en sus obligaciones elementos que involucran el cumplimiento, no así la calidad",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia puede la administración supervisar el cumplimiento de los corredores, la calidad del servicio y los indicadores de riesgo en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abbarcan los acuerdos sistemas automatizados, pistas de auditoría, métricas de desempeño y exámenes basados en el riesgo, e implementan medidas correctivas, sanciones o medidas reforzadas de facilitación, cuando corresponde?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_7_c3_q4",
              "indicator": "KPI [KA7-P14]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T02:08:43.861Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Vigilar el cumplimiento de los corredores, la calidad del servicio y los indicadores de riesgo."
            },
            {
              "code": "KA7-P15",
              "evidence": "",
              "findings": "- El área de registro no efectúa análisis de riesgo\n",
              "guidance": "1. ¿Mantiene el sistema aduanero pistas de auditoría y expedientes electrónicos de casos para realizar un seguimiento en tiempo real del comportamiento de los corredores, las tasas de error y las tendencias de cumplimiento?\n2. ¿Se elaboran sistemáticamente perfiles basados en el riesgo para activar auditorías, inspecciones o exámenes específicos de operaciones de despachantes de aduana de alto riesgo?\n3. ¿Se evalúan periódicamente los indicadores de desempeño de los corredores a fin de proporcionar comentarios estructurados, exigir planes de medidas correctivas o ajustar las calificaciones de riesgo de los corredores?",
              "id": "pilar_7_c3_q5",
              "indicator": "KPI [KA7-P15]: Tiempo promedio de levante de mercancías (Time Release Study - TRS) en canal verde y rojo.",
              "lastModifiedAt": "2026-10-25T21:04:15.120Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "- Incorporar a análisis de riesgo de su cumplimiento",
              "score": 2,
              "status": "evaluated",
              "text": "Integrar a los despachantes de aduana en el marco de gestión de cumplimiento."
            }
          ],
          "title": "Despachantes de aduana"
        }
      ],
      "id": "pilar_7",
      "number": "7",
      "raw_title": "Programas de inscripción y licencia",
      "title": "7. Programas de inscripción y licencia"
    },
    {
      "assigned_evaluators": [
        "usr_3",
        "usr_1",
        "usr_1792525030420"
      ],
      "code": "KA8",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "code": "KA8-P1",
              "evidence": "Documento que regula los plazos.\nDocumento que regula las contravenciones\nCuánto representan las multas en función de la recaudación total.\nCopia del procedimiento nuevo a aplicar para tránsito.",
              "findings": "Se tienen 20 días últramar, 1 día bilateral y se quiera ampliar a 5 días y hay multas por incumplimiento de plazos en transmisión anticipado.  Resolución de Directorio: 01-006-25 para los plazos para el minifiesto. Está en la página web publicada.\nSe tienen sanciones por la no transmisión del manifiesto.\n01-003-24 es el documento de contravenciones. Está en la página publicada.\n54 tipos de conductas que se sanciones. El despachante tienen 30 contravenciones,\nART77, Reglamento a la Ley General de Aduanas. Bajo ninguna circunstancia el transportista puede hacer declarante.\nUFV - 3.52 BOLIVIANOS. y se tienen hasta 2,500 FVU.\nHay un proceso sancionador, en ocasiones no se necesita notificación.\nHay sanciones también no solo multas, por ejemplo, en el caso de tránsitos, por cada día de retraso tiene multa y al día 11 de retraso, se suspende por el mismo plazo de demora.\nSe tiene delegados de control de tránsito en cada aduana, y son ellos los que inician un procedimiento administrativo o judicial en caso no llegue un tránsito.\nSe tiene ya un nuevo procedimiento pendiente de aprobación para aplicar riesgo al manifiesto.",
              "guidance": "1. ¿Ha establecido la administración aduanera un marco jurídico que defina las obligaciones de los operadores de carga y las partes interesadas en la logística?\n2. ¿Se documentan los procedimientos estandarizados de las actividades clave de gestión de la carga?\n3. ¿Las sanciones por incumplimiento relacionado con la gestión de la carga están claramente definidas y son aplicables?",
              "id": "pilar_8_c1_q1",
              "indicator": "KPI [KA8-P1]: % de manifiestos presentados anticipadamente y tasa de trazabilidad satelital en tránsitos.",
              "lastModifiedAt": "2026-10-25T00:10:14.740Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer un marco jurídico y de procedimiento claro para la gestión de la carga de aduana, el tránsito y la trazabilidad que defina responsabilidades, obligaciones de informar, procedimientos estandarizados para eventos clave de carga y sanciones proporcionadas por incumplimiento."
            },
            {
              "code": "KA8-P2",
              "evidence": "",
              "findings": "En SUMA se carga de parte del transportista antes de llegar a frontera. En el marco del sistema CINTIA, los manifiestos son enviados desde el país de exportación al país de importación. No obstante, de cualquier forma se usa una aplicación de SUMA para registrar el manifiesto en la frontera.\nHay centros públicos en frontera que carga en Manifiesto, estos lugares están fuera de la aduana.\nEn caso de exportaciones no hay DAM, pero si manifiesto.\n\nIATA envía las guías y la línea aérea confirma luego el manifiesto. Si no se envía anticipadamente hay multas.\nProceso para capturar el manifiesto:\n1. Genera el documento de embarque. Aún así se solicita copia física por el acuerdo TIR\n2. Se recupera el manifiesto transmitido por el país de exportación (usando el número de manifiesto de origen) o se crea uno nuevo cuando no fue transmitido previamente. \n3. Cuando la información ha llegado incompleta, se tiene que completar antes del ingreso al país.\n4. Se transmite el manifiesto y se genera el número de control interno.",
              "guidance": "1. ¿Es obligatoria información electrónica anticipada sobre la carga antes de la llegada o el traslado de la carga?\n2. ¿Se definen campos de datos obligatorios y plazos para la presentación de información sobre la carga?\n3. ¿Se utilizan validaciones automatizadas para verificar la integridad y calidad de la información presentada?",
              "id": "pilar_8_c1_q2",
              "indicator": "KPI [KA8-P2]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-25T00:10:20.146Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Exigir información electrónica anticipada, completa y estandarizada sobre la carga para las importaciones, exportaciones, tránsito, transbordo y otros movimientos controlados por la aduana."
            },
            {
              "code": "KA8-P3",
              "evidence": "",
              "findings": "Solo tiene la policía tiene acceso a realizar retenciones. El resto no tiene comunicación con SUMA.\nANABOL administra el producto.\nEn la puerta de salida no es la aduana quien autoriza la salida. Se presenta en la aduana un documento.\nCCTV tiene en la salida.\n",
              "guidance": "1. ¿Realiza la aduana el intercambio electrónico de información con los principales operadores logísticos y los organismos fronterizos?\n2. ¿Se usan normas de datos comunes entre sistemas conectados?\n3. ¿Existen mecanismos seguros para el intercambio electrónico de información?\n4. ¿Se realizan automáticamente comprobaciones cruzadas y conciliaciones electrónicas entre la aduana y los datos de sistemas externos relativos al movimiento de la carga?",
              "id": "pilar_8_c1_q3",
              "indicator": "KPI [KA8-P3]: Tiempo promedio de tramitación de registros/licencias y % de operadores OEA certificados.",
              "lastModifiedAt": "2026-10-25T00:10:27.871Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "Interoperabilidad con concesionarios y autoridades aeroportuarias.",
              "score": 3,
              "status": "evaluated",
              "text": "Garantizar una interoperabilidad segura entre aduanas, puertos, operadores de terminales, organismos fronterizos y otras partes interesadas."
            }
          ],
          "title": "Marco jurídico, procedimientos e información electrónica"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA8-P4",
              "evidence": "",
              "findings": "No se tiene personal en las salidas del aeropuerto o depósitos.\nEn tránsitos se tienen rutas y plazos, se tienen multas por no arribo.\nSe tienen básculas en todas las aduanas de frontera y se pesa la carga antes de salir y al llegar al depósito.\nEn el parte de recepción en el depósito está la información de la localización.",
              "guidance": "1. ¿Los documentos de transporte (incluidos los conocimientos de embarque y las facturas aéreas electrónicas) se digitalizan y procesan electrónicamente sin necesidad de registros físicos?\n2. ¿Los manifiestos, declaraciones y listas de baja/descarga se concilian automáticamente en el sistema, sin necesidad de comparación física manual por parte de los funcionarios?\n3. ¿Vincula el sistema aduanero manifiestos, declaraciones y registros de levante usando identificadores comunes en módulos de software conectados?\n4. ¿Mantiene el sistema la trazabilidad continua de las unidades de transporte físico mediante el seguimiento automático de los números de contenedor, los identificadores de vehículos y el estado de los sellos electrónicos entre movimientos?\n5. ¿Los movimientos de tránsito, las entradas de depósito y los regímenes especiales se cierran y descargan automáticamente en el sistema al verificarse la llegada, la reexportación o el levante?",
              "id": "pilar_8_c2_q1",
              "indicator": "KPI [KA8-P4]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-27T20:01:48.915Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Adoptar un modelo integral de trazabilidad de la carga y control de instalaciones vinculando los datos sobre carga, transporte, depósito, tránsito, salida autorizada y cierre de régimen."
            },
            {
              "code": "KA8-P5",
              "evidence": "",
              "findings": "Se aplican validaciones semánticas y normativas al manifiesto. \nAún así se revisa le 100% de los manifiestos de carga de importación. \nEstá en manos de la Gerencia de Operaciones. Se tiene planeado cambiar y dejar de revisar ciertos tipos de carga.\nNo se tienen todo este tipo de cosas en un POA, son cosas que surjan en el marco de la actualización del procedimientos.\nQué tipo de revisión se hace:\n- Hay un anexo de contravenciones aduaneras (sanciones) por mala presentación del manifiesto.\n- Se revisa si se necesita un permiso de otras agencias aunque ya se puede validar. Se tiene considerado hacer esto a través de la VUCE.",
              "guidance": "1. ¿Se realizan validaciones automatizadas de la información sobre el movimiento de la carga?\n2. ¿Se hacen comprobaciones cruzadas con datos eléctricos para detectar incoherencias o anomalías en los registros de carga?\n3. ¿Se informan sistemáticamente las discrepancias detectadas o se remiten para medidas de seguimiento?",
              "id": "pilar_8_c2_q2",
              "indicator": "KPI [KA8-P5]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-27T20:04:16.750Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Automatizar validaciones y comprobaciones cruzadas de datos a lo largo del ciclo de control de la carga para detectar incoherencias en los datos de la carga, los movimientos, las existencias y los registros de control."
            },
            {
              "code": "KA8-P6",
              "evidence": "",
              "findings": "No se aplica gestión de riesgos. Cada semestre se hace una revisión de la ubicación de la carga y revisión de inventarios.\nUTISA también hace una revisión.\nUnidad de Control de Concesionarios. Ellos supervisan las instalaciones, equipo, etc.\nNo se aplican control de inventarios ni tampoco resguardo de carga de alto valor.\nNo se aplica una gestión de riesgo.",
              "guidance": "1. ¿Se utiliza el análisis de riesgos para establecer prioridades de actividades de supervisión e inspección?\n2. ¿Se diferencian los operadores, las mercancías, las rutas, las instalaciones y los regímenes en función de los niveles de riesgo?\n3. ¿La supervisión se centra en áreas que presentan mayores riesgos o patrones de incumplimiento?\n4. ¿Se usan y se administran electrónicamente los bonos electrónicos para salvaguardar los ingresos aduaneros asociados con operaciones de tránsito y otras operaciones aduaneras?",
              "id": "pilar_8_c2_q3",
              "indicator": "KPI [KA8-P6]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T20:05:10.254Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Aplicar controles de inventarios periódicos basados en el riesgo en los establecimientos controlados por la aduana."
            }
          ],
          "title": "Trazabilidad de extremo a extremo, control de existencias y respuesta operativa"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA8-P7",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia puede la administración garantizar el control oportuno de los movimientos de carga, la salida autorizada, la transferencia, el tránsito, la exportación y el cierre de regímenes en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan los mecanismos procedimientos claros, confirmaciones electrónicas, actualizaciones de estado, tratamiento de excepciones y registros de auditoría?\n4. ¿Están disponibles y se usan en la práctica los registros del sistema, los intercambios de datos, las validaciones, los registros de auditoría o los resultados de servicios pertinentes?",
              "id": "pilar_8_c3_q1",
              "indicator": "KPI [KA8-P7]: % de manifiestos presentados anticipadamente y tasa de trazabilidad satelital en tránsitos.",
              "lastModifiedAt": "2026-10-27T20:06:27.741Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Garantizar el control oportuno de los movimientos de carga, la salida autorizada, la transferencia, el tránsito, las exportaciones y el cierre de regímenes."
            }
          ],
          "title": "Movimiento, salida autorizada y cierre de regímenes"
        },
        {
          "code": "C4",
          "id": "c4",
          "questions": [
            {
              "code": "KA8-P8",
              "evidence": "",
              "findings": "No se aplica a menos que se transmita una DAM (declaración anticipada de mercancías). Tampoco se aplica en depósitos.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia es capaz la administración de aplicar una evaluación sistemática de los riesgos y una selectividad a la carga que llega y sale utilizando información anticipada, inteligencia y perfiles de riesgo para hacer frente a amenazas fiscales, de seguridad y de protección, facilitar movimientos de bajo riesgo y focalizar controles proporcionados en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_8_c4_q1",
              "indicator": "KPI [KA8-P8]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T00:11:19.248Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Aplicar evaluación sistemática del riesgo y selectividad a la carga que llega y sale."
            },
            {
              "code": "KA8-P9",
              "evidence": "",
              "findings": "No se tiene un equipo para realizar estas intervención.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia mantiene la administración equipos operativos capacitados y equipados para realizar intervenciones de carga basadas en el riesgo en puertos, aeropuertos, pasos fronterizos y otras ubicaciones controladas por la aduana, utilizando procedimientos documentados de referencia, inspección, escalada y registro de resultados en las distintas operaciones, unidades o ubicaciones pertinentes?\n3. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_8_c4_q2",
              "indicator": "KPI [KA8-P9]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T00:11:22.071Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Mantener equipos operativos entrenados y equipados para realizar intervenciones de carga basadas en riesgos en puertos, aeropuertos, puestos fronterizos y otras localidades controladas por las aduanas."
            },
            {
              "code": "KA8-P10",
              "evidence": "",
              "findings": "No hay una coordinación formalmente establecida. SENARICOM (Control de Minerales y Metales) y SENASA tiene una mayor coordinación con aduanas.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración en la capacidad para establecer la coordinación entre aduanas, organismos fronterizos, puertos y partes interesadas en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Prevén los acuerdos el intercambio de información, la gestión conjunta de riesgos, controles coordinados y protocolos locales documentados que definan funciones, derivaciones, comunicaciones, contingencias y actividades de seguimiento?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_8_c4_q3",
              "indicator": "KPI [KA8-P10]: Tiempo promedio de levante de mercancías (Time Release Study - TRS) en canal verde y rojo.",
              "lastModifiedAt": "2026-10-25T00:11:32.474Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Establecer la coordinación entre aduanas, los organismos fronterizos, los puertos y las partes interesadas."
            },
            {
              "code": "KA8-P11",
              "evidence": "",
              "findings": "Se usan marchamos para contenedores y fotografías para carga no contenerizada. Tambien se tiene básculas que se usan a la salida y al arribo de la carga.\nDesde puerto Arica hasta una aduana interior.",
              "guidance": "1. ¿Se usan sellos electrónicos o controles equivalentes para el tránsito y operaciones aduaneras similares?\n2. ¿Se supervisan electrónicamente las rutas de tránsito, los plazos y las llegadas?\n3. ¿Se generan e investigan alertas cuando se producen desviaciones en el tránsito o violaciones de la integridad?",
              "id": "pilar_8_c4_q4",
              "indicator": "KPI [KA8-P11]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-27T20:08:44.725Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Facilitar la interrupción del tránsito nacional e internacional y del movimiento hacia localidades interiores controladas por la aduana."
            },
            {
              "code": "KA8-P12",
              "evidence": "Lista de aduanas con scanner.",
              "findings": "Se tienen escáneres en varias aduanas.\nSe utilizan por dudas puntuales\nNo se cobra por el scanner.\nEs una persona la que decide qué escanear y no con base en riesgos.\nNo se tienen scanners en postal pero si en courier.\nEstán a cargo de la Gerencia Nacional de Riesgos y Fiscalización.\nSe han tenido intentos para adquirir marchamos electrónicos pero por el costo no se adquirió.\n\n",
              "guidance": "1. ¿Se despliegan sistemáticamente tecnologías de escaneo óptico (códigos de barra/códigos QR) y lectores automatizados de matrículas o contenedores (ANPR/ACR) en todos los puntos principales de control operativo?\n2. ¿Los puentes de pesaje dinámicos, los sensores IoT o los dispositivos inteligentes de seguimiento se integran directamente en la plataforma de software de la aduana para verificar automáticamente las ponderaciones y detectar anomalías?\n3. ¿Se despliegan controles de seguridad física, como sellos electrónicos y/o cámaras de circuito cerrado (CCTV) para instalaciones autorizadas, ¿se vigilan activamente durante los movimientos de carga?\n4. ¿Las tecnologías desplegadas de inspección y supervisión vuelven automáticamente los datos y alertas a la plataforma informática de la aduana sin que los funcionarios tengan que proceder a su reentrada manual de los datos?\n5. ¿Se definen formalmente los procedimientos operativos estándar (POE), los protocolos de datos y los marcos de mantenimiento técnico para regular el uso operativo y el mantenimiento de las tecnologías desplegadas?",
              "id": "pilar_8_c4_q5",
              "indicator": "KPI [KA8-P12]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T20:08:37.393Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Desplegar tecnologías de control de cargas basadas en riesgos integradas en los sistemas aduaneros —como escáneres, puentes de pesaje, RFID, sellos electrónicos, GPS, alertas automatizadas y otras herramientas no intrusivas— para fortalecer la detección y trazabilidad y, al mismo tiempo, agilizar los movimientos legítimos de cargas."
            }
          ],
          "title": "Supervisión, tránsito, tecnología y coordinación basadas en el riesgo"
        },
        {
          "code": "C5",
          "id": "c5",
          "questions": [
            {
              "code": "KA8-P13",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se definen indicadores para medir la trazabilidad de la carga, el desempeño del tránsito, la exactitud de las existencias, las alertas y los resultados de los controles?\n2. ¿Se lleva a cabo un seguimiento y examen periódico de los indicadores de desempeño de la gestión de carga?\n3. ¿Se usan los resultados de desempeño para mejorar los procesos y controles de gestión de la carga?",
              "id": "pilar_8_c5_q1",
              "indicator": "KPI [KA8-P13]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "lastModifiedAt": "2026-10-27T20:09:55.130Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Medir el desempeño en la gestión de la carga y la trazabilidad de la aduana y usar los resultados para una mejora continua."
            }
          ],
          "title": "Desempeño, mejora continua y facilitación"
        }
      ],
      "id": "pilar_8",
      "number": "8",
      "raw_title": "Administración de la carga y trazabilidad en aduanas",
      "title": "8. Administración de la carga y trazabilidad en aduanas"
    },
    {
      "assigned_evaluators": [
        "usr_1",
        "usr_2",
        "usr_1792525030420"
      ],
      "code": "KA9",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "code": "KA9-P1",
              "evidence": "Primer procedimiento aduanero para el régimen de procedimiento de aduanas (Web)\nCopia de la nota con la que se remitió el procedimiento para consulta a los operadores.\nRA-PE 02-024-025 para capacitaciones.\n",
              "findings": "Se tiene un desarrollo de manuales de procesos y procedimientos pero nunca se publicaron.\nSe está retomando ahora.\nLo que hicieron es un manual de SUMA.\nPUBLICACIÓN:\nSe realizan publicaciones en la web\n18 reglamentos (Resoluciones de Directorio) y 7 de estos tienen manual de procedimientos solo para la aduana.\nEstán actualmente revisando el manual para hacer procedimientos. \nS\nCONSULTA:\nSe hace un proceso de consulta de los procedimientos previo a que se emita y publica.\nSe tienen 6 mesas en el marco del Comité de Facilitación de Comercio. A través de estas mesas se les comparte esto. A través de grupos de WhatsApp se les avisa que algo está publicado y a través de un documento establecido se envién comentarios. No se tiene normado cómo se hace este p\nSi existe un área específicaServicio a operadores tienen una línea gratuita. En el portal está.\nExiste un manual de procedimiento para capacitaciones externas.\nManual para centros contactos",
              "guidance": "1. ¿Los requisitos, procedimientos, tasas, normas de servicio, puntos de consulta y mecanismos de examen o apelación se publican en un lenguaje claro y accesible?\n2. ¿Se revisa y actualiza periódicamente la información mediante un proceso definido?\n3. ¿Están disponibles canales de apoyo a los operadores que se utilizan para aclarar requisitos y resolver consultas?",
              "id": "pilar_9_c1_q1",
              "indicator": "KPI [KA9-P1]: Tiempo promedio de tramitación de registros/licencias y % de operadores OEA certificados.",
              "lastModifiedAt": "2026-10-21T16:47:21.269Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Publicar y actualizar periódicamente los requisitos aduaneros y los canales de apoyo a los operadores en lenguaje claro."
            },
            {
              "code": "KA9-P2",
              "evidence": "",
              "findings": "en SUMA hay una bandeja con todas sus declaraciones y consultar el despacho.\nCumplen, incluso se puede interactuar con el aforador a través de SUMA.\nMuy bien, se vio en vivo una demostración. Incluso el proceso administrativo se hace a través de SUMA y se notifica de forma electrónica.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de proporcionar a los operadores un acceso seguro y oportuno al estado de las declaraciones y los procesos de despacho en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan en los acuerdos las etapas de procesamiento, los requisitos pendientes, las decisiones de control, las notificaciones y el estado de los levantes, a fin de fortalecer la transparencia y la previsibilidad?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_9_c1_q2",
              "indicator": "KPI [KA9-P2]: Tiempo promedio de tramitación de registros/licencias y % de operadores OEA certificados.",
              "lastModifiedAt": "2026-10-21T15:23:06.537Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Proporcionar a los operadores un acceso seguro y oportuno al estado de las declaraciones y los procesos de despacho."
            },
            {
              "code": "KA9-P3",
              "evidence": "Reglamento sobre Resoluciones Anticipadas publicado en la página Web. Reglamento 01-079-25",
              "findings": "Se tienen RA en clasificación y origen. Está vigente desde hace varios años pero no se utiliza mucho. Está publicado en la página un reglamento.\nTambién se tienen criterios interpretativos además de RA.\nSe presentan DAM (Declaraciones Anticipadas)",
              "guidance": "1. ¿Están disponibles, se documentan y se emiten resoluciones anticipadas y se emiten dentro de plazos definidos?\n2. ¿Se aplican sanciones de forma transparente y proporcionada?\n3. ¿Los procedimientos de examen y apelación son transparentes, puntuales e independientes?",
              "id": "pilar_9_c1_q3",
              "indicator": "KPI [KA9-P3]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-21T19:29:10.511Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Proporcionar resoluciones anticipadas y orientación administrativa, y trato justo a los operadores."
            }
          ],
          "title": "Transparencia, previsibilidad y trato justo"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA9-P4",
              "evidence": "Estadísticas relacionadas con la cantidad de declaraciones anticipadas presentadas por CIF, Recaudación, Declaraciones, Importadores.",
              "findings": "Para declaraciones menores a 2000, las hace el interesado sin despachante y el técnico de aduana elabora y valida la declaración. (menor cuantía). Este proceso no ha funcionado porque hay que llevar a la aduana la mercancía y la aduana valoraba y luego se pagaba. Por lo tanto, por lo complejo han considerado que ingresan por contrabando y por lo tanto quieren ahora cambiar el procedimiento.\nOEA tiene prioridad en el despacho.",
              "guidance": "1. ¿Existen procedimientos simplificados y previos al arribo para las mercancías de bajo riesgo y los operadores de confianza?\n2. ¿Puede presentarse, validarse y procesarse información antes de la llegada de las mercancías?\n3. ¿Permiten estos procedimientos su levante oportuno y reducen las formalidades innecesarias para operaciones de bajo riesgo?",
              "id": "pilar_9_c2_q1",
              "indicator": "KPI [KA9-P4]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-21T16:48:20.661Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer procedimientos simplificados, previos a la llegada y diferenciados para las mercancías de bajo riesgo y los operadores cumplidores o de confianza."
            },
            {
              "code": "KA9-P5",
              "evidence": "",
              "findings": "en el caso de valoración, se tiene un reglamento que indica que si el valor es 10% más bajo que valor de referencia según la base de datos, entonces se hace un ajuste.\nSe está capacitando en el Acuerdo de Valoración. Se han hecho 45 capacitaciones en el año\nSe tiene una cápsula 2 minutos de valoración.\nEl control intetno UTISA es una posible causa del temor.\nGENOA (operaciones)) también hacen presion al aforador.\nLa Base de Datos tenía 21,000 en 2021 y 150,000 en 2025.\nNo se fundamenta bien el caso y se termina perdiendo.\nNo tienen conocimiento sobre cómo hacerlo\nPOA Santa Cruz: 75% de acertividad es una meta sino se cumple, se califica mal.\nEl importador elije si se va por la vía administrativa o judicial.",
              "guidance": "1. ¿El análisis de riesgo y selectividad durante el despacho se lleva a cabo mediante un proceso coordinado?\n2. ¿Los tratamientos de despacho se basan en el riesgo identificado y la capacidad operativa disponible?\n3. ¿Existen salvaguardias para evitar duplicadas evaluaciones o derivaciones reiteradas?",
              "id": "pilar_9_c2_q2",
              "indicator": "KPI [KA9-P5]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-21T16:48:38.571Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Aplicar durante el despacho un solo proceso de riesgo y selectividad coordinado y basado en el sistema que utilice reglas de riesgo aprobadas para determinar y orientar el tratamiento apropiado —publicación inmediata, examen de documentos, inspección no intrusiva, inspección física, muestreo o derivación— sin depender de la discrecionalidad de un funcionario en particular. Toda anulación o cambio en el tratamiento generado por el sistema debe estar autorizado, justificado, registrado y rastreable."
            }
          ],
          "title": "Simplificación, procesamiento previo al arribo, gestión de riesgos y levante"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA9-P6",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Ayuda el laboratorio de aduana a identificar las mercancías sensibles o difíciles de clasificar?\n2. ¿Se utilizan criterios objetivos basados en el riesgo para determinar cuándo deben tomarse muestras?\n3. ¿Se usan los resultados de laboratorio para mejorar la clasificación, los criterios de riesgo y los controles futuros?",
              "id": "pilar_9_c3_q1",
              "indicator": "KPI [KA9-P6]: Tiempo promedio de levante de mercancías (Time Release Study - TRS) en canal verde y rojo.",
              "recommendations": "",
              "status": "pending",
              "text": "Garantizar que el laboratorio de aduana proporcione análisis científicos y pruebas técnicas oportunas para respaldar la identificación y clasificación de mercancías sensibles o difíciles de clasificar, promover la toma de decisiones y el tratamiento coherentes y fundamentar criterios objetivos de muestreo."
            },
            {
              "code": "KA9-P7",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Los resultados de la inspección documental y física se registran en un formato estructurado y susceptible de análisis?\n2. ¿Identifica el registro información relevante, como tipo de riesgo, operador, mercancía, canal de selectividad, punto de control y resultados?\n3. ¿Se usan los resultados de las inspecciones para actualizar los perfiles de riesgo, los criterios de selectividad y las reglas?",
              "id": "pilar_9_c3_q2",
              "indicator": "KPI [KA9-P7]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "recommendations": "",
              "status": "pending",
              "text": "Registrar los resultados documentales, no intrusivos y físicos en un formato estructurado y rastreable, e incorporarlos de forma transparente al sistema de gestión de riesgos y selectividad para evaluar la eficacia de los controles y depurar perfiles de riesgo, reglas y criterios de tratamiento."
            },
            {
              "code": "KA9-P8",
              "evidence": "",
              "findings": "Los scanners se usan de acuerdo al riesgo que a nivel local establecen. No se tiene tecnología aplicada al despacho",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de desplegar controles inteligentes basados en el riesgo y tecnologías no intrusivas —como escáneres, análisis de imágenes automatizados, puentes de balanza, sensores y otras herramientas avanzadas— para reducir la presencia física y las inspecciones innecesarias, fundamentar mejor las inspecciones específicas y agilizar el despacho de mercancías legítimas en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Están disponibles y se usan en la práctica los registros del sistema, los intercambios de datos, las validaciones, los registros de auditoría o los resultados de los servicios?",
              "id": "pilar_9_c3_q3",
              "indicator": "KPI [KA9-P8]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-21T16:20:09.883Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Desplegar controles inteligentes basados en riesgos y tecnologías no intrusivas —incluidos escáneres, análisis de imágenes automatizados, puentes de pesaje, sensores y otras herramientas avanzadas— para reducir la presencia física y las inspecciones innecesarias, fundamentar mejor las inspecciones específicas y agilizar el despacho de mercancías legítimas."
            }
          ],
          "title": "Controles durante el despacho y retroalimentación sobre el riesgo"
        },
        {
          "code": "C4",
          "id": "c4",
          "questions": [
            {
              "code": "KA9-P9",
              "evidence": "",
              "findings": "20 procesos  de 10 públicas están en la VUCE. Se ha aprobado un decreto supremo para ampliar a dos años el plazo para incorporarse a la VUCE. Es la aduana quien la administra. Actualmente se tienen 108 trámites en cartera para incorporar.  Decreto supremo 5724 del 24 de septiembre de 2026.\n18,925 documentos emitidos en la VUCE entre 2024 a 2026. 49,232 usuarios activos.",
              "guidance": "1. ¿Los permisos, certificados, licencias, autorizaciones, decisiones e información sobre riesgos se intercambian electrónicamente con otros organismos fronterizos?\n2. ¿Se validan electrónicamente los requisitos de otras agencias en el marco del proceso de autorización?\n3. ¿Se coordinan las inspecciones o intervenciones para evitar duplicaciones y demoras innecesarias?",
              "id": "pilar_9_c4_q1",
              "indicator": "KPI [KA9-P9]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-21T16:44:15.076Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Garantizar la interoperabilidad y coordinación con otros organismos fronterizos."
            },
            {
              "code": "KA9-P10",
              "evidence": "",
              "findings": "Los importadores no habituales es el único caso en que no se usa el papel. Para el caso de RITEX aún se presenta la garantía en papel (es una declaración jurada).\nEn verde la aduana no interviene en ningún momento en los depósitos.\n",
              "guidance": "1. ¿Existe un intercambio electrónico de permisos, certificados, permisos y autorizaciones entre la Aduana y los organismos competentes?\n2. ¿Los permisos, certificados, licencias y autorizaciones se validan automáticamente durante el despacho?\n3. ¿Existen mecanismos de inspecciones conjuntas o coordinadas cuando participan varios organismos?",
              "id": "pilar_9_c4_q2",
              "indicator": "KPI [KA9-P10]: Tiempo promedio de levante de mercancías (Time Release Study - TRS) en canal verde y rojo.",
              "lastModifiedAt": "2026-10-21T16:28:46.717Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Automatizar e integrar las principales etapas de despacho y eliminar progresivamente los requisitos impresos y duplicados."
            }
          ],
          "title": "Automatización, interoperabilidad y coordinación de fronteras"
        },
        {
          "code": "C5",
          "id": "c5",
          "questions": [
            {
              "code": "KA9-P11",
              "evidence": "",
              "findings": "Se tiene un área encargada de revisar y actualizar los procedimientos.\nUTISA también verifica el cumplimiento de los procedimientos.\nOperaciones realiza una supervisión.",
              "guidance": "1. ¿Se presentan, validan y procesan las declaraciones y documentos de respaldo siguiendo criterios y mecanismos normalizados?\n2. ¿Están integrados en el sistema electrónico de despacho el pago, la autorización de levante y el levante de mercancías?\n3. ¿Proporciona el sistema suficiente trazabilidad de las decisiones, las intervenciones y los tiempos de autorización?",
              "id": "pilar_9_c5_q1",
              "indicator": "KPI [KA9-P11]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-21T16:36:26.944Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Estandarizar y examinar periódicamente procedimientos, formularios, requisitos de datos y documentación, criterios de inspección y decisiones operativas en todos los puntos de control y modos de transporte a fin de eliminar requisitos innecesarios o duplicados, garantizar la aplicación uniforme, reducir la discrecionalidad y evitar diferencias injustificadas entre oficinas."
            },
            {
              "code": "KA9-P12",
              "evidence": "Indicadores que se publican",
              "findings": "Operaciones monitorea el cumplimiento de tiempos.\nNo se publican los tiempos de despacho.",
              "guidance": "1. ¿Se usan indicadores periódicos para supervisar los horarios de levante, las tasas de inspección, los resultados de los controles, la carga de trabajo, el procesamiento previo al arribo, la recaudación de ingresos, las intervenciones de los organismos, las normas de servicio y los tiempos de resolución de controversias?\n2. ¿Tienen los indicadores fuentes de datos, frecuencia de presentación de informes y unidades responsables definidas?\n3. ¿Se usan los resultados para evaluar el desempeño, identificar cuellos de botella y respaldar la toma de decisiones fundamentadas?",
              "id": "pilar_9_c5_q2",
              "indicator": "KPI [KA9-P12]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "lastModifiedAt": "2026-10-21T16:37:27.454Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Medir y publicar periódicamente los plazos promedio de levante utilizando una metodología uniforme, como el estudio de tiempo de levante de la OMA, y monitorear indicadores de desempeño relacionados."
            },
            {
              "code": "KA9-P13",
              "evidence": "",
              "findings": "comité de fronteras si organizan, se reunen anualmente.\nDesde marzo 2026 ya participa el sector privado\nSe tienen 6 meses técnicas. ",
              "guidance": "1. ¿Existen mecanismos de coordinación y consulta regulares y estructurados con operadores, corredores, operadores logísticos, otros organismos y partes interesadas?\n2. ¿Permiten estos mecanismos identificar de manera proactiva los cuellos de botella, aclarar los requisitos, coordinar intervenciones y mejorar los procedimientos de despacho?\n3. ¿Se documentan y supervisan los acuerdos, las responsabilidades, los plazos y las acciones de seguimiento?",
              "id": "pilar_9_c5_q3",
              "indicator": "KPI [KA9-P13]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-21T16:42:18.997Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Mantener mecanismos regulares y estructurados de coordinación, consulta y seguimiento con las principales partes interesadas."
            }
          ],
          "title": "Estandarización, desempeño y mejora continua"
        }
      ],
      "id": "pilar_9",
      "number": "9",
      "raw_title": "Despacho de aduana",
      "title": "9. Despacho de aduana"
    },
    {
      "assigned_evaluators": [
        "usr_2",
        "usr_4",
        "usr_1792525030420"
      ],
      "code": "KA10",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "code": "KA10-P1",
              "evidence": "",
              "findings": "LEY: Se ha hecho una adaptación de courier como que fuera un despacho a consumo general.\nPOSIBLE MODIFICACION EN LA LEY:\nInclusión de disposiciones específicas para el e-commerce.\nReglamento para servicio expreso Courier: 01064-24 (reemplaza un manual de procesos y procedimiento + guías de usuario).  Eliminar ese esquema para retomar el esquema anterior.\nCABOTAJE 133 inciso e) de la Ley: de un punto de ingreso a otro punto para su descarga.\nSe tiene una guía de procedimientos aduaneros publicada en el portal",
              "guidance": "1. ¿Ha establecido la administración de aduanas un marco jurídico y de procedimiento específico para el comercio electrónico transfronterizo?\n2. ¿Se definen en el marco los tipos de transacciones, los umbrales de valor y los criterios de admisibilidad para procedimientos simplificados?\n3. ¿Se abordan claramente en el marco el tratamiento tributario, los reembolsos, las modificaciones y las consignaciones de bajo valor?",
              "id": "pilar_10_c1_q1",
              "indicator": "KPI [KA10-P1]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-27T15:01:29.322Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Establecer un marco jurídico y de procedimiento diferenciado para el comercio electrónico transfronterizo que utilice criterios objetivos para definir categorías de consignación, umbrales de valor, requisitos mínimos de datos, declaraciones simplificadas o completas, tratamiento impositivo y procedimientos de levante inmediato o acelerado, y revisar periódicamente los umbrales y requisitos aplicables."
            },
            {
              "code": "KA10-P2",
              "evidence": "",
              "findings": "Se encuentran registradas todas\nNo se tiene un manifiesto courier, solo tienen el manifiesto de desconsolidador.\nAhora tiene un \"manifiesto expreso courier\", artículo 202 contempla la transmisión del manifiesto.\nNo se manejan faltantes y sobrantes sino un mensaje final de confirmación de la carga oficialmente llegada, lo cual simplifica la carga, sin embargo, se desconoce que tenga base legal para esto.\nESTO PODRÍA SER PARA LA MODIFICACIÓN DE LA LEY GENERAL DE ADUANAS.\nSe puede despachar en un lugar distinto al aeropuerto, y piden un manifiesto adicional para el tránsito.\nSe piensa obligar a que se despache en la aduana de ingreso, pues hasta ahora un agente de aduanera solo puede hacer el despacho en su jurisdicción.\n\n\n",
              "guidance": "1. ¿Las responsabilidades de los principales actores del comercio electrónico se definen formalmente en leyes, reglamentos o procedimientos operativos?\n2. ¿Se imponen claramente a las partes pertinentes los requisitos de presentación anticipada de datos, mantenimiento de registros y corrección de datos?\n3. ¿Se establecen claramente las obligaciones de cooperación con la aduana y, cuando corresponda, la recaudación de derechos y de impuestos?",
              "id": "pilar_10_c1_q2",
              "indicator": "KPI [KA10-P2]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T14:30:25.587Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Definir responsabilidades para plataformas, vendedores, operadores postales, servicios de mensajería urgente, proveedores de logística, proveedores de servicios de pago e intermediarios en lo que respecta a la presentación anticipada de datos, la declaración, el registro y la corrección de datos, la diligencia debida, la cooperación con la aduana y, cuando corresponda, la recaudación y remisión de derechos e impuestos."
            },
            {
              "code": "KA10-P3",
              "evidence": "El manifiesto y guias por ahora solo lo está transmitiendo DHL, el resto tienenque usar un archivo de Excel que la aduana les  ofrece.",
              "findings": "Aéreo: superior a 2 horas de vuelo, tiene dos horas para transmitirlo, si es menos, es de 30 minutos. Para los courier no hay plazo.\nAplican IATA y mensajes xml + SUMA para manifiestos y guías.",
              "guidance": "1. ¿Se necesitan datos electrónicos anticipados antes de la llegada o el levante de envíos de comercio electrónico?\n2. ¿Los requisitos de datos anticipados abarcan compradores, vendedores, descripciones de las mercancías, valores, cantidades, orígenes e información sobre el transporte?\n3. ¿Se implementan y supervisan los mecanismos de calidad, validación, corrección y retroalimentación de los datos?",
              "id": "pilar_10_c1_q3",
              "indicator": "KPI [KA10-P3]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T14:44:43.063Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Requerir datos anticipados oportunos, precisos y utilizables por medios electrónicos a nivel de consignación, limitados a lo necesario para su levante, ingresos y control, ajustados cuando corresponda al Modelo de Datos de la OMA."
            }
          ],
          "title": "Marco jurídico, procedimientos y responsabilidades de los actores"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA10-P4",
              "evidence": "",
              "findings": "No se permite el pago anticipado. No se realizan controles posteriores.\n",
              "guidance": "1. ¿Los derechos e impuestos sobre las consignaciones de comercio electrónico se evalúan mediante procedimientos claros y estandarizadas?\n2. ¿Se utilizan mecanismos digitales para apoyar la liquidación, recaudación, remisión o ajuste de derechos e impuestos?\n3. ¿Se definen y operacionalizan claramente las funciones de los actores pertinentes de la cadena de suministro en la recaudación de derechos e impuestos?",
              "id": "pilar_10_c2_q1",
              "indicator": "KPI [KA10-P4]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-27T15:03:37.099Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Implementar mecanismos eficientes, transparentes y habilitados por medios digitales para la liquidación anticipada y el pago, cobro, remesa, devolución y ajuste de derechos e impuestos sobre consignaciones de poco valor, asignando responsabilidades a los agentes de la cadena de suministro más adecuados."
            },
            {
              "code": "KA10-P5",
              "evidence": "",
              "findings": "Se aplican las mismas reglas de despacho a consumo y a cada declaración. Se hace además un exámen previo antes de la declaración.",
              "guidance": "1. ¿Utiliza la administración de aduanas datos anticipados y perfiles de riesgo para identificar los envíos de comercio electrónico de mayor riesgo?\n2. ¿Se incorporan los antecedentes de cumplimiento de los operadores y los patrones de transacción a los procesos de análisis de riesgos?\n3. ¿El enfoque de gestión de riesgos se centra específicamente en cuestiones como la subvaloración, la clasificación incorrecta, el abuso de umbrales, las mercancías falsificadas y las mercancías prohibidas?",
              "id": "pilar_10_c2_q2",
              "indicator": "KPI [KA10-P5]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T14:46:17.030Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Aplicar la selectividad basada en el riesgo y el análisis de datos a las consignaciones de comercio electrónico."
            },
            {
              "code": "KA10-P6",
              "evidence": "",
              "findings": "Si.",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia puede la administración disponer el levante inmediato o acelerado de consignaciones de bajo riesgo a la llegada, o dentro de un período determinado, utilizando el mínimo de documentación posible y, en la medida de lo posible, una sola presentación de información; ¿Y permitir su liberación antes de la determinación final de derechos e impuestos en el marco de garantías proporcionales, diferidos o acuerdos de pago periódico en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_10_c2_q3",
              "indicator": "KPI [KA10-P6]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T14:46:33.802Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Disponer el levante inmediato o acelerado de consignaciones de bajo riesgo a la llegada, o en un plazo determinado."
            },
            {
              "code": "KA10-P7",
              "evidence": "",
              "findings": "100% pasa al escáner. Luego de eso hay un documento de revisión que podría ajustar la naturaleza y el valor de las mercancias. Prácticamente es un aforo que podría ser un exámen previo, pues luego de eso se realiza la declaración.\n",
              "guidance": "1. ¿Se utilizan tecnologías de inspección no intrusiva para apoyar el examen de las consignaciones de comercio electrónico?\n2. ¿Se utilizan análisis de imágenes con IA para ayudar a identificar anomalías o paquetes de mayor riesgo?\n3. ¿Se aplica a estas tecnologías la supervisión humana, los controles de gobernanza de los datos y las salvaguardias contra sesgos o abusos?",
              "id": "pilar_10_c2_q4",
              "indicator": "KPI [KA10-P7]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T14:08:16.210Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Utilizar inspecciones no intrusivas basadas en riesgos, análisis automatizados de datos e imágenes, y otras herramientas digitales idóneas para detectar anomalías y dirigirse a consignaciones de mayor riesgo, al tiempo que se acelera el levante de operaciones comerciales legítimas y se mantienen controles de seguridad eficaces con la adecuada gobernanza, supervisión humana y salvaguardias."
            }
          ],
          "title": "Recaudación, gestión de riesgos y controles de ingresos públicos"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA10-P8",
              "evidence": "",
              "findings": "No interoperabilidad, actúan en SUMA\nLas plataformas no están incluidas en el esquema de control por lo pronto ni por la cooperación con ellos.",
              "guidance": "1. ¿Se establecen mecanismos formales de cooperación entre las aduanas, las autoridades tributarias, los organismos fronterizos y otras partes interesadas pertinentes?\n2. ¿Opera el intercambio electrónico de datos entre la aduana y los actores pertinentes del sector público y privado?\n3. ¿Promueven los mecanismos de interoperabilidad un intercambio estructurado y oportuno de información para los controles del comercio electrónico?",
              "id": "pilar_10_c3_q1",
              "indicator": "KPI [KA10-P8]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T15:06:51.050Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Establecer acuerdos de cooperación, interoperabilidad e intercambio automatizado de datos entre las aduanas, las administraciones tributarias y fronterizas, los operadores postales y de mensajería, las plataformas y otros actores pertinentes a fin de permitir la presentación y reutilización únicas de los datos, la evaluación y el procesamiento coordinados de riesgos, una única notificación previa al despacho y la coordinación —y, de ser posible, simultánea— de controles e inspecciones."
            },
            {
              "code": "KA10-P9",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Existe un marco de gobierno conjunto o de trabajo formal específico para el comercio electrónico establecido entre la Aduana y la Administración Tributaria para las ventas en línea y la supervisión de la plataforma?\n2. ¿Los datos de importación y las declaraciones de paquetes de poco valor se concilian sistemáticamente con las obligaciones internas de la administración tributaria sobre el IVA/IBS y los registros de ventas de las plataformas?\n3. ¿Las autoridades aduaneras y tributarias intercambian información a nivel de transacción para identificar casos de subdeclaración, abuso de umbrales o brechas de cumplimiento en la venta de plataformas digitales?",
              "id": "pilar_10_c3_q2",
              "indicator": "KPI [KA10-P9]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "recommendations": "",
              "status": "pending",
              "text": "Establecer una gobernanza aduanera y tributaria coordinada para la recaudación de ingresos por comercio electrónico transfronterizo."
            },
            {
              "code": "KA10-P10",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Elabora la administración estadísticas operativas e informes analíticos específicos que abarquen los volúmenes, los tiempos de despacho y los ingresos del comercio electrónico transfronterizo?\n2. ¿Existe un marco consolidado de medición del desempeño con indicadores clave de desempeño específicos para el comercio electrónico que abarquen las tasas de éxito de la selectividad, los resultados de las inspecciones, la calidad de los datos y las declaraciones?\n3. ¿La alta dirección actualiza periódicamente los indicadores de desempeño del comercio electrónico y los utiliza sistemáticamente para perfeccionar los modelos de riesgo y adoptar decisiones de facilitación del comercio?",
              "id": "pilar_10_c3_q3",
              "indicator": "KPI [KA10-P10]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "recommendations": "",
              "status": "pending",
              "text": "Vigilar el desempeño del comercio electrónico mediante indicadores e informes analíticos que abarquen volúmenes, procesamiento anticipado, levante inmediato o oportuno, calidad de los datos, resultados de ingresos, solicitudes de información adicional, resultados de selección y control por categoría, declaraciones, modificaciones, reembolsos, garantías, causas de demora y desempeño del operador."
            },
            {
              "code": "KA10-P11",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Proporciona la administración de aduanas información clara y accesible sobre los requisitos y procedimientos relacionados con el comercio electrónico a través de los canales digitales?\n2. ¿Se dispone de materiales orientativos sobre derechos, impuestos, restricciones, pagos y obligaciones de cumplimiento?\n3. ¿Hay mecanismos disponibles para consultas, quejas y asistencia a las mipymes que realizan transacciones de comercio electrónico transfronterizo?",
              "id": "pilar_10_c3_q4",
              "indicator": "KPI [KA10-P11]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "recommendations": "",
              "status": "pending",
              "text": "Promover la transparencia, el cumplimiento voluntario y la participación de las micro, pequeñas y medianas empresas (mipymes)."
            },
            {
              "code": "KA10-P12",
              "evidence": "",
              "findings": "Se tiene en el capítulo 98 códigos establecidos para 5 tipos de mercancías específicas, que son muestras comerciales, ",
              "guidance": "1. ¿Ha establecido la administración de aduanas un programa de capacitación que cubra los riesgos, los procedimientos y controles relacionados con el comercio electrónico?\n2. ¿Tiene el personal capacidades especializadas en análisis de datos, detección de fraudes, valoración, clasificación y gestión de riesgos para el comercio electrónico?\n3. ¿Refuerza periódicamente la administración las capacidades mediante la cooperación con plataformas, operadores logísticos y otras partes interesadas?",
              "id": "pilar_10_c3_q5",
              "indicator": "KPI [KA10-P12]: % de envíos de comercio electrónico declarados electrónicamente con perfilamiento previo.",
              "lastModifiedAt": "2026-10-27T14:34:01.485Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Fortalecer la capacidad institucional para la gestión del comercio electrónico."
            }
          ],
          "title": "Cooperación, interoperabilidad, transparencia y capacidad"
        }
      ],
      "id": "pilar_10",
      "number": "10",
      "raw_title": "Gestión del comercio electrónico",
      "title": "10. Gestión del comercio electrónico"
    },
    {
      "assigned_evaluators": [
        "usr_3",
        "usr_1",
        "usr_1792525030420"
      ],
      "code": "KA11",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "code": "KA11-P1",
              "evidence": "REGÍMENES ESPECIALES\n\n1.\tLeyes u ordenamientos específicos\n2.\tRegistro Electrónico para cada régimen (captura del sistema, manuales de usuario, procedimientos)\n3.\tInclusión en la GIR (segmentación, indicadores de riesgo, tableros)\n4.\tInformes electrónicos (norma que lo disponga, captura de los informes y análisis efectuados)\n5.\tRespuestas proporcionadas y oportunas al incumplimiento (legislación, procedimientos de suspensión, coordinación con otras instancias competentes)\n6.\tGarantizar acceso a las zonas francas y sus datos (facultades e información que se revisa o recibe)\n7.\tTrazabilidad y conciliación de mercancías (legislación, capturas de sistemas de inventarios, coeficientes de uso)\n8.\tSeguridad de instalaciones (legislación, documentación que se aporta cuando se solicita el régimen -planos, fotografías, etc.)\n",
              "findings": "RITEX tiene un Decreto específico.\nDecreto 3536 del 2018",
              "guidance": "1. ¿Existe un marco jurídico y normativo que defina el alcance, los criterios de elegibilidad y las ventajas de cada régimen especial?\n2. ¿Las obligaciones, garantías, plazos, condiciones de liberación y reglas de rescisión están claramente definidas para cada régimen?\n3. ¿Se establecen sanciones, procedimientos de recurso y derechos de apelación y se comunican a los beneficiarios?",
              "id": "pilar_11_c1_q1",
              "indicator": "KPI [KA11-P1]: Tasa de fiscalización de inventarios y cumplimiento de plazos en regímenes especiales y zonas francas.",
              "lastModifiedAt": "2026-10-21T19:59:28.439Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Establecer un marco jurídico y regulatorio claro para cada régimen que defina alcance, elegibilidad, obligaciones, beneficios, garantías, plazos, condiciones de liberación, reglas de terminación, sanciones y derechos de revisión o apelación."
            },
            {
              "code": "KA11-P2",
              "evidence": "",
              "findings": "Se tiene un sistema específico para RITEX.\nSe registra ante el ministerio de Comercio y Logistica Interna.\nSe mudará a SUMA el sistema actual porque es vieja.\n",
              "guidance": "1. ¿Se llevan registros electrónicos de beneficiarios, operadores, locales y actividades autorizadas en virtud de cada régimen?\n2. ¿Se emiten, actualizan y gestionan electrónicamente las autorizaciones?\n3. ¿Los datos de los registros se validan con los registros de impuestos, licencias, inversiones o autoridades regulatorias?\n4. ¿Los registros electrónicos identifican los bienes autorizados por el código, la descripción, la cantidad, el origen, el valor y el beneficio aplicable?",
              "id": "pilar_11_c1_q2",
              "indicator": "KPI [KA11-P2]: Tasa de fiscalización de inventarios y cumplimiento de plazos en regímenes especiales y zonas francas.",
              "lastModifiedAt": "2026-10-21T20:06:07.818Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes": "Se tiene un sistema específico para RITEX.\nSe registra ante el ministerio de Comercio y Logistica Interna.\nSe mudará a SUMA el sistema actual porque es vieja.",
              "recommendations": "",
              "status": "pending",
              "subquestion_comments": [
                "Se tiene un sistema específico para RITEX.\nSe registra ante el ministerio de Comercio y Logistica Interna.\nSe mudará a SUMA el sistema actual porque es vieja."
              ],
              "text": "Mantener registros electrónicos fiables para cada régimen especial que vinculen a beneficiarios, autorizaciones, instalaciones, actividades, bienes y prestaciones otorgadas."
            },
            {
              "code": "KA11-P3",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se incluyen formalmente regímenes especiales en el marco de gestión de riesgos aduaneros?\n2. ¿Los beneficiarios se segmentan en función de los niveles de riesgo?\n3. ¿Se aplican evaluaciones de riesgo a solicitudes, renovaciones y operaciones en curso?\n4. ¿Se diferencian las medidas de facilitación según el nivel de riesgo?",
              "id": "pilar_11_c1_q3",
              "indicator": "KPI [KA11-P3]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "recommendations": "",
              "status": "pending",
              "text": "Incluir los regímenes especiales en el marco institucional de gestión de riesgos y segmentar a los beneficiarios según el nivel de riesgo."
            },
            {
              "code": "KA11-P4",
              "evidence": "",
              "findings": "Se realiza control de plazos vencidos\nSe permite nacionalizar cualquier cantidad de forma voluntaria antes de los 360 días",
              "guidance": "1. ¿Los beneficiarios deben presentar informes electrónicos estructurados a la aduana?\n2. ¿Están los sistemas de inventario y contabilidad sujetos a la supervisión aduanera?\n3. ¿Los sistemas de inventario y contabilidad deben interoperar con el sistema TIC de la aduana?\n4. ¿Se usan controles automáticos de conciliación para detectar discrepancias en inventarios, pasivos, prestaciones o cancelaciones de regímenes?\n5. ¿Puede la aduana controlar electrónicamente los ingresos perdidos, las garantías, las obligaciones y las irregularidades detectadas?",
              "id": "pilar_11_c1_q4",
              "indicator": "KPI [KA11-P4]: Tiempo promedio de levante de mercancías (Time Release Study - TRS) en canal verde y rojo.",
              "lastModifiedAt": "2026-10-21T19:53:46.471Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Exigir informes electrónicos estructurados, controles contables y de inventario supervisados por la aduana y conciliación automatizada para trazar mercancías, verificar existencias, beneficios, garantías, pasivos, ingresos no percibidos, irregularidades detectadas y eventos de liberación."
            },
            {
              "code": "KA11-P5",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Están disponibles las sanciones, suspensiones, revocaciones, recuperaciones y mecanismos de ejecución de garantías cuando corresponde?\n2. ¿Intercambia aduanas información con las autoridades fiscales, de inversión, de zonas francas, de habilitaciones y otras autoridades pertinentes?\n3. ¿Se brinda al personal responsable de la gestión de los regímenes especiales capacitación y orientación especializadas?",
              "id": "pilar_11_c1_q5",
              "indicator": "KPI [KA11-P5]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "recommendations": "",
              "status": "pending",
              "text": "Aplicar respuestas proporcionadas y oportunas al incumplimiento de las condiciones de los regímenes especiales."
            }
          ],
          "title": "marco general, autorización, gestión de riesgos y aplicación."
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA11-P6",
              "evidence": "",
              "findings": "solo hay 3 zonas francas en el país, Patacamaya, Oruro y Cobija (Decreto 27-89). Aduanas controla el transito hacia un almacen único (KM19). Actualmente no se tiene una declaración de importación.\nDeclaran bien en cantidad y valor. Podrían ser precios referenciales.\nDeclaración de Zona Franca de Ingreso.\nZona Económica Especial Satibañes en Cochabamba.",
              "guidance": "1. ¿Tiene la aduana autoridad jurídica para supervisar e inspeccionar las zonas francas, las zonas económicas especiales, las zonas francas y acuerdos similares?\n2. ¿Tiene la aduana acceso a los datos operativos y de inventario de estas instalaciones?\n3. ¿Las responsabilidades de la supervisión de la aduana se definen claramente y se operacionalizan?",
              "id": "pilar_11_c2_q1",
              "indicator": "KPI [KA11-P6]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-21T20:21:28.087Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "recommendations": "",
              "status": "pending",
              "text": "Garantizar el acceso de las autoridades aduaneras y a los datos en las zonas francas, las zonas económicas especiales, las zonas francas y acuerdos similares."
            },
            {
              "code": "KA11-P7",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Puede la aduana rastrear las mercancías electrónicamente durante todo su ciclo de vida en el marco de este régimen?\n2. ¿Los movimientos de bienes y las operaciones del régimen se concilian con las existencias y los registros contables?\n3. ¿Se utiliza tecnología moderna para garantizar la trazabilidad, el seguimiento y la conciliación de bienes y operaciones?",
              "id": "pilar_11_c2_q2",
              "indicator": "KPI [KA11-P7]: % de manifiestos presentados anticipadamente y tasa de trazabilidad satelital en tránsitos.",
              "recommendations": "",
              "status": "pending",
              "text": "Mantener la trazabilidad de extremo a extremo y la conciliación de las mercancías y las operaciones."
            },
            {
              "code": "KA11-P8",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se establecen controles de acceso, medidas de vigilancia y otros requisitos de seguridad física para las instalaciones autorizadas?\n2. ¿Están las mercancías segregadas de acuerdo con la situación aduanera y están disponibles para su inspección cuando es necesario?\n3. ¿Se intercambian datos electrónicos entre instalaciones autorizadas y autoridades competentes?\n4. ¿Se conservan los registros y se ponen a disposición de la aduana cuando se solicitan?",
              "id": "pilar_11_c2_q3",
              "indicator": "KPI [KA11-P8]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "recommendations": "",
              "status": "pending",
              "text": "Exigir la seguridad, las instalaciones, el mantenimiento de registros y controles de intercambio electrónico de datos para instalaciones y operaciones autorizadas bajo regímenes especiales."
            },
            {
              "code": "KA11-P9",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Verifica la aduana el cumplimiento de las condiciones aplicables a las exenciones e importaciones temporales por medios electrónicos?\n2. ¿Se llevan a cabo controles para verificar el correcto uso, disposición o reexportación de bienes que reciben exenciones o beneficios de admisión temporal?\n3. ¿Se toman medidas de ejecución cuando se detecta el incumplimiento de la exención o las condiciones de admisión temporal?",
              "id": "pilar_11_c2_q4",
              "indicator": "KPI [KA11-P9]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "recommendations": "",
              "status": "pending",
              "text": "Aplicar controles y seguimiento basados en el riesgo a las exenciones y las importaciones temporales a fin de verificar el cumplimiento de las condiciones aplicables."
            }
          ],
          "title": "Controles específicos de regímenes para transformación, depósitos, zonas francas y acuerdos similares"
        }
      ],
      "id": "pilar_11",
      "number": "11",
      "raw_title": "Gestión de regímenes especiales",
      "title": "11. Gestión de regímenes especiales"
    },
    {
      "assigned_evaluators": [
        "usr_1",
        "usr_3",
        "usr_1792525030420"
      ],
      "code": "KA12",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "code": "KA12-P1",
              "evidence": "Ley General de Aduanas. Reglamento. Código Tributario",
              "findings": "- Artículos 49 RLGA y 100 del Código Tributario\n- prescripción de 4 años\n-  La aduana puede exigir acceso a los registros contables... (art. 100 -2 CT)",
              "guidance": "1. ¿Otorga el marco jurídico a la Aduana potestades suficientes para realizar APD después del levante de las mercancías?\n2. ¿Proporciona el marco jurídico a la APD un alcance y tiempo adecuados para disuadir y corregir el incumplimiento de manera eficaz?\n3. ¿Puede la Aduana exigir acceso a los registros contables, los sistemas comerciales, las instalaciones y otra información pertinente?\n4. ¿Existen sanciones proporcionadas y están disponibles para desalentar el incumplimiento detectado a través de una APD?",
              "id": "pilar_12_c1_q1",
              "indicator": "KPI [KA12-P1]: % de personal aduanero evaluado por competencias y con plan anual de formación ejecutado.",
              "lastModifiedAt": "2026-10-26T22:32:44.444Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792776708137_2kwp",
                  "text": "Las facultades de fiscalización se sustentan en la LGA, su reglamento y el CT. Las facultades se perciben suficientes, aunque habrá que revisar si en la práctica de una fiscalización más profunda en una auditoría de campo se podrían ejecutar. El marco sancionatorio comprende delitos y contravenciones aduaneras. Las sanciones van de 14 a 14,000 dólares, lo cual es un rango muy amplio, aunque no pareciera ser efectivo para disuadir las conductas.",
                  "timestamp": "2026-10-23T17:31:48.137Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "Hacer un análisis de la eficiencia del marco actual para considerarlo en el proyecto de reforma",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer un marco jurídico y de gestión de gobierno para la APD que otorgue a la Aduana facultades adecuadas para verificar el cumplimiento de los requisitos aduaneros y otros requisitos de su competencia y acceder a los registros, sistemas, locales y información de terceros pertinentes."
            },
            {
              "code": "KA12-P2",
              "evidence": "Manual de organización y funciones. ",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es que la administración mantenga una separación funcional clara entre la selección de casos de la APD y la ejecución de la auditoría en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se prevén en los acuerdos los procedimientos para remitir sospechas de delitos graves a la autoridad competente sin comprometer los derechos del auditado o las investigaciones en curso?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_12_c1_q2",
              "indicator": "KPI [KA12-P2]: Rendimiento de auditorías posteriores al despacho (Tasa de eficacia y recuperación de adeudos).",
              "lastModifiedAt": "2026-10-25T02:33:33.651Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792776476148_lafk",
                  "text": "Gerencia Nacional de Riesgos y Fiscalización contiene ambas funciones. El departamento de riesgo emite la ficha y fiscalización la recibe y ejecuta. Previamente hay una retroalimentación si es necesaria, aunque esta retroalimentación no esta normado",
                  "timestamp": "2026-10-23T17:27:56.148Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 4,
              "status": "evaluated",
              "text": "Mantener una clara separación funcional entre la selección de casos por parte de la APD y la ejecución de la auditoría."
            }
          ],
          "title": "marco jurídico, gobernanza e independencia de la auditoría"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA12-P3",
              "evidence": "Ficha de riesgo enviada a fiscalización. POA de  Fiscalización. Resolución de auditoría por riesgo de valor -para verificar la motivación, argumentación y fundamentación en la apliación del método-\n",
              "findings": "No hay propiamente un plan de auditoría, está el POA.\nSu definición no se considera en base a riesgos sino únicamente en cuantificación de actos\n",
              "guidance": "1. ¿Existe un plan anual de APD basado en el análisis de riesgo documentado?\n2. ¿Incluye el plan anual de auditoría basado en riesgos un mecanismo definido para evaluar, priorizar e incorporar las denuncias externas o las derivaciones de las áreas operativas en la selección de casos por parte del despacho?\n3. ¿Para la planificación de la auditoría se utilizan cotejos y comprobaciones de datos entre información aduanera, fiscal y de terceros?\n4. ¿Los operadores se segmentan por tamaño, sector, historial de cumplimiento y perfil de riesgo para priorizar la fiscalización?",
              "id": "pilar_12_c2_q1",
              "indicator": "KPI [KA12-P3]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T02:37:07.151Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792781068093_icbj",
                  "text": "Hay 12 auditores. El POA se planifica conforme a la capacidad. 1 fiscalizador efectúa 2 por mes. No se aprecia que el plan de fiscalización atienda una metodología de análisis de riesgo",
                  "timestamp": "2026-10-23T18:44:28.093Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                },
                {
                  "id": "note_1792781460153_xbh0",
                  "text": "Tienen coordinaciones previas a emitir las fichas para revisar el enfoque.",
                  "timestamp": "2026-10-23T18:51:00.153Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                },
                {
                  "id": "note_1792781527933_q949",
                  "text": "Riesgo determina el alcance en periodo y riesgo",
                  "timestamp": "2026-10-23T18:52:07.933Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "Se recomienda documentar/institucionalizar la retroalimentación que se hace entre riesgo y fiscalizacion",
              "score": 1,
              "status": "evaluated",
              "text": "Preparar y actualizar periódicamente un plan de auditoría basado en el riesgo utilizando la segmentación de los operadores, el análisis sectorial de riesgos, la compaginación de datos aduaneros y tributarios, inteligencia, análisis del comercio, historial de cumplimiento y resultados de auditoría para identificar y priorizar los casos de auditoría."
            },
            {
              "code": "KA12-P4",
              "evidence": "Reglamento y Manual de Procedimientos de 2024\nProyecto de manual actualizado.",
              "findings": "- Cuenta con el Manual de control posterior y el reglamento de control posterior emitidos en 2024 y 2025 respectivamente. \n- Ahora están en proceso de actualización\n",
              "guidance": "1. ¿Cuenta la Aduana con un manual actualizado de procedimientos para la APD que cubra todo el ciclo de auditoría?\n2. ¿Se aplican sistemáticamente los pasos de auditoría estandarizada a todos los equipos de la APD?\n3. ¿Se revisa periódicamente el manual de APD para reflejar cambios jurídicos, procedimentales, tecnológicos y de riesgo?",
              "id": "pilar_12_c2_q2",
              "indicator": "KPI [KA12-P4]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-25T02:56:54.670Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792678380947_py37",
                  "text": "Se tiene un sistema en proceso de desarrollo (SIAN) y será el sistema de gestión de las auditorías, es un satélite, no es SUMA, y en SUMA se genera la ficha de riesgo, la pregunta sería, se cargará en SIAN la ficha desde SUMA?",
                  "timestamp": "2026-10-22T14:13:00.947Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                },
                {
                  "id": "note_1792781604522_v2ue",
                  "text": "- Tienen un manual y un reglamento RD 01 octubre 2024 y se está actualizando.\n- En el manual de puestos se señalan los perfiles",
                  "timestamp": "2026-10-23T18:53:24.522Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer y aplicar de manera coherente procedimientos estandarizados de APD que abarquen el examen de registros, sistemas comerciales y controles internos, así como recomendaciones para corregir las deficiencias identificadas."
            },
            {
              "code": "KA12-P5",
              "evidence": "",
              "findings": "- No tienen un acceso sistemático, se solicita para cada caso\n- Si existen mecanismos formales de solicitud de información\n ",
              "guidance": "1. ¿Tiene la APD acceso sistemático a los datos aduaneros, fiscales, de comerciantes y de declaraciones históricas?\n2. ¿Existen mecanismos formales de intercambio de información con los titulares de los datos públicos y privados pertinentes?\n3. ¿Se utiliza información de terceros para identificar discrepancias y respaldar los hallazgos de una auditoría?",
              "id": "pilar_12_c2_q3",
              "indicator": "KPI [KA12-P5]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-25T02:58:35.322Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792782406873_roy1",
                  "text": "- Pueden solicitar información a la ASFI (ente regulador financiero), están requiriendo la información mediante notas.\n- Requieren una plataforma interoperable.",
                  "timestamp": "2026-10-23T19:06:46.873Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Garantizar un acceso sistemático, oportuno y seguro a la información electrónica pertinente de fuentes aduaneras, fiscales, comerciales, financieras, regulatorias y de terceros."
            },
            {
              "assigned_to": "usr_3",
              "code": "KA12-P6",
              "evidence": "No es una práctica institucionalizada",
              "evidence_delivered": true,
              "evidence_delivery_date": "25 oct 2026",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de establecer un ciclo de retroalimentación entre la APD y la gestión de riesgos, utilizando los hallazgos de las auditorías para mejorar los indicadores de riesgo, los modelos de selección y los criterios de selectividad mediante la formalización del intercambio de información entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan los mecanismos entre las unidades de APD y de Gestión de Riesgos?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_12_c2_q4",
              "indicator": "KPI [KA12-P6]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-27T02:16:01.879Z",
              "lastModifiedBy": "Miguel Tapia",
              "lastModifiedById": "usr_2",
              "lastModifiedColor": "#0d9488",
              "notes_history": [
                {
                  "id": "note_1792678228234_r1i3",
                  "text": "Se hace a través de SUMA la ficha de riesgo que se pasa a APD.",
                  "timestamp": "2026-10-22T14:10:28.234Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                },
                {
                  "id": "note_1792678585242_ybje",
                  "text": "Se realizan reuniones previas al envío de las fichas de riesgo hacia auditoría y también se realizan reuniones para analizar los resultados de las auditorías, pero no se documenta la retroalimentación, tienen contemplado resolverlo a través del nuevo sistema.",
                  "timestamp": "2026-10-22T14:16:25.242Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                },
                {
                  "id": "note_1792782657822_s1ba",
                  "text": "- Riesgo evalúa con la información que les pide. Antes solicitaban los resultados\n- Tienen coordinaciones previas a emitir las fichas para revisar el enfoque. Se recomienda documentarlo.",
                  "timestamp": "2026-10-23T19:10:57.822Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "Institucionalizar la práctica",
              "score": 2,
              "status": "evaluated",
              "text": "Establecer un círculo virtuoso entre la APD y la gestión de riesgos."
            }
          ],
          "title": "Planificación y ejecución de auditorías basadas en el riesgo"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA12-P7",
              "evidence": "Estadísticas de impugnaciónes. Cobranzas.",
              "findings": "Aunque tienen un sistema para la gestión y seguimiento, éste  no incorpora la parte de cobro coactivo ni de procedimientos administrativos y judiciales. Tampoco tiene un desarrolllo que permita la retroalimentación ",
              "guidance": "1. ¿Hay un módulo de TIC para gestionar los casos de APD a lo largo del ciclo de fiscalización?\n2. ¿Realiza el sistema un seguimiento de las evaluaciones, el cobro, las apelaciones, los resultados de los litigios y el cierre de casos?\n3. ¿Proporciona el módulo de TIC retroalimentación a los programas de gestión de riesgos y cumplimiento?",
              "id": "pilar_12_c3_q1",
              "indicator": "KPI [KA12-P7]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T03:04:03.952Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792675687990_gbzz",
                  "text": "Se paga el 10% de los casos auditaros en materia de valor.",
                  "timestamp": "2026-10-22T13:28:07.990Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                },
                {
                  "id": "note_1792676258649_pj9u",
                  "text": "Necesitaríamos estadísticas sobre casos que se van al área Juridica en términos de casos que se ganan o no y las razones por las que no se ganan.",
                  "timestamp": "2026-10-22T13:37:38.649Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                },
                {
                  "id": "note_1792676508458_40tv",
                  "text": "Se necesitan datos también datos sobre lo que se ha pagado en auditoría y lo que no, e identificar las causas para retroalimentar a riesgo.",
                  "timestamp": "2026-10-22T13:41:48.459Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                },
                {
                  "id": "note_1792678956689_dtix",
                  "text": "Sistema PIETS es el que se usa para gestionar el cobro coactivo. Este es el sistema que usa también el SIN. El tribunal que usan es el mismo que tributos internos.",
                  "timestamp": "2026-10-22T14:22:36.690Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                },
                {
                  "id": "note_1792679076861_805j",
                  "text": "El 70% de los casos se pierden por aspectos de forma y no de fondo. Ojo con esto en las conclusiones.",
                  "timestamp": "2026-10-22T14:24:36.861Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                },
                {
                  "id": "note_1792782743542_0tet",
                  "text": "- Sistema de fiscalización. Orden de control, asignación, etapa, remisión a jurídica- La parte legal está faltando \n- La ficha se sube al sistema SUMA\n- Se está trabajando con el SIAN (sisema integrado de la Aduana Nacional) se está subiendo el sistma de auditoría. se prevén reportes por gestiones.",
                  "timestamp": "2026-10-23T19:12:23.542Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                },
                {
                  "id": "note_1792782911543_u6vj",
                  "text": "- Sistema MERO se registran pagos, impugnaciones.\n- El área legal lleva en 3 sistemas la informacion de cobranza coactiva. se notifica electrónicamente a traves de SUMA. PIET. En la impugnacion se presenta el recurso de alzada ante Impugnación Tributaria, es un procedimiento administrativo. el 70% es forma. Las unidades regionales siguen los procesos. Tienen un sistema PRODEC donde registran todos los procesos de impugnación.\n- Se está trabajando en el sistema integral.",
                  "timestamp": "2026-10-23T19:15:11.543Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "Incoporar indicadores de desempeño. Incorporar la etapa de cobranza e impugnaciones",
              "score": 2,
              "status": "evaluated",
              "text": "Utilizar sistemas integrados de gestión de fiscalización y seguimiento de casos a lo largo de todo el ciclo de vida de la auditoría para apoyar la planificación, las tareas, el trabajo de campo, la gestión de evidencias, las evaluaciones, el cobro de fondos, las apelaciones, los litigios, los cierres y la supervisión del rendimiento."
            },
            {
              "code": "KA12-P8",
              "evidence": "",
              "findings": "- No hay una política de medición del desempeño más allá del cumplimiento del POA\n- No hay indicadores que evaluen la calidad de la auditoría, montos cobrados y mejora en el cumplimiento\n- Únicamente tienen informacion de número de fiscalizaciones concluidas con hallazgos y la determinación",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia puede la administración medir el desempeño de la APD en las operaciones, unidades o localidades pertinentes?\n3. ¿Abbarcan los acuerdos indicadores sobre la cobertura de la auditoría, la calidad de la auditoría, los hallazgos, los montos liquidados y cobrados, los casos de apelación y las mejoras en el cumplimiento de los operadores?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_12_c3_q2",
              "indicator": "KPI [KA12-P8]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "lastModifiedAt": "2026-10-25T03:08:23.475Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Medir el desempeño de las APD mediante indicadores sobre la cobertura de la auditoría, la calidad de la auditoría, los resultados, los importes liquidados y cobrados, los casos de apelación y las mejoras en el cumplimiento de los operadores."
            },
            {
              "code": "KA12-P9",
              "evidence": "",
              "findings": "Pese a la manifestación de que los auditores están capacitados, al fiscalizar únicamente valor y no otros riesgos, no es factible acreditar en la práctica dicha capacitacion.\n- Debido a que no se planifican auditorías por sectores, iincisos de riesgo, regímenes, etc. tampoco se pueden evaluar estas capacidades\n- del mismo modo, al no ejecutar fiscalización en campo, no se puede asegurar que cuenten con los conocimientos y habilidades para ello",
              "guidance": "1. ¿Cuenta la Aduana con suficientes auditores especializados en APD para proporcionar una cobertura adecuada de los operadores de los sectores comerciales más sensibles?\n2. ¿Tienen los auditores de la APD conocimientos técnicos en clasificación, valoración, origen, impuestos nacionales, contabilidad y procedimientos de auditoría?\n3. ¿Los auditores se organizan o asignan por áreas de riesgo, sectores, capítulos del SA o regímenes especializados?",
              "id": "pilar_12_c3_q3",
              "indicator": "KPI [KA12-P9]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-26T22:27:54.977Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792783374070_q1p8",
                  "text": "Auque el jefe del departamento considera que los auditores están capacitados, la mayor parte de los actos son de valor en aduana y aún no se ha proporcionado evidencia de que el nuevo valor asignado se efectúe en términos del Acuerdo de Valoración",
                  "timestamp": "2026-10-23T19:22:54.070Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Mantener auditores especializados y capacitados en auditoría posterior con conocimientos especializados en valoración en aduana, clasificación arancelaria, reglas de origen, contabilidad, auditoría, tributación, análisis de datos y riesgos sectoriales específicos."
            },
            {
              "code": "KA12-P10",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia es la administración capaz de medir el desempeño y los resultados en materia de cumplimiento de la APD utilizando indicadores pertinentes y promover la autoevaluación y la divulgación voluntaria para respaldar las medidas correctivas y el cumplimiento voluntario en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_12_c3_q4",
              "indicator": "KPI [KA12-P10]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "lastModifiedAt": "2026-10-26T22:28:09.988Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792783232238_1c0q",
                  "text": "No se observa medición del cumplimento. Inclusive se mantiene el mismo nivel de incumplimiento.",
                  "timestamp": "2026-10-23T19:20:32.238Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Medir los resultados en materia de cumplimiento y desempeño de la APD utilizando los indicadores pertinentes y promover la autoevaluación y la divulgación voluntaria para respaldar las medidas correctivas y el cumplimiento voluntario."
            },
            {
              "code": "KA12-P11",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de establecer procedimientos sistemáticos y oportunos para dar seguimiento a los resultados de la auditoría posterior al despacho en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abbarcan los acuerdos las determinaciones, pagos, garantías, medidas correctivas, recomendaciones y apelaciones para confirmar la regularización efectiva del incumplimiento identificado, detectar recurrencias y adoptar las medidas apropiadas?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_12_c3_q5",
              "indicator": "KPI [KA12-P11]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-23T19:19:10.617Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792783144139_7soa",
                  "text": "Se da el seguimiento mensual del POA. No hay evidencia de indicadores de desempeño",
                  "timestamp": "2026-10-23T19:19:04.139Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Establecer procedimientos sistemáticos y oportunos para dar seguimiento a los resultados de auditorías posteriores al despacho."
            },
            {
              "code": "KA12-P12",
              "evidence": "Registros de verificación en el SGC  PEDIR. Verificar en el Manual y reglamento que haya actividades de revisión",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia puede la administración establecer mecanismos de revisión documentada y garantía de calidad para la APD en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan los acuerdos el examen de la documentación clave de auditoría antes de las determinaciones definitivas y las evaluaciones periódicas de calidad para promover la coherencia, la mejora y el aprendizaje institucional?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_12_c3_q6",
              "indicator": "KPI [KA12-P12]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-26T22:29:16.880Z",
              "lastModifiedBy": "Sylvia Saucedo",
              "lastModifiedById": "usr_3",
              "lastModifiedColor": "#7c3aed",
              "notes_history": [
                {
                  "id": "note_1792783014006_yutv",
                  "text": "- Cumple el tema de Gestión de Calidad. Registros con formatos. controles de calidad a gerencias regionales. En POA tienen esos controles. Informes de control de calidad.",
                  "timestamp": "2026-10-23T19:16:54.006Z",
                  "userColor": "#7c3aed",
                  "userId": "usr_3",
                  "userName": "Sylvia Saucedo",
                  "userRole": "Evaluador Legal"
                }
              ],
              "recommendations": "",
              "score": 3,
              "status": "evaluated",
              "text": "Establecer mecanismos de revisión documentada y garantía de calidad para la APD, que incluyan la revisión por parte de la gerencia de la documentación clave de auditoría antes de las determinaciones finales y evaluaciones periódicas de calidad para promover la coherencia, la mejora y el aprendizaje institucional."
            }
          ],
          "title": "Desempeño, retroalimentación, capacidad técnica y cooperación con las partes interesadas"
        }
      ],
      "id": "pilar_12",
      "number": "12",
      "raw_title": "Auditoría posterior al despacho",
      "title": "12. Auditoría posterior al despacho"
    },
    {
      "assigned_evaluators": [
        "usr_4",
        "usr_1792525030420"
      ],
      "code": "KA13",
      "criteria": [
        {
          "code": "C1",
          "id": "c1",
          "questions": [
            {
              "code": "KA13-P1",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Define claramente el marco jurídico los delitos de contrabando y sanciones administrativas o penales relacionadas?\n2. ¿Están las facultades aduaneras, las autoridades de hacer cumplir y los mecanismos de referencia claramente establecidos en la ley o la normativa?\n3. ¿Son las sanciones proporcionadas, oportunas y suficientemente disuasorias para abordar los delitos de contrabando?",
              "id": "pilar_13_c1_q1",
              "indicator": "KPI [KA13-P1]: Tiempo promedio de levante de mercancías (Time Release Study - TRS) en canal verde y rojo.",
              "lastModifiedAt": "2026-10-26T18:51:41.567Z",
              "lastModifiedBy": "Selvin Lemus",
              "lastModifiedById": "usr_1",
              "lastModifiedColor": "#1e40af",
              "notes_history": [
                {
                  "id": "note_1793040701567_tp6z",
                  "text": "tienen un viceministerio de Lucha contra el Contrabando, ojo con esto",
                  "timestamp": "2026-10-26T18:51:41.567Z",
                  "userColor": "#1e40af",
                  "userId": "usr_1",
                  "userName": "Selvin Lemus",
                  "userRole": "Jefe de misión"
                }
              ],
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Establecer y aplicar de manera coherente un marco jurídico claro para el cumplimiento en las aduanas que defina los delitos, las facultades de hacer cumplir, las salvaguardias, los remitentes y los mecanismos jurisdiccionales, así como consecuencias administrativas y penales oportunas, proporcionadas, coherentes y disuasorias."
            },
            {
              "code": "KA13-P2",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Ha adoptado formalmente la Aduana una estrategia de prevención del contrabando acorde con los objetivos institucionales y las prioridades de gestión de riesgos?\n2. ¿Define la estrategia objetivos, responsabilidades, recursos, prioridades, indicadores y mecanismos de supervisión?\n3. ¿Se revisa y actualiza periódicamente la estrategia en función de la información de inteligencia y sobre riesgos?",
              "id": "pilar_13_c1_q2",
              "indicator": "KPI [KA13-P2]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-25T00:19:23.866Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Adoptar e implementar una estrategia de aplicación de las leyes aduaneras basada en inteligencia, acorde con las prioridades institucionales y nacionales, que defina objetivos, prioridades de amenazas, responsabilidades, recursos, mecanismos operativos, resultados esperados y mecanismos de seguimiento y evaluación."
            },
            {
              "code": "KA13-P3",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Se han asignado claramente las responsabilidades en materia de supervisión, inteligencia, investigaciones y operaciones especiales?\n2. ¿Se definen mecanismos de rendición de cuentas, coordinación y declaración de datos para las funciones de lucha contra el contrabando?\n3. ¿Se han establecido salvaguardias de integridad y mecanismos de supervisión del desempeño para las unidades de prevención del contrabando?",
              "id": "pilar_13_c1_q3",
              "indicator": "KPI [KA13-P3]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-25T00:19:32.430Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Definir y establecer la gobernanza y los mecanismos organizativos para su aplicación."
            },
            {
              "code": "KA13-P4",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es que la administración mantenga mecanismos de aplicación del personal especializados y basados en competencias en las operaciones, unidades o localidades pertinentes?\n3. ¿Abbarcan los acuerdos la selección y el despliegue de funciones específicas, la capacitación operativa inicial y continua, los ejercicios prácticos, las tutorías, las certificaciones según corresponda, la seguridad ocupacional, los mecanismos de detección de integridad y las salvaguardias para tareas sensibles y vulnerables?\n4. ¿Son adecuados las responsabilidades, la dotación de personal, las competencias, la capacitación y los recursos para el alcance y la carga de trabajo de la práctica?",
              "id": "pilar_13_c1_q4",
              "indicator": "KPI [KA13-P4]: % de personal aduanero evaluado por competencias y con plan anual de formación ejecutado.",
              "lastModifiedAt": "2026-10-25T00:19:41.482Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Mantener mecanismos de personal de aplicación especializados y basados en competencias."
            }
          ],
          "title": "Fundamentos jurídicos, estratégicos y organizativos"
        },
        {
          "code": "C2",
          "id": "c2",
          "questions": [
            {
              "code": "KA13-P5",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia la administración puede realizar y actualizar regularmente evaluaciones de amenazas estratégicas, tácticas y operativas en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan los acuerdos los principales riesgos de contrabando y fraude aduanero, y usan los resultados para establecer prioridades de inteligencia e investigación, planes operativos y requisitos de recursos?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_13_c2_q1",
              "indicator": "KPI [KA13-P5]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T00:19:48.703Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Realizar y actualizar regularmente evaluaciones estratégicas, tácticas y operativas de amenazas que abarquen los principales riesgos de contrabando y fraude aduanero, y usar los resultados para fijar prioridades de inteligencia e investigación, planes operativos y recursos necesarios."
            },
            {
              "code": "KA13-P6",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Existe un ciclo de inteligencia formal para recopilar, analizar, difundir y evaluar información?\n2. ¿Se generan los productos de inteligencia a partir de información proveniente de controles, incautaciones, investigaciones y fuentes externas?\n3. ¿Se recopila, gestiona y difunde información y productos de inteligencia en un sistema unificado?\n4. ¿Se usan los resultados de inteligencia para actualizar los criterios de selectividad, las actividades de supervisión y las investigaciones?",
              "id": "pilar_13_c2_q2",
              "indicator": "KPI [KA13-P6]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-25T00:19:52.949Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Institucionalizar un ciclo de inteligencia documentado que incluya dirección, recolección, evaluación, análisis, divulgación, uso operativo, retroalimentación, retención y eliminación, con controles apropiados de manejo, acceso, confidencialidad, registro de auditoría y protección de datos."
            },
            {
              "code": "KA13-P7",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de establecer mecanismos lícitos y seguros para la recopilación de información en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abordan los acuerdos fuentes internas, externas y confidenciales pertinentes, con requisitos documentados de planificación, autorización, evaluación de fuentes, manejo, protección, supervisión y compensación cuando sea posible?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_13_c2_q3",
              "indicator": "KPI [KA13-P7]: Tasa de cumplimiento de metas e hitos del Plan Estratégico y Planes Operativos Anuales (Meta: >= 85%).",
              "lastModifiedAt": "2026-10-25T00:19:57.635Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Establecer disposiciones legales y seguras para la recopilación de información que cubran las fuentes internas, externas y confidenciales pertinentes, con requisitos documentados de planificación, autorización, evaluación de fuentes, manejo, protección, supervisión y compensación cuando sea posible."
            },
            {
              "code": "KA13-P8",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es que la administración mantenga sistemas de inteligencia electrónica y de gestión de casos seguros, verificables y auditables que vinculen entidades, actividades, delitos, operaciones y resultados relevantes entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan los acuerdos los controles de calidad de los datos, acceso, análisis, interoperabilidad, continuidad e intercambio de información?\n4. ¿Están disponibles y se usan en la práctica los registros del sistema, los intercambios de datos, las validaciones, los registros de auditoría o los resultados de servicios pertinentes?",
              "id": "pilar_13_c2_q4",
              "indicator": "KPI [KA13-P8]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-25T00:20:03.040Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Mantener sistemas de inteligencia electrónica y de gestión de casos seguros, verificables y que vinculen entidades, actividades, delitos, operaciones y resultados relevantes."
            },
            {
              "code": "KA13-P9",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Ha adoptado formalmente la Aduana una estrategia de prevención del contrabando acorde con los objetivos institucionales y las prioridades de gestión de riesgos?\n2. ¿Define la estrategia objetivos, responsabilidades, recursos, prioridades, indicadores y mecanismos de supervisión?\n3. ¿Se revisa y actualiza periódicamente la estrategia en función de la información de inteligencia y sobre riesgos?",
              "id": "pilar_13_c2_q5",
              "indicator": "KPI [KA13-P9]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T00:20:06.679Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Implementar vigilancia basada en riesgos en todas las localidades y operaciones controladas por la aduana."
            },
            {
              "code": "KA13-P10",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué frecuencia es capaz la administración de producir y difundir de manera segura productos de inteligencia oportunos, pertinentes y con garantía de calidad para usuarios autorizados en todas las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Se abordan los acuerdos condiciones claras de manejo, medidas recomendadas, fechas de examen y requisitos de retroalimentación?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_13_c2_q6",
              "indicator": "KPI [KA13-P10]: Índice de integridad y completitud de datos en declaraciones aduaneras (Meta: >= 95%).",
              "lastModifiedAt": "2026-10-25T00:20:09.790Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Producir y difundir de manera segura productos de inteligencia oportunos, pertinentes y con garantía de calidad para usuarios autorizados, con condiciones de manipulación claras, acciones recomendadas, fechas de revisión y requisitos de retroalimentación."
            }
          ],
          "title": "Evaluación de amenazas e inteligencia aduanera"
        },
        {
          "code": "C3",
          "id": "c3",
          "questions": [
            {
              "code": "KA13-P11",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Existen procedimientos documentados para gestionar las investigaciones y expedientes de casos sobre contrabando?\n2. ¿Se priorizan las investigaciones en función del riesgo, el impacto y los recursos disponibles?\n3. ¿Se llevan a cabo un seguimiento y seguimiento sistemáticos de los resultados de las investigaciones?",
              "id": "pilar_13_c3_q1",
              "indicator": "KPI [KA13-P11]: Tasa de resolución oportuna de investigaciones y denuncias de integridad (< 60 días).",
              "lastModifiedAt": "2026-10-25T00:20:13.428Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Aplicar procedimientos estandarizados de investigación y gestión de casos que abarquen la iniciación, priorización, conducta, supervisión, derivación y cierre de investigaciones."
            },
            {
              "code": "KA13-P12",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es que la administración desarrolle y aplica legalmente capacidades de investigación adecuadas a delitos aduaneros en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abbarcan los acuerdos entrevistas, análisis documental y financiero, manipulación de pruebas digitales, investigación de fuente abierta, análisis de redes, vigilancia, búsquedas y técnicas encubiertas autorizadas?\n4. ¿Están disponibles y se usan en la práctica los registros del sistema, los intercambios de datos, las validaciones, los registros de auditoría o los resultados de servicios pertinentes?",
              "id": "pilar_13_c3_q2",
              "indicator": "KPI [KA13-P12]: Eficacia de operativos basados en inteligencia (% de intervenciones con hallazgo positivo).",
              "lastModifiedAt": "2026-10-25T00:20:16.130Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Desarrollar y aplicar legalmente capacidades de investigación adecuadas a los delitos aduaneros."
            },
            {
              "code": "KA13-P13",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Existen procedimientos documentados para la recopilación de pruebas y la gestión de la cadena de custodia?\n2. ¿La administración, el almacenamiento y la disposición de las mercancías incautadas siguen los procedimientos establecidos?\n3. ¿Los archivos de casos se mantienen de tal manera que las autoridades competentes faciliten su enjuiciamiento y su seguimiento?",
              "id": "pilar_13_c3_q3",
              "indicator": "KPI [KA13-P13]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-25T00:20:27.015Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Preservar la evidencia y gestionar los bienes incautados mediante procedimientos documentados y auditables que garanticen un manejo seguro, una cadena de custodia ininterrumpida, un almacenamiento adecuado, conciliación, resolución e investigación de discrepancias."
            }
          ],
          "title": "Investigaciones, evidencia y sostenibilidad del caso"
        },
        {
          "code": "C4",
          "id": "c4",
          "questions": [
            {
              "code": "KA13-P14",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Dispone la Aduana de herramientas operativas y tecnológicas adecuadas para promover las actividades de lucha contra el contrabando?\n2. ¿Se despliegan y mantienen eficazmente las tecnologías de vigilancia e investigación?\n3. ¿Se documenta y puede auditarse el uso de los recursos operativos?",
              "id": "pilar_13_c4_q1",
              "indicator": "KPI [KA13-P14]: Eficacia de operativos basados en inteligencia (% de intervenciones con hallazgo positivo).",
              "lastModifiedAt": "2026-10-25T00:20:31.987Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Proporcionar y mantener capacidades operativas y tecnológicas aptas para inteligencia, vigilancia, interdicción, registro, investigación, seguridad de los funcionarios y manejo de evidencias."
            },
            {
              "code": "KA13-P15",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Es capaz la administración de mantener capacidades móviles y especializadas de prevención del contrabando, adecuadas al entorno de amenaza, y desplegarlas con flexibilidad ante riesgos prioritarios en los puntos aduaneros y en otros lugares del territorio aduanero donde estén legalmente autorizadas para las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_13_c4_q2",
              "indicator": "KPI [KA13-P15]: % de perfiles y selectividad automatizada calibrada con retroalimentación de hallazgos (Meta: >= 90%).",
              "lastModifiedAt": "2026-10-25T00:20:36.745Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Mantener capacidades móviles y especializadas de lucha contra el contrabando, adecuadas al entorno de amenaza, y desplegarlas con flexibilidad ante riesgos prioritarios en los puntos aduaneros y en otros lugares del territorio aduanero donde esté legalmente autorizado."
            },
            {
              "code": "KA13-P16",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es capaz la administración de aplicar procedimientos operativos estándar a operaciones de ejecución significativas en las operaciones, unidades o localidades pertinentes?\n3. ¿Abbarcan los acuerdos autorización, sesión informativa, mando y control, coordinación interinstitucional, seguridad, manejo de evidencia, notificación de incidentes, informes y seguimiento?\n4. ¿Qué pruebas verificables demuestran el alcance, la cobertura, la coherencia y los resultados operacionales de la implementación?",
              "id": "pilar_13_c4_q3",
              "indicator": "KPI [KA13-P16]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-25T00:22:24.820Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Aplicar procedimientos operativos estándar para operaciones de cumplimiento significativas que abarquen autorización, sesión informativa, mando y control, coordinación interinstitucional, seguridad, manejo de evidencia, notificación de incidentes, informes y seguimiento."
            },
            {
              "code": "KA13-P17",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Los almacenes, las zonas francas, las instalaciones de almacenamiento y otros lugares vulnerables están sujetos a supervisión específica?\n2. ¿Se focalizan las actividades de control mediante el uso de inteligencia y análisis de riesgos?\n3. ¿Se supervisan de manera eficaz los controles de inventarios, la trazabilidad del movimiento y las obligaciones de información?",
              "id": "pilar_13_c4_q4",
              "indicator": "KPI [KA13-P17]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-25T00:20:49.277Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Llevar a cabo operaciones de cumplimiento basadas en inteligencia contra amenazas prioritarias, dirigidas a mercancías, rutas, personas, entidades, medios de transporte, redes, métodos y lugares vulnerables cuando esté legalmente autorizado."
            }
          ],
          "title": "Capacidad operativa contra el contrabando"
        },
        {
          "code": "C5",
          "id": "c5",
          "questions": [
            {
              "code": "KA13-P18",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia la administración puede monitorear indicadores de aplicación equilibrados y usar los resultados para mejorar la estrategia, el despliegue de recursos, los procedimientos, la capacitación, la eficacia operativa, la seguridad, la integridad y las lecciones aprendidas en las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_13_c5_q1",
              "indicator": "KPI [KA13-P18]: Disponibilidad y actualización mensual del Tablero de Mando Integral y KPIs operativos (Meta: 100%).",
              "lastModifiedAt": "2026-10-25T00:21:03.965Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Monitorear los indicadores de aplicación equilibrados y usar los resultados para mejorar la estrategia, el despliegue de recursos, los procedimientos, la capacitación, la eficacia operativa, la seguridad, la integridad y las lecciones aprendidas."
            },
            {
              "code": "KA13-P19",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Participa la Aduana en redes internacionales de información o inteligencia aduanera?\n2. ¿Las solicitudes de asistencia internacional se intercambian y se actúan efectivamente?\n3. ¿Apoya la cooperación internacional medidas contra envíos, rutas, operadores o redes de alto riesgo?\n4. ¿Se gestionan activamente los acuerdos de asistencia administrativa recíproca y los accesos a la red internacional de inteligencia (p. ej., CEN de la OMA) y se usan de forma rutinaria por una unidad especializada de inteligencia o gestión de riesgos?\n5. ¿Se recibe de forma sistemática y automática la inteligencia procesable (alertas, tipologías y objetivos) de socios internacionales en perfiles de riesgo y criterios de selectividad dentro del sistema aduanero básico de TIC?",
              "id": "pilar_13_c5_q2",
              "indicator": "KPI [KA13-P19]: Eficacia de operativos basados en inteligencia (% de intervenciones con hallazgo positivo).",
              "lastModifiedAt": "2026-10-25T00:21:11.010Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Establecer acuerdos seguros de cooperación nacional e internacional para el intercambio de información, la asistencia administrativa mutua, las alertas, las derivaciones, el apoyo a la investigación y la coordinación de operaciones ante amenazas prioritarias."
            },
            {
              "code": "KA13-P20",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Esta práctica se ha establecido formalmente a través de disposiciones legales, de políticas, procedimentales, de administración aduanera o de sistema aprobadas, según corresponda?\n2. ¿Con qué consistencia es la administración capaz de establecer mecanismos formales de coordinación entre las operaciones, unidades o ubicaciones pertinentes?\n3. ¿Abarcan los acuerdos a autoridades legales, de enjuiciamiento, de aplicación de la ley, de inteligencia financiera y judiciales en busca de asesoramiento jurídico, examen probatorio, derivaciones, apoyo a la acusación, medidas relacionadas con los activos, testimonios y comentarios sobre los resultados de los casos?\n4. ¿Los resultados se miden a intervalos definidos y se utilizan para ajustar la implementación, las prioridades o las medidas correctivas?",
              "id": "pilar_13_c5_q3",
              "indicator": "KPI [KA13-P20]: Nivel de formalización, ejecución y supervisión medible de la práctica aduanera conforme al marco FMI CASA.",
              "lastModifiedAt": "2026-10-25T00:21:17.775Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 1,
              "status": "evaluated",
              "text": "Establecer mecanismos formales de coordinación con autoridades legales, de enjuiciamiento, de aplicación de la ley, de inteligencia financiera y judiciales para obtener asesoramiento jurídico, revisión de pruebas, derivaciones, apoyo a la acusación, acciones relacionadas con los activos, testimonios y retroalimentación sobre los resultados de los casos."
            },
            {
              "code": "KA13-P21",
              "evidence": "",
              "findings": "",
              "guidance": "1. ¿Existen mecanismos eficaces para colaborar con los operadores logísticos y otras partes interesadas del sector privado con el fin de luchar contra el fraude?\n2. ¿Se alienta a las partes interesadas a informar de actividades sospechosas y compartir la información pertinente?\n3. ¿Se supervisan y utilizan los indicadores de desempeño de la lucha contra el contrabando para mejorar las operaciones y la estrategia?",
              "id": "pilar_13_c5_q4",
              "indicator": "KPI [KA13-P21]: Disponibilidad del sistema aduanero central (Uptime >= 99.5%) y tiempo medio de respuesta.",
              "lastModifiedAt": "2026-10-25T00:21:21.182Z",
              "lastModifiedBy": "Ignacio Gonzalez",
              "lastModifiedById": "usr_4",
              "lastModifiedColor": "#ea580c",
              "recommendations": "",
              "score": 2,
              "status": "evaluated",
              "text": "Colaborar con los operadores logísticos y otras partes interesadas del sector privado."
            }
          ],
          "title": "Desempeño, cooperación e implicación de las partes interesadas"
        }
      ],
      "id": "pilar_13",
      "number": "13",
      "raw_title": "Capacidades para hacer cumplir las aduanas",
      "title": "13. Capacidades para hacer cumplir las aduanas"
    }
  ],
  "narrativas_pilares": {
    "KA3": {
      "p1": "La Aduana Nacional de Bolivia cuenta con una función especializada de Recursos Humanos y un sistema anual de evaluación del desempeño. El Departamento de Recursos Humanos tiene responsabilidades formalmente documentadas y participa de manera activa en la programación financiera y presupuestaria del personal (KA3-P1). De igual forma, la entidad aplica entrevistas anuales para el establecimiento de metas individuales y evalúa el clima laboral mediante mediciones documentadas en su Memoria Institucional que han alcanzado a 1.264 funcionarios (KA3-P9), lo que proporciona una base formal para la gestión del personal.",
      "p2": "La administración aduanera enfrenta su primera área de oportunidad en marco normativo y planificación estratégica de rrhh, así como en detección de necesidades formativas y oferta académica. Dispone de marco formal de políticas de gestión sustentado en la legislación nacional y planes operativos que contemplan el talento humano como prioridad institucional. (KA3-P2/P3) Ejecuta procesos periódicos de capacitación y oferta académica técnica para el personal de las distintas dependencias aduaneras. (KA3-P7/P8)",
      "p3": "La institución presenta una segunda área de oportunidad en desarticulación técnica en selección y contratación, así como en carencia de planes de sucesión y transferencia del conocimiento, así como en régimen de carrera aduanera meritocrática. Los procesos de reclutamiento, contratación y ascensos operan sin baremos objetivos ni perfiles estandarizados por competencias técnicas. (KA3-P6) Inexistencia de mecanismos formales e institucionalizados para preparar reemplazos o transferir conocimientos críticos en puestos de alta responsabilidad. (KA3-P8/P13) Falta de un sistema de servicio civil o escalafón basado en mérito objetivo, estabilidad laboral, movilidad reglada y ascensos transparentes. (KA3-P11)",
      "p4": "La entidad mantiene sus rezagos más críticos y deficiencias severas en marco estructurado de competencias técnicas, así como en elevada rotación del personal e inestabilidad funcional. La clasificación y descripción de puestos se encuentra orientada exclusivamente a funciones tradicionales, sin definir competencias técnicas ni conductuales específicas. (KA3-P5) Alta rotación de funcionarios que afecta la continuidad operativa y debilita la retención de capacidades técnicas especializadas en puestos aduaneros clave. (KA3-P10) Esta situación constituye el rezago más crítico y de mayor vulnerabilidad técnica en el pilar diagnosticado.",
      "ideas": [
        {
          "assignedTo": "p1",
          "code": "KA3-P1",
          "desc": "El Departamento de Recursos Humanos cuenta con mandato reglamentado, responsabilidades documentadas y participación activa en la programación financiera y presupuestaria del personal.",
          "id": "ka3_bien_1",
          "score": 3,
          "title": "Función de RRHH formalizada y estructurada",
          "type": "bien"
        },
        {
          "assignedTo": "p1",
          "code": "KA3-P9",
          "desc": "Aplica entrevistas anuales para el establecimiento de metas individuales y mediciones cuantitativas del clima laboral que alcanzaron a 1.264 funcionarios en su Memoria Institucional.",
          "id": "ka3_bien_2",
          "score": 3,
          "title": "Evaluación del desempeño anual y metas individuales",
          "type": "bien"
        },
        {
          "assignedTo": "p2",
          "code": "KA3-P2/P3",
          "desc": "Dispone de marco formal de políticas de gestión sustentado en la legislación nacional y planes operativos que contemplan el talento humano como prioridad institucional.",
          "id": "ka3_bien_3",
          "score": 2,
          "title": "Marco normativo y planificación estratégica de RRHH",
          "type": "bien"
        },
        {
          "assignedTo": "p2",
          "code": "KA3-P7/P8",
          "desc": "Ejecuta procesos periódicos de capacitación y oferta académica técnica para el personal de las distintas dependencias aduaneras.",
          "id": "ka3_bien_4",
          "score": 2,
          "title": "Detección de necesidades formativas y oferta académica",
          "type": "bien"
        },
        {
          "assignedTo": "p4",
          "code": "KA3-P5",
          "desc": "La clasificación y descripción de puestos se encuentra orientada exclusivamente a funciones tradicionales, sin definir competencias técnicas ni conductuales específicas.",
          "id": "ka3_mal_1",
          "score": 1,
          "title": "Inexistencia de marco estructurado de competencias técnicas",
          "type": "mal"
        },
        {
          "assignedTo": "p3",
          "code": "KA3-P6",
          "desc": "Los procesos de reclutamiento, contratación y ascensos operan sin baremos objetivos ni perfiles estandarizados por competencias técnicas.",
          "id": "ka3_mal_2",
          "score": 2,
          "title": "Desarticulación técnica en selección y contratación",
          "type": "mal"
        },
        {
          "assignedTo": "p4",
          "code": "KA3-P10",
          "desc": "Alta rotación de funcionarios que afecta la continuidad operativa y debilita la retención de capacidades técnicas especializadas en puestos aduaneros clave.",
          "id": "ka3_mal_3",
          "score": 2,
          "title": "Elevada rotación del personal e inestabilidad funcional",
          "type": "mal"
        },
        {
          "assignedTo": "p3",
          "code": "KA3-P8/P13",
          "desc": "Inexistencia de mecanismos formales e institucionalizados para preparar reemplazos o transferir conocimientos críticos en puestos de alta responsabilidad.",
          "id": "ka3_mal_4",
          "score": 2,
          "title": "Carencia de planes de sucesión y transferencia del conocimiento",
          "type": "mal"
        },
        {
          "assignedTo": "p3",
          "code": "KA3-P11",
          "desc": "Falta de un sistema de servicio civil o escalafón basado en mérito objetivo, estabilidad laboral, movilidad reglada y ascensos transparentes.",
          "id": "ka3_mal_5",
          "score": 2,
          "title": "Ausencia de régimen de carrera aduanera meritocrática",
          "type": "mal"
        },
        {
          "code": "KA3-P12",
          "desc": "Brecha crítica en la aplicación de medidas de apoyo, bienestar, condiciones de seguridad y respaldo logístico para los servidores destinados a puestos fronterizos y de difícil acceso.",
          "id": "ka3_mal_6",
          "score": 2,
          "title": "Desprotección y falta de apoyo en zonas remotas y de frontera",
          "type": "mal"
        }
      ],
      "updatedAt": "2026-10-28T10:48:34.064Z",
      "updatedBy": "Miguel Tapia"
    },
    "KA5": {
      "ideas": [
        {
          "assignedTo": "p1",
          "code": "KA5-P5",
          "desc": "Articula operativamente alrededor de 128 sistemas de información en torno al núcleo SUMA, reduciendo de manera sustancial la fragmentación informática institucional.",
          "id": "ka5_bien_1",
          "score": 4,
          "title": "Integración tecnológica centralizada en el sistema SUMA",
          "type": "bien"
        },
        {
          "assignedTo": "p1",
          "code": "KA5-P10",
          "desc": "Dispone de un sistema espejo para respaldos operativos y mantiene un repositorio específico de datos destinado exclusivamente a labores de análisis estadístico.",
          "id": "ka5_bien_2",
          "score": 3,
          "title": "Disponibilidad tecnológica y sistema espejo para contingencias",
          "type": "bien"
        },
        {
          "assignedTo": "p1",
          "code": "KA5-P2/P8",
          "desc": "Procedimientos técnicos documentados bajo norma ISO 9001:2015 y herramientas de inteligencia de negocios orientadas al seguimiento continuo de la recaudación aduanera.",
          "id": "ka5_bien_3",
          "score": 3,
          "title": "Estandarización ISO 9001:2015 y tableros BI de recaudación",
          "type": "bien"
        },
        {
          "assignedTo": "p1",
          "code": "KA5-P9",
          "desc": "Equipamiento y servidores suficientes para procesar transacciones en línea y soportar la operativa central del comercio exterior boliviano.",
          "id": "ka5_bien_4",
          "score": 3,
          "title": "Capacidad de infraestructura de TI y procesamiento",
          "type": "bien"
        },
        {
          "assignedTo": "p2",
          "code": "KA5-P1",
          "desc": "La administración de datos se gestiona con un enfoque predominantemente tecnológico y operativo, sin concebir formalmente la información como un activo estratégico institucional.",
          "id": "ka5_mal_1",
          "score": 2,
          "title": "Falta de marco formal de gobernanza integral de datos",
          "type": "mal"
        },
        {
          "assignedTo": "p2",
          "code": "KA5-P3",
          "desc": "La documentación técnica registra campos de tablas y bases de datos pero carece de un catálogo unificado de conceptos de negocio y custodios funcionales asignados.",
          "id": "ka5_mal_2",
          "score": 2,
          "title": "Catálogos sin glosarios de negocio ni propietarios funcionales",
          "type": "mal"
        },
        {
          "assignedTo": "p2",
          "code": "KA5-P4",
          "desc": "No existen indicadores periódicos ni protocolos transversales para medir integridad, exactitud, consistencia, completitud y oportunidad de la información aduanera.",
          "id": "ka5_mal_3",
          "score": 2,
          "title": "Inexistencia de modelo institucional de calidad y consistencia del dato",
          "type": "mal"
        },
        {
          "assignedTo": "p3",
          "code": "KA5-P6",
          "desc": "Las áreas de gestión de riesgos y fiscalización carecen de autonomía técnica y herramientas directas, dependiendo de solicitudes manuales lentas al área de sistemas.",
          "id": "ka5_mal_4",
          "score": 2,
          "title": "Marcada dependencia de TI y nula autonomía analítica en áreas sustantivas",
          "type": "mal"
        },
        {
          "assignedTo": "p3",
          "code": "KA5-P7",
          "desc": "Ausencia de protocolos para probar, monitorear, supervisar y recalibrar modelos de riesgo estadísticos o predictivos aplicados a la selección de controles aduaneros.",
          "id": "ka5_mal_5",
          "score": 2,
          "title": "Inexistencia de marco de validación y supervisión de modelos analíticos",
          "type": "mal"
        },
        {
          "assignedTo": "p4",
          "code": "KA5-P11",
          "desc": "Los controles de auditoría interna se circunscriben a infraestructura técnica y seguridad perimetral, sin auditar gobierno del dato, trazabilidad ni calidad analítica.",
          "id": "ka5_mal_6",
          "score": 2,
          "title": "Auditoría de datos limitada exclusivamente a aspectos informáticos",
          "type": "mal"
        },
        {
          "assignedTo": "p4",
          "code": "KA5-P10-v",
          "desc": "Los servidores principales y el sistema espejo se encuentran ubicados en la misma edificación física, careciendo de un plan DRP integral y redundancia geográfica verificada.",
          "id": "ka5_mal_7",
          "score": 2,
          "title": "Vulnerabilidad física por concentración de centros de datos en el mismo predio",
          "type": "mal"
        }
      ],
      "p1": "La Aduana Nacional de Bolivia dispone de una integración tecnológica consolidada en el SUMA y procesos certificados bajo ISO 9001:2015. La entidad articula operativamente alrededor de 128 sistemas de información en torno al SUMA, logrando reducir la fragmentación de sus operaciones centrales (KA5-P5). Asimismo, la institución mantiene procedimientos documentados para la administración de sistemas, dispone de un sistema espejo y una base de datos específica para análisis (KA5-P10), además de utilizar herramientas de inteligencia de negocios para el seguimiento de la recaudación (KA5-P2, KA5-P8).",
      "p2": "La gestión de la información carece de un marco institucional de gobernanza de datos y controles integrales de calidad. La administración de los datos se mantiene bajo un enfoque estrictamente tecnológico y operativo, sin una estrategia formal que reconozca la información como un activo institucional (KA5-P1). Por ello, los catálogos existentes documentan campos técnicos de bases de datos sin incorporar glosarios de negocio ni propietarios funcionales (KA5-P3), a la vez que no existe un modelo de calidad con indicadores periódicos de exactitud, integridad y consistencia que garantice la fiabilidad de la información en toda la institución (KA5-P4).",
      "p3": "Las unidades funcionales enfrentan una marcada dependencia del área de sistemas y una limitada autonomía analítica. Las capacidades de explotación de información se encuentran concentradas en el personal tecnológico, obligando a las unidades de gestión de riesgos y fiscalización a depender de requerimientos manuales de información y limitando la continuidad de sus análisis (KA5-P6). Adicionalmente, la institución no cuenta con un marco formal para supervisar, validar y recalibrar modelos analíticos o predictivos (KA5-P7), lo que restringe el aprovechamiento técnico de la información en los procesos sustantivos de control.",
      "p4": "La administración aduanera carece de autonomía analítica en sus áreas sustantivas y opera sin un marco formal de control para modelos predictivos y calidad de datos. Las unidades de fiscalización y gestión de riesgos enfrentan una marcada dependencia operativa del personal de sistemas, viéndose obligadas a tramitar requerimientos manuales que retrasan y limitan sus análisis estratégicos (KA5-P6). Asimismo, la institución no cuenta con protocolos para validar, recalibrar y supervisar modelos analíticos (KA5-P7), carece de indicadores periódicos de calidad y consistencia de la información (KA5-P4) y mantiene la auditoría de datos circunscrita a aspectos puramente informáticos (KA5-P11), lo que representa el rezago más crítico para la toma de decisiones aduaneras basadas en evidencia.",
      "updatedAt": "2026-10-27T10:00:00Z",
      "updatedBy": "Miguel Tapia"
    }
  },
  "lastUpdated": "2026-10-28T11:47:07.492271Z",
  "lastUpdatedBy": "Sincronización Antigravity (FMI CASA)"
};
