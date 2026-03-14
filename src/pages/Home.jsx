import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import NumberFlow from '@number-flow/react';

import hero from "../assets/combain.png";
import flour from "../assets/11tazajpg.jpg";
import corn from "../assets/3taza.png";
import beet from "../assets/4taza.png";
import grains from "../assets/12taza.jpg";
import farmers from "../assets/5taza.png";
import logo from "../assets/8taza.png";

// --- 1. ШАБЛОН ДЛЯ ЦИФРЫ (StatItem) ---
// Этот код должен быть ОТДЕЛЬНО от функции App
const StatItem = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(value);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-item" style={{ textAlign: 'center', minWidth: '150px' }}>
      <div className="stat-number" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2e7d32', display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
        <NumberFlow 
          value={count} 
          format={{ useGrouping: true }}
          // 3000 — это 3 секунды, будет идти медленно и плавно
          transformTiming={{ duration: 3000, easing: 'ease-out' }} 
        />
        <span style={{ marginLeft: '4px' }}>{suffix}</span>
      </div>
      <p className="stat-label" style={{ color: '#666', margin: 0 }}>{label}</p>
    </div>
  );
};

// --- 2. ШАБЛОН ДЛЯ КАРТОЧКИ ТОВАРА ---
function ProductCard({ image, title, text }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{text}</p>
        <button className="btn-secondary small" onClick={() => navigate('/products')}>
          Подробнее
        </button>
      </div>
    </div>
  );
}

// --- 3. ГЛАВНАЯ СТРАНИЦА (App) ---
function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* ГЕРОЙ */}
      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>Натуральные продукты <br /><span>прямо с наших полей</span></h1>
          <p>Мука, кукуруза, свекла и крупы — полезно, натурально и честно.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/products')} className="btn-primary large">Наши продукты</button>
            <button onClick={() => navigate('/about')} className="btn-secondary large">Узнать больше</button>
          </div>
        </div>
      </section>

      {/* БЛОК С ЦИФРАМИ (ТЕПЕРЬ МЕДЛЕННЫЙ) */}
      <section className="stats-bar" style={{ padding: '60px 0', background: '#f9fbf9' }}>
        <div className="container stats-wrapper" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <StatItem value={500} label="Гектаров полей" suffix="+" />
          <StatItem value={150} label="Сотрудников" />
          <StatItem value={25} label="Лет опыта" />
          <StatItem value={1000} label="Тонн урожая" suffix="т" />
        </div>
      </section>

      {/* ПРОДУКТЫ */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Наши продукты</h2>
          <div className="cards">
            <ProductCard image={flour} title="Сахар" text="Высококачественный сахар" />
            <ProductCard image={corn} title="Кукуруза" text="Золотистая кукуруза отборного качества" />
            <ProductCard image={grains} title="Пшеницы" text="Высококачественная пшеница" />
            <ProductCard image={beet} title="Свекла" text="Сладкая и сочная столовая свекла" />
          </div>
        </div>
      </section>

      {/* О НАС */}
      <section className="farmers">
        <div className="container about-wrapper">
          <div className="about-image">
            <img src={farmers} alt="О нас" />
          </div>
          <div className="about-content">
            <h2>О нас</h2>
            <p>«ТАЗАЖАН» — семейное хозяйство...</p>
            <button onClick={() => navigate('/about')} className="btn-secondary">Подробнее о компании</button>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="contacts">
        <div className="container contacts-wrapper">
          <div className="contact-info">
            <h2>Контакты</h2>
            <p>📍Кыргызстан, Чуйская область, Исык-Атинский район, с. Новопокровка, ул. Ленина 78</p>
            <p>+7 (123) 456-78-90</p>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
