import React from 'react';
import './StudentList.css';

const StudentList = ({ students, statistics, loading }) => {
  if (loading) {
    return (
      <div className="student-list-card">
        <h2>📋 Lista de Alunos</h2>
        <div className="loading">Carregando...</div>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="student-list-card">
        <h2>📋 Lista de Alunos</h2>
        <div className="empty-state">
          <p>Nenhum aluno cadastrado ainda.</p>
          <p className="hint">Cadastre o primeiro aluno usando o formulário ao lado.</p>
        </div>
      </div>
    );
  }

  const getAverageColor = (average) => {
    if (average >= 7) return '#2ecc71'; // Verde
    if (average >= 5) return '#f39c12'; // Laranja
    return '#e74c3c'; // Vermelho
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 75) return '#2ecc71'; // Verde
    return '#e74c3c'; // Vermelho
  };

  return (
    <div className="student-list-card">
      <h2>📋 Lista de Alunos ({students.length})</h2>
      <div className="students-table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Média</th>
              <th>Frequência</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="student-name">{student.name}</td>
                <td>
                  <span 
                    className="average-badge"
                    style={{ backgroundColor: getAverageColor(student.average) }}
                  >
                    {student.average.toFixed(2)}
                  </span>
                </td>
                <td>
                  <span 
                    className="attendance-badge"
                    style={{ backgroundColor: getAttendanceColor(student.attendance) }}
                  >
                    {student.attendance}%
                  </span>
                </td>
                <td className="grades-cell">
                  {student.grades.map((grade, i) => (
                    <span key={i} className="grade-item">
                      {grade.toFixed(1)}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;

