import React from 'react';


function CrearNomina() {
    return (
        <div>
            <br></br>
            <br></br>
            <div class="container navbar-dark">
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <div class="form-group">
                                <label className='text-white' for="name">Nombre</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Ingresa el nombre"></input>
                            </div>
                            <div class="form-group">
                                <label className='text-white' for="position">Cargo</label>
                                <input type="text" class="form-control" id="position" name="position" placeholder="Ingresa el cargo"></input>
                            </div>
                            <div class="form-group">
                                <label className='text-white' for="salary">Sueldo</label>
                                <input type="text" class="form-control" id="salary" name="salary" placeholder="Ingresa el sueldo"></input>
                            </div>
                            <div class="form-group">
                                <label className='text-white' for="deductions">Deducciones</label>
                                <input type="text" class="form-control" id="deductions" name="deductions" placeholder="Ingresa las deducciones"></input>
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-primary">Agregar</button>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <table class="table table-bordered">
                            <thead>
                                <br></br>
                                <tr>
                                    <th className='text-white'>Nombre</th>
                                    <th className='text-white'>Cargo</th>
                                    <th className='text-white'>Sueldo</th>
                                    <th className='text-white'>Deducciones</th>
                                    <th className='text-white'>Total a pagar</th>
                                </tr>
                            </thead>
                            <tbody id="employee-list">
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
            </div>
        </div>

    );
}

export default CrearNomina;