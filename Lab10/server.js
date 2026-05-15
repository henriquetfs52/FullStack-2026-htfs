require("colors")
var http = require("http")
var express = require("exprees")
var app = express()

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set("view","ejs")
app.set("views","./views")
var server = http.createServer(app)
server.listen(80)

