import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
    return (
      <nav className="navBar">
        <div className="navBox">
          <Link className="navTextStyle" to="/">
            WikiCountries
          </Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;