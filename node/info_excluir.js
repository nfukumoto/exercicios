const fs  = require('fs') // Módulo built in (file system) que permite criar, ler, alterar e excluir um arquivo

fs.unlink('leiame_1.txt', function(err){ // unlink - Método que Exclui um arquivo especificado
    if(err) throw err
    console.log('Arquivo excluído com sucesso!')
})