const express = require('express');
const app = express();

//Configurando o EJS com o Express como View engine;
app.set('view engine','ejs');
// Configuração para poder ler arquivos staticos;
app.use(express.static('public'));

app.get('/',function(req,resp){
    //Usamos o rende para poder rederizar o nosso HTML na tela para o usuario;
 resp.render("index");
});

app.get('/perguntar',function(resq,res){
        res.render('perguntar')
})

app.listen(8080,(error)=>{

    if(error){
        console.log('Servidor não foi iniciado com sucesso..');
    }else{
        console.log('Servidor iniciado com sucesso...')
    }

})