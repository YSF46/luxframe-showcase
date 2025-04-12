import React from 'react';
import Card from '../components/Card';

const products = [
  { id: 1, name: 'Cadre Clé Or', image: '/images/key1.jpg', price: '1200€' },
  { id: 2, name: 'Cadre Clé Argent', image: '/images/key2.jpg', price: '950€' },
  { id: 3, name: 'Cadre Clé Platine', image: '/images/key3.jpg', price: '2500€' },
];

const HomePage = () => {
  return (
    <div>
      <h1>LuxFrame - Objets d'Art</h1>
      <div className="container">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;