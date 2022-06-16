const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const connection = require('./database/database');
const perguntaModel = require('./database/Perguntas')


connection
    .authenticate()
    .then(() =>{
        console.log('Conexão feita com sucesso');
    })
    .catch((Error) => {
        console.log(Error);
    });
    
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json());

app.get('/',function(req,resp){
 resp.render("index");
});

app.get('/perguntar',function(resq,res){
        res.render('perguntar')
});

app.post('/salvarpergunta',function(req,res){
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send(`Formulario recebido titulo ${titulo} descrição ${descricao}` );
});

app.listen(8080,(error)=>{

    if(error){
        console.log('Servidor não foi iniciado com sucesso..');
    }else{
        console.log('Servidor iniciado com sucesso...')
    }

})