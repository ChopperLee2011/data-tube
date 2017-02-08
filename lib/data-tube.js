const firebase = require('./database/firebase')
const mysql = require('./database/mysql')

class Tube {

  constructor () {
    this._connection = null
    this._source = null
  }

  connect (conn) {
    this._connection = conn
    return this
  }

  extract ({collection, query}) {
    if (!collection) {
      throw new Error('collection can not be empty')

    }
    this._connection.setCollection(collection).find(query)
      .then((data) => {
        this._source = data
      })
    return this
  }
}

// const tube = {
//   database: {
//     firebase,
//     mysql
//   }
// }

module.exports = Tube