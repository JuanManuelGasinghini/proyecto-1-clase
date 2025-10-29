//import {FaCartShoping} from 'react-icons/fa6'
import Carrito from "../../assets/img/Carritopng.png";
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img className="carrito" src={Carrito} alt="icono de carrito de compras" />
        <p className="numeros">2</p>
    </div>
  )
}

export default CartWidget