import React from 'react';

function HistoriaClinica() {
    return (
        <div>
            <h2>Historia Clinica</h2>
            <div className='container navbar-dark'>
                <div className='row'>
                    <table>
                        <thead>
                            <tr>
                                <td className='text-white text-start'>Paciente</td>
                                <td className='text-white text-start'>Telefono</td>
                                <td className='text-white text-start'>Fecha de Creacion</td>
                            </tr>
                            <tr>
                                <td className='text-white text-start'>Documento</td>
                                <td className='text-white text-start'>Fecha de Ingreso</td>
                            </tr>
                            <tr>
                                <td className='text-white text-start'>Fecha de Nacimiento</td>
                                <td className='text-white text-start'>Sede</td>
                            </tr>
                            <tr>
                                <td className='text-white text-start'>Edad</td>
                                <td className='text-white text-start'>Nombre del Medico</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        <br></br>
                    </table>
                    <table className='table table-secondary'>
                        <thead>
                            <tr>
                                <td></td>
                            </tr>
                        </thead>
                    </table>
                    <tr>
                        <th>
                            <label className='form-label text-white'>Descripcion</label>
                            <textarea className='form-control' rows={2} cols={150}></textarea>
                        </th>
                        <br></br>
                    </tr>
                    <tr>
                        <th>
                            <label className='form-label text-white'>Recomendaciones</label>
                            <textarea className='form-control' rows={2} cols={150}></textarea>
                        </th>
                        <br></br>
                    </tr>
                </div>
            </div>
        </div>
    );
}

export default HistoriaClinica;