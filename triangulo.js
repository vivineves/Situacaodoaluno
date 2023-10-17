const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp = document.querySelector("#outResp1")

//ouvinte
frm = addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB) ||){
      
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return

       if(ladoA ==ladoB &&)
        resp.innerText = `Situação: Sem multa`
    } else if(condutor <= leve){
        resp.innerText = `Situação: Multa leve`
    } else {
        resp.innerText = `Situação: Multa grave`
    }
})