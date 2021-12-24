import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// import the style
import "./Navbar.css";

export default function Navbar() {
  const { color } = useContext(ThemeContext);
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Recepified</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
