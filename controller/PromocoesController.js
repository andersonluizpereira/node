const connection = require('../infra/connectionFactory')()
const ProdutoDao = require('../dao/ProdutoDao')
const produtoDao = new ProdutoDao(connection)

class PromocoesController {
  form(req, res) {
    produtoDao.listaTodos((err, result, fields) => {
      res.render('promocoes/form', {livros : result})
    })
  }

  salvaEDispara(app, req, res) {
    let promocao = req.body
    
    app.get('io').emit('novaPromocao', promocao)

    res.redirect('/promocoes/form')
  }
}

module.exports = new PromocoesController()