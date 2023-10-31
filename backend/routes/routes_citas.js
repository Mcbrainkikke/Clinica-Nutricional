const express = require('express');
const citaController = require('../controllers/controller_citas');

const router = express.Router();

router.post('/api/citas/agregar', citaController.agregarCita);
router.post('/api/citas/horas-disponibles', citaController.obtenerHorasDisponibles);


module.exports = router;
