import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='container'>
          <Link to="/" className='navbar-brand'>
            <span className='source-serif text-light fs-2'>JOB</span>
            <span className='source-serif text-info fs-2'>LOGGER.</span>
          </Link>
          <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#nav">
            <div className='navbar-toggler-icon'></div>
          </button>
          <div className='collapse navbar-collapse' id="nav">
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link to="/" className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/register" className='nav-link'>Sign Up</Link>
              </li>
              <li className='nav-item'>
                <Link to="/login" className='nav-link'>Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar;