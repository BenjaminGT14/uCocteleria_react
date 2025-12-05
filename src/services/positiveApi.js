// Definimos la base. Si mañana cambian a .com u otra versión, solo tocas aquí.
const BASE_URL = "https://www.positive-api.online";

/**
 * Obtiene una frase motivacional en español.
 * Endpoint: https://www.positive-api.online/phrase/esp
 */
export async function getDailyPhrase() {
  const url = `${BASE_URL}/phrase/esp`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error obteniendo la frase: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error en el servicio positiveApi:", error);
    throw error; 
  }
}