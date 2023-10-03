// Cria referência ao form e elementos de resposta do programa 
const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Cria um ouvinte
form.addEventListener("submit", (e) =>{
    e.preventDefault() //evitao envio do form

    const nome = form.inNome.value // obtém o nome
    const nota1 = Number (form.inNota1.value) // obtém a primeira nota
    const nota2 = Number (form.inNota2.value) // obtém a segundaa nota
    const media = (nota1 + nota2) /2 // média das notas
    resp1.innerText = `Média das notas ${media.toFixed(2)}`
     
// Cria as condicionais 
if(media >= 7) {
    resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
    resp2.style.color = "blue"
    } else if (media >=4) {
    resp2.innerText = `Atenção ${nome}! Você está de exame`
    resp2.style.color = "green"
    } else{
    resp2.innerText = `Ops ${nome}! Você foi reprovado(a)`
    resp2.style.color = "red"
    }
})