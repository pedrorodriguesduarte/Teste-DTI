def calculate_student_average(grades):
    """
    Calcula a média de um estudante
    
    Args:
        grades (list): Lista com 5 notas
        
    Returns:
        float: Média das notas
    """
    if not grades or len(grades) != 5:
        return 0
    return sum(grades) / len(grades)


def calculate_class_average(students, discipline_index):
    """
    Calcula a média da turma para uma disciplina específica
    
    Args:
        students (list): Lista de estudantes
        discipline_index (int): Índice da disciplina (0 a 4)
        
    Returns:
        float: Média da turma na disciplina
    """
    if not students or discipline_index < 0 or discipline_index > 4:
        return 0
    
    valid_grades = [s.grades[discipline_index] for s in students if len(s.grades) > discipline_index]
    
    if not valid_grades:
        return 0
    
    return sum(valid_grades) / len(valid_grades)


def calculate_general_class_average(students):
    """
    Calcula a média geral da turma (média de todas as médias dos alunos)
    
    Args:
        students (list): Lista de estudantes
        
    Returns:
        float: Média geral da turma
    """
    if not students:
        return 0
    
    student_averages = [s.calculate_average() for s in students]
    return sum(student_averages) / len(student_averages)


def get_above_average_students(students):
    """
    Retorna estudantes com média acima da média geral da turma
    
    Args:
        students (list): Lista de estudantes
        
    Returns:
        list: Lista de nomes dos estudantes acima da média
    """
    if not students:
        return []
    
    class_average = calculate_general_class_average(students)
    above_average = [
        s.name for s in students 
        if s.calculate_average() > class_average
    ]
    
    return above_average


def get_low_attendance_students(students, threshold=75):
    """
    Retorna estudantes com frequência abaixo do threshold
    
    Args:
        students (list): Lista de estudantes
        threshold (float): Limite de frequência (padrão: 75)
        
    Returns:
        list: Lista de nomes dos estudantes com baixa frequência
    """
    if not students:
        return []
    
    low_attendance = [
        s.name for s in students 
        if s.attendance < threshold
    ]
    
    return low_attendance
