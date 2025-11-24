import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="bg-slate-900 text-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo / Título */}
                <Link to="/" className="text-xl font-bold flex items-center gap-2">
                    🤖 TutorIA
                </Link>

                {/* Enlaces de Navegación */}
                <div className="flex gap-4 text-sm font-medium">
                    <Link to="/" className="hover:text-blue-400 transition">Inicio</Link>

                    <Link to="/chat-general" className="flex items-center gap-1 hover:text-indigo-400 transition text-indigo-300">
                        <MessageCircle size={16} /> Asesor IA
                    </Link>

                    <span className="text-slate-500">|</span>
                    <a href="https://github.com" target="_blank" className="hover:text-blue-400">GitHub</a>
                </div>
            </div>
        </nav>
    );
}