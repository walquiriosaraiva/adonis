# SKELETON COM ADONISJS

## Link da documentação do Adonis

[Adonis](https://docs.adonisjs.com/guides/introduction 'Adonis')

## Executar o skeleton sem Docker

```sh
npm install
node ace serve --watch

http://localhost:3333
```

## Como executar o projeto com Docker?

### Explicando

Para executar a aplicação local você precisa ter apenas o Docker instalado no seu sistema operacional, não há necessidade de instalação de node ou algo do tipo, tudo vai ser
gerenciado pelo container docker com a imagem node:lts-alpine

```sh
docker-compose up build
docker-compose up -d adonis

http://localhost:3333
```
