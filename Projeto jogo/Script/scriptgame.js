let canvasgame = document.getElementById("game")
let ctx = canvasgame.getContext("2d");
atirar = false
points = 0

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

let inimigo = {
    x: 100,
    y: 400,
    w: 40,
    h: 40,
    color: "green"
}

document.addEventListener("keydown", function (tiro){
    var tecla = tiro.key

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
    var Svel=18
    var Inimigo1vel = 1.5
    if ((shoot.x < 0) || (shoot.y < 0) || (shoot.x > canvasgame.width) || (shoot.y > canvasgame.height))
    {atirar = false}

    if(
    shoot.x < inimigo.x + inimigo.w &&
    shoot.x + shoot.w > inimigo.x &&
    shoot.y < inimigo.y + inimigo.h &&
    shoot.y + shoot.h > inimigo.y
    )

        
    {
        let lado = Math.floor(Math.random()*4)
        if (lado== 0) //Cima
        {
            inimigo.x = canvasgame.width + 50
            inimigo.y = Math.random()*canvasgame.height
        }
        if (lado== 1) //Cima
        {
            inimigo.y = - 50
            inimigo.x = Math.random()*canvasgame.width
        }
        if (lado== 2) //Esquerda
        {
            inimigo.x = - 50
            inimigo.y = Math.random()*canvasgame.height
        }
        if (lado==3)//Baixo
        {
            inimigo.y = canvasgame.width + 50
            inimigo.x = Math.random()*canvasgame.width
        }

        points +=1
        atirar = false;
    }

    if(
    rect.x < inimigo.x + inimigo.w &&
    rect.x + rect.w > inimigo.x &&
    rect.y < inimigo.y + inimigo.h &&
    rect.y + rect.h > inimigo.y
    )

    {
        points =0
        rect.x = 300
        rect.y = 220
        inimigo.x = Math.floor(Math.random() *-600)
        inimigo.y = Math.floor(Math.random() *-400)
    }

    if (inimigo.x > rect.x)
    {
        inimigo.x -= Inimigo1vel
    }

    if (inimigo.x < rect.x)
    {
        inimigo.x += Inimigo1vel
    }

    if (inimigo.y > rect.y)
    {
        inimigo.y -= Inimigo1vel
    }

    if (inimigo.y < rect.y)
    {
        inimigo.y += Inimigo1vel
    }



    shoot.x += Svel * shoot.dx
    shoot.y += Svel * shoot.dy
    
    ctx.clearRect(0, 0, canvasgame.width, canvasgame.height);
    ctx.fillStyle = shoot.color;
    ctx.fillRect(shoot.x, shoot.y, shoot.w, shoot.h);

    rect.x = Math.max(0, Math.min(rect.x, canvasgame.width - rect.w));
    rect.y = Math.max(0, Math.min(rect.y, canvasgame.height - rect.h));
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

    ctx.fillStyle = inimigo.color;
    ctx.fillRect(inimigo.x, inimigo.y, inimigo.w, inimigo.h);

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';
    ctx.font = "20px Monospace"
    
    ctx.fillText("Pontos: " + points,530,30);
    ctx.closePath();

    requestAnimationFrame(desenha);
}



document.addEventListener("keydown", function(andar){
    var tecla = andar.key;
    var vel = 8
    if (tecla == "w") { rect.y -= vel};
    if (tecla == "s") { rect.y += vel};
    if (tecla == "d") { rect.x += vel};
    if (tecla == "a") { rect.x -= vel};
})



desenha()


