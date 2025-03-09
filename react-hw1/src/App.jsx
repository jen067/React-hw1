import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Care from "./components/Care/Care";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="main">
        {/* Home */}
        <Home />
        {/* News */}
        <News />
        {/* Care */}
        <Care />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
