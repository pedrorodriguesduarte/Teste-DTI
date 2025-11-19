class Student:
    def __init__(self, name, grades, attendance):
        """
        Inicializa um estudante
        
        Args:
            name (str): Nome do estudante
            grades (list): Lista com 5 notas (uma para cada disciplina)
            attendance (float): Percentual de frequência (0 a 100)
        """
        self.name = name
        self.grades = grades  # Lista com 5 notas
        self.attendance = attendance  # Percentual de frequência
    
    def calculate_average(self):
        """Calcula a média aritmética das 5 disciplinas"""
        if len(self.grades) != 5:
            return 0
        return sum(self.grades) / len(self.grades)
    
    def to_dict(self):
        """Converte o estudante para dicionário"""
        return {
            'name': self.name,
            'grades': self.grades,
            'attendance': self.attendance,
            'average': round(self.calculate_average(), 2)
        }
    
    @staticmethod
    def from_dict(data):
        """Cria um estudante a partir de um dicionário"""
        return Student(
            name=data['name'],
            grades=data['grades'],
            attendance=data['attendance']
        )
