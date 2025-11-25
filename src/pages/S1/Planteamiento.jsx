import { useState } from 'react';
import { 
  Target, HelpCircle, MapPin, Clock, Book, 
  Briefcase, Users, Zap, Layout, CheckCircle2, 
  ArrowRight, Minus, Equal, Layers, Sliders
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Planteamiento() {
  const [activeStep, setActiveStep] = useState(0);

  // Datos para la Estructura del Planteamiento (Stepper)
  const structureSteps = [
    { title: "Contexto", desc: "Situación problemática actual", icon: <Layout /> },
    { title: "Antecedentes", desc: "Estado del arte y teorías", icon: <Book /> },
    { title: "Pregunta", desc: "Formulación del problema", icon: <HelpCircle /> },
    { title: "Justificación", desc: "¿Por qué y para qué?", icon: <Zap /> },
    { title: "Objetivos", desc: "Metas de conocimiento", icon: <Target /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800">
      
      {/* --- HERO: EL CONCEPTO --- */}
      <header className="bg-white pt-16 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6">
            <Layers size={14} /> Diseño de Investigación
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Planteamiento del <span className="text-indigo-600">Problema</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Es el momento lógico inicial. Consiste en afinar y estructurar formalmente tu idea.
            <br/>
            <span className="text-indigo-500 font-medium">"Un problema bien planteado es la mitad de la solución."</span>
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-12 relative z-10 space-y-20">

        {/* --- SECCIÓN 1: LA ECUACIÓN DEL PROBLEMA (Visual) --- */}
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Target size={24}/></div>
                Definición del Problema
            </h2>

            {/* La Ecuación Visual */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-slate-50 rounded-2xl p-8 border border-slate-200">
                
                {/* Elemento 1 */}
                <div className="text-center w-full md:w-auto flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-rose-400 mb-3 h-32 flex flex-col justify-center items-center">
                        <span className="text-3xl mb-2">📉</span>
                        <h3 className="font-bold text-slate-700">Situación Actual</h3>
                        <p className="text-xs text-slate-500">El objeto de estudio hoy (Lo que es)</p>
                    </div>
                </div>

                <div className="text-slate-300"><Minus size={32} strokeWidth={4} /></div>

                {/* Elemento 2 */}
                <div className="text-center w-full md:w-auto flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-emerald-400 mb-3 h-32 flex flex-col justify-center items-center">
                        <span className="text-3xl mb-2">🚀</span>
                        <h3 className="font-bold text-slate-700">Situación Deseable</h3>
                        <p className="text-xs text-slate-500">A dónde queremos llegar (Lo que debe ser)</p>
                    </div>
                </div>

                <div className="text-slate-300"><Equal size={32} strokeWidth={4} /></div>

                {/* Resultado */}
                <div className="text-center w-full md:w-auto flex-1">
                    <div className="bg-indigo-600 p-6 rounded-xl shadow-lg mb-3 h-32 flex flex-col justify-center items-center text-white transform scale-105">
                        <span className="text-3xl mb-2">🧩</span>
                        <h3 className="font-bold">El Problema</h3>
                        <p className="text-xs text-indigo-200">La contradicción o vacío que vas a resolver</p>
                    </div>
                </div>
            </div>

            {/* Estructura Operativa (Stepper Horizontal) */}
            <div className="mt-12">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Estructura Lógica</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {structureSteps.map((step, index) => (
                        <div key={index} 
                             className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md
                             ${activeStep === index ? 'border-indigo-500 bg-indigo-50' : 'border-slate-100 bg-white hover:border-indigo-200'}`}
                             onClick={() => setActiveStep(index)}
                        >
                            <div className={`mb-3 ${activeStep === index ? 'text-indigo-600' : 'text-slate-400'}`}>
                                {step.icon}
                            </div>
                            <h4 className={`font-bold text-sm ${activeStep === index ? 'text-indigo-900' : 'text-slate-700'}`}>{step.title}</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-snug">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- SECCIÓN 2: DELIMITACIÓN (Estilo "Filtros de Búsqueda") --- */}
        <section>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900">Delimitación</h2>
                    <p className="text-slate-500 mt-2">Fijar los linderos. ¿Qué dejas adentro y qué dejas afuera?</p>
                </div>
                <div className="hidden md:flex p-3 bg-white rounded-full shadow-sm border border-slate-200 text-slate-400">
                    <Sliders size={24} />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Filtro 1: Tiempo */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Clock size={24} />
                        </div>
                        <span className="text-xs font-bold text-blue-300 uppercase">Corte 1</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Tiempo</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        ¿Histórico, contemporáneo o futurista?
                        <br/><span className="text-xs text-slate-400 mt-2 block">Define el periodo del objeto de estudio (no cuánto tardarás tú).</span>
                    </p>
                </div>

                {/* Filtro 2: Espacio */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <MapPin size={24} />
                        </div>
                        <span className="text-xs font-bold text-emerald-300 uppercase">Corte 2</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Espacio</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Área geográfica precisa.
                        <br/><span className="text-xs text-slate-400 mt-2 block">Región, zona, territorio o institución específica donde ocurre el fenómeno.</span>
                    </p>
                </div>

                {/* Filtro 3: Temática */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-violet-400 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                            <Book size={24} />
                        </div>
                        <span className="text-xs font-bold text-violet-300 uppercase">Corte 3</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Conceptual</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Análisis semántico.
                        <br/><span className="text-xs text-slate-400 mt-2 block">Define con precisión los conceptos clave para evitar ambigüedades.</span>
                    </p>
                </div>

                {/* Filtro 4: Recursos */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <Briefcase size={24} />
                        </div>
                        <span className="text-xs font-bold text-amber-300 uppercase">Corte 4</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Factibilidad</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Recursos disponibles.
                        <br/><span className="text-xs text-slate-400 mt-2 block">Limitaciones financieras, tiempo real y movilidad del investigador.</span>
                    </p>
                </div>
            </div>
        </section>

        {/* --- SECCIÓN 3: JUSTIFICACIÓN (Badges de Valor) --- */}
        <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>

            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">La Justificación</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Responde al "¿Por qué?" y "¿Para qué?". Discrimina entre una pregunta trivial y una científicamente válida.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Badge 1 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-emerald-400">
                            <CheckCircle2 size={24} />
                            <h4 className="font-bold">Conveniencia</h4>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            ¿Qué tan conveniente es? ¿Para qué sirve realmente esta investigación en este momento?
                        </p>
                    </div>

                    {/* Badge 2 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-blue-400">
                            <Users size={24} />
                            <h4 className="font-bold">Relevancia Social</h4>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Alcance y proyección. ¿Quiénes se beneficiarán con los resultados? (Comunidad, instituciones).
                        </p>
                    </div>

                    {/* Badge 3 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-violet-400">
                            <Book size={24} />
                            <h4 className="font-bold">Valor Teórico</h4>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            ¿Llena un vacío de conocimiento? ¿Apoya, confronta o desarrolla una teoría existente?
                        </p>
                    </div>

                    {/* Badge 4 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-amber-400">
                            <Zap size={24} />
                            <h4 className="font-bold">Utilidad Metodológica</h4>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            ¿Crea un nuevo instrumento o estrategia para recolectar/analizar datos?
                        </p>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <Chatbot tema="Planteamiento y Justificación" />
    </div>
  );
}