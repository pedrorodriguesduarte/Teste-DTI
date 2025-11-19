from flask import Flask, jsonify
from flask_cors import CORS
import os
import sys
from dotenv import load_dotenv

# Adiciona o diretório raiz do backend ao path
backend_dir = os.path.dirname(os.path.abspath(__file__))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from routes.students import students_bp

# Carrega variáveis de ambiente
load_dotenv()

app = Flask(__name__)
CORS(app)  # Permite requisições do frontend

# Configuração
app.config['DEBUG'] = os.getenv('FLASK_DEBUG', 'True') == 'True'
# Porta 5001 para evitar conflito com AirPlay Receiver no macOS (porta 5000)
app.config['PORT'] = int(os.getenv('PORT', 5001))

# Registrar blueprints
app.register_blueprint(students_bp)

@app.route('/')
def index():
    return jsonify({
        'message': 'API do Sistema de Gestão de Turma',
        'status': 'running',
        'endpoints': {
            'POST /api/students': 'Adicionar estudante',
            'GET /api/students': 'Listar estudantes',
            'GET /api/students/statistics': 'Estatísticas da turma',
            'GET /api/students/above-average': 'Estudantes acima da média',
            'GET /api/students/low-attendance': 'Estudantes com frequência baixa',
            'POST /api/students/reset': 'Resetar lista (desenvolvimento)'
        }
    })

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=app.config['PORT'], debug=app.config['DEBUG'])
