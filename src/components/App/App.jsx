import React from 'react';
import './App.css'
import ItemListContainer from '../ItemListConteiner/ItemListConteiner.jsx';
import NavBar from '../NavBar/NavBar.jsx';

const App = () => {
  return (
    <div className="App">
      <ItemListContainer mensajeBienvenida={"¡Bienvenidos a la pagina de fiambres mas ricos y pedidos de todo el mar del oeste!"}/>
      <NavBar/>
    </div>
  );
}

export default App;
