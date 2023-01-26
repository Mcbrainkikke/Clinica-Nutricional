import React from 'react';
import { Link } from 'react-router-dom';


function CambioDatos() {
    return (
        <div>
            <br></br>
            <div className='container'>
                <form className=" row mx-auto navbar-dark">
                    <div className="form-group col-md-6">
                        <label className='text-white' for="name">Nombre:</label>
                        <input type="text" className="form-control" id="name" name="name"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label className='text-white' for="email">Correo electrónico:</label>
                        <input type="email" className="form-control" id="email" name="email"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label className='text-white' for="address">Contraseña:</label>
                        <input type="password" className="form-control" id="address" name="address"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label className='text-white' for="phone">Teléfono:</label>
                        <input type="text" className="form-control" id="phone" name="phone"></input>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <li type="submit" className="btn btn-primary col-md-3">Actualizar datos</li>
                        <br></br>
                        <br></br>
                        <div>
                            <Link to={'/usuario'}>
                                <li className='btn btn-primary'>Volver</li>
                            </Link>
                        </div>
                        <br></br>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CambioDatos;