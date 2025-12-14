import React, { useState } from "react";
import { registerUser, loginUser } from "../services/api";

export default function AuthPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await loginUser(form);
        alert(res.message);
      } else {
        const res = await registerUser(form);
        alert(res.message);
      }
    } catch (err) {
      alert(err.message || "Error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {!isLogin && <input type="text" name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded" required />}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2 rounded" required />
        <button type="submit" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-green-500 transition">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <p className="mt-2 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span className="text-blue-600 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Signup" : "Login"}
        </span>
      </p>
    </div>
  );
}
