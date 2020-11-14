import React, {Fragment, useState} from 'react';
import { v4 as uuid} from 'uuid'

const Form = ({crearCita}) => {
    //Crear state de citas 
    const [cita, setCita] = useState({
        cliente: '',
        fecha: '',
        hora: '',
        descripcion: '',
    })
    const [error, setError] = useState(false)

    //Funcion que se ejecuta cada que un usuario escribe
    const actualizarState = e =>{
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {cliente, fecha, hora, descripcion } = cita

    //Cuando se envia cita
    const submitCita = e =>{
        e.preventDefault()
       //Validar
       if(cliente.trim() === '' || fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === ''){
            setError(true)
            return;
       }
       //Eliminar mensaje de error
       setError(false);
       //Asignar id
       cita.id = uuid();
       //Crear la cita
       crearCita(cita)

       //Reiniciar form
       setCita ({
        cliente: '',
        fecha: '',
        hora: '',
        descripcion: '',
       })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Cliente</label>
                <input 
                    type="text"
                    name="cliente"
                    className="u-full-width"
                    placeholder="Nombre del cliente"
                    onChange={actualizarState}
                    value={cliente}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState} 
                    value={hora}
                />
                <label>Descripcion</label>
                    <textarea
                        className="u-full-width"
                        name="descripcion"
                        onChange={actualizarState}
                        value={descripcion}
                    >
                    </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agendar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Form;