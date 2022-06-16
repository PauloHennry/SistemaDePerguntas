const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas','root','88280088',{
    host:  'localhost',
    dialect: 'mysql'
})

module.exports = connection;

