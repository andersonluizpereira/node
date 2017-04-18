var  express = require('express');

module.exports = function() {
  var app = express();
app.set('view engine','ejs');
require('./routes/produtos')(app);
return app;
};
