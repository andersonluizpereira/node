require('dotenv').config()
const express = require('express')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const io = require('socket.io')
const app = express()

app.set('view engine', 'ejs')
app.set('io', io)
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(expressValidator())

require('./rotas')(app)

module.exports = app