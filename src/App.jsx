import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Paradigmas from './pages/S4/Paradigmas';
import Enfoques from './pages/S4/Enfoques';
import Tipologia from './pages/S4/Tipologia';
import Disenos from './pages/S4/Disenos';
import Muestreo from './pages/S4/Muestreo';

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
        <Route path="/enfoques" element={<Enfoques />} />
        <Route path="/tipologia" element={<Tipologia />} />
        <Route path="/disenos" element={<Disenos />} />
        <Route path="/muestreo" element={<Muestreo />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;