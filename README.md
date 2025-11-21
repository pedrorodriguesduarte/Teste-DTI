# 🏷️ Sistema de Gestão de Turma ✨

Sistema web desenvolvido para o professor Carlos gerenciar notas e frequência dos alunos de forma eficiente e intuitiva. Permite o cadastro de estudantes com suas notas nas 5 disciplinas, cálculo automático de médias e geração de relatórios estatísticos da turma.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este é um sistema de gestão acadêmica desenvolvido como parte do processo seletivo da <b>DTI Digital</b>. A aplicação permite que professores gerenciem as notas e frequência dos alunos de forma centralizada, com interface web moderna e intuitiva. O sistema calcula automaticamente médias individuais e da turma, além de gerar relatórios que identificam alunos com desempenho acima da média e aqueles com frequência abaixo do recomendado. Desenvolvido com <b>React</b> no frontend e <b>Python/Flask</b> no backend, o projeto demonstra boas práticas de desenvolvimento web, arquitetura de software e separação de responsabilidades entre cliente e servidor.
      </div>
    </td>
    <td>
      <div>
        <img width="1200" height="120px" alt="image" src="https://github.com/user-attachments/assets/be9eb170-49f8-425b-b91b-93b7045759a3" />
      </div>
    </td>
  </tr> 
</table>

## 🚧 Status do Projeto

[![Versão](https://img.shields.io/badge/Versão-v1.0.0-blue)](https://github.com/seu-usuario/sistema-gestao-turma/releases)
[![Licença](https://img.shields.io/github/license/seu-usuario/sistema-gestao-turma)](LICENSE)
![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=flat&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.0.0-000000?style=flat&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=flat&logo=node.js&logoColor=white)

---

## 📚 Índice

- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#como-executar-a-aplicação)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Testes](#-testes)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis

* 🌐 **Demo Online:** [Acesse a Aplicação Web](<link-da-demo-web>)

  > 💻 **Descrição:** Link para a aplicação em ambiente de produção (quando disponível).

* 📖 **Documentação da API:** [Swagger/OpenAPI](<link-para-docs>)

  > 📚 **Descrição:** Acesso à documentação técnica completa da API REST (quando disponível).

---

## 📝 Sobre o Projeto

Este projeto foi desenvolvido para atender às necessidades de gerenciamento acadêmico, especificamente para o professor Carlos, que precisa:

- **Registrar informações acadêmicas** dos alunos de forma organizada e eficiente
- **Calcular médias automaticamente** para facilitar a análise de desempenho
- **Gerar relatórios estatísticos** que ajudem na tomada de decisões pedagógicas
- **Identificar alunos com dificuldades** (baixa frequência ou notas abaixo da média)

### Contexto

O sistema foi desenvolvido como parte do processo seletivo da **DTI Digital**, demonstrando habilidades em:
- Desenvolvimento Full Stack (Frontend e Backend)
- Arquitetura de software (separação de responsabilidades)
- API REST (comunicação entre frontend e backend)
- Interface de usuário moderna e responsiva
- Cálculos matemáticos e processamento de dados

### Problema que Resolve

Antes do sistema, o professor precisava:
- Calcular médias manualmente
- Fazer planilhas complexas para gerenciar notas
- Identificar alunos com problemas de forma manual
- Não tinha uma visão consolidada das estatísticas da turma

Agora, com o sistema:
- **Cadastro simples** de alunos com todas as informações necessárias
- **Cálculos automáticos** de médias individuais e da turma
- **Relatórios instantâneos** destacando alunos acima da média e com frequência baixa
- **Edição de dados** quando houver necessidade de correção

---

## ✨ Funcionalidades Principais

* 📝 **Cadastro de Alunos:** Formulário intuitivo para registrar nome, 5 notas (0-10) e frequência (0-100%)

* ✏️ **Edição de Alunos:** Modal de edição para corrigir informações quando necessário

* 📊 **Cálculo Automático de Médias:**
  - Média individual de cada aluno (média aritmética das 5 disciplinas)
  - Média da turma por disciplina
  - Média geral da turma

* 📈 **Relatórios Inteligentes:**
  - Lista de alunos com média acima da média geral da turma
  - Lista de alunos com frequência abaixo de 75%

* 📋 **Visualização de Dados:**
  - Tabela completa de alunos com médias e frequência
  - Cards estatísticos com informações resumidas
  - Badges coloridos para indicar desempenho (verde: bom, laranja: médio, vermelho: baixo)

* 🎨 **Interface Minimalista:**
  - Design clean e profissional
  - Responsivo (mobile, tablet, desktop)
  - Feedback visual imediato

---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas, frameworks e bibliotecas foram utilizados na construção deste projeto.

### 💻 Front-end

* **Framework/Biblioteca:** React 18.2.0
* **Linguagem:** JavaScript (ES6+)
* **Estilização:** CSS3 puro (design minimalista e responsivo)
* **Gerenciamento de Estado:** React Hooks (useState, useEffect)
* **Build Tool:** react-scripts (Create React App)
* **Requisições HTTP:** Fetch API nativa

### 🖥️ Back-end

* **Linguagem/Runtime:** Python 3.8+
* **Framework:** Flask 3.0.0
* **Armazenamento:** Em memória (lista Python - pode ser facilmente migrado para banco de dados)
* **CORS:** Flask-CORS 4.0.0 (para permitir requisições do frontend)
* **Variáveis de Ambiente:** python-dotenv 1.0.0

### ⚙️ Infraestrutura & DevOps

* **Controle de Versão:** Git
* **Gerenciamento de Dependências:** pip (Python) e npm (Node.js)
* **Ambientes Virtuais:** venv (Python)

---

## 🏗 Arquitetura

O projeto segue uma **arquitetura de camadas** com separação clara entre frontend e backend, comunicando-se via **API REST**.

### Visão Geral

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (React)                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Components│  │ Services │  │   State  │  │   UI     │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│         │             │                                      │
│         └─────────────┼──────────┐                          │
└───────────────────────┼──────────┼──────────────────────────┘
                        │ HTTP    │
                        │ REST    │
┌───────────────────────┼──────────┼──────────────────────────┐
│         ┌─────────────┴──────────┘         │                │
│         │             │                     │                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │                │
│  │  Routes  │  │  Models  │  │  Utils   │ │                │
│  └──────────┘  └──────────┘  └──────────┘ │                │
│                     │                      │                │
│              ┌──────────┐                 │                │
│              │ Storage  │                 │                │
│              │ (Memory) │                 │                │
│              └──────────┘                 │                │
│              BACKEND (Flask)              │                │
└───────────────────────────────────────────┘                │
```

### Decisões Arquiteturais

1. **Separação Frontend/Backend:**
   - Permite desenvolvimento e deploy independentes
   - Facilita escalabilidade e manutenção
   - Permite reutilização da API por outros clientes

2. **API REST:**
   - Padrão amplamente adotado e bem documentado
   - Comunicação via JSON (leve e universal)
   - Facilita testes e integração

3. **Organização em Módulos (Backend):**
   - `models/`: Modelos de dados (Student)
   - `routes/`: Endpoints da API (Blueprints do Flask)
   - `utils/`: Funções utilitárias (cálculos matemáticos)
   - Facilita testabilidade e manutenção

4. **Componentização (Frontend):**
   - Componentes reutilizáveis e responsáveis por uma única funcionalidade
   - Separação de lógica de negócio (services) e apresentação (components)
   - Facilita testes e evolução do código

### Fluxo de Dados

1. **Cadastro de Aluno:**
   ```
   Usuário → Form (React) → API Service → POST /api/students → 
   Flask Route → Validação → Model Student → Storage → 
   Response → Update State → UI Refresh
   ```

2. **Listagem e Estatísticas:**
   ```
   App Load → GET /api/students → Flask Route → 
   Calculate Statistics → Response → Update State → 
   Render Components
   ```

---

## 🔧 Instalação e Execução

### Pré-requisitos

Certifique-se de que o ambiente está configurado com:

* **Python:** Versão **3.8** ou superior (Necessário para o **Back-end Flask**)
* **Node.js:** Versão LTS (v14.x ou superior) (Necessário para o **Front-end React**)
* **Gerenciador de Pacotes:** npm ou yarn
* **pip:** Gerenciador de pacotes Python (geralmente vem com Python)

---

### 🔑 Variáveis de Ambiente

Crie arquivos `.env` específicos para cada parte da aplicação.

#### 1. Back-end (Flask)

Crie um arquivo **`.env`** na pasta `/backend`:

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `FLASK_DEBUG` | Modo de debug (True/False). | `True` |
| `PORT` | Porta onde o Back-end será executado. | `5001` |

**Exemplo de arquivo `.env` no backend:**

```env
FLASK_DEBUG=True
PORT=5001
```

> **Nota:** A porta padrão é 5001 para evitar conflito com o AirPlay Receiver no macOS (que usa a porta 5000).

#### 2. Front-end (React)

Crie um arquivo **`.env`** na pasta `/frontend` (opcional, pois há valores padrão):

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `REACT_APP_API_URL` | URL base do endpoint do Backend Flask. | `http://localhost:5001` |

**Exemplo de arquivo `.env` no frontend:**

```env
REACT_APP_API_URL=http://localhost:5001
```

---

### 📦 Instalação de Dependências

Clone o repositório e instale as dependências.

1. **Clone o Repositório:**

```bash
git clone <URL_DO_SEU_REPOSITÓRIO>
cd Teste-DTI
```

2. **Instale as Dependências:**

Como o projeto está dividido em frontend e backend, você precisa instalar as dependências separadamente.

#### Front-end (React)

Acesse a pasta do Front-end e instale as dependências do Node.js:

```bash
cd Codigo/frontend
npm install
cd ../.. # Retorna para a raiz
```

#### Back-end (Flask)

Acesse a pasta do Back-end e instale as dependências do Python:

```bash
cd Codigo/backend

# Crie um ambiente virtual
python3 -m venv venv

# Ative o ambiente virtual
# No macOS/Linux:
source venv/bin/activate

# No Windows:
venv\Scripts\activate

# Instale as dependências
pip install -r requirements.txt

cd ../.. # Retorna para a raiz
```

---

### Como Executar a Aplicação

Execute a aplicação em modo de desenvolvimento em **dois terminais separados**.

#### Terminal 1: Back-end (Flask)

Inicie a API do Flask. Certifique-se de que o ambiente virtual está ativado.

```bash
cd Codigo/backend

# Ative o ambiente virtual (se ainda não estiver ativado)
source venv/bin/activate  # macOS/Linux
# ou
venv\Scripts\activate     # Windows

# Execute o servidor
python app.py
```

🚀 *O Back-end estará disponível em **http://localhost:5001**.*

Você verá uma mensagem similar a:
```
 * Running on http://0.0.0.0:5001
 * Debug mode: on
```

---

#### Terminal 2: Front-end (React)

Em um **novo terminal**, inicie o servidor de desenvolvimento do Front-end.

```bash
cd Codigo/frontend

npm start
```

🎨 *O Front-end será aberto automaticamente no navegador em **http://localhost:3000**.*

---

### ⚠️ Importante

- O backend deve estar rodando **antes** de iniciar o frontend
- O backend roda na porta **5001** (5000 é usada pelo AirPlay Receiver no macOS)
- O frontend roda na porta **3000**
- Mantenha ambos os terminais abertos enquanto usar o sistema

---

## 🚀 Deploy

Instruções para deploy em produção.

### 1. Build do Projeto

Execute o build separadamente para os dois artefatos.

```bash
# 1. Build do Front-end (React) - Gera a pasta /build com arquivos estáticos
cd Codigo/frontend
npm run build

# 2. Para o Back-end (Flask), não há build separado necessário.
# O Flask roda diretamente do código-fonte Python.
```

### 2. Configuração do Ambiente de Produção

Defina as variáveis de ambiente no seu provedor (e.g., Heroku, Railway, DigitalOcean, AWS).

> 🔑 **Variáveis Cruciais:**
> - **Backend:** `FLASK_DEBUG=False`, `PORT=<porta-do-provedor>`
> - **Frontend:** `REACT_APP_API_URL=<url-do-backend-em-producao>`

### 3. Execução em Produção

#### Back-end (Flask)

```bash
# No ambiente de produção
cd Codigo/backend
python app.py
```

#### Front-end (React)

O Front-end (arquivos estáticos da pasta `build`) pode ser servido por qualquer servidor web estático:

- **Vercel:** Conecte o repositório e configure as variáveis de ambiente
- **Netlify:** Upload da pasta `build` ou conecte via Git
- **Nginx/Apache:** Configure para servir os arquivos da pasta `build`

**Exemplo com servidor simples (Node.js):**

```bash
npm install -g serve
serve -s Codigo/frontend/build
```

---

## 📂 Estrutura de Pastas

```
Teste-DTI/
├── .gitignore                   # Arquivo de ignorar arquivos e pastas não versionadas
├── README.md                    # Este arquivo de documentação
│
├── Codigo/                      # Código-fonte do projeto
│   │
│   ├── frontend/                # Aplicação React
│   │   ├── .gitignore           # Ignorar node_modules, build, etc.
│   │   ├── package.json         # Dependências e scripts do React
│   │   ├── package-lock.json    # Lock de dependências
│   │   │
│   │   ├── public/              # Arquivos estáticos públicos
│   │   │   └── index.html       # HTML principal
│   │   │
│   │   ├── src/                 # Código-fonte do front-end
│   │   │   ├── components/      # Componentes React reutilizáveis
│   │   │   │   ├── StudentForm.js       # Formulário de cadastro
│   │   │   │   ├── StudentList.js       # Lista de alunos
│   │   │   │   ├── Statistics.js        # Estatísticas da turma
│   │   │   │   ├── Reports.js           # Relatórios
│   │   │   │   └── EditStudentModal.js  # Modal de edição
│   │   │   │
│   │   │   ├── services/        # Serviços de API
│   │   │   │   └── api.js       # Funções de requisição HTTP
│   │   │   │
│   │   │   ├── App.js           # Componente principal
│   │   │   ├── App.css          # Estilos do App
│   │   │   ├── index.js         # Ponto de entrada
│   │   │   └── index.css        # Estilos globais
│   │   │
│   │   └── node_modules/        # Dependências instaladas (não versionado)
│   │
│   └── backend/                 # Aplicação Flask
│       ├── .gitignore           # Ignorar venv, __pycache__, etc.
│       ├── requirements.txt     # Dependências Python
│       ├── app.py               # Aplicação principal Flask
│       │
│       ├── models/              # Modelos de dados
│       │   ├── __init__.py
│       │   └── student.py       # Modelo Student
│       │
│       ├── routes/              # Rotas da API
│       │   ├── __init__.py
│       │   └── students.py      # Endpoints de estudantes
│       │
│       ├── utils/               # Utilitários
│       │   ├── __init__.py
│       │   └── calculations.py  # Funções de cálculo
│       │
│       └── venv/                # Ambiente virtual Python (não versionado)
│
└── docs/                        # Documentação adicional (se houver)
```

---

## 🎥 Demonstração

### 🌐 Aplicação Web

Para melhor visualização, as telas principais estão organizadas lado a lado.

| Tela | Captura de Tela |
| :---: | :---: |
| **Tela Principal (Dashboard)** | **Formulário de Cadastro** |
| <img src="https://via.placeholder.com/400x250/f8f9fa/495057?text=Dashboard+Principal" alt="Tela Principal" width="400"> | <img src="https://via.placeholder.com/400x250/f8f9fa/495057?text=Formulário+Cadastro" alt="Formulário de Cadastro" width="400"> |
| **Lista de Alunos** | **Modal de Edição** |
| <img src="https://via.placeholder.com/400x250/f8f9fa/495057?text=Lista+de+Alunos" alt="Lista de Alunos" width="400"> | <img src="https://via.placeholder.com/400x250/f8f9fa/495057?text=Modal+Edição" alt="Modal de Edição" width="400"> |
| **Estatísticas da Turma** | **Relatórios** |
| <img src="https://via.placeholder.com/400x250/f8f9fa/495057?text=Estatísticas" alt="Estatísticas" width="400"> | <img src="https://via.placeholder.com/400x250/f8f9fa/495057?text=Relatórios" alt="Relatórios" width="400"> |

> **Nota:** As imagens acima são placeholders. Substitua por capturas de tela reais da aplicação.

### 💻 Exemplo de Saída no Terminal

#### 1. Demonstração da API (Exemplo com cURL)

Mostra uma chamada simples para um endpoint da API.

```bash
# Chama o endpoint de listagem de estudantes
curl -X GET 'http://localhost:5001/api/students'
```

**Saída Esperada:**

```json
{
  "students": [
    {
      "name": "João Silva",
      "grades": [7.5, 8.0, 6.5, 9.0, 8.5],
      "attendance": 85,
      "average": 7.9
    },
    {
      "name": "Maria Santos",
      "grades": [6.0, 7.0, 6.5, 7.5, 6.5],
      "attendance": 78,
      "average": 6.7
    }
  ]
}
```

#### 2. Endpoint de Estatísticas

```bash
curl -X GET 'http://localhost:5001/api/students/statistics'
```

**Saída Esperada:**

```json
{
  "class_averages": [6.75, 7.5, 6.5, 8.25, 7.5],
  "general_average": 7.3,
  "total_students": 2
}
```

---

## 🧪 Testes

### Testes Unitários

Para rodar os testes unitários do backend (quando implementados):

```bash
cd Codigo/backend
python -m pytest tests/
```

<<<<<<< HEAD
*Ferramenta recomendada: pytest*
=======




## 📸 Capturas de Tela do Sistema

### 📝 Tela de Cadastro de Aluno
<img width="666" height="545" alt="Captura de Tela 2025-11-19 às 17 35 11" src="https://github.com/user-attachments/assets/469ee231-cf11-4ba4-a2aa-d350ea0a8c1e" />



### 📊 Estatísticas da Turma
<img width="666" height="307" alt="Captura de Tela 2025-11-19 às 17 35 26" src="<img width="1332" height="614" alt="image" src="https://github.com/user-attachments/assets/ff773203-2d62-4553-9853-c1588f18fd2a" />
" />

### 📋 Lista de Alunos
<img width="666" height="467" alt="Captura de Tela 2025-11-19 às 17 35 47" src="https://github.com/user-attachments/assets/af1dd7bc-4734-4d4e-a629-a1e7b248f572" />


### 📝 Editar Aluno
<img width="666" height="489" alt="Captura de Tela 2025-11-19 às 17 35 56" src="https://github.com/user-attachments/assets/b34af3c1-567d-4e56-8fb2-43563ad45638" />

### 📑 Relatórios
<img width="666" height="318" alt="Captura de Tela 2025-11-19 às 17 36 14" src="https://github.com/user-attachments/assets/a8351050-d54a-4d30-beca-79393497deb2" />


## 🔍 Pontos Importantes sobre o Projeto
>>>>>>> 9610e814a4e987b8ae793409bd2ddea835392938

### Testes do Frontend

Para rodar os testes do React (quando implementados):

```bash
cd Codigo/frontend
npm test
```

*Ferramenta utilizada: Jest (incluído no Create React App)*

> **Nota:** Atualmente, os testes não estão implementados. Esta seção serve como referência para futuras implementações.

---

## 🔗 Documentações utilizadas

Liste aqui links para documentação técnica e referências que foram cruciais para o projeto.

* 📖 **Framework (Front-end):** [Documentação Oficial do **React**](https://react.dev/)
* 📖 **Framework (Back-end):** [Documentação Oficial do **Flask**](https://flask.palletsprojects.com/)
* 📖 **Flask-CORS:** [Documentação do Flask-CORS](https://flask-cors.readthedocs.io/)
* 📖 **Python:** [Documentação Oficial do **Python**](https://docs.python.org/3/)
* 📖 **REST API:** [Best Practices for REST API Design](https://restfulapi.net/)
* 📖 **Guia de Estilo:** [Conventional Commits](https://www.conventionalcommits.org/)

---

## 👥 Autores

- **Pedro Duarte** - :octocat: [@seu-usuario-github](https://github.com/seu-usuario-github) | 🔗 [LinkedIn](<Link do LinkedIn>)

> **Nota:** Substitua pelas informações reais do autor do projeto.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto:

1. Faça um `fork` do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
   > **Utilize [Conventional Commits](https://www.conventionalcommits.org/)** para padronizar as mensagens de commit.
4. Faça o `push` para a branch (`git push origin feature/minha-feature`).
5. Abra um **Pull Request (PR)**.

---

## 🙏 Agradecimentos

Gostaria de agradecer às seguintes pessoas e organizações que foram fundamentais para o desenvolvimento deste projeto:

* **DTI Digital** - Pela oportunidade de demonstrar habilidades através deste processo seletivo.

* **Prof. Carlos** - Por representar o usuário final que se beneficiará deste sistema de gestão acadêmica.

* **Comunidade de Desenvolvimento** - Pelos recursos, tutoriais e suporte disponíveis online que facilitaram o desenvolvimento.

---

## 📄 Licença

Este projeto é distribuído sob a **[Licença MIT](LICENSE)**.

Você é livre para usar, modificar e distribuir este software, desde que mantenha o aviso de copyright original.

---
