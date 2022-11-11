import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom';
import img from '../images/logo.png'

function Navbar() {
  //console.log("navbar rendered");

  return (
    <>
      <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
        <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">

          <Link to="/" className="navbar-brand">
            <span className="nav-title">TOSHI</span><span className="nav-title-to">BA</span>
          </Link>
          <div style={{ height: 60 }}></div>
        </nav>

      </div>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="about-hotel">
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="about-hotel">who are we?</h2>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body px-3">
          <hr />
          <div>
            Our technology platform connects customers, restaurant partners and
            delivery partners, serving their multiple needs. Customers use our platform to search and
            discover their favourite food items, read and write customer generated reviews, offer various deals on food items,
            order food delivery and make payments while dining-out at restaurants. We provide high quality food items delivered within short time.
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}

export default React.memo(Navbar)
