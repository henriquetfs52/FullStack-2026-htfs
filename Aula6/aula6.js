
function calcId(){
    let x = document.getElementById("data").value
    if (x < 2026){
        var idade = 2026 - x
    }
    else {
        var idade = "Idade não válida"
    }
    return idade
}

function print(){
    let valor = calcId()
    document.getElementById("resp").innerHTML = valor
}

