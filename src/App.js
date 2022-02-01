import './App.css';
import Productos from './components/Body/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
   <>
   <NavBar />
   <Productos resma="Autor A4" resma2="Oficio" />

   </>
  );
}

export default App;
