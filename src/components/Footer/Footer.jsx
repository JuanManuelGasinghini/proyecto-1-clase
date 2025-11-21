import LogoFinal from "../../assets/img/LogoFinal.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <nav className="Footer">
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
        <li>
          <Link to="/category/Piezas" className="category" >Piezas</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Footer