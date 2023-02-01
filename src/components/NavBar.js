import "./Navbar.css"
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="navbar-text">Accueil</NavLink>
      <NavLink to="about">A Propos</NavLink>
    </nav>
  )
}
