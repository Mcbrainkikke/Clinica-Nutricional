const mongoose = require('mongoose');
const usuarioSchema = mongoose.Schema({
    tipoDocumento: String,
    numeroDocumento: String,
    correo: String,
    contraseña: String
});

//metodo para validar contraseña
usuarioSchema.methods.validarContraseña =  function (contraseña) {
    return this.contraseña === contraseña;
};

module.exports = mongoose.model('usuarios', usuarioSchema);

//Nota mental, estos modelos se crean por cada coleccion que tengamos en la base de datos