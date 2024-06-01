import React from "react";


const NavBar = () => {
    return (
      <nav>
        <h1>My E-commerce</h1>
        <div>
          <button>Bebidas</button>
          <button>Embutidos</button>
          <button>Viandas</button>
        </div>
        <CartWidget />
      </nav>
    );
  };
  
  export default NavBar;