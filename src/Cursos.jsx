import React from "react";

// Importa las imágenes
import bartender1 from "./img/bartender1.jpg";
import bartender2 from "./img/bartender2.jpg";
import bartender3 from "./img/bartender3.jpg";

// Array de cursos
const cursos= [
  {
    image: bartender1,
    title: "Curso Básico de Coctelería",
    aprendizajes: [
      "Aprender técnicas fundamentales: agitar, remover, colar y decorar.",
      "Cocteleria Basica.",
      "Conocer los utensilios y cristalería básica de un bar.",
    ],
    descripcion:
      "Ideal para principiantes y entusiastas que quieren adentrarse en el mundo de la mixología.",
  },
  {
    image: bartender2,
    title: "Curso Intermedio de Coctelería",
    aprendizajes: [
      "Manejo avanzado de herramientas de coctelería (shaker, muddler, jigger).",
      "Preparación de cócteles internacionales clásicos (Negroni, Margarita, Manhattan).",
      "Introducción a la coctelería de autor con variaciones personalizadas.",
    ],
    descripcion:
      "Pensado para quienes ya manejan lo básico y desean perfeccionar técnicas y creatividad.",
  },
  {
    image: bartender3,
    title: "Curso Avanzado de Bartender Profesional",
    aprendizajes: [
      "Dominio de técnicas de mixología (espumas, esferificaciones, infusiones).",
      "Creación de cartas de cócteles y Cocteleria de autor.",
      "Gestión integral de barra: tiempos de servicio, atención al cliente y eficiencia.",
    ],
    descripcion:
      "Dirigido a quienes buscan dedicarse profesionalmente o destacar en la coctelería creativa.",
  },
];

function Cursos() {
  return (
    <main>
      <section>
        <h2>Cursos disponibles:</h2>
        <div className="cards-container">
          {cursos.map((curso, idx) => (
            <div className="card" key={idx}>
              <img src={curso.image} alt={curso.title} className="card-img" />
              <h3>{curso.title}</h3>
              <ul>
                <p>
                  <strong>Aprendizajes:</strong>
                </p>
                {curso.aprendizajes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Descripción:</strong> {curso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Cursos;
