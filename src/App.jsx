import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChatGeneral from './pages/GeneralChat';
import Planteamiento from './pages/S1/Planteamiento';
import Paradigmas from './pages/S4/Paradigmas';
import Enfoques from './pages/S4/Enfoques';
import Tipologia from './pages/S4/Tipologia';
import Disenos from './pages/S4/Disenos';
import Muestreo from './pages/S4/Muestreo';
import Instrumentos from './pages/S4/Instrumentos';
import JuicioExpertos from './pages/S5/JuicioExpertos';
import Cronograma from './pages/S5/Cronograma';

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
        <Route path="/chat-general" element={<ChatGeneral />} />
        <Route path="/planteamiento" element={<Planteamiento />} />
        <Route path="/paradigmas" element={<Paradigmas />} />
        <Route path="/enfoques" element={<Enfoques />} />
        <Route path="/tipologia" element={<Tipologia />} />
        <Route path="/disenos" element={<Disenos />} />
        <Route path="/muestreo" element={<Muestreo />} />
        <Route path="/instrumentos" element={<Instrumentos />} />
        <Route path="/juicio-expertos" element={<JuicioExpertos />} />
        <Route path="/cronograma" element={<Cronograma />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;