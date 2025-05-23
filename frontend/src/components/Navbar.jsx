import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg border-b border-gray-800' : 'bg-gray-900/90 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
              ShopNexa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              {/* <Link
                to="/products"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Products
              </Link> */}
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4 ml-4">
              {user && (
                <Link
                  to="/cart"
                  className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <ShoppingCart size={20} />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {cart.length}
                    </span>
                  )}
                </Link>
              )}

              {isAdmin && (
                <Link
                  to="/secret-dashboard"
                  className="flex items-center space-x-1 bg-gradient-to-r from-black to-black text-white px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:opacity-90"
                >
                  <Lock size={16} />
                  <span>Dashboard</span>
                </Link>
              )}

              {user ? (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/account"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <User size={20} />
                    <span className="hidden lg:inline">{user.name.split(' ')[0]}</span>
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <LogOut size={20} />
                    <span className="hidden lg:inline">Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <Link
                    to="/login"
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-1.5 rounded-md border border-gray-700 hover:border-gray-600"
                  >
                    <LogIn size={16} />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center space-x-1 bg-gradient-to-r from-black to-black text-white px-3 py-1.5 rounded-md font-medium transition-all duration-200 hover:opacity-90"
                  >
                    <UserPlus size={16} />
                    <span>Sign Up</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden menu-button p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden mobile-menu ${isOpen ? 'block' : 'hidden'} bg-gray-900 border-t border-gray-800`}>
        <div className="container mx-auto px-4 py-3 space-y-4">
          <Link
            to="/"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {/* <Link
            to="/products"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link> */}
          <Link
            to="/about"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {user && (
            <Link
              to="/cart"
              className="flex items-center py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart className="mr-2" size={20} />
              Cart {cart.length > 0 && `(${cart.length})`}
            </Link>
          )}

          {isAdmin && (
            <Link
              to="/secret-dashboard"
              className="flex items-center py-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Lock className="mr-2" size={20} />
              Dashboard
            </Link>
          )}

          {user ? (
            <>
              <Link
                to="/account"
                className="flex items-center py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="mr-2" size={20} />
                My Account
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="flex items-center py-2 text-gray-300 hover:text-white transition-colors w-full"
              >
                <LogOut className="mr-2" size={20} />
                Logout
              </button>
            </>
          ) : (
            <div className="pt-2 space-y-3">
              <Link
                to="/login"
                className="block w-full text-center py-2 px-4 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block w-full text-center py-2 px-4 bg-gradient-to-r from-black to-black text-white rounded-md font-medium transition-colors hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;