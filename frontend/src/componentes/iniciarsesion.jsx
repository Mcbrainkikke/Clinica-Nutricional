import React, { useState, useEffect } from "react";
import axios from "axios";

export default function IniciarSesion() {
    const [formData, setFormData] = useState({
        tipoDocumento: "",
        numeroDocumento: "",
        contraseña: ""
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [redirectToUserPage, setRedirectToUserPage] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/api/usuarios/iniciarsesion", formData);
            console.log(response.data.mensaje); // Mensaje de inicio de sesión exitoso            

            setSuccessMessage(response.data.mensaje);

            const userResponse = await axios.get(`/api/usuarios/informacion/${formData.numeroDocumento}`);
            setUserName(userResponse.data.nombre);

            setRedirectToUserPage(true); // Establece la redirección a la página de usuario
        } catch (error) {
            // ... Manejo de errores
        }
    };

    useEffect(() => {
        if (redirectToUserPage) {
            window.location.href = "/usuario"; // Redirige a la página de usuario
        }
    }, [redirectToUserPage]);
           

    return (
        <div className="container mt-5 navbar-dark">
            <div className="row">
                <h2 className="text-white">Iniciar Sesion</h2>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
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
                            <label className="form-label text-white">Contraseña</label>
                            <input type="password" className="form-control" placeholder="Contraseña" name="contraseña" onChange={handleInputChange} value={formData.contraseña}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary text-white">Iniciar Sesion</button>
                        </div>
                    </form>                    
                    <button className="btn btn-outline-primary text-white">Cancelar</button>
                    {/* Mostrar mensajes en la página */}
                    {successMessage && <p style={{ color: successMessage.includes('exitoso') ? 'white' : 'red' }}>{successMessage}</p>}
                    {userName && <p style={{ color: 'white' }}>Bienvenido, {userName}</p>}
                </div>
            </div>
        </div>
    );
}
