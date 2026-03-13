import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">

        <div className="logo">ТАЗАЖАН</div>

        <div className="burger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`menu ${open ? "active" : ""}`}>

          <Link to="/" onClick={() => setOpen(false)}>Главная</Link>

          <Link to="/products" onClick={() => setOpen(false)}>Продукция</Link>

          <Link to="/about" onClick={() => setOpen(false)}>О нас</Link>

          <Link to="/contacts" onClick={() => setOpen(false)}>Контакты</Link>

          <button className="btn-primary" onClick={() => setOpen(false)}>
            Заказать продукцию
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Header;