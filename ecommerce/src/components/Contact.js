import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <Link to="/about">About Us</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
