import React from 'react';
import logo from "../PNClogo.svg.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'black' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>
            Full Stack Banking Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
              <li className="nav-item">
                <img 
                  src={logo} // Replace with the actual path to your image
                  alt="Logo" 
                  style={{ width: '120px', height: '40px' }} 
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
