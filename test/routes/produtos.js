var express = require('../../custom-express');
var request = require('supertest')(express);

describe('#ProdutoController', function() {
   it('#listagem de produtos json', function(done){
      request.get('/produtos')
      .set('Accept','application/json')
      .expect('Content-Type',/json/)
      .expect(200,done)

   });

   it('#listagem de produtos html', function(done){
      request.get('/produtos')
      .expect('Content-Type',/html/)
      .expect(200,done)

   });

   it('#cadastro de um produto com tudo preenchido', function(done){
     request.post('/produtos')
     .send({
        titulo:"novo livro",
        preco:20.50,
        descricao:"Livro de teste"

     })
     .expect(204)
     .end(function(err,response){
       done();
     });
     
   });

//
});