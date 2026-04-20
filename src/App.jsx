<div style={{ marginTop: "3rem", background: "linear-gradient(135deg, #064e3b, #059669)", borderRadius: 20, padding: "2rem", textAlign: "center", color: "white" }}>
          <p style={{ fontSize: "1.3rem", margin: "0 0 1rem", fontWeight: 700 }}>🏥 Todos nuestros perritos incluyen</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {["Vacunas al dia", "Certificado de salud", "Desparasitados", "Garantia de salud"].map((item) => (
              <span key={item} style={{ background: "rgba(255,255,255,0.15)", padding: "8px 18px", borderRadius: 20, fontSize: 14, fontWeight: 600 }}>
                ✅ {item}
              </span>
            ))}
          </div>
        </div>

        {/* Métodos de pago */}
        <div style={{ marginTop: "2rem", background: "white", borderRadius: 20, padding: "2rem", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #dcfce7" }}>
          <p style={{ fontSize: "1.3rem", margin: "0 0 0.5rem", fontWeight: 800, color: "#064e3b" }}>💳 Métodos de pago</p>
          <p style={{ color: "#9ca3af", fontSize: 14, margin: "0 0 1.5rem" }}>Pagos seguros y rápidos</p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>

            {/* Nequi */}
            <div style={{ background: "linear-gradient(135deg, #6d28d9, #8b5cf6)", borderRadius: 16, padding: "1.5rem 2.5rem", color: "white", minWidth: 160 }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>📱</div>
              <p style={{ margin: "0 0 0.25rem", fontWeight: 800, fontSize: "1.2rem" }}>Nequi</p>
              <p style={{ margin: 0, opacity: 0.85, fontSize: 14 }}>300 123 4567</p>
            </div>

            {/* Bancolombia */}
            <div style={{ background: "linear-gradient(135deg, #b45309, #f59e0b)", borderRadius: 16, padding: "1.5rem 2.5rem", color: "white", minWidth: 160 }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🏦</div>
              <p style={{ margin: "0 0 0.25rem", fontWeight: 800, fontSize: "1.2rem" }}>Bancolombia</p>
              <p style={{ margin: 0, opacity: 0.85, fontSize: 14 }}>Cta Ahorros</p>
              <p style={{ margin: 0, opacity: 0.85, fontSize: 13 }}>123 456789 00</p>
            </div>

          </div>
          <p style={{ margin: "1.5rem 0 0", fontSize: 13, color: "#9ca3af" }}>💬 Envíanos el comprobante por WhatsApp</p>
        </div>