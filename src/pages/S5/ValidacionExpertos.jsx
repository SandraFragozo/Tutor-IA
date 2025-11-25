import { useState } from 'react';
import {
    ClipboardCheck, UserCheck, Send, FileText,
    CheckCircle2, AlertTriangle, XCircle, RefreshCw,
    Briefcase, Scale, Calculator, ThumbsUp, ThumbsDown,
    Eye, Play, Microscope, Brain
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Validacion() {
    const [activeDossier, setActiveDossier] = useState('carta');
    const [expertRating, setExpertRating] = useState({ claridad: 0, coherencia: 0, relevancia: 0 });

    // Datos del Dossier
    const dossierContent = {
        carta: {
            title: "Carta de Presentación",
            icon: <FileText size={24} />,
            color: "blue",
            desc: "Formalidad académica. Debe incluir:",
            items: ["Objetivo de la investigación.", "Por qué se le eligió a él/ella.", "Instrucciones y plazos.", "Agradecimiento formal."]
        },
        matriz_op: {
            title: "Matriz de Operacionalización",
            icon: <Briefcase size={24} />,
            color: "indigo",
            desc: "El mapa del tesoro. Sin esto, el experto está ciego.",
            items: ["Variables definidas.", "Dimensiones e Indicadores.", "El experto verifica si la pregunta realmente mide el indicador propuesto."]
        },
        instrumento: {
            title: "El Instrumento",
            icon: <ClipboardCheck size={24} />,
            color: "violet",
            desc: "La versión preliminar (Borrador 1.0).",
            items: ["Diseño tal cual lo verá el encuestado.", "Espacio para observaciones por ítem.", "Instrucciones claras de llenado."]
        },
        rubrica: {
            title: "Ficha de Validación",
            icon: <Scale size={24} />,
            color: "fuchsia",
            desc: "La herramienta de calificación.",
            items: ["Tabla para puntuar (1-4 o 1-5).", "Criterios: Suficiencia, Claridad, Coherencia, Relevancia.", "Espacio para sugerencias de redacción."]
        }
    };

    // Simulador de calificación
    const handleRate = (criteria, val) => {
        setExpertRating(prev => ({ ...prev, [criteria]: val }));
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800">

            {/* --- HERO SECTION: QUALITY CONTROL --- */}
            <header className="bg-white pt-16 pb-20 px-6 border-b border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-5"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-100 to-transparent rounded-full blur-3xl opacity-60 -mr-32 -mt-32"></div>

                <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase mb-6 border border-indigo-100">
                            <ClipboardCheck size={14} /> Control de Calidad
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Validación de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Expertos</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            Aquí tu instrumento deja de ser un "borrador" y se convierte en una herramienta científica.
                            Es el filtro de calidad obligatorio antes de salir al campo.
                        </p>
                    </div>

                    {/* Stats Card Visual */}
                    <div className="w-full md:w-auto bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600"><CheckCircle2 size={24} /></div>
                            <div>
                                <strong className="block text-slate-800 text-lg">Instrumento Válido</strong>
                                <span className="text-xs text-slate-400">Objetivo Final</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm text-slate-600">
                                <span>Claridad</span>
                                <span className="font-bold text-indigo-600">100%</span>
                            </div>
                            <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-indigo-500 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-sm text-slate-600">
                                <span>Coherencia</span>
                                <span className="font-bold text-violet-600">98%</span>
                            </div>
                            <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-[98%] bg-violet-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 -mt-8 space-y-24 relative z-20">

                {/* --- SECCIÓN 1: LA RUTA DE VALIDACIÓN (Timeline Horizontal) --- */}
                <section className="pt-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">El Proceso Operativo</h2>

                    <div className="grid md:grid-cols-4 gap-4">
                        {/* Paso 1 */}
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-blue-500 shadow-sm hover:shadow-lg transition-all relative group">
                            <div className="absolute -top-5 left-6 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">1</div>
                            <h3 className="mt-4 font-bold text-lg text-slate-800 mb-2">Selección</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Calcula el <strong>Coeficiente K</strong>. Busca equilibrio entre teóricos y prácticos.
                                <br /><span className="text-xs text-blue-500 font-bold mt-2 block">Min: 3-5 expertos.</span>
                            </p>
                        </div>

                        {/* Paso 2 */}
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-indigo-500 shadow-sm hover:shadow-lg transition-all relative group">
                            <div className="absolute -top-5 left-6 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">2</div>
                            <h3 className="mt-4 font-bold text-lg text-slate-800 mb-2">El "Kit"</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Arma el dossier. No envíes correos vacíos. Entrega formalidad para recibir calidad.
                            </p>
                        </div>

                        {/* Paso 3 */}
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-violet-500 shadow-sm hover:shadow-lg transition-all relative group">
                            <div className="absolute -top-5 left-6 w-10 h-10 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">3</div>
                            <h3 className="mt-4 font-bold text-lg text-slate-800 mb-2">Evaluación</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Ronda de calificación. Ellos usan la matriz para puntuar cada ítem del 1 al 5.
                            </p>
                        </div>

                        {/* Paso 4 */}
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-fuchsia-500 shadow-sm hover:shadow-lg transition-all relative group">
                            <div className="absolute -top-5 left-6 w-10 h-10 bg-fuchsia-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">4</div>
                            <h3 className="mt-4 font-bold text-lg text-slate-800 mb-2">Cálculo</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Aplica la <strong>V de Aiken</strong>. Si el resultado es &gt; 0.80, ¡tu instrumento es válido!
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 2: DOSSIER INTERACTIVO (Folder System) --- */}
                <section className="grid md:grid-cols-12 gap-8 bg-slate-100/50 rounded-[3rem] p-8 border border-slate-200">
                    <div className="md:col-span-4 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 px-2">El "Kit" del Experto</h3>
                        <p className="text-slate-500 text-sm mb-6 px-2">
                            Para que un experto acepte, debes facilitarle el trabajo. Esto es lo que debes enviar:
                        </p>
                        <div className="flex flex-col gap-2">
                            {Object.entries(dossierContent).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveDossier(key)}
                                    className={`p-4 rounded-xl text-left flex items-center gap-4 transition-all duration-300
                            ${activeDossier === key
                                            ? `bg-white shadow-md border-l-4 border-${data.color}-500 scale-105`
                                            : 'bg-transparent hover:bg-white/50 border-l-4 border-transparent opacity-70 hover:opacity-100'}`}
                                >
                                    <div className={`text-${data.color}-600`}>{data.icon}</div>
                                    <span className="font-bold text-slate-700">{data.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <div className="bg-white rounded-3xl p-8 h-full shadow-lg border border-slate-100 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-full h-2 bg-${dossierContent[activeDossier].color}-500`}></div>

                            <div className="flex items-start gap-4 mb-6">
                                <div className={`p-3 rounded-2xl bg-${dossierContent[activeDossier].color}-50 text-${dossierContent[activeDossier].color}-600`}>
                                    {dossierContent[activeDossier].icon}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-slate-800">{dossierContent[activeDossier].title}</h4>
                                    <p className="text-slate-500 text-sm mt-1 font-medium">{dossierContent[activeDossier].desc}</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Contenido Requerido</h5>
                                <ul className="space-y-3">
                                    {dossierContent[activeDossier].items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                            <CheckCircle2 size={18} className={`text-${dossierContent[activeDossier].color}-500 shrink-0 mt-0.5`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 3: SIMULADOR DE EXPERTO (Gamificación) --- */}
                <section className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900">Simulador: Ponte en sus zapatos</h2>
                        <p className="text-slate-500 mt-2">Juega a ser el experto. Evalúa este ítem de ejemplo:</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                        {/* Encabezado del Simulador */}
                        <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
                            <div>
                                <span className="text-indigo-200 text-xs font-bold uppercase">Variable: Estrés Académico</span>
                                <h3 className="text-xl font-bold">Ítem 4: "¿Te sientes mal en la escuela?"</h3>
                            </div>
                            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                <Eye size={24} />
                            </div>
                        </div>

                        <div className="p-8 grid md:grid-cols-2 gap-12">
                            {/* Controles de Calificación */}
                            <div className="space-y-6">
                                <p className="text-sm text-slate-500 mb-4">Califica del 1 (Pésimo) al 5 (Excelente):</p>

                                {['claridad', 'coherencia', 'relevancia'].map((crit) => (
                                    <div key={crit}>
                                        <div className="flex justify-between text-sm font-bold text-slate-700 mb-2 capitalize">
                                            <span>{crit}</span>
                                            <span className="text-indigo-600">{expertRating[crit] || '-'}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <button
                                                    key={num}
                                                    onClick={() => handleRate(crit, num)}
                                                    className={`flex-1 py-2 rounded-lg border text-sm font-bold transition-all
                                            ${expertRating[crit] === num
                                                            ? 'bg-indigo-600 text-white border-indigo-600'
                                                            : 'bg-slate-50 text-slate-400 border-slate-200 hover:border-indigo-300'}`}
                                                >
                                                    {num}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Feedback en Tiempo Real */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
                                <h4 className="font-bold text-slate-800 mb-4">Diagnóstico en tiempo real:</h4>

                                {Object.values(expertRating).some(r => r === 0) ? (
                                    <p className="text-sm text-slate-500 italic text-center">Completa la calificación para ver el diagnóstico...</p>
                                ) : (
                                    <div className="space-y-4 animate-fade-in">
                                        {expertRating.claridad < 4 && (
                                            <div className="flex gap-2 text-rose-600 text-sm bg-rose-50 p-3 rounded-lg">
                                                <XCircle size={18} className="shrink-0" />
                                                <span><strong>Baja Claridad:</strong> "Sentirse mal" es ambiguo. ¿Físicamente? ¿Emocionalmente?</span>
                                            </div>
                                        )}
                                        {expertRating.coherencia < 4 && (
                                            <div className="flex gap-2 text-amber-600 text-sm bg-amber-50 p-3 rounded-lg">
                                                <AlertTriangle size={18} className="shrink-0" />
                                                <span><strong>Baja Coherencia:</strong> La pregunta es muy general para medir "Estrés".</span>
                                            </div>
                                        )}
                                        {(expertRating.claridad >= 4 && expertRating.coherencia >= 4) && (
                                            <div className="flex gap-2 text-emerald-600 text-sm bg-emerald-50 p-3 rounded-lg">
                                                <CheckCircle2 size={18} className="shrink-0" />
                                                <span><strong>¡Excelente!</strong> Si fuera más específica, sería perfecta.</span>
                                            </div>
                                        )}
                                        <p className="text-xs text-slate-400 mt-4 text-center">Esto es lo que hace el experto en su mente.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 4: EL SEMÁFORO (Decisión) --- */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                            <ThumbsUp size={32} />
                        </div>
                        <h3 className="font-bold text-emerald-900 text-lg mb-2">Acuerdo Total</h3>
                        <p className="text-emerald-800/80 text-sm">Todos los jueces dan puntaje alto.</p>
                        <div className="mt-4 bg-white py-2 px-4 rounded-full text-xs font-bold text-emerald-600 shadow-sm inline-block">
                            EL ÍTEM SE QUEDA
                        </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 p-8 rounded-3xl text-center hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
                            <RefreshCw size={32} />
                        </div>
                        <h3 className="font-bold text-amber-900 text-lg mb-2">Acuerdo Parcial</h3>
                        <p className="text-amber-800/80 text-sm">Puntaje bueno, pero con observaciones.</p>
                        <div className="mt-4 bg-white py-2 px-4 rounded-full text-xs font-bold text-amber-600 shadow-sm inline-block">
                            SE CORRIGE (Mejorar redacción)
                        </div>
                    </div>

                    <div className="bg-rose-50 border border-rose-100 p-8 rounded-3xl text-center hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-700">
                            <ThumbsDown size={32} />
                        </div>
                        <h3 className="font-bold text-rose-900 text-lg mb-2">Desacuerdo</h3>
                        <p className="text-rose-800/80 text-sm">Puntajes bajos (V de Aiken &lt; 0.80).</p>
                        <div className="mt-4 bg-white py-2 px-4 rounded-full text-xs font-bold text-rose-600 shadow-sm inline-block">
                            SE ELIMINA
                        </div>
                    </div>
                </section>

                {/* --- COMPARATIVA FINAL --- */}
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">¿Qué sigue?</h3>
                        <p className="text-blue-100 leading-relaxed">
                            La validación de expertos asegura el <strong>CONTENIDO</strong> (Teoría).
                            <br />Pero aún falta la <strong>Prueba Piloto</strong> para asegurar la funcionalidad práctica.
                        </p>
                    </div>
                    <div className="flex gap-4 text-sm font-bold">
                        <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl flex flex-col items-center gap-1">
                            <Brain size={20} />
                            <span>Expertos = Validez</span>
                        </div>
                        <div className="bg-white text-indigo-600 px-6 py-3 rounded-xl flex flex-col items-center gap-1 shadow-lg">
                            <Play size={20} />
                            <span>Piloto = Confiabilidad</span>
                        </div>
                    </div>
                </div>

            </main>

            <Chatbot tema="Juicio de Expertos y Validación" />
        </div>
    );
}