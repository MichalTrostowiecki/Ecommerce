import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Link to="/contact">Contact Us</Link>
      <Link to="/">Home</Link>

      <h1>About Us</h1>
    </div>
  );
}
