import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.msg);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong, try again!");
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let’s chat about your flooring & blinds project today!</p>
      </section>

      <section className="contact-info">
        <div className="info-card">
          <h2>📍 Our Location</h2>
          <p>Cape Town, South Africa</p>
        </div>

        <div className="info-card">
          <h2>📞 Call Us</h2>
          <p>+27 65 555 5555</p>
        </div>

        <div className="info-card">
          <h2>📧 Email Us</h2>
          <p>info@lrflooring.co.za</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">📨 Send Message</button>
        </form>
        {status && <p className="status">{status}</p>}
      </section>
    </div>
  );
}

export default Contact;
