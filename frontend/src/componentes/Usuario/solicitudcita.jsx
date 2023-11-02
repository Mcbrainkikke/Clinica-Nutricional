import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolicitudCita = () => {
  const [fechaCita, setFechaCita] = useState('');
  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const fechaActual = new Date().toISOString().split('T')[0];

  const obtenerHorasDisponibles = async () => {
    try {
      if (fechaCita) {
        const response = await axios.post('/api/citas/horas-disponibles', {
          fecha: fechaCita
        });
        setHorasDisponibles(response.data.horasDisponibles);
        setMensaje('');
      }
    } catch (error) {
      console.error('Error al obtener horas disponibles:', error);
    }
  };

  const handleSeleccionHora = async (hora) => {
    const confirmSeleccion = window.confirm(`¿Desea agendar la cita para las ${hora}?`);
    if (confirmSeleccion) {
      try {
        const response = await axios.post('/api/citas/agregar', {
          fecha: fechaCita,
          hora: hora
        });
        setMensaje(`Cita agendada para las ${hora} el día ${fechaCita}`);
        setHorasDisponibles([]);
        console.log(response.data);
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

  const volver = () => {
    setMensaje('');
    setHorasDisponibles([]);
  };

  const validarFecha = (fecha) => {
    return fecha >= fechaActual;
  };

  return (
    <div className="container mt-5 navbar-dark">
      <h2 className='text-white'>Solicitud de Cita</h2>
      { !mensaje &&
        <div className='row'>
          <div className="col-md-3"></div>
          <div className="col-md-6" style={{ marginBottom: '20px' }}>
            <form>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label text-white">Fecha Deseada</label>
                <input
                  type="date"
                  className="form-control"
                  style={{ background: 'white', color: 'black', border: '1px solid white', padding: '5px' }}
                  value={fechaCita}
                  onChange={(e) => {
                    if (validarFecha(e.target.value)) {
                      setFechaCita(e.target.value);
                    } else {
                      alert('Fecha incorrecta, Seleccione una fecha mas reciente');
                      setFechaCita('');
                    }
                  }}
                  placeholder="Fecha"
                />
              </div>
              <br />
            </form>
          </div>
        </div>
      }
      {fechaCita && !mensaje &&
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
          <p className='text-white'>{mensaje}</p>
          <button onClick={volver} className="btn btn-primary">Volver</button>
        </div>
      )}
    </div>
  );
};

export default SolicitudCita;

