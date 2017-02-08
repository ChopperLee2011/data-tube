const BaseStore = require('../base-store')

class MysqlStore extends BaseStore {
  constructor (opt) {
    super()
    this.db = ''
  }
}

module.exports = MysqlStore