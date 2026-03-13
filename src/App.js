import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/global.css";
// Import your page components
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
<Footer /> 
      </div>
    </Router>
  );

}

export default App; // Ensure this line exists at the very bottom
