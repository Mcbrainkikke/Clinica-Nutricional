import React from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function IniciarSesion() {

    

    return (
        <div className="container mt-5 navbar-dark">
            <div className="row">
                <h2 className="text-white">Iniciar Sesion</h2>
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
                            <label className="form-label text-white">Contraseña</label>
                            <input type="password" className="form-control" placeholder="Contraseña"></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                        </div>
                    </form>
                    <li className="btn btn-outline-primary text-white"> Iniciar Sesion</li>
                    <li className="btn btn-outline-primary text-white"> Cancelar</li>
                   
                </div>
            </div>
        </div>
    )
}