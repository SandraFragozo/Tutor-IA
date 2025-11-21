import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    // 1. Verificar que sea una petición POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    // 2. Obtener el mensaje y el tema del frontend
    const { message, context } = req.body;

    try {
        // 3. Conectar con Gemini usando la clave secreta
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // 4. Configurar la personalidad del experto
        const systemPrompt = `
      Eres un experto tutor en Metodología de la Investigación. 
      Tu objetivo es ayudar a estudiantes universitarios a entender conceptos complejos de forma sencilla.
      
      CONTEXTO ACTUAL: El estudiante está viendo una infografía sobre: "${context}".
      
      REGLAS:
      - Responde de forma concisa y amigable.
      - Usa ejemplos prácticos relacionados con la vida estudiantil.
      - Si te preguntan algo fuera de investigación, responde amablemente que solo puedes ayudar con temas académicos.
      - No des respuestas larguísimas, ve al grano.
    `;

        // 5. Generar la respuesta
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Entendido. Soy el tutor experto. ¿En qué puedo ayudar?" }],
                },
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        // 6. Enviar respuesta al frontend
        return res.status(200).json({ reply: text });

    } catch (error) {
        console.error("Error en la API:", error);
        return res.status(500).json({ error: 'Error procesando tu solicitud.' });
    }
}