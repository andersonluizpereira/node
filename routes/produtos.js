var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app){
app.get('/produtos',function(req,res){
 
 var connection = connectionFactory();
 var produtoDao = new ProdutoDao(connection);

produtoDao.lista(function(error,results,fields){
  
  res.format({
    html: function(){
      res.render('produtos/lista',{lista:results});
    },
    json: function(){
      res.json(results);
    }
  });

});
  connection.end();
   
});

app.get('/produtos/:id',function(req,res){
 
 var connection = connectionFactory();
 var produtoDao = new ProdutoDao(connection);
 var id =req.params.id;

produtoDao.busca(id,function(error,results,fields){
  
  res.format({
    json: function(){
      res.json(results);
    }
  });

});
  connection.end();
   
});



 app.get('/produtos/form',function(req,res){
 res.render('produtos/form')
  });

app.post('/produtos',function(req,res){
 var connection = connectionFactory();
 var produtoDao = new ProdutoDao(connection);
//  var connection = app.infra.createConnection();
//  var produtoDao = new app.infra.ProdutoDao(connection);

var livro = req.body;

req.assert('titulo','Titulo deve ser preenchido').notEmpty();
req.assert('preco','Preco deve ser preenchido').notEmpty();

var errors = req.validationErrors();

if(errors){
  console.log('há erros na validação');
 res.format({
    html: function(){
      res.status(400).render('produtos/form',{validationErrors:errors});
    },
    json: function(){
      res.status(400).send(errors);
    }
  });


}


console.log(livro);
    
  produtoDao.salva(livro,function(exception,result){
    res.redirect('/produtos');
  });
  connection.end();
});

}



