import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar" >
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/ProductsPage">Products</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;