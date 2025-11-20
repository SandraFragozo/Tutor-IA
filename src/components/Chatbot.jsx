import { useState } from 'react';

export default function Chatbot({ tema }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Botón para abrir/cerrar */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
                >
                    💬 Tutor IA
                </button>
            )}

            {/* Ventana del Chat */}
            {isOpen && (
                <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-slate-200">
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-bold">Asistente de {tema}</h3>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">✕</button>
                    </div>

                    {/* Área de Mensajes (Vacía por ahora) */}
                    <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
                        <p className="text-xs text-center text-slate-400">Pregunta sobre {tema}...</p>
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-slate-100 flex gap-2">
                        <input
                            type="text"
                            placeholder="Escribe tu duda..."
                            className="w-full border rounded-full px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-600 text-white rounded-full p-2">➤</button>
                    </div>
                </div>
            )}
        </div>
    );
}