import json

with open('evaluacion_db.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

js_content = "/** DATOS BASE INICIALES - CARGA DIRECTA PARA FUNCIONAR SIN SERVIDOR (FILE://) O CON SERVIDOR */\nconst DEFAULT_DATA = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n"

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"data.js generado exitosamente. Pilares: {len(db['pillars'])}, Evaluadores: {len(db['team'])}")
