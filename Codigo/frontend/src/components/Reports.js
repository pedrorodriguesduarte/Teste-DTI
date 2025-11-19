import React from 'react';
import './Reports.css';

const Reports = ({ aboveAverage, lowAttendance, loading }) => {
  if (loading) {
    return (
      <div className="reports-card">
        <h2>📈 Relatórios</h2>
        <div className="loading">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="reports-card">
      <h2>📈 Relatórios</h2>
      
      <div className="reports-content">
        <div className="report-section">
          <h3>
            <span className="icon">⭐</span>
            Alunos Acima da Média
          </h3>
          {aboveAverage.length === 0 ? (
            <div className="empty-list">Nenhum aluno com média acima da média da turma.</div>
          ) : (
            <div className="students-list">
              {aboveAverage.map((name, index) => (
                <div key={index} className="student-item success">
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="report-section">
          <h3>
            <span className="icon">⚠️</span>
            Alunos com Frequência &lt; 75%
          </h3>
          {lowAttendance.length === 0 ? (
            <div className="empty-list">Todos os alunos têm frequência adequada (≥75%).</div>
          ) : (
            <div className="students-list">
              {lowAttendance.map((name, index) => (
                <div key={index} className="student-item warning">
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;

