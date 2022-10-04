import { useState } from 'react';
import { Home } from './views/Home';
import { Contacto } from './views/Contacto';
import { Navbar } from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<div>Pagina no encontrada</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
