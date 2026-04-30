let canvasgame = document.getElementById("game")
let ctx = canvasgame.getContext("2d");
atirar = false

let rect = {
    x: 10,
    y: 10,
    w: 50,
    h: 50,
    color: "red"
};

let shoot = {
    x: -100,
    y: -100,
    w: 10,
    h: 10,
    dx: 0,
    dy: 0,
    color: "blue"
};

document.addEventListener("keydown", function (tiro){
    var tecla = tiro.key
    var vel = 10
    if ((tecla == "ArrowUp") && (atirar==false)) { 
        atirar = true
        shoot.y = rect.y
        shoot.x = rect.x
        shoot.dy = -1
        shoot.dx = 0
        };
    if ((tecla == "ArrowDown")&& (atirar==false)){ 
        atirar = true
        shoot.y = rect.y
        shoot.x = rect.x
        shoot.dy = 1
        shoot.dx = 0
    };
    if ((tecla == "ArrowRight")&& (atirar==false)) { 
        atirar = true
        shoot.y = rect.y
        shoot.x = rect.x
        shoot.dy = 0
        shoot.dx = 1
    };
    if ((tecla == "ArrowLeft")&&(atirar==false)) { 
        atirar = true
        shoot.y = rect.y
        shoot.x = rect.x
        shoot.dy = 0
        shoot.dx = -1;
        
}})

function desenha(){
    var Svel=10
    atirar = false
    shoot.x += Svel * shoot.dx
    shoot.y += Svel * shoot.dy
    ctx.clearRect(0, 0, canvasgame.width, canvasgame.height);
    ctx.fillStyle = shoot.color;
    ctx.fillRect(shoot.x, shoot.y, shoot.w, shoot.h);

    rect.x = Math.max(0, Math.min(rect.x, canvasgame.width - rect.w));
    rect.y = Math.max(0, Math.min(rect.y, canvasgame.height - rect.h));
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

    requestAnimationFrame(desenha);
}
function desenha_rect() {
    ctx.clearRect(0, 0, canvasgame.width, canvasgame.height);
    rect.x = Math.max(0, Math.min(rect.x, canvasgame.width - rect.w));
    rect.y = Math.max(0, Math.min(rect.y, canvasgame.height - rect.h));
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

    requestAnimationFrame(desenha_rect);
}

document.addEventListener("keydown", function(andar){
    var tecla = andar.key;
    var vel = 5
    if (tecla == "w") { rect.y -= vel};
    if (tecla == "s") { rect.y += vel};
    if (tecla == "d") { rect.x += vel};
    if (tecla == "a") { rect.x -= vel};
})

desenha()


