window.onload=function(){

    // Controle sobre Input type number

    let inputNumber=document.querySelector("#qtd_telas")
    let resultadoTelas=document.querySelector("#resultado_telas")
    let resultadoTelas2=document.querySelector("#resultado_telas2")    
    let btCalcular=document.querySelector("#bt_calcular")

    function calcular(){
        resultadoTelas.innerHTML="Valor sem acréscimo - R$ " + (inputNumber.value * 9.9).toFixed(2).replace(".", ",")
    }

    function calcularPorcentagem(){
        let pct = (inputNumber.value * 9.9) * 0.07
        if (inputNumber.value == 1){
            resultadoTelas2.innerHTML="Não há acréscimo"
        }else{
            resultadoTelas2.innerHTML="Com acréscimo de 7% - R$ " + (inputNumber.value * 9.9 + pct).toFixed(2).replace(".", ",")
        }
    }

    inputNumber.addEventListener('change', calcular) // Calcula o valor ao digitar
    inputNumber.addEventListener('keyup', calcular) // Calcula o valor ao mudar o campo na setinha
    btCalcular.addEventListener('click', calcularPorcentagem) // Calcula o valor com acréscimo ao clicar no botão

    // Controle sobre Select

    let categorias=document.querySelector("#categorias")
    let resultadoCategorias=document.querySelector("#resultado_categorias")
    let boxInfo=document.querySelector("#box_info")

    function exibeInfo(foto){
        let img = new Image()
        img.src=foto
        img.className='w-75 vh-10'
        boxInfo.children.length > 0 ? boxInfo.removeChild(boxInfo.firstChild) : null
        //document.querySelector("#box_info").innerHTML=''
        boxInfo.appendChild(img)
        console.log(boxInfo.firstChild)
    }

    function exibiCategorias(){
        resultadoCategorias.innerHTML=categorias.value
        switch(categorias.selectedIndex){
            case 0 : boxInfo.children.length > 0 ? boxInfo.removeChild(boxInfo.firstChild) : null
            break
            case 1 : exibeInfo('imagens/quem-somos-nos.jpg')
            break
            case 2 : exibeInfo('imagens/cura-quantica.jpg')
            break
            case 3 : exibeInfo('imagens/mick.jpg')
            break
        }
        //resultadoCategorias.innerHTML=categorias.selectedIndex
    }

    categorias.addEventListener('change',exibiCategorias)


    // Objetos Javascript (Propriedade=Variáveis, Métodos=Funções)

    // Exemplo 1 - Declaração direta
    let movel={
        nome:"Sofá",
        lugares:3
    }
    console.log(movel.nome) // Sofá
    console.log(movel.constructor) // Object

    // Exemplo 2 - Recuperação por retorno
    function animal (especie, porte, nome){
        return{
            _especie:especie,
            _porte:porte,
            _nome:nome
        }
    }

    let mike= animal("Yorkshire", "pequeno", "Mike")
    console.log("Meu pet se chama " + mike._nome + " é da raça " + mike._especie + " e seu porte é " + mike._porte)
    console.log(mike.constructor)

    // Exemplo 3 - Herança
    function Produto(nome, tipo){
        this._nome=nome
        this._tipo=tipo
    }

    function MaquinaCafe(cor, voltagem){
        this._cor=cor
        this._voltagem=voltagem
    }

    // nova instância
    let produto_1 = new Produto("Geladeira", "Eletrodoméstico")
    let maquinaCafe_1 = new MaquinaCafe("vermelha", "220V")
    console.log(produto_1 instanceof MaquinaCafe) // false
    console.log(produto_1 instanceof Produto) // true
    console.log(produto_1._nome)
    console.log(produto_1.constructor)

    // Classes em Javascript

    // Exemplo 1
    class Pessoa {
        constructor(nome, idade){
            this._nome = nome
            this._idade = idade
        }
    }

    let funcionario_1 = new Pessoa("Nelio", 44)
    console.log('Meu nome é ' + funcionario_1._nome + " e tenho " + funcionario_1._idade + ' anos')

    // Exemplo 2
    class Carro{ // Executa imediatamente ao utilizar a classe 
        constructor(modelo, ano){
            this._modelo = modelo
            this._ano = ano
        }
        acessorios(){ // Método precisa ser invocado
            let bancoDeCouro = true
            return bancoDeCouro
        }
        km(x){
            return x
        }
    }

    let carro_1 = new Carro('BMW', 2015)
    let km = carro_1.km(80000)
    console.log(carro_1._modelo, carro_1.acessorios() ? "tem banco de couro" : " não tem banco de couro", 'e está com ' + km + 'km rodados')

    // Exemplo 3 - Extends
    class Mercadoria{
        constructor(tipo, modelo){
            this._tipo = tipo
            this._modelo = modelo
        }
        info(){
            return 'Eu vendo ' + this._tipo + ', modelo ' + this._modelo
        }
    }

    class Fabricante extends Mercadoria{
        constructor(nome, tipo, modelo, regiao){
            super(tipo, modelo) // Recupera a informação da classe Mercadoria
            this._nome = nome
            this._regiao = regiao
        }
        apresentacao(){
            return 'Eu sou a empresa ' + this._nome + '. ' + this.info() + '. Estou no ' + this._regiao 
        }
    }

    let empresa = new Fabricante ('Apple','iPhone','12-S Pro','Vale do Silicio')
    console.log(empresa.apresentacao())




    // Sobre o LocalStorage - recuperar informação

    let a=0
    for(key in localStorage){}

    console.log(localStorage.length)

    for(i=0;i<localStorage.length;i++){
        var chave = localStorage.key(i)
        if (chave.includes('chamado')){
            console.log(chave)
            var valor = localStorage.getItem(chave).split(',')
            console.log(valor)
            for(y=0;y<valor.length;y++){
                //console.log(valor[y])
                //console.log("Nome: " + valor[0])
            }
            console.log("Id: " + chave[i])
            console.log("Nome: " + valor[0])
            console.log("Email: " + valor[1])
            console.log("Telefone : " + valor[2])
        }
    }

    //nome da chave
    //chave.indexOf('chamado') == 0 ? console.log(chave) : null
    //valor da chave
    //chave.indexOf('chamado') == 0 ? console.log(localStorage.getItem.split(',').length) : null
}