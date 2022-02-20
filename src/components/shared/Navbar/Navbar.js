import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = ({ isActiveInNav, setIsActiveInNav }) => {
  return (
    <nav>
      <ul>
        <li
          className={isActiveInNav === "characters" ? "active" : ""}
          onClick={() => setIsActiveInNav("characters")}
        >
          <Link to="/">Personnages</Link>
        </li>

        <li
          className={isActiveInNav === "comics" ? "active" : ""}
          onClick={() => setIsActiveInNav("comics")}
        >
          <Link to="/comics">Comics</Link>
        </li>

        <li
          className={isActiveInNav === "favorites" ? "active" : ""}
          onClick={() => setIsActiveInNav("favorites")}
        >
          <Link to="/favorites">Favoris</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
