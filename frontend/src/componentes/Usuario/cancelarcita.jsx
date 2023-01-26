import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function CancelarCita() {

    return (
        <div>
            <h1 class="text-center ">Cancelar Cita</h1>
            <div class="container navbar-dark ">
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <form>
                            <div class="form-group">
                                <label className='text-white' for="appointmentDate">Fecha de la cita:</label>
                                <input type="date" class="form-control" id="appointmentDate"></input>
                            </div>
                            <div class="form-group">
                                <label className='text-white' for="reason">Razón de cancelación:</label>
                                <textarea class="form-control" id="reason"></textarea>
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-primary">Cancelar Cita</button>
                            <br></br>
                            <br></br>
                            <div>
                                <Link to={'/usuario'}>
                                    <li className='btn btn-primary'>Volver</li>
                                </Link>
                            </div>
                        </form>
                        <br></br>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CancelarCita;