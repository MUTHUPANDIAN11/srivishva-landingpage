import { NavLink, Link } from "react-router-dom";
import { SHOP } from "../data.js";

export default function Header() {
  return (
    <header>
      <div className="wrap bar">
        <Link className="logo" to="/">{SHOP.name}</Link>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/privacy-policy">Privacy policy</NavLink>
        </nav>
      </div>
    </header>
  );
}
