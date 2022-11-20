const form = document.getElementById("novoItem")
const lista = document.getElementById("lista") //criando elemento 'lista' usando o id 
const itens =JSON.parse(localStorage.getItem("itens")) || []  //consultando se o local storage está vazio, se sim, cria um array convertendo de String para Json


itens.forEach(elemento => {         //circulando o array de posição em posição
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {       //captura do evento de envio(submit)
evento.preventDefault()  //para o evento da pagina que não envia o form por padrão

const nome = evento.target.elements['nome']     //captura do que é enviado no array na posição nome
const quantidade = evento.target.elements['quantidade']     //captura do que é enviado no array na posição quantidade
const existe = itens.find(elemento => elemento.nome === nome.value)


const itemAtual = {   //criando um objeto com o chave e parametro
    "nome": nome.value,
    "quantidade": quantidade.value
    
}

if (existe){
    itemAtual.id = existe.id      // se o item existir na lista, atualiza o item de acordo com o id
    atualizaElemento(itemAtual)

    itens[IntersectionObserver.findIndex(elemento => elemento.id ===existe.id)] = itemAtual
}
else{
    itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id +1:0;  //se o item não existir, cria o id e atualiza o array do objeto
    criaElemento(itemAtual) // carregando os campos vazios após a inserção de valores
    itens.push(itemAtual) //insere dados dentro do array
}

localStorage.setItem("itens", JSON.stringify(itens))  //inserindo dados no localstorage convertendo de json para String
 
    nome.value = ""
    quantidade.value = ""

})

function criaElemento(item){ // parametros entre parenteses são as posiçoes do vetor

    const novoItem = document.createElement('li') // criando elemento 'li' para inserção na lista
    novoItem.classList.add("item") // utilizando a classe item como referencia


    const numeroItem = document.createElement('strong')// criando elemento 'strong' para inserção na lista
    numeroItem.innerHTML = item.quantidade // atribuindo valores ao elemento criado
    numeroItem.dataset.id = item.id    //adicionando um ID ao item para uso na atualização da pagina com os dados da lista

   novoItem.appendChild(numeroItem) //atrbuindo valores da const numeroitem
   novoItem.innerHTML += item.nome // atribuindo o valor do vetor nome ao elemento
   novoItem.appendChild(botaoDeleta(item.id))

   lista.appendChild(novoItem) //inserindo o valor de novo item na lista


}

    function atualizaElemento(item) {
        document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade // capturando o id e atualizando o valor de quantidade

}
 function botaoDeleta(id){            //função criando o botão delete na tela do navegador

    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"
    elementoBotao.addEventListener("click", function()  {
        deletaElemento(this.parentNode, id)
    } )

    return elementoBotao
 }

function deletaElemento(tag, id){
    tag.remove()
    itens.splice( itens.findIndex(elemento => elemento.id === id), 1)
    localStorage.setItem("itens", JSON.stringify(itens))  //inserindo dados no localstorage convertendo de json para String
}

