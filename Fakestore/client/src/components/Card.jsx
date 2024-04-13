
import React from "react";



// import "App.css";

function Card({ title, image, desc, price }) {
  return (
    <article className="product-card">
      <div className="product-img-container">
        <img src={image} alt={title} className="product-img" />
      </div>
      <div className="product-info-container">
        <h2 className="product-name">{title}</h2>
        <p className="product-desc">{desc}</p>
        <span className="product-price">${price}</span>
        <button className="cart-btn">Add to card</button>
      </div>
    </article>
  );
}

export default Card;
