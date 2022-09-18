import React from 'react';
import Torta from '../assets/img/torta.png';

export const Home = () => {
  return (
    <div className="home">
      <div className="fuente">
        Bienvenido a <span className="negrita">Happy Cake</span>
      </div>
      <p>El lugar de los pasteles felices</p>
      <img src={Torta} alt="figura de la torta" />
    </div>
  );
};
