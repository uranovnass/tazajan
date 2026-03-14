import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      
      {/* Миссия кооператива */}
      <section className="company-mission">
        <h3>Наша Миссия</h3>
        <div className="mission-text">
          <p>
            Сельскохозяйственный кооператив "Тазажан" был создан с целью объединить усилия местных фермеров 
            и развивать аграрный сектор Кыргызстана. Название "Тазажан" символизирует чистоту природы 
            и стремление к обновлению и развитию сельской жизни.
          </p>
          <p style={{ marginTop: '10px' }}>
            С момента основания кооператив стал опорой для сотен фермеров, предоставляя доступ к современным 
            технологиям, рынкам сбыта и взаимной поддержке. Мы гордимся тем, что "Тазажан" объединяет традиции 
            и инновации, чтобы обеспечить высокое качество продукции.
          </p>
        </div>
      </section>
<section className="value-section">

  <h2 className="value-title">Наше уникальное предложение</h2>

  <div className="value-grid">

    <div className="value-card">
      <h3>🌱 Экологичная продукция</h3>
      <p>
        Кооператив «Тазажан» уделяет особое внимание экологической чистоте
        сельскохозяйственной продукции. Мы стремимся использовать устойчивые
        методы ведения сельского хозяйства, которые сохраняют плодородие почвы
        и минимизируют негативное влияние на окружающую среду.
      </p>
    </div>

    <div className="value-card">
      <h3>🚜 Современные технологии</h3>
      <p>
        Наш кооператив внедряет современные аграрные технологии и инновационные
        методы обработки земли. Это позволяет повышать урожайность,
        оптимизировать производственные процессы и обеспечивать высокое
        качество продукции для наших клиентов и партнёров.
      </p>
    </div>

    <div className="value-card">
      <h3>🚚 Надёжная логистика</h3>
      <p>
        Мы обеспечиваем эффективную систему хранения и транспортировки
        продукции. Благодаря налаженной логистике фермеры могут быстро
        доставлять свою продукцию на рынок, а покупатели получают свежие
        и качественные товары в кратчайшие сроки.
      </p>
    </div>

    <div className="value-card">
      <h3>🤝 Поддержка фермеров</h3>
      <p>
        Одной из главных задач кооператива является поддержка местных фермеров.
        Мы помогаем участникам кооператива получать доступ к современным
        технологиям, новым рынкам сбыта и образовательным программам,
        способствуя развитию сельских регионов.
      </p>
    </div>

  </div>

</section>
      {/* Видео блок */}
      <section className="video-container">
        <h3 className="video-title">Посмотрите Видео о Нас</h3>
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
      <h2 className="section-title">Наша Команда</h2>
      <div className="team-container">
        <div className="team-member">
          <img className="team-image" src="https://fe-foto.ru/images/catalog/shop/foni/super_white_belyj.jpg" alt="Директор" />
          <h3 className="team-name">[Имя Директора]</h3>
          <p className="team-role">Основатель & Генеральный директор</p>
        </div>
        <div className="team-member">
          <img className="team-image" src="https://fe-foto.ru/images/catalog/shop/foni/super_white_belyj.jpg" alt="Маркетолог" />
          <h3 className="team-name">[Имя Маркетолога]</h3>
          <p className="team-role">Менеджер по маркетингу</p>
        </div>
        <div className="team-member">
          <img className="team-image" src="https://fe-foto.ru/images/catalog/shop/foni/super_white_belyj.jpg" alt="Операционный директор" />
          <h3 className="team-name">[Имя Операционного директора]</h3>
          <p className="team-role">Руководитель операций</p>
        </div>
      </div>

      {/* Галерея */}
      <section className="gallery-container">
        <h3 className="gallery-title">Наша Галерея</h3>
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
