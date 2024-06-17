import React from 'react';
import './App.css'
import ItemListContainer from '../ItemListConteiner/ItemListConteiner.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import ItemCount from '../ItemCount/ItemCount.jsx'
import ItemDetailConteiner from '../ItemDetailConteiner/ItemDetailConteiner.jsx';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensajeBienvenida={"¡Bienvenidos a la pagina de fiambres mas ricos y pedidos de todo el mar del oeste!"}/>
      <ItemDetailConteiner/>
      <ItemCount/>
    </div>
  );
}

export default App;
