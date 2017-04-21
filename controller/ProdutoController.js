const connectionFactory = require('../infra/connectionFactory')
const ProdutoDao = require('../dao/ProdutoDao')

function Connection(){
     let connection = connectionFactory()
     let produtoDao = new ProdutoDao(connection)
    return produtoDao
}

 
class ProdutoController {
  constructor() {
    console.log('Funfou');
  }


exclui(req, res) {
    let produtoDao =  Connection()
    let salvo = req.query.salvo
    let id =  req.params.id
   produtoDao.exclui(id,function(err,result, fields) {
     
      res.format({
        html : () => {
           res.redirect('/produtos?salvo=true')
        },
        json : () => {
          res.json(result)
        }
      })

    })
  
  }

edita(req, res) {
   let produtoDao =  Connection()
    let salvo = req.query.salvo
    let id =  req.params.id
    produtoDao.edita(id,function(err,result, fields) {
      
      var livro = {livros : result}
      
      res.format({
        html : () => {
          res.render('produtos/altera', livro)
        },
        json : () => {
          res.json(result)
        }
      })
    })

    
  }


detalhe(req, res) {
    let produtoDao =  Connection()
    let salvo = req.query.salvo
    let id =  req.params.id
    produtoDao.detalhe(id,function(err,result, fields) {
      
      var livro = {livros : result}
     // console.log(livro)
      
      res.format({
        html : () => {
          res.render('produtos/detalhe', livro)
        },
        json : () => {
          res.json(result)
        }
      })
    })
    
  }



  listaTodos(req, res) {
    
    let produtoDao =  Connection()
    let salvo = req.query.salvo

    produtoDao.listaTodos(function(err, result, fields) {
      res.format({
        html : () => {
          res.render('produtos/lista', {livros : result, salvo: salvo})
        },
        json : () => {
          res.json(result)
        }
      })
    })
    
  }

  salva(req, res) {
    let produtoDao =  Connection()
    let livro = req.body
    let err = false
   
    req.assert('titulo', 'Título deve ser preenchido').notEmpty()
    err = req.validationErrors()

    if (err) {
      res.render('produtos/form', {validationErrors : err})
    }

    if(livro.id==0 || livro==undefined){

    produtoDao.salvar(livro, function(err, result, fields) {
      res.redirect('/produtos?salvo=true')
    })
    }
    else{

        produtoDao.alterar(livro, function(err, result, fields) {
      res.redirect('/produtos')
    })
    }

    
  }

alterar(req, res) {

    let produtoDao =  Connection()
    let livro = req.body
    let err = false

    req.assert('titulo', 'Título deve ser preenchido').notEmpty()
    err = req.validationErrors()

    produtoDao.alterar(livro, function(err, result, fields) {
      res.redirect('/produtos')
    })
  }


  form(req, res) {
    res.render('produtos/form')
  }
}

module.exports = new ProdutoController()