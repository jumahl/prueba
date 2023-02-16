import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='Contenedor-principal'>
      <h1>Pruebas para la pagina</h1>
      <Testimonio
      nombre='Tigre de Bengala'
      imagen='tigre'
      descripcion='Los tigres son los miembros más grandes de la familia de los felinos y son famosos por su potencia y fuerza. En su momento hubo ocho subespecies de tigre, pero tres se extinguieron durante el siglo XX. En los últimos 100 años, la caza y la destrucción de los bosques han reducido la población de tigres de cientos de miles a quizá menos de 2500.' />
      
      <Testimonio
      nombre='Zorro'
      imagen='zorro'
      descripcion='El zorro hace parte de los caninos al igual que los chacales, lobos y perros. Existen especies de zorros que se pueden encontrar en todos los continentes.' />
    </div>
    </div>
  );
}

export default App;
