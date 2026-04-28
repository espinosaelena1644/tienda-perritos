import { useState } from "react";
import "./App.css";

const LOGO = "https://raw.githubusercontent.com/espinosaelena1644/tienda-perritos/main/logo.JPG";

const dogs = [
  {
    id: 1,
    name: "Border Collie Tradicional",
    age: "Entrega después de los 45 días",
    description: "El más inteligente de todas las razas. Enérgico, leal y fácil de entrenar. Se entrega con primera vacuna y desparasitado.",
    price: "Desde $600.000",
    available: true,
    image: "https://raw.githubusercontent.com/espinosaelena1644/tienda-perritos/main/border-collie.png",
  },
  {
    id: 2,
    name: "Border Collie Merlet",
    age: "Entrega después de los 45 días",
    description: "Hermoso Border Collie de pelaje merle, único por su coloración. Inteligente, activo y muy apegado a su familia. Se entrega con primera vacuna y desparasitado.",
    price: "Desde $1.000.000",
    available: true,
    image: "https://raw.githubusercontent.com/espinosaelena1644/tienda-perritos/main/border-collie-merlet.png",
  },
  {
    id: 3,
    name: "Pomerania",
    age: "Entrega después de los 45 días",
    description: "Pequeño y esponjoso con una personalidad enorme. Ideal para apartamentos. Se entrega con primera vacuna y desparasitado.",
    price: "Desde $1.300.000",
    available: true,
    image: "https://raw.githubusercontent.com/espinosaelena1644/tienda-perritos/main/pomerania.JPG",
  },
  {
    id: 4,
    name: "Chihuahua",
    age: "Entrega después de los 45 días",
    description: "El más pequeño de las razas pero con un corazón gigante. Valiente y muy apegado. Se entrega con primera vacuna y desparasitado.",
    price: "Desde $1.300.000",
    available: true,
    image: "https://raw.githubusercontent.com/espinosaelena1644/tienda-perritos/main/chihuahua.png",
  },
  {
    id: 5,
    name: "Ponchi",
    age: "Entrega después de los 45 días",
    description: "Mestizo encantador, único e irrepetible. Lleno de amor y personalidad propia. Se entrega con primera vacuna y desparasitado.",
    price: "Desde $1.000.000",
    available: true,
    image: "https://raw.githubusercontent.com/espinosaelena1644/tienda-perritos/main/ponchi.png",
  },
];

const WHATSAPP = "573017705620";
const INSTAGRAM = "https://www.instagram.com/cuna_canina";
const TIKTOK = "https://www.tiktok.com/@cuna_canina";

function App() {
  const [filter, setFilter] = useState("todos");

  const filtered = filter === "disponibles"
    ? dogs.filter((d) => d.available)
    : dogs;

  const handleWhatsApp = (dogName) => {
    const msg = encodeURIComponent(`Hola! Me interesa el ${dogName} de Cuna_Canina Rionegro, ¿está disponible?`);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <img src={LOGO} alt="Cuna Canina Rionegro" className="hero-logo" />
          <p className="hero-sub">Rionegro, Antioquia — Tu nuevo mejor amigo te espera</p>
          <p className="hero-vacuna">
            💉 Todos nuestros cachorros se entregan con primera vacuna y desparasitados
          </p>
          <div className="social-links">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="social-btn instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              @cuna_canina
            </a>
            <a href={TIKTOK} target="_blank" rel="noreferrer" className="social-btn tiktok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
              @cuna_canina
            </a>
          </div>
          <div className="hero-buttons">
            <a className="btn btn-whatsapp" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
            <a className="btn btn-phone" href={`tel:+${WHATSAPP}`}>
              📞 3017705620
            </a>
          </div>
        </div>
      </header>

      <div className="filters">
        <button className={`filter-btn ${filter === "todos" ? "active" : ""}`} onClick={() => setFilter("todos")}>
          Todos
        </button>
        <button className={`filter-btn ${filter === "disponibles" ? "active" : ""}`} onClick={() => setFilter("disponibles")}>
          Disponibles
        </button>
      </div>

      <main className="grid">
        {filtered.map((dog) => (
          <div className="card" key={dog.id}>
            <div className="card-img-wrapper">
              <img src={dog.image} alt={dog.name} className="card-img" loading="lazy" />
              <span className={`badge ${dog.available ? "badge-available" : "badge-sold"}`}>
                {dog.available ? "Disponible" : "Agotado"}
              </span>
            </div>
            <div className="card-body">
              <h2 className="card-name">{dog.name}</h2>
              <p className="card-age">{dog.age}</p>
              <p className="card-desc">{dog.description}</p>
              <p className="card-price">{dog.price}</p>
              <button className="btn-card" disabled={!dog.available} onClick={() => handleWhatsApp(dog.name)}>
                {dog.available ? "💬 Preguntar por WhatsApp" : "No disponible"}
              </button>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <img src={LOGO} alt="Cuna Canina" className="footer-logo" />
        <p>🐾 Cuna_Canina Rionegro · Rionegro, Antioquia</p>
        <p>📞 3017705620</p>
        <div className="footer-social">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">📸 Instagram: @cuna_canina</a>
          <a href={TIKTOK} target="_blank" rel="noreferrer">🎵 TikTok: @cuna_canina</a>
        </div>
        <p>💉 Todos los cachorros se entregan con primera vacuna y desparasitados</p>
      </footer>
    </div>
  );
}

export default App;
