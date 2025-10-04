import LogoFinal from "../../assets/img/LogoFinal.png";
import CartWidget from "../CartWidget/CartWidget";
import './navBar.css'

const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="TodoElNav">
                <div className="BarraInicialNav">
                    <div className="logo"><img src={LogoFinal} alt="" className="logo" /></div>
                </div>
                <div className="nav-links">
                    <ul className='ListaDeEntrada'>
                        <li className='Cañerias'>Cañerias</li>
                        <li className='Griferías'>Griferías</li>
                        <li className='Accesorios'>Accesorios</li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;