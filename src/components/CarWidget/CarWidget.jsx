import React from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const CarWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className="CartWidget" style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img className='CartWidget' src={cart} alt="cart-widget" />
      { totalQuantity }
    </Link>
  );
};

export default CarWidget;
