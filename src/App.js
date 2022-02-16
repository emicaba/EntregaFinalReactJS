import './App.css';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDeatilContainer from './components/ItemDetailContainer/ItemDetailcontainer'

function App() {
  return (
   <>
   <NavBar />
   {/* <ItemListContainer greeting="Greeting" /> */}
   <ItemDeatilContainer />
   </>
  );
}

export default App;
