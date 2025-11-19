from flask import Blueprint, jsonify, request
import sys
import os

# Adiciona o diretório raiz do backend ao path
backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from models.student import Student
from utils.calculations import (
    calculate_class_average,
    get_above_average_students,
    get_low_attendance_students
)

students_bp = Blueprint('students', __name__)

# Armazenamento em memória (para simplificar, em produção usaria banco de dados)
students_storage = []

@students_bp.route('/api/students', methods=['POST'])
def create_student():
    """Cria um novo estudante"""
    try:
        data = request.get_json()
        
        # Validações
        if not data:
            return jsonify({'error': 'Dados não fornecidos'}), 400
        
        name = data.get('name', '').strip()
        grades = data.get('grades', [])
        attendance = data.get('attendance', 0)
        
        # Validar nome
        if not name:
            return jsonify({'error': 'Nome é obrigatório'}), 400
        
        # Validar notas
        if not isinstance(grades, list) or len(grades) != 5:
            return jsonify({'error': 'São necessárias exatamente 5 notas'}), 400
        
        # Validar cada nota (0 a 10)
        for i, grade in enumerate(grades):
            try:
                grade = float(grade)
                if grade < 0 or grade > 10:
                    return jsonify({'error': f'Nota {i+1} deve estar entre 0 e 10'}), 400
                grades[i] = grade
            except (ValueError, TypeError):
                return jsonify({'error': f'Nota {i+1} inválida'}), 400
        
        # Validar frequência (0 a 100)
        try:
            attendance = float(attendance)
            if attendance < 0 or attendance > 100:
                return jsonify({'error': 'Frequência deve estar entre 0 e 100'}), 400
        except (ValueError, TypeError):
            return jsonify({'error': 'Frequência inválida'}), 400
        
        # Criar estudante
        student = Student(name=name, grades=grades, attendance=attendance)
        students_storage.append(student)
        
        return jsonify({
            'message': 'Estudante criado com sucesso',
            'student': student.to_dict()
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@students_bp.route('/api/students', methods=['GET'])
def get_students():
    """Lista todos os estudantes"""
    students_data = [s.to_dict() for s in students_storage]
    return jsonify({'students': students_data}), 200


@students_bp.route('/api/students/statistics', methods=['GET'])
def get_statistics():
    """Retorna estatísticas da turma"""
    if not students_storage:
        return jsonify({
            'class_averages': [0, 0, 0, 0, 0],
            'general_average': 0
        }), 200
    
    # Calcular média da turma por disciplina
    class_averages = [
        round(calculate_class_average(students_storage, i), 2)
        for i in range(5)
    ]
    
    # Calcular média geral
    general_average = round(
        sum(class_averages) / len(class_averages), 2
    )
    
    return jsonify({
        'class_averages': class_averages,
        'general_average': general_average,
        'total_students': len(students_storage)
    }), 200


@students_bp.route('/api/students/above-average', methods=['GET'])
def get_above_average():
    """Retorna estudantes com média acima da média da turma"""
    above_average = get_above_average_students(students_storage)
    return jsonify({'students': above_average}), 200


@students_bp.route('/api/students/low-attendance', methods=['GET'])
def get_low_attendance():
    """Retorna estudantes com frequência abaixo de 75%"""
    low_attendance = get_low_attendance_students(students_storage, threshold=75)
    return jsonify({'students': low_attendance}), 200


@students_bp.route('/api/students/reset', methods=['POST'])
def reset_students():
    """Limpa todos os estudantes (útil para testes)"""
    global students_storage
    students_storage = []
    return jsonify({'message': 'Lista de estudantes resetada'}), 200
