import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDeatilContainer from './components/ItemDetailContainer/ItemDetailcontainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<NavBar />
<Routes>
  <Route path='/' element={<ItemListContainer />}/>
  <Route path='/item/:idItem' element={<ItemDeatilContainer />}/>
  <Route path='/category/:idCategory' element={<ItemListContainer />}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
