import React from "react";
import "./News.css";

function News() {
  return (
    <section className="new section" id="new">
      <div className="new-container container grid">
        <div className="new-data">
          <h2 className="section-data">
            NEW PLANTS FOR <br /> YOUR HOME
          </h2>
          <p className="new-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            commodi voluptatum eum sit blanditiis maxime ducimus soluta tempore
            accusamus quam?
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
  );
}

export default News;
