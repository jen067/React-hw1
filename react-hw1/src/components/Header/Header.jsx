import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          <i className="ri-cactus-line"></i>Cactus
        </a>
        <div className="nav-menu">
          <ul className="nav-lists">
            <li className="list-item">
              <a href="#">Home</a>
            </li>
            <li className="list-item">
              <a href="#">News</a>
            </li>
            <li className="list-item">
              <a href="#">Care</a>
            </li>
          </ul>
          <div className="nav-cls-btn">
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className="nav-actions">
          <i className="ri-user-line"></i>
          <i className="ri-shopping-cart-line"></i>
          <div className="nav-open-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
