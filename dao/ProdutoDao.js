function ProdutoDao(connection) {
  this._connection = connection
}

ProdutoDao.prototype.exclui = function(id,callback) {
 // console.log('det :' +id);
  this._connection.query('delete  FROM livros where id = '+id, callback)
}

ProdutoDao.prototype.edita = function(id,callback) {
 // console.log('det :' +id);
  this._connection.query('SELECT * FROM livros where id = '+id, callback)
}

ProdutoDao.prototype.detalhe = function(id,callback) {
//  console.log('det :' +id);
  this._connection.query('SELECT * FROM livros where id = '+id, callback)
}

ProdutoDao.prototype.listaTodos = function(callback) {
  this._connection.query('SELECT * FROM livros', callback)
}

ProdutoDao.prototype.salvar = function(livro, callback) {
  this._connection.query('INSERT INTO livros SET ?', livro, callback)
  
}

ProdutoDao.prototype.alterar = function(_data,callback) {
  this._connection.query('UPDATE livros SET titulo=?, descricao = ?,preco = ? where id =?',[ _data.titulo, _data.descricao, _data.preco,_data.id], callback)
  
}


module.exports = ProdutoDao