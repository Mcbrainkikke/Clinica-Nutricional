const mongoose = require('mongoose');
const usuarioSchema = mongoose.Schema({
    tipoDocumento: String,
    numeroDocumento: String,
    correo: String,
    contraseña: String
});

module.exports = mongoose.model('usuarios', usuarioSchema);

//Nota mental, estos modelos se crean por cada coleccion que tengamos en la base de datos