import React, { useState } from "react";
import { Link } from "react-router-dom";

// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <span className="navbar-toggler-icon"></span>

function CategoryBar() {
  //console.log("CategoryBar rendered");

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="catContainer" id="categoryBar">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
        <div className="container ">
          <Link to="/" className="navbar-brand">
            <span>TOSHIBA</span>
          </Link>
          <button
            className={` navbar-toggler `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-label="Toggle navigation"
          >
            Menu
          </button>
          <div
            className={`${
              isNavCollapsed ? "" : "toggle"
            } collapse navbar-collapse bg-dark `}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Breakfast"
                  onClick={handleNavCollapse}
                >
                  Breakfast
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Lunch"
                  onClick={handleNavCollapse}
                >
                  Lunch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Snacks"
                  onClick={handleNavCollapse}
                >
                  Snacks
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Dinner"
                  onClick={handleNavCollapse}
                >
                  Dinner
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Burgers and Beverages"
                  onClick={handleNavCollapse}
                >
                  Burgers and Beverages
                </a>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  More..
                </div>
                <ul className="dropdown-menu navbar-dark bg-dark">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#Pizza"
                      onClick={handleNavCollapse}
                    >
                      Pizza
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#Desserts"
                      onClick={handleNavCollapse}
                    >
                      Desserts
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#Chicken"
                      onClick={handleNavCollapse}
                    >
                      Chicken
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#modal" data-bs-toggle="modal">
                  Coupon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default React.memo(CategoryBar);
