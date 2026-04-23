let x = Math.floor(Math.random() * 100)

function verificar(){
    let y = document.getElementById("numero").value
    if (x == y){
        document.getElementById("resp").style.color = "green"
        return y
    }
    if (x>y){
        let z = "o número é maior que " + y
        document.getElementById("resp").style.color = "red"
        return z
    }
    if (x<y){
        let z = "o numero é menor que " + y
        document.getElementById("resp").style.color = "red"
        return z
    }
}


function print(){
    let y = document.getElementById("numero").value
    document.getElementById("resp").innerHTML = verificar()
    if (x>y){
        document.getElementById("menores").innerHTML += " " +y

    }
    if (x<y){
        let z = "o numero é menor que " + y
        document.getElementById("maiores").innerHTML += " " +y

    }
}