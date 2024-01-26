const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: { type: DataTypes.STRING, defaultValue: 'user'}
})



module.exports = { User }
