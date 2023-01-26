import React from 'react';


function Recepcion() {
    return (
        <div>
            <h1 className="text-center">Consulta de Citas</h1>
            <div className="container navbar-dark">
                <div className='row'>
                <div className="col-md-3"></div>
                    <div className='col-md-6'>
                    <form>
                        <div className="form-group">
                            <label className='text-white' for="identification">Número de identificación:</label>
                            <input type="text" className="form-control" id="identification"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Consultar</button>
                    </form>
                    <br></br>
                    <div id="appointment-info"></div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Recepcion;