const BASE_URL = "http://www.thecocktaildb.com/api/json/v1/1";

export async function getRandomCocktail() {
  const url = `${BASE_URL}/random.php`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error obteniendo cóctel: ${response.status}`);
    }

    const data = await response.json();
    return data.drinks[0];
  } catch (error) {
    console.error("Error en thecocktaildbApi:", error);
    throw error;
  }
}
