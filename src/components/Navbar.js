import React from "react";
import './CSS/Navbar.css';

const Navbar = (props) => {
  return (
    <div className="container my-3">
      <nav className="navbar">
        <h2 className="heading">
          {props.heading}
        </h2>
      </nav>
    </div>
  );
};

export default Navbar;
