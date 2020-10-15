//importar dependencias
const express = require('express');
const path = require('path');//pode evitar alguns erros de \ e /
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criar rota
.get('/', pages.index) 

//ligar o server
server.listen(5500)