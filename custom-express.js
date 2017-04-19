require('dotenv').config()
var  express = require('express');
var app = express();
var bodyParser = require('body-parser');

module.exports = function() {
  
app.use(express.static('./public'))
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
require('./routes/produtos')(app);
return app;
};
