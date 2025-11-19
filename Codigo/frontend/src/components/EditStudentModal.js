import React, { useState, useEffect } from 'react';
import { updateStudent } from '../services/api';
import './EditStudentModal.css';

const EditStudentModal = ({ student, index, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    name: '',
    grades: ['', '', '', '', ''],
    attendance: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const disciplines = [
    'Disciplina 1',
    'Disciplina 2',
    'Disciplina 3',
    'Disciplina 4',
    'Disciplina 5'
  ];

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name || '',
        grades: student.grades ? [...student.grades] : ['', '', '', '', ''],
        attendance: student.attendance || ''
      });
    }
  }, [student]);

  const handleChange = (e, gradeIndex = null) => {
    const { name, value } = e.target;
    
    if (name === 'grades' && gradeIndex !== null) {
      const newGrades = [...formData.grades];
      newGrades[gradeIndex] = value;
      setFormData({ ...formData, grades: newGrades });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Validações
      if (!formData.name.trim()) {
        throw new Error('Nome é obrigatório');
      }

      // Converter notas para número
      const grades = formData.grades.map((grade, idx) => {
        const numGrade = parseFloat(grade);
        if (isNaN(numGrade) || numGrade < 0 || numGrade > 10) {
          throw new Error(`Nota da ${disciplines[idx]} deve ser um número entre 0 e 10`);
        }
        return numGrade;
      });

      // Validar frequência
      const attendance = parseFloat(formData.attendance);
      if (isNaN(attendance) || attendance < 0 || attendance > 100) {
        throw new Error('Frequência deve ser um número entre 0 e 100');
      }

      // Atualizar estudante
      await updateStudent(index, {
        name: formData.name.trim(),
        grades: grades,
        attendance: attendance
      });

      onUpdated();
      onClose();

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!student) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Editar Aluno</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="edit-name">Nome do Aluno *</label>
            <input
              type="text"
              id="edit-name"
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
              {formData.grades.map((grade, idx) => (
                <div key={idx} className="grade-input">
                  <label htmlFor={`edit-grade-${idx}`}>{disciplines[idx]}</label>
                  <input
                    type="number"
                    id={`edit-grade-${idx}`}
                    name="grades"
                    value={grade}
                    onChange={(e) => handleChange(e, idx)}
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
            <label htmlFor="edit-attendance">Frequência (%) *</label>
            <input
              type="number"
              id="edit-attendance"
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

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="save-btn" disabled={loading}>
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudentModal;

