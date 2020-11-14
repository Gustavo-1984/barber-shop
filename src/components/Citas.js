import React from 'react';

const Citas = ({cita, eliminarCita}) => {
    return ( 
        <div className="cita">
            <p>Cliente: <span>{cita.cliente}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Descripcion: <span>{cita.descripcion}</span></p>
            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(cita.id)}
            >
                Eliminar &times;</button>
        </div>
     );
}
 
export default Citas;