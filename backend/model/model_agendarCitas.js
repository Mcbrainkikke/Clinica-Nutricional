const mongoose = require('mongoose');

const CitaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true
  }
});

const Cita = mongoose.model('Cita', CitaSchema);

module.exports = Cita;
