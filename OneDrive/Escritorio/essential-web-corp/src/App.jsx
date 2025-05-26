import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="body">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/acerca-de" element={<About />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/terminos" element={<Terms />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
