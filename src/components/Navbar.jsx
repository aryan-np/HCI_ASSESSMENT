import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ['Models', 'Offers', 'Featured', 'Favourites', 'About', 'Contact'];

  return (
    <nav className="bg-black text-white shadow-md px-6 md:px-20 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center z-20">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-sm font-semibold tracking-wide">
          {navItems.map((item, idx) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <li key={idx}>
                <Link
                  to={path}
                  className={`relative group overflow-hidden ${
                    isActive ? 'text-gold' : ''
                  }`}
                >
                  <span className="transition-colors duration-300 group-hover:text-gold">
                    {item}
                  </span>
                  <div
                    className={`h-0.5 bg-gold transition-transform origin-left duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Profile Icon + Hamburger */}
        <div className="flex items-center space-x-4 z-20">
          {/* Profile (always visible) */}
          <Link
            to="/profile"
            className="text-gold text-3xl hover:scale-110 transition-transform duration-300"
            title="Profile"
          >
            <FaUserCircle />
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-gold text-3xl focus:outline-none transition-transform duration-300 hover:rotate-90"
            onClick={toggleMenu}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 py-4 px-6 text-base font-semibold">
          {navItems.map((item, idx) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <li key={idx}>
                <Link
                  to={path}
                  onClick={toggleMenu}
                  className={`block transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
          {/* Mobile Profile Link */}
          {/* <li>
            <Link
              to="/profile"
              onClick={toggleMenu}
              className="flex items-center gap-2 transition-colors duration-300 text-white hover:text-gold"
            >
              <FaUserCircle className="text-2xl" />
              Profile
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
