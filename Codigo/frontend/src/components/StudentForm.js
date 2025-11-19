import React, { useState } from 'react';
import { createStudent } from '../services/api';
import './StudentForm.css';

const StudentForm = ({ onStudentAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    grades: ['', '', '', '', ''],
    attendance: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const disciplines = [
    'Disciplina 1',
    'Disciplina 2',
    'Disciplina 3',
    'Disciplina 4',
    'Disciplina 5'
  ];

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    
    if (name === 'grades' && index !== null) {
      const newGrades = [...formData.grades];
      newGrades[index] = value;
      setFormData({ ...formData, grades: newGrades });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      // Validações
      if (!formData.name.trim()) {
        throw new Error('Nome é obrigatório');
      }

      // Converter notas para número
      const grades = formData.grades.map((grade, index) => {
        const numGrade = parseFloat(grade);
        if (isNaN(numGrade) || numGrade < 0 || numGrade > 10) {
          throw new Error(`Nota da ${disciplines[index]} deve ser um número entre 0 e 10`);
        }
        return numGrade;
      });

      // Validar frequência
      const attendance = parseFloat(formData.attendance);
      if (isNaN(attendance) || attendance < 0 || attendance > 100) {
        throw new Error('Frequência deve ser um número entre 0 e 100');
      }

      // Criar estudante
      await createStudent({
        name: formData.name.trim(),
        grades: grades,
        attendance: attendance
      });

      setSuccess(true);
      
      // Limpar formulário
      setFormData({
        name: '',
        grades: ['', '', '', '', ''],
        attendance: ''
      });

      // Atualizar lista
      setTimeout(() => {
        onStudentAdded();
        setSuccess(false);
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="student-form-card">
        <h2>Cadastrar Aluno</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome do Aluno *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: João Silva"
            required
          />
        </div>

        <div className="form-group">
          <label>Notas (0 a 10) *</label>
          <div className="grades-grid">
            {formData.grades.map((grade, index) => (
              <div key={index} className="grade-input">
                <label htmlFor={`grade-${index}`}>{disciplines[index]}</label>
                <input
                  type="number"
                  id={`grade-${index}`}
                  name="grades"
                  value={grade}
                  onChange={(e) => handleChange(e, index)}
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="0-10"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="attendance">Frequência (%) *</label>
          <input
            type="number"
            id="attendance"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
            min="0"
            max="100"
            step="0.1"
            placeholder="Ex: 80"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Aluno cadastrado com sucesso!</div>}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar Aluno'}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;

