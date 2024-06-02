import React from "react";
import CarWidget from "../CarWidget/CarWidget";


const NavBar = () => {
    return (
      <nav>
        <h1>Nuestros Productos</h1>
        <div>
          <button>Bebidas</button>
          <button>Embutidos</button>
          <button>Viandas</button>
        </div>
        <CarWidget/>
      </nav>
    
    );
  };
  
  export default NavBar;