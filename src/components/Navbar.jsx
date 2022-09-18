import React from 'react';
import { Link } from 'react-router-dom';
import casa from '../assets/img/casa.png';
import contacto from '../assets/img/contacto.png';
import Torta from '../assets/img/torta1.png';

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-link">
          <img src={casa} alt="icono de casa" className="icono" />
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-link">
          <img src={contacto} alt="icono de agenda" className="icono" />
          <Link to="/contacto">Contacto</Link>
        </div>
      </nav>
      <div className="navbar-link">
        <p>Happy Cake</p>
        <img src={Torta} alt="trozo de torta" className="icono" />
      </div>
    </div>
  );
};
