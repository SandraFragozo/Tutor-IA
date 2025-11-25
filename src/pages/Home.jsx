import { Link } from 'react-router-dom';
import {
    BookOpen, Target, Map, Lock, FolderOpen,
    Brain, Compass, Telescope, Layout, Dices,
    PenTool, Gavel, ClipboardCheck
} from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-slate-50">

            {/* --- HERO SECTION --- */}
            <header className="bg-white border-b border-slate-200 pt-16 pb-20 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Tutoría <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">IA</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                        Tu copiloto para la tesis. Transforma la teoría compleja en herramientas visuales, interactivas y prácticas.
                    </p>
                    <div className="inline-flex gap-4">
                        <Link to="/chat-general" className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2">
                            <Brain size={18} /> Asesor Global
                        </Link>
                    </div>
                </div>
            </header>

            {/* --- CONTENEDOR PRINCIPAL --- */}
            <main className="container mx-auto px-6 py-16 space-y-20">

                {/* === SECCIÓN 1: EL PROBLEMA === */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><FolderOpen /></div>
                        <h2 className="text-2xl font-bold text-slate-800">Sección 1: Fundamentos</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card: Planteamiento */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Target size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Planteamiento del Problema</h3>
                            <p className="text-slate-500 text-sm mb-6 flex-1">
                                Diagnostica tu tema, delimita el alcance y justifica la importancia de tu estudio.
                            </p>
                            <Link to="/planteamiento" className="block w-full py-2 text-center rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs hover:bg-indigo-100 mt-auto">
                                Explorar Guía
                            </Link>
                        </div>
                    </div>
                </section>

                {/* === SECCIÓN 2 & 3: MARCO TEÓRICO E HIPÓTESIS (Próximamente) === */}
                <section className="opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-slate-100 text-slate-500 rounded-lg"><Lock size={20} /></div>
                        <h2 className="text-2xl font-bold text-slate-400">Sección 2 y 3: Teoría e Hipótesis</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 border-dashed flex flex-col h-full">
                            <h3 className="text-lg font-bold text-slate-400 mb-2">Marco Teórico</h3>
                            <p className="text-slate-400 text-sm flex-1">Construcción de bases teóricas y conceptuales.</p>
                            <span className="text-xs font-bold text-slate-400 mt-4 block bg-slate-200 w-fit px-2 py-1 rounded self-start">Próximamente</span>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 border-dashed flex flex-col h-full">
                            <h3 className="text-lg font-bold text-slate-400 mb-2">Hipótesis y Variables</h3>
                            <p className="text-slate-400 text-sm flex-1">Formulación de supuestos y operacionalización.</p>
                            <span className="text-xs font-bold text-slate-400 mt-4 block bg-slate-200 w-fit px-2 py-1 rounded self-start">Próximamente</span>
                        </div>
                    </div>
                </section>

                {/* === SECCIÓN 4: METODOLOGÍA (Core) === */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><FolderOpen /></div>
                        <h2 className="text-2xl font-bold text-slate-800">Sección 4: Estrategia Metodológica</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Paradigmas */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-110 transition-transform"><Brain size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Paradigmas</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">La visión filosófica: Positivista, Interpretativo o Crítico.</p>
                            <Link to="/paradigmas" className="block w-full py-2 text-center rounded-lg bg-purple-50 text-purple-700 font-bold text-xs hover:bg-purple-100 mt-auto">Explorar</Link>
                        </div>

                        {/* Enfoques */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-pink-50 text-pink-600 rounded-xl group-hover:scale-110 transition-transform"><Compass size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Enfoques</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">La ruta: ¿Cuantitativo, Cualitativo o Mixto?</p>
                            <Link to="/enfoques" className="block w-full py-2 text-center rounded-lg bg-pink-50 text-pink-700 font-bold text-xs hover:bg-pink-100 mt-auto">Explorar</Link>
                        </div>

                        {/* Tipología */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl group-hover:scale-110 transition-transform"><Telescope size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Tipología (Alcance)</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">Profundidad: Exploratorio, Descriptivo, Correlacional...</p>
                            <Link to="/tipologia" className="block w-full py-2 text-center rounded-lg bg-teal-50 text-teal-700 font-bold text-xs hover:bg-teal-100 mt-auto">Explorar</Link>
                        </div>

                        {/* Diseños */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-violet-50 text-violet-600 rounded-xl group-hover:scale-110 transition-transform"><Layout size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Diseños</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">Plan de acción: Experimental vs No Experimental.</p>
                            <Link to="/disenos" className="block w-full py-2 text-center rounded-lg bg-violet-50 text-violet-700 font-bold text-xs hover:bg-violet-100 mt-auto">Explorar</Link>
                        </div>

                        {/* Muestreo */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform"><Dices size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Muestreo</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">Selección de participantes: Probabilístico vs No Probabilístico.</p>
                            <Link to="/muestreo" className="block w-full py-2 text-center rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs hover:bg-emerald-100 mt-auto">Explorar</Link>
                        </div>

                        {/* Instrumentos */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:scale-110 transition-transform"><PenTool size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Instrumentos</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">Herramientas: Cuestionarios, Entrevistas, Observación.</p>
                            <Link to="/instrumentos" className="block w-full py-2 text-center rounded-lg bg-orange-50 text-orange-700 font-bold text-xs hover:bg-orange-100 mt-auto">Explorar</Link>
                        </div>
                    </div>
                </section>

                {/* === SECCIÓN 5: RIGOR Y VALIDACIÓN === */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-fuchsia-100 text-fuchsia-600 rounded-lg"><FolderOpen /></div>
                        <h2 className="text-2xl font-bold text-slate-800">Sección 5: Rigor Científico</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Juicio de Expertos */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-fuchsia-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-violet-50 text-violet-600 rounded-xl group-hover:scale-110 transition-transform"><Gavel size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Juicio de Expertos</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">Fundamentos teóricos de la validación y selección de jueces.</p>
                            <Link to="/juicio-expertos" className="block w-full py-2 text-center rounded-lg bg-violet-50 text-violet-700 font-bold text-xs hover:bg-violet-100 mt-auto">Ver Teoría</Link>
                        </div>

                        {/* Validación Operativa */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-fuchsia-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-fuchsia-50 text-fuchsia-600 rounded-xl group-hover:scale-110 transition-transform"><ClipboardCheck size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Validación Práctica</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">Proceso paso a paso: Kit de validación y cálculo de acuerdo.</p>
                            <Link to="/validacion" className="block w-full py-2 text-center rounded-lg bg-fuchsia-50 text-fuchsia-700 font-bold text-xs hover:bg-fuchsia-100 mt-auto">Ver Proceso</Link>
                        </div>

                        {/* Cronograma */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-fuchsia-100 hover:shadow-md transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl group-hover:scale-110 transition-transform"><Map size={24} /></div>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">Cronograma</h3>
                            <p className="text-sm text-slate-500 mb-6 flex-1">Planificación temporal y diagrama de Gantt.</p>
                            <Link to="/cronograma" className="block w-full py-2 text-center rounded-lg bg-rose-50 text-rose-700 font-bold text-xs hover:bg-rose-100 mt-auto">Planificar</Link>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}