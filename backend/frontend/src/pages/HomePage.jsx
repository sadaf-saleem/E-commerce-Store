import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";

export default function HomePage({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    const existing = cart.find((p) => p._id === product._id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((p) => p._id !== productId));
  };

  const totalPrice = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-8 p-4 border rounded bg-gray-100 dark:bg-gray-800">
          <h2 className="font-bold text-xl mb-2">Cart Items:</h2>
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} x {item.quantity} - ${item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Total: ${totalPrice}</p>

          {/* Checkout button */}
          <button
            onClick={() => navigate("/checkout")}
            className="bg-gray-600  text-white px-4 py-2 rounded hover:bg-green-500 transition mt-4"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
