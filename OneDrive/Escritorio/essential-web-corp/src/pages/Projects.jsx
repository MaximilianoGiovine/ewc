import React, { useState } from 'react';
import '../styles/Projects.css';

// Puedes cambiar los nombres de las imágenes según lo que tengas en assets
import mariaPazImg from '../assets/filosofia.jpg';
import proyecto2Img from '../assets/filosofia.jpg';
import proyecto3Img from '../assets/filosofia.jpg';
import ilustrativaImg from '../assets/filosofia.jpg'; // Usa aquí la imagen que prefieras

const projects = [
  {
    title: 'Proyecto Maria Paz',
    description: `Este fue el primer proyecto que afrontamos. Para llevarlo a cabo nos centramos en el uso de tecnologías de TiendaNube para la confexión y diseños a medida
    se implementaron pasarelas de pago y estrategias de marketing digital y SEO para mejorar la visibilidad y alcance del negocio. De ser una empresa local con
    alcance limitadoa la ciudad donde se encuentra, hoy en día gracias a su página web y su presencia en redes, logro un aproach a nivel nacional y un crecimiento en
    sus ventas.`,
    image: mariaPazImg
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    image: proyecto2Img
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3.',
    image: proyecto3Img
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = idx => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <>
      <div className="projects-title">
        <div className="projects-title-flex">
          <div className="projects-title-text">
            <h1>Nuestros Proyectos</h1>
            <h2>Un poco de nuestro Portfolio</h2>
            <div className="projects-title-paragraph-img-wrapper">
              <p>
                En Essential Web Corp entendemos que un portfolio actualizado y la experiencia visible y comprobable es vital para generar
                un lazo de confianza con nuestros clientes. Por eso, a continuación te mostramos algunos de nuestros proyectos más destacados y novedosos.
              </p>
              <img
                className="projects-title-img"
                src={ilustrativaImg}
                alt="Ilustración proyectos"
              />
            </div>
            <p>
              Además, te dejamos algunos de los testimonios de nuestros clientes satisfechos con nuestra labor
            </p>
          </div>
        </div>
      </div>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div
            className={`project-card${activeIndex === idx ? ' active' : ''}`}
            key={idx}
          >
            <div
              className="project-title"
              onClick={() => handleToggle(idx)}
              tabIndex={0}
              role="button"
              aria-expanded={activeIndex === idx}
              style={{ outline: 'none' }}
            >
              {project.title}
            </div>
            <div className="project-content">
              <div className="project-content-flex">
                <div className="project-description">
                  {project.description}
                </div>
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}