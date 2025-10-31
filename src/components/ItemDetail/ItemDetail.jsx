const ItemDetail = ( {product}) => {
    return (
        <div className="item-detail">
            <div className="item-detail-image-content">
            <img src={product.image} className="item-detail-image" alt="" />
            </div>
            <h2>{product.name}</h2>
            <h2>{product.description}</h2>
            <p>Precio {product.price}</p>
        </div>
    )
}
export default ItemDetail