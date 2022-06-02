const fs = require('fs') // Módulo built in (file system) que permite criar, ler, alterar e excluir um arquivo

fs.writeFile('leiame_1.txt', 'Aula 31/05 Nodejs', function(err){ // writeFile - Método que Cria um arquivo com um conteúdo
    if(err) throw err
    console.log('Arquivo criado')
})