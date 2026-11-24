import { Link } from "react-router-dom";
import { SHOP } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {SHOP.name}</span>
        <Link to="/privacy-policy">Privacy policy</Link>
      </div>
    </footer>
  );
}
