# Sistema de Gestão de Turma - DTI Digital

Sistema desenvolvido para o professor Carlos gerenciar notas e frequência dos alunos, permitindo o cadastro de estudantes com suas notas nas 5 disciplinas e cálculo automático de médias e relatórios.

## 📋 Descrição do Projeto

O sistema permite que o professor Carlos:
- **Cadastrar alunos**: Insira as notas (0 a 10) de cada aluno nas 5 disciplinas e a frequência (0 a 100%)
- **Editar alunos**: Corrija notas ou informações caso tenha inserido dados equivocados
- **Visualizar cálculos automáticos**:
  - Média de cada aluno (média aritmética das 5 disciplinas)
  - Média da turma por disciplina
  - Média geral da turma
- **Gerar relatórios**:
  - Alunos com média acima da média geral da turma
  - Alunos com frequência abaixo de 75%

## 🚀 Instruções para Executar o Sistema

### Pré-requisitos

- **Node.js** (versão 14 ou superior) - [Download](https://nodejs.org/)
- **Python** 3.8 ou superior - [Download](https://www.python.org/downloads/)
- **npm** (geralmente vem com Node.js)
- **pip** (geralmente vem com Python)

### 1. Configuração do Backend (Python)

1. Abra um terminal e navegue até a pasta do backend:
```bash
cd Codigo/backend
```

2. Crie um ambiente virtual Python:
```bash
python3 -m venv venv
```

3. Ative o ambiente virtual:

**No macOS/Linux:**
```bash
source venv/bin/activate
```

**No Windows:**
```bash
venv\Scripts\activate
```

4. Instale as dependências:
```bash
pip install -r requirements.txt
```

5. Execute o backend:
```bash
python app.py
```

O backend estará rodando em `http://localhost:5001`

> **Nota**: A porta padrão foi configurada como 5001 para evitar conflito com o AirPlay Receiver no macOS, que usa a porta 5000. Se necessário, você pode alterar a porta definindo a variável de ambiente `PORT` no arquivo `.env`.

Você verá uma mensagem similar a:
```
 * Running on http://0.0.0.0:5001
```

### 2. Configuração do Frontend (React)

1. Abra um **novo terminal** (deixe o backend rodando) e navegue até a pasta do frontend:
```bash
cd Codigo/frontend
```

2. Instale as dependências (se ainda não foram instaladas):
```bash
npm install
```

3. Execute o frontend:
```bash
npm start
```

O frontend será aberto automaticamente no navegador em `http://localhost:3000`

### ⚠️ Importante

- O backend deve estar rodando **antes** de iniciar o frontend
- O backend roda na porta **5001** (5000 é usada pelo AirPlay Receiver no macOS)
- O frontend roda na porta **3000**
- Mantenha ambos os terminais abertos enquanto usar o sistema

## 📝 Premissas Assumidas

1. **Formato de Entrada**:
   - Cada aluno possui um nome (string)
   - Cada aluno possui exatamente 5 notas (uma para cada disciplina), valores de 0 a 10
   - Cada aluno possui uma frequência em percentual, valores de 0 a 100%

2. **Validações**:
   - Nome do aluno é obrigatório e não pode estar vazio
   - Todas as 5 notas são obrigatórias e devem estar entre 0 e 10
   - Frequência é obrigatória e deve estar entre 0 e 100%
   - Apenas valores numéricos são aceitos para notas e frequência

3. **Cálculos**:
   - **Média do aluno**: média aritmética simples das 5 notas
   - **Média da turma por disciplina**: média aritmética de todos os alunos naquela disciplina específica
   - **Média geral da turma**: média aritmética de todas as médias dos alunos
   - **Alunos acima da média**: alunos cuja média pessoal é maior que a média geral da turma
   - **Alunos com baixa frequência**: alunos com frequência abaixo de 75%

4. **Tecnologias**:
   - Frontend: React (conforme especificação)
   - Backend: Python com Flask
   - Comunicação: API REST entre frontend e backend
   - Armazenamento: em memória (dados são perdidos ao reiniciar o backend)

5. **Formato de Saída**:
   - Os dados são exibidos em formato JSON via API
   - O frontend formata e apresenta os dados de forma visual
   - Relatórios mostram listas de nomes dos alunos que atendem aos critérios

## 🎯 Decisões de Projeto

### Arquitetura

1. **Separação Frontend/Backend**:
   - Decisão de separar completamente frontend e backend para permitir escalabilidade e manutenção independente
   - Comunicação via API REST permite que ambos possam evoluir separadamente

2. **API REST**:
   - Escolha de API REST para comunicação entre frontend e backend
   - Endpoints bem definidos e seguindo convenções RESTful (GET, POST, PUT)
   - Uso de JSON para troca de dados
   - Suporte completo para CRUD (Create, Read, Update) de estudantes

3. **CORS Habilitado**:
   - Flask-CORS configurado para permitir requisições cross-origin do frontend
   - Necessário pois frontend e backend rodam em portas diferentes

### Backend

1. **Flask como Framework**:
   - Escolhido por ser leve, simples e adequado para APIs REST
   - Flexível e fácil de estender

2. **Organização em Módulos**:
   - `models/`: Modelos de dados (Student)
   - `routes/`: Rotas da API (Blueprints do Flask)
   - `utils/`: Funções utilitárias (cálculos)
   - Facilita manutenção e teste

3. **Armazenamento em Memória**:
   - Dados armazenados em uma lista em memória (simplicidade)
   - Em produção, seria substituído por banco de dados (PostgreSQL, MongoDB, etc.)

4. **Validação no Backend**:
   - Validações implementadas no backend para garantir integridade dos dados
   - Mensagens de erro claras e descritivas

### Frontend

1. **React Hooks**:
   - Uso de hooks (useState, useEffect) para gerenciamento de estado
   - Componentes funcionais (padrão moderno do React)

2. **Componentização**:
   - Separação em componentes reutilizáveis:
     - `StudentForm`: Formulário de cadastro
     - `StudentList`: Lista de alunos
     - `Statistics`: Estatísticas da turma
     - `Reports`: Relatórios
   - Facilita manutenção e testabilidade

3. **Design Responsivo**:
   - Layout adaptável para diferentes tamanhos de tela
   - Uso de CSS Grid e Flexbox
   - Media queries para mobile

4. **Paleta de Cores**:
   - Gradientes modernos e atraentes
   - Cores intuitivas (verde para positivo, vermelho para alerta)
   - Feedback visual claro para o usuário

5. **UX/UI**:
   - Interface intuitiva e fácil de usar
   - Feedback visual imediato (mensagens de sucesso/erro)
   - Loading states para operações assíncronas
   - Badges coloridos para destacar informações importantes

### Estrutura de Dados

1. **Modelo Student**:
   - Classe simples com métodos para cálculos
   - Métodos `to_dict()` e `from_dict()` para serialização

2. **Cálculos Separados**:
   - Funções de cálculo em módulo separado (`utils/calculations.py`)
   - Facilita testes unitários
   - Código mais limpo e reutilizável

## 📦 Tecnologias Utilizadas

### Backend
- **Python 3.8+**: Linguagem principal
- **Flask 3.0.0**: Framework web para API REST
- **Flask-CORS 4.0.0**: Middleware para permitir requisições cross-origin
- **python-dotenv 1.0.0**: Gerenciamento de variáveis de ambiente

### Frontend
- **React 18.2.0**: Biblioteca JavaScript para construção de UI
- **react-scripts 5.0.1**: Ferramentas de build e desenvolvimento do Create React App

## 📁 Estrutura do Projeto

```
Teste-DTI/
├── Codigo/
│   ├── frontend/              # Frontend React
│   │   ├── public/
│   │   │   └── index.html
│   │   ├── src/
│   │   │   ├── components/    # Componentes React
│   │   │   │   ├── StudentForm.js
│   │   │   │   ├── StudentList.js
│   │   │   │   ├── Statistics.js
│   │   │   │   └── Reports.js
│   │   │   ├── services/      # Serviços de API
│   │   │   │   └── api.js
│   │   │   ├── App.js
│   │   │   ├── App.css
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── backend/               # Backend Python
│       ├── app.py             # Aplicação principal Flask
│       ├── models/            # Modelos de dados
│       │   ├── __init__.py
│       │   └── student.py
│       ├── routes/            # Rotas da API
│       │   ├── __init__.py
│       │   └── students.py
│       ├── utils/             # Utilitários
│       │   ├── __init__.py
│       │   └── calculations.py
│       ├── requirements.txt
│       └── README.md
│
├── README.md                  # Este arquivo
└── .gitignore
```

## 🔌 Endpoints da API

### POST `/api/students`
Cria um novo estudante.

**Body:**
```json
{
  "name": "João Silva",
  "grades": [7.5, 8.0, 6.5, 9.0, 8.5],
  "attendance": 85
}
```

### GET `/api/students`
Retorna lista de todos os estudantes.

### PUT `/api/students/<index>`
Atualiza um estudante existente (identificado pelo índice na lista).

**Body:**
```json
{
  "name": "João Silva",
  "grades": [8.0, 8.5, 7.0, 9.5, 8.5],
  "attendance": 90
}
```

### GET `/api/students/statistics`
Retorna estatísticas da turma (médias por disciplina e média geral).

### GET `/api/students/above-average`
Retorna lista de estudantes com média acima da média da turma.

### GET `/api/students/low-attendance`
Retorna lista de estudantes com frequência abaixo de 75%.

## 🎨 Funcionalidades do Frontend

- **Formulário de Cadastro**: Interface intuitiva para cadastrar alunos com validação em tempo real
- **Lista de Alunos**: Tabela visual mostrando todos os alunos com suas médias e frequência
- **Edição de Alunos**: Modal de edição para corrigir notas e informações de alunos já cadastrados
- **Estatísticas**: Cards exibindo médias por disciplina e média geral da turma
- **Relatórios**: Seções destacadas mostrando alunos acima da média e com baixa frequência
- **Feedback Visual**: Mensagens de sucesso/erro, badges coloridos, estados de loading
- **Design Minimalista**: Interface clean e profissional com cores sutis e tipografia moderna

## 🔍 Pontos Importantes sobre o Projeto

1. **Código Limpo e Organizado**: 
   - Separação clara de responsabilidades
   - Código comentado e fácil de entender
   - Estrutura modular

2. **Validações Robustas**:
   - Validações tanto no frontend quanto no backend
   - Mensagens de erro claras e descritivas
   - Prevenção de dados inválidos

3. **Interface Moderna e Minimalista**:
   - Design responsivo e adaptável
   - Visual clean e profissional com cores sutis
   - Paleta de cores minimalista (cinzas e neutros)
   - Tipografia moderna e legível
   - Feedback visual imediato para o usuário
   - Experiência de usuário fluida e intuitiva
   - Edição de alunos através de modal elegante

4. **Extensibilidade**:
   - Código preparado para facilmente adicionar banco de dados
   - Estrutura permite adicionar novas funcionalidades sem grandes refatorações
   - Separação frontend/backend facilita evolução independente

5. **Boas Práticas**:
   - Uso de componentes reutilizáveis no React
   - Funções puras para cálculos
   - Tratamento de erros adequado
   - Código seguindo convenções das tecnologias utilizadas

## 🐛 Tratamento de Erros

- Erros são capturados e exibidos de forma amigável ao usuário
- Mensagens de erro descritivas ajudam no diagnóstico
- Validações impedem envio de dados inválidos
- Loading states informam quando operações estão em andamento

## 📝 Observações Finais

Este projeto foi desenvolvido seguindo as especificações do processo seletivo da DTI Digital, utilizando React no frontend e Python/Flask no backend. A implementação prioriza código limpo, interface intuitiva e funcionalidades completas conforme solicitado.

O sistema está pronto para uso e pode ser facilmente estendido com funcionalidades adicionais como persistência em banco de dados, autenticação, exportação de relatórios, entre outras.
