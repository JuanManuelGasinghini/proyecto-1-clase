import './navBar.css'
import Numero1 from "../../assets/img/numero1.png"
const NavBar = () => {

    return(
        <div>
            <img src={Numero1} alt="" />
            <h2 className='apellido'>NavBar</h2>
            <ul className='Termo'>
                <li className='Guante'>1</li>
                <li className='Guante'>2</li>
                <li className='Guante'>6</li>
            </ul>
            </div>
    )
}

export default NavBar;