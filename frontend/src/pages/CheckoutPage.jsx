import React from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/api";

export default function CheckoutPage({ cart, setCart }) {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const handlePlaceOrder = async () => {
    const orderData = {
      items: cart.map(({ _id, name, price, quantity }) => ({ productId: _id, name, price, quantity })),
      total: totalPrice,
      userEmail: "guest@example.com", // change if using auth
    };

    const res = await createOrder(orderData);
    alert(res.message);

    if (res.order) {
      setCart([]); // clear cart after order
      navigate("/"); // go to home page
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between">
                {item.name} x {item.quantity} - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className="font-bold mb-4">Total: ${totalPrice}</p>
          <button
            onClick={handlePlaceOrder}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
