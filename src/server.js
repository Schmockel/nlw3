//importar dependencias
const express = require('express');
const path = require('path');//pode evitar alguns erros de \ e /
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
    //utilizar o body do req
    .use(express.urlencoded({extend: true}))
    //utilizando os arquivos estáticos
   .use(express.static('public'))

    //configurar template engine    
    .set('views', path.join(__dirname, "views"))     
    .set('view engine', 'hbs')

     
     //rotas da aplicação     
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o server
server.listen(5500)