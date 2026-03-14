import React from 'react';

const About = ({ t }) => {  // Добавь t в пропсы
  return (
    <div className="about-container">
      
      {/* Миссия кооператива */}
      <section className="company-mission">
        <h3>{t.ourMission}</h3>
        <div className="mission-text">
          <p>{t.missionText1}</p>
          <p style={{ marginTop: '10px' }}>{t.missionText2}</p>
        </div>
      </section>

      <section className="value-section">
        <h2 className="value-title">{t.uniqueOffer}</h2>
        <div className="value-grid">
          <div className="value-card">
            <h3>{t.ecoProduct}</h3>
            <p>{t.ecoText}</p>
          </div>
          <div className="value-card">
            <h3>{t.modernTech}</h3>
            <p>{t.techText}</p>
          </div>
          <div className="value-card">
            <h3>{t.reliableLogistics}</h3>
            <p>{t.logisticsText}</p>
          </div>
          <div className="value-card">
            <h3>{t.farmerSupport}</h3>
            <p>{t.supportText}</p>
          </div>
        </div>
      </section>

      {/* Видео блок */}
      <section className="video-container">
        <h3 className="video-title">{t.watchVideo}</h3>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/Ur43R8OVMoE"
          title="Видео о Тазажан"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Команда */}
      <h2 className="section-title">{t.ourTeam}</h2>
      <div className="team-container">
        <div className="team-member">
          <img className="team-image" src="https://fe-foto.ru/images/catalog/shop/foni/super_white_belyj.jpg" alt={t.director} />
          <h3 className="team-name">[Имя Директора]</h3>
          <p className="team-role">{t.director}</p>
        </div>
        <div className="team-member">
          <img className="team-image" src="https://fe-foto.ru/images/catalog/shop/foni/super_white_belyj.jpg" alt={t.marketer} />
          <h3 className="team-name">[Имя Маркетолога]</h3>
          <p className="team-role">{t.marketer}</p>
        </div>
        <div className="team-member">
          <img className="team-image" src="https://fe-foto.ru/images/catalog/shop/foni/super_white_belyj.jpg" alt={t.operations} />
          <h3 className="team-name">[Имя Операционного директора]</h3>
          <p className="team-role">{t.operations}</p>
        </div>
      </div>

      {/* Галерея */}
      <section className="gallery-container">
        <h3 className="gallery-title">{t.ourGallery}</h3>
        <div className="gallery-grid">
          <img className="gallery-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPfWz7mu9jXuvxSPI5x4pgpcLSpf9x-Y6LA&s" alt="Поля" />
          <img className="gallery-image" src="https://bf-logistic.ua/ru/images/article/2024/chem-raznitsa-mezhdu/987902204_987902204.jpg" alt="Техника" />
          <img className="gallery-image" src="https://agro-alyans.com/wp-content/uploads/2023/03/svarog-1.jpg" alt="Урожай" />
        </div>
      </section>
      
    </div>
  );
};

export default About;