import React from "react";
import "./Home.css";

function Home() {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit
            sit nemo libero. Corporis vitae, vel neque quasi sunt animi!
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
  );
}

export default Home;
