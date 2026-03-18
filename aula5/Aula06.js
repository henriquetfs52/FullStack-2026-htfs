function mensagem(){
    alert("Ola")
}

mensagem

function soma(a, b){
    return a + b
}

function mult(a, b){
    return a * b
}



function exemplo3(){
    let a = parseInt(document.getElementById("In_1_ex3").value);
    let b = parseInt(document.getElementById("In_2_ex3").value);

    let resp = soma(a, b);

    document.getElementById("resp_ex3").innerHTML = resp
}
function exemplo4(){
    let a = parseInt(document.getElementById("In_1_ex4").value);
    let b = parseInt(document.getElementById("In_2_ex4").value);
    let resp = 0
    if (a<0 ||  b<0){resp = soma(a, b)}
    else{
        resp = mult(a, b);
    }
    

    document.getElementById("resp_ex4").innerHTML = resp
}