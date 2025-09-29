import LogoFinal from "../../assets/img/LogoFinal.jpg";
import CartWidget from "../CartWidget/CartWidget";
import Numero1 from "../../assets/img/numero1.png"
import './navBar.css'

const NavBar = () => {

    return(
        <nav className="navbar">
           <div><h2 className='apellido'>NavBar</h2></div> 
            <div>
            <ul className='Termo'>
                <li className='Guante'>1</li>
                <li className='Guante'>2</li>
                <li className='Guante'>6</li>
            </ul>
            </div>
                     <div className="carritoConNumero"> <div><img src={LogoFinal} alt="" className="logo"/></div> 
          <div> <img src={Numero1} alt="" className="numero1"/></div> </div>
            <CartWidget />
            
            </nav>
    )
}

export default NavBar;