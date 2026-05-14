require ("colors")
var http = require("http")
var express = require("express")
var app = express()
var bodyParser = require("body-parser");


app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');


var server = http.createServer(app)
server.listen(80)

console.log("Servidor Rodando".green)


var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri, { useNewUrlParser: true })

var dbo = client.db("lab_8");
var usuarios = dbo.collection("posts");
client.connect()


app.post("/cadastrar_postagem", function(req, res){

    var data = { 
       titulo: req.body.titulo,
       resumo: req.body.resumo,
       conteudo: req.body.conteudo
    };

    usuarios.insertOne(data, function(err) {

        console.log(err)

        if (err) {

            console.log(err)

        } else {

            res.render('blog')
        }
    })
})

app.get("/blog", function(req, res){

    usuarios.find().toArray(function(err, items){

        if(err){

            console.log(err)

        } else {

            res.render("blog", {
                posts: items
            })
        }
    })
})