import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clinicalogo from './assets/ClinicaNutricional.png';
import Inicio from './componentes/inicio';
import IniciarSesion from './componentes/iniciarsesion';
import Registrarse from './componentes/registrarse';
import Contacto from './componentes/contacto';
import Servicios from './componentes/servicios';
import Clinica from './componentes/clinica';
import CrearRoles from './componentes/crearRoles';
import DatosUsuario from './componentes/datosusuarios';
import Administrador from './componentes/administrador';
import Medico from './componentes/Medico/medico';
import Contador from './componentes/Contador/contador';
import HistoriaClinica from './componentes/Medico/historiaClinica';
import Usuario from './componentes/Usuario/usuario';
import SolicitudCita from './componentes/Usuario/solicitudcita';
import ConsultarAgenda from './componentes/Usuario/consultaragenda';
import CancelarCita from './componentes/Usuario/cancelarcita';
import CambioContraseña from './componentes/Usuario/cambiocontraseña';
import CambioDatos from './componentes/Usuario/cambiodatos';
import CambioDatosMedico from './componentes/Medico/cambiodatosmedico';
import CambioContraseñaMedico from './componentes/Medico/cambiocontraseñamedico';
import CrearNomina from './componentes/Contador/crearnomina';
import Recepcion from './componentes/recepcion';

function App() {

  return (
    <div className="App">
      <img src={clinicalogo} className="float-start" width="180px"></img>
      <h4 className="text-end">Linea de atencion 987612345</h4>
      <br></br>
      <br></br>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/">Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/clinica">La Clinica</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contacto">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/registrarse">Registrarse</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/iniciarsesion">Iniciar Sesion</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/usuario">Usuario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/medico">Medico</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/administrador">Administrador</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contador">Contador</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/recepcion">Recepcion</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} exact></Route>
          <Route path='/iniciarsesion' element={<IniciarSesion />} exact></Route>
          <Route path='/registrarse' element={<Registrarse />} exact></Route>
          <Route path='/contacto' element={<Contacto />} exact></Route>
          <Route path='/servicios' element={<Servicios />} exact></Route>
          <Route path='/clinica' element={<Clinica />} exact></Route>
          <Route path='/crearRoles' element={<CrearRoles />} exact></Route>
          <Route path='/administrador' element={<Administrador />} exact></Route>
          <Route path='/medico' element={<Medico />} exact></Route>
          <Route path='/contador' element={<Contador />} exact></Route>
          <Route path='/historiaClinica' element={<HistoriaClinica />} exact></Route>
          <Route path='/usuario' element={<Usuario />} exact></Route>
          <Route path='/solicitudcita' element={<SolicitudCita />} exact></Route>
          <Route path='/consultaragenda' element={<ConsultarAgenda />} exact></Route>
          <Route path='/cancelarcita' element={<CancelarCita />} exact></Route>
          <Route path='/cambiocontraseña' element={<CambioContraseña />} exact></Route>
          <Route path='/cambiodatos' element={<CambioDatos />} exact></Route>
          <Route path='/cambiodatosmedico' element={<CambioDatosMedico />} exact></Route>
          <Route path='/cambiocontraseñamedico' element={<CambioContraseñaMedico />} exact></Route>
          <Route path='/crearnomina' element={<CrearNomina />} exact></Route>
          <Route path='/recepcion' element={<Recepcion />} exact></Route>

        </Routes>
      </BrowserRouter>    


    </div>
  );
}

export default App;
