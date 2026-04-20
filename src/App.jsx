import React, { useState } from "react";

const productosData = [
  { id: 1, nombre: "Collar para perro", precio: 15000, imagen: "https://placedog.net/400/300?id=1" },
  { id: 2, nombre: "Correa resistente", precio: 25000, imagen: "https://placedog.net/400/300?id=2" },
  { id: 3, nombre: "Juguete mordedor", precio: 12000, imagen: "https://placedog.net/400/300?id=3" },
];

const benefits = [
  "Vacunas al día",
  "Certificado de salud",
  "Desparasitados",
  "Garantía de salud",
];

function BenefitTag({ text }) {
  return (
    <span style={{ background: "rgba(0,0,0,0.06)", padding: "6px 12px", borderRadius: 16, fontWeight: 700, fontSize: 13 }}>
      ✅ {text}
    </span>
  );
}

function PaymentCard({ emoji, title, lines = [], tel, style = {} }) {
  return (
    <div style={{ borderRadius: 12, padding: 14, color: "white", minWidth: 170, ...style }} aria-label={title}>
      <div style={{ fontSize: 28, marginBottom: 6 }}>{emoji}</div>
      <div style={{ fontWeight: 800, marginBottom: 6 }}>{title}</div>
      {lines.map((l, i) =>
        tel && i === 0 ? (
          <div key={i}>
            <a href={`tel:${tel}`} style={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}>{l}</a>
          </div>
        ) : (
          <div key={i} style={{ opacity: 0.95 }}>{l}</div>
        )
      )}
    </div>
  );
}

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => setCarrito((c) => [...c, producto]);
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const whatsappNumber = "573001234567"; // Ajusta el número si hace falta

  return (
    <main style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 18, maxWidth: 1100, margin: "0 auto" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h1 style={{ margin: 0, color: "#064e3b" }}>🐶 Tienda Perritos</h1>
        <div style={{ fontWeight: 700 }}>🛒 {carrito.length}</div>
      </header>

      <section style={{ background: "linear-gradient(135deg,#064e3b,#059669)", borderRadius: 12, color: "white", padding: 18, marginBottom: 14 }}>
        <h2 style={{ margin: "0 0 8px" }}>Nuestros perritos incluyen</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {benefits.map((b) => (
            <BenefitTag key={b} text={b} />
          ))}
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginBottom: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
          {productosData.map((p) => (
            <div key={p.id} style={{ background: "white", borderRadius: 12, padding: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.06)" }}>
              <img src={p.imagen} alt={p.nombre} style={{ width: "100%", borderRadius: 8 }} />
              <h3 style={{ margin: "8px 0 4px" }}>{p.nombre}</h3>
              <div style={{ color: "#064e3b", fontWeight: 800, marginBottom: 8 }}>${p.precio}</div>
              <button onClick={() => agregarAlCarrito(p)} style={{ width: "100%", background: "#064e3b", color: "white", border: "none", padding: "10px 12px", borderRadius: 10, cursor: "pointer" }}>Agregar al carrito</button>
            </div>
          ))}
        </div>

        <aside style={{ background: "white", borderRadius: 12, padding: 12, boxShadow: "0 6px 20px rgba(0,0,0,0.04)" }}>
          <h3 style={{ marginTop: 0 }}>Carrito</h3>
          {carrito.length === 0 ? (
            <p style={{ color: "#6b7280" }}>No hay productos en el carrito</p>
          ) : (
            <div>
              {carrito.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e6e6e6", padding: "8px 0" }}>
                  <span>{item.nombre}</span>
                  <span>${item.precio}</span>
                </div>
              ))}
              <div style={{ marginTop: 10, fontWeight: 800 }}>Total: ${total}</div>
            </div>
          )}
        </aside>
      </section>

      <section style={{ background: "white", borderRadius: 12, padding: 14, boxShadow: "0 6px 20px rgba(0,0,0,0.04)", marginBottom: 14 }}>
        <h3 style={{ marginTop: 0 }}>Métodos de pago</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <PaymentCard emoji="📱" title="Nequi" lines={["300 123 4567"]} tel="3001234567" style={{ background: "linear-gradient(135deg,#6d28d9,#8b5cf6)" }} />
          <PaymentCard emoji="🏦" title="Bancolombia" lines={["Cta Ahorros", "123 456789 00"]} style={{ background: "linear-gradient(135deg,#b45309,#f59e0b)" }} />
        </div>
        <p style={{ marginTop: 12, color: "#6b7280" }}>Envíanos el comprobante por <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
      </section>

      <footer style={{ textAlign: "center", color: "#374151", padding: 12 }}>
        © {new Date().getFullYear()} Tienda Perritos
      </footer>
    </main>
  );
}
