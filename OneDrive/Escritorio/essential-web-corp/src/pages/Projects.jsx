import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Proyecto Maria Paz',
    description: `Este fue el primer proyecto que afrontamos. Para llevarlo a cabo nos centramos en el uso de tecnologías de TiendaNube para la confexión y diseños a medida
    se implementaron pasarelas de pago y estrategias de marketing digital y SEO para mejorar la visibilidad y alcance del negocio. De ser una empresa local con
    alcance limitadoa la ciudad donde se encuentra, hoy en día gracias a su página web y su presencia en redes, logro un aproach a nivel nacional y un crecimiento en
    sus ventas.`
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.'
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3.'
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
      <h1>Nuestros Proyectos</h1>
      <h2>Un poco de nuestro Portfolio</h2>
      <p>En Essential Web Corp entendemos que un portfolio actualizado y la experiencia visible y comprobable es vital para generar
        un lazo de confianza con nuestros clientes. Por eso, a continuación te mostramos algunos de nuestros proyectos más destacados y novedosos.
      </p>
      <p>Además, te dejamos algunos de los testimonios de nuestros clientes satisfechos con nuestra labor</p>
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
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}