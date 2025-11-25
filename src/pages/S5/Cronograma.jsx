import { useState } from 'react';
import {
    Calendar, Clock, BarChart3, AlertTriangle,
    CheckCircle2, Flag, ArrowRight, Layers,
    ShieldAlert, Layout, FileSpreadsheet, Zap, Timer,
    Table, Trello
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Cronograma() {
    const [activePhase, setActivePhase] = useState(0);

    // Datos de las Fases
    const phases = [
        {
            id: 0,
            title: "Fase I: Planteamiento y Diseño",
            duration: "Mes 1-2",
            color: "blue",
            tasks: [
                "Revisión bibliográfica exhaustiva (Estado del Arte).",
                "Redacción del planteamiento y objetivos.",
                "Construcción del marco teórico (La lectura nunca termina)."
            ]
        },
        {
            id: 1,
            title: "Fase II: Metodología e Instrumentación",
            duration: "Mes 3",
            color: "indigo",
            tasks: [
                "Diseño de la metodología (Población y Muestra).",
                "Construcción de instrumentos.",
                "⚠️ Validación (Juicio de Expertos): Ojo, depende de terceros.",
                "Prueba Piloto."
            ]
        },
        {
            id: 2,
            title: "Fase III: Trabajo de Campo",
            duration: "Mes 4",
            color: "violet",
            tasks: [
                "Recolección de datos (Encuestas, entrevistas, experimentos).",
                "Control de calidad de los datos.",
                "Transcripción o vaciado de bases de datos."
            ]
        },
        {
            id: 3,
            title: "Fase IV: Análisis y Resultados",
            duration: "Mes 5",
            color: "fuchsia",
            tasks: [
                "Procesamiento estadístico (SPSS, Excel) o análisis cualitativo.",
                "Interpretación de resultados (¿Qué significan los datos?).",
                "Discusión: Contrastar hallazgos con tu marco teórico."
            ]
        },
        {
            id: 4,
            title: "Fase V: Cierre y Defensa",
            duration: "Mes 6",
            color: "emerald",
            tasks: [
                "Redacción final del documento.",
                "Revisión de estilo y ortografía.",
                "Trámites administrativos e impresión.",
                "Defensa de tesis o publicación."
            ]
        }
    ];

    const currentPhase = phases[activePhase];

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800">

            {/* --- HERO SECTION --- */}
            <header className="bg-white pt-16 pb-20 px-6 border-b border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-violet-500 to-emerald-400"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-xs font-bold tracking-widest uppercase mb-6">
                        <Clock size={14} /> Gestión del Tiempo
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                        Cronograma de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Investigación</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        No es solo un requisito administrativo. Es tu mapa de ruta para asegurar que la investigación sea viable.
                        <br /><span className="text-sm font-bold text-violet-500 uppercase mt-2 block">Organiza • Prioriza • Ejecuta</span>
                    </p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-24">

                {/* --- SECCIÓN 1: DIAGRAMA DE GANTT (Corregido) --- */}
                <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3 space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">El Diagrama de Gantt</h2>
                            <p className="text-slate-600 leading-relaxed">
                                El estándar de oro. Un gráfico de barras horizontales que te permite ver no solo <strong>qué</strong> hacer, sino <strong>cuándo</strong> y <strong>qué se superpone</strong>.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
                                <strong>Clave:</strong> Permite identificar la dependencia. <br />
                                <em>"No puedo analizar datos (Fase 4) si no he recolectado (Fase 3)."</em>
                            </div>
                        </div>

                        {/* Gantt Visual Interactivo (Textos Agregados) */}
                        <div className="md:w-2/3 w-full bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner overflow-x-auto">
                            <div className="min-w-[500px]">
                                {/* Header Meses */}
                                <div className="grid grid-cols-7 mb-4 text-xs font-bold text-slate-400 uppercase text-center">
                                    <div className="text-left pl-2 col-span-2">Actividad</div>
                                    <div>Mes 1</div>
                                    <div>Mes 2</div>
                                    <div>Mes 3</div>
                                    <div>Mes 4</div>
                                    <div>Mes 5</div>
                                </div>

                                {/* Barras */}
                                <div className="space-y-4">
                                    {/* Tarea 1 */}
                                    <div className="grid grid-cols-7 items-center group">
                                        <div className="col-span-2 text-sm font-bold text-slate-700 pl-2">1. Revisión Lit.</div>
                                        <div className="col-span-2 relative h-8 bg-blue-100 rounded-lg border border-blue-300 group-hover:bg-blue-200 transition-colors">
                                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-blue-700 font-bold">Base Teórica</div>
                                        </div>
                                    </div>
                                    {/* Tarea 2 */}
                                    <div className="grid grid-cols-7 items-center group">
                                        <div className="col-span-2 text-sm font-bold text-slate-700 pl-2">2. Instrumentos</div>
                                        <div className="col-start-4 col-span-1 relative h-8 bg-indigo-100 rounded-lg border border-indigo-300 group-hover:bg-indigo-200 transition-colors">
                                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-indigo-700 font-bold">Diseño</div>
                                        </div>
                                    </div>
                                    {/* Tarea 3 (TEXTO AGREGADO) */}
                                    <div className="grid grid-cols-7 items-center group">
                                        <div className="col-span-2 text-sm font-bold text-slate-700 pl-2">3. Validación</div>
                                        <div className="col-start-4 col-span-1 ml-4 relative h-8 bg-amber-100 rounded-lg border border-amber-300 group-hover:bg-amber-200 transition-colors w-2/3">
                                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-amber-700 font-bold">Jueces</div>
                                            {/* Icono de alerta flotante */}
                                            <div className="absolute -right-2 -top-2 text-amber-500 bg-white rounded-full shadow-sm p-0.5"><AlertTriangle size={12} fill="currentColor" /></div>
                                        </div>
                                    </div>
                                    {/* Tarea 4 */}
                                    <div className="grid grid-cols-7 items-center group">
                                        <div className="col-span-2 text-sm font-bold text-slate-700 pl-2">4. Campo</div>
                                        <div className="col-start-5 col-span-1 relative h-8 bg-violet-100 rounded-lg border border-violet-300 group-hover:bg-violet-200 transition-colors">
                                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-violet-700 font-bold">Datos</div>
                                        </div>
                                    </div>
                                    {/* Tarea 5 (TEXTO AGREGADO) */}
                                    <div className="grid grid-cols-7 items-center group">
                                        <div className="col-span-2 text-sm font-bold text-slate-700 pl-2">5. Análisis</div>
                                        <div className="col-start-6 col-span-1 relative h-8 bg-fuchsia-100 rounded-lg border border-fuchsia-300 group-hover:bg-fuchsia-200 transition-colors">
                                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-fuchsia-700 font-bold">Reporte</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 2: FASES OPERATIVAS --- */}
                <section className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Desglose Operativo</h2>
                        <p className="text-slate-500 mt-2">No pongas "Hacer Tesis". Desglosa en pasos lógicos.</p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-6">
                        {/* Navegación Vertical */}
                        <div className="md:col-span-4 flex flex-col gap-2">
                            {phases.map((phase, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActivePhase(index)}
                                    className={`p-4 rounded-xl text-left transition-all duration-300 border-l-4 flex items-center justify-between group
                            ${activePhase === index
                                            ? `bg-white border-${phase.color}-500 shadow-md`
                                            : 'bg-slate-100 border-transparent text-slate-500 hover:bg-white'}`}
                                >
                                    <span className={`font-bold ${activePhase === index ? `text-${phase.color}-700` : ''}`}>
                                        {phase.title.split(':')[0]}
                                    </span>
                                    {activePhase === index && <ArrowRight size={16} className={`text-${phase.color}-500`} />}
                                </button>
                            ))}
                        </div>

                        {/* Detalle de Fase */}
                        <div className="md:col-span-8">
                            <div className={`h-full bg-white rounded-3xl p-8 border-2 border-${currentPhase.color}-100 shadow-lg animate-fade-in`}>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className={`text-2xl font-bold text-${currentPhase.color}-800`}>
                                        {currentPhase.title.split(':')[1]}
                                    </h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${currentPhase.color}-100 text-${currentPhase.color}-700 uppercase`}>
                                        {currentPhase.duration}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {currentPhase.tasks.map((task, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className={`mt-1 p-1 rounded-full bg-${currentPhase.color}-100 text-${currentPhase.color}-600 shrink-0`}>
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <p className="text-slate-700 text-sm">{task}</p>
                                        </div>
                                    ))}
                                </div>

                                {activePhase === 1 && (
                                    <div className="mt-6 bg-amber-50 p-4 rounded-xl border border-amber-200 flex gap-3 items-start">
                                        <AlertTriangle className="text-amber-600 shrink-0" size={20} />
                                        <p className="text-xs text-amber-800">
                                            <strong>¡Alerta!</strong> La validación por expertos depende de la agenda de otros. Suele ser el mayor cuello de botella.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 3: KIT DE SUPERVIVENCIA --- */}
                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center flex items-center justify-center gap-2">
                        <ShieldAlert className="text-rose-500" /> Kit de Supervivencia
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                                <Timer size={20} />
                            </div>
                            <h4 className="font-bold text-slate-800 mb-2">Ley de Hofstadter</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                "Siempre lleva más tiempo del que esperas, incluso si tienes en cuenta la Ley de Hofstadter."
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                                <Layers size={20} />
                            </div>
                            <h4 className="font-bold text-slate-800 mb-2">Tiempo de Holgura</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Nunca planifiques para el escenario perfecto. Si crees que tomará 2 semanas, asigna 3. Siempre hay imprevistos.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-fuchsia-100 text-fuchsia-600 rounded-full flex items-center justify-center mb-4">
                                <Flag size={20} />
                            </div>
                            <h4 className="font-bold text-slate-800 mb-2">Ruta Crítica</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Identifica qué tareas bloquean a otras. Ej: Sin validar el instrumento, NO puedes salir a campo.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                <Layout size={20} />
                            </div>
                            <h4 className="font-bold text-slate-800 mb-2">Dependencias</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Marca en rojo lo que dependa de firmas, permisos o jueces externos. Son lo más difícil de controlar.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 4: HERRAMIENTAS (REDISEÑADO Y DETALLADO) --- */}
                <section className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Herramientas Recomendadas</h2>
                        <p className="text-slate-500 mt-2">Elige la que mejor se adapte a la complejidad de tu proyecto.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Herramienta 1: Excel */}
                        <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-lg hover:-translate-y-2 transition-all group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                                    <FileSpreadsheet size={32} />
                                </div>
                                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold uppercase rounded-full">Básico</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Excel / Sheets</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                La opción más flexible. Puedes colorear celdas manualmente para crear tu Gantt. Universal y fácil de compartir.
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <strong className="text-xs text-emerald-700 uppercase tracking-wide block mb-1">Ideal Para:</strong>
                                <p className="text-xs text-slate-500">Cronogramas sencillos y tesis individuales.</p>
                            </div>
                        </div>

                        {/* Herramienta 2: GanttProject */}
                        <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:-translate-y-2 transition-all group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                                    <BarChart3 size={32} />
                                </div>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full">Intermedio</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">GanttProject</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Software gratuito y de código abierto diseñado específicamente para esto. Permite marcar dependencias y hitos.
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <strong className="text-xs text-blue-700 uppercase tracking-wide block mb-1">Ideal Para:</strong>
                                <p className="text-xs text-slate-500">Tesis formales que requieren cálculo de rutas críticas.</p>
                            </div>
                        </div>

                        {/* Herramienta 3: Notion/Trello */}
                        <div className="bg-white p-8 rounded-3xl border border-amber-100 shadow-lg hover:-translate-y-2 transition-all group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                                    <Trello size={32} />
                                </div>
                                <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase rounded-full">Gestión</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Notion / Trello</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Menos visual para "tiempos" pero excelente para "tareas". Usa tableros Kanban (Por hacer, En proceso, Hecho).
                            </p>
                            <div className="pt-4 border-t border-slate-100">
                                <strong className="text-xs text-amber-700 uppercase tracking-wide block mb-1">Ideal Para:</strong>
                                <p className="text-xs text-slate-500">El día a día. Organizar tus pendientes diarios.</p>
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <Chatbot tema="Cronograma de Investigación" />
        </div>
    );
}