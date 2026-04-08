let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(550,0,50,50);
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "40px Arial"
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento web",300 ,105);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(600,600);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,550,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'green';
ctx.fillRect(550,550,50,50);

ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(0,0);
ctx.lineTo(600,600);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(600,0);
ctx.lineTo(0,600);
ctx.stroke();
ctx.closePath();

let canvas = document.getElementById('canvas2');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 0;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,50,50);
ctx.closePath();
