require('dotenv').config()
var  express = require('express');
var expressValidator = require('express-validator')
var app = express();
var bodyParser = require('body-parser');

module.exports = function() {
  
app.use(express.static('./public'))
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(expressValidator())
require('./routes/produtos')(app);
return app;
};
