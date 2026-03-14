import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { translations } from "./translation";
import "./styles/global.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("ru");
  const t = translations[lang];

  return (
    <>
      {/* Переключатель языка - с классом lang-switcher */}
    <div className="lang-switcher">
  <button 
    className={lang === 'ru' ? 'active' : ''}
    onClick={() => setLang("ru")}
  >
    RU
  </button>
  <button 
    className={lang === 'kg' ? 'active' : ''}
    onClick={() => setLang("kg")}
  >
    KG
  </button>
</div>

      <Router>
        <div className="app">
          <Header t={t} />

          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/products" element={<Products t={t} />} />
            <Route path="/about" element={<About t={t} />} />
            <Route path="/contacts" element={<Contacts t={t} />} />
          </Routes>

          <Footer t={t} /> 
        </div>
      </Router>
    </>
  );
}

export default App;