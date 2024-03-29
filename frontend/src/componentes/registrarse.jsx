import React, { useState } from "react";
import axios from "axios";

export default function Registrarse() {
  const [formData, setFormData] = useState({
    tipoDocumento: "",
    numeroDocumento: "",
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: ""
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [mensajeExito, setMensajeExito] = useState("");

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
      setMensajeExito('Usuario creado exitosamente');
      setMostrarFormulario(false);
    } catch (error) {
      console.error(error);
    }
  };

  const mostrarVolver = () => {
    setMensajeExito("");
    setMostrarFormulario(true);
  };

  return (
    <div className="container mt-5 navbar-dark">
      {mostrarFormulario ? (
        <div className="row">
          <h2 className="text-white">Crear Usuario</h2>
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
                <label className="form-label text-white">Nombre</label>
                <input type="text" className="form-control" placeholder="Nombre" name="nombre" onChange={handleInputChange} value={formData.nombre}></input>
              </div>
              <div className="form-group">
                <label className="form-label text-white">Apellido</label>
                <input type="text" className="form-control" placeholder="Apellido" name="apellido" onChange={handleInputChange} value={formData.apellido}></input>
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
                <button className='btn btn-outline-light' type="submit">confirmar</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-white">{mensajeExito}</p>
          <button className='btn btn-outline-light' onClick={mostrarVolver}>Volver</button>
        </div>
      )}
    </div>
  );
}


