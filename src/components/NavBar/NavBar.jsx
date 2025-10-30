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
          <Link to="/category/teclados" className="category" >Teclados</Link>
        </li>
        <li>
          <Link to="/category/mouse" className="category" >Mouse</Link>
        </li>
        <li>
          <Link to="/category/auriculares" className="category" >Auriculares</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar