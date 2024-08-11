import React from 'react';

function HighlightedProduct({ name, description, image }) {
  return (
    <div className="highlighted-product p-4 border rounded shadow-lg">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <h2 className="text-2xl font-bold mt-2">{name}</h2>
      <p className="mt-2">{description}</p>
      <a href="/product-details" className="text-blue-500 mt-4 block">Read More</a>
    </div>
  );
}

export default HighlightedProduct;
