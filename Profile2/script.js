var canvas = document.getElementById("titulo")
var ctx = canvas.getContext("2d");

let img = new Image()
    img.src = "Luma.png"

    x = 0
    vel = 2
function desenha_luma() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, 25, 100, 100);
}

function animar() {
    x += vel;

    if (x >= 1160) vel = -2;
    if (x <= 0) vel = 2;

    desenha_luma();
    requestAnimationFrame(animar);
}
desenha_luma()
animar()