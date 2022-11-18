const form = document.getElementById("novoItem")
const lista = document.getElementById("lista") //criando elemento 'lista' usando o id 
const itens =JSON.parse(localStorage.getItem("itens")) || []  //consultando se o local storage está vazio, se sim, cria um array convertendo de String para Json


itens.forEach(elemento => {         //circulando o array de posição em posição
    console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento) => {       //captura do evento de envio(submit)
evento.preventDefault()  //para o evento da pagina que não envia o form por padrão

const nome = evento.target.elements['nome']     //captura do que é enviado no array na posição nome
    const quantidade = evento.target.elements['quantidade']     //captura do que é enviado no array na posição quantidade


    criaElemento(nome.value, quantidade.value) // carregando os campos vazios após a inserção de valores 
    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade){ // parametros entre parenteses são as posiçoes do vetor

    const novoItem = document.createElement('li') // criando elemento 'li' para inserção na lista
    novoItem.classList.add("item") // utilizando a classe item como referencia


    const numeroItem = document.createElement('strong')// criando elemento 'strong' para inserção na lista
    numeroItem.innerHTML = quantidade // atribuindo valores ao elemento criado

   novoItem.appendChild(numeroItem) //atrbuindo valores da const numeroitem
   novoItem.innerHTML += nome // atribuindo o valor do vetor nome ao elemento

   lista.appendChild(novoItem) //inserindo o valor de novo item na lista

   const itemAtual = {   //criando um objeto com o chave e parametro
    "nome": nome,
    "quantidade": quantidade
}
itens.push(itemAtual) //insere dados dentro do array

localStorage.setItem("itens", JSON.stringify(itens))  //inserindo dados no localstorage convertendo de json para String

}

   
