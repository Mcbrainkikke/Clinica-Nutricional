import React from "react";

export default function Servicios() {
    return (
        <div className="container mt-5 navbar-dark">
            <div className='row'>
                <h2 className=" text-white">Datos Personales</h2>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form>
                        <div className='form-group'>
                            <label className='form-label text-white'>Primer Nombres</label>
                            <input type='text' className='form-control'></input>
                        </div>
                        <div className='form-group '>
                            <label className='form-label text-white'>Segundo Nombre</label>
                            <input type='text' className='form-control'></input>
                        </div>
                        <div className='form-group '>
                            <label className='form-label text-white'>Fecha</label>
                            <input type='date' className='form-control'></input>
                        </div>
                        <div className='form-group '>
                            <label className='form-label text-white'>Primer Apellido</label>
                            <input type='text' className='form-control'></input>
                        </div>
                        <div className='form-group '>
                            <label className='form-label text-white'>Segundo Apellido</label>
                            <input type='text' className='form-control'></input>
                        </div>
                        <div className='form-group '>
                            <label className='form-label text-white'>Sexo</label>
                            <input type='text' className='form-control'></input>
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <button type='type' className='btn btn-outline-light'>Confirmar</button>
                            <button type='reset' className='btn btn-outline-light'>Cancelar</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}