export default function Contact() {
    return (
        <div className="contact">
        <h1>Contacto</h1>
        <p>Si tienes alguna pregunta, no dudes en contactarme.</p>
        <form>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Enviar</button>
        </form>
        </div>
    );
    }