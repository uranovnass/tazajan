import React, { useState } from "react";

// Картинки и контакты остаются здесь, так как они не меняются
const productImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZZYVGAM6DnsUtwuc3jav4Pwv55G2bshReQ&s",
  "https://ge.all.biz/img/ge/catalog/4467.jpeg",
  "https://zira.uz/wp-content/uploads/2017/08/granulatedsugar.jpg",
  "https://snpk.in.ua/content/images/45/47739455517795.jpg",
  "https://static.tildacdn.com/tild3732-3465-4761-b835-393738643035/yarovaya-pshenitsa.jpg",
  "https://ambar-farm.ru/upload/iblock/b7d/5x2ta9m16n35ezscxhqlf39yhuh0y9iq.jpg",
  "https://media.istockphoto.com/id/148088874/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%BD%D0%B0%D1%8F-%D1%81%D0%B2%D1%91%D0%BA%D0%BB%D0%B0.jpg?s=612x612&w=0&k=20&c=lQPk6GQi3iLwiDcJZK-QB2D0GE9NnjySBqZM-R0SaHU=",
  "https://cdn.botanichka.ru/wp-content/uploads/2016/03/Beetroot.jpg"
];

const WHATSAPP_NUMBER = "0507221208";

const Products = ({ t }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedProductIndex(selectedProductIndex === index ? null : index);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    const message = `${t.waMessage} ${product.title}, цена: ${product.price}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">{t.productsPageTitle}</h1>
      <h5>{t.clickHint}</h5>

      <div className="card-container">
        {t.productsList.map((product, index) => (
          <div 
            key={index} 
            className="product-card" 
            onClick={() => handleClick(index)}
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
                <button 
                  className="order-button" 
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  {t.orderBtn}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
