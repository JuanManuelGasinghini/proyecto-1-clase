import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";
import "./Cart.css"

const Cart = () => {
  const { cart, deleteProductById, totalPrice, deleteCart } = useContext(cartContext);

  if (cart.length === 0) {
  return(
    <div className="CarritoVacio">
      <h2 className="CarritoVacioTitulo">No hay productos en el carrito</h2>
      <Link to="/" className="VerProducto">Ver Productos</Link>
    </div>
  )
}


  return (
    <div className="VistaDelCarrito">
      {
        cart.map((productCart) => (
          <div key={productCart.id} className="VistaDelCarritoCard">
            <img src={productCart.image} alt="" />
            <div className="VistaDelCarritoData">
<p>{productCart.name}</p>
<p>precio c/u : {productCart.price} </p>
<p>cantidad: {productCart.quantity}</p>
<p>precio parcial: ${productCart.price * productCart.quantity}</p>
          <button onClick={() => deleteProductById(productCart.id)} className="EliminarVsta">Eliminar
            <BsFillTrash3Fill />
          </button>
          </div>
          </div>

        ))
      }
      <div className="CierreDelCarrito">
      <h2 className="CPrecioTotal">Precio Total: {totalPrice()}</h2>
      <Link to="/checkout" className="BotonDeCierre">Finalizar Compra</Link>
      <button onClick={deleteCart} className="BotonDeCierre">Vaciar Carrito</button>
      </div>
    </div>
  )
}

export default Cart