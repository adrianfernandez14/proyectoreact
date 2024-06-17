import React from 'react';
import './App.css'
import ItemListContainer from '../ItemListConteiner/ItemListConteiner.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner.jsx';
import { Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer mensajeBienvenida={"¡Bienvenidos a la pagina de fiambres mas ricos y pedidos de todo el mar del oeste!"}/>}/>
          <Route path='/category/:categoryId' element={ <ItemListConteiner/> } />
          <Route path='/item/:itemId' element={<ItemDetailConteiner/>}/>
          <Route path='*' element={<h1>404. NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
