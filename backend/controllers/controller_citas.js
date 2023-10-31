const Cita = require('../model/model_agendarCitas');

const citaController = {
  agregarCita: async (req, res) => {
    try {
      const { fecha, hora } = req.body;
      console.log('Datos recibidos:', fecha, hora);

      const nuevaCita = new Cita({ fecha, hora });
      console.log('Nueva cita:', nuevaCita);

      await nuevaCita.save();
      res.status(201).json({ mensaje: 'Cita creada exitosamente', cita: nuevaCita });
    } catch (error) {
      console.error('Error al agregar la cita:', error);
      res.status(500).json({ error: 'Error al agregar la cita' });
    }
  },

  obtenerHorasDisponibles: async (req, res) => {
    try {
      const { fecha } = req.body;
      const citasAgendadas = await Cita.find({ fecha });
      const horasAgendadas = citasAgendadas.map(cita => cita.hora);
      const horasTotales = ['09:00', '10:00', '11:00', '12:00']; // Ejemplo de horas disponibles
      const horasDisponibles = horasTotales.filter(hora => !horasAgendadas.includes(hora));

      res.status(200).json({ horasDisponibles });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = citaController;

