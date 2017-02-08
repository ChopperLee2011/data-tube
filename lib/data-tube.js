const firebase = require('./database/firebase')
const mysql = require('./database/mysql')

const tube = {
  database: {
    firebase,
    mysql
  }
}

module.exports = tube