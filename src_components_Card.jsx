import React from 'react';
import './Card.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default Card;