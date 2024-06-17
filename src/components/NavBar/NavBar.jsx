import React from "react";
import CarWidget from "../CarWidget/CarWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
      <nav className="NavBar">
        <Link to='/'>
          <h1>Nuestros Productos</h1>
        </Link>
        <div className="Categorias">
          <Navlink to={`/category/fiambres`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Fiambres</Navlink>
          <Navlink to={`/category/tablas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablas</Navlink>
          <Navlink to={`/category/viandas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Viandas</Navlink>
        </div>
        <CarWidget/>
      </nav>
    
    );
  };
  
  export default NavBar;