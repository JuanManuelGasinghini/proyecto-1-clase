import "./Item.css"

const Item = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>precio: {product.price}</p>
    </div>
  )
}

export default Item