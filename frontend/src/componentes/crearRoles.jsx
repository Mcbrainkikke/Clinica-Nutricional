import React from "react";


export default function CrearRoles() {

  return (
    <div className="container mt-5">
      <h2>Crear Roles</h2>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <table className="table tabla-dark text-white">
            <tr>
              <th>
                <div className="form-group">
                  <label className="form-label text-white">Nombre</label>
                  <input type="text" className="form-control" placeholder="Nombres"></input>
                </div>
              </th>
              <th><div className="form-group">
                <label className="form-label text-white">Correo</label>
                <input type="email" className="form-control" placeholder="Correo"></input>
              </div></th>
            </tr>
            <tr>
              <th>
                <div className="form-group">
                  <label className="form-label text-white">Contraseña</label>
                  <input type="password" className="form-control" placeholder="Contraseña"></input>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label className="form-label text-white">Rol</label>
                  <select className="form-select">
                    <option></option>
                    <option value="Cedula de Ciudadania">Administrador</option>
                    <option value="Tarjeta de Identidad">Medico</option>
                    <option value="Tarjeta de Identidad">Contador</option>
                    <option value="Tarjeta de Identidad">Recepcion</option>
                    <option value="Tarjeta de Identidad">Usuario</option>
                  </select>
                </div>
              </th>
            </tr>
          </table>
          <div>
            <ul className="navbar-nav me-auto">
              <li >
                <a className="btn btn-primary" href="#">Crear</a>
              </li>
              <li >
                <a className="btn btn-primary" href="/administrador">Cancelar</a>
              </li>
            </ul>
          </div>

        </div>

      </div>



    </div>
  )
}
