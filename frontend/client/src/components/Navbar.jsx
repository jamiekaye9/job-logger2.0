import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <div className="container-fluid">

          {/* Logo on the left */}
          <Link to="/" className="navbar-brand">
            <span className='logo-primary text-light fs-2'>JOB</span>
            <span className='logo-secondary text-info fs-2'>LOGGER.</span>
          </Link>

          {/* Hamburger Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible links */}
          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" onClick={() => setExpanded(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-white" onClick={() => setExpanded(false)}>Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white" onClick={() => setExpanded(false)}>Sign In</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div style={{ height: '60px' }}></div>
    </>
  );
};

export default Navbar;