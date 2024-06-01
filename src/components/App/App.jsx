import React from 'react';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListConteiner/ItemListConteiner';
import CarWidget from '../CarWidget/CarWidget'



const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Welcome to our store!" />
    </div>
  );
};

export default App;
