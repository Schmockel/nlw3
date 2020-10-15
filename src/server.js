//importar dependencias
const express = require('express');
const path = require('path');//pode evitar alguns erros de \ e /

//iniciando o express
const server = express();
server
//utilizando os arquivos estáticos
.use(express.static('public'))
//criar rota
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//ligar o server
server.listen(5500)