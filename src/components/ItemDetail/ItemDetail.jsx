const ItemDetail = ( {product}) => {
    return (
        <div className="item-detail">
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <h2>{product.description}</h2>
            <p>Price: {product.price}</p>
        </div>
    )
}
export default ItemDetail