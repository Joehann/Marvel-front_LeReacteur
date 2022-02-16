import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Personnages</Link>
        </li>

        <li>
          <Link to="/comics">Comics</Link>
        </li>

        <li>
          <Link to="">Favoris</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
