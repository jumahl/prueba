import React from "react";
import '../stylesheets/Testimonio.css';

function Testimonio (props) {
  return (
    <div className='contenedor-descripcion'>
      <img className="imagen-descripcion"
      src={require(`../imagenes/${props.imagen}.jpeg`)} 
      alt='Foto de tigre' />
      <div className='contenedor-de-la-desripcion'>
        <p className='nombre-del-animal'>
          Es un <strong>{props.nombre}</strong>
        </p>
        <p className='descripcion-de-animal'>
          {props.descripcion}
        </p>
      </div>
    </div>
  );
}

export default Testimonio;