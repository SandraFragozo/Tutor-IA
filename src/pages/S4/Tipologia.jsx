import { useState } from 'react'; // <--- ¡ESTA ERA LA LÍNEA PERDIDA!
import {
    Telescope, Camera, GitCompare, FlaskConical,
    Clock, Library, Pickaxe,
    ArrowRight, Info, AlertTriangle, Brain, CheckCircle2, AlertOctagon, Lightbulb
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Tipologia() {
    const [activeLevel, setActiveLevel] = useState(1);
    const [activeTab, setActiveTab] = useState('tiempo');

    // DATOS: Niveles (Con estilos explícitos para evitar errores)
    const levels = [
        {
            id: 1,
            title: "Exploratorio",
            subtitle: "El primer acercamiento",
            icon: <Telescope size={32} />,
            desc: "Investigan problemas poco estudiados, dudas nuevas o desde perspectivas innovadoras. Es como llegar a un planeta nuevo: no mides cráteres todavía, primero ves si hay oxígeno.",
            continuum: "Prepara el terreno. Identifica conceptos clave para que los siguientes niveles puedan medirlos.",
            goal: "Familiarizarse con fenómenos desconocidos.",
            example: "Investigar las primeras reacciones psicológicas ante una nueva enfermedad desconocida.",
            // Estilos manuales para asegurar que se vean
            styles: {
                border: "border-violet-500",
                bgSub: "bg-violet-100",
                textSub: "text-violet-700",
                bgBox: "bg-violet-50",
                borderBox: "border-violet-200",
                iconBox: "text-violet-600",
                titleBox: "text-violet-900"
            }
        },
        {
            id: 2,
            title: "Descriptivo",
            subtitle: "La fotografía detallada",
            icon: <Camera size={32} />,
            desc: "Miden y especifican las propiedades importantes de personas, grupos o fenómenos. Dicen 'cómo es' y 'cuánto hay' de algo, sin entrar en por qué ocurre.",
            continuum: "Ya sabemos qué hay (gracias al exploratorio). Ahora lo medimos con precisión.",
            goal: "Medir y especificar propiedades y características.",
            example: "Un censo nacional que describe cuánta gente vive en cada ciudad, edades y nivel educativo.",
            styles: {
                border: "border-sky-500",
                bgSub: "bg-sky-100",
                textSub: "text-sky-700",
                bgBox: "bg-sky-50",
                borderBox: "border-sky-200",
                iconBox: "text-sky-600",
                titleBox: "text-sky-900"
            }
        },
        {
            id: 3,
            title: "Correlacional",
            subtitle: "Encontrando patrones",
            icon: <GitCompare size={32} />,
            desc: "Evalúan la relación estadística entre dos o más variables. ¿Si sube la variable A, también sube la B? Permiten predecir, pero no explican la causa.",
            continuum: "Sabemos que A y B cambian juntas. ¿Pero A causa B? Eso lo veremos en el siguiente nivel.",
            goal: "Conocer el comportamiento de una variable conociendo el de otra.",
            example: "¿Existe relación entre el tiempo dedicado a redes sociales (A) y los niveles de ansiedad (B) en adolescentes?",
            styles: {
                border: "border-orange-500",
                bgSub: "bg-orange-100",
                textSub: "text-orange-800",
                bgBox: "bg-orange-50",
                borderBox: "border-orange-200",
                iconBox: "text-orange-600",
                titleBox: "text-orange-900"
            }
        },
        {
            id: 4,
            title: "Explicativo",
            subtitle: "La causa y el efecto",
            icon: <FlaskConical size={32} />,
            desc: "Están dirigidos a responder por qué ocurre un fenómeno y en qué condiciones. Son los más estructurados e implican control riguroso (experimentos).",
            continuum: "La cima del conocimiento. Generamos teorías y leyes causales.",
            goal: "Explicar las causas (por qué) y condiciones del fenómeno.",
            example: "Un ensayo clínico controlado para probar si el medicamento X causa la cura de la enfermedad Y.",
            styles: {
                border: "border-rose-500",
                bgSub: "bg-rose-100",
                textSub: "text-rose-700",
                bgBox: "bg-rose-50",
                borderBox: "border-rose-200",
                iconBox: "text-rose-600",
                titleBox: "text-rose-900"
            }
        }
    ];

    // DATOS: Otras Clasificaciones
    const classifications = {
        tiempo: {
            label: "Según el Tiempo",
            icon: <Clock size={18} />,
            activeClass: "border-b-4 border-blue-500 text-blue-700 bg-blue-50",
            cards: [
                {
                    title: "Transversal",
                    meta: "Una Foto 📸",
                    desc: "Recolectan datos en un solo momento único. Describen el estado de las variables en ese instante específico.",
                    style: "border-blue-400 bg-blue-50 text-blue-900 meta-bg-blue-100 meta-text-blue-700"
                },
                {
                    title: "Longitudinal",
                    meta: "Una Película 🎥",
                    desc: "Recolectan datos en diferentes momentos o periodos para hacer inferencias sobre la evolución y cambios.",
                    style: "border-indigo-400 bg-indigo-50 text-indigo-900 meta-bg-indigo-100 meta-text-indigo-700"
                }
            ]
        },
        fuente: {
            label: "Según la Fuente",
            icon: <Library size={18} />,
            activeClass: "border-b-4 border-emerald-500 text-emerald-700 bg-emerald-50",
            cards: [
                {
                    title: "Documental",
                    meta: "Datos Existentes 📚",
                    desc: "Analiza datos ya recolectados en libros, registros, archivos o estadísticas previas. No generas datos nuevos.",
                    style: "border-emerald-400 bg-emerald-50 text-emerald-900 meta-bg-emerald-100 meta-text-emerald-700"
                },
                {
                    title: "De Campo",
                    meta: "Datos Nuevos 🌱",
                    desc: "El investigador va al lugar de los hechos (contexto natural) para recolectar datos nuevos y originales.",
                    style: "border-teal-400 bg-teal-50 text-teal-900 meta-bg-teal-100 meta-text-teal-700"
                }
            ]
        },
        proposito: {
            label: "Según el Propósito",
            icon: <Pickaxe size={18} />,
            activeClass: "border-b-4 border-fuchsia-500 text-fuchsia-700 bg-fuchsia-50",
            cards: [
                {
                    title: "Básica (Pura)",
                    meta: "Teoría 🧠",
                    desc: "Busca aumentar el conocimiento teórico y formular nuevas teorías sin preocuparse por la aplicación inmediata.",
                    style: "border-fuchsia-400 bg-fuchsia-50 text-fuchsia-900 meta-bg-fuchsia-100 meta-text-fuchsia-700"
                },
                {
                    title: "Aplicada",
                    meta: "Solución 🛠️",
                    desc: "Busca la aplicación inmediata de conocimientos para resolver problemas concretos y mejorar la vida.",
                    style: "border-pink-400 bg-pink-50 text-pink-900 meta-bg-pink-100 meta-text-pink-700"
                }
            ]
        }
    };

    const currentLvl = levels.find(l => l.id === activeLevel);
    const s = currentLvl.styles;
    const currentClass = classifications[activeTab];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800">

            {/* --- HERO SECTION (Split ajustado) --- */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12 items-center">

                    {/* Izquierda: Título (Más espacio) */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase mb-4">
                            <Brain size={14} /> Metodología
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Tipología de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-500">
                                Estudios Científicos
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            La investigación no son cajones aislados. Es una escalera de profundidad que va desde lo desconocido hasta la explicación causal.
                        </p>
                    </div>

                    {/* Derecha: Continuum Card (Más compacta) */}
                    <div className="lg:col-span-5">
                        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 shadow-sm relative">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                                    <Info size={20} />
                                </div>
                                <h3 className="text-indigo-900 font-bold text-base">Concepto Clave: El Continuum</h3>
                            </div>
                            <p className="text-indigo-800/90 text-sm leading-relaxed">
                                Significa que en la ciencia no hay saltos bruscos. El conocimiento fluye progresivamente:
                                primero <strong>exploras</strong>, luego <strong>describes</strong>, después <strong>relacionas</strong> y finalmente <strong>explicas</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 mt-16">

                {/* --- SECCIÓN 1: NIVELES DE PROFUNDIDAD --- */}
                <div className="grid lg:grid-cols-12 gap-8 mb-24">

                    {/* Menú Lateral */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {levels.map((level) => (
                            <button
                                key={level.id}
                                onClick={() => setActiveLevel(level.id)}
                                className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border-2
                        ${activeLevel === level.id
                                        ? `bg-white ${level.styles.border} shadow-md scale-105 z-10`
                                        : 'bg-slate-100 border-transparent text-slate-400 hover:bg-white hover:border-slate-200'}`}
                            >
                                {/* El icono cambia de color según selección */}
                                <div className={`p-3 rounded-lg transition-colors ${activeLevel === level.id ? `${level.styles.bgSub} ${level.styles.textSub}` : 'bg-slate-200 text-slate-500'}`}>
                                    {level.icon}
                                </div>
                                <div>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${activeLevel === level.id ? level.styles.textSub : 'text-slate-400'}`}>
                                        Nivel {level.id}
                                    </span>
                                    <span className={`font-bold text-lg ${activeLevel === level.id ? 'text-slate-800' : 'text-slate-500'}`}>
                                        {level.title}
                                    </span>
                                </div>
                                {activeLevel === level.id && <ArrowRight className={`ml-auto ${level.styles.textSub}`} size={20} />}
                            </button>
                        ))}
                    </div>

                    {/* Panel de Contenido Principal */}
                    <div className="lg:col-span-8">
                        <div className={`bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-8 ${s.border} h-full animate-fade-in`}>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-6">
                                <div>
                                    {/* Burbuja de Subtítulo con Color Estandarizado */}
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${s.bgSub} ${s.textSub} mb-2`}>
                                        {currentLvl.subtitle}
                                    </span>
                                    <h2 className="text-3xl font-bold text-slate-900">{currentLvl.title}</h2>
                                </div>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {currentLvl.desc}
                            </p>

                            {/* Grid de Detalles (Objetivo y Ejemplo - MISMOS ESTILOS) */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className={`${s.bgBox} rounded-xl p-5 border ${s.borderBox}`}>
                                    <h4 className={`font-bold ${s.titleBox} mb-2 flex items-center gap-2`}>
                                        <Pickaxe size={18} className={s.iconBox} /> Objetivo Principal
                                    </h4>
                                    <p className={`text-sm ${s.titleBox} opacity-90 font-medium leading-relaxed`}>
                                        {currentLvl.goal}
                                    </p>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                                    <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                                        <Info size={18} /> Ejemplo Real
                                    </h4>
                                    <p className="text-sm text-slate-600 italic leading-relaxed">
                                        "{currentLvl.example}"
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg text-xs text-slate-500">
                                <div className={`mt-0.5 p-1 rounded-full ${s.bgSub} ${s.textSub}`}>
                                    <CheckCircle2 size={12} strokeWidth={3} />
                                </div>
                                <p><strong>En el continuum:</strong> {currentLvl.continuum}</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN 2: OTRAS FORMAS DE CLASIFICAR --- */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Otras dimensiones de la investigación</h2>

                    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
                        {/* Header Pestañas */}
                        <div className="flex flex-col md:flex-row border-b border-slate-100">
                            {Object.entries(classifications).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex-1 py-6 flex flex-col items-center gap-2 transition-all 
                            ${activeTab === key
                                            ? data.activeClass
                                            : 'bg-white border-b-4 border-transparent text-slate-400 hover:bg-slate-50'}`}
                                >
                                    <div className={activeTab === key ? '' : ''}>{data.icon}</div>
                                    <span className="font-bold text-sm">{data.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Contenido Pestañas */}
                        <div className="p-8 md:p-12 bg-slate-50/50">
                            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
                                {currentClass.cards.map((card, index) => {
                                    // Extraemos clases personalizadas de la data para aplicarlas
                                    // Esto asegura que cada tarjeta tenga su color (ej. fuchsia y pink en Propósito)
                                    const styleClasses = card.style.split(' ');
                                    const borderClass = styleClasses.find(c => c.startsWith('border-'));
                                    const bgClass = styleClasses.find(c => c.startsWith('bg-'));
                                    const textClass = styleClasses.find(c => c.startsWith('text-'));

                                    // Clases para el pill meta (convertimos meta-bg-X a bg-X)
                                    const metaBg = styleClasses.find(c => c.startsWith('meta-bg-'))?.replace('meta-', '');
                                    const metaText = styleClasses.find(c => c.startsWith('meta-text-'))?.replace('meta-', '');

                                    return (
                                        <div key={index} className={`p-8 rounded-2xl shadow-sm border-t-4 hover:shadow-md transition-shadow bg-white ${borderClass}`}>
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className={`text-xl font-bold ${textClass}`}>{card.title}</h3>
                                                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${metaBg} ${metaText}`}>
                                                    {card.meta}
                                                </span>
                                            </div>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                {card.desc}
                                            </p>
                                            <div className="text-xs text-slate-400 border-t border-slate-100 pt-3 mt-auto italic">
                                                Ej: {card.ex}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN 3: CONSEJOS FINALES (GRID) --- */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">

                    {/* 1. Recordatorio Crucial (Zona de Peligro) */}
                    <div className="bg-white rounded-2xl border-2 border-rose-100 p-8 shadow-lg relative overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-rose-50 rounded-full opacity-50"></div>

                        <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                            <div className="bg-rose-100 p-4 rounded-full text-rose-600 shrink-0">
                                <AlertOctagon size={32} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Recordatorio Crucial</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    En investigación, <strong className="text-rose-600">correlación no implica causalidad</strong>.
                                    Que dos cosas sucedan juntas no significa que una provoque la otra. Solo los estudios <strong>Explicativos</strong> tienen el rigor para afirmar causas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Pro Tip (Nuevo - Zona de Éxito) */}
                    <div className="bg-white rounded-2xl border-2 border-amber-100 p-8 shadow-lg relative overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-50 rounded-full opacity-50"></div>

                        <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                            <div className="bg-amber-100 p-4 rounded-full text-amber-600 shrink-0">
                                <Lightbulb size={32} strokeWidth={2.5} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Tip: Cómo elegir</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    No elijas el tipo de estudio porque "te gusta más". Deja que tu <strong>pregunta de investigación</strong> decida.
                                    <br />
                                    <span className="text-amber-700 font-medium mt-1 block">
                                        Preguntas ¿"cómo es"? → Descriptivo.
                                        <br />
                                        Preguntas ¿"por qué"? → Explicativo.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </main>

            <Chatbot tema="Tipología de Estudios" />
        </div>
    );
}