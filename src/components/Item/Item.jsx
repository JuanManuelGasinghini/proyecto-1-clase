import "./Item.css"

const Item = ({ product }) => {
  return (
    <div className="ItemGeneral">
      <img className="ItemProductIMG" src="" alt="" />
      <p className="ItemProductName">{product.name}</p>
      <p className="ItemProductDescrip">{product.description}</p>
      <p className="ItemProductPrecio">{product.price}</p>
    </div>
  )
}

export default Item