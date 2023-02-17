import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-andrea.jpeg")}
        alt= "foto de andrea"/>
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"> Andrea Perez en Holanda</p>
          <p className="cargo-testimonio">ingeniero Software Spotify</p>
          <p className="texto-testimonio"> "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, 
                                            pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos 
                                            en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
        </div>
    </div>
  );  
}

export default Testimonio;