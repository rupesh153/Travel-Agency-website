import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar glass">
      <Link to="/" className="logo">
        Travel<span>Go</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/destinations" onClick={closeMenu}>Destinations</NavLink>
        <NavLink to="/packages" onClick={closeMenu}>Packages</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <button className="primary-btn nav-book">
          Book Now
        </button>
      </nav>
    </header>
  );
}

export default Navbar;