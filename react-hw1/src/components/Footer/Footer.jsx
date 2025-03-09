import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <a href="#" className="footer-logo">
            <i className="ri-cactus-line"></i>
            Cactus
          </a>

          <p className="footer-description">
            Choose the best <br />
            plants for your home
          </p>
        </div>
        <div className="footer-content grid">
          <div>
            <h3 className="footer-title">COMPANY</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  PRODUCTS
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FEATURES
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">INFORMATION</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  BLOG & NEWS
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  CONTACTS US
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="footer-copy">copyright ©</span>
    </footer>
  );
}

export default Footer;
