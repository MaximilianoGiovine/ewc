import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Derechos reservados arriba y centrado */}
                <div className="footer-copyright">
                    <p>&copy; 2025 Essential Web Corp. Todos los derechos reservados.</p>
                </div>
                <div className="footer-main">
                    {/* Social horizontal */}
                    <div className="footer-social">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="footer-social-btn"
                        >
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="footer-social-btn"
                        >
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.402 3.678 1.383 2.697 2.364 2.426 3.476 2.367 4.757.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.33 2.393 1.311 3.374.981.981 2.093 1.252 3.374 1.311C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.33 3.374-1.311.981-.981 1.252-2.093 1.311-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.33-2.393-1.311-3.374-.981-.981-2.093-1.252-3.374-1.311C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                            </svg>
                        </a>
                    </div>
                    {/* Páginas agrupadas en pares */}
                    <div className="footer-pages">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/sobre-mi">Sobre mí</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/proyectos">Proyectos</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Enlaces legales abajo y centrados */}
                <div className="footer-legal">
                    <Link to="/privacidad">Política de privacidad</Link> |{" "}
                    <Link to="/terminos">Términos de uso</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;