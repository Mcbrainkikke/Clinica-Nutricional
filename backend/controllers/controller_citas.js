const Cita = require('../model/model_agendarCitas');

const citaController = {
  agregarCita: async (req, res) => {
    try {
      const { fecha } = req.body;
      const nuevaCita = new Cita({ fecha });
      await nuevaCita.save();
      res.status(201).json({ mensaje: 'Cita creada exitosamente', cita: nuevaCita });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  consultarCitas: async (req, res) => {
    try {
      const citas = await Cita.find();
      res.status(200).json(citas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = citaController;

