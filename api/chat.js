import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    // 1. Configurar encabezados CORS (Para evitar bloqueos)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Manejar la petición OPTIONS (pre-vuelo)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { message, context } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        // USAMOS EL MODELO ESTÁNDAR (El más compatible)
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: `Actúa como un tutor experto en Metodología de la Investigación. El estudiante está consultando sobre: ${context}. Responde de forma breve y útil.` }],
                },
                {
                    role: "model",
                    parts: [{ text: "Entendido. Estoy listo para ayudar al estudiante con sus dudas metodológicas." }],
                },
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json({ reply: text });

    } catch (error) {
        console.error("Error API:", error);
        return res.status(500).json({ error: error.message });
    }
}