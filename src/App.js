import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import freeCodeCamplogo from './imagenes/t725.png';
import {useState} from 'react';

function App() {

  const [numClics, setnumClic] = useState(0);

const manejarclic = () => {
      setnumClic (numClics + 1);
  }

    const reiniciar = () => {
      setnumClic(0);
    } 


  return (
    <div className='App'>

    <div className = 'freecodecamp-logo-contenedor'>
      <img
       className='freecodecamp-logo'
       src={freeCodeCamplogo}
       alt='logo de freecodecamp'/>
    </div>

    <div className='contenedor-principal'>
      <Contador numClics={numClics} />

    <Boton
      texto='clic'
      esBontonDeClic={true}
      manejarclic={manejarclic}/>

    <Boton
      texto='restart'
      esBontonDeClic={false}
      manejarclic={reiniciar}/>

    </div>


    </div>
  );
}

export default App;
