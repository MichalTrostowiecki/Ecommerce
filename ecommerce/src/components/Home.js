import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
      <h1>Home content</h1>
    </div>
  );
}
