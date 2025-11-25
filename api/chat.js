import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    // 1. CORS y Validaciones
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

    // 2. Recibimos mensaje nuevo, historial previo y contexto
    const { message, history, context } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // 3. Preparamos el "Prompt del Sistema" (La personalidad)
        const systemInstruction = `
      Eres un experto tutor universitario en Metodología de la Investigación.
      CONTEXTO ACTUAL: El estudiante está consultando sobre: "${context}".
      
      TU MEMORIA:
      - Recuerda lo que el estudiante te ha dicho antes en esta conversación.
      - Si te pide "dame más ejemplos", refiérete a lo que hablaban antes.
      
      ESTILO:
      - Responde de forma breve, pedagógica y alentadora.
      - Usa formato Markdown (negritas, listas) para que sea fácil de leer.
    `;

        // 4. Convertimos el historial del Frontend al formato de Google Gemini
        // El frontend manda: { role: 'user', text: '...' }
        // Gemini necesita: { role: 'user', parts: [{ text: '...' }] }
        const geminiHistory = history.map(msg => ({
            role: msg.role === 'model' ? 'model' : 'user', // Aseguramos roles correctos
            parts: [{ text: msg.text }]
        }));

        // 5. Iniciamos el chat INYECTANDO el historial y la instrucción inicial
        const chat = model.startChat({
            history: [
                // Mensaje 0: Instrucción del sistema (oculta para el usuario, guía para la IA)
                {
                    role: "user",
                    parts: [{ text: systemInstruction }]
                },
                {
                    role: "model",
                    parts: [{ text: "Entendido. Tengo el contexto y el historial. ¿En qué ayudo?" }]
                },
                // ... El resto de la conversación real
                ...geminiHistory
            ],
        });

        // 6. Enviamos el mensaje nuevo
        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json({ reply: text });

    } catch (error) {
        console.error("Error API:", error);
        return res.status(500).json({ error: error.message });
    }
}