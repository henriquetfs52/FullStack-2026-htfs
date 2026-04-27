
function quadrado(){
    let x = document.getElementById("numero").value
    x = x*x
    return x
}

function print(){
    let resultado = quadrado()
    document.getElementById("resp").innerHTML = "A resposta é:" +   resultado

}

