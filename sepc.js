const tube = require('./')
const handler = require('./lib/handler')
const config = require('./config')

tube.fromStore = tube.database('firebase')(config.firebase)
tube.toDB = tube.database('mysql')(config.mysql)

const query = '' // sql format ?
tube
  .extract(this.formDB, query)
  .toFile()
  .transform(handler)
  .load(this.toDB)