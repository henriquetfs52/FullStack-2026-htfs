let numeroAtual


    function randomN(){
    let N = Math.floor(Math.random() * 10)
    numeroAtual = N
    document.getElementById("N").innerHTML = N
}


function verificar(){
    let x = document.getElementById("resposta").value
    let certo = numeroAtual * numeroAtual
    let retorno
    if (x == certo){
        retorno = "Sua resposta está certa"
        randomN()
    }
    else{
        retorno = "Sua resposta está errada"
    }
    return retorno
}


function print(){
    let resultado = verificar()
    document.getElementById("resp").innerHTML = resultado

}

randomN()