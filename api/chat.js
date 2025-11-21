import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { message, context } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        // --- CONFIGURACIÓN DEL MODELO ---
        // Si tienes acceso a Gemini 3, cambia esto por "gemini-3.0-pro"
        // Por seguridad, usaremos la versión específica de 1.5 que es muy estable:
        const modelName = "gemini-1.5-flash-001";

        const model = genAI.getGenerativeModel({ model: modelName });

        const systemPrompt = `
      Eres un experto tutor en Metodología de la Investigación. 
      Tu objetivo es ayudar a estudiantes universitarios.
      CONTEXTO: El estudiante está viendo: "${context}".
      Responde de forma breve, amigable y académica.
    `;

        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: systemPrompt }] },
                { role: "model", parts: [{ text: "Entendido. Estoy listo para ayudar." }] },
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json({ reply: text });

    } catch (error) {
        console.error("❌ Error en API Gemini:", error);

        // Devolvemos el mensaje exacto del error para verlo en el frontend si falla
        return res.status(500).json({
            error: `Error de conexión con el modelo. Detalle: ${error.message}`
        });
    }
}