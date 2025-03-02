import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
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

      {/* Main */}
      <main className="main">
        {/* Home */}
        <section className="home section" id="home">
          <div className="home-container container grid">
            <img src="/img/home-cactus.png" alt="" className="home-img" />

            <div className="home-data">
              <h1 className="home-title">
                ORNAMETAL
                <br /> <span>PLANTS </span>
                For
                <br />
                Your Home
              </h1>

              <p className="home-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                odit sit nemo libero. Corporis vitae, vel neque quasi sunt
                animi!
              </p>

              <div className="home-btns">
                <a href="#" className="left-btn">
                  <span>
                    <i className="ri-arrow-right-line"></i>
                  </span>
                  GO TO SHOP
                </a>
                <a href="#" className="right-btn">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* News */}
        <section className="new section" id="new">
          <div className="new-container container grid">
            <div className="new-data">
              <h2 className="section-data">
                NEW PLANTS FOR <br /> YOUR HOME
              </h2>
              <p className="new-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                commodi voluptatum eum sit blanditiis maxime ducimus soluta
                tempore accusamus quam?
              </p>
            </div>
            <div className="new-content grid">
              <article className="new-card">
                <img src="/img/new-cactus-1.png" alt="" className="new-img" />
                <h2 className="new-title">Gymnocalycium Cactus</h2>
              </article>

              <article className="new-card">
                <img src="/img/new-cactus-2.png" alt="" className="new-img" />
                <h2 className="new-title">Lily Paf Succulent</h2>
              </article>

              <article className="new-card">
                <img src="/img/new-cactus-3.png" alt="" className="new-img" />
                <h2 className="new-title">Rebutia Cactus</h2>
              </article>
            </div>
          </div>
        </section>

        {/* Care */}
        <section className="care section" id="care">
          <h2 className="section-title">
            CARE AND HEALTH FOR <br />
            YOUR CACTUS
          </h2>
          <div className="care-container container grid">
            <img src="/img/care-cactus.png" alt="" className="care-img" />

            <ul className="care-list">
              <li className="care-item">
                <i className="ri-checkbox-fill"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti, vel.
                </p>
              </li>
              <li className="care-item">
                <i class="ri-checkbox-fill"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti, vel.
                </p>
              </li>
              <li className="care-item">
                <i class="ri-checkbox-fill"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti, vel.
                </p>
              </li>
              <li className="care-item">
                <i class="ri-checkbox-fill"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti, vel.
                </p>
              </li>
              <li className="care-item">
                <i class="ri-checkbox-fill"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti, vel.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </>
  );
}

export default App;
