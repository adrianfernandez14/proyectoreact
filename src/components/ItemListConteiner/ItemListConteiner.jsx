import React from 'react';

const ItemListContainer = ({ mensajeBienvenida }) => {
    return (
        <div>
            <h1>{mensajeBienvenida}</h1>
            {/* Aquí puedes mostrar el catálogo de productos */}
        </div>
    );
};

export default ItemListContainer;
