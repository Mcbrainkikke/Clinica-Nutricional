import React from 'react';

function Usuario() {
    return (  
        <div className='container'>
            <h2>Portal Usuario</h2>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <div className="mx-auto">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Inicio</a>
                            </li>                           
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/cambiocontraseña">Cambio de Contraseña</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="cambiodatos">Cambio de Datos Personales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/solicitudcita">Solicitar Cita</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/cancelarcita">Cancelar Cita</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Usuario;