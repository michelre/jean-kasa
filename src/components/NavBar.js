import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
   <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="about">A Propos</NavLink>
        </nav>
  )
}
