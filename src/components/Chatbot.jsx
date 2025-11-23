import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Chatbot({ tema }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: `¡Hola! 👋 Soy tu tutor experto en **${tema}**. \n\n¿En qué puedo ayudarte hoy?` }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

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
                body: JSON.stringify({ message: userMessage, context: tema })
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

    return (
        <>
            {/* --- VENTANA DE CHAT (Flotando MÁS ARRIBA) --- */}
            {/* Usamos 'bottom-24' para dejar espacio suficiente para el botón de abajo */}
            <div className={`fixed bottom-24 right-6 z-50 w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}`}
            >

                {/* Header */}
                <div className="bg-white p-4 border-b border-slate-100 flex justify-between items-center shadow-sm z-10">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-md">
                                <Bot size={22} />
                            </div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-sm">Tutor IA</h3>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span> En línea
                            </p>
                        </div>
                    </div>
                    {/* Botón X del header (opcional, ya que tenemos el de abajo) */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Área de Mensajes */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scroll-smooth">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                            {msg.role === 'model' && (
                                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-2 shrink-0 mt-auto">
                                    <Bot size={14} />
                                </div>
                            )}
                            <div className={`max-w-[85%] px-4 py-3 text-sm shadow-sm relative group
                ${msg.role === 'user'
                                    ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm'
                                    : 'bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-tl-sm'}`}
                            >
                                <div className="markdown-body">
                                    {msg.role === 'user' ? msg.text : (
                                        <ReactMarkdown
                                            components={{
                                                ul: ({ node, ...props }) => <ul className="list-disc pl-4 mt-2 space-y-1" {...props} />,
                                                ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mt-2 space-y-1" {...props} />,
                                                strong: ({ node, ...props }) => <span className="font-bold text-indigo-900" {...props} />,
                                                p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />
                                            }}
                                        >
                                            {msg.text}
                                        </ReactMarkdown>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start animate-pulse">
                            <div className="w-8 h-8 bg-slate-200 rounded-full mr-2 mt-auto"></div>
                            <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe tu duda..."
                            className="w-full bg-slate-100 text-slate-800 placeholder-slate-400 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className={`absolute right-2 p-2 rounded-full transition-all duration-200
                ${input.trim()
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-md'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                        >
                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                        </button>
                    </div>
                </form>
            </div>

            {/* --- BOTÓN FLOTANTE (Siempre en el piso) --- */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95
          ${isOpen
                        ? 'bg-slate-100 text-slate-600 rotate-90 border border-slate-200' // Estilo cuando está abierto (botón cerrar)
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' // Estilo cuando está cerrado (botón abrir)
                    }`}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}

                {/* Tooltip: Solo visible si está cerrado */}
                {!isOpen && (
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-3 py-1 rounded-lg shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        ¿Ayuda?
                    </span>
                )}
            </button>
        </>
    );
}