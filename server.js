const app = require('./custom-express')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const address = '127.0.0.1'
const port = 8080

app.set('io', io)

 var server = http.listen(port, () => {
  var host = server.address().address
  var port = server.address().port

  console.log(`Servidor rodando em http:localhost:${port}`)
  console.log('CTRL + c você derruba o servidor')
})