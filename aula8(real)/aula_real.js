let retangulo_1 = {
    x: 10,
    y: 10,
    w: 50,
    h: 50,
    color: "red"
};

let retangulo_2 = {
    x: 100,
    y: 100,
    w: 50,
    h: 50,
    color: "blue"
};

let retangulo_3 = {
    x: 100,
    y: 10,
    w: 50,
    h: 50,
    color: "yellow"
}

let  retangulo_4 = {
    x: 10,
    y: 100,
    w: 50,
    h: 50,
    color: "gray"
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function desenha_retangulo(ret){
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = ret.color;
    ctx.fillRect(ret.x,ret.y,ret.w,ret.h)
    ctx.closePath()
}

let mov = 1
function animar(){
    ctx.clearRect(0,0,400,400)
    
    retangulo_1.x = retangulo_1.x + mov
    if (retangulo_1.x == 400-retangulo_1.w){mov = -1}
    if (retangulo_1.x == 0){mov = 1}
    desenha_retangulo(retangulo_1)
    desenha_retangulo(retangulo_2)
    desenha_retangulo(retangulo_3)
    desenha_retangulo(retangulo_4)
    requestAnimationFrame(animar)
}






function animar_2(){
    ctx.clearRect(0,0,400,400)
    
    retangulo_2.y = retangulo_2.y + mov
    if (retangulo_2.y == 400-retangulo_2.w){mov = -1}
    if (retangulo_2.y == 0){mov = 1}
    desenha_retangulo(retangulo_1)
    desenha_retangulo(retangulo_2)
    desenha_retangulo(retangulo_3)
    desenha_retangulo(retangulo_4)
    requestAnimationFrame(animar_2)
    desenha_bola()
}

function desenha_bola(){
    ctx.beginPath();
    img = new Image
    img.src = "Soccerball.png"
    ctx.drawImage(img, 200, 200, 100, 100)
    ctx.closePath();



}

document.addEventListener("keydown", function(evento){
    var tecla = evento.key;
    console.log(tecla);

    var vel = 5;

    if(tecla == "ArrowUp") { retangulo_3.y -= vel};
    if(tecla == "ArrowDown") { retangulo_3.y += vel};
    if(tecla == "ArrowLeft") { retangulo_3.x -= vel};
    if(tecla == "ArrowRight") { retangulo_3.x += vel};
})

document.addEventListener('mousemove', function(evento){
    rect = canvas.getBoundingClientRect();
    var x_mouse = evento.clientX - rect.left;
    var y_mouse = evento.clientY - rect.top;

    console.log(evento.clientX, evento.clientY);
    retangulo_4.x = x_mouse
    retangulo_4.y = y_mouse
})

animar()
animar_2()
desenha_bola()