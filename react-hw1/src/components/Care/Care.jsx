import React from "react";
import "./Care.css";

function Care() {
  return (
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
  );
}

export default Care;
