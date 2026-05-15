require("colors")
var http = require("http")
var express = require("express")
var app = express()
var bodyParser = require("body-parser");

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set("view engine","ejs")
app.set("views","./views")

var server = http.createServer(app)
server.listen(80)

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri, { useNewUrlParser: true })

var dbo = client.db("lab_10");
var users = dbo.collection("usuarios");
var carros = dbo.collection("carros");
client.connect()

console.log("Servidor rodando".green)

app.post("/cadastrar_usuario", function(req, res){

var dados = {
            nome: req.body.nome,
            senha: req.body.senha
            };
    users.insert(dados, function(err) {

        console.log(err)

        if (err) {

            res.send("Erro ao cadastrar usuario!")

        } else {

            console.log(dados)
            res.render('resp_cadastro', { resposta: "Usuario cadastrado com sucesso!"})
            
        }
    })

})

app.post("/login", function(req,res){
var dados = {
            nome: req.body.nome,
            senha: req.body.senha
        }

users.find(dados).toArray(function(err, items){
    console.log(items)
    if (items.length == 0)  {
        res.render('resp_login', {resposta: "Usuário/senha não encontrado!"})
    }
    else if (err) {
        res.render('resp_login', {resposta: "Erro ao logar usuário!"})
      }
      else {
        res.render('resp_login_correto', {resposta: "Usuário logado com sucesso!"})        
      };
    });
})


app.post("/cadastrar_carros", function(req, res){

    var dados = { 
       marca: req.body.marca,
       modelo: req.body.modelo,
       ano: req.body.ano,
       quantidade: Number(req.body.quantidade)
    };

    carros.insertOne(dados, function(err) {

        console.log(err)

        if (err) {

            res.send("Erro ao cadastrar carro!")

        } else {

            console.log(dados)
            res.render('resp_cadastro_carro', { resposta: "Carro cadastrado com sucesso!"})
            
        }
    })
})

app.get("/app", async function(req, res){

    let carros = await dbo.collection("carros").find().toArray()

    res.render("app", { carros })

})

app.get("/atualizar_carro", function(req, res){

    res.render("atualizar_carro")

})

app.get("/vender_carro", function(req, res){

    res.render("vender_carro")

})

app.post("/update_carro", async function(req, resp) {

    var dados = { 
       marca: req.body.marca,
       modelo: req.body.modelo,
       ano: req.body.ano
    };
    
    var novos_dados = { 
        $set: {
            marca: req.body.new_marca,
            modelo: req.body.new_modelo,
            ano: req.body.new_ano,
            quantidade: Number(req.body.new_quantidade)
        } 
    };

    carros.updateOne(dados, novos_dados, async function (err, result) {

        console.log(result);

        let items = await carros.find().toArray()

        resp.render("app", { carros: items })

    });
});

app.post("/vende_carro", async function(req, resp) {

    var dados = { 
       marca: req.body.marca,
       modelo: req.body.modelo,
       ano: req.body.ano
    };

    var novos_dados = { 
        $inc: {
            quantidade: -1
        } 
    };

    carros.updateOne(dados, novos_dados, async function (err, result) {

        console.log(result);

        let items = await carros.find().toArray()

        resp.render("app", { carros: items })

    });
});

app.post("/remover_carro", async function(req, resp){

    var dados = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano
    };

    carros.deleteOne(dados, async function(err, result){

        console.log(result);

        let items = await carros.find().toArray();

        resp.render("app", { carros: items });

    });

});

app.get("/remover_carro", function(req, res){

    res.render("remover_carro");

});
