const tube = require('./lib/data-tube')
const FirebaseStore = require('./lib/store/firebase')
const MysqlStore = require('./lib/store/mysql')
const MemoryStore = require('./lib/base-store')

// module.exports = tube

module.exports.Store = type => {

  switch(type){
    case 'in-memory':
      return MemoryStore
    case 'mysql':
      return MysqlStore
    case 'firebase':
      return FirebaseStore
    default:
      return MemoryStore
  }
}

