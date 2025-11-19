import React from 'react';
import './Statistics.css';

const Statistics = ({ statistics, loading }) => {
  if (loading) {
    return (
      <div className="statistics-card">
        <h2>📊 Estatísticas da Turma</h2>
        <div className="loading">Carregando...</div>
      </div>
    );
  }

  if (!statistics) {
    return (
      <div className="statistics-card">
        <h2>📊 Estatísticas da Turma</h2>
        <div className="empty-state">Nenhuma estatística disponível.</div>
      </div>
    );
  }

  const disciplines = ['Disc. 1', 'Disc. 2', 'Disc. 3', 'Disc. 4', 'Disc. 5'];

  return (
    <div className="statistics-card">
      <h2>📊 Estatísticas da Turma</h2>
      
      <div className="statistics-content">
        <div className="general-average">
          <span className="label">Média Geral da Turma:</span>
          <span className="value">{statistics.general_average.toFixed(2)}</span>
        </div>

        <div className="class-averages">
          <h3>Média por Disciplina</h3>
          <div className="averages-grid">
            {statistics.class_averages.map((average, index) => (
              <div key={index} className="average-item">
                <span className="discipline-name">{disciplines[index]}</span>
                <span className="discipline-average">{average.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

