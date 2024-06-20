import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, image, quantity } = item;

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="cart-item-details">
        <h2>{name}</h2>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Total: ${price * quantity}</p>
        <button onClick={() => removeFromCart(id)}>Eliminar del carrito</button>
      </div>
    </div>
  );
};

export default CartItem;
