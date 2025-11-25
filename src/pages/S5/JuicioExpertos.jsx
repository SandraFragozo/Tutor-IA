import { useState } from 'react';
import {
    Gavel, Users, Calculator, Brain, CheckCircle2,
    AlertTriangle, FileText, GitMerge, TrendingUp,
    Award, Microscope, Briefcase, MessageSquare,
    Eye, ShieldCheck, XCircle
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function JuicioExpertos() {
    const [activeCriteria, setActiveCriteria] = useState('suficiencia');

    // Datos para los Criterios de Evaluación
    const criteriaData = {
        suficiencia: {
            title: "Suficiencia",
            q: "¿Falta algo?",
            desc: "Los ítems que pertenecen a una misma dimensión deben bastar para obtener la medición de esta.",
            detail: "¿Son suficientes los reactivos para cubrir todo el tema? ¿Se está dejando algún aspecto teórico fuera?"
        },
        claridad: {
            title: "Claridad",
            q: "¿Se entiende?",
            desc: "El ítem se comprende fácilmente, su sintaxis y semántica son adecuadas.",
            detail: "¿El lenguaje es apropiado para la población objetivo? ¿Es directo o confuso?"
        },
        coherencia: {
            title: "Coherencia",
            q: "¿Tiene lógica?",
            desc: "El ítem tiene relación lógica con la dimensión o indicador que está midiendo.",
            detail: "¿La pregunta realmente pertenece a la variable que dice medir o se salió del tema?"
        },
        relevancia: {
            title: "Relevancia",
            q: "¿Importa?",
            desc: "El ítem es esencial e importante, es decir, debe ser incluido.",
            detail: "¿Podemos eliminar esta pregunta sin afectar el resultado? ¿Aporta valor real?"
        }
    };

    const currentCriteria = criteriaData[activeCriteria];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800">

            {/* --- HERO SECTION: DEFINICIÓN Y ALCANCE --- */}
            <header className="bg-white pt-16 pb-20 px-6 border-b border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>

                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-xs font-bold tracking-widest uppercase mb-6">
                        <Gavel size={14} /> Validación Metodológica
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        Juicio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Expertos</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12">
                        Método de validación donde personas con trayectoria reconocida evalúan la calidad de un instrumento.
                        Es el filtro que asegura que mides lo que crees medir.
                    </p>

                    {/* Dos grandes ámbitos de aplicación */}
                    <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Microscope size={24} /></div>
                                <h3 className="font-bold text-lg text-blue-900">En Investigación</h3>
                            </div>
                            <p className="text-sm text-blue-800/80 leading-relaxed">
                                Se usa para confirmar la <strong>Validez de Contenido</strong>. Asegura que encuestas, tests o escalas estén bien construidos teóricamente antes de aplicarlos.
                            </p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl hover:shadow-md transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Briefcase size={24} /></div>
                                <h3 className="font-bold text-lg text-emerald-900">En Gestión de Proyectos</h3>
                            </div>
                            <p className="text-sm text-emerald-800/80 leading-relaxed">
                                Según el PMBOK, sirve para estimar tiempos, costos, evaluar riesgos y validar propuestas técnicas complejas.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 -mt-8 space-y-24 relative z-20">

                {/* --- SECCIÓN 1: SELECCIÓN DE EXPERTOS (LA FÓRMULA K) --- */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Fase 1: Selección Rigurosa</h2>
                        <p className="text-slate-500 mt-2">No basta con que sea "el profe". Debes calcular su competencia.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Tarjeta Visual de la Fórmula */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-indigo-50 w-32 h-32 rounded-bl-full -mr-4 -mt-4"></div>

                            <h3 className="text-xl font-bold text-indigo-900 mb-6 relative z-10">Coeficiente de Competencia ($K$)</h3>

                            <div className="flex items-center justify-center gap-4 text-2xl font-mono font-bold text-slate-700 mb-8">
                                <span>K</span>
                                <span>=</span>
                                <div className="flex flex-col items-center border-b-2 border-slate-800 px-2">
                                    <span>Kc + Ka</span>
                                </div>
                                <span>/ 2</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg font-bold text-xs shrink-0">Kc</div>
                                    <div>
                                        <strong className="block text-sm text-slate-800">Coeficiente de Conocimiento</strong>
                                        <p className="text-xs text-slate-500">Autovaloración del experto (0 a 10) sobre cuánto sabe del tema específico.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg font-bold text-xs shrink-0">Ka</div>
                                    <div>
                                        <strong className="block text-sm text-slate-800">Coeficiente de Argumentación</strong>
                                        <p className="text-xs text-slate-500">Fundamentación: ¿Su saber viene de experiencia práctica, teoría o intuición?</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reglas de Oro de Selección */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-violet-500 shadow-sm">
                                <h4 className="font-bold text-violet-800 mb-2 flex items-center gap-2"><Users size={20} /> Número Ideal</h4>
                                <p className="text-sm text-slate-600">
                                    Se recomienda un <strong>número impar</strong> para facilitar desempates.
                                    <br />• Posgrado/Maestría: <strong>3 a 7 expertos</strong>.
                                    <br />• Estudios a gran escala: <strong>Más de 10</strong>.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-pink-500 shadow-sm">
                                <h4 className="font-bold text-pink-800 mb-2 flex items-center gap-2"><Award size={20} /> Perfil Ideal</h4>
                                <p className="text-sm text-slate-600">
                                    Debe tener dominio teórico del constructo Y experiencia práctica. Evita el "sesgo de disponibilidad" (elegir solo a tus amigos).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 2: METODOLOGÍAS (Grid Comparativo) --- */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Fase 2: ¿Cómo recopilar su opinión?</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Método 1 */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow group">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                                <FileText size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Agregados Individuales</h3>
                            <p className="text-sm text-slate-500 mb-4">Se pide la opinión a cada experto por separado. No hay interacción entre ellos.</p>
                            <div className="text-xs font-bold text-orange-600 bg-orange-50 p-2 rounded inline-block">
                                ⚡ Económico y Rápido
                            </div>
                        </div>

                        {/* Método 2 */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow group">
                            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                                <Users size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Grupo Nominal</h3>
                            <p className="text-sm text-slate-500 mb-4">Reunión (presencial/virtual) donde se discute y vota. Permite debate estructurado.</p>
                            <div className="text-xs font-bold text-cyan-600 bg-cyan-50 p-2 rounded inline-block">
                                🗣️ Debate en vivo
                            </div>
                        </div>

                        {/* Método 3 */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow group">
                            <div className="w-12 h-12 bg-fuchsia-100 rounded-full flex items-center justify-center text-fuchsia-600 mb-4 group-hover:scale-110 transition-transform">
                                <GitMerge size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-slate-800 mb-2">Método Delphi</h3>
                            <p className="text-sm text-slate-500 mb-4">Proceso iterativo, anónimo y por rondas. Responden, reciben feedback estadístico y vuelven a responder hasta el consenso.</p>
                            <div className="text-xs font-bold text-fuchsia-600 bg-fuchsia-50 p-2 rounded inline-block">
                                🏆 El más riguroso
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 3: CRITERIOS DE EVALUACIÓN (Interactivo) --- */}
                <section className="max-w-5xl mx-auto bg-indigo-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-bold mb-4">¿Qué evalúan?</h2>
                            <p className="text-indigo-200 mb-8">
                                Los expertos no solo dicen "está bien". Califican (1-5) cada ítem bajo 4 lentes específicos.
                            </p>
                            <div className="flex flex-col gap-2">
                                {Object.entries(criteriaData).map(([key, data]) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveCriteria(key)}
                                        className={`p-4 rounded-xl text-left font-bold transition-all flex items-center justify-between
                                ${activeCriteria === key ? 'bg-white text-indigo-900 shadow-lg scale-105' : 'bg-indigo-800/50 text-indigo-300 hover:bg-indigo-800'}`}
                                    >
                                        {data.title}
                                        {activeCriteria === key && <Eye size={18} />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 h-full animate-fade-in">
                                <div className="inline-block bg-indigo-500 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 shadow-sm">
                                    La Pregunta Clave
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-white">"{currentCriteria.q}"</h3>
                                <h4 className="text-xl text-indigo-300 mb-6">{currentCriteria.desc}</h4>

                                <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                                    <strong className="block text-sm text-indigo-200 mb-2 uppercase tracking-wide">Detalle para el experto:</strong>
                                    <p className="text-white text-lg leading-relaxed">
                                        {currentCriteria.detail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 4: ANÁLISIS ESTADÍSTICO (Dashboard) --- */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Fase 3: Cuantificar el Acuerdo</h2>
                    <p className="text-center text-slate-500 max-w-2xl mx-auto -mt-6 mb-12">
                        No basta con opiniones cualitativas. Necesitas demostrar validez con números.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card IVC */}
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-emerald-500 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-slate-800 text-lg">IVC (Lawshe)</h3>
                                <Calculator className="text-emerald-500" size={20} />
                            </div>
                            <p className="text-sm text-slate-600 mb-3">Índice de Validez de Contenido. Mide el grado de acuerdo sobre un ítem específico.</p>
                            <div className="text-xs bg-emerald-50 text-emerald-700 p-2 rounded">El más básico y común.</div>
                        </div>

                        {/* Card V de Aiken */}
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-blue-500 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-slate-800 text-lg">V de Aiken</h3>
                                <TrendingUp className="text-blue-500" size={20} />
                            </div>
                            <p className="text-sm text-slate-600 mb-3">Cuantifica la relevancia respecto a un dominio. Rango de 0 a 1.</p>
                            <div className="text-xs bg-blue-50 text-blue-700 p-2 rounded"><strong>&gt; 0.80</strong> es aceptable.</div>
                        </div>

                        {/* Card Kappa */}
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-violet-500 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-slate-800 text-lg">Kappa de Fleiss</h3>
                                <GitMerge className="text-violet-500" size={20} />
                            </div>
                            <p className="text-sm text-slate-600 mb-3">Mide concordancia entre múltiples jueces eliminando el acuerdo por azar.</p>
                            <div className="text-xs bg-violet-50 text-violet-700 p-2 rounded">Para categorías nominales.</div>
                        </div>

                        {/* Card Kendall */}
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-amber-500 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-slate-800 text-lg">W de Kendall</h3>
                                <MessageSquare className="text-amber-500" size={20} />
                            </div>
                            <p className="text-sm text-slate-600 mb-3">Mide el grado de asociación en las evaluaciones de varios jueces.</p>
                            <div className="text-xs bg-amber-50 text-amber-700 p-2 rounded">Útil para rankings u orden.</div>
                        </div>
                    </div>
                </section>

                {/* --- BALANCE FINAL: PROS Y CONTRAS --- */}
                <section className="mt-20 max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 bg-emerald-50/30">
                            <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2">
                                <CheckCircle2 /> Ventajas
                            </h3>
                            <ul className="space-y-4 text-sm text-slate-700">
                                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></div> Estimación fiable sin datos históricos.</li>
                                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></div> Mejora drástica de la calidad antes de salir a campo.</li>
                                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></div> Más económico que una prueba piloto masiva.</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-rose-50/30 border-l border-slate-100">
                            <h3 className="font-bold text-rose-800 mb-6 flex items-center gap-2">
                                <XCircle /> Desventajas (Sesgos)
                            </h3>
                            <ul className="space-y-4 text-sm text-slate-700">
                                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5"></div> <strong>Sesgo de Autoridad:</strong> Un experto muy convincente puede estar equivocado.</li>
                                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5"></div> <strong>Sesgo de Disponibilidad:</strong> Basarse solo en experiencias recientes.</li>
                                <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5"></div> Dificultad para encontrar expertos dispuestos.</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </main>

            <Chatbot tema="Juicio de Expertos" />
        </div>
    );
}