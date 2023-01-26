const express = require ('express');
const app = express();
const jwt = require('jsonwebtoken');

app.listen(666, function(){
    console.log('Servidor conectado http://127.0.0.1:666')
});

app.get('/', function(req, res){
    res.send('<h1>Servidor en funcionamiento</h1>');
});