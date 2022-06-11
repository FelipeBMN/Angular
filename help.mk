# Comandos para iniciar um projeto com angular

## Comando para habilitar criar servidor local

    cd backend
    npm i json-server
    npm init -y

Alterar o arquivo package.json para:

    {
    "dependencies": {
        "json-server": "^0.17.0"
    },
    "name": "backend",
    "version": "1.0.0",
    "main": "index.js",
    "devDependencies": {},
    "scripts": {
        "start": "json-server --watch db.json --port 3001"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": ""
    }

Para rodar o servidor:

    npm start

## Angular

Instalando angular:

    npm i -g @angular/cli 

Criando projeto:

    ng new frontend

Na pasta frontend:

    npm start

Gerando componente:

    ng g c components/template/header

Criando Service:

    ng g s server/product

## ReativeX

Implementar no arquivo app.modelo.ts:

    import { Observable } from "xrjs";