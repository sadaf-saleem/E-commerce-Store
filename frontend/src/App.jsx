import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage"; 
import AuthPage from "./pages/AuthPage";
import CheckoutPage from "./pages/CheckoutPage"; 

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-slate-900 dark:text-white">
        <Navbar cartCount={cart.length} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
