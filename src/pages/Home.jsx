import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 p-8">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-blue-700 mb-2">Biblioteca de Recursos</h1>
                <p className="text-lg text-slate-600">Guías interactivas para tu investigación.</p>
            </header>

            {/* Grid de Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* Tarjeta 1: Paradigmas (Ejemplo) */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 border-l-4 border-purple-500">
                    <h2 className="text-2xl font-bold mb-2">🧠 Paradigmas</h2>
                    <p className="text-slate-600 mb-4">Positivista, Interpretativo, Crítico. ¿Desde qué lente ves la realidad?</p>
                    <Link to="/paradigmas" className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold hover:bg-purple-200">
                        Ver Guía →
                    </Link>
                </div>

                {/* Aquí puedes copiar y pegar más tarjetas para Muestreo, Instrumentos, etc. */}

            </div>
        </div>
    );
}