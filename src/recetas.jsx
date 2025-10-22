import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importa las imágenes (ajusta rutas según dónde las tengas)
import mojitoImg from "./img/Mojito.jpg";
import caipirinhaImg from "./img/Caipirinha.jpg";
import pinaColadaImg from "./img/Piña_Colada.jpg";
import margaritaImg from "./img/Margarita.jpg";
import tequilaSunriseImg from "./img/Tequila_Sunrise.jpg";
import daiquiriImg from "./img/Daiquiri.jpg";
import cubaLibreImg from "./img/Cuba_Libre.jpg";
import oldFashionedImg from "./img/Old_fashioned.jpg";
import negroniImg from "./img/Negroni.jpg";
import manhattanImg from "./img/Manhattan.jpg";
import cosmopolitanImg from "./img/Cosmopolitan.jpg";
import martiniImg from "./img/Martini.jpg";
import bloodyMaryImg from "./img/Bloody_Mary.jpg";
import whiskySourImg from "./img/Whisky_Sour.jpg";
import maiTaiImg from "./img/Mai_Tai.jpg";
import ginTonicImg from "./img/Gin_Tonic.jpg";
import french75Img from "./img/French_75.jpg";
import mintJulepImg from "./img/Mint_Julep.jpg";
import piscoSourImg from "./img/Pisco_Sour.jpg";
import tomCollinsImg from "./img/Tom_Collins.jpg";
import aperolSpritzImg from "./img/Aperol_Spritz.jpg";
import irishCoffeeImg from "./img/Irish_Coffee.jpg";
import maiTaiRoyalImg from "./img/Mai_Tai_Royal.jpg";
import longIslandImg from "./img/Long_Island_Iced_Tea.jpg";
import blueLagoonImg from "./img/Blue_Lagoon.jpg";
import sexOnTheBeachImg from "./img/Sex_on_the_Beach.jpg";
import belliniImg from "./img/Bellini.jpg";
import kirRoyaleImg from "./img/Kir_Royale.jpg";
import zombieImg from "./img/Zombie.jpg";
import singaporeSlingImg from "./img/Singapore_Sling.jpg";
import terremotoImg from "./img/terremoto.jpg";

const recetas = [
  {
    nombre: "Mojito",
    pais: "Cuba",
    img: mojitoImg,
    ingredientes: [
      "50 ml ron blanco",
      "6 hojas de hierbabuena",
      "2 cucharaditas de azúcar",
      "25 ml jugo de lima",
      "Soda y hielo picado"
    ],
    preparacion:
      "Machaca suavemente las hojas de hierbabuena con el azúcar y el jugo de lima en un vaso alto. Añade el ron y llena el vaso con hielo picado. Completa con soda y mezcla ligeramente. Decora con una ramita de hierbabuena y una rodaja de lima."
  },
  {
    nombre: "Caipirinha",
    pais: "Brasil",
    img: caipirinhaImg,
    ingredientes: [
      "60 ml cachaça",
      "1 lima en trozos",
      "2 cucharaditas de azúcar"
    ],
    preparacion:
      "Coloca los trozos de lima y el azúcar en un vaso bajo. Machaca con un mortero para extraer el jugo y los aceites esenciales de la piel. Llena el vaso con hielo y agrega la cachaça. Remueve suavemente antes de servir."
  },
  {
    nombre: "Piña Colada",
    pais: "Puerto Rico",
    img: pinaColadaImg,
    ingredientes: [
      "60 ml ron blanco",
      "90 ml jugo de piña",
      "30 ml crema de coco"
    ],
    preparacion:
      "En una licuadora con hielo, coloca el ron, el jugo de piña y la crema de coco. Mezcla hasta que quede una consistencia cremosa y uniforme. Sirve en un vaso alto y decora con una rodaja de piña y una cereza."
  },
  {
    nombre: "Margarita",
    pais: "México",
    img: margaritaImg,
    ingredientes: [
      "50 ml tequila",
      "25 ml triple sec",
      "25 ml jugo de lima"
    ],
    preparacion:
      "Escarcha la copa con sal. En una coctelera con hielo, añade tequila, triple sec y jugo de lima. Agita bien hasta enfriar. Sirve colando el contenido en la copa escarchada. Decora con una rodaja de lima."
  },
  {
    nombre: "Tequila Sunrise",
    pais: "EE. UU.",
    img: tequilaSunriseImg,
    ingredientes: [
      "50 ml tequila",
      "100 ml jugo de naranja",
      "10 ml granadina"
    ],
    preparacion:
      "Llena un vaso alto con hielo, agrega el tequila y el jugo de naranja. Con cuidado, vierte la granadina para que se asiente en el fondo, creando un efecto degradado. No mezcles antes de servir. Decora con una rodaja de naranja."
  },
  // … incluye los demás cócteles en el mismo formato …
  {
    nombre: "Terremoto",
    pais: "Chile",
    img: terremotoImg,
    ingredientes: [
      "120 ml vino pipeño o vino blanco dulce",
      "60 ml helado de piña (o helado de vainilla)",
      "Un chorrito de granadina (opcional)"
    ],
    preparacion:
      "En un vaso grande o jarra, coloca una o dos bolas de helado de piña. Vierte el vino pipeño o vino blanco dulce sobre el helado hasta llenar el vaso. Añade un chorrito de granadina si quieres un toque más dulce y colorido. Sirve con una pajita y mezcla suavemente mientras se disfruta."
  },
];

function Recetas() {
  const [search, setSearch] = useState("");

  const recetasFiltradas = recetas.filter((receta) =>
    receta.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>Recetas 🍹</h1>
        <nav className="navbar">
          <a href="/">Inicio</a>
          <a href="/cursos">Cursos</a>
          <a href="/recetas">Recetas</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </header>

      <section className="search-section">
        <div className="search-wrapper">
          <input
            id="search-input"
            type="text"
            placeholder="Buscar cócteles por nombre..."
            aria-label="Buscar cócteles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <main>
        <h2>Lista de Cócteles:</h2>
        <div className="cards-container">
          {recetasFiltradas.map((receta, idx) => (
            <div className="card" key={idx}>
              <img src={receta.img} alt={receta.nombre} className="card-img" />
              <h3>
                {receta.nombre} <span>({receta.pais})</span>
              </h3>
              <ul>
                {receta.ingredientes.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              <p>
                <strong>Preparación:</strong> {receta.preparacion}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2025 uCocteleria – Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Recetas;
