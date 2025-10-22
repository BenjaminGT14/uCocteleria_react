import React, { useState } from "react";

// Imágenes
import mojitoImg from "./img/mojito.jpg";
import caipirinhaImg from "./img/Caipirinha.jpg";
import pinaColadaImg from "./img/Piña_Colada.jpg";
import margaritaImg from "./img/Margarita.jpg";
import tequilaSunriseImg from "./img/Tequila_Sunrise.jpg";
import daiquiriImg from "./img/Daiquiri.jpg";
import cubaLibreImg from "./img/Cuba_Libre.jpg";
import oldFashionedImg from "./img/Old_Fashioned.jpg";
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
      "Soda y hielo picado",
    ],
    preparacion:
      "Machaca suavemente las hojas de hierbabuena con el azúcar y el jugo de lima en un vaso alto. Añade el ron y llena el vaso con hielo picado. Completa con soda y mezcla ligeramente. Decora con una ramita de hierbabuena y una rodaja de lima.",
  },
  {
    nombre: "Caipirinha",
    pais: "Brasil",
    img: caipirinhaImg,
    ingredientes: ["60 ml cachaça", "1 lima en trozos", "2 cucharaditas de azúcar"],
    preparacion:
      "Coloca los trozos de lima y el azúcar en un vaso bajo. Machaca con un mortero para extraer el jugo y los aceites esenciales de la piel. Llena el vaso con hielo y agrega la cachaça. Remueve suavemente antes de servir.",
  },
  {
    nombre: "Piña Colada",
    pais: "Puerto Rico",
    img: pinaColadaImg,
    ingredientes: ["60 ml ron blanco", "90 ml jugo de piña", "30 ml crema de coco"],
    preparacion:
      "En una licuadora con hielo, coloca el ron, el jugo de piña y la crema de coco. Mezcla hasta que quede una consistencia cremosa y uniforme. Sirve en un vaso alto y decora con una rodaja de piña y una cereza.",
  },
  {
    nombre: "Margarita",
    pais: "México",
    img: margaritaImg,
    ingredientes: ["50 ml tequila", "25 ml triple sec", "25 ml jugo de lima"],
    preparacion:
      "Escarcha la copa con sal. En una coctelera con hielo, añade tequila, triple sec y jugo de lima. Agita bien hasta enfriar. Sirve colando el contenido en la copa escarchada. Decora con una rodaja de lima.",
  },
  {
    nombre: "Tequila Sunrise",
    pais: "EE. UU.",
    img: tequilaSunriseImg,
    ingredientes: ["50 ml tequila", "100 ml jugo de naranja", "10 ml granadina"],
    preparacion:
      "Llena un vaso alto con hielo, agrega el tequila y el jugo de naranja. Con cuidado, vierte la granadina para que se asiente en el fondo, creando un efecto degradado. No mezcles antes de servir. Decora con una rodaja de naranja.",
  },
  {
    nombre: "Terremoto",
    pais: "Chile",
    img: terremotoImg,
    ingredientes: [
      "120 ml vino pipeño o vino blanco dulce",
      "60 ml helado de piña (o helado de vainilla)",
      "Un chorrito de granadina (opcional)",
    ],
    preparacion:
      "En un vaso grande o jarra, coloca una o dos bolas de helado de piña. Vierte el vino pipeño o vino blanco dulce sobre el helado hasta llenar el vaso. Añade un chorrito de granadina si quieres un toque más dulce y colorido. Sirve con una pajita y mezcla suavemente mientras se disfruta.",
  },
  {
    nombre: "Daiquiri",
    pais: "Cuba",
    img: daiquiriImg,
    ingredientes: [
      "60 ml ron blanco",
      "30 ml jugo de lima",
      "15 ml jarabe de azúcar"
    ],
    preparacion: "En una coctelera con hielo, mezcla el ron, el jugo de lima y el jarabe de azúcar. Agita enérgicamente y sirve colando en una copa de cóctel fría. Opcional: decorar con una rodaja fina de lima.",    
  },
  {
    nombre: "Cuba Libre",
    pais: "Cuba",
    img: cubaLibreImg,
    ingredientes: [
      "50 ml ron",
      "120 ml cola",
      "10 ml jugo de lima"
    ],
    preparacion: "Llena un vaso alto con hielo, agrega el ron y exprime un poco de jugo de lima. Completa con cola y mezcla suavemente. Decora con una rodaja de lima.",  
  },
  {
    nombre: "Old Fashioned",
    pais: "EE. UU.",
    img: oldFashionedImg,
    ingredientes: [
      "60 ml bourbon o whisky",
      "1 terrón de azúcar",
      "2 gotas de angostura",
      "Piel de naranja"
    ],
    preparacion: "En un vaso bajo, coloca el terrón de azúcar y añade las gotas de angostura. Machaca ligeramente. Añade whisky y hielo, y revuelve suavemente. Decora con piel de naranja.",  
  },
  {
    nombre: "Negroni",
    pais: "Italia",
    img: negroniImg,
    ingredientes: [
      "30 ml gin",
      "30 ml vermut rojo",
      "30 ml Campari"
    ],
    preparacion: "En un vaso con hielo, mezcla gin, vermut rojo y Campari. Revuelve y decora con una rodaja de naranja.",
    
  },
  {
    nombre: "Manhattan",
    pais: "EE. UU.",
    img: manhattanImg,
    ingredientes: [
      "50 ml whisky",
      "20 ml vermut rojo",
      "2 gotas angostura"
    ],
    preparacion: "En un vaso mezclador con hielo, combina whisky, vermut rojo y angostura. Remueve hasta enfriar y cuela en una copa de cóctel. Decora con una cereza.",
    
  },
  {
    nombre: "Cosmopolitan",
    pais: "EE. UU.",
    img: cosmopolitanImg,
    ingredientes: [
      "40 ml vodka",
      "15 ml triple sec",
      "30 ml jugo de arándano",
      "10 ml jugo de lima"
    ],
    preparacion: "Agita en una coctelera con hielo vodka, triple sec, jugo de arándano y jugo de lima. Cuela en una copa de cóctel fría.",
    
  },
  {
    nombre: "Martini",
    pais: "Internacional",
    img: martiniImg,
    ingredientes: [
      "60 ml gin o vodka",
      "10 ml vermut seco"
    ],
    preparacion: "En un vaso mezclador con hielo, combina gin (o vodka) y vermut seco. Revuelve y sirve en copa fría. Decora con una aceituna o twist de limón.",
    
  },
  {
    nombre: "Bloody Mary",
    pais: "EE. UU.",
    img: bloodyMaryImg,
    ingredientes: [
      "50 ml vodka",
      "100 ml jugo de tomate",
      "10 ml jugo de limón",
      "Salsa inglesa, tabasco, sal, pimienta"
    ],
    preparacion: "En un vaso alto con hielo, mezcla todos los ingredientes. Revuelve bien y decora con apio.",
    
  },
  {
    nombre: "Whisky Sour",
    pais: "EE. UU.",
    img: whiskySourImg,
    ingredientes: [
      "60 ml whisky",
      "30 ml jugo de limón",
      "15 ml jarabe de azúcar",
      "(Opcional) clara de huevo"
    ],
    preparacion: "Agita todo en coctelera (con hielo), sirve en vaso bajo y decora con una rodaja de limón o cereza.",
    
  },
  {
    nombre: "Mai Tai",
    pais: "EE. UU. / Tiki",
    img: maiTaiImg,
    ingredientes: [
      "30 ml ron blanco",
      "30 ml ron oscuro",
      "15 ml curaçao naranja",
      "15 ml orzata",
      "10 ml jugo de lima"
    ],
    preparacion: "Mezcla y agita con hielo. Sirve decorado con menta y frutas.",
    
  },
  {
    nombre: "Gin Tonic",
    pais: "Inglaterra",
    img: ginTonicImg,
    ingredientes: [
      "50 ml ginebra",
      "150 ml tónica"
    ],
    preparacion: "Sirve con hielo y decora con limón o pepino.",
    
  },
  {
    nombre: "French 75",
    pais: "Francia",
    img: french75Img,
    ingredientes: [
      "30 ml gin",
      "15 ml jugo de limón",
      "15 ml jarabe de azúcar",
      "60 ml champán"
    ],
    preparacion: "Agita gin, limón y azúcar. Sirve en flauta y completa con champán.",
    
  },
  {
    nombre: "Mint Julep",
    pais: "EE. UU.",
    img: mintJulepImg,
    ingredientes: [
      "60 ml bourbon",
      "10 hojas de menta",
      "10 ml jarabe de azúcar"
    ],
    preparacion: "Machaca menta con azúcar, agrega hielo y bourbon.",
    
  },
  {
    nombre: "Pisco Sour",
    pais: "Chile / Perú",
    img: piscoSourImg,
    ingredientes: [
      "60 ml pisco",
      "25 ml jugo de limón",
      "20 ml jarabe de goma",
      "1 clara de huevo"
    ],
    preparacion: "Agita fuerte con hielo. Sirve con unas gotas de angostura.",
    
  },
  {
    nombre: "Tom Collins",
    pais: "EE. UU.",
    img: tomCollinsImg,
    ingredientes: [
      "50 ml gin",
      "25 ml jugo de limón",
      "15 ml jarabe de azúcar",
      "Soda"
    ],
    preparacion: "Agita y cuela en vaso con hielo. Completa con soda.",
    
  },
  {
    nombre: "Aperol Spritz",
    pais: "Italia",
    img: aperolSpritzImg,
    ingredientes: [
      "60 ml Aperol",
      "90 ml prosecco",
      "30 ml soda"
    ],
    preparacion: "Sirve directo con hielo y decora con rodaja de naranja.",
    
  },
  {
    nombre: "Irish Coffee",
    pais: "Irlanda",
    img: irishCoffeeImg,
    ingredientes: [
      "40 ml whisky irlandés",
      "80 ml café caliente",
      "10 ml azúcar",
      "Crema ligera"
    ],
    preparacion: "Mezcla todo menos la crema. Añade la crema por encima.",
    
  },
  {
    nombre: "Mai Tai Royal",
    pais: "Variación Tiki",
    img: maiTaiRoyalImg,
    ingredientes: [
      "30 ml ron blanco",
      "30 ml ron oscuro",
      "15 ml curaçao de naranja",
      "15 ml orzata",
      "10 ml jugo de lima",
      "30 ml champán"
    ],
    preparacion: "Mezcla los ingredientes (excepto el champán) en una coctelera con hielo. Sirve en vaso con hielo fresco y completa con champán. Decora con menta y rodaja de piña.",
    
  },
  {
    nombre: "Long Island Iced Tea",
    pais: "EE. UU.",
    img: longIslandImg,
    ingredientes: [
      "15 ml vodka",
      "15 ml ron blanco",
      "15 ml ginebra",
      "15 ml tequila",
      "15 ml triple sec",
      "25 ml jugo de limón",
      "30 ml jarabe de azúcar",
      "Un splash de cola"
    ],
    preparacion: "Agita todo (excepto la cola) en coctelera con hielo. Sirve en vaso largo con hielo y completa con un splash de cola. Decora con una rodaja de limón.",
    
  },
  {
    nombre: "Blue Lagoon",
    pais: "Internacional",
    img: blueLagoonImg,
    ingredientes: [
      "40 ml vodka",
      "20 ml curaçao azul",
      "100 ml limonada o soda limón"
    ],
    preparacion: "Agita el vodka y curaçao con hielo. Sirve en vaso alto con hielo y completa con limonada. Decora con cereza o limón.",
    
  },
  {
    nombre: "Sex on the Beach",
    pais: "EE. UU.",
    img: sexOnTheBeachImg,
    ingredientes: [
      "40 ml vodka",
      "20 ml licor de durazno",
      "40 ml jugo de naranja",
      "40 ml jugo de arándano"
    ],
    preparacion: "Agita todos los ingredientes con hielo. Sirve en vaso alto con hielo y decora con una rodaja de naranja.",
    
  },
  {
    nombre: "Bellini",
    pais: "Italia",
    img: belliniImg,
    ingredientes: [
      "30 ml puré de durazno",
      "90 ml prosecco"
    ],
    preparacion: "Vierte el puré de durazno en una copa flauta y completa suavemente con prosecco. Mezcla con una cuchara larga.",
    
  },
  {
    nombre: "Kir Royale",
    pais: "Francia",
    img: kirRoyaleImg,
    ingredientes: [
      "15 ml licor de cassis",
      "90 ml champán o cava"
    ],
    preparacion: "Vierte el licor de cassis en una copa flauta y completa con champán frío.",
    
  },
  {
    nombre: "Zombie",
    pais: "Tiki / EE. UU.",
    img: zombieImg,
    ingredientes: [
      "30 ml ron blanco",
      "30 ml ron dorado",
      "30 ml ron overproof",
      "15 ml curaçao de naranja",
      "15 ml jugo de lima",
      "15 ml granadina",
      "30 ml jugo de piña"
    ],
    preparacion: "Agita todo con hielo. Sirve en vaso tiki con hielo picado. Decora con frutas tropicales y menta.",
    
  },
  {
    nombre: "Singapore Sling",
    pais: "Singapur",
    img: singaporeSlingImg,
    ingredientes: [
      "30 ml gin",
      "15 ml licor de cereza (cherry brandy)",
      "7.5 ml Cointreau",
      "7.5 ml Bénédictine",
      "10 ml granadina",
      "10 ml jugo de lima",
      "60 ml jugo de piña",
      "Un dash de angostura"
    ],
    preparacion: "Agita todos los ingredientes con hielo. Sirve colado en vaso largo con hielo fresco. Decora con cereza y piña.",
    
  }
];

function Recetas() {
  const [search, setSearch] = useState("");

  const recetasFiltradas = recetas.filter((receta) =>
    receta.nombre.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <main>
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

      <section>
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
          {recetasFiltradas.length === 0 && (
            <p>No se encontraron recetas que coincidan con "{search}".</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Recetas;
