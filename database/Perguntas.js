const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type:Sequelize.TEXT,
        alloeNull: false
    }
});

Pergunta.sync({force: false}).then(() =>{
    console.log('Tabela criada com sucess!!')
})
