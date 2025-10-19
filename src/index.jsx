
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/styles.css";

import terremotoImg from "./img/terremoto.jpg";
import daiquiriImg from "./img/Daiquiri.jpg";
import margaritaImg from "./img/Margarita.jpg";
import ginTonicImg from "./img/Gin_Tonic.jpg";
import mojitoImg from "./img/mojito.jpg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cursos from "./Cursos";
import Contacto from "./Contacto"; 


/* --- cocteles --- */
const cocktails = [
  {
    image: daiquiriImg,
    title: "Daiquiri",
    country: "Cuba",
    ingredients: ["60 ml ron blanco", "30 ml jugo de lima", "15 ml jarabe de azúcar"],
    preparation: "Agitar con hielo y colar en copa.",
  },
  {
    image: margaritaImg,
    title: "Margarita",
    country: "México",
    ingredients: ["50 ml tequila", "25 ml triple sec", "25 ml jugo de lima"],
    preparation: "Agitar con hielo, servir en copa escarchada con sal.",
  },
  {
    image: ginTonicImg,
    title: "Gin Tonic",
    country: "Inglaterra",
    ingredients: ["50 ml ginebra", "150 ml tónica"],
    preparation: "Servir en vaso con hielo y limón o pepino.",
  },
  {
    image: mojitoImg,
    title: "Mojito",
    country: "Cuba",
    ingredients: [
      "50 ml ron blanco",
      "6 hojas de hierbabuena",
      "2 cucharaditas de azúcar",
      "25 ml jugo de lima",
      "Soda y hielo picado",
    ],
    preparation:
      "Machacar la hierbabuena con azúcar y lima, añadir ron, hielo y completar con soda.",
  },
];

/* --- tarjeta --- */
function CocktailCard({ image, title, country, ingredients, preparation }) {
  return (
    <div className="card card-popular">
      <img src={image} alt={title} className="card-img card-img-popular" />
      <h3>
        {title} <span>({country})</span>
      </h3>
      <ul>
        {ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <p>
        <strong>Preparación:</strong> {preparation}
      </p>
    </div>
  );
}

/* --- App --- */
function App() {
  return (
    <Router>
      <header>
        <h1>uCocteleria 🍸</h1>
        <p>¡Tu guía de coctelería para todos los niveles!</p>
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/recetas">Recetas</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <main>
              <section className="bienvenida">
                <h2>Bienvenido</h2>
                <p>Explora el fascinante mundo de los cócteles.</p>
              </section>

              <section className="main-content">
                <div className="card card-dia">
                  <img src={terremotoImg} alt="Terremoto" className="imagen-principal" />
                  <div>
                    <h2>Cóctel de Día: Terremoto (Chile)</h2>
                    <p>
                      El Terremoto es un cóctel tradicional chileno, muy popular en Fiestas Patrias,
                      que se prepara con tres ingredientes principales: vino pipeño, helado de piña
                      y granadina. Su nombre se relaciona con el terremoto de 1985, y se dice que su
                      sabor potente y refrescante provoca un efecto similar a un temblor.
                    </p>
                  </div>
                </div>

                <h2 className="populares-titulo">Cócteles populares</h2>
                <div className="cards-container cards-populares">
                  {cocktails.map((cocktail, idx) => (
                    <CocktailCard key={idx} {...cocktail} />
                  ))}
                </div>
              </section>
            </main>
          }
        />

        {/* Página de cursos */}
        <Route path="/cursos" element={<Cursos />} />

        {/* Página de contacto */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <footer>
        <p>&copy; 2025 uCocteleria - Todos los derechos reservados.</p>
      </footer>
    </Router>
  );
}

/* --- Render --- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
