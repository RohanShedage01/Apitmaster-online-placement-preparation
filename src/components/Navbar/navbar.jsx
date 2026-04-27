import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Triangle, Menu, X } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-light">
      <div className="container nav-container-light">

        {/* Logo */}
        <Link to="/" className="nav-brand">
          <div className="brand-logo-container">
            <Triangle className="brand-icon" size={28} fill="url(#gradient-brand)" />
            <svg width="0" height="0">
              <linearGradient id="gradient-brand" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#6b46ff" offset="0%" />
                <stop stopColor="#4aa2ff" offset="100%" />
              </linearGradient>
            </svg>
          </div>

          <div className="brand-text-container">
            <span className="brand-title">Aptimaster</span>
            <span className="brand-subtitle">Online Placement Preparation</span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-menu-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>

          {/* Center Links */}
          <ul className="nav-links-center">
            <li>
              <Link to="/" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/dashboard" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="nav-actions-right">
            <Link to="/login" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>
              Login
            </Link>

            <Link to="/signup" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;