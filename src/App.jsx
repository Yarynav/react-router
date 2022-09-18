import { useState } from 'react';
import { Home } from './views/Home';
import { Contacto } from './views/Contacto';
import { Navbar } from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
