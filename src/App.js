import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import Citas from './components/Citas'

function App() {

// Citas en localStorage
let citasIniciales = JSON.parse(localStorage.getItem('citas'))
if(!citasIniciales){
  citasIniciales = []
}

//Arreglo de citas
const [citas, setCitas] = useState (citasIniciales)

//useEffect
useEffect(() =>{
  if(citasIniciales){
    localStorage.setItem('citas', JSON.stringify(citas))
  }else{
    localStorage.setItem('citas', JSON.stringify([]))
  }
}, [citas, citasIniciales])


// Funcion que tome citas actuales agregue lass nuevas
const crearCita = cita => {
  setCitas([ ...citas, cita])
}

//Funcion que elimina cita por id
const eliminarCita = id =>{
  const nuevasCitas = citas.filter(cita => cita.id !== id);
  setCitas(nuevasCitas)
}

// Mensajes condicional
const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administrador de Citas'

  return (
    <div className="App">
      <h1>Barber - Shop</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Form
                crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
              <h2>{titulo}</h2>

              {citas.map(cita =>(
                <Citas
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
