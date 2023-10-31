const express = require('express');
const citaController = require('../controllers/controller_citas');

const router = express.Router();

router.post('/agregar', citaController.agregarCita);
router.get('/consultar', citaController.consultarCitas);

module.exports = router;
