import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";

export default function Header() {
  return (
    <div>
      <div>
        <h1>My Shop</h1>
      </div>

      <Link to={"/about"}>About Us</Link>
      <Link>Contact Us</Link>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Footer />} />
      </Routes>

      <h1>Header</h1>
    </div>
  );
}
