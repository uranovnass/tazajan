import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ t }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">

        <div className="logo">{t.logo}</div>

        <div className="burger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`menu ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>{t.home}</Link>
          <Link to="/products" onClick={() => setOpen(false)}>{t.products}</Link>
          <Link to="/about" onClick={() => setOpen(false)}>{t.about}</Link>
          <Link to="/contacts" onClick={() => setOpen(false)}>{t.contacts}</Link>
          
          {/* Заменили button на Link */}
          <Link to="/products" className="btn-primary" onClick={() => setOpen(false)}>
            {t.orderButton}
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;