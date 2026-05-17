// Canvas e contexto

let canvasgame = document.getElementById("game");
let ctx = canvasgame.getContext("2d");


// Variáveis gerais

let atirar = false;
let points = 0;
let fase = 1;
let pausado = false;
let emTransicao = false;


// Jogador

let rect = {
    x: 300,
    y: 220,
    w: 50,
    h: 50,
    vida: 3
};

 // Imagem do jogador
let playerImg = new Image();

playerImg.src = "../Sprites/Player_W.png";

// Tiro

let shoot = {
    x: -100,
    y: -100,
    w: 10,
    h: 10,
    dx: 0,
    dy: 0,
    color: "brown"
};


// Lista de inimigos

let inimigos = [];


// Cria inimigo

function criarInimigo(velocidade){

    let lado = Math.floor(Math.random() * 4);

    let inimigo = {
        x: 0,
        y: 0,
        w: 40,
        h: 40,
        color: "green",
        vel: velocidade
    };

    // Direita
    if(lado == 0){

        inimigo.x = canvasgame.width + 50;
        inimigo.y = Math.random() * canvasgame.height;

    }

    // Cima
    if(lado == 1){

        inimigo.y = -50;
        inimigo.x = Math.random() * canvasgame.width;

    }

    // Esquerda
    if(lado == 2){

        inimigo.x = -50;
        inimigo.y = Math.random() * canvasgame.height;

    }

    // Baixo
    if(lado == 3){

        inimigo.y = canvasgame.height + 50;
        inimigo.x = Math.random() * canvasgame.width;

    }

    inimigos.push(inimigo);
}


// Primeiro inimigo

criarInimigo(1.5);


// Pause

document.addEventListener("keydown", function(event){

    if(event.key == "Escape"){

        pausado = !pausado;

        if(!pausado){
            desenha();
        }
    }

});



// Sistema de tiro

document.addEventListener("keydown", function(tiro){

    let tecla = tiro.key;

    if(atirar == false){

        if(tecla == "ArrowUp"){

            atirar = true;

            shoot.x = rect.x + rect.w/2;
            shoot.y = rect.y + rect.h/2;

            shoot.dx = 0;
            shoot.dy = -1;
        }

        if(tecla == "ArrowDown"){

            atirar = true;

            shoot.x = rect.x + rect.w/2;
            shoot.y = rect.y + rect.h/2;

            shoot.dx = 0;
            shoot.dy = 1;
        }

        if(tecla == "ArrowRight"){

            atirar = true;

            shoot.x = rect.x + rect.w/2;
            shoot.y = rect.y + rect.h/2;

            shoot.dx = 1;
            shoot.dy = 0;
        }

        if(tecla == "ArrowLeft"){

            atirar = true;

            shoot.x = rect.x + rect.w/2;
            shoot.y = rect.y + rect.h/2;

            shoot.dx = -1;
            shoot.dy = 0;
        }

    }

});


// Movimento do jogador

// Movimento do jogador

document.addEventListener("keydown", function(andar){

    let tecla = andar.key;
    let vel = 15;

    // W
    if(tecla == "w"){

        rect.y -= vel;

        playerImg.src = "../Sprites/Player_W.png";
    }

    // S
    if(tecla == "s"){

        rect.y += vel;

        playerImg.src = "../Sprites/Player_S.png";
    }

    // A
    if(tecla == "a"){

        rect.x -= vel;

        playerImg.src = "../Sprites/Player_A.png";
    }

    // D
    if(tecla == "d"){

        rect.x += vel;

        playerImg.src = "../Sprites/Player_D.png";
    }

});

// Mudança de fase

function mudarFase(novaFase){

    emTransicao = true;

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvasgame.width,canvasgame.height);

    ctx.fillStyle = "white";
    ctx.font = "40px Arial";

    ctx.fillText("FASE " + novaFase, 220, 240);

    setTimeout(function(){

        fase = novaFase;

        criarInimigo(1.5 + (fase * 0.2));

        rect.x = 300;
        rect.y = 220;

        points = 0;

        emTransicao = false;

        desenha();

    },1000);

}

function resetarInimigos(){

    for(let inimigo of inimigos){

        let lado = Math.floor(Math.random() * 4);

        // Direita
        if(lado == 0){

            inimigo.x = canvasgame.width + 50;
            inimigo.y = Math.random() * canvasgame.height;

        }

        // Cima
        if(lado == 1){

            inimigo.y = -50;
            inimigo.x = Math.random() * canvasgame.width;

        }

        // Esquerda
        if(lado == 2){

            inimigo.x = -50;
            inimigo.y = Math.random() * canvasgame.height;

        }

        // Baixo
        if(lado == 3){

            inimigo.y = canvasgame.height + 50;
            inimigo.x = Math.random() * canvasgame.width;

        }

    }

}


// Função principal

function desenha(){

    if(pausado || emTransicao){
        return;
    }

    requestAnimationFrame(desenha);


    // Limpa tela

    ctx.clearRect(0,0,canvasgame.width,canvasgame.height);


    // Verifica mudança de fase

    if(points >= 15){

        mudarFase(fase + 1);
        return;
    }


    // Movimento do tiro

    let Svel = 18;

    shoot.x += Svel * shoot.dx;
    shoot.y += Svel * shoot.dy;


    // Remove tiro da tela

    if(
        shoot.x < 0 ||
        shoot.y < 0 ||
        shoot.x > canvasgame.width ||
        shoot.y > canvasgame.height
    ){

        atirar = false;

        shoot.x = -100;
        shoot.y = -100;
    }


    // Limita jogador na tela

    rect.x = Math.max(0, Math.min(rect.x, canvasgame.width - rect.w));
    rect.y = Math.max(0, Math.min(rect.y, canvasgame.height - rect.h));


    // Desenha jogador

    ctx.drawImage(
    playerImg,
    rect.x,
    rect.y,
    rect.w,
    rect.h);


    // Desenha tiro

    ctx.fillStyle = shoot.color;
    ctx.fillRect(shoot.x, shoot.y, shoot.w, shoot.h);


    // Loop dos inimigos

    for(let inimigo of inimigos){

        // Movimento

        if(inimigo.x > rect.x){
            inimigo.x -= inimigo.vel;
        }

        if(inimigo.x < rect.x){
            inimigo.x += inimigo.vel;
        }

        if(inimigo.y > rect.y){
            inimigo.y -= inimigo.vel;
        }

        if(inimigo.y < rect.y){
            inimigo.y += inimigo.vel;
        }


        // Colisão tiro x inimigo

        if(
            shoot.x < inimigo.x + inimigo.w &&
            shoot.x + shoot.w > inimigo.x &&
            shoot.y < inimigo.y + inimigo.h &&
            shoot.y + shoot.h > inimigo.y
        ) {

            points += 1;
            atirar = false;

            shoot.x = -100;
            shoot.y = -100;

            // Respawn

            let lado = Math.floor(Math.random() * 4);

            if(lado == 0){

                inimigo.x = canvasgame.width + 50;
                inimigo.y = Math.random() * canvasgame.height;

            }

            if(lado == 1){

                inimigo.y = -50;
                inimigo.x = Math.random() * canvasgame.width;

            }

            if(lado == 2){

                inimigo.x = -50;
                inimigo.y = Math.random() * canvasgame.height;

            }

            if(lado == 3){

                inimigo.y = canvasgame.height + 50;
                inimigo.x = Math.random() * canvasgame.width;

            }

        }


        // Colisão jogador x inimigo

        if(
            rect.x < inimigo.x + inimigo.w &&
            rect.x + rect.w > inimigo.x &&
            rect.y < inimigo.y + inimigo.h &&
            rect.y + rect.h > inimigo.y
        ){

            points = 0;
            
            rect.vida-=1

            resetarInimigos()

            rect.x = 300;
            rect.y = 220;

        }


        // Desenha inimigo

        ctx.fillStyle = inimigo.color;
        ctx.fillRect(inimigo.x, inimigo.y, inimigo.w, inimigo.h);

    }

     // Reseta quando visa <0
    
     if(rect.vida <= 0){

        rect.vida = 3;

        fase = 1;
        points = 0;

        inimigos = [];

        criarInimigo(1.5);

        rect.x = 300;
        rect.y = 220;
    }


    // HUD

    ctx.fillStyle = "black";
    ctx.font = "20px Monospace";

    ctx.fillText("Pontos: " + points, 500, 30);
    ctx.fillText("Level: " + fase, 20, 30);
    ctx.fillText("Vidas: " + rect.vida, 200, 30);


    // Tela de pause

    if(pausado){

        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0,0,canvasgame.width,canvasgame.height);

        ctx.fillStyle = "white";
        ctx.font = "40px Arial";

        ctx.fillText("PAUSADO", 220, 220);

    }

}


// Inicia o jogo

desenha()