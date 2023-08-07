import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Product/pro.css'; // Import your CSS file

import img1 from "../Product/img/product-1.jpg";
import img2 from "../Product/img/prd-2.jpg";
import img3 from "../Product/img/pro-3.jpg";
import img4 from "../Product/img/pro-4.jpg";
import img5 from "../Product/img/pr-5.jpg";
import img6 from "../Product/img/pro-6.jpg";
import img7 from "../Product/img/pro-7.jpg";

const products = [
  {
    name: "Kidgdoc RAS",
    image: img1,
    description: "Help You to build immunity of your children's.",
    //price: "$10",
  },
  {
    name: "Coughdoc pravahi kwath",
    image: img2,
    description: " its potent therapeutic properties that help alleviate respiratory discomfort and promote overall lung health.",
    //price: "$15",
  },
  {
    name: "Thunder Blast RAS",
    image: img3,
    description: "Activate your strength ",
   // price: "$20",
  },
  {
    name: "EXE Golden Milk Powder ",
    image: img4,
    description: "EXE Golden Milk Powder is a premium herbal blend that offers a convenient and delicious way to enjoy the numerous health benefits of traditional Ayurvedic Golden Milk.",
    //price: "$25",
  },
  {
    name: "OBEODOC RAS",
    image: img5,
    description: "STRESSED WITH YOUR OBESITY",
    //price: "$30",
  },
  {
    name: "PANCH TULSI DROP",
    image: img6,
    description: "Well Focused on Health ",
    //price: "$35",
  },
  {
    name: "EXE PANCH TULSI OIL",
    image: img7,
    description: "Made with combination of 5 type tulsi ",
    //price: "$40",
  },
];

const ProductSection = () => {
  // Slider settings based on screen size
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: 3 products on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2, // 2 products on tablet
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // 1 product on mobile
        },
      },
    ],
  };

  const handlePurchase = (productName) => {
    const message = `I want to purchase ${productName}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=+918269761111&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };

  return (
    <section className="product-section">
     
      <Slider {...settings} className="product-slider">
        {products.map((product) => (
          <div key={product.name} className="product-slider-card">
            <img src={product.image} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
        { /* <p className="product-price">Price: {product.price}</p> */}
            <button className="purchase-btn" onClick={() => handlePurchase(product.name)}>Purchase</button>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSection;
