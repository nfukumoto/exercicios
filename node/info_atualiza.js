const fs = require('fs')

fs.appendFile('info.txt',' Tomem bastante água!', function(err){
    if (err) throw err
    console.log('Arquivo atualizado!')
})