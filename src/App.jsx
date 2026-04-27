import { useState } from "react";
import "./App.css";

const dogs = [
  {
    id: 1,
    name: "Border Collie",
    age: "2 meses",
    description: "El más inteligente de todas las razas. Enérgico, leal y fácil de entrenar.",
    price: "$1.800.000",
    available: true,
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=500&h=350&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Pomerania",
    age: "2 meses",
    description: "Pequeño y esponjoso con una personalidad enorme. Ideal para apartamentos.",
    price: "$2.000.000",
    available: true,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=350&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Chihuahua",
    age: "2 meses",
    description: "El más pequeño de las razas pero con un corazón gigante. Valiente y apegado.",
    price: "$900.000",
    available: true,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=350&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Ponchi",
    age: "3 meses",
    description: "Mestizo encantador, único e irrepetible. Lleno de amor y personalidad propia.",
    price: "$500.000",
    available: true,
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&h=350&fit=crop&auto=format",
  },
];

const WHATSAPP = "573217623760";

function App() {
  const [filter, setFilter] = useState("todos");

  const filtered = filter === "disponibles"
    ? dogs.filter((d) => d.available)
    : dogs;

  const handleWhatsApp = (dogName) => {
    const msg = encodeURIComponent(`Hola! Me interesa el ${dogName}, ¿está disponible?`);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <div className="app">
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="paw">🐾</span> Tienda de Perritos
          </h1>
          <p className="hero-sub">Rionegro, Antioquia — Tu nuevo mejor amigo te espera</p>
          <div className="hero-buttons">
            <a
              className="btn btn-whatsapp"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a className="btn btn-phone" href={`tel:+${WHATSAPP}`}>
              📞 3217623760
            </a>
          </div>
        </div>
      </header>

      {/* FILTROS */}
      <div className="filters">
        <button
          className={`filter-btn ${filter === "todos" ? "active" : ""}`}
          onClick={() => setFilter("todos")}
        >
          Todos
        </button>
        <button
          className={`filter-btn ${filter === "disponibles" ? "active" : ""}`}
          onClick={() => setFilter("disponibles")}
        >
          Disponibles
        </button>
      </div>

      {/* GRID */}
      <main className="grid">
        {filtered.map((dog) => (
          <div className="card" key={dog.id}>
            <div className="card-img-wrapper">
              <img
                src={dog.image}
                alt={dog.name}
                className="card-img"
                loading="lazy"
              />
              <span className={`badge ${dog.available ? "badge-available" : "badge-sold"}`}>
                {dog.available ? "Disponible" : "Agotado"}
              </span>
            </div>
            <div className="card-body">
              <h2 className="card-name">{dog.name}</h2>
              <p className="card-age">Edad: {dog.age}</p>
              <p className="card-desc">{dog.description}</p>
              <p className="card-price">{dog.price}</p>
              <button
                className="btn-card"
                disabled={!dog.available}
                onClick={() => handleWhatsApp(dog.name)}
              >
                {dog.available ? "💬 Preguntar por WhatsApp" : "No disponible"}
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>🐾 Tienda de Perritos · Rionegro, Antioquia</p>
        <p>📞 3217623760</p>
      </footer>
    </div>
  );
}

export default App;
