const form = document.getElementById("novoItem")
const lista = document.getElementById("lista") //criando elemento 'lista' usando o id 

form.addEventListener("submit", (evento) => {       //captura do evento de envio(submit)
evento.preventDefault()  //para o evento da pagina que não envia o form por padrão



criaElemento(evento.target.elements["nome"].value, evento.target.elements["quantidade"].value)   
//captura do que é enviado no array na posição nome
//captura do que é enviado no array na posição quantidade
})

function criaElemento(nome, quantidade){ // parametros entre parenteses são as posiçoes do vetor

    const novoItem = document.createElement('li') // criando elemento 'li' para inserção na lista
    novoItem.classList.add("item") // utilizando a classe item como referencia

    const numeroItem = document.createElement('strong')// criando elemento 'strong' para inserção na lista
    numeroItem.innerHTML = quantidade // atribuindo valores ao elemento criado
   novoItem.appendChild(numeroItem) //atrbuindo valores da const numeroitem
   novoItem.innerHTML += nome // atribuindo o valor do vetor nome ao elemento
   lista.appendChild(novoItem) //inserindo o valor de novo item na lista

   
}