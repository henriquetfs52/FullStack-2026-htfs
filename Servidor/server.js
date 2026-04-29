require("colors")
var http = require("http")
var express = require("express")
var bodyParser = require("body-parser");


var app = express();
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80)

console.log("Servidor rodando 67".rainbow)

app.get("/", function(req, res){
    res.redirect("Aula")
})

app.get("/inicio", function(req, res){
    var text = req.query.text;
    var number = req.query.number;
    var color = req.query.color;
    
    console.log(text, number, color)
    console.log("Requisiçao feita por GET")
})

app.post("/inicio", function(req,res){
    var text = req.body.text;
    var number = req.body.number;
    var color = req.body.color;
    console.log(text, number, color)
    console.log("requisiçao feita por POST")
})

app.post("/cadastro", function(req,res){
    var nome = req.body.nome
    var login = req.body.login
    var senha = req.body.senha

    console.log(nome, login, senha)

    res.render("respostas.ejs", 
        {resposta: "Usuario cadastrado com sucesso"})
})

app.get("/for", function(req,res){
    var qtde = req.query.qtde
    res.render("exemplo_for.ejs",{qtde})
})