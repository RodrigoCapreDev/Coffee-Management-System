import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./heroSection.css";

import img1 from "../assets/hero/img1.jpg";
import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";
import img4 from "../assets/hero/img4.jpg";
import img5 from "../assets/hero/img5.jpg";
import img6 from "../assets/hero/img6.jpg";

const IMAGES = [
  {
    src: img1,
    style: { top: "0%", left: "0%", width: "35%", height: "55%" },
    speed: 0.08,
  },
  {
    src: img2,
    style: { top: "0%", right: "0%", width: "30%", height: "45%" },
    speed: 0.12,
  },
  {
    src: img3,
    style: { bottom: "0%", left: "5%", width: "25%", height: "45%" },
    speed: 0.06,
  },
  {
    src: img4,
    style: { top: "50%", right: "5%", width: "28%", height: "50%" },
    speed: 0.1,
  },
  {
    src: img5,
    style: { bottom: "0%", left: "38%", width: "22%", height: "40%" },
    speed: 0.09,
  },
  {
    src: img6,
    style: { top: "15%", left: "40%", width: "30%", height: "45%" },
    speed: 0.09,
  },
];

function ParallaxImage({ src, style, speed }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.div ref={ref} className="hero-collage-img" style={{ ...style, y }}>
      <img src={src} alt="" />
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-collage">
        {IMAGES.map((img, i) => (
          <ParallaxImage key={i} {...img} />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SPECIALITY COFFEE
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          EL CAFÉ
          <br />
          QUE MERECE
          <br />
          TU ATENCIÓN.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link to="/catalogo" className="hero-cta">
            VER CATÁLOGO
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
