import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top bg-dark">
        <div className="container-fluid d-flex align-items-center justify-content-between mt-2 mb-2">

          {/* Logo on the left */}
          <div>
            <Link to="/" className="navbar-brand">
              <span className='logo-primary'>JOB</span>
              <span className='logo-secondary'>LOGGER.</span>
            </Link>
          </div>

          {/* Links on the right */}
          <div className="nav">
            <Link to="/" className="nav-link px-3 text-white">Home</Link>
            <Link to="/register" className="nav-link px-3 text-white">Sign Up</Link>
            <Link to="/login" className="nav-link px-3 text-white">Sign In</Link>
          </div>

        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div style={{ height: '60px' }}></div>
    </>
  );
};

export default Navbar;