const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true
  }  
});

const Cita = mongoose.model('Cita', citaSchema);

module.exports = Cita;

