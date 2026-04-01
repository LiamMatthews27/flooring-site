import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // success or error
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  // ✅ Known disposable email domains
  const disposableDomains = [
    "mailinator.com", "tempmail.com", "10minutemail.com",
    "guerrillamail.com", "trashmail.com", "fakeinbox.com",
    "yopmail.com", "getnada.com", "maildrop.cc"
  ];

  // ✅ Validate email format
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // ✅ Check if email is disposable
  const isDisposableEmail = (email) => {
    const domain = email.split("@")[1];
    return disposableDomains.includes(domain);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const validFormat = isValidEmail(value);
      const disposable = isDisposableEmail(value);
      setEmailValid(validFormat && !disposable);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setStatus("❌ Please enter a valid email address!");
      setStatusType("error");
      setTimeout(() => setStatus(""), 5000);
      return;
    }

    if (isDisposableEmail(formData.email)) {
      setStatus("❌ Disposable emails are not allowed!");
      setStatusType("error");
      setTimeout(() => setStatus(""), 5000);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.msg);
      setStatusType(data.msg.startsWith("✅") ? "success" : "error");
      setFormData({ name: "", email: "", message: "" });
      setEmailValid(true);

      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong, try again!");
      setStatusType("error");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setLoading(false);
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
          <p>+27 84 738 9399</p>
        </div>

        <div className="info-card">
          <h2>📧 Email Us</h2>
          <p>Rmatthews838@gmail.com</p>
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
            style={{
              borderColor: emailValid ? "" : "red",
            }}
          />
          {!emailValid && (
            <p className="error-msg">
              ❌ Please enter a valid, non-disposable email.
            </p>
          )}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading || !emailValid}>
            {loading ? <span className="spinner"></span> : "📨 Send Message"}
          </button>
        </form>

        {status && <div className={`status-modal ${statusType} show`}>{status}</div>}
      </section>
    </div>
  );
}

export default Contact;