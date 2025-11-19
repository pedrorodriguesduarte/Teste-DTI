import React, { useState, useEffect } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Statistics from './components/Statistics';
import Reports from './components/Reports';
import EditStudentModal from './components/EditStudentModal';
import { getStudents, getStatistics, getAboveAverage, getLowAttendance } from './services/api';

function App() {
  const [students, setStudents] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [aboveAverage, setAboveAverage] = useState([]);
  const [lowAttendance, setLowAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  // Função para carregar todos os dados
  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [studentsData, statsData, aboveData, lowData] = await Promise.all([
        getStudents(),
        getStatistics(),
        getAboveAverage(),
        getLowAttendance()
      ]);
      
      setStudents(studentsData.students || []);
      setStatistics(statsData);
      setAboveAverage(aboveData.students || []);
      setLowAttendance(lowData.students || []);
    } catch (err) {
      setError('Erro ao carregar dados. Certifique-se de que o backend está rodando.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStudentAdded = () => {
    loadData();
  };

  const handleEdit = (index, student) => {
    setEditingIndex(index);
    setEditingStudent(student);
  };

  const handleCloseEdit = () => {
    setEditingStudent(null);
    setEditingIndex(null);
  };

  const handleStudentUpdated = () => {
    loadData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Sistema de Gestão de Turma</h1>
          <p>Gerencie notas e frequência dos alunos</p>
        </div>
      </header>

      <div className="container">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="main-content">
          <div className="left-column">
            <StudentForm onStudentAdded={handleStudentAdded} />
            <Statistics statistics={statistics} loading={loading} />
          </div>

          <div className="right-column">
            <StudentList 
              students={students} 
              statistics={statistics}
              loading={loading}
              onEdit={handleEdit}
            />
            <Reports 
              aboveAverage={aboveAverage}
              lowAttendance={lowAttendance}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {editingStudent && (
        <EditStudentModal
          student={editingStudent}
          index={editingIndex}
          onClose={handleCloseEdit}
          onUpdated={handleStudentUpdated}
        />
      )}
    </div>
  );
}

export default App;
