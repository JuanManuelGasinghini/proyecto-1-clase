import { BiCart } from 'react-icons/bi';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { Link} from "react-router-dom";
import './CartWidget.css'

const CartWidget = () => {
const { totalQuantity } = useContext(cartContext);
const quantity = totalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      <BiCart className='carrito' />
        <p className="numeros">{quantity !== 0 && quantity }</p>
    </Link>
  )
}

export default CartWidget