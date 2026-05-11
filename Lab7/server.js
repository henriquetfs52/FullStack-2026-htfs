require("colors")
var http = require("http")
var bodyParser = require("body-parser")
const { error } = require("console")
var express = require("express")
var app = express()

console.log("Servidor rodando..".red)

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80)

app.post("/nomear", function(req,res){

    var nome = req.body.nome    
    console.log(nome)
})

