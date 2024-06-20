import React from 'react';
import Item from '../Item/Item.jsx';

const ItemList = ({ products }) => {
  return (
    <div>
      <h1>Lista de Fiambres</h1>
      <div className="ItemList">
        {products.map(product => (
          <Item 
            key={product.id} 
            id={product.id} 
            name={product.name} 
            price={product.price} 
            img={product.img} 
            description={product.description} 
            stock={product.stock} 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;