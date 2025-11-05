import ItemCount from "../ItemCount/ItemCount.jsx";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext.jsx";
import "./ItemDetail.css"

const ItemDetail = ( {product}) => {

    const { addProduct } = useContext(cartContext);

    const addToCart = (count) => {
    const newProduct = {...product, count, quantity : count };
 addProduct(newProduct);
    }
    return (
        <div className="itemDetail">
            <div className="itemDetailImageContent">
            <img src={product.image} className="itemDetailImage" alt="" />
            </div>
            <div className="itemDData">
            <h2 className="itemDName">{product.name}</h2>
            <h2 className="itemDescription">{product.description}</h2>
            <h3 className="itemCPrecio">Precio: {product.price}</h3>
            <ItemCount stock={product.stock} addToCart={addToCart} />
            </div>
        </div>
    )
}
export default ItemDetail