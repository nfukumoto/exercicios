window.onload=function(){

    let lista={
        nome:'Lista de Tarefas',

        imprimeTitulo:function(el, titulo){
            el.innerHTML=titulo
        },

        estiloLista:function(el, corDaBorda){
            el.style.borderWidth='1px'
            el.style.borderStyle='solid'
            el.style.borderColor=corDaBorda
        },

        gravarLista:function(el, key){
            localStorage.setItem(key, el.innerHTML)
        },

        imprimeLista:function(el, lista){
            el.innerHTML=lista
        }
    }

    // console.log(lista.nome)

    // Imprime o nome da lista em tela.
    lista.imprimeTitulo(document.querySelector('#lista1 h2'),"Lista de Compras")
    lista.imprimeTitulo(document.querySelector('#lista2 h2'),"Lista de Viagem")

    // Altera a cor da borda da lista
    lista.estiloLista(document.querySelector('#tarefas_l1'),'magenta')
    lista.estiloLista(document.querySelector('#tarefas_l2'),'blue')

    // Grava a lista1 em locaStorage
    document.querySelector('#bt_l1').onclick=function(){
        lista.gravarLista(document.querySelector('#tarefas_l1'),'lista_l1')
    }
    // Grava a lista2 em locaStorage   
    document.querySelector('#bt_l2').onclick=function(){
        lista.gravarLista(document.querySelector('#tarefas_l2'),'lista_l2')
    }

    // Imprime a lista l1, caso exista
    if(localStorage.lista_l1){
        lista.imprimeLista(document.querySelector('#tarefas_l1'), localStorage.getItem('lista_l1'))
    }
    // Imprime a lista l2, caso exista
    if(localStorage.lista_l2){
        lista.imprimeLista(document.querySelector('#tarefas_l2'), localStorage.getItem('lista_l2'))
    }
}