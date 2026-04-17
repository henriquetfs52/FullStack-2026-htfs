let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// imagem
let imagem = new Image();
imagem.src = "Soccerball.png";

// posição e tamanho
let bola = {
    x: 200,
    y: 200,
    w: 50,
    h: 50
};

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (imagem.complete) {
        ctx.drawImage(imagem, bola.x, bola.y, bola.w, bola.h);
    }

    requestAnimationFrame(desenhar);
}

desenhar();

document.addEventListener('mousemove', function(evento){
    const rect = canvas.getBoundingClientRect();

    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    // centralizar
    x_mouse = x_mouse - bola.w / 2;
    y_mouse = y_mouse - bola.h / 2;

    // limitar
    x_mouse = Math.max(0, Math.min(canvas.width - bola.w, x_mouse));
    y_mouse = Math.max(0, Math.min(canvas.height - bola.h, y_mouse));

    bola.x = x_mouse;
    bola.y = y_mouse;
});