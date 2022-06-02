// Para rodar esse arquivo, instale o express = npm install express
const express = require('express') 
const app = express() // Necessários para rodar o express
const port = 3000

// Gera as urls estáticas das imagens
app.use(express.static('node'))
app.use("/imagens",express.static("imagens"))

// Página Index
app.get("/",(req, res) => {
/*     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end('<h1>Página Home</h1>') */
    res.sendFile(`${__dirname}/template_1.html`)
})

// Página Contato
app.get("/contato",(req, res) => {
    res.sendFile(`${__dirname}/template_1_contato.html`)
})

// Página Sobre
app.get("/sobre",(req, res) => {
    res.sendFile(`${__dirname}/template_1_sobre.html`)
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))