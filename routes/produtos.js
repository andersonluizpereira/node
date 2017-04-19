var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app){
app.get('/produtos',function(req,res){
 
 var connection = connectionFactory();
 var produtoDao = new ProdutoDao(connection);

produtoDao.lista(function(error,results,fields){
  res.render('produtos/lista',{lista:results});
});
  connection.end();
   
  });

 app.get('/produtos/form',function(req,res){
 res.render('produtos/form')
  });

app.post('/produtos',function(req,res){
 var connection = connectionFactory();
 var produtoDao = new ProdutoDao(connection);

var livro = req.body;
console.log(livro);

// var connection = app.infra.createConnection();
// var produtos = new app.infra.ProdutoDao(connection);
  
  produtoDao.salva(livro,function(exception,result){
    res.render('produtos/salvo');
  });

});

}



