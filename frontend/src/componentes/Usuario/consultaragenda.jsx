import React from 'react';


function ConsultarAgenda() {
    return (
        <div className='container'>
            <div className='row'>
                <div className="container mt-5 navbar-dark">
                    <h2 className='text-white'>Consultar Agenda</h2>
                    <div >
                        <p className='text-white text-start'>Fecha: </p>
                        <p className='text-white text-start'>Hora:</p>
                        <p className='text-white text-start'>Paciente: </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsultarAgenda;