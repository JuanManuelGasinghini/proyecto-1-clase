import LogoFinal from "../../assets/img/LogoFinal.png";
import CartWidget from "../CartWidget/CartWidget";
import './navBar.css'

const NavBar = () => {

    return(
        <nav className="navbar">
                       <div className="BarraInicialNav">
                       <div><img src={LogoFinal} alt="" className="logo"/></div> 
            </div>
            <div className="nav-links">
                       <ul className='ListaDeEntrada'>
                <li className='Cañerias'>Cañerias</li>
                <li className='Griferías'>Griferías</li>
                <li className='Accesorios'>Accesorios</li>
            </ul>
            </div>
    
            <CartWidget />
            </nav>
    )
}

export default NavBar;