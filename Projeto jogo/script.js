let canvas = document.getElementById("Ctitulo")
let ctx = canvas.getContext("2d");

let img = new Image()
    img.src = "Bullet-removebg-preview.png"
x = -150
vel = 6

function desenhar_arma() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, 5, 150, 150);
}

function animar(){
    x+=vel
    
    if (x == canvas.width + img.width){ 
        x=-150
    }
    desenhar_arma()

    requestAnimationFrame(animar)
}

animar()

