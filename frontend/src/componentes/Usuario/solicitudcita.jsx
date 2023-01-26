import React from 'react';
import { Link } from 'react-router-dom';


function SolicitudCita() {
    return (
        <div className="container mt-5 navbar-dark">
            <h2 className='text-white'>Solicitud de Cita</h2>
            <div className='row'>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form>

                        <div className="form-group">
                            <label className="form-label text-white">Fecha Deseada</label>
                            <input type="date" className="form-control" placeholder="Fecha"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label text-white">Ciudad</label>
                            <input type="city" className="form-control" placeholder="Ciudad"></input>
                        </div>
                    </form>
                    <br></br>
                    <div>
                        <Link to={'/consultaragenda'}>
                            <li className='btn btn-outline-light'>Consultar Agenda</li>
                        </Link>
                    </div>
                    <br></br>
                    <div>
                        <Link to={'/usuario'}>
                            <li className='btn btn-outline-light'>Volver</li>
                        </Link>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default SolicitudCita;