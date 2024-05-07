import React from 'react';
import NavBar from './proyectoreact/components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer mensajeBienvenida="¡Bienvenido a nuestra tienda de ambientaciones de eventos!" />
        </div>
    );
};

export default App;
