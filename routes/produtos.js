var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app){
app.get('/produtos',function(req,res){
 
 var connection = connectionFactory();
 var produtoDao = new ProdutoDao(connection);

//  connection.query('select * from livros', 
//       function(req,result,fields){
//          res.render('produtos/lista',{lista:result});
//    }
//   );
produtoDao.lista(function(error,results,fields){
  res.render('produtos/lista',{lista:results});
});
  connection.end();
   
  });
}