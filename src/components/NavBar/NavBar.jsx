import LogoFinal from "../../assets/img/LogoFinal.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={LogoFinal} alt="" />
      </Link>

      <ul className="categories">
        <li>
          <Link to="/category/Cañerias" className="category" >Cañerias</Link>
        </li>
        <li>
          <Link to="/category/Bachas" className="category" >Bachas</Link>
        </li>
        <li>
          <Link to="/category/Accesorios" className="category" >Accesorios</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar