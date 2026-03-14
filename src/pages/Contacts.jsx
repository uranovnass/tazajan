import React, { useState } from "react";

const Contact = ({ t }) => {  // Добавь t в пропсы
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма маалыматтары:", formData);
    alert(t.thankYouMessage);
  };

  return (
    <section className="contact-section">
      <h1 className="contact-title">{t.contactsTitle}</h1>
      <p className="contact-description">
        {t.contactsDescription}
      </p>

      <div className="contact-details">
        {/* Информационный блок */}
        <div className="contact-info">
          <h2>{t.ourCoordinates}</h2>
          <ul className="contact-list">
            <li className="contact-list-item">
              <strong>{t.phone}:</strong> <br/> 
              +996 554 412 238 <br /> 
              +996 550 390 390 <br /> 
              +996 703 444 888
            </li>
            <li className="contact-list-item">
              <strong>{t.email}:</strong> <br/>
              <a href="mailto:nurbiykeberdibekova@gmail.com">nurbiykeberdibekova@gmail.com</a>
            </li>
            <li className="contact-list-item">
              <strong>{t.tikTok}:</strong> <br/>
              <a href="https://www.tiktok.com/@tazajan777" target="_blank" rel="noreferrer">@tazajan777</a>
            </li>
            <li className="contact-list-item">
              <strong>{t.address}:</strong> <br/>
              {t.addressText}
            </li>
          </ul>
        </div>

        {/* Блок формы */}
        <div className="contact-form-container">
          <h2>{t.leaveMessage}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.yourName}</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.yourEmail}</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.yourMessage}</label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="submit-button" type="submit">{t.sendButton}</button>
          </form>
        </div>
      </div>

      {/* Блок карты */}
      <div className="map-container">
        <h2>{t.ourOffice}</h2>
        <iframe
          className="map-iframe"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30645.882216342634!2d74.73994187113799!3d42.878340156911655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb162a438006b%3A0x965c6cd127d265fc!2z0JrQpSDQotCw0LfQsNC20LDQvQ!5e0!3m2!1sru!2skg!4v1731774587438!5m2!1sru!2skg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;