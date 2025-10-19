import React, { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.name}, tu mensaje ha sido enviado!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main>
      <section className="contact-section">
        <div className="contact-card">
          <div className="contact-header">
            <h2>Contacto 📬</h2>
            <p>¿Tienes preguntas o quieres reservar un curso? Escríbenos.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">Enviar</button>
            </div>
          </form>

          <div className="contact-info">
            <p>📞 Teléfono: <a href="tel:+56912345678">+56 9 1234 5678</a></p>
            <p>📍 Dirección: Santiago, Chile</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
