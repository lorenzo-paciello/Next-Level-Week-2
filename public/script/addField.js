//procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)//quando clicar no botao

//executar uma acao
function cloneField() {
    //duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //limpar os campos. Que campos??
    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(function(field){
        //pegar o field do momento e o limpa
        field.value = ""
    })

    //colocar na pagina: onde??
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}