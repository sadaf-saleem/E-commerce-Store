import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="font-bold text-xl">MyStore</Link>

      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/courses" className="hover:text-gray-300">Courses</Link>
        <Link to="/auth" className="hover:text-gray-300">Login/Signup</Link>

        <div className="bg-gray-600 px-2 py-1 rounded">Cart: {cartCount}</div>
      </div>
    </nav>
  );
}
