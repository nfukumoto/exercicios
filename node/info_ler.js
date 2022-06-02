const fs = require('fs') // Módulo built in (file system) que permite criar, ler, alterar e excluir um arquivo

fs.readFile('leiame.txt','utf-8',(err,data) => { // readFile - Método que Lê o arquivo mencionado
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})