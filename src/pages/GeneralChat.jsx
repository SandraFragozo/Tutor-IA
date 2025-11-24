import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Eraser } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function GeneralChat() {
    // --- LÓGICA DEL CHAT (Copiada y adaptada para pantalla completa) ---
    const [messages, setMessages] = useState([
        {
            role: 'model',
            text: `¡Hola! 👋 Soy tu **Asesor Metodológico Global**. 
      
Puedo ayudarte a conectar los puntos entre diferentes temas (por ejemplo, cómo influye tu *Paradigma* en tu *Muestreo*).

**¿En qué estás trabajando hoy?**`
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll al fondo
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    // Contexto amplio para que sepa que es el asesor general
                    context: "Asesoría General de Tesis y Metodología de la Investigación. Relaciona todos los temas (Paradigmas, Enfoques, Alcances, Diseños, Muestreo, Instrumentos)."
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            setMessages(prev => [...prev, { role: 'model', text: data.reply }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'model', text: "⚠️ **Error de conexión.** Por favor intenta de nuevo." }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Función para limpiar el chat si el usuario quiere empezar de cero
    const clearChat = () => {
        setMessages([
            { role: 'model', text: `¡Listo! Borrón y cuenta nueva. 🧹\n\n¿Qué otra duda metodológica tienes?` }
        ]);
    };

    return (
        // h-[calc(100vh-4rem)] resta la altura aproximada del Navbar para que no haya doble scroll
        <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-50">

            {/* --- 1. HEADER DEL CHAT --- */}
            <div className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center shadow-sm shrink-0">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                        <Bot size={24} />
                    </div>
                    <div>
                        <h1 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                            Asesor Global <Sparkles size={16} className="text-yellow-500" />
                        </h1>
                        <p className="text-xs text-slate-500">Experto en Metodología Integral</p>
                    </div>
                </div>

                <button
                    onClick={clearChat}
                    className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 p-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                    title="Limpiar conversación"
                >
                    <Eraser size={18} /> <span className="hidden md:inline">Limpiar Chat</span>
                </button>
            </div>

            {/* --- 2. ÁREA DE MENSAJES (Scrollable) --- */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in-up`}>

                            {/* Avatar */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 
                        ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'}`}>
                                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                            </div>

                            {/* Burbuja de Texto */}
                            <div className={`px-6 py-4 rounded-2xl shadow-sm max-w-[85%] text-base leading-relaxed
                        ${msg.role === 'user'
                                    ? 'bg-white text-slate-800 border border-slate-200 rounded-tr-none'
                                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'}`}>

                                <div className="markdown-body">
                                    {msg.role === 'user' ? (
                                        msg.text
                                    ) : (
                                        <ReactMarkdown
                                            components={{
                                                ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
                                                ol: ({ node, ...props }) => <ol className="list-decimal pl-5 my-2 space-y-1" {...props} />,
                                                strong: ({ node, ...props }) => <span className="font-bold text-indigo-700" {...props} />,
                                                p: ({ node, ...props }) => <p className="mb-3 last:mb-0" {...props} />,
                                                h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-4 mb-2 text-slate-900" {...props} />
                                            }}
                                        >
                                            {msg.text}
                                        </ReactMarkdown>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Loading Indicator */}
                    {isLoading && (
                        <div className="flex gap-4 animate-pulse">
                            <div className="w-10 h-10 rounded-full bg-indigo-200 shrink-0"></div>
                            <div className="bg-white px-6 py-4 rounded-2xl border border-slate-200 rounded-tl-none flex items-center gap-2">
                                <Loader2 size={20} className="animate-spin text-indigo-500" />
                                <span className="text-slate-400 text-sm">Analizando tu consulta...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* --- 3. ÁREA DE INPUT (Fija abajo) --- */}
            <div className="bg-white p-4 md:p-6 border-t border-slate-200 shrink-0">
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="relative flex items-center shadow-lg rounded-2xl bg-slate-50 border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-500/50 focus-within:border-indigo-500 transition-all">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Pregunta sobre cualquier tema de investigación..."
                            className="w-full bg-transparent border-0 py-4 pl-6 pr-16 text-slate-800 placeholder-slate-400 focus:ring-0 text-lg"
                            autoFocus
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className={`absolute right-2 p-3 rounded-xl transition-all duration-200
                        ${input.trim()
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 shadow-md'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                        >
                            {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                        </button>
                    </form>
                    <p className="text-center text-xs text-slate-400 mt-3">
                        Tutoría IA puede cometer errores. Revisa siempre tus fuentes bibliográficas.
                    </p>
                </div>
            </div>

        </div>
    );
}