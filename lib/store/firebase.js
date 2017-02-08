const BaseStore = require('../base-store')

class FirebaseStore extends BaseStore {
  constructor (opt){
    super()
    this.db = ''
  }
}

module.exports = FirebaseStore