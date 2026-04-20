import { useState } from "react";

const perritos = [
  { id: 1, nombre: "Golden Retriever", precio: 1200000, edad: "2 meses", descripcion: "Juguetón, cariñoso y perfecto para familias.", emoji: "🐶", disponible: true },
  { id: 2, nombre: "French Bulldog", precio: 2500000, edad: "3 meses", descripcion: "Tranquilo, ideal para apartamento.", emoji: "🐾", disponible: true },
  { id: 3, nombre: "Beagle", precio: 900000, edad: "2 meses", descripcion: "Curioso y muy inteligente.", emoji: "🦴", disponible: false },
  { id: 4, nombre: "Pomerania", precio: 1800000, edad: "1.5 meses", descripcion: "Pequeño, esponjoso y lleno de energía.", emoji: "🐩", disponible: true },
];

export default function App() {
  const [filtro, setFiltro] = useState("todos");
  const mostrar = perritos.filter((p) => filtro === "disponibles" ? p.disponible : true);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>🐕 Tienda de Perritos</h1>
        <p style={{ color: "#666" }}>Encuentra a tu nuevo mejor amigo en Rionegro</p>
      </header>

      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: "2rem" }}>
        {["todos", "disponibles"].map((f) => (
          <button key={f} onClick={() => setFiltro(f)}
            style={{ padding: "8px 20px", borderRadius: 20, border: "2px solid #333", background: filtro === f ? "#333" : "white", color: filtro === f ? "white" : "#333", cursor: "pointer", fontWeight: "bold" }}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5rem" }}>
        {mostrar.map((p) => (
          <div key={p.id} style={{ border: "1px solid #eee", borderRadius: 12, padding: "1.5rem", textAlign: "center", opacity: p.disponible ? 1 : 0.5, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize: "4rem" }}>{p.emoji}</div>
            <h2 style={{ margin: "0.5rem 0 0.25rem" }}>{p.nombre}</h2>
            <p style={{ color: "#888", fontSize: 14, margin: "0 0 0.5rem" }}>{p.edad}</p>
            <p style={{ fontSize: 14, color: "#555" }}>{p.descripcion}</p>
            <p style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#2e7d32" }}>${p.precio.toLocaleString("es-CO")}</p>
            {p.disponible ? (
              <a href={`https://wa.me/573001234567?text=Hola! Me interesa el ${p.nombre}`} target="_blank" rel="noreferrer"
                style={{ display: "block", background: "#25D366", color: "white", padding: "10px", borderRadius: 8, textDecoration: "none", fontWeight: "bold", marginTop: "0.5rem" }}>
                Preguntar por WhatsApp
              </a>
            ) : (
              <span style={{ display: "block", marginTop: "0.5rem", color: "#999" }}>No disponible</span>
            )}
          </div>
        ))}
      </div>

      <footer style={{ textAlign: "center", marginTop: "3rem", color: "#aaa", fontSize: 14 }}>
        <p>📍 Rionegro, Colombia — Con amor por los perritos 🐾</p>
      </footer>
    </div>
  );
}