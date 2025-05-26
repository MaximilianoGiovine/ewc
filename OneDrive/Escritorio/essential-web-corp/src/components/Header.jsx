import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/acerca-de', label: 'Acerca De' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' }
];

const Header = () => (
  <header className="header">
    <h1>Essential Web Corp</h1>
    <nav>
      <ul className="nav-list">
        {navLinks.map(link => (
          <li key={link.to}>
            <Link to={link.to} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;