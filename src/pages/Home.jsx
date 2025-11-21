import { Link } from 'react-router-dom';

export default function Home() {
    return (
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

                {/* Grid Responsivo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* 1. Tarjeta: Paradigmas */}
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

                    {/* 2. Tarjeta: Enfoques Metodológicos (NUEVA) */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-pink-500">
                        <div className="text-4xl mb-4">🧭</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Enfoques</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            ¿Cuantitativo, Cualitativo o Mixto? Descubre qué camino tomar según tu pregunta de investigación.
                        </p>
                        <Link to="/enfoques" className="block w-full text-center bg-pink-50 text-pink-700 py-2 rounded-lg font-semibold hover:bg-pink-100 transition">
                            Ver Guía →
                        </Link>
                    </div>

                    {/* 3. Tarjeta: Tipología de Estudios (NUEVA) */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-teal-500">
                        <div className="text-4xl mb-4">🔭</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Tipología (Alcance)</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Exploratorio, Descriptivo, Correlacional, Explicativo. Define la profundidad y el alcance de tu estudio.
                        </p>
                        <Link to="/tipologia" className="block w-full text-center bg-teal-50 text-teal-700 py-2 rounded-lg font-semibold hover:bg-teal-100 transition">
                            Ver Guía →
                        </Link>
                    </div>

                    {/* 4. Tarjeta: Muestreo (Próximamente) */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-500 opacity-75 grayscale hover:grayscale-0">
                        <div className="text-4xl mb-4">👥</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Muestreo</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            ¿Probabilístico o No Probabilístico? Aprende a calcular tu muestra y seleccionar participantes.
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