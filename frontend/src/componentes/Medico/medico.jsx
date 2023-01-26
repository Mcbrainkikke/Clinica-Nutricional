import React from "react";
import withRole from '../roles';

 function Medico() {
    return (
        <div className="container">
            <h2>Portal Medico</h2>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container">
                    <div className="mx-auto">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Inicio</a>
                            </li>                           
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/cambiocontraseñamedico">Cambio de Contraseña</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/cambiodatosmedico">Cambio de Datos Personales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/historiaClinica">Historia Clinica</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRole(Medico, ['medico']);