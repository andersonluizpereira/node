 var mysql = require('mysql');

 function createConnection(){
     return mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS ||'caelum',
    database: process.env.DB_DATABASE ||'casadocodigo'
  }); 
 };
  module.exports = createConnection;