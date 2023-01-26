import React from "react";
import { Link } from "react-router-dom";
import DatosUsuario from "./datosusuarios";

export default function Registrarse() {
    return (
        <div className="container mt-5 navbar-dark">
            <div className="row">
                <h2 className="text-white">Crear Usuario</h2>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label className="form-label text-white">Tipo de Documento</label>
                            <select className="form-select">
                                <option></option>
                                <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label text-white">Numero de Documento</label>
                            <input type="text" className="form-control" placeholder="Numero de Documento"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label text-white">Correo Electronico</label>
                            <input type="email" className="form-control" placeholder="Correo Electronico"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label text-white">Contraseña</label>
                            <input type="password" className="form-control" placeholder="Contraseña"></input>
                        </div>
                        <br></br>
                        <div>
                            <Link to={'/servicios'}>
                                <li className='btn btn-outline-light'>confirmar</li>
                            </Link>
                        </div>
                    </form>

                </div>

            </div>

        </div>

    )
}