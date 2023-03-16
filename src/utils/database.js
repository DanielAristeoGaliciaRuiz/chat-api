const {Sequelize}=require('sequelize')

const configs=require('../../configs')

const db = new Sequelize(configs.db[configs.api.nodeEnv])

module.exports = db