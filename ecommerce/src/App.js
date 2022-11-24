import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Fetch from "./components/Fetch";
import React from "react";
function App() {
  const [allProducts, setAllProducts] = React.useState([]);

  return (
    <div className="app--container">
      <Fetch allProducts={allProducts} setAllProducts={setAllProducts} />
      <Header />
      <Routes>
        <Route path="*" element={<Home {...allProducts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
