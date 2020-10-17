//importar dependencias/pacotes/bibliotecas do express
const express = require("express")

//importa o path do node que auxilia no caminho de direorios
const path = require("path")

const pages = require("./pages.js")

//iniciando o express
const server = express()

//chama variável server
server

  //utilizar body da requisição
  .use(express.urlencoded({ extended: true }))

  //pede pro express utilizar os arquivos estáticos (html, css, etc)
  .use(express.static("public"))

  //configuração do template engine (hbs)
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //criar rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage)

//ligar o servidor
server.listen(5500)









/* ----- ANOTAÇÕES ------ */



// CONCEITOS

// get = pedir algo

// post = salvar algo

// Template Engine (Motor de Template) = usado para transformar o conteúdo estático (html, css) em conteúdo dinâmico, possibilitando executar ações e armazenar variáveis em html



// PATH

// path é nativo do node e facilita a inserção de caminhos no script

// /exemplo de path: 
//  return response.sendFile(path.join(__dirname, 'views', 'index.html'))

//  __dirname(que é a src) 'views' ao invés de __dirname/views que pode causar erros no windows por causa da \





// INSTALAÇÃO DE DEPENDÊNCIAS

// npm = node packge manager

// express = abstração de rotas

// nodemon = para iniciar e reiniciar o servidor com mais facilidade, vide linha start do package.json

// hbs = handlebars, template engines, pra usar variaveis e codigos no html


// COMANDOS


