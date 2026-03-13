import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>ТАЗАЖАН</h3>
          <p>Мы заботимся о чистоте вашего пространства, используя экологичные технологии и профессиональный подход.</p>
        </div>

        <div className="footer-section">
          <h4>Навигация</h4>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/products">Продукты</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Контакты</h4>
          <p>📍Кыргызстан, Чуйская область, Исык-Атинский район, с. Новопокровка, ул. Ленина 78</p>
          <p>📞 +7 (777) 123-45-67</p>
          <p>📧 info@tazazhan.kg</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 ТАЗАЖАН. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
