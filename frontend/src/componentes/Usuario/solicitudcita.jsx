import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolicitudCita = () => {
    const [fechaCita, setFechaCita] = useState('');
    const [horasDisponibles, setHorasDisponibles] = useState([]);
    const [horaSeleccionada, setHoraSeleccionada] = useState('');

    const handleAgendarCita = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/citas/agregar', {
                fecha: fechaCita,
                hora: horaSeleccionada
            });

            console.log('Cita agendada', response.data);
            setFechaCita('');
            setHoraSeleccionada(''); // Limpiar la hora seleccionada
        } catch (error) {
            console.error('Error al agendar la cita:', error);
        }
    };

    const obtenerHorasDisponibles = async () => {
        try {
            const response = await axios.post('/api/citas/horas-disponibles', {
                fecha: fechaCita
            });

            setHorasDisponibles(response.data.horasDisponibles);
        } catch (error) {
            console.error('Error al obtener horas disponibles:', error);
        }
    };

    const handleSeleccionHora = (hora) => {
        setHoraSeleccionada(hora);
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
                        <button type="submit" className='btn btn-outline-primary' style={{ backgroundColor: 'white' }}>Buscar Cita</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default SolicitudCita;

