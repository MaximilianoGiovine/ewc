import '../styles/Home.css';
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

// Array de slides con texto normal y alternativo
const slides = [
  {
    normal: "Diseños personalizados y atractivos",
    hover: "Utilizamos la última tecnología en diseño web para que tu sitio no solo sea único, sino el mejor.",
  },
  {
    normal: "Optimización para motores de búsqueda (SEO)",
    hover: "Optimizamos tu sitio para que sea el top 1 en los motores de búsqueda. Mas alcance, más clientes.",
  },
  {
    normal: "Soporte técnico y mantenimiento continuo",
    hover: "Equipo diponible 24/7 para resolver cualquier problema, duda o inquietud. Siempre a tu lado.",
  },
  {
    normal: "¡Tu sitio en tiempo récord!",
    hover: "Nuestro equipo de expertos trabaja incansablemente para que tu sitio esté listo en el menor tiempo posible. Sitio rapido, alcance inmediato.",
  },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Pausa autoplay al hacer hover, reanuda al salir
  const handleMouseEnter = (idx) => {
    setHoveredIndex(idx);
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  const [refHome, visibleHome] = useFadeInOnScroll();
  const [refWhy, visibleWhy] = useFadeInOnScroll();
  const [refFilosofia, visibleFilosofia] = useFadeInOnScroll();
  const [refVision, visibleVision] = useFadeInOnScroll();
  const [refContacto, visibleContacto] = useFadeInOnScroll();

  return (
  <>
    <div className="home-title-bg">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="home-title-video"
        poster="ruta/poster.jpg" // opcional, imagen de respaldo
      >
        <source src="\src\assets\H1.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <h1>Bienvenido a Essential Web Corp</h1>
    </div>
    <div ref={refHome} className={`home ${visibleHome ? "section-fade visible" : "section-fade"}`}>
      <div className="home-flex">
        <div className="text-container">
          <p>
            Somos Essential Web Corp, una agencia de diseño web dedicado a convertir tus sueños e ideas en realidades innovadoras. Nos especializamos en la creación de sitios web personalizados, atractivos, versátiles y modernos para que su marca destaque de entre el resto.
          </p>
          <p>
            Te invitamos a que explores nuestro sitio y descubras cómo podemos ayudarte a llevar tu presencia en línea al siguiente nivel. Desde el diseño hasta la implementación, estamos aquí para hacer que tu visión se convierta en una realidad.
          </p>
        </div>
        <div className="image-container">
          <img
            src="\src\assets\imagen del home.jpg"
            alt="imagen de ejemplo"
            className="home-image"
          />
        </div>
      </div>
    </div>
    <div ref={refWhy} className={`why-section ${visibleWhy ? "section-fade visible" : "section-fade"}`}>
  <div className="why-title-card">
    <h2 className="home-h2">¿Por qué elegirnos?</h2>
  </div>
  <div className="why-carousel">
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation
      loop={true}
      className="carousel-container"
      onSwiper={(swiper) => { swiperRef.current = swiper; }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="carousel-slide"
            onMouseEnter={() => activeIndex === idx && handleMouseEnter(idx)}
            onMouseLeave={() => activeIndex === idx && handleMouseLeave()}
          >
            <span
              className={`carousel-text ${
                hoveredIndex === idx ? "fade-out" : "fade-in"
              }`}
              style={{
                position: "absolute",
                opacity: hoveredIndex === idx ? 0 : 1,
                transition: "opacity 0.4s",
              }}
            >
              {slide.normal}
            </span>
            <span
              className={`carousel-text ${
                hoveredIndex === idx ? "fade-in" : "fade-out"
              }`}
              style={{
                position: "absolute",
                opacity: hoveredIndex === idx ? 1 : 0,
                transition: "opacity 0.4s",
              }}
            >
              {slide.hover}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
      <div ref={refFilosofia} className={`filosofia-flex ${visibleFilosofia ? "section-fade visible" : "section-fade"}`}>
        <div className="filosofia-image-container">
          <img
            src="\src\assets\filosofia.jpg" // Cambia por la ruta real de tu imagen
            alt="Nuestra filosofía"
            className="filosofia-image"
          />
        </div>
        <div className="filosofia-text">
          <h2 className="filosofia-title">Nuestra Filosofía</h2>
          <div className="filosofia-card">
            <p>
              En Essential Web Corp, sabemos que cada cliente es único y especial. Por eso, no ofrecemos soluciones genéricas, sino estrategias diseñadas a la medida de tus necesidades y objetivos. Nos tomamos el tiempo para entender lo que realmente buscas, asegurándonos de proporcionarte herramientas y servicios que impulsen tu crecimiento y éxito. Nuestro compromiso es acompañarte en cada paso, con transparencia, dedicación y un enfoque centrado en resultados que realmente marquen la diferencia. Confía en nosotros para convertir tus ideas en realidades digitales. ¡Estamos aquí para ayudarte a alcanzar nuevas alturas!
            </p>
            <p>
             Nuestro equipo de expertos te acompaña en cada etapa del proceso, desde la concepción inicial de tu proyecto hasta su lanzamiento y más allá. Con experiencia, dedicación y un enfoque personalizado, estamos aquí para asegurarnos de que cada decisión que tomes esté respaldada por estrategias sólidas y soluciones efectivas. No solo te guiamos, sino que nos convertimos en tu socio confiable, brindándote el apoyo que necesitas para hacer realidad tu visión y alcanzar el éxito digital. ¡Cuenta con nosotros en cada paso del camino!
            </p>
            <p>
              Nos apasiona lo que hacemos y nos esforzamos por brindarte lo mejor en cada paso del camino. Creemos que tu éxito es nuestro éxito, por eso trabajamos con compromiso, dedicación y una visión clara para ofrecerte soluciones que realmente marquen la diferencia. Cada proyecto que emprendemos refleja nuestro deseo de ayudarte a crecer, innovar y alcanzar tus metas con confianza. Estamos aquí para ser más que un equipo de expertos: queremos ser tu aliado estratégico en el mundo digital. ¡Juntos podemos llegar más lejos!
            </p>
          </div>
        </div>
      </div>
      <div ref={refVision} className={`vision-flex ${visibleVision ? "section-fade visible" : "section-fade"}`}>
        <div className="vision-text">
          <h2 className="vision-title">Tu visión se vuelve la nuestra</h2>
          <div className="vision-card">
            <p>
              En Essential Web Corp, no solo creamos sitios web; creamos experiencias. Nos
              especializamos en transformar tus ideas en realidades digitales que
              cautivan y convierten.
            </p>
            <p>
              Nuestro enfoque centrado en el cliente garantiza que cada proyecto
              refleje tu visión y cumpla con tus objetivos comerciales. Desde el
              diseño hasta la implementación, estamos contigo en cada paso del
              camino.
            </p>
            <p>
              Con un equipo de expertos en diseño, desarrollo y marketing digital,
              estamos equipados para llevar tu presencia en línea al siguiente
              nivel. Ya sea que necesites un sitio web simple o una solución
              personalizada, tenemos la experiencia y la pasión para hacerlo
              realidad.
            </p>
            <p>
              En Essential Web Corp, tu visión se convierte en nuestra misión. Nos
              comprometemos a ofrecerte un servicio excepcional y resultados
              sobresalientes. Juntos, haremos que tu presencia en línea brille.
            </p>
          </div>
        </div>
        <div className="vision-image-container">
          <img
            src="\src\assets\vision.jpg" // Cambia por la ruta real de tu imagen
            alt="Nuestra visión"
            className="vision-image"
          />
        </div>
      </div>
      <div ref={refContacto} className={`contact-section ${visibleContacto ? "section-fade visible" : "section-fade"}`}>
  <video
    className="contact-video-bg"
    autoPlay
    loop
    muted
    playsInline
    poster="ruta/poster.jpg" // opcional
  >
    <source src="\src\assets\deal.mp4" type="video/mp4" />
    Tu navegador no soporta el video.
  </video>
  <div className="contact-overlay">
    <h2 className="contact-title">¿Listo para dar el siguiente paso?</h2>
    <p className="contact-text">
      Lleva tu presencia en línea al siguiente nivel. <br />
      ¡Contáctanos hoy mismo y hagamos realidad tu visión digital!
    </p>
    <a href="mailto:maxiagiovine@gmail.com" className="contact-btn">
      ¡Quiero que mi proyecto despegue!
    </a>
    <p className="contact-alt">
      O utiliza nuestro <a href="/contacto">formulario de contacto</a>.
    </p>
  </div>
</div>
  </>
  )
}