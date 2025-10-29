import LogoFinal from "../../assets/img/LogoFinal.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './navBar.css'

const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="TodoElNav">
                <div className="BarraInicialNav">
            <Link to="/" className="logo">
            <img src={LogoFinal} alt="" className="logo" />
            </Link>
                </div>
                <div className="nav-links">
                    <ul className='ListaDeEntrada'>
                        <li className='Cañerias'>
<Link to="/category/teclados" className="logo">Teclados</Link>
                            </li>
                        <li className='Griferías'>
                            <Link to="/category/mouse" className="logo">Mouses</Link>
                        </li>
                        <li className='Accesorios'>
                            <Link to="/category/auriculares" className="logo">Auriculares</Link>
                        </li>
                    </ul>
</div>
<div className="CartWidgetEnNavBar">
                <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar