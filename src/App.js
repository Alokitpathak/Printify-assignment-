import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Content from "./components/content";
import Productsection from "./components/Productsection";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Content />
      <Productsection />
      <Footer />
    </div>
  );
}

export default App;
