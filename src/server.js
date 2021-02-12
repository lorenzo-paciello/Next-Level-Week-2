/* Toda vez q fizer uma mudanca no servidor o mesmo tem q ser reiniciado */
/* npm install nodemon -D -> servidor reinicia automaticamente quando ha mudancas. Eh usado somente pra quem esta desenvolvendo */



/* Srvidor */
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

/* Inicio e configuracao do servidor */
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) /* Tudo o q é '.use()' eh uma configuracao do servidor */
//rotas de aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
/* Start do servidor */
.listen(5500)/* para pegar uma dependencia. Retorna o parametro e comeca a rodar o servidor */
                                 /* 'node src/server.js' para rodar nesse caso. 
                                    'npm run dev' para rodar com o nodemon*/
