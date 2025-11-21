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

                    {/* 2. Tarjeta: Enfoques */}
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

                    {/* 3. Tarjeta: Tipología (Alcance) */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-teal-500">
                        <div className="text-4xl mb-4">🔭</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Tipología</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Exploratorio, Descriptivo, Correlacional, Explicativo. Define la profundidad y el alcance de tu estudio.
                        </p>
                        <Link to="/tipologia" className="block w-full text-center bg-teal-50 text-teal-700 py-2 rounded-lg font-semibold hover:bg-teal-100 transition">
                            Ver Guía →
                        </Link>
                    </div>

                    {/* 4. Tarjeta: Diseños (Experimental vs No Experimental) */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-violet-600">
                        <div className="text-4xl mb-4">🗺️</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Diseños</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Experimental vs No Experimental. ¿Vas a manipular variables o a observar la realidad tal cual es?
                        </p>
                        <Link to="/disenos" className="block w-full text-center bg-violet-50 text-violet-700 py-2 rounded-lg font-semibold hover:bg-violet-100 transition">
                            Ver Guía →
                        </Link>
                    </div>

                    {/* 5. Tarjeta: Muestreo */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-emerald-500">
                        <div className="text-4xl mb-4">🎲</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Muestreo</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            ¿Probabilístico (Sorteo) o No Probabilístico (Criterio)? Aprende a seleccionar a tus participantes.
                        </p>
                        <Link to="/muestreo" className="block w-full text-center bg-emerald-50 text-emerald-700 py-2 rounded-lg font-semibold hover:bg-emerald-100 transition">
                            Ver Guía →
                        </Link>
                    </div>

                    {/* 6. Tarjeta: Instrumentos (NUEVA) */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-orange-500">
                        <div className="text-4xl mb-4">🛠️</div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Instrumentos</h2>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Cuestionarios, Entrevistas, Observación. Elige la herramienta perfecta para recolectar tus datos.
                        </p>
                        <Link to="/instrumentos" className="block w-full text-center bg-orange-50 text-orange-700 py-2 rounded-lg font-semibold hover:bg-orange-100 transition">
                            Ver Guía →
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}