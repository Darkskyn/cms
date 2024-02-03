import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './Index.css';
import Nosotros from './Nosostros.jsx';
import Noticias from './Noticias.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<App />} />
        <Route path="/Sobre_Nosotro" element={<Nosotros />} />
        <Route path="Noticias_LoL" element={<Noticias />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);