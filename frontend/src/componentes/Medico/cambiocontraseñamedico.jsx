import React from 'react';
import { Link } from 'react-router-dom';



function CambioContraseñaMedico() {
    return ( 
        <div className='container '>
            <h2>Cambio de Contraseña</h2>
            <div className='row navbar-dark '>
                <form >
                    <br></br>
                    <label className='text-white' for="current-password">Contraseña actual:</label>
                    <input  type="password" id="current-password" name="current-password"></input>
                    <br></br>
                    <label className='text-white' for="new-password">Nueva contraseña:</label>
                    <input type="password" id="new-password" name="new-password"></input>
                    <br></br>
                    <label className='text-white' for="confirm-password">Confirmar nueva contraseña:</label>
                    <input type="password" id="confirm-password" name="confirm-password"></input>
                    <br></br>
                    <br></br>
                    <button className='btn btn-outline-primary text-white' type="submit">Cambiar contraseña</button>
                    <br></br>
                    <br></br>
                    <div>
                        <Link to={'/usuario'}>
                            <li className='btn btn-outline-primary text-white'>Volver</li>
                        </Link>
                    </div>
                    <br></br>
                    <br></br>
                </form>
            </div>
            <br></br>
        </div>
     );
}

export default CambioContraseñaMedico;