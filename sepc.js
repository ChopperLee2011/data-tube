const DataTube = require('./')
const handler = require('./lib/handler')
const config = require('./config')

// tube.fromStore = tube.database('firebase')(config.firebase)
// tube.toStore = tube.database('mysql')(config.mysql)

const query = '' // sql format ?
const tube = new DataTube()

tube
  .connect({type: 'firebase', config: config.firebase})
  .extract({collection: 'appointments', query})
  // .toFile(false)
  .transform(handler)
  .connect({type: 'mysql', config: config.mysql})
  .load({collection: 'joeProblems'})