import React, { useState } from 'react';

// Product component
const Product = ({ id, name, price, image, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
export default Product;