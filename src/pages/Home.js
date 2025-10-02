import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // ✅ Add this
import "./Home.css";
import JourneySection from "./JourneySection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { text: "Flooring is impeccable , definitely a bang for your buck would reccomend , don't come across these too often", name: "Cobster Maystry", link: "https://www.google.com/maps/contrib/115435690810126572533/reviews?hl=en-GB" },
  { text: "Really good service and quality. Highly recommend.", name: "Bracyn Valayadum", link: "https://www.google.com/maps/contrib/114545372810914165454/reviews?hl=en-GB" },
  { text: "Very good at what they do, top quality flooring and service as well as the blinds.", name: "Kevin Manhatten", link: "https://www.google.com/maps/contrib/111196853932400830475/reviews?hl=en-GB" },
  { text: "Quality and reliable service.", name: "Liam Matthews", link: "https://www.google.com/maps/contrib/110742829271271846544/reviews?hl=en-GB" },
  { text: "Professional, Quality, and Value for money. Highly recommended!!!!🙌🙌.", name: "Dale Snell", link: "https://www.google.com/maps/contrib/100399046842648388285/reviews?hl=en-GB" },
  { text: "Highly skilled and friendly team!", name: "Layken Vergotine", link: "https://www.google.com/maps/contrib/107828843692444632834/reviews?hl=en-GB" },
  { text: "The best in town ❤️", name: "Jaulleel Vergotine", link: "https://www.google.com/maps/contrib/116821225464345263392/reviews?hl=en-GB" },
  { text: "Great job and affordable quality 👌 definitely a recommendation", name: "Chanel Pietersen", link: "https://www.google.com/maps/contrib/105661381408676402478/reviews?hl=en-GB" },
];

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <div className="home">

      {/* ---------- Hero Section ---------- */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Transforming <span className="highlight">Homes</span> with L&R
          </h1>
          <p>Quality Laminate Flooring & Blinds with a Family Touch</p>
          
          {/* ✅ Updated CTA to navigate to /contact */}
          <Link to="/contact">
            <button className="cta-btn">Get Your Free Quote</button>
          </Link>
        </div>
      </section>

      {/* ---------- Story Section ---------- */}
      <section className="story">
        <h2>Our Story</h2>
        <div className="story-cards">
          <div className="story-card">
            <p>
              Throughout the years of holidays, <b>Liam</b>, the son of <b>Reynold</b>, helped here and there. 
              During studies, this inspired us to start <b>L&R Laminate Flooring & Maintenance</b>.
            </p>
          </div>
          <div className="story-card">
            <p>
              It became an innovative mindset to fight unemployment and help change lives. 
              We aim to give youth practical experience in building and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Services Section ---------- */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="services-grid">
          <div className="service-card">
            Laminate Flooring
            <p>Durable, stylish flooring installations for modern homes.</p>
          </div>
          <div className="service-card">
            Blinds
            <p>Custom blinds to suit any interior design.</p>
          </div>
          <div className="service-card">
            Maintenance
            <p>Reliable flooring & blind maintenance services for lasting quality.</p>
          </div>
        </div>
      </section>

      {/* ---------- Counters Section ---------- */}
      <section className="counters">
        <div className="counter">
          <h3>+17</h3>
          <p>Years Experience</p>
        </div>
        <div className="counter">
          <h3>Family</h3>
          <p>Owned & Trusted</p>
        </div>
        <div className="counter">
          <h3>Growing</h3>
          <p>SME Supporting Youth</p>
        </div>
      </section>

      {/* ---------- Journey / Timeline Section ---------- */}
      <JourneySection />

      {/* ---------- Testimonials Section ---------- */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <Slider {...sliderSettings} className="testimonial-carousel">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-wrapper">
              <a
                href={t.link}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-card-link"
              >
                <div className="testimonial-card">
                  <p>“{t.text}”</p>
                  <b>- {t.name}</b>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </section>

      {/* ---------- Floating CTA ---------- */}
      <Link to="/contact">
        <button className="floating-cta">📞 Get a Free Quote</button>
      </Link>
    </div>
  );
};

export default Home;
