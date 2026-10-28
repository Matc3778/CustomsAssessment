# -*- coding: utf-8 -*-
"""
Generador del Reporte Simplificado por Evaluador Responsable:
1. Tabla Resumen Ejecutivo por Evaluador
2. Tablas Detalladas por Evaluador con 4 campos:
   Pilar | Buena Práctica | Hallazgos | Recomendaciones
Misión FMI CASA — Bolivia 2026
"""

import json
import os
import datetime

# Cargar base de datos sincronizada
with open('evaluacion_db.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

mission = db.get('mission', {
    'country': 'Estado Plurinacional de Bolivia',
    'institution': 'Aduana Nacional de Bolivia',
    'dates': 'Octubre 2026',
    'title': 'Diagnóstico Institucional Integral FMI CASA'
})

team = db.get('team', [])
team_dict = {m['id']: m for m in team}

name_to_id = {
    'Selvin Lemus': 'usr_1',
    'Miguel Tapia': 'usr_2',
    'Sylvia Saucedo': 'usr_3',
    'Ignacio Gonzalez': 'usr_4',
    'Azael Perez': 'usr_1792525030420'
}

evaluators_order = ['usr_2', 'usr_4', 'usr_1', 'usr_3']
evaluator_data = {uid: [] for uid in evaluators_order}
unassigned_list = []

for p in db['pillars']:
    pid = p.get('id')
    pcode = p.get('code', pid)
    ptitle = p.get('title', '')
    
    for c in p.get('criteria', []):
        cid = c.get('id')
        ccode = c.get('code', cid)
        ctitle = c.get('title', '')
        
        for q in c.get('questions', []):
            assignee = q.get('assigned_to')
            mod_by = q.get('lastModifiedBy')
            
            real_uid = assignee
            if not real_uid and mod_by in name_to_id:
                real_uid = name_to_id[mod_by]
            
            item = {
                'pillar_code': pcode,
                'pillar_title': ptitle,
                'crit_code': ccode,
                'crit_title': ctitle,
                'q': q
            }
            
            if real_uid in evaluator_data:
                evaluator_data[real_uid].append(item)
            else:
                unassigned_list.append(item)

# 1. MARKDOWN (.md)
md = []
md.append("# Informe Técnico Simplificado por Evaluador Responsable")
md.append("## Misión de Asistencia Técnica FMI CASA — Estado Plurinacional de Bolivia")
md.append(f"**Institución:** {mission.get('institution')} | **Fecha:** {mission.get('dates')} | **Metodología:** FMI CASA Framework")
md.append(f"**Actualización:** {datetime.datetime.now().strftime('%d de Octubre de 2026')}\n")
md.append("---\n")

md.append("## 1. Resumen Ejecutivo por Evaluador Responsable\n")
md.append("| Evaluador Responsable | Especialidad / Rol | Prácticas Respondidas | Con Calificación | Con Hallazgos Clave | Con Recomendaciones |")
md.append("| :--- | :--- | :---: | :---: | :---: | :---: |")

total_resp = 0
total_sc = 0
total_fi = 0
total_re = 0

for uid in evaluators_order:
    m = team_dict.get(uid, {'name': uid, 'role': 'Evaluador'})
    pts = evaluator_data[uid]
    n_tot = len(pts)
    n_sc = sum(1 for it in pts if it['q'].get('score') is not None and str(it['q'].get('score')).strip() != '')
    n_fi = sum(1 for it in pts if it['q'].get('findings') and str(it['q'].get('findings')).strip())
    n_re = sum(1 for it in pts if it['q'].get('recommendations') and str(it['q'].get('recommendations')).strip())
    
    total_resp += n_tot
    total_sc += n_sc
    total_fi += n_fi
    total_re += n_re
    
    md.append(f"| **{m['name']}** | {m.get('role', 'Evaluador')} | **{n_tot}** | **{n_sc}** | **{n_fi}** | **{n_re}** |")

n_un = len(unassigned_list)
md.append(f"| *⚠️ Pendientes de Responder* | *Sin evaluador asignado* | *{n_un}* | *0* | *0* | *0* |")
md.append(f"| **TOTAL** | | **{total_resp + n_un}** | **{total_sc}** | **{total_fi}** | **{total_re}** |\n")
md.append("---\n")

narrativas = db.get('narrativas_pilares', {})
pillar_title_map = {}
for p in db.get('pillars', []):
    pcode = p.get('code', p.get('id'))
    pillar_title_map[pcode] = p.get('title', '')

def format_topic_sentence_md(text):
    if not text:
        return ""
    if "**" in text:
        return text
    import re
    m = re.match(r"^([\s\S]+?\.)(?:\s+[A-ZÁÉÍÓÚÑ]|\s*$)", text)
    if m and len(m.group(1)) < 450:
        topic = m.group(1)
        rest = text[len(topic):]
        return f"**{topic}**{rest}"
    dot_idx = text.find('.')
    if dot_idx != -1 and dot_idx < 400:
        topic = text[:dot_idx + 1]
        rest = text[dot_idx + 1:]
        return f"**{topic}**{rest}"
    return text

if narrativas:
    md.append("## 2. Análisis Narrativo Ejecutivo por Pilar (Pilares con Cobertura > 80% de Recomendaciones)\n")
    md.append("> **Criterio Metodológico de Construcción (Gradiente de Desempeño 1 al 4):** Este análisis estructurado diagnostica la madurez del pilar en cuatro niveles progresivos, desde lo que mejor hace la entidad (1) hasta lo que peor hace (4):\n"
              "> 1. **Fortalezas y Logros Consolidados (Lo que mejor hacen):** Sintetiza las mejores prácticas y aspectos destacados respaldados en las calificaciones más altas y avances demostrados.\n"
              "> 2. **Primera Área de Oportunidad:** Desarrolla a profundidad la primera brecha o debilidad institucional observada, analizando su causa raíz e impacto operativo inicial.\n"
              "> 3. **Segunda Área de Oportunidad:** Desarrolla la segunda vulnerabilidad operativa que afecta la eficiencia o continuidad técnica del pilar.\n"
              "> 4. **Principales Áreas de Oportunidad (Lo que peor hacen):** Desarrolla las deficiencias más severas, rezagos estructurales críticos y prácticas con las calificaciones más bajas de la institución en el pilar.\n"
              "> Cada párrafo inicia obligatoriamente con una oración temática en formato **[Sujeto + Verbo + Complemento]**, seguida del desarrollo argumentativo de la idea.\n")

    for p_idx, (pcode, n_data) in enumerate(narrativas.items(), 1):
        ptitle = pillar_title_map.get(pcode, '')
        author = n_data.get('updatedBy', 'Evaluador')
        md.append(f"### 2.{p_idx}. Pilar {pcode}: {ptitle} (100% de recomendaciones formuladas)\n")
        md.append(f"**Evaluador a cargo:** {author}\n")
        
        p_ideas = n_data.get('ideas', [])
        if p_ideas:
            md.append("#### Inventario Diagnóstico de Ideas Clave (Lo que hacen bien vs. Lo que hacen mal)\n")
            md.append("| Código CASA | Diagnóstico | Idea Clave Identificada | Párrafo Asignado en la Síntesis |")
            md.append("| :--- | :--- | :--- | :--- |")
            asgn_map = {
                'p1': '1. Fortalezas y Logros Consolidados',
                'p2': '2. Primera Área de Oportunidad',
                'p3': '3. Segunda Área de Oportunidad',
                'p4': '4. Principales Áreas de Oportunidad'
            }
            for it in p_ideas:
                tipo_icon = "🟢 Fortalezas" if it.get('type') == 'bien' else "🔴 Rezagos / Brechas"
                sc_txt = f" (Score: {it['score']})" if it.get('score') is not None else ""
                code_txt = f"**{it.get('code', 'N/A')}**{sc_txt}"
                idea_desc = f"**{it.get('title', '')}:** {it.get('desc', '')}"
                asgn_txt = asgn_map.get(it.get('assignedTo'), '— No asignado')
                md.append(f"| {code_txt} | {tipo_icon} | {idea_desc} | **{asgn_txt}** |")
            md.append("\n#### Síntesis Ejecutiva en 4 Párrafos (Construcción Graduada)\n")

        md.append(f"1. **Fortalezas y Logros Consolidados:** {format_topic_sentence_md(n_data.get('p1', ''))}")
        md.append(f"2. **Primera Área de Oportunidad:** {format_topic_sentence_md(n_data.get('p2', ''))}")
        md.append(f"3. **Segunda Área de Oportunidad:** {format_topic_sentence_md(n_data.get('p3', ''))}")
        md.append(f"4. **Principales Áreas de Oportunidad:** {format_topic_sentence_md(n_data.get('p4', ''))}\n")
        md.append("---\n")

    md.append("## 3. Detalle de Prácticas, Hallazgos y Recomendaciones por Evaluador\n")
    sec_prefix = "3"
else:
    md.append("## 2. Detalle de Prácticas, Hallazgos y Recomendaciones por Evaluador\n")
    sec_prefix = "2"

for s_idx, uid in enumerate(evaluators_order, 1):
    m = team_dict.get(uid, {'name': uid, 'role': 'Evaluador'})
    pts = evaluator_data[uid]
    n_tot = len(pts)
    n_fi = sum(1 for it in pts if it['q'].get('findings') and str(it['q'].get('findings')).strip())
    n_re = sum(1 for it in pts if it['q'].get('recommendations') and str(it['q'].get('recommendations')).strip())
    
    md.append(f"### {sec_prefix}.{s_idx}. Evaluador Responsable: {m['name']} — {m.get('role', 'Especialista FMI')}")
    md.append(f"*Total Prácticas:* **{n_tot}** | *Con Hallazgos:* **{n_fi}** | *Con Recomendaciones:* **{n_re}**\n")
    
    md.append("| Pilar | Buena Práctica | Hallazgos | Recomendaciones |")
    md.append("| :--- | :--- | :--- | :--- |")
    
    for it in pts:
        q = it['q']
        code = q.get('code', q.get('id', 'N/A'))
        text = q.get('text', 'Sin descripción').replace('|', '/')
        findings = str(q.get('findings') or '').strip().replace('|', '/').replace('\n', '<br><br>')
        recs = str(q.get('recommendations') or '').strip().replace('|', '/').replace('\n', '<br><br>')
        
        pilar_cell = f"**{it['pillar_code']}**: {it['pillar_title']}"
        bp_cell = f"**[{code}]** {text}"
        find_cell = findings if findings else "*Sin hallazgos registrados*"
        recs_cell = recs if recs else "*En formulación*"
        
        md.append(f"| {pilar_cell} | {bp_cell} | {find_cell} | {recs_cell} |")
    
    md.append("\n---\n")

if unassigned_list:
    md.append(f"### {sec_prefix}.5. Buenas Prácticas Pendientes de Responder (Sin Asignar)\n")
    md.append("| Pilar | Buena Práctica | Hallazgos | Recomendaciones |")
    md.append("| :--- | :--- | :--- | :--- |")
    for it in unassigned_list:
        q = it['q']
        code = q.get('code', q.get('id', 'N/A'))
        text = q.get('text', 'Sin descripción').replace('|', '/')
        md.append(f"| **{it['pillar_code']}**: {it['pillar_title']} | **[{code}]** {text} | *Pendiente de evaluación* | *Pendiente de evaluación* |")
    md.append("\n---\n")

md_content = "\n".join(md)
with open('REPORTE_EVALUADOR_HALLAZGOS_Y_RECOMENDACIONES.md', 'w', encoding='utf-8') as f:
    f.write(md_content)

# 2. WORD (.doc)
doc_html = []
doc_html.append("""
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'>
<title>Informe Técnico Simplificado - Misión FMI CASA Bolivia</title>
<style>
  body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; font-size: 10.5pt; color: #1e293b; line-height: 1.4; margin: 20pt; }
  table { border-collapse: collapse; width: 100%; margin-top: 8pt; margin-bottom: 18pt; table-layout: fixed; }
  th, td { border: 1pt solid #cbd5e1; padding: 6pt 8pt; font-size: 9.5pt; vertical-align: top; word-wrap: break-word; }
  th { background-color: #f1f5f9; font-weight: bold; color: #0f172a; text-align: left; }
  h1 { font-size: 15pt; color: #1e3a8a; text-align: center; margin-bottom: 3pt; font-weight: bold; }
  h2 { font-size: 12.5pt; color: #1e3a8a; border-bottom: 2pt solid #2563eb; padding-bottom: 2pt; margin-top: 16pt; margin-bottom: 8pt; font-weight: bold; }
  h3 { font-size: 11pt; color: #0f172a; margin-top: 14pt; margin-bottom: 4pt; font-weight: bold; }
  .eval-header { background-color: #f8fafc; border-left: 4pt solid #1e40af; padding: 6pt 10pt; margin-top: 12pt; margin-bottom: 6pt; }
  .eval-name { font-size: 11pt; font-weight: bold; color: #0f172a; }
  .eval-stats { font-size: 9.5pt; color: #475569; }
  .narrative-box { background-color: #f8fafc; border: 1pt solid #cbd5e1; border-left: 4pt solid #2563eb; padding: 10pt 12pt; margin-bottom: 12pt; }
  .narrative-p { margin-bottom: 8pt; font-size: 10pt; text-align: justify; }
  .narrative-p:last-child { margin-bottom: 0; }
  .code-tag { font-family: Consolas, monospace; font-weight: bold; color: #1d4ed8; background-color: #eff6ff; padding: 1pt 4pt; border: 1pt solid #bfdbfe; font-size: 9pt; }
  .empty-cell { color: #94a3b8; font-style: italic; }
</style>
</head>
<body>

<div style="text-align:center;border-bottom:2pt solid #1e3a8a;padding-bottom:8pt;margin-bottom:12pt;">
  <h1>INFORME TÉCNICO SIMPLIFICADO POR EVALUADOR RESPONSABLE</h1>
  <div style="font-size:11.5pt;font-weight:bold;color:#1e40af;">Matriz Ejecutiva: Pilares, Buenas Prácticas, Hallazgos y Recomendaciones</div>
  <div style="font-size:9.5pt;color:#475569;margin-top:3pt;">Misión de Asistencia Técnica FMI CASA — Estado Plurinacional de Bolivia | Aduana Nacional</div>
  <div style="font-size:9pt;color:#64748b;">Fecha de Emisión: Octubre 2026</div>
</div>

<h2>1. Resumen Ejecutivo por Evaluador Responsable</h2>
<p style="font-size:9.5pt;color:#334155;margin-bottom:6pt;">
  <strong>Criterio de Inclusión:</strong> Prácticas asignadas exclusivamente a quien las evaluó y documentó efectivamente en el sistema de la misión.
</p>

<table>
  <thead>
    <tr>
      <th style="width:24%;">Evaluador Responsable</th>
      <th style="width:26%;">Especialidad / Rol</th>
      <th style="width:12%;text-align:center;">Prácticas</th>
      <th style="width:12%;text-align:center;">Calificadas</th>
      <th style="width:13%;text-align:center;">Con Hallazgos</th>
      <th style="width:13%;text-align:center;">Con Recs.</th>
    </tr>
  </thead>
  <tbody>
""")

for uid in evaluators_order:
    m = team_dict.get(uid, {'name': uid, 'role': 'Evaluador'})
    pts = evaluator_data[uid]
    n_tot = len(pts)
    n_sc = sum(1 for it in pts if it['q'].get('score') is not None and str(it['q'].get('score')).strip() != '')
    n_fi = sum(1 for it in pts if it['q'].get('findings') and str(it['q'].get('findings')).strip())
    n_re = sum(1 for it in pts if it['q'].get('recommendations') and str(it['q'].get('recommendations')).strip())
    
    doc_html.append(f"""
    <tr>
      <td><strong>{m['name']}</strong></td>
      <td>{m.get('role', 'Evaluador')}</td>
      <td style="text-align:center;font-weight:bold;">{n_tot}</td>
      <td style="text-align:center;">{n_sc}</td>
      <td style="text-align:center;">{n_fi}</td>
      <td style="text-align:center;">{n_re}</td>
    </tr>
    """)

doc_html.append(f"""
    <tr style="background-color:#f8fafc;font-style:italic;">
      <td><em>⚠️ Pendientes de Responder</em></td>
      <td><em>Sin evaluador asignado</em></td>
      <td style="text-align:center;font-weight:bold;">{n_un}</td>
      <td style="text-align:center;">0</td>
      <td style="text-align:center;">0</td>
      <td style="text-align:center;">0</td>
    </tr>
    <tr style="font-weight:bold;background-color:#f1f5f9;">
      <td colspan="2">TOTAL GENERAL DE BUENAS PRÁCTICAS</td>
      <td style="text-align:center;">{total_resp + n_un}</td>
      <td style="text-align:center;">{total_sc}</td>
      <td style="text-align:center;">{total_fi}</td>
      <td style="text-align:center;">{total_re}</td>
    </tr>
  </tbody>
</table>
""")

def clean_html(text):
    return (text or '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('\n', '<br>')

def format_topic_sentence_html(text):
    if not text:
        return ""
    if "**" in text:
        import re
        return re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", clean_html(text))
    import re
    m = re.match(r"^([\s\S]+?\.)(?:\s+[A-ZÁÉÍÓÚÑ]|\s*$)", text)
    if m and len(m.group(1)) < 450:
        topic = m.group(1)
        rest = text[len(topic):]
        return f"<strong>{clean_html(topic)}</strong>{clean_html(rest)}"
    dot_idx = text.find('.')
    if dot_idx != -1 and dot_idx < 400:
        topic = text[:dot_idx + 1]
        rest = text[dot_idx + 1:]
        return f"<strong>{clean_html(topic)}</strong>{clean_html(rest)}"
    return clean_html(text)

if narrativas:
    doc_html.append("""
<h2>2. Análisis Narrativo Ejecutivo por Pilar (Pilares con Cobertura > 80% de Recomendaciones)</h2>
<div style="font-size:9.5pt;color:#334155;background:#f8fafc;border:1pt solid #cbd5e1;border-left:4pt solid #2563eb;padding:8pt 10pt;margin-bottom:12pt;">
  <strong>Criterio Metodológico de Construcción (Gradiente de Desempeño 1 al 4):</strong> El análisis de cada pilar diagnostica el estado institucional ordenado progresivamente desde lo que mejor hace la entidad (1) hasta lo que peor hace (4):
  <ol style="margin-top:4pt;margin-bottom:4pt;padding-left:18pt;line-height:1.4;">
    <li><strong>Fortalezas y Logros Consolidados (Lo que mejor hacen):</strong> Prácticas destacadas y logros demostrados en las calificaciones más altas.</li>
    <li><strong>Primera Área de Oportunidad:</strong> Primera brecha o debilidad institucional observada, causas e impacto operativo.</li>
    <li><strong>Segunda Área de Oportunidad:</strong> Segunda vulnerabilidad operativa y factores de sostenibilidad técnica.</li>
    <li><strong>Principales Áreas de Oportunidad (Lo que peor hacen):</strong> Deficiencias más críticas, fallas de modelo y prácticas en niveles incipientes o de mayor rezago.</li>
  </ol>
  <em>Cada párrafo inicia obligatoriamente con una oración temática en formato <strong>[Sujeto + Verbo + Complemento]</strong>.</em>
</div>
""")
    asgn_badge_map = {
        'p1': ('#ecfdf5', '#047857', '1. Fortalezas'),
        'p2': ('#fffbeb', '#b45309', '2. Primera Oportunidad'),
        'p3': ('#fff7ed', '#c2410c', '3. Segunda Oportunidad'),
        'p4': ('#eff6ff', '#1d4ed8', '4. Principales Áreas (Peor)')
    }
    for pcode, n_data in narrativas.items():
        ptitle = pillar_title_map.get(pcode, '')
        author = n_data.get('updatedBy', 'Evaluador')
        p_ideas = n_data.get('ideas', [])
        
        doc_html.append(f"""
    <div class="narrative-box">
      <h3 style="margin-top:0;color:#1e3a8a;">Pilar {pcode}: {clean_html(ptitle)} (100% de recomendaciones formuladas)</h3>
      <div style="font-size:9pt;color:#64748b;margin-bottom:10pt;"><strong>Evaluador a cargo:</strong> {clean_html(author)}</div>
""")
        if p_ideas:
            doc_html.append("""
      <div style="font-weight:700;font-size:10pt;color:#0f172a;margin-bottom:4pt;border-bottom:1.5pt solid #cbd5e1;padding-bottom:3pt;">
        Inventario Diagnóstico de Ideas Clave (Lo que hacen bien vs. Lo que hacen mal)
      </div>
      <table style="width:100%;margin-bottom:14pt;border-collapse:collapse;font-size:8.5pt;">
        <thead>
          <tr style="background:#f1f5f9;">
            <th style="width:14%;padding:5pt;text-align:left;border:1pt solid #cbd5e1;">Código CASA</th>
            <th style="width:15%;padding:5pt;text-align:left;border:1pt solid #cbd5e1;">Diagnóstico</th>
            <th style="width:51%;padding:5pt;text-align:left;border:1pt solid #cbd5e1;">Idea Clave Identificada</th>
            <th style="width:20%;padding:5pt;text-align:left;border:1pt solid #cbd5e1;">Párrafo Asignado</th>
          </tr>
        </thead>
        <tbody>
""")
            for it in p_ideas:
                is_bien = it.get('type') == 'bien'
                tipo_lbl = '<span style="color:#047857;font-weight:700;">🟢 Fortaleza</span>' if is_bien else '<span style="color:#b91c1c;font-weight:700;">🔴 Rezago / Brecha</span>'
                sc = it.get('score')
                sc_str = f" <span style=\"font-size:7.5pt;color:#475569;\">(Score: {sc})</span>" if sc is not None else ""
                asgn = it.get('assignedTo')
                if asgn in asgn_badge_map:
                    bg, fg, label = asgn_badge_map[asgn]
                    asgn_html = f'<span style="background:{bg};color:{fg};padding:2pt 5pt;border-radius:3pt;font-weight:700;font-size:7.5pt;display:inline-block;">{label}</span>'
                else:
                    asgn_html = '<span style="color:#94a3b8;font-size:7.5pt;">— No asignado</span>'

                doc_html.append(f"""
          <tr>
            <td style="padding:4pt 5pt;border:1pt solid #e2e8f0;font-weight:700;vertical-align:top;">{clean_html(it.get('code', ''))}{sc_str}</td>
            <td style="padding:4pt 5pt;border:1pt solid #e2e8f0;vertical-align:top;">{tipo_lbl}</td>
            <td style="padding:4pt 5pt;border:1pt solid #e2e8f0;vertical-align:top;"><strong>{clean_html(it.get('title', ''))}:</strong> {clean_html(it.get('desc', ''))}</td>
            <td style="padding:4pt 5pt;border:1pt solid #e2e8f0;vertical-align:top;">{asgn_html}</td>
          </tr>
""")
            doc_html.append("""
        </tbody>
      </table>
      <div style="font-weight:700;font-size:10pt;color:#0f172a;margin-bottom:6pt;">
        Síntesis Narrativa Ejecutiva (Construcción en 4 Párrafos Graduados)
      </div>
""")

        doc_html.append(f"""
      <div class="narrative-p"><strong>1. Fortalezas y Logros Consolidados:</strong><br>{format_topic_sentence_html(n_data.get('p1', ''))}</div>
      <div class="narrative-p"><strong>2. Primera Área de Oportunidad:</strong><br>{format_topic_sentence_html(n_data.get('p2', ''))}</div>
      <div class="narrative-p"><strong>3. Segunda Área de Oportunidad:</strong><br>{format_topic_sentence_html(n_data.get('p3', ''))}</div>
      <div class="narrative-p"><strong>4. Principales Áreas de Oportunidad:</strong><br>{format_topic_sentence_html(n_data.get('p4', ''))}</div>
    </div>
""")
    doc_html.append("<h2>3. Detalle de Prácticas, Hallazgos y Recomendaciones por Evaluador</h2>\n")
else:
    doc_html.append("<h2>2. Detalle de Prácticas, Hallazgos y Recomendaciones por Evaluador</h2>\n")

for s_idx, uid in enumerate(evaluators_order, 1):
    m = team_dict.get(uid, {'name': uid, 'role': 'Evaluador'})
    pts = evaluator_data[uid]
    n_tot = len(pts)
    n_fi = sum(1 for it in pts if it['q'].get('findings') and str(it['q'].get('findings')).strip())
    n_re = sum(1 for it in pts if it['q'].get('recommendations') and str(it['q'].get('recommendations')).strip())
    
    doc_html.append(f"""
    <div class="eval-header">
      <div class="eval-name">{sec_prefix}.{s_idx}. {m['name']} — {m.get('role', 'Especialista FMI')}</div>
      <div class="eval-stats"><strong>Prácticas Asignadas:</strong> {n_tot} &nbsp;|&nbsp; <strong>Con Hallazgos Clave:</strong> {n_fi} &nbsp;|&nbsp; <strong>Con Recomendaciones:</strong> {n_re}</div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width:17%;">Pilar</th>
          <th style="width:25%;">Buena Práctica</th>
          <th style="width:29%;">Hallazgos</th>
          <th style="width:29%;">Recomendaciones</th>
        </tr>
      </thead>
      <tbody>
    """)
    
    for it in pts:
        q = it['q']
        code = q.get('code', q.get('id', 'N/A'))
        text = clean_html(q.get('text', 'Sin descripción'))
        findings = clean_html(q.get('findings', ''))
        recs = clean_html(q.get('recommendations', ''))
        
        pilar_cell = f"<strong>{it['pillar_code']}</strong><br><span style='font-size:8.5pt;color:#475569;'>{clean_html(it['pillar_title'])}</span>"
        bp_cell = f"<span class='code-tag'>{code}</span><br><span style='font-size:9.5pt;font-weight:600;'>{text}</span>"
        find_cell = f"<span style='font-size:9.5pt;'>{findings}</span>" if findings else "<span class='empty-cell'>Sin hallazgos registrados</span>"
        recs_cell = f"<span style='font-size:9.5pt;color:#1e3a8a;'>{recs}</span>" if recs else "<span class='empty-cell'>En formulación</span>"
        
        doc_html.append(f"""
        <tr>
          <td>{pilar_cell}</td>
          <td>{bp_cell}</td>
          <td>{find_cell}</td>
          <td>{recs_cell}</td>
        </tr>
        """)
        
    doc_html.append("""
      </tbody>
    </table>
    """)

if unassigned_list:
    doc_html.append(f"""
    <div class="eval-header" style="border-left-color:#64748b;">
      <div class="eval-name">{sec_prefix}.5. Buenas Prácticas Pendientes de Respuesta (Sin Evaluador Asignado)</div>
      <div class="eval-stats"><strong>Total Pendientes:</strong> {n_un}</div>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width:17%;">Pilar</th>
          <th style="width:33%;">Buena Práctica</th>
          <th style="width:25%;">Hallazgos</th>
          <th style="width:25%;">Recomendaciones</th>
        </tr>
      </thead>
      <tbody>
    """)
    for it in unassigned_list:
        q = it['q']
        code = q.get('code', q.get('id', 'N/A'))
        text = clean_html(q.get('text', 'Sin descripción'))
        pilar_cell = f"<strong>{it['pillar_code']}</strong><br><span style='font-size:8.5pt;color:#475569;'>{clean_html(it['pillar_title'])}</span>"
        bp_cell = f"<span class='code-tag'>{code}</span><br><span style='font-size:9.5pt;'>{text}</span>"
        doc_html.append(f"""
        <tr>
          <td>{pilar_cell}</td>
          <td>{bp_cell}</td>
          <td class="empty-cell">Pendiente de evaluación</td>
          <td class="empty-cell">Pendiente de evaluación</td>
        </tr>
        """)
    doc_html.append("</tbody></table>")

doc_html.append("""
</body>
</html>
""")

doc_content = "".join(doc_html)
with open('REPORTE_EVALUADOR_HALLAZGOS_Y_RECOMENDACIONES.doc', 'w', encoding='utf-8') as f:
    f.write(doc_content)

print("[OK] generate_report_by_evaluator.py actualizado y sincronizado.")
