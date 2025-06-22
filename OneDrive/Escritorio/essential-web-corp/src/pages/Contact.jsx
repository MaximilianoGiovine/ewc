import emailjs from 'emailjs-com';
import { useRef, useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm(
      'service_egwp6dr', // lo obtienes de EmailJS
      'template_t0jl1kf', // lo obtienes de EmailJS
      formRef.current,
      'tsA-e6cICOt33lR6m' // lo obtienes de EmailJS
    )
    .then(() => {
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus(null), 3500);
    })
    .catch(() => {
      setStatus("error");
      setTimeout(() => setStatus(null), 3500);
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">¡Solicitá tu presupuesto!</h2>
        <div className="contact-subtitle">
          ¿Listo para llevar tu proyecto al siguiente nivel? Completá el formulario y te responderemos a la brevedad.
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          autoComplete="off"
          ref={formRef}
        >
          <label className="contact-label" htmlFor="name">Nombre completo</label>
          <input className="contact-input" type="text" id="name" name="name" required placeholder="Tu nombre" />

          <label className="contact-label" htmlFor="email">Correo electrónico</label>
          <input className="contact-input" type="email" id="email" name="email" required placeholder="ejemplo@email.com" />

          <label className="contact-label" htmlFor="phone">Teléfono (opcional)</label>
          <input className="contact-input" type="tel" id="phone" name="phone" placeholder="Ej: 11 1234 5678" />

          <label className="contact-label" htmlFor="message">¿En qué podemos ayudarte?</label>
          <textarea className="contact-textarea" id="message" name="message" required rows={4} placeholder="Contanos tu idea o necesidad..."></textarea>

          <button className="contact-btn" type="submit">Enviar mensaje</button>
        </form>
        {status === "success" && (
          <div className="contact-success">
            ¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.
          </div>
        )}
        {status === "error" && (
          <div className="contact-error">
            Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.
          </div>
        )}
        <div className="contact-social">
          <a href="https://wa.me/5493424366842" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <span role="img" aria-label="WhatsApp">💬</span>
          </a>
          <a href="mailto:maxiagiovine@gmail.com" title="Email">
            <span role="img" aria-label="Email">✉️</span>
          </a>
          <a href="https://www.instagram.com/essentialwebcorp" target="_blank" rel="noopener noreferrer" title="Instagram">
            <span role="img" aria-label="Instagram">📸</span>
          </a>
        </div>
      </div>
    </section>
  );
}