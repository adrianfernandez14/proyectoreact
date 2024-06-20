import React from 'react';
import './App.css'
import ItemListContainer from '../ItemListConteiner/ItemListConteiner.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner.jsx';
import Cart from '../Cart/Cart.jsx';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext.jsx';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element= {<ItemListContainer mensajeBienvenida={"¡Bienvenidos a la pagina de fiambres mas ricos y pedidos de todo el mar del oeste!"}/>}/>
            <Route path='/category/:categoryId' element={ <ItemListContainer/> } />
            <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>404. NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
