let canvasgame = document.getElementById("game")
let ctx = canvasgame.getContext("2d");

let rect = {
    x: 10,
    y: 10,
    w: 50,
    h: 50,
    color: "red"
};

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
    if (tecla == "ArrowUp") { rect.y -= vel};
    if (tecla == "ArrowDown") { rect.y += vel};
    if (tecla == "ArrowRight") { rect.x += vel};
    if (tecla == "ArrowLeft") { rect.x -= vel};
})

desenha_rect()