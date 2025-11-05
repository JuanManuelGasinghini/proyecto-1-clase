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
        <div className="item-detail">
            <div className="item-detail-image-content">
            <img src={product.image} className="item-detail-image" alt="" />
            </div>
            <div className="itemD-data">
            <h2 className="itemD-name">{product.name}</h2>
            <h2 className="itemD-description">{product.description}</h2>
            <h3 className="itemC-precio">Precio {product.price}</h3>
            <ItemCount stock={product.stock} addToCart={addToCart} />
            </div>
        </div>
    )
}
export default ItemDetail