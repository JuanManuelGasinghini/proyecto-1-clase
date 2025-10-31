import "./ItemDetail.css"
const ItemDetail = ( {product}) => {
    return (
        <div className="item-detail">
            <div className="item-detail-image-content">
            <img src={product.image} className="item-detail-image" alt="" />
            </div>
            <div className="itemD-data">
            <h2 className="itemD-name">{product.name}</h2>
            <h2 className="itemD-description">{product.description}</h2>
            <p className="itemC-precio">Precio {product.price}</p>
            </div>
        </div>
    )
}
export default ItemDetail