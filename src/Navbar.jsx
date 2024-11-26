import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/soda">Soda</NavLink>
        <NavLink to="/chocolate">Chocolate</NavLink>
    </nav>
  )
}

export default Navbar