import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
  ]);

  const increasePrice = () => {
    setProducts(products.map(product => ({
      ...product,
      price: product.price + 10
    })));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="mb-2">
            {product.name}: ${product.price}
          </li>
        ))}
      </ul>
      <button 
        onClick={increasePrice} 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Increase Prices
      </button>
    </div>
  );
};

export default ProductList;
