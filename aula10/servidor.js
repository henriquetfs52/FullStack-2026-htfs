1// inclui o módulo http
2 var http = require('http');
3// inclui o módulo express
4 var express = require('express' ) ;
5
6 // cria a variável app, pela qual acessaremos
7// os métodos / funções existentes no framework
8// express
9 var app = express () ;
10
11// método use() utilizado para definir em qual
12// pasta estará o conteúdo estático
13 app.use(express.static('./public'));
14
15 // cria o servidor
16 var server = http.createServer(app);
17
18// define o número da porta que o servidor ouvirá
19 server.listen(3000);
20
21// mensagem exibida no console para debug
22 console. log("servidor rodando. .. ") ;