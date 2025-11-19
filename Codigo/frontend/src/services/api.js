// Porta 5001 para evitar conflito com AirPlay Receiver no macOS (porta 5000)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

export const createStudent = async (studentData) => {
  const response = await fetch(`${API_BASE_URL}/api/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Erro ao criar estudante');
  }

  return response.json();
};

export const getStudents = async () => {
  const response = await fetch(`${API_BASE_URL}/api/students`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar estudantes');
  }

  return response.json();
};

export const getStatistics = async () => {
  const response = await fetch(`${API_BASE_URL}/api/students/statistics`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar estatísticas');
  }

  return response.json();
};

export const getAboveAverage = async () => {
  const response = await fetch(`${API_BASE_URL}/api/students/above-average`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar estudantes acima da média');
  }

  return response.json();
};

export const getLowAttendance = async () => {
  const response = await fetch(`${API_BASE_URL}/api/students/low-attendance`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar estudantes com baixa frequência');
  }

  return response.json();
};

export const resetStudents = async () => {
  const response = await fetch(`${API_BASE_URL}/api/students/reset`, {
    method: 'POST',
  });
  
  if (!response.ok) {
    throw new Error('Erro ao resetar lista');
  }

  return response.json();
};

