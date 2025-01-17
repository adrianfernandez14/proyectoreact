import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem.jsx";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart,  cleartCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito </h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            { cart.map(p => <CartItem key={p.id}{...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => cleartCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart;