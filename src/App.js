import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App () {
  return (
    <div className="App">
      <ItemListContainer mensajeBienvenida={"¡Bienvenidos a la pagina de fiambres mas ricos y pedidos de todo el mar del oeste!"}/>
      <NavBar/>
    </div>
  );
}

export default App;
