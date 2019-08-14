const Sequelize = require('sequelize')
const db = require('../db')

const Streams = db.define('streams', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  userId: {
    type: Sequelize.INTEGER
  }
})
module.exports = Streams
