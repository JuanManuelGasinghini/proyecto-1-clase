import Carrito from "../../assets/img/Carrito.png";
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="cart-widget">
        <img src={Carrito} alt="" className="carrito"/>
        <p className="numeros">2</p>
    </div>
  )
}

export default CartWidget