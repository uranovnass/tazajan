import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NumberFlow from "@number-flow/react";

import hero from "../assets/combain.png";
import flour from "../assets/11tazajpg.jpg";
import corn from "../assets/3taza.png";
import beet from "../assets/4taza.png";
import grains from "../assets/12taza.jpg";
import farmers from "../assets/5taza.png";
import logo from "../assets/8taza.png";

const StatItem = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCount(value); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-item" style={{ textAlign: "center", minWidth: "150px" }}>
      <div className="stat-number" style={{ fontSize: "3rem", fontWeight: "bold", color: "#2e7d32", display: "flex", justifyContent: "center", alignItems: "baseline" }}>
        <NumberFlow value={count} format={{ useGrouping: true }} transformTiming={{ duration: 3000, easing: "ease-out" }} />
        <span style={{ marginLeft: "4px" }}>{suffix}</span>
      </div>
      <p className="stat-label" style={{ color: "#666", margin: 0 }}>{label}</p>
    </div>
  );
};

function ProductCard({ image, title, text, btnText }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="btn-secondary small" onClick={() => navigate("/products")}>{btnText}</button>
      </div>
    </div>
  );
}

function Home({ t }) { // Принимаем t здесь
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/products")} className="btn-primary large">{t.productsBtn}</button>
            <button onClick={() => navigate("/about")} className="btn-secondary large">{t.moreBtn}</button>
          </div>
        </div>
      </section>

      <section className="stats-bar" style={{ padding: "60px 0", background: "#f9fbf9" }}>
        <div className="container stats-wrapper" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
          <StatItem value={500} label={t.hectares} suffix="+" />
          <StatItem value={150} label={t.workers} />
          <StatItem value={25} label={t.experience} />
          <StatItem value={1000} label={t.harvest} suffix="т" />
        </div>
      </section>

      <section className="products">
        <div className="container">
          <h2 className="section-title">{t.productsTitle}</h2>
          <div className="cards">
            <ProductCard image={flour} title={t.sugar} text={t.sugarText} btnText="Подробнее" />
            <ProductCard image={corn} title={t.corn} text={t.cornText} btnText="Подробнее" />
            <ProductCard image={grains} title={t.wheat} text={t.wheatText} btnText="Подробнее" />
            <ProductCard image={beet} title={t.beet} text={t.beetText} btnText="Подробнее" />
          </div>
        </div>
      </section>

      <section className="farmers">
        <div className="container about-wrapper">
          <div className="about-image"><img src={farmers} alt="about" /></div>
          <div className="about-content">
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <button onClick={() => navigate("/about")} className="btn-secondary">{t.aboutBtn}</button>
          </div>
        </div>
      </section>

      <section className="contacts">
        <div className="container contacts-wrapper">
         <div className="contact-info">
               <h2>{t.contacts}</h2>
               <p>📍{t.addressText}</p>
            <p>+7 (123) 456-78-90</p>
          </div>
          <div className="logo"><img src={logo} alt="logo" /></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
