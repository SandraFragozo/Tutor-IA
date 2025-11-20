import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Paradigmas from './pages/S4/Paradigmas';

// Importaremos tus infografías aquí más adelante
// import Paradigmas from './pages/Paradigmas'; 

function App() {
  return (
    <BrowserRouter>
      {/* El Navbar está FUERA de Routes, así que se ve en TODAS las páginas */}
      <Navbar />

      <Routes>
        {/* Cuando la ruta sea "/", muestra el Home */}
        <Route path="/" element={<Home />} />
        <Route path="/paradigmas" element={<Paradigmas />} />

        {/* Ejemplo de futura ruta */}
        {/* <Route path="/paradigmas" element={<Paradigmas />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;