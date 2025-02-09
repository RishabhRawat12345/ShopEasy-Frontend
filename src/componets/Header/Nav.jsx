import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full p-4 h-24 flex justify-between items-center relative">
      {/* Logo */}
      <img 
        className="h-16 md:h-24" 
        src="https://img.freepik.com/free-vector/flat-design-mobile-store-logo-template_23-2149728782.jpg?semt=ais_hybrid" 
        alt="Mobile Store Logo" 
      />

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/Shop" className="text-purple-400 hover:text-purple-600">Shop</Link>
        <Link to="/Men" className="text-purple-400 hover:text-purple-600">Men</Link>
        <Link to="/Women" className="text-purple-400 hover:text-purple-600">Women</Link>
        <Link to="/Kids" className="text-purple-400 hover:text-purple-600">Kids</Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link to="/Shop" className="text-purple-400 hover:text-purple-600" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/Men" className="text-purple-400 hover:text-purple-600" onClick={() => setMenuOpen(false)}>Men</Link>
          <Link to="/Women" className="text-purple-400 hover:text-purple-600" onClick={() => setMenuOpen(false)}>Women</Link>
          <Link to="/Kids" className="text-purple-400 hover:text-purple-600" onClick={() => setMenuOpen(false)}>Kids</Link>
        </div>
      )}

      {/* Login Button and Cart */}
      <div className='hidden md:flex gap-5'>
        <Link to="/login" className="bg-transparent border-2 border-gray-400 text-gray-400 px-6 py-2 rounded-md hover:bg-gray-100 h-10">
          Login
        </Link>
        <img className="h-10" src="https://cdn-icons-png.freepik.com/256/401/401944.png?semt=ais_hybrid" alt="Cart" />
      </div>
    </nav>
  );
};

export default Navbar;

