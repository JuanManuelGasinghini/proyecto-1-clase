import { BiCart } from 'react-icons/bi';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <BiCart size={24}/>
        <p className="numeros">2</p>
    </div>
  )
}

export default CartWidget