window.onload=function(){

    // Escopos de variáveis (var, let (não se repete), const(não altera o valor))
    let videos='{"tipo":"Site de Assinatura", "turma":"ImpulsoTec","ano":2022}'

    let videosJSON=JSON.parse(videos) // Conversão de string para objeto

    let conteudo=document.querySelector('#conteudo')
    let h3=document.querySelector("#conteudo h3")
    let p1=document.querySelector("#p1")
    let p2=document.querySelector("#p2")    
    //conteudo.innerHTML=videosJSON.tipo
    h3.innerHTML=videosJSON.tipo
    p1.innerHTML="Turma: " + videosJSON.turma
    p2.innerHTML="Ano: " + videosJSON.ano

    // Exemplo 2 - JSON

    let usuario='{"nome":"Adalberto","idade":34,"livros":["Bill Gates","Terror em Lake City","O Elefante Branco","Capitães de Areia"]}'
    let usuarioJSON=JSON.parse(usuario)
    console.log(usuarioJSON)

    let infoNome=document.querySelector("#infoNome")
    //infoNome.innerHTML=usuarioJSON["nome"] // Outra forma de escrever
    infoNome.innerHTML=usuarioJSON.nome + ", " + usuarioJSON.idade + " anos"
    
    let listaLivros=document.querySelector("#listaLivros")
    //listaLivros.innerHTML='<li>' + usuarioJSON.livros[1] + '</li>' // Lista estática definida manualmente
    //listaLivros.innerHTML+='<li>' + usuarioJSON.livros[2] + '</li>'
    //listaLivros.innerHTML+='<li>' + usuarioJSON.livros[0] + '</li>'

    for(var i=0; i<usuarioJSON.livros.length; i++){ // Lista dinâmica com laço For
        //console.log(usuarioJSON.livros[i])
        listaLivros.innerHTML+='<li>' + usuarioJSON.livros[i] + '</li>'
        livrosFor.innerHTML+= (i+1) + ': ' + usuarioJSON.livros[i] + '<br />' // Solução do professor
    }


}