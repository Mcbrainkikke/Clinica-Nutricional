import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatosUsuario from "./datosusuarios";
import axios from "axios";

export default function Registrarse() {

    const [formData, setFormData] = useState({
        tipoDocumento: "",
        numeroDocumento: "",
        correo: "",
        contraseña: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/usuarios/registro', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5 navbar-dark">
            <div className="row">
                <h2 className="text-white">Crear Usuario</h2>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label className="form-label text-white">Tipo de Documento</label>
                            <select className="form-select" name="tipoDocumento" onChange={handleInputChange} value={formData.tipoDocumento}>
                                <option></option>
                                <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label text-white">Numero de Documento</label>
                            <input type="text" className="form-control" placeholder="Numero de Documento" name="numeroDocumento" onChange={handleInputChange} value={formData.numeroDocumento}></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label text-white">Correo Electronico</label>
                            <input type="email" className="form-control" placeholder="Correo Electronico" name="correo" onChange={handleInputChange} value={formData.correo}></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label text-white">Contraseña</label>
                            <input type="password" className="form-control" placeholder="Contraseña" name="contraseña" onChange={handleInputChange} value={formData.contraseña}></input>
                        </div>
                        <br></br>
                        <div>
                            
                            <button className='btn btn-outline-light' onClick={handleSubmit}>confirmar</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>

    )
}
