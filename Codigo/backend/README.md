# Backend - Sistema de Gestão de Turma

Backend desenvolvido em Python com Flask.

## Instalação

1. Crie um ambiente virtual:
```bash
python3 -m venv venv
```

2. Ative o ambiente virtual:
```bash
# No macOS/Linux:
source venv/bin/activate

# No Windows:
venv\Scripts\activate
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Crie um arquivo `.env` baseado no `.env.example`:
```bash
cp .env.example .env
```

## Execução

```bash
python app.py
```

A API estará disponível em `http://localhost:5001`

> **Nota**: A porta padrão é 5001 para evitar conflito com o AirPlay Receiver no macOS (que usa a porta 5000). Você pode alterar a porta definindo a variável de ambiente `PORT` no arquivo `.env`.

## Estrutura do Projeto

```
backend/
├── app.py              # Aplicação principal Flask
├── models/             # Modelos de dados
│   └── student.py      # Modelo de estudante
├── routes/             # Rotas da API
│   └── students.py     # Rotas de estudantes
├── utils/              # Utilitários
│   └── calculations.py # Funções de cálculo
└── requirements.txt    # Dependências Python
```

