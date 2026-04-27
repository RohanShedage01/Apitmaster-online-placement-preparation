import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Triangle, Menu, X } from 'lucide-react';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsDropdownOpen(false);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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
              <Link to="/" className="nav-link-item active" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>

            {/* Categories Dropdown */}
            <li>
              <div className="nav-link-item with-dropdown" onClick={toggleDropdown}>
                Categories <ChevronDown size={16} />

                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/aptitude" className="dropdown-item">Aptitude</Link>
                    <Link to="/reasoning" className="dropdown-item">Reasoning</Link>
                    <Link to="/verbal" className="dropdown-item">Verbal Ability</Link>
                    <Link to="/coding" className="dropdown-item">Coding</Link>
                  </div>
                )}
              </div>
            </li>

            <li>
              <Link to="/dashboard" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>
                Dashboard
              </Link>
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="nav-actions-right">
            <Link to="/login" className="btn btn-outline nav-btn">
              Login
            </Link>

            <Link to="/signup" className="btn btn-primary nav-btn">
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;