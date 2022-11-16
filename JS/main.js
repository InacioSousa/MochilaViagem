const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {       //captura do evento de envio(submit)
evento.preventDefault()  //para o evento da pagina que não envia o form por padrão
console.log("enviou")
console.log(evento.target.elements["nome"].value)   //captura do que é enviado no array na posição nome
console.log(evento.target.elements["quantidade"].value)    //captura do que é enviado no array na posição quantidade
})