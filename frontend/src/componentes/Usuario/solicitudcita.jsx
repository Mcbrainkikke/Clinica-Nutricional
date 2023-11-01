import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolicitudCita = () => {
  const [fechaCita, setFechaCita] = useState('');
  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [horaSeleccionada, setHoraSeleccionada] = useState('');

  // Función para agendar la cita
  const handleAgendarCita = async (e) => {
    e.preventDefault();

    try {
      if (fechaCita && horaSeleccionada) {
        const confirmAgendar = window.confirm(`¿Desea agendar la cita para las ${horaSeleccionada}?`);
        if (confirmAgendar) {
          const response = await axios.post('/api/citas/agregar', {
            fecha: fechaCita,
            hora: horaSeleccionada
          });
          console.log(response.data); // Puedes manejar la respuesta del backend aquí
          console.log(`Cita agendada para las ${horaSeleccionada} el día ${fechaCita}`);
        }
      } else {
        alert('Seleccione una fecha y hora para agendar la cita');
      }
    } catch (error) {
      console.error('Error al agendar la cita:', error);
    }
  };

  // Función para obtener horas disponibles
  const obtenerHorasDisponibles = async () => {
    try {
      if (fechaCita) {
        const response = await axios.post('/api/citas/horas-disponibles', {
          fecha: fechaCita
        });
        setHorasDisponibles(response.data.horasDisponibles);
      }
    } catch (error) {
      console.error('Error al obtener horas disponibles:', error);
    }
  };

  const [mensaje, setMensaje] = useState('');
  // Función para seleccionar la hora
  const handleSeleccionHora = async (hora) => {
    const confirmSeleccion = window.confirm(`¿Desea agendar la cita para las ${hora}?`);
    if (confirmSeleccion) {
      try {
        const response = await axios.post('/api/citas/agregar', {
          fecha: fechaCita,
          hora: hora
        });
        setMensaje('Cita agendada con éxito'); //mensaje en el frontend
        console.log(response.data); // Manejar la respuesta del backend aquí
        console.log(`Cita agendada para las ${hora} el día ${fechaCita}`);
      } catch (error) {
        console.error('Error al agendar la cita:', error);
      }
    }
  };

  useEffect(() => {
    if (fechaCita) {
      obtenerHorasDisponibles();
    }
  }, [fechaCita]);

  return (
    <div className="container mt-5 navbar-dark">
      <h2 className='text-white'>Solicitud de Cita</h2>
      <div className='row'>
        <div className="col-md-3"></div>
        <div className="col-md-6" style={{ marginBottom: '20px' }}>
          <form onSubmit={handleAgendarCita}>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label text-white">Fecha Deseada</label>
              <input
                type="date"
                className="form-control"
                style={{ background: 'white', color: 'black', border: '1px solid white', padding: '5px' }}
                value={fechaCita}
                onChange={(e) => setFechaCita(e.target.value)}
                placeholder="Fecha"
              />
            </div>
            <br />
            {/*<button type="submit" className='btn btn-outline-primary' style={{ backgroundColor: 'white' }}>Buscar Cita</button>*/}
          </form>
        </div>
      </div>
      {fechaCita &&
         <div className="row" style={{ marginBottom: '20px' }}>
        <div className="col-md-3"></div>
        <div className="col-md-6" style={{ background: 'white', textAlign: 'center', marginBottom: '20px' }}>
          <h4>Horas Disponibles:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {horasDisponibles.map((hora, index) => (
              <button
                key={index}
                onClick={() => handleSeleccionHora(hora)}
                className='btn btn-outline-primary'
                style={{ backgroundColor: 'white', marginBottom: '5px' }}
              >
                {hora}
              </button>
            ))}
          </ul>
        </div>
      </div>
      }
      {mensaje && (
      <div style={{ marginBottom: '20px', paddingBottom: '20px' }}>
        <p className='text-white'>{mensaje}</p> {/* Mensaje */}
      </div>
    )}
    </div>
  );
};

export default SolicitudCita;
