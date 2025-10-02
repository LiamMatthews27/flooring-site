import React from "react";
import "./About.css";

const services = [
  { title: "Laminate Flooring", desc: "Stylish, durable laminate flooring for modern homes." },
  { title: "Vinyl Flooring", desc: "Waterproof, flexible vinyl flooring options." },
  { title: "Bamboo Flooring", desc: "Eco-friendly, sustainable bamboo flooring." },
  { title: "Engineered Laminate", desc: "Strong, long-lasting engineered laminate floors." },
  { title: "Venetian Blinds", desc: "Classic aluminium blinds for perfect light control." },
  { title: "Roller & Vertical Blinds", desc: "Modern roller and vertical blinds for every interior." },
];

const whyChooseUs = [
  { icon: "👷‍♀️", title: "Skilled Team", desc: "100% Black women & youth directors, certified installers." },
  { icon: "💡", title: "Innovative Solutions", desc: "We bring practical, creative solutions to every project." },
  { icon: "🌍", title: "Community Driven", desc: "Supporting youth and women in trades and development." },
  { icon: "👍", title: "Reliable Quality", desc: "Attention to detail and lasting results in every installation." },
];

const processSteps = [
  { step: 1, title: "Consultation" },
  { step: 2, title: "Measurement & Planning" },
  { step: 3, title: "Installation" },
  { step: 4, title: "Final Touch & Enjoy" },
];

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>L&R Laminate Flooring & Maintenance</h1>
        <p>Transforming homes with quality flooring and blinds. Family-owned, registered, and proudly community-focused.</p>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          L&R Laminate Flooring & Maintenance was born from a vision to create opportunities, uplift youth, and empower women in Cape Town. 
          From humble beginnings, our founders <b>Reynold & Liam</b> combined hands-on experience, passion, and innovation to provide homes 
          with flooring and blinds that are not only beautiful but built to last. 
          Every project we undertake embodies quality, integrity, and community spirit.
        </p>
      </section>

      {/* Services */}
      <section className="our-services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us</h2>
        <div className="choose-grid">
          {whyChooseUs.map((w, i) => (
            <div key={i} className="choose-card">
              <div className="icon">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="our-process">
        <h2>Our Process</h2>
        <div className="process-steps">
          {processSteps.map((p, i) => (
            <div key={i} className="process-card">
              <div className="step-number">{p.step}</div>
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  
  

);
  
}

export default About;
