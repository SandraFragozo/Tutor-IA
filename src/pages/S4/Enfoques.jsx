import { useState } from 'react';
import {
    BarChart2, Search, Layers, ArrowRight, Scale,
    CheckCircle, Compass, GitMerge, MousePointerClick,
    FileText, Database, RefreshCw, Users
} from 'lucide-react';
import Chatbot from '../../components/Chatbot';

export default function Enfoques() {
    // Estado para el "Duelo" (Cuanti vs Cuali)
    const [activeMode, setActiveMode] = useState('cuanti');

    // Estado para los diseños Mixtos
    const [activeMix, setActiveMix] = useState('exploratorio');

    // Estado para la interactividad de las fases
    const [selectedPhaseInfo, setSelectedPhaseInfo] = useState(null);

    // Resetear info al cambiar de pestaña mixta
    const handleMixChange = (mix) => {
        setActiveMix(mix);
        setSelectedPhaseInfo(null); // Limpia la selección anterior
    };

    // Datos para el comparador (Con estilos explícitos para arreglar el bug del color rosa)
    const comparisonData = {
        cuanti: {
            styles: {
                bgIcon: "bg-blue-100",
                textIcon: "text-blue-600",
                bgCard: "bg-blue-50",
                borderCard: "border-blue-100",
                titleColor: "text-blue-800",
                subTitleColor: "text-blue-600",
                checkColor: "text-blue-500",
                btnActive: "text-blue-500"
            },
            title: "Cuantitativo",
            subtitle: "Objetividad y Medición",
            desc: "Mide fenómenos, usa estadísticas y busca probar hipótesis. Es como tomar una foto satelital: ves el panorama general y los patrones.",
            icon: <BarChart2 className="w-12 h-12" />,
            features: [
                "🔍 Deductivo: De la teoría a los datos.",
                "📊 Muestras grandes y representativas.",
                "🎯 Busca generalizar resultados (Validez Externa).",
                "📏 Instrumentos estandarizados (tests, encuestas)."
            ]
        },
        cuali: {
            styles: {
                bgIcon: "bg-pink-100",
                textIcon: "text-pink-600",
                bgCard: "bg-pink-50",
                borderCard: "border-pink-100",
                titleColor: "text-pink-800",
                subTitleColor: "text-pink-600",
                checkColor: "text-pink-500",
                btnActive: "text-pink-500"
            },
            title: "Cualitativo",
            subtitle: "Profundidad y Significado",
            desc: "Comprende experiencias, usa narrativas y busca generar teoría. Es como bajar a la calle y hablar con la gente: ves los detalles y sentimientos.",
            icon: <Search className="w-12 h-12" />,
            features: [
                "🌱 Inductivo: De los datos a la teoría.",
                "🗣️ Muestras pequeñas y específicas.",
                "🔍 Busca profundidad (Validez Interna).",
                "📝 Instrumentos flexibles (entrevistas, diarios, focus groups)."
            ]
        }
    };

    const currentMode = comparisonData[activeMode];
    const s = currentMode.styles;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">

            {/* --- HERO SECTION (Corrección: Eliminado border-b) --- */}
            <header className="bg-white pt-12 pb-12 px-4 text-center relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
                    <Compass size={16} /> Ruta Metodológica
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Enfoques <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Metodológicos</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    ¿Tu investigación necesita medir números exactos o entender historias profundas? ¿O tal vez ambos?
                    Elige la brújula correcta para tu viaje científico.
                </p>
            </header>

            <main className="max-w-6xl mx-auto px-4 mt-8">

                {/* --- SECCIÓN 1: EL DUELO (Corrección: Colores dinámicos arreglados) --- */}
                <section className="bg-white rounded-3xl shadow-xl p-8 mb-16 relative overflow-hidden">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Comparador: ¿Qué camino tomar?</h2>

                        {/* SWITCHER */}
                        <div className="inline-flex bg-slate-100 p-1 rounded-full relative shadow-inner">
                            <div className={`w-1/2 h-full absolute top-0 rounded-full transition-all duration-300 shadow-sm 
                        ${activeMode === 'cuanti' ? 'left-0 bg-blue-500' : 'left-1/2 bg-pink-500'}`}>
                            </div>

                            <button
                                onClick={() => setActiveMode('cuanti')}
                                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors duration-300
                        ${activeMode === 'cuanti' ? 'text-white' : 'text-slate-500 hover:text-blue-500'}`}
                            >
                                Cuantitativo
                            </button>
                            <button
                                onClick={() => setActiveMode('cuali')}
                                className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors duration-300
                        ${activeMode === 'cuali' ? 'text-white' : 'text-slate-500 hover:text-pink-500'}`}
                            >
                                Cualitativo
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center transition-all">
                        {/* Lado Izquierdo: Información Dinámica */}
                        <div className="space-y-6 animate-fade-in">
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-500
                        ${s.bgIcon} ${s.textIcon}`}>
                                {currentMode.icon}
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-slate-800 mb-2">{currentMode.title}</h3>
                                <p className={`text-xl font-bold ${s.subTitleColor}`}>{currentMode.subtitle}</p>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {currentMode.desc}
                            </p>
                        </div>

                        {/* Lado Derecho: Tarjeta de Características (Ahora usa las clases explícitas) */}
                        <div className={`${s.bgCard} rounded-3xl p-8 border ${s.borderCard} shadow-sm transition-colors duration-500`}>
                            <h4 className={`font-bold text-lg mb-6 flex items-center gap-2 ${s.titleColor}`}>
                                <CheckCircle size={20} /> Características Clave
                            </h4>
                            <ul className="space-y-4">
                                {currentMode.features.map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700 font-medium items-start">
                                        <ArrowRight size={18} className={`${s.checkColor} shrink-0 mt-1`} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 2: MÉTODOS MIXTOS (Sin borrar información) --- */}
                <section className="mb-16">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

                        {/* Header de la Sección */}
                        <div className="bg-slate-50 p-8 border-b border-slate-100 text-center">
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
                                <Layers size={16} /> Pragmatismo
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">El Enfoque Mixto</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                No es solo sumar (Cuanti + Cuali), es <strong>integrar</strong>. Haz clic en las fases para ver cómo conectarlas.
                            </p>
                        </div>

                        <div className="p-6 md:p-10">

                            {/* NAVEGACIÓN DE PESTAÑAS */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                                <button
                                    onClick={() => handleMixChange('exploratorio')}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 group
                                ${activeMix === 'exploratorio'
                                            ? 'border-purple-500 bg-purple-50 text-purple-800 shadow-md scale-105'
                                            : 'border-slate-100 text-slate-400 hover:border-purple-200 hover:bg-purple-50/50'}`}
                                >
                                    <Search className={activeMix === 'exploratorio' ? 'text-purple-600' : 'text-slate-300 group-hover:text-purple-400'} />
                                    <span className="font-bold text-sm">1. Secuencial Exploratorio</span>
                                </button>

                                <button
                                    onClick={() => handleMixChange('explicativo')}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 group
                                ${activeMix === 'explicativo'
                                            ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-md scale-105'
                                            : 'border-slate-100 text-slate-400 hover:border-blue-200 hover:bg-blue-50/50'}`}
                                >
                                    <BarChart2 className={activeMix === 'explicativo' ? 'text-blue-600' : 'text-slate-300 group-hover:text-blue-400'} />
                                    <span className="font-bold text-sm">2. Secuencial Explicativo</span>
                                </button>

                                <button
                                    onClick={() => handleMixChange('triangulacion')}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 group
                                ${activeMix === 'triangulacion'
                                            ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-md scale-105'
                                            : 'border-slate-100 text-slate-400 hover:border-emerald-200 hover:bg-emerald-50/50'}`}
                                >
                                    <Scale className={activeMix === 'triangulacion' ? 'text-emerald-600' : 'text-slate-300 group-hover:text-emerald-400'} />
                                    <span className="font-bold text-sm">3. Triangulación</span>
                                </button>
                            </div>

                            {/* ÁREA DE VISUALIZACIÓN DINÁMICA */}
                            <div className="min-h-[450px] flex flex-col items-center relative">

                                {/* --- 1. VISUALIZACIÓN: EXPLORATORIO (Morado) --- */}
                                {activeMix === 'exploratorio' && (
                                    <div className="w-full max-w-4xl animate-fade-in">
                                        <p className="text-center text-slate-400 text-sm mb-6 flex items-center justify-center gap-2">
                                            <MousePointerClick size={14} /> Haz clic en cada fase para ver detalles
                                        </p>

                                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 relative">
                                            {/* Botón Fase 1 */}
                                            <button
                                                onClick={() => setSelectedPhaseInfo('exploratorio_f1')}
                                                className={`w-64 p-6 rounded-2xl border-2 text-center z-10 transition-all hover:scale-105 shadow-sm
                                        ${selectedPhaseInfo === 'exploratorio_f1' ? 'bg-purple-600 border-purple-600 text-white ring-4 ring-purple-200' : 'bg-purple-50 border-purple-200 hover:border-purple-400'}`}>
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 
                                            ${selectedPhaseInfo === 'exploratorio_f1' ? 'bg-white text-purple-600' : 'bg-purple-200 text-purple-600'}`}>
                                                    <Search size={24} />
                                                </div>
                                                <h4 className={`font-bold ${selectedPhaseInfo === 'exploratorio_f1' ? 'text-white' : 'text-purple-900'}`}>FASE 1: CUALITATIVA</h4>
                                                <p className={`text-xs mt-2 ${selectedPhaseInfo === 'exploratorio_f1' ? 'text-purple-100' : 'text-purple-700'}`}>Exploras lo desconocido</p>
                                            </button>

                                            {/* Flecha conectora */}
                                            <div className="hidden md:flex flex-col items-center text-purple-300 px-4">
                                                <span className="text-[10px] font-bold uppercase mb-1 text-slate-400">Generas Instrumento</span>
                                                <ArrowRight size={32} />
                                            </div>
                                            <ArrowRight size={32} className="md:hidden text-purple-300 rotate-90 my-2" />

                                            {/* Botón Fase 2 */}
                                            <button
                                                onClick={() => setSelectedPhaseInfo('exploratorio_f2')}
                                                className={`w-64 p-6 rounded-2xl border-2 text-center z-10 transition-all hover:scale-105 shadow-sm
                                        ${selectedPhaseInfo === 'exploratorio_f2' ? 'bg-purple-600 border-purple-600 text-white ring-4 ring-purple-200' : 'bg-white border-dashed border-purple-200 hover:border-purple-400'}`}>
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3
                                            ${selectedPhaseInfo === 'exploratorio_f2' ? 'bg-white text-purple-600' : 'bg-slate-50 text-slate-400'}`}>
                                                    <BarChart2 size={24} />
                                                </div>
                                                <h4 className={`font-bold ${selectedPhaseInfo === 'exploratorio_f2' ? 'text-white' : 'text-slate-700'}`}>FASE 2: CUANTITATIVA</h4>
                                                <p className={`text-xs mt-2 ${selectedPhaseInfo === 'exploratorio_f2' ? 'text-purple-100' : 'text-slate-500'}`}>Mides lo descubierto</p>
                                            </button>
                                        </div>

                                        {/* Info siempre visible del contexto */}
                                        {!selectedPhaseInfo && (
                                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 animate-fade-in mb-4">
                                                <h3 className="text-lg font-bold text-purple-900 mb-1">Explorar para Medir</h3>
                                                <p className="text-slate-700 text-sm">
                                                    Úsalo cuando <strong>NO sabes qué variables medir</strong>. Primero entrevistas para descubrir los temas y luego creas una encuesta.
                                                </p>
                                            </div>
                                        )}

                                        {/* Panel de Información Detallada (Al hacer clic) */}
                                        {selectedPhaseInfo === 'exploratorio_f1' && (
                                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 animate-fade-in">
                                                <h3 className="text-lg font-bold text-purple-900 mb-2 flex items-center gap-2"><Search size={20} /> Detalle Fase 1: Exploración</h3>
                                                <p className="text-slate-700 mb-2">Aquí no sabes qué preguntar todavía. Tu objetivo es descubrir las variables.</p>
                                                <ul className="list-disc list-inside text-sm text-slate-600">
                                                    <li><strong>Técnica:</strong> Entrevistas a profundidad o Focus Groups.</li>
                                                    <li><strong>Resultado:</strong> Una lista de temas o categorías recurrentes.</li>
                                                </ul>
                                            </div>
                                        )}
                                        {selectedPhaseInfo === 'exploratorio_f2' && (
                                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 animate-fade-in">
                                                <h3 className="text-lg font-bold text-purple-900 mb-2 flex items-center gap-2"><FileText size={20} /> Detalle Fase 2: Medición</h3>
                                                <p className="text-slate-700 mb-2">Usas los temas encontrados en la Fase 1 para escribir las preguntas de tu encuesta.</p>
                                                <ul className="list-disc list-inside text-sm text-slate-600">
                                                    <li><strong>Técnica:</strong> Cuestionario (Survey) con escala Likert.</li>
                                                    <li><strong>Resultado:</strong> Datos estadísticos validados.</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* --- 2. VISUALIZACIÓN: EXPLICATIVO (Azul) --- */}
                                {activeMix === 'explicativo' && (
                                    <div className="w-full max-w-4xl animate-fade-in">
                                        <p className="text-center text-slate-400 text-sm mb-6 flex items-center justify-center gap-2">
                                            <MousePointerClick size={14} /> Haz clic en cada fase para ver detalles
                                        </p>

                                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 relative">
                                            {/* Botón Fase 1 */}
                                            <button
                                                onClick={() => setSelectedPhaseInfo('explicativo_f1')}
                                                className={`w-64 p-6 rounded-2xl border-2 text-center z-10 transition-all hover:scale-105 shadow-sm
                                        ${selectedPhaseInfo === 'explicativo_f1' ? 'bg-blue-600 border-blue-600 text-white ring-4 ring-blue-200' : 'bg-blue-50 border-blue-200 hover:border-blue-400'}`}>
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 
                                            ${selectedPhaseInfo === 'explicativo_f1' ? 'bg-white text-blue-600' : 'bg-blue-200 text-blue-600'}`}>
                                                    <BarChart2 size={24} />
                                                </div>
                                                <h4 className={`font-bold ${selectedPhaseInfo === 'explicativo_f1' ? 'text-white' : 'text-blue-900'}`}>FASE 1: CUANTITATIVA</h4>
                                                <p className={`text-xs mt-2 ${selectedPhaseInfo === 'explicativo_f1' ? 'text-blue-100' : 'text-blue-700'}`}>Datos generales</p>
                                            </button>

                                            {/* Flecha conectora */}
                                            <div className="hidden md:flex flex-col items-center text-blue-300 px-4">
                                                <span className="text-[10px] font-bold uppercase mb-1 text-slate-400">Seleccionas Casos</span>
                                                <ArrowRight size={32} />
                                            </div>
                                            <ArrowRight size={32} className="md:hidden text-blue-300 rotate-90 my-2" />

                                            {/* Botón Fase 2 */}
                                            <button
                                                onClick={() => setSelectedPhaseInfo('explicativo_f2')}
                                                className={`w-64 p-6 rounded-2xl border-2 text-center z-10 transition-all hover:scale-105 shadow-sm
                                        ${selectedPhaseInfo === 'explicativo_f2' ? 'bg-blue-600 border-blue-600 text-white ring-4 ring-blue-200' : 'bg-white border-dashed border-blue-200 hover:border-blue-400'}`}>
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3
                                            ${selectedPhaseInfo === 'explicativo_f2' ? 'bg-white text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                                                    <Search size={24} />
                                                </div>
                                                <h4 className={`font-bold ${selectedPhaseInfo === 'explicativo_f2' ? 'text-white' : 'text-slate-700'}`}>FASE 2: CUALITATIVA</h4>
                                                <p className={`text-xs mt-2 ${selectedPhaseInfo === 'explicativo_f2' ? 'text-blue-100' : 'text-slate-500'}`}>Explicas el "por qué"</p>
                                            </button>
                                        </div>

                                        {/* Info siempre visible del contexto */}
                                        {!selectedPhaseInfo && (
                                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 animate-fade-in mb-4">
                                                <h3 className="text-lg font-bold text-blue-900 mb-1">Medir y luego Explicar</h3>
                                                <p className="text-slate-700 text-sm">
                                                    Úsalo cuando los números te dicen <strong>"qué"</strong> pasó (ej: ventas cayeron), pero necesitas entrevistas para entender <strong>"por qué"</strong>.
                                                </p>
                                            </div>
                                        )}

                                        {/* Panel Detalle Explicativo */}
                                        {selectedPhaseInfo === 'explicativo_f1' && (
                                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 animate-fade-in">
                                                <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2"><Database size={20} /> Detalle Fase 1: Panorama</h3>
                                                <p className="text-slate-700 mb-2">Tienes muchos datos numéricos, pero algunos resultados son extraños o inesperados.</p>
                                                <ul className="list-disc list-inside text-sm text-slate-600">
                                                    <li><strong>Ejemplo:</strong> "El 40% de los usuarios abandonó la app en la pantalla de inicio".</li>
                                                </ul>
                                            </div>
                                        )}
                                        {selectedPhaseInfo === 'explicativo_f2' && (
                                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 animate-fade-in">
                                                <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2"><Users size={20} /> Detalle Fase 2: Profundización</h3>
                                                <p className="text-slate-700 mb-2">Buscas a personas específicas de la Fase 1 (ej: los que abandonaron la app) para entender sus razones.</p>
                                                <ul className="list-disc list-inside text-sm text-slate-600">
                                                    <li><strong>Técnica:</strong> Entrevista semi-estructurada preguntando "¿Por qué?".</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* --- 3. VISUALIZACIÓN: TRIANGULACIÓN (Esmeralda) --- */}
                                {activeMix === 'triangulacion' && (
                                    <div className="w-full max-w-4xl animate-fade-in relative">
                                        <p className="text-center text-slate-400 text-sm mb-6 flex items-center justify-center gap-2">
                                            <MousePointerClick size={14} /> Toca los elementos para ver cómo se validan
                                        </p>

                                        {/* Contenedor del Triángulo */}
                                        <div className="relative h-[300px] w-full max-w-[500px] mx-auto mb-6">

                                            {/* Líneas conectoras SVG */}
                                            <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <line x1="50" y1="50" x2="20" y2="20" stroke="#d1fae5" strokeWidth="2" strokeDasharray="4" />
                                                <line x1="50" y1="50" x2="80" y2="20" stroke="#d1fae5" strokeWidth="2" strokeDasharray="4" />
                                                <path d="M20 30 L50 50" stroke="#10b981" strokeWidth="1" />
                                                <path d="M80 30 L50 50" stroke="#10b981" strokeWidth="1" />
                                            </svg>

                                            {/* Nodo Central (SÍNTESIS - Clickeable) */}
                                            <button
                                                onClick={() => setSelectedPhaseInfo('tri_verdad')}
                                                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 
                                        rounded-full shadow-lg w-24 h-24 flex flex-col items-center justify-center border-4 transition-all hover:scale-110
                                        ${selectedPhaseInfo === 'tri_verdad' ? 'bg-emerald-600 border-emerald-800 text-white' : 'bg-emerald-500 border-emerald-100 text-white animate-pulse'}`}>
                                                <RefreshCw size={24} className={selectedPhaseInfo === 'tri_verdad' ? 'animate-spin' : ''} />
                                                <span className="text-[10px] font-bold mt-1">CRUCE</span>
                                            </button>

                                            {/* Nodo Izquierda (CUALI - Clickeable) */}
                                            <button
                                                onClick={() => setSelectedPhaseInfo('tri_cuali')}
                                                className={`absolute top-0 left-0 z-10 transform translate-y-4 md:translate-x-10 p-3 rounded-xl shadow-md border w-32 md:w-40 text-center transition-all hover:-translate-y-1
                                        ${selectedPhaseInfo === 'tri_cuali' ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-emerald-200'}`}>
                                                <div className={`font-bold text-sm mb-1 ${selectedPhaseInfo === 'tri_cuali' ? 'text-white' : 'text-emerald-500'}`}>Cualitativo</div>
                                                <div className={`text-xs ${selectedPhaseInfo === 'tri_cuali' ? 'text-emerald-100' : 'text-slate-500'}`}>Subjetividad</div>
                                            </button>

                                            {/* Nodo Derecha (CUANTI - Clickeable) */}
                                            <button
                                                onClick={() => setSelectedPhaseInfo('tri_cuanti')}
                                                className={`absolute top-0 right-0 z-10 transform translate-y-4 md:-translate-x-10 p-3 rounded-xl shadow-md border w-32 md:w-40 text-center transition-all hover:-translate-y-1
                                        ${selectedPhaseInfo === 'tri_cuanti' ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-emerald-200'}`}>
                                                <div className={`font-bold text-sm mb-1 ${selectedPhaseInfo === 'tri_cuanti' ? 'text-white' : 'text-emerald-500'}`}>Cuantitativo</div>
                                                <div className={`text-xs ${selectedPhaseInfo === 'tri_cuanti' ? 'text-emerald-100' : 'text-slate-500'}`}>Objetividad</div>
                                            </button>

                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center">
                                                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                                    Convergencia de Datos
                                                </span>
                                            </div>
                                        </div>

                                        {/* Info siempre visible si no hay selección */}
                                        {!selectedPhaseInfo && (
                                            <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500 animate-fade-in text-left mb-4">
                                                <h3 className="text-lg font-bold text-emerald-900 mb-1">Validación Cruzada</h3>
                                                <p className="text-slate-700 text-sm">
                                                    Haces ambos estudios <strong>simultáneamente</strong>. Comparas los hallazgos para ver si coinciden y dar validez.
                                                </p>
                                            </div>
                                        )}

                                        {/* Panel Info Triangulación */}
                                        {selectedPhaseInfo === 'tri_cuali' && (
                                            <div className="bg-emerald-50 p-4 rounded-lg text-sm text-emerald-800 border border-emerald-200 text-center animate-fade-in">
                                                "Los participantes dijeron en entrevistas que se sentían frustrados." (Perspectiva personal)
                                            </div>
                                        )}
                                        {selectedPhaseInfo === 'tri_cuanti' && (
                                            <div className="bg-emerald-50 p-4 rounded-lg text-sm text-emerald-800 border border-emerald-200 text-center animate-fade-in">
                                                "Las encuestas mostraron un nivel de satisfacción de 2/10." (Dato duro)
                                            </div>
                                        )}
                                        {selectedPhaseInfo === 'tri_verdad' && (
                                            <div className="bg-emerald-600 p-4 rounded-lg text-sm text-white shadow-lg text-center animate-fade-in">
                                                <strong>¡Validación Exitosa!</strong><br /> Como los números bajos coinciden con la frustración verbal, tu conclusión es muy sólida.
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN 3: MATRIZ DE DECISIÓN (Igual) --- */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Matriz de Decisión: ¿Cuál elijo?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-purple-500 group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Escenario 1</span>
                                <Search className="text-purple-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Poca Teoría + Experiencia Subjetiva</h3>
                            <p className="text-slate-600 text-sm mb-4">No hay mucha info sobre el tema y quieres explorar sentimientos o vivencias.</p>
                            <div className="text-purple-700 font-bold text-sm">✅ Elige CUALITATIVO</div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-blue-500 group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Escenario 2</span>
                                <BarChart2 className="text-blue-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Mucha Teoría + Medición Objetiva</h3>
                            <p className="text-slate-600 text-sm mb-4">El tema es conocido, hay variables claras y necesitas probar una hipótesis con números.</p>
                            <div className="text-blue-700 font-bold text-sm">✅ Elige CUANTITATIVO</div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-teal-500 group cursor-pointer md:col-span-2">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Escenario 3</span>
                                <GitMerge className="text-teal-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Problema Complejo (Necesitas Ambos)</h3>
                            <p className="text-slate-600 text-sm mb-4">Necesitas generalizar (números) pero también entender el contexto profundo (historias). Los recursos te lo permiten.</p>
                            <div className="text-teal-600 font-bold text-sm">✅ Elige MÉTODOS MIXTOS</div>
                        </div>
                    </div>
                </section>

                {/* --- TIP FINAL (Corrección: Color Ámbar/Dorado) --- */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm mb-20 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-white p-4 rounded-full shadow-md text-4xl">👑</div>
                    <div>
                        <h4 className="text-amber-900 font-bold text-lg mb-2 uppercase tracking-wide">La Regla de Oro</h4>
                        <p className="text-amber-800/90 leading-relaxed font-medium text-lg">
                            "El enfoque no depende de tu gusto personal, sino de la <strong className="text-amber-950 underline decoration-amber-400">PREGUNTA</strong> de investigación."
                        </p>
                        <p className="text-amber-700 text-sm mt-2">
                            Si preguntas "¿Cuánto?", mides (Cuanti). Si preguntas "¿Cómo se siente?", exploras (Cuali).
                        </p>
                    </div>
                </div>

            </main>

            <Chatbot tema="Enfoques Metodológicos" />
        </div>
    );
}