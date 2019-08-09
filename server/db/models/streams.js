const Sequelize = require('sequelize')
const db = require('../db')

const Streams = db.define('streams', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
})
module.exports = Streams
