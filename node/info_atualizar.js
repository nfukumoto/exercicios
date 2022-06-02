const fs = require('fs') // Módulo built in (file system) que permite criar, ler, alterar e excluir um arquivo

fs.appendFile('leiame.txt',' Aula 31/05 Nodejs', function(err){ // appendFile - Método que Atualiza o arquivo
    if (err) throw err
    console.log('Arquivo atualizado!')
})