const mysql = require('mysql')

function connectionFactory(host, port, user, password, database) {
  database = process.env.NODE_ENV

if(process.env.NODE_ENV == 'test'){
   database = DB_DATABASE_TEST;
}
  console.log(database);

    let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: database
  });

  return connection
}

module.exports = connectionFactory;