import { useState } from "react";
import "./App.css";

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
    name: "Border Collie ",
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
    image: "https://raw.githubusercontent.com/espinosaelena1644/tienda-perritos/main/pomerania.png",
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
          <h1 className="hero-title">
            <span className="paw">🐾</span> Cuna_Canina Rionegro
          </h1>
          <p className="hero-sub">Rionegro, Antioquia — Tu nuevo mejor amigo te espera</p>
          <p className="hero-sub" style={{ fontSize: "0.85rem", opacity: 0.8 }}>
            Todos nuestros cachorros se entregan con primera vacuna y desparasitados 💉
          </p>
          <div className="hero-buttons">
            <a className="btn btn-whatsapp" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              WhatsApp
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
              <p className="card-age">Edad: {dog.age}</p>
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
        <p>🐾 Cuna_Canina Rionegro · Rionegro, Antioquia</p>
        <p>📞 3017705620</p>
        <p>Todos los cachorros se entregan con primera vacuna y desparasitados 💉</p>
      </footer>
    </div>
  );
}

export default App;
