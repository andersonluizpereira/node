const ProdutoController =  require('./controller/ProdutoController')
const IndexController = require('./controller/IndexController')


module.exports = function (app) {
  app.get('/', IndexController.index)
  app.get('/produtos/detalhe/:id', ProdutoController.detalhe)
  app.get('/produtos/editar/:id', ProdutoController.edita)
  app.get('/produtos/excluir/:id', ProdutoController.exclui)
  app.get('/produtos', ProdutoController.listaTodos)
  app.post('/produtos', ProdutoController.salva)
  app.put('/produtos', ProdutoController.alterar)
  app.get('/produtos/form', ProdutoController.form)

}