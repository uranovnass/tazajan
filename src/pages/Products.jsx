import React, { useState } from "react";

const productImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZZYVGAM6DnsUtwuc3jav4Pwv55G2bshReQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8AK_jRxHKLUejpS9pg7ytELfV5X-Oa9eH1w&s",
  "https://zira.uz/wp-content/uploads/2017/08/granulatedsugar.jpg",
  "https://snpk.in.ua/content/images/45/47739455517795.jpg",
  "https://static.tildacdn.com/tild3732-3465-4761-b835-393738643035/yarovaya-pshenitsa.jpg",
  "https://ambar-farm.ru/upload/iblock/b7d/5x2ta9m16n35ezscxhqlf39yhuh0y9iq.jpg",
  "https://media.istockphoto.com/id/148088874/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%BD%D0%B0%D1%8F-%D1%81%D0%B2%D1%91%D0%BA%D0%BB%D0%B0.jpg?s=612x612&w=0&k=20&c=lQPk6GQi3iLwiDcJZK-QB2D0GE9NnjySBqZM-R0SaHU=",
  "https://oleoscope.com/wp-content/uploads/2025/03/d12799d1055e.jpeg",
  "https://expert-agro.ru/wp-content/uploads/2022/10/oves-web1-e1674463190979.jpg"
];

const WHATSAPP_NUMBER = "0507221208";

const Products = ({ t }) => {
  // Используем два разных состояния, чтобы открытие карточки в одной секции не открывало другую
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    const message = `${t.waMessage} ${product.title}, цена: ${product.price}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="page-container">
      {/* SECTION 1 - ТВОЙ ОРИГИНАЛЬНЫЙ КОД */}
      <h1 className="page-title">{t.productsPageTitle}</h1>
      <h5>{t.clickHint}</h5>

      <div className="card-container">
        {t.productsList.map((product, index) => (
          <div 
            key={index} 
            className="product-card" 
            onClick={() => setSelectedProductIndex(selectedProductIndex === index ? null : index)}
          >
            <div 
              className="product-image" 
              style={{ backgroundImage: `url(${productImages[index]})` }} 
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.desc}</p>

            {selectedProductIndex === index && (
              <div className="details-area">
                <p className="product-price">{product.price}</p>
                <button className="order-button" onClick={(e) => handleAddToCart(e, product)}>
                  {t.orderBtn}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

       {/* SECTION 2 - SEEDS (3-COLUMN GRID) */}
      <h2 className="section-title" style={{ marginTop: '80px', textAlign: 'center', color: '#2d5a27' }}>
        {t.seedsSectionTitle}
      </h2>
      
      {/* CSS Grid for 3 Columns */}
      <div className="seeds-catalog-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Auto-responsive
        gap: '20px', 
        padding: '30px 0' 
      }}>
        {t.seedsList && t.seedsList.map((seed, index) => (
          <div key={index} style={{ 
            background: '#fff', 
            borderRadius: '12px', 
            padding: '20px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            borderTop: '4px solid #2d5a27', // Top border accent
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#2d5a27' }}>{seed.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#555', margin: '0 0 15px 0', lineHeight: '1.5' }}>
                {seed.desc}
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '15px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>{seed.price}</span>
              <button 
                className="order-button"
                onClick={(e) => handleAddToCart(e, seed)}
                style={{ 
                   padding: '8px 16px', 
                   fontSize: '0.85rem',
                   margin: 0 // Resetting margins for the grid
                }}
              >
                {t.orderBtn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Products;
