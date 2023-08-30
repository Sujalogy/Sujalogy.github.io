import { Link } from "react-router-dom";
import "../../public/SASS/Pages/navbar.css";
function Navbar() {
  return (
    <>
      <nav id="nav-menu">
        <h2>Sujal Singh Thakur</h2>
        <ul>
          <li>
            <Link className="nav-link home" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link about" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link skills" to={"/skills"}>
              Skills
            </Link>
          </li>
          <li>
            <Link className="nav-link projects" to={"/projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-link contact" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <button className="nav-link resume">Resume</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
