import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Habitat DAO</Link>
        </h1>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/solution" className={location.pathname === '/solution' ? 'active' : ''}>Solution</Link></li>
            <li><Link to="/governance" className={location.pathname === '/governance' ? 'active' : ''}>Governance</Link></li>
            <li><Link to="/tokens" className={location.pathname.startsWith('/tokens') ? 'active' : ''}>Tokens</Link></li>
            <li><Link to="/roadmap" className={location.pathname === '/roadmap' ? 'active' : ''}>Roadmap</Link></li>
            <li><Link to="/impact" className={location.pathname === '/impact' ? 'active' : ''}>Impact</Link></li>
            <li><Link to="/partner" className={location.pathname === '/partner' ? 'active' : ''}>Partner</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;