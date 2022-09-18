import React from 'react';

export const Contacto = () => {
  return (
    <div className="contacto">
      <h1>Cuentame, ¿en que te podemos ayudar?</h1>
      <h2>Correo:</h2>
      <input type="text" placeholder="name@example.com" />
      <h2>Descripción</h2>
      <textarea></textarea>
      <button className="btn">Enviar</button>
    </div>
  );
};
