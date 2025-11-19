# Frontend - Sistema de Gestão de Turma

Frontend desenvolvido em React para o Sistema de Gestão de Turma.

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm build`: Gera a build de produção
- `npm test`: Executa os testes
- `npm eject`: Remove o react-scripts (irreversível)

## Estrutura do Projeto

```
frontend/
├── public/
│   └── index.html       # HTML principal
├── src/
│   ├── App.js           # Componente principal
│   ├── App.css          # Estilos do App
│   ├── index.js         # Ponto de entrada
│   └── index.css        # Estilos globais
├── package.json         # Dependências e scripts
└── README.md            # Este arquivo
```

## Desenvolvimento

O frontend está configurado para fazer requisições ao backend em `http://localhost:5000` através do proxy configurado no `package.json`.

