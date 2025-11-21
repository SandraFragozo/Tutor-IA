import { useState } from 'react';
import {
    FlaskConical, Eye, Calendar, Zap, Users,
    ArrowRight, CheckCircle2, AlertTriangle,
    Map, MousePointerClick
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Disenos() {
    const [activeType, setActiveType] = useState('experimental'); // experimental | no_experimental
    const [activeLongitudinal, setActiveLongitudinal] = useState('tendencia'); // Para la sub-sección longitudinal

    const content = {
        experimental: {
            color: "violet",
            icon: <FlaskConical size={48} />,
            title: "Diseños Experimentales",
            subtitle: "Manipulación y Control",
            desc: "El investigador es un arquitecto activo. Construye una situación, manipula variables intencionalmente y controla el entorno para ver qué pasa.",
            features: [
                "🧪 Manipulación deliberada de variables (Causa -> Efecto).",
                "🛡️ Control estricto de variables extrañas.",
                "🎲 Asignación aleatoria (al azar) de participantes.",
                "👥 Grupo Experimental vs. Grupo Control."
            ],
            types: [
                {
                    name: "Pre-experimental",
                    level: "Bajo Control",
                    desc: "Mínimo control. Se trabaja con un solo grupo y no hay comparación real. Es como un 'ensayo' rápido.",
                    example: "Aplicar una prueba a un grupo antes y después de un taller, sin grupo de control."
                },
                {
                    name: "Cuasi-experimental",
                    level: "Control Medio",
                    desc: "Se manipula la variable, pero NO se puede asignar al azar (usas grupos ya formados, como salones de clase).",
                    example: "Probar un método educativo en el Grupo A y otro en el Grupo B (que ya existían)."
                },
                {
                    name: "Experimental Puro",
                    level: "Control Total",
                    desc: "El estándar de oro. Manipulación + Aleatorización + Grupo Control. Garantiza validez interna.",
                    example: "Ensayo clínico donde los pacientes son sorteados para recibir la medicina o un placebo."
                }
            ]
        },
        no_experimental: {
            color: "indigo",
            icon: <Eye size={48} />,
            title: "Diseños No Experimentales",
            subtitle: "Observación en Contexto",
            desc: "El investigador es un observador pasivo. No toca nada, solo registra lo que ocurre naturalmente en la realidad sin intervenir.",
            features: [
                "👀 No hay manipulación de variables.",
                "🌍 Se observa el fenómeno en su contexto natural.",
                "🚫 No se asignan sujetos al azar.",
                "📉 Ideal para variables éticamente imposibles de manipular (ej. fumar)."
            ],
            types: [
                {
                    name: "Transversal",
                    level: "Una Foto 📸",
                    desc: "Recolectan datos en un solo momento único en el tiempo. Describen el estado actual.",
                    example: "Una encuesta nacional de salud realizada en mayo de 2024."
                },
                {
                    name: "Longitudinal",
                    level: "Una Película 🎥",
                    desc: "Analizan cambios a través del tiempo. Miden a los sujetos varias veces.",
                    example: "Seguir a un grupo de niños desde preescolar hasta la universidad."
                }
            ]
        }
    };

    const current = content[activeType];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800">

            {/* --- HERO SECTION --- */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-sm font-bold tracking-wide uppercase mb-4">
                        <Map size={14} /> Plan Estratégico
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        Diseños de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Investigación</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        El plano maestro de tu estudio. ¿Vas a intervenir en la realidad (Experimentar) o a observarla tal cual es (No Experimental)?
                    </p>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 mt-12">

                {/* --- CONTROL PRINCIPAL (SWITCH) --- */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-2 rounded-2xl shadow-md border border-slate-100 inline-flex gap-2">
                        <button
                            onClick={() => setActiveType('experimental')}
                            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg
                    ${activeType === 'experimental'
                                    ? 'bg-violet-600 text-white shadow-lg scale-105'
                                    : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            <FlaskConical size={24} /> Experimentales
                        </button>
                        <button
                            onClick={() => setActiveType('no_experimental')}
                            className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg
                    ${activeType === 'no_experimental'
                                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                    : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            <Eye size={24} /> No Experimentales
                        </button>
                    </div>
                </div>

                {/* --- CONTENIDO DINÁMICO (Experimental / No Experimental) --- */}
                <div className="grid lg:grid-cols-12 gap-12 mb-24 animate-fade-in">

                    {/* Columna Izquierda: Definición y Características */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className={`bg-white p-8 rounded-3xl shadow-xl border-t-8 border-${current.color}-500`}>
                            <div className={`w-20 h-20 rounded-2xl bg-${current.color}-100 text-${current.color}-600 flex items-center justify-center mb-6`}>
                                {current.icon}
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">{current.title}</h2>
                            <p className={`text-xl font-bold text-${current.color}-600 mb-6`}>{current.subtitle}</p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                {current.desc}
                            </p>

                            <div className={`bg-${current.color}-50 rounded-2xl p-6 border border-${current.color}-100`}>
                                <h4 className={`font-bold text-${current.color}-800 mb-4 flex items-center gap-2`}>
                                    <CheckCircle2 size={20} /> Características Clave
                                </h4>
                                <ul className="space-y-3">
                                    {current.features.map((feat, i) => (
                                        <li key={i} className="flex gap-3 text-slate-700 text-sm font-medium">
                                            <ArrowRight size={16} className={`text-${current.color}-500 shrink-0 mt-1`} />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Tipos Específicos */}
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wider mb-4">Tipos de Diseños {current.title}</h3>

                        {current.types.map((type, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className={`text-xl font-bold text-${current.color}-700 group-hover:text-${current.color}-600 transition-colors`}>
                                        {type.name}
                                    </h4>
                                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded bg-${current.color}-50 text-${current.color}-600`}>
                                        {type.level}
                                    </span>
                                </div>
                                <p className="text-slate-600 mb-4 leading-relaxed">{type.desc}</p>
                                <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border-l-4 border-slate-300 italic">
                                    <strong>Ejemplo:</strong> {type.example}
                                </div>
                            </div>
                        ))}

                        {/* --- SECCIÓN ESPECIAL: LONGITUDINALES (Solo visible en No Experimental) --- */}
                        {activeType === 'no_experimental' && (
                            <div className="mt-12 pt-12 border-t border-slate-200">
                                <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                                    <Calendar className="text-indigo-500" /> Profundizando en Longitudinales
                                </h3>

                                <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden">
                                    {/* Pestañas internas */}
                                    <div className="flex border-b border-indigo-50">
                                        <button
                                            onClick={() => setActiveLongitudinal('tendencia')}
                                            className={`flex-1 py-4 text-sm font-bold text-center transition-colors
                                    ${activeLongitudinal === 'tendencia' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-500' : 'text-slate-400 hover:text-slate-600'}`}
                                        >
                                            Tendencia (Trend)
                                        </button>
                                        <button
                                            onClick={() => setActiveLongitudinal('cohorte')}
                                            className={`flex-1 py-4 text-sm font-bold text-center transition-colors
                                    ${activeLongitudinal === 'cohorte' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-500' : 'text-slate-400 hover:text-slate-600'}`}
                                        >
                                            Cohorte (Cohort)
                                        </button>
                                        <button
                                            onClick={() => setActiveLongitudinal('panel')}
                                            className={`flex-1 py-4 text-sm font-bold text-center transition-colors
                                    ${activeLongitudinal === 'panel' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-500' : 'text-slate-400 hover:text-slate-600'}`}
                                        >
                                            Panel
                                        </button>
                                    </div>

                                    <div className="p-8 min-h-[180px] flex items-center">
                                        {activeLongitudinal === 'tendencia' && (
                                            <div className="animate-fade-in w-full">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="bg-indigo-100 p-2 rounded-lg"><Users size={24} className="text-indigo-600" /></div>
                                                    <h4 className="text-lg font-bold text-slate-800">Población General</h4>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    Analiza cambios en una población completa a lo largo del tiempo.
                                                    <br /><span className="text-indigo-600 font-medium">Nota:</span> Los participantes pueden cambiar, lo que importa es la población.
                                                </p>
                                                <div className="mt-3 text-xs text-slate-400 italic">Ej: Evolución de la opinión pública sobre política en 10 años.</div>
                                            </div>
                                        )}
                                        {activeLongitudinal === 'cohorte' && (
                                            <div className="animate-fade-in w-full">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="bg-indigo-100 p-2 rounded-lg"><Users size={24} className="text-indigo-600" /></div>
                                                    <h4 className="text-lg font-bold text-slate-800">Sub-grupo Específico</h4>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    Examina cambios en sub-poblaciones unidas por una característica común o temporal.
                                                    <br /><span className="text-indigo-600 font-medium">Nota:</span> Sigues a la "Generación X" o a los "Graduados de 2020".
                                                </p>
                                                <div className="mt-3 text-xs text-slate-400 italic">Ej: Inserción laboral de los graduados de medicina de 2015.</div>
                                            </div>
                                        )}
                                        {activeLongitudinal === 'panel' && (
                                            <div className="animate-fade-in w-full">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="bg-indigo-100 p-2 rounded-lg"><Users size={24} className="text-indigo-600" /></div>
                                                    <h4 className="text-lg font-bold text-slate-800">Mismos Sujetos Exactos</h4>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    Mide a las <strong>mismas personas</strong> en todos los momentos. Es el más preciso para ver cambios individuales.
                                                    <br /><span className="text-indigo-600 font-medium">Riesgo:</span> Es difícil porque la gente abandona el estudio (mortalidad experimental).
                                                </p>
                                                <div className="mt-3 text-xs text-slate-400 italic">Ej: Evolución clínica del Paciente Juan Pérez durante 12 meses.</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- SECCIÓN FINAL: MATRIZ DE DECISIÓN RÁPIDA (REDISEÑO CLARO) --- */}
                <div className="bg-white rounded-3xl p-10 text-center shadow-xl border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8">¿Cuál elegir? Guía Rápida</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                        {/* Card 1: Experimental (Violeta) */}
                        <div className="bg-violet-50 p-6 rounded-2xl border border-violet-100 hover:shadow-md transition-all group">
                            <p className="text-violet-400 text-xs font-bold uppercase mb-2">Si buscas...</p>
                            <h4 className="text-lg font-bold text-violet-900 mb-1">Causa - Efecto</h4>
                            <div className="h-1 w-8 bg-violet-300 mx-auto mt-3 rounded-full group-hover:w-16 transition-all"></div>
                            <p className="text-violet-600 text-xs mt-2 font-bold">EXPERIMENTAL</p>
                        </div>

                        {/* Card 2: No Experimental (Índigo) */}
                        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-all group">
                            <p className="text-indigo-400 text-xs font-bold uppercase mb-2">Si no puedes...</p>
                            <h4 className="text-lg font-bold text-indigo-900 mb-1">Controlar Variables</h4>
                            <div className="h-1 w-8 bg-indigo-300 mx-auto mt-3 rounded-full group-hover:w-16 transition-all"></div>
                            <p className="text-indigo-600 text-xs mt-2 font-bold">NO EXPERIMENTAL</p>
                        </div>

                        {/* Card 3: Transversal (Azul) */}
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-all group">
                            <p className="text-blue-400 text-xs font-bold uppercase mb-2">Si quieres...</p>
                            <h4 className="text-lg font-bold text-blue-900 mb-1">Una Foto Actual</h4>
                            <div className="h-1 w-8 bg-blue-300 mx-auto mt-3 rounded-full group-hover:w-16 transition-all"></div>
                            <p className="text-blue-600 text-xs mt-2 font-bold">TRANSVERSAL</p>
                        </div>

                        {/* Card 4: Longitudinal (Esmeralda/Verde) */}
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-md transition-all group">
                            <p className="text-emerald-400 text-xs font-bold uppercase mb-2">Si quieres...</p>
                            <h4 className="text-lg font-bold text-emerald-900 mb-1">Ver Evolución</h4>
                            <div className="h-1 w-8 bg-emerald-300 mx-auto mt-3 rounded-full group-hover:w-16 transition-all"></div>
                            <p className="text-emerald-600 text-xs mt-2 font-bold">LONGITUDINAL</p>
                        </div>
                    </div>
                </div>

            </main>

            <Chatbot tema="Diseños de Investigación" />
        </div>
    );
}