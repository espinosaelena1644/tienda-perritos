import React, { useState } from "react";
import heroImg from "./assets/hero.png";

export default function App() {
  // Datos de ejemplo (perritos)
  const perros = [
    {
      id: 1,
      nombre: "Golden Retriever",
      edad: "2 meses",
      descripcion: "Juguetón, cariñoso y perfecto para familias.",
      precio: 1200000,
      estado: "disponible",
      imagen: "https://placedog.net/520/360?id=11",
    },
    {
      id: 2,
      nombre: "French Bulldog",
      edad: "3 meses",
      descripcion: "Tranquilo, ideal para apartamento.",
      precio: 2500000,
      estado: "disponible",
      imagen: "https://placedog.net/520/360?id=22",
    },
    {
      id: 3,
      nombre: "Beagle",
      edad: "2 meses",
      descripcion: "Curioso y muy inteligente.",
      precio: 900000,
      estado: "agotado",
      imagen: "https://placedog.net/520/360?id=33",
    },
  ];

  const [filtro, setFiltro] = useState("todos");

  // Número de contacto (celular) proporcionado por el usuario
  const celular = "3217623760";
  const whatsappNumber = `57${celular}`; // con código de país para enlaces wa.me

  const filtrarPerros = () => {
    if (filtro === "disponibles") return perros.filter((p) => p.estado === "disponible");
    return perros;
  };

  const formatCOP = (v) => v.toLocaleString("es-CO");

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#f6fff8" }}>
      {/* Hero */}
      <header style={{ background: "linear-gradient(135deg,#059669,#10b981)", color: "white", padding: "48px 20px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <img src={heroImg} alt="Perro" style={{ width: 96, height: 96, objectFit: "cover" }} />
            <h1 style={{ margin: 0, fontSize: 36, fontWeight: 800 }}>Tienda de Perritos</h1>
          </div>
          <p style={{ margin: "8px 0 18px", opacity: 0.95 }}>Rionegro, Antioquia — Tu nuevo mejor amigo te espera</p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#" style={socialButtonStyle}>Instagram</a>
            <a href="#" style={socialButtonStyle}>Facebook</a>
            <a href="#" style={socialButtonStyle}>TikTok</a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" style={socialButtonStyle}>WhatsApp</a>
            <a href={`tel:${celular}`} style={{ ...socialButtonStyle, background: "rgba(255,255,255,0.22)" }}>📞 {celular.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")}</a>
          </div>
        </div>
      </header>

      {/* Filtros */}
      <div style={{ maxWidth: 1100, margin: "-24px auto 20px", padding: "0 18px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          <button onClick={() => setFiltro("todos")} style={filtro === "todos" ? filtroActiveStyle : filtroStyle}>Todos</button>
          <button onClick={() => setFiltro("disponibles")} style={filtro === "disponibles" ? filtroActiveStyle : filtroStyle}>Disponibles</button>
        </div>
      </div>

      {/* Grid de tarjetas */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 18px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {filtrarPerros().map((p) => (
            <article key={p.id} style={{ background: "white", padding: 18, borderRadius: 12, boxShadow: "0 8px 30px rgba(2,6,23,0.06)", position: "relative" }}>
              <img src={p.imagen} alt={p.nombre} style={{ width: "100%", borderRadius: 10, objectFit: "cover", height: 160 }} />

              <div style={{ position: "absolute", top: 16, left: 16 }}>
                <span style={p.estado === "disponible" ? badgeAvailableStyle : badgeSoldStyle}>{p.estado === "disponible" ? "Disponible" : "Agotado"}</span>
              </div>

              <h3 style={{ marginTop: 12, marginBottom: 4 }}>{p.nombre}</h3>
              <div style={{ color: "#6b7280", fontSize: 14, marginBottom: 8 }}>Edad: {p.edad}</div>
              <p style={{ color: "#374151", marginBottom: 12 }}>{p.descripcion}</p>
              <div style={{ fontWeight: 800, color: "#047857", fontSize: 20, marginBottom: 12 }}>${formatCOP(p.precio)}</div>

              <a href={`https://wa.me/${whatsappNumber}?text=Hola,%20estoy%20interesado%20en%20el%20${encodeURIComponent(p.nombre)}`} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#10b981", color: "white", padding: "10px 14px", borderRadius: 10, textDecoration: "none" }}>
                💬 Preguntar por WhatsApp
              </a>
            </article>
          ))}
        </div>

        {/* Métodos de pago (se mantiene) */}
        <section style={{ marginTop: 28, background: "white", padding: 18, borderRadius: 12, boxShadow: "0 8px 30px rgba(2,6,23,0.03)" }}>
          <h3 style={{ marginTop: 0 }}>Métodos de pago</h3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div style={{ background: "linear-gradient(135deg,#6d28d9,#8b5cf6)", padding: 16, borderRadius: 12, color: "white", minWidth: 160 }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>📱</div>
              <div style={{ fontWeight: 800 }}>Nequi</div>
              <div style={{ opacity: 0.95 }}>300 123 4567</div>
            </div>

            <div style={{ background: "linear-gradient(135deg,#b45309,#f59e0b)", padding: 16, borderRadius: 12, color: "white", minWidth: 160 }}>
              <div style={{ fontSize: 28, marginBottom: 6 }}>🏦</div>
              <div style={{ fontWeight: 800 }}>Bancolombia</div>
              <div style={{ opacity: 0.95 }}>Cta Ahorros</div>
              <div style={{ opacity: 0.95, fontSize: 13 }}>123 456789 00</div>
            </div>
          </div>
          <p style={{ marginTop: 12, color: "#6b7280" }}>💬 Envíanos el comprobante por <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a></p>
        </section>
      </main>

      <footer style={{ textAlign: "center", padding: 20, color: "#6b7280" }}>
        © {new Date().getFullYear()} Tienda de Perritos
      </footer>
    </div>
  );
}

// Estilos en JS para reutilizar
const socialButtonStyle = {
  background: "rgba(255,255,255,0.15)",
  color: "white",
  padding: "8px 14px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
};

const filtroStyle = {
  background: "white",
  borderRadius: 999,
  padding: "8px 18px",
  border: "1px solid rgba(6,95,70,0.06)",
  cursor: "pointer",
};

const filtroActiveStyle = {
  ...filtroStyle,
  background: "#10b981",
  color: "white",
  border: "none",
};

const badgeAvailableStyle = {
  background: "#ecfdf5",
  color: "#059669",
  padding: "6px 10px",
  borderRadius: 999,
  fontWeight: 700,
  fontSize: 12,
};

const badgeSoldStyle = {
  background: "#fff1f2",
  color: "#ef4444",
  padding: "6px 10px",
  borderRadius: 999,
  fontWeight: 700,
  fontSize: 12,
};
