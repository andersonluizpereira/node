const mysql = require('mysql')

function connectionFactory(host, port, user, password, database) {
  database = process.env.NODE_ENV

if(process.env.NODE_ENV == 'test'){
   database = 'casadocodigo_teste';
   console.log(database);
}
  console.log(database);

    let single_connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: database
  });

if(!single_connection) {
    single_connection = this.single_connection;
  }

  return single_connection
}

module.exports = connectionFactory;