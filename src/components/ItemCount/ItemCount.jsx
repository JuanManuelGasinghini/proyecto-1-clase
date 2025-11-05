import {useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRestar = () => {
    if(count > 1) {
    setCount(count - 1);
  }
  }

  const handleClickSumar = () => {
if (count < stock){
    setCount(count + 1);
  }
  }

  return (
    <div className='PanelDeCompra'>
       <button onClick={handleClickRestar} className='PanelRestar'>-</button>
       <p className='PanelCantidad'>{count}</p>
       <button onClick={handleClickSumar} className='PanelSumar'>+</button>

       <button onClick={ () => addToCart(count) } className='PanelAdd'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount