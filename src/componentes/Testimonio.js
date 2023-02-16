import React from "react";
import '../stylesheets/Testimonio.css';

function Testimonio (props) {
  return (
    <div className='contenedor-descripcion'>
      <img className="imagen-descripcion"
      src={require('../imagenes/tigre.jpeg')} 
      alt='Foto de tigre'/>
      <div className='contenedor-de-la-desripcion'>
        <p className='nombre-del-animal'>Tigre de bengala</p>
        <p className='descripcion-de-tigre'>Los tigres son los miembros más grandes de la familia de los felinos y son famosos por su potencia y fuerza. En su momento hubo ocho subespecies de tigre, pero tres se extinguieron durante el siglo XX. En los últimos 100 años, la caza y la destrucción de los bosques han reducido la población de tigres de cientos de miles a quizá menos de 2500.</p>
      </div>
    </div>
  );
}

export default Testimonio;