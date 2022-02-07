import './App.css';
import Productos from './components/Body/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
   <>
   <NavBar />
   <Productos greeting="Greeting" />

   </>
  );
}

export default App;
