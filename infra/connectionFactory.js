 var mysql = require('mysql');
 var database = process.env.DB_DATABASE;

if(process.env.NODE_ENV == 'test'){
   database = 'casadocodigo_teste';
}

 function createConnection(){
     return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: database
  }); 
 };
  module.exports = createConnection;