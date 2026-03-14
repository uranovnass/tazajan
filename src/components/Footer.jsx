import { Link } from "react-router-dom";

function Footer({ t }) {  // Добавь t в пропсы
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>{t.logo}</h3>
          <p>{t.footerTagline}</p>
        </div>

        <div className="footer-section">
          <h4>{t.navigation}</h4>
          <ul>
            <li><Link to="/">{t.home}</Link></li>
            <li><Link to="/products">{t.products}</Link></li>
            <li><Link to="/about">{t.about}</Link></li>
            <li><Link to="/contacts">{t.contacts}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.contacts}</h4>
          <p>📍{t.address}</p>
          <p>📞 {t.phone}</p>
          <p>📧 {t.email}</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;