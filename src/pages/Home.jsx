import { Link } from 'react-router-dom';

export default function Home() {
    return (
        // min-h-screen asegura que el fondo cubra toda la altura aunque haya poco contenido
        <div className="min-h-screen w-full bg-slate-50">

            {/* Header / Banner Principal */}
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 text-center shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Biblioteca de Investigación</h1>
                    <p className="text-lg md:text-xl opacity-90">Guías interactivas y tutoría con IA para tu tesis.</p>
                </div>
            </header>

            {/* Contenedor Principal */}
            <main className="container mx-auto px-4 py-12">

                {/* GRID RESPONSIVO: 
            grid-cols-1 = 1 columna en celulares
            md:grid-cols-2 = 2 columnas en tablets
            lg:grid-cols-3 = 3 columnas en laptops 
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Tarjeta 1: Paradigmas */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-purple-500">
                        <div className="text-4xl mb-4">🧠</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Paradigmas</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Positivista, Interpretativo, Crítico. ¿Desde qué lente ves la realidad? Encuentra tu postura filosófica.
                        </p>
                        <Link to="/paradigmas" className="block w-full text-center bg-purple-50 text-purple-700 py-2 rounded-lg font-semibold hover:bg-purple-100 transition">
                            Ver Guía →
                        </Link>
                    </div>

                    {/* Tarjeta 2: Muestreo (Placeholder) */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-500">
                        <div className="text-4xl mb-4">👥</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Muestreo</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            ¿Probabilístico o No Probabilístico? Calcula tu muestra y justifica tu selección de participantes.
                        </p>
                        <button className="block w-full text-center bg-slate-100 text-slate-400 py-2 rounded-lg font-semibold cursor-not-allowed">
                            Próximamente
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}