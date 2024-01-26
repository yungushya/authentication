const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'qwerty123',
    database: 'authentication'
})

module.exports = sequelize