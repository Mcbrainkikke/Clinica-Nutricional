const express = require('express');
const router = express.Router();
const Usuario = require('../model/model_usuarios');

// Ruta para el registro de nuevos usuarios
router.post('/api/usuarios/registro', async (req, res) => {
    try {
        const { tipoDocumento, numeroDocumento, correo, contraseña } = req.body;

        // Verificar si el correo ya está en uso
        const usuarioExistente = await Usuario.findOne({ correo });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El correo ya está en uso' });
        }

        // Crear un nuevo usuario en la base de datos
        const nuevoUsuario = new Usuario({
            tipoDocumento,
            numeroDocumento,
            correo,
            contraseña
        });

        await nuevoUsuario.save();

        res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});
// Ruta para el inicio de sesión de usuarios
router.post('/api/usuarios/iniciarsesion', async (req, res) => {
    try {
        console.log("Iniciando sesión...");

        const { numeroDocumento, contraseña } = req.body;
        console.log("Datos recibidos:", numeroDocumento, contraseña);

        // Verificar si el usuario está registrado en la base de datos
        const usuario = await Usuario.findOne({ numeroDocumento }).select('+contraseña').exec();

        if (!usuario) {
            console.error("Usuario no encontrado.");
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Verificar la contraseña
        const contraseñaValida = await usuario.validarContraseña(contraseña);
        if (!contraseñaValida) {
            console.error("Contraseña inválida.");
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        console.log("Inicio de sesión exitoso.");
        res.json({ mensaje: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});



module.exports = router;




