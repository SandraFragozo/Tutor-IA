import { useState } from 'react';
import { Microscope, MessageCircle, Megaphone, Wrench, Brain, CheckCircle, History, ArrowRight, Lightbulb } from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Paradigmas() {
    const [activeTab, setActiveTab] = useState('positivista');

    const paradigmas = {
        positivista: {
            // Definimos las clases completas para que Tailwind NO las borre
            styles: {
                bgSoft: "bg-blue-50",
                bgIcon: "bg-blue-100",
                textIcon: "text-blue-600",
                textTitle: "text-blue-800",
                borderMain: "border-blue-500",
                borderLight: "border-blue-200",
                ring: "ring-blue-500",
                tabActiveBg: "bg-blue-100",
                tabActiveText: "text-blue-700"
            },
            icon: <Microscope className="w-6 h-6" />,
            title: "Positivista",
            subtitle: "La realidad es objetiva y medible",
            definition: "Busca explicar y predecir fenómenos mediante leyes universales. Asume que la realidad está 'ahí fuera', independiente de quien la observa.",
            characteristics: [
                "Usa métodos cuantitativos y estadística.",
                "El investigador es neutral y distante.",
                "Busca Causa-Efecto y generalización.",
                "Verificación de hipótesis."
            ],
            example: "Medir la frecuencia cardíaca (dato duro) de estudiantes antes de un examen para correlacionarla con su calificación.",
            keywords: ["Objetividad", "Medición", "Leyes Universales", "Cuantitativo"]
        },
        interpretativo: {
            styles: {
                bgSoft: "bg-green-50",
                bgIcon: "bg-green-100",
                textIcon: "text-green-600",
                textTitle: "text-green-800",
                borderMain: "border-green-500",
                borderLight: "border-green-200",
                ring: "ring-green-500",
                tabActiveBg: "bg-green-100",
                tabActiveText: "text-green-700"
            },
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Interpretativo",
            subtitle: "La realidad se construye socialmente",
            definition: "Busca comprender el significado profundo que las personas dan a sus experiencias. La realidad no se descubre, se construye en la mente de las personas.",
            characteristics: [
                "Usa métodos cualitativos (entrevistas, diarios).",
                "Interacción cercana investigador-participante.",
                "No busca generalizar, sino profundizar.",
                "Subjetividad como herramienta."
            ],
            example: "Entrevistar a estudiantes para entender qué *sienten* (angustia, miedo, reto) antes de un examen.",
            keywords: ["Comprensión", "Subjetividad", "Significados", "Cualitativo"]
        },
        critico: {
            styles: {
                bgSoft: "bg-red-50",
                bgIcon: "bg-red-100",
                textIcon: "text-red-600",
                textTitle: "text-red-800",
                borderMain: "border-red-500",
                borderLight: "border-red-200",
                ring: "ring-red-500",
                tabActiveBg: "bg-red-100",
                tabActiveText: "text-red-700"
            },
            icon: <Megaphone className="w-6 h-6" />,
            title: "Sociocrítico",
            subtitle: "La ciencia para transformar",
            definition: "No solo quiere explicar o entender, quiere CAMBIAR la realidad. Asume que la sociedad es injusta y la investigación debe emancipar.",
            characteristics: [
                "Une teoría y práctica (Praxis).",
                "Métodos participativos (Investigación-Acción).",
                "Cuestiona las estructuras de poder.",
                "El investigador es un agente de cambio."
            ],
            example: "Organizar un taller con estudiantes para identificar las causas del estrés escolar y proponer cambios al reglamento.",
            keywords: ["Transformación", "Poder", "Emancipación", "Acción"]
        },
        pragmatico: {
            styles: {
                bgSoft: "bg-orange-50",
                bgIcon: "bg-orange-100",
                textIcon: "text-orange-600",
                textTitle: "text-orange-800",
                borderMain: "border-orange-500",
                borderLight: "border-orange-200",
                ring: "ring-orange-500",
                tabActiveBg: "bg-orange-100",
                tabActiveText: "text-orange-700"
            },
            icon: <Wrench className="w-6 h-6" />,
            title: "Pragmático",
            subtitle: "Lo que funciona",
            definition: "Abandona la guerra filosófica. Se enfoca en usar 'lo que sirva' para resolver el problema. Si necesitas medir Y entender, usas ambos.",
            characteristics: [
                "Métodos Mixtos (Cuali + Cuanti).",
                "Pluralismo metodológico.",
                "Orientado a soluciones prácticas.",
                "Flexibilidad total."
            ],
            example: "Usar una encuesta masiva (Positivista) para detectar problemas y luego entrevistas (Interpretativo) para entenderlos a fondo.",
            keywords: ["Utilidad", "Métodos Mixtos", "Solución", "Práctica"]
        }
    };

    const currentP = paradigmas[activeTab];
    const s = currentP.styles; // Atajo para escribir menos

    return (
        <div className="min-h-screen bg-slate-50 pb-20">

            {/* --- HERO SECTION --- */}
            <header className="bg-white border-b border-slate-200 pt-12 pb-16 px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-6 animate-fade-in">
                    <Brain size={16} /> Metodología de la Investigación
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Paradigmas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Investigación</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Los "lentes" a través de los cuales ves el mundo. Tu elección determinará si usas números, entrevistas o acciones para descubrir la verdad.
                </p>
            </header>

            <main className="max-w-6xl mx-auto px-4 -mt-8">

                {/* --- SELECTOR DE PARADIGMAS (TABS) --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-white p-2 rounded-2xl shadow-xl mb-12">
                    {Object.keys(paradigmas).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`flex items-center justify-center gap-2 py-4 rounded-xl transition-all duration-300 font-semibold
                ${activeTab === key
                                    ? `${paradigmas[key].styles.tabActiveBg} ${paradigmas[key].styles.tabActiveText} shadow-sm scale-105 ring-2 ${paradigmas[key].styles.ring} ring-opacity-50`
                                    : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            {paradigmas[key].icon}
                            <span className="hidden md:inline">{paradigmas[key].title}</span>
                        </button>
                    ))}
                </div>

                {/* --- CONTENIDO DINÁMICO --- */}
                <div className="grid md:grid-cols-12 gap-8 mb-16">

                    {/* Tarjeta Principal */}
                    <div className="md:col-span-8 space-y-6">
                        <div className={`bg-white rounded-3xl p-8 shadow-lg border-l-8 ${s.borderMain} transition-all duration-500`}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-3 rounded-full ${s.bgIcon} ${s.textIcon}`}>
                                    {currentP.icon}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-800">{currentP.title}</h2>
                                    <p className={`${s.textIcon} font-medium`}>{currentP.subtitle}</p>
                                </div>
                            </div>

                            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                                {currentP.definition}
                            </p>

                            {/* Ejemplo Práctico */}
                            <div className={`${s.bgSoft} rounded-xl p-6 border ${s.borderLight}`}>
                                <h3 className={`flex items-center gap-2 font-bold ${s.textTitle} mb-2`}>
                                    <Lightbulb size={20} /> Ejemplo en la vida real:
                                </h3>
                                <p className="text-slate-700 italic">"{currentP.example}"</p>
                            </div>
                        </div>

                        {/* Palabras Clave */}
                        <div className="bg-white rounded-2xl p-6 shadow-md">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Palabras Clave para Examen</h3>
                            <div className="flex flex-wrap gap-3">
                                {currentP.keywords.map((kw) => (
                                    <span key={kw} className={`px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium text-sm border border-slate-200`}>
                                        #{kw}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar de Características */}
                    <div className="md:col-span-4 space-y-4">
                        <div className={`${s.bgSoft} border ${s.borderLight} text-slate-700 rounded-3xl p-6 shadow-lg transition-all duration-300`}>
                            <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${s.textTitle}`}>
                                <CheckCircle className={s.textIcon} /> Características
                            </h3>
                            <ul className="space-y-4">
                                {currentP.characteristics.map((char, index) => (
                                    <li key={index} className="flex gap-3 items-start text-slate-700 text-sm font-medium">
                                        <ArrowRight size={16} className={`mt-1 ${s.textIcon} shrink-0`} />
                                        {char}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tip Rápido */}
                        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 shadow-sm">
                            <span className="text-2xl">🤔</span>
                            <p className="text-sm text-purple-900 mt-2 font-bold">
                                ¿Cuándo elegirlo?
                                <br />
                                <span className="font-medium text-purple-700/90 leading-relaxed block mt-1">
                                    {activeTab === 'positivista' && "Cuando quieras probar una teoría o medir variables exactas."}
                                    {activeTab === 'interpretativo' && "Cuando sepas poco del tema y quieras explorar experiencias profundas."}
                                    {activeTab === 'critico' && "Cuando veas una injusticia y tu estudio busque empoderar a la gente."}
                                    {activeTab === 'pragmatico' && "Cuando el problema es complejo y necesitas números Y historias."}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- TIMELINE HISTÓRICO --- */}
                <section className="py-12 border-t border-slate-200">
                    <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                        <History /> Evolución Histórica
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                            <div className="absolute -top-3 left-6 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">S. XIX - XX</div>
                            <h4 className="font-bold text-lg mb-2 mt-2">Positivismo Clásico</h4>
                            <p className="text-xs text-slate-500">Comte & Durkheim. Aplicar el método de ciencias naturales a lo social.</p>
                        </div>
                        <div className="relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                            <div className="absolute -top-3 left-6 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Mediados S. XX</div>
                            <h4 className="font-bold text-lg mb-2 mt-2">Interpretativismo</h4>
                            <p className="text-xs text-slate-500">Weber. Reacción contra la rigidez. Importa la subjetividad.</p>
                        </div>
                        <div className="relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                            <div className="absolute -top-3 left-6 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">1960s - 80s</div>
                            <h4 className="font-bold text-lg mb-2 mt-2">Teoría Crítica</h4>
                            <p className="text-xs text-slate-500">Escuela de Frankfurt. Contexto de luchas sociales y derechos.</p>
                        </div>
                        <div className="relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
                            <div className="absolute -top-3 left-6 bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">1990s - Hoy</div>
                            <h4 className="font-bold text-lg mb-2 mt-2">Pragmatismo</h4>
                            <p className="text-xs text-slate-500">Fin de las guerras de paradigmas. Enfoques mixtos flexibles.</p>
                        </div>
                    </div>
                </section>

            </main>
            <Chatbot tema="Paradigmas de Investigación" />
        </div>
    );
}