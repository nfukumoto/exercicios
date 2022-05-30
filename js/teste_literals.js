// Literals

// Sem Literals
let nome = "Richard"
let mensagem = "Olá, eu sou " + nome
console.log(mensagem)

// Exemplo 01
let mensagem2 = `Olá ${nome}`
console.log(mensagem2)

// Exemplo 02
let a = 10
let b = 15
let calculo = `O valor total é ${2 * (a+b)}`
console.log(calculo)

// Exemplo 03
function info(){
    return 'Hoje é segunda-feira'
}
let infoSemana = `Salve! ${info()}. Bora codar!`
console.log(infoSemana)

// Exemplo 04
// Date - getDate() [0-6] 0=Domingo 6=Sabado
// getMonth() [0-11] 0=Janeiro 11=Dezembro
// getDate() - Dia de hoje
// getHours() getMinutes() getSeconds() - Hora, minuto e segundo atuais
// getFullYear() - Ano todo
let tempo = new Date()
let diaDaSemana=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
let mesDoAno=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

function infoParam(dia){
    return `Hoje é ${dia}`
}

let infoSemanaParam = `Salve! ${infoParam('terça-feira')}.`
console.log(infoSemanaParam)
console.log(diaDaSemana[tempo.getDay()])

// Formato data exemplo 01
let saudacao = `Hoje é: ${diaDaSemana[tempo.getDay()]}, ${tempo.getDate()} de ${mesDoAno[tempo.getMonth()]} de ${tempo.getFullYear()}`
document.querySelector("#p1").innerHTML = saudacao

// Formato data exemplo 02
function relogio(){
    let tempo_1 = new Date()
    let hora = tempo_1.getHours()
    let minutos = tempo_1.getMinutes()
    let segundos = tempo_1.getSeconds()
    hora < 10 ? hora = `0${hora}` : null
    minutos < 10 ? minutos = `0${minutos}` : null
    segundos < 10 ? segundos = `0${segundos}` : null
    console.log(hora, minutos, segundos)
    document.querySelector("#p2").innerHTML = `Hora: ${hora}:${minutos}:${segundos}`
}
relogio()

/* let tempo_intervalo = setInterval(function(){
    relogio()
},1000) */

//let tempo_intervalo = setInterval(relogio,1000)

// Exemplo 05
let pessoa={
    nome: "Tom Hanks"
}
let msgPessoa = `${pessoa.nome.toUpperCase()}, ator de cinema`
console.log(msgPessoa)


// ARROW Functions

let treinamento = function(){
    return "Javascript Back End!"
}

let treinamento_1 = () => {
    return "Node Js!"
}
console.log(treinamento())

let calculo_1 = (a, b) => a/b * 100
console.log(calculo_1(10,5))

// Sobre o THIS (Quando usado function tradicional o repasse é imediato)
let viagem_0 = function(){
document.querySelector("#p3").innerHTML += `Vou para o México, este evento foi dispara por: ${this}<br />`
}

// Sobre o THIS (Quando for arrow function não reconhece o elemento do clique (this) de imediato)
let viagem = (el) => {
document.querySelector("#p3").innerHTML += `Vou para o México, este evento foi disparado por: ${el}<br />`
}

window.addEventListener("load", viagem(this))
document.querySelector("#bt_teste").addEventListener("click", viagem_0)
document.querySelector("#bt_teste").onclick = function(){viagem(this.id)}