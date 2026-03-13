import React, { useState } from "react";

const products = [
     {
    title: "Мука Астык",
    description: "Мука Астык — это злаковый продукт питания, получаемый в результате перемалывания качественных зёрен пшеницы.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7kw6Z--bribOWCjxpQV6S5gnhtFlNdVNbg&s",
    price: "100 сом",
    whatsapp: "0507221208"
  },
  {
    title: "Сахар",
    description: "",
    imageUrl: "https://zira.uz/wp-content/uploads/2017/08/granulatedsugar.jpg",
    price: "32 сом",
    whatsapp: "0507221208"
  },
 
  {
    title: "Озимые Сорта Пшеницы",
    description: "Алексеич, Безостая 100, Тимирязевка 150, Баграт, Есаул, Еланчик",
    imageUrl: "https://snpk.in.ua/content/images/45/47739455517795.jpg",
    price: "32 сом",
    whatsapp: "0507221208"
  },
  {
    title: "Яровые Сорта Пшеницы",
    description: "Ликамеро, Тризо, Дарья",
    imageUrl: "https://static.tildacdn.com/tild3732-3465-4761-b835-393738643035/yarovaya-pshenitsa.jpg",
    price: "32 сом",
    whatsapp: "0507221208"
  },
  {
    title: "Яровой Ячмень",
    description: "Эксплоер, Калькюль, Маргрет, Вакула",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZZYVGAM6DnsUtwuc3jav4Pwv55G2bshReQ&s",
    price: "21 сом",
    whatsapp: "0507221208"
  },
  {
    title: "Кукуруза",
    description: "Для кормления животных",
    imageUrl: "https://ambar-farm.ru/upload/iblock/b7d/5x2ta9m16n35ezscxhqlf39yhuh0y9iq.jpg",
    price: "23 сом",
    whatsapp: "0507221208"
  },
  {
    title: "Свекла сахарная",
    description: "Сахарная",
    imageUrl: "https://media.istockphoto.com/id/148088874/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%BD%D0%B0%D1%8F-%D1%81%D0%B2%D1%91%D0%BA%D0%BB%D0%B0.jpg?s=612x612&w=0&k=20&c=lQPk6GQi3iLwiDcJZK-QB2D0GE9NnjySBqZM-R0SaHU=",
    price: "14 сом",
    whatsapp: "0507221208"
  },
  {
    title: "Свекла",
    description: "Для употребления",
    imageUrl: "https://cdn.botanichka.ru/wp-content/uploads/2016/03/Beetroot.jpg",
    price: "40 сом",
    whatsapp: "0507221208"
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (product) => {
    setSelectedProduct(selectedProduct === product ? null : product);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Чтобы не закрывалась карточка при клике на кнопку
    const message = `Здравствуйте, хочу заказать ${product.title}, цена: ${product.price}.`;
    window.open(`https://wa.me/${product.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Наша продукция</h1>
      <h5>Нажми на карточку что бы узнать больше</h5>

      <div className="card-container">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="product-card" 
            onClick={() => handleClick(product)}
          >
            <div 
              className="product-image" 
              style={{ backgroundImage: `url(${product.imageUrl})` }} 
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>

            {selectedProduct === product && (
              <div className="details-area">
                <p className="product-price">{product.price}</p>
                <button 
                  className="order-button" 
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Заказать
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
