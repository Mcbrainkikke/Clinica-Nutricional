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



module.exports = router;




