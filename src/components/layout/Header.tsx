import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Laptop } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-around">
          <Link to="/" className="flex items-center text-primary-600 font-bold text-xl">
            <Laptop className="mr-2" size={24} />
            <span>Muhammad Saim</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
            >
              Portfolio
            </NavLink>
            {/* <NavLink 
              to="/testimonials" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
            >
              Blog
            </NavLink> */}
            <NavLink 
              to="/contact" 
              className="btn-primary"
            >
              Contact Me
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 rounded-md focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium text-lg ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium text-lg ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `font-medium text-lg ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `font-medium text-lg ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
              onClick={toggleMenu}
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => 
                `font-medium text-lg ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `font-medium text-lg ${
                  isActive 
                    ? 'text-primary-600' 
                    : 'text-gray-800 hover:text-primary-600'
                }`
              }
              onClick={toggleMenu}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className="btn-primary w-full text-center"
              onClick={toggleMenu}
            >
              Contact Me
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;