const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

//Importacion de rutas
const rutasUsuarios = require('./routes/routes_usuarios');
const rutasCitas = require('./routes/routes_citas');

app.use(bodyParser.json());

//Conexion a la base de datos
require('./conexion');

app.use(rutasUsuarios, rutasCitas);

//Inicializar el servidor
const PORT = 666;
app.listen(PORT, () =>{
    console.log('Servidor corriendo en el puerto http://localhost:666');
});

app.get('/', 
    function (req, res)
    {
        res.send('<h2>Servidor ok</h2>');
    }
);