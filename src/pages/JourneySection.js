import { motion } from "framer-motion";
import "./JourneySection.css";

const steps = [
  { year: "2007", title: "The Spark", desc: "Reynold Matthews first saw laminate flooring being installed, inspiring a lifelong passion." },
  { year: "2010–2015", title: "Learning the Craft", desc: "Gaining experience with installations, understanding quality, and building supplier relations." },
  { year: "2015–2022", title: "Family Collaboration", desc: "Liam joined during school holidays and studies, learning hands-on and gaining entrepreneurial inspiration." },
  { year: "2022", title: "L&R Established", desc: "L&R Laminate Flooring & Maintenance became official, focusing on quality and innovation." },
  { year: "2023–Future", title: "Empowering Youth", desc: "Building systems to mentor youth, fight unemployment, and provide practical skill development." }
];

export default function JourneySection() {
  return (
    <section className="journey">
      <h2>Our Journey</h2>
      <div className="timeline">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="timeline-year">{step.year}</div>
            <div className="timeline-card">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
