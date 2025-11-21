import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    // 1. Validar método
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { message, context } = req.body;

    // 2. Lista de modelos para probar (en orden de preferencia)
    // Si el primero falla, intentará el segundo, etc.
    const modelCandidates = [
        "gemini-1.5-flash",      // Opción A: El más rápido y nuevo
        "gemini-1.5-flash-latest", // Opción B: Variante de versión
        "gemini-pro",            // Opción C: El clásico estable
        "gemini-1.0-pro"         // Opción D: Versión legacy segura
    ];

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        const systemPrompt = `
      Eres un experto tutor en Metodología de la Investigación. 
      Tu objetivo es ayudar a estudiantes universitarios.
      CONTEXTO: El estudiante está viendo: "${context}".
      Responde de forma breve, amigable y académica.
    `;

        let textResponse = null;
        let lastError = null;

        // 3. Bucle de intentos (La magia del respaldo)
        for (const modelName of modelCandidates) {
            try {
                console.log(`🤖 Intentando conectar con modelo: ${modelName}...`);

                const model = genAI.getGenerativeModel({ model: modelName });

                const chat = model.startChat({
                    history: [
                        { role: "user", parts: [{ text: systemPrompt }] },
                        { role: "model", parts: [{ text: "Entendido. Estoy listo para ayudar." }] },
                    ],
                });

                const result = await chat.sendMessage(message);
                const response = await result.response;
                textResponse = response.text();

                // ¡Si llegamos aquí, funcionó! Salimos del bucle.
                console.log(`✅ Éxito con el modelo: ${modelName}`);
                break;

            } catch (error) {
                console.warn(`❌ Falló el modelo ${modelName}: ${error.message}`);
                lastError = error;
                // Continuamos al siguiente modelo en la lista...
            }
        }

        // 4. Resultado final
        if (textResponse) {
            return res.status(200).json({ reply: textResponse });
        } else {
            // Si todos fallaron, lanzamos el error
            throw lastError || new Error("Ningún modelo disponible respondió.");
        }

    } catch (error) {
        console.error("🔥 Error Fatal en API:", error);
        return res.status(500).json({
            error: `Error de conexión con IA. Detalle: ${error.message}`
        });
    }
}