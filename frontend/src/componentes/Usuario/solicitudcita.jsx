import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function SolicitudCita() {
    const [fechaCita, setFechaCita] = useState('');

    const handleAgendarCita = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/agregar', {
                fecha: fechaCita
            });

            console.log('Cita agendada', response.data);
            // Aquí podrías manejar la respuesta del servidor según tus necesidades

            // Limpiar el campo después de agregar la cita
            setFechaCita('');
        } catch (error) {
            console.error('Error al agendar la cita:', error);
            // Aquí podrías manejar el error en tu aplicación
        }
    
    };

    return (
        <div className="container mt-5 navbar-dark">
            <h2 className='text-white'>Solicitud de Cita</h2>
            <div className='row'>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleAgendarCita}>
                        <div className="form-group">
                            <label className="form-label text-white">Fecha Deseada</label>
                            <input
                                type="date"
                                className="form-control"
                                value={fechaCita}
                                onChange={(e) => setFechaCita(e.target.value)}
                                placeholder="Fecha"
                            />
                        </div>
                        <br></br>
                        <button type="submit" className='btn btn-outline-light'>Agendar Cita</button>
                    </form>
                    <br></br>
                    <div>
                        <Link to={'/consultaragenda'}>
                            <button className='btn btn-outline-light'>Consultar Agenda</button>
                        </Link>
                    </div>
                    <br></br>
                    <div>
                        <Link to={'/usuario'}>
                            <button className='btn btn-outline-light'>Volver</button>
                        </Link>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default SolicitudCita;
