import { useState } from 'react';
import {
    Calculator, MessageCircle, ShieldCheck, Target,
    ChevronRight, Check, AlertCircle, FileText,
    ClipboardList, Mic, Eye, Users, Scale, Search,
    BookOpen
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Instrumentos() {
    const [activeSection, setActiveSection] = useState('cuanti');

    // Configuración del Menú Lateral
    const menuItems = [
        { id: 'cuanti', label: 'Cuantitativos', icon: <Calculator size={20} />, color: 'blue' },
        { id: 'cuali', label: 'Cualitativos', icon: <MessageCircle size={20} />, color: 'orange' },
        { id: 'calidad', label: 'Validez y Confiabilidad', icon: <Target size={20} />, color: 'emerald' },
        { id: 'etica', label: 'Ética', icon: <ShieldCheck size={20} />, color: 'rose' },
    ];

    // Contenido de cada sección
    const content = {
        cuanti: {
            title: "Instrumentos Cuantitativos",
            desc: "Herramientas estandarizadas para medir variables con precisión numérica.",
            tools: [
                {
                    title: "Cuestionario",
                    icon: <ClipboardList className="text-blue-500" />,
                    desc: "El rey de la recolección masiva. Serie de preguntas cerradas.",
                    details: [
                        "Dicotómicas: Sí/No (Para filtros rápidos).",
                        "Escala Likert: 1-5 (Para medir actitudes).",
                        "Opción Múltiple: Seleccionar la mejor respuesta."
                    ],
                    tip: "Usa cuestionarios cuando necesites generalizar resultados a una gran población."
                },
                {
                    title: "Escalas y Tests",
                    icon: <Scale className="text-blue-500" />,
                    desc: "Instrumentos validados científicamente para medir constructos complejos.",
                    details: [
                        "Validez probada: Ya se sabe que miden lo que dicen medir.",
                        "Baremos: Permiten comparar al sujeto con la media poblacional.",
                        "Ejemplos: Test de IQ, Escala de Ansiedad de Beck."
                    ],
                    tip: "Nunca inventes una escala si ya existe una validada. ¡Ahórrate el trabajo!"
                },
                {
                    title: "Lista de Cotejo",
                    icon: <Check className="text-blue-500" />,
                    desc: "Checklist simple para verificar presencia o ausencia.",
                    details: [
                        "Binario: Cumple / No Cumple.",
                        "Observación Estructurada: Ideal para evaluar procedimientos.",
                        "Objetivo: Elimina la subjetividad del observador."
                    ],
                    tip: "Perfecto para evaluar si se siguieron los pasos de un protocolo."
                }
            ]
        },
        cuali: {
            title: "Instrumentos Cualitativos",
            desc: "Métodos flexibles para profundizar en significados y experiencias.",
            tools: [
                {
                    title: "Entrevista a Profundidad",
                    icon: <Mic className="text-orange-500" />,
                    desc: "Diálogo íntimo y flexible para explorar la perspectiva del participante.",
                    details: [
                        "Estructurada: Guion rígido (comparable).",
                        "Semi-estructurada: Guía flexible (la más usada).",
                        "No estructurada: Conversación libre (exploratoria)."
                    ],
                    tip: "Deja que el participante hable. El silencio es tu mejor herramienta."
                },
                {
                    title: "Grupo Focal (Focus Group)",
                    icon: <Users className="text-orange-500" />,
                    desc: "Discusión grupal moderada para ver interacción social.",
                    details: [
                        "Dinámica: 6 a 10 personas.",
                        "Interacción: Lo valioso es cómo debaten entre ellos.",
                        "Rol del Moderador: Guiar sin imponer opiniones."
                    ],
                    tip: "Úsalo cuando quieras ver consensos o disensos sobre un tema polémico."
                },
                {
                    title: "Observación Participante",
                    icon: <Eye className="text-orange-500" />,
                    desc: "Inmersión total en el ambiente natural del fenómeno.",
                    details: [
                        "Diario de Campo: Donde anotas todo lo que ves y sientes.",
                        "Naturalista: No alteras el entorno.",
                        "Empatía: Buscas entender la cultura desde adentro."
                    ],
                    tip: "No confíes en tu memoria. Escribe tus notas de campo inmediatamente."
                }
            ]
        },
        calidad: {
            title: "Rigor Científico",
            desc: "¿Cómo sabemos que nuestros datos sirven? Necesitamos dos llaves.",
            tools: [
                {
                    title: "Validez (La Puntería)",
                    icon: <Target className="text-emerald-500" />,
                    desc: "¿Estás midiendo lo que crees que estás midiendo?",
                    details: [
                        "De Contenido: ¿Cubres todo el tema? (Juicio de Expertos).",
                        "De Criterio: ¿Se parece a otros tests probados?",
                        "De Constructo: ¿Coincide con la teoría?"
                    ],
                    tip: "Un reloj que siempre marca las 3:00 tiene alta confiabilidad (siempre da el mismo dato) pero CERO validez (el dato es falso)."
                },
                {
                    title: "Confiabilidad (La Estabilidad)",
                    icon: <FileText className="text-emerald-500" />,
                    desc: "¿Si repito la medición, obtengo el mismo resultado?",
                    details: [
                        "Test-Retest: Aplicar dos veces y comparar.",
                        "Alfa de Cronbach: Coherencia interna de las preguntas.",
                        "Entre Jueces: Dos evaluadores ven lo mismo."
                    ],
                    tip: "Para instrumentos cuanti, busca un Alfa de Cronbach mayor a 0.7."
                }
            ]
        },
        etica: {
            title: "Ética en la Recolección",
            desc: "Antes de recoger un solo dato, debes proteger a tus participantes.",
            tools: [
                {
                    title: "Consentimiento Informado",
                    icon: <FileText className="text-rose-500" />,
                    desc: "El contrato sagrado entre investigador y participante.",
                    details: [
                        "Voluntariedad: Nadie puede ser obligado.",
                        "Información: Deben saber para qué es el estudio.",
                        "Libertad: Pueden salirse cuando quieran."
                    ],
                    tip: "Siempre entrega una copia firmada al participante."
                },
                {
                    title: "Anonimato y Confidencialidad",
                    icon: <ShieldCheck className="text-rose-500" />,
                    desc: "Proteger la identidad es tu responsabilidad legal.",
                    details: [
                        "Anonimato: Ni tú sabes quién respondió (ej. encuestas online).",
                        "Confidencialidad: Sabes quién es, pero guardas el secreto (ej. entrevistas).",
                        "Protección de Datos: Guarda los archivos con contraseña."
                    ],
                    tip: "Usa códigos (Participante 01) en lugar de nombres reales en tus transcripciones."
                }
            ]
        }
    };

    const currentData = content[activeSection];
    const activeColor = menuItems.find(i => i.id === activeSection).color;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">

            {/* --- SIDEBAR NAVIGATION (Estilo Dashboard) --- */}
            <aside className="w-full md:w-72 bg-white border-r border-slate-200 md:h-screen md:sticky md:top-0 flex flex-col z-20">
                <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xl">
                        <BookOpen className="text-indigo-600" />
                        <span>Recolección</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Caja de Herramientas</p>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-200 text-left font-medium
                ${activeSection === item.id
                                    ? `bg-${item.color}-50 text-${item.color}-700 shadow-sm border border-${item.color}-100`
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}
                        >
                            <div className={`${activeSection === item.id ? `text-${item.color}-600` : 'text-slate-400'}`}>
                                {item.icon}
                            </div>
                            {item.label}
                            {activeSection === item.id && <ChevronRight size={16} className="ml-auto opacity-50" />}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* --- MAIN CONTENT AREA --- */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <div className="max-w-4xl mx-auto animate-fade-in">

                    {/* Header Dinámico */}
                    <div className="mb-10">
                        <h1 className={`text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 border-l-8 border-${activeColor}-500 pl-6`}>
                            {currentData.title}
                        </h1>
                        <p className="text-lg text-slate-600 pl-8">
                            {currentData.desc}
                        </p>
                    </div>

                    {/* Grid de Herramientas (Estilo Lista Expandida) */}
                    <div className="grid gap-6">
                        {currentData.tools.map((tool, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl bg-slate-50 border border-slate-100 shrink-0`}>
                                        {tool.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-800 mb-1">{tool.title}</h3>
                                        <p className="text-slate-600 mb-4">{tool.desc}</p>

                                        {/* Detalles en lista con estilo */}
                                        <div className="bg-slate-50 rounded-xl p-4 mb-4">
                                            <ul className="space-y-2">
                                                {tool.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${activeColor}-400 shrink-0`}></div>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Pro Tip */}
                                        <div className={`flex items-start gap-2 text-xs font-bold text-${activeColor}-600 bg-${activeColor}-50 p-3 rounded-lg`}>
                                            <AlertCircle size={16} className="shrink-0" />
                                            <span>PRO TIP: {tool.tip}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            <Chatbot tema="Instrumentos de Recolección" />
        </div>
    );
}