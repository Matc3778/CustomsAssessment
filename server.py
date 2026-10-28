"""
Servidor local colaborativo para la Plataforma de Diagnóstico Tributario (FMI / CD Framework)
Ejecuta un servidor web local que sincroniza datos entre múltiples evaluadores.
"""

import http.server
import socketserver
import json
import os
import sys
import webbrowser
import datetime

PORT = 8000
DATA_FILE = 'evaluacion_db.json'
TEMPLATE_FILE = 'cuestionario_data.json'

# Ensure initial data exists
if not os.path.exists(DATA_FILE) and os.path.exists(TEMPLATE_FILE):
    with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
        template_pillars = json.load(f)
    initial_payload = {
        "version": "1.0",
        "lastUpdated": datetime.datetime.now().isoformat(),
        "mission": {
            "title": "Evaluación Diagnóstica de la Administración Tributaria y Aduanera",
            "country": "Bolivia",
            "institution": "Servicio de Impuestos Nacionales / Aduana Nacional",
            "dates": "Octubre 2026",
            "lead": "Misión Técnica de Asistencia y Desarrollo de Capacidades",
            "notes": "Diagnóstico institucional integral basado en el marco de evaluación de buenas prácticas."
        },
        "team": [
            { "id": "usr_1", "name": "Jefe de Misión", "role": "Coordinador General", "email": "lider@mision.org", "color": "#1e40af" },
            { "id": "usr_2", "name": "Especialista en Riesgos y Procesos", "role": "Evaluador Senior", "email": "riesgos@mision.org", "color": "#0d9488" },
            { "id": "usr_3", "name": "Especialista Legal y Gobernanza", "role": "Evaluador Legal", "email": "legal@mision.org", "color": "#7c3aed" },
            { "id": "usr_4", "name": "Especialista en TI y Datos", "role": "Evaluador TI", "email": "ti@mision.org", "color": "#ea580c" }
        ],
        "pillars": template_pillars
    }
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(initial_payload, f, ensure_ascii=False, indent=2)

class CollaborativeHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # CORS & Cache Control for real-time collaboration
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/data':
            if os.path.exists(DATA_FILE):
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                with open(DATA_FILE, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                self.send_error(404, "Data file not found")
        elif self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "online", "time": datetime.datetime.now().isoformat()}).encode('utf-8'))
        else:
            # Default static file handler
            super().do_GET()

    def do_POST(self):
        if self.path == '/api/save':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                data['lastUpdated'] = datetime.datetime.now().isoformat()
                
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "savedAt": data['lastUpdated']}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
        else:
            self.send_error(404, "Endpoint not found")

def start_server():
    port = PORT
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    server = None
    for p in [PORT, 8080, 8888, 9000]:
        try:
            server = socketserver.TCPServer(("", p), CollaborativeHandler)
            port = p
            break
        except OSError:
            continue

    if not server:
        print("Error: No se pudo enlazar el servidor en ningún puerto disponible.")
        sys.exit(1)

    url = f"http://localhost:{port}/index.html"
    print("=" * 70)
    print(" [PLATAFORMA DE EVALUACION DE ADMINISTRACION TRIBUTARIA - FMI / CD]")
    print("=" * 70)
    print(f" Servidor activo en: {url}")
    print(f" Para colaborar en red local, comparte: http://<TU_IP_LOCAL>:{port}/index.html")
    print(" Presiona Ctrl + C para detener el servidor.")
    print("=" * 70)

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
        server.server_close()

if __name__ == '__main__':
    start_server()
