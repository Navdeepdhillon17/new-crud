const pgp = require('pg-promise')()

const cnx ={
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'root',
    database:'sql_project'
}

module.exports = pgp(cnx)