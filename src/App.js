import React, { useEffect}  from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Inicio from "./pages/Inicio";
import QuienesSomos from "./pages/QuienesSomos";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";

function App() {

  useEffect(() => {
    document.title = "Artisan Beard ";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienesSomos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
