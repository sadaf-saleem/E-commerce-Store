import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition duration-300 bg-white dark:bg-gray-700">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
      <p className="font-bold mt-2 text-gray-900 dark:text-white">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full bg-gray-600 text-white py-2 rounded hover:bg-green-600  transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
