import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import ItemDeatilContainer from './components/ItemDetailContainer/ItemDetailcontainer';
import Cart from './components/Cart/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './components/Cart/CartContext';

function App() {
  return (
<CartContextProvider>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/item/:idItem' element={<ItemDeatilContainer />}/>
      <Route path='/category/:idCategory' element={<ItemListContainer />}/>
      <Route path='/cart' element={<Cart />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
</CartContextProvider>

  );
}

export default App;
