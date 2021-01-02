const Sequelize = require('sequelize');


const sequelize = new Sequelize('node-practice', 'root', 'Krisi0143171864a', {
    dialect: 'mysql',
    host:'localhost'
})

module.exports = sequelize;