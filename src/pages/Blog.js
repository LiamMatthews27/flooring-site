import React, { useState } from "react";
import "./Blog.css";

// ✅ Import images
import img1 from "../images/IMG-20250722-WA0054.jpg";
import vinyl1 from "../images/IMG-20250915-WA0080.jpg";
import blinds1 from "../images/roller-5-screen-dark-scaled.jpg";
import maintenance from "../images/IMG-20250910-WA0005.jpg";
import expansion from "../images/IMG-20250915-WA0086.jpg";

// ✅ Import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  // ... (keep your blog posts same as before)
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ For gallery modal

  // ✅ Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // tablets & below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Blog</h1>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="blog-card"
            onClick={() => setSelectedPost(post)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
              </div>
              <div className="card-back">
                <p>{post.shortDesc}</p>
                <span className="read-more">Click to Read More</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedPost.title}</h2>
            <img src={selectedPost.image} alt={selectedPost.title} />
            <p>{selectedPost.fullDesc}</p>
            <button onClick={() => setSelectedPost(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <section className="tips-section">
        <h2>Laminate Flooring Tips</h2>
        <ul>
          <li>Use a damp cloth and water for cleaning.</li>
          <li>Avoid chemical cleaners—they make the floor glare.</li>
          <li>Always leave expansion gaps during installation.</li>
          <li>Check floors during winter to ensure expansion space is working.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FAQs</h2>

        {[
          { q: "How do I clean laminate floors?", a: "Use water and a damp cloth. Avoid chemical cleaners—they leave residue and glare." },
          { q: "Do you install expansion gaps?", a: "Yes! This prevents buckling during winter." },
          { q: "What types of blinds do you install?", a: "Venetian, aluminum, roller, and vertical blinds, all installed with precision." },
          { q: "How long does a flooring installation take?", a: "Depending on the area size, installations can take from a few hours to a couple of days." },
          { q: "Do you provide maintenance services?", a: "Yes, we offer regular maintenance and repairs to keep your floors and blinds in top condition." },
          { q: "Can you work on commercial projects?", a: "Absolutely! We handle both residential and commercial flooring and blind installations." },
          { q: "Are your materials eco-friendly?", a: "Yes, we source sustainable laminate, vinyl, and bamboo options whenever possible." },
          { q: "Do you give quotes before starting work?", a: "Yes, we provide free, no-obligation quotes so you know exactly what to expect." },
        ].map((faq, i) => (
          <div className="faq-item" key={i}>
            <input type="checkbox" id={`faq-${i}`} />
            <label htmlFor={`faq-${i}`}>{faq.q}</label>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>

      {/* ✅ New Gallery Section */}
      <section className="gallery-section">
        <h2>Our Work</h2>
        <p className="gallery-subtitle">
          A showcase of our recent flooring and blinds installations.
        </p>
        <Slider {...sliderSettings}>
          {[img1, vinyl1, blinds1, maintenance, expansion].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Work ${i + 1}`}
                className="gallery-img"
                onClick={() => setSelectedImage(img)} // ✅ open modal on click
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* ✅ Gallery Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-content gallery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Selected Work" />
            <button onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
