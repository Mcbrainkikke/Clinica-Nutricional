import React from 'react';


function Roles() {

// Crear un arreglo de roles
const roles = ['admin', 'user', 'contador', 'recepcion', 'medico'];

// Crear un componente que verifica el rol del usuario actual
const withRole = (WrappedComponent, allowedRoles) => {
  return class extends React.Component {
    render() {
      // Obtener el rol del usuario actual
      const currentRole = localStorage.getItem('role');

      // Verificar si el rol del usuario actual está en la lista de roles permitidos
      if (allowedRoles.includes(currentRole)) {
        // Renderizar el componente envuelto si el rol es válido
        return <WrappedComponent {...this.props} />;
      } else {
        // Mostrar un mensaje de error si el rol no es válido
        return (
          <div className="alert alert-danger" role="alert">
            No tienes permiso para acceder a esta funcionalidad.
          </div>
        );
      }
    }
  }
};

// Crear un componente protegido por rol
const ProtectedComponent = ({ message }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Información confidencial</h5>
        <p className="card-text">{message}</p>
      </div>
    </div>
  );
};

// Crear un componente de ejemplo protegido por el rol "admin"
const AdminComponent = withRole(ProtectedComponent, ['admin']);

// Utilizar el componente protegido en otro lugar de la aplicación
<AdminComponent message="Bienvenido administrador" />


    return ( 
        <div>

        </div>
     );
}

export default Roles;


