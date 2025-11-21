import { useState } from 'react';
import {
    Users, Dices, Target, Filter, Layers,
    Network, UserCheck, UserPlus, Calculator,
    ArrowRight, RefreshCw, Brain, Map
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Muestreo() {
    const [activeType, setActiveType] = useState('probabilistico'); // probabilistico | no_probabilistico

    const content = {
        probabilistico: {
            theme: "emerald",
            icon: <Dices size={48} />,
            title: "Muestreo Probabilístico",
            subtitle: "El Sorteo Justo (Aleatorio)",
            desc: "Todos los elementos de la población tienen la misma probabilidad de ser elegidos. Es como una rifa perfecta: elimina el sesgo y permite generalizar resultados a todo el universo.",
            goal: "Generalizar resultados (Validez Externa)",
            techniques: [
                {
                    name: "Aleatorio Simple",
                    icon: <Dices size={24} />,
                    desc: "El clásico sorteo. Metes todos los nombres en una tómbola y sacas 'n' papeles.",
                    pros: "Sencillo y justo.",
                    cons: "Necesitas la lista completa de todos (marco muestral)."
                },
                {
                    name: "Estratificado",
                    icon: <Layers size={24} />,
                    desc: "Divides la población en subgrupos (estratos) importantes (ej. Hombres/Mujeres) y sorteas dentro de cada uno para asegurar representación.",
                    pros: "Asegura que nadie se quede fuera.",
                    cons: "Más complejo de organizar."
                },
                {
                    name: "Sistemático",
                    icon: <Calculator size={24} />,
                    desc: "Haces una lista y eliges a cada persona número 'K' (ej. cada 10 personas de la fila).",
                    pros: "Fácil de aplicar en campo.",
                    cons: "Si la lista tiene un orden oculto, puede haber sesgo."
                },
                {
                    name: "Por Conglomerados",
                    icon: <Map size={24} />,
                    // Nota: Map no está importado, usaré Users por ahora o agregar Map al import si prefieres
                    // Usaré Users para evitar errores si no edito el import arriba
                    desc: "En lugar de seleccionar individuos, seleccionas grupos enteros (ej. sorteas 5 escuelas de las 50 que hay y encuestas a todos ahí).",
                    pros: "Ahorra tiempo y dinero en grandes áreas.",
                    cons: "Menos preciso que el estratificado."
                }
            ]
        },
        no_probabilistico: {
            theme: "amber",
            icon: <Target size={48} />,
            title: "Muestreo No Probabilístico",
            subtitle: "Selección a Dedo (Dirigido)",
            desc: "La elección depende del criterio del investigador, no del azar. Se usa cuando no buscas generalizar, sino entender a profundidad o cuando no tienes acceso a todos.",
            goal: "Profundidad y Pertinencia (Validez Interna)",
            techniques: [
                {
                    name: "Por Conveniencia",
                    icon: <UserCheck size={24} />,
                    desc: "Eliges a los que tienes más cerca o disponibles. Ej: Tus alumnos, gente en la calle.",
                    pros: "Rápido y barato.",
                    cons: "No representa a toda la población (muy sesgado)."
                },
                {
                    name: "Intencional / Juicio",
                    icon: <Brain size={24} />,
                    desc: "Eliges a 'dedo' a quienes tú crees que saben más del tema o cumplen el perfil exacto.",
                    pros: "Obtienes datos de expertos.",
                    cons: "Depende totalmente de tu criterio subjetivo."
                },
                {
                    name: "Bola de Nieve",
                    icon: <Network size={24} />,
                    desc: "Encuentras a uno, y le pides que te presente a otro. Ideal para poblaciones ocultas o difíciles.",
                    pros: "Único modo de llegar a grupos cerrados.",
                    cons: "La muestra crece sesgada por las redes de amigos."
                },
                {
                    name: "Por Cuotas",
                    icon: <Filter size={24} />,
                    desc: "Defines qué necesitas (ej. 10 hombres, 10 mujeres) y los buscas por conveniencia hasta llenar el cupo.",
                    pros: "Asegura cierta diversidad.",
                    cons: "Sigue sin ser aleatorio."
                }
            ]
        }
    };

    const current = content[activeType];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800">

            {/* --- HERO SECTION --- */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12 items-center">

                    {/* Título */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase mb-4">
                            <Users size={14} /> Población y Muestra
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Técnicas de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                                Muestreo
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            No puedes estudiar a todo el mundo (Población), así que eliges una parte (Muestra).
                            <br /><strong>La clave es: ¿Cómo los eliges?</strong> ¿Al azar o a dedo?
                        </p>
                    </div>

                    {/* Selector Gigante */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <button
                            onClick={() => setActiveType('probabilistico')}
                            className={`p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-6 group text-left
                    ${activeType === 'probabilistico'
                                    ? 'bg-emerald-50 border-emerald-500 shadow-md scale-105'
                                    : 'bg-white border-slate-100 text-slate-400 hover:border-emerald-200'}`}
                        >
                            <div className={`p-4 rounded-full transition-colors ${activeType === 'probabilistico' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <Dices size={32} />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold ${activeType === 'probabilistico' ? 'text-emerald-900' : 'text-slate-600'}`}>Probabilístico</h3>
                                <p className="text-sm opacity-80">El sorteo justo (Azar)</p>
                            </div>
                        </button>

                        <button
                            onClick={() => setActiveType('no_probabilistico')}
                            className={`p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-6 group text-left
                    ${activeType === 'no_probabilistico'
                                    ? 'bg-amber-50 border-amber-500 shadow-md scale-105'
                                    : 'bg-white border-slate-100 text-slate-400 hover:border-amber-200'}`}
                        >
                            <div className={`p-4 rounded-full transition-colors ${activeType === 'no_probabilistico' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <Target size={32} />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold ${activeType === 'no_probabilistico' ? 'text-amber-900' : 'text-slate-600'}`}>No Probabilístico</h3>
                                <p className="text-sm opacity-80">A criterio (Intencional)</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 mt-16">

                {/* --- PANEL PRINCIPAL (Dinámico) --- */}
                <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border-t-8 border-${current.theme}-500 animate-fade-in`}>

                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                        <div className={`p-6 rounded-2xl bg-${current.theme}-100 text-${current.theme}-600 shrink-0`}>
                            {current.icon}
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">{current.title}</h2>
                            <p className={`text-xl font-bold text-${current.theme}-600 mb-4`}>{current.subtitle}</p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                {current.desc}
                            </p>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-${current.theme}-50 text-${current.theme}-800 font-bold text-sm border border-${current.theme}-100`}>
                                <Target size={16} /> Meta: {current.goal}
                            </div>
                        </div>
                    </div>

                    {/* Grid de Técnicas */}
                    <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wider mb-6">Técnicas Principales</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {current.techniques.map((tech, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all group hover:bg-white">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 rounded-lg bg-${current.theme}-100 text-${current.theme}-600`}>
                                        {tech.icon}
                                    </div>
                                    <h4 className={`font-bold text-lg text-slate-700 group-hover:text-${current.theme}-700 transition-colors`}>{tech.name}</h4>
                                </div>
                                <p className="text-slate-600 text-sm mb-4 min-h-[40px]">{tech.desc}</p>

                                <div className="grid grid-cols-2 gap-4 text-xs pt-4 border-t border-slate-200">
                                    <div>
                                        <span className="font-bold text-emerald-600 block mb-1">👍 Ventaja</span>
                                        {tech.pros}
                                    </div>
                                    <div>
                                        <span className="font-bold text-rose-500 block mb-1">👎 Desventaja</span>
                                        {tech.cons}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* --- CALCULADORA VISUAL (Concepto Población vs Muestra) --- */}
                <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">El Concepto Clave</h2>
                        <p className="text-lg text-slate-600">
                            Imagina que la <strong>Población</strong> es todo el pastel. La <strong>Muestra</strong> es solo una rebanada.
                            <br /><br />
                            Si la rebanada tiene los mismos ingredientes que el pastel completo (chocolate, nuez, relleno), entonces es <strong>Representativa</strong>. Si solo tomaste la parte de la orilla (puro pan), tu muestra está sesgada.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                <Calculator size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">¿Cuántos necesito?</h4>
                                <p className="text-sm text-slate-500">
                                    Para estudios "Cuanti", usa una fórmula estadística. Para "Cuali", busca saturación (hasta que dejen de decir cosas nuevas).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Gráfico Visual Simple (REDISEÑADO: Claro y Dinámico) */}
                    <div className={`bg-white p-10 rounded-3xl shadow-xl border-2 border-${current.theme}-100 text-center relative overflow-hidden transition-colors duration-500`}>

                        {/* Decoración de fondo suave dinámica */}
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-${current.theme}-50 rounded-full blur-3xl -mr-16 -mt-16 transition-colors duration-500`}></div>

                        <div className="relative z-10">
                            {/* Círculo Población (N) */}
                            <div className={`w-56 h-56 mx-auto border-4 border-dashed border-${current.theme}-200 rounded-full flex items-center justify-center relative mb-6 transition-colors duration-500`}>
                                <span className="text-slate-400 font-bold absolute top-4 uppercase tracking-widest text-xs">Población (N)</span>

                                {/* Círculo Muestra (n) - COLOR DINÁMICO */}
                                <div className={`w-24 h-24 bg-${current.theme}-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse transition-colors duration-500`}>
                                    Muestra (n)
                                </div>
                            </div>

                            <p className="text-slate-600 font-medium">
                                La muestra <strong className={`text-${current.theme}-600`}> (n) </strong>
                                debe ser un "micro-modelo" fiel de la población (N).
                            </p>
                        </div>
                    </div>
                </div>

            </main>

            <Chatbot tema="Técnicas de Muestreo" />
        </div>
    );
}