import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import JourneySection from "./JourneySection";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { text: "Flooring is impeccable, definitely a bang for your buck! Would recommend.", name: "Cobster Maystry", link: "https://www.google.com/maps/contrib/115435690810126572533/reviews?hl=en-GB" },
  { text: "Really good service and quality. Highly recommend.", name: "Bracyn Valayadum", link: "https://www.google.com/maps/contrib/114545372810914165454/reviews?hl=en-GB" },
  { text: "Very good at what they do, top quality flooring and service as well as the blinds.", name: "Kevin Manhatten", link: "https://www.google.com/maps/contrib/111196853932400830475/reviews?hl=en-GB" },
  { text: "Quality and reliable service.", name: "Liam Matthews", link: "https://www.google.com/maps/contrib/110742829271271846544/reviews?hl=en-GB" },
  { text: "Professional, Quality, and Value for money. Highly recommended!", name: "Dale Snell", link: "https://www.google.com/maps/contrib/100399046842648388285/reviews?hl=en-GB" },
  { text: "Highly skilled and friendly team!", name: "Layken Vergotine", link: "https://www.google.com/maps/contrib/107828843692444632834/reviews?hl=en-GB" },
  { text: "The best in town ❤️", name: "Jaulleel Vergotine", link: "https://www.google.com/maps/contrib/116821225464345263392/reviews?hl=en-GB" },
  { text: "Great job and affordable quality 👌 definitely a recommendation", name: "Chanel Pietersen", link: "https://www.google.com/maps/contrib/105661381408676402478/reviews?hl=en-GB" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true, centerPadding: "40px" } },
    { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
  ],
};

const Home = () => {
  return (
    <div className="home">

      {/* ---------- Hero Section ---------- */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1>
            Transforming <span className="highlight">Homes</span> with L&R
          </h1>
          <p>Quality Laminate Flooring & Blinds with a Family Touch</p>
          <Link to="/contact">
            <motion.button 
              className="cta-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Free Quote
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* ---------- Story Section ---------- */}
      <section className="story">
        <h2>Our Story</h2>
        <motion.div 
          className="story-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {[
            "Throughout the years of holidays, Liam, the son of Reynold, helped here and there. During studies, this inspired us to start L&R Laminate Flooring & Maintenance.",
            "It became an innovative mindset to fight unemployment and help change lives. We aim to give youth practical experience in building and innovation."
          ].map((text, i) => (
            <motion.div 
              className="story-card" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------- Services Section ---------- */}
      <section className="services">
        <h2>What We Offer</h2>
        <motion.div className="services-grid">
          {[
            { title: "Laminate Flooring", desc: "Durable, stylish flooring installations for modern homes." },
            { title: "Blinds", desc: "Custom blinds to suit any interior design." },
            { title: "Maintenance", desc: "Reliable flooring & blind maintenance services for lasting quality." }
          ].map((s, i) => (
            <motion.div 
              className="service-card" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {s.title}
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------- Counters Section ---------- */}
      <section className="counters">
        {[
          { value: "+17", label: "Years Experience" },
          { value: "Family", label: "Owned & Trusted" },
          { value: "Growing", label: "SME Supporting Youth" }
        ].map((c, i) => (
          <motion.div 
            className="counter" 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3>{c.value}</h3>
            <p>{c.label}</p>
          </motion.div>
        ))}
      </section>

      {/* ---------- Journey Section ---------- */}
      <JourneySection />

      {/* ---------- Testimonials Section ---------- */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <Slider {...sliderSettings} className="testimonial-carousel">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-wrapper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-card-link"
              >
                <div className="testimonial-card">
                  <span className="quote">“</span>
                  <p className="testimonial-text">{t.text}</p>
                  <b className="testimonial-author">- {t.name}</b>
                </div>
              </a>
            </motion.div>
          ))}
        </Slider>
      </section>

      {/* ---------- Floating CTA ---------- */}
      <Link to="/contact">
        <motion.button 
          className="floating-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📞 Get a Free Quote
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;