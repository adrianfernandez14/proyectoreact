import React from "react";


const NavBar = () => {
    return (
      <nav>
        <h1>My E-commerce</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <CartWidget />
      </nav>
    );
  };
  
  export default NavBar;