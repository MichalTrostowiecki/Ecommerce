import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header--container">
      <div className="header--name">
        <h1>My shop</h1>
      </div>
      <div className="header--links">
        <Link className="link--header" to="/home">
          Home
        </Link>
        <Link className="link--header" to="/about">
          About
        </Link>

        <Link className="link--header" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
