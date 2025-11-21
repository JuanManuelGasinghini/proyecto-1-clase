import Item from '../Item/Item';
import './Itemlist.css';

const Itemlist = ({ products }) => {
  return (
    <div className='item-list'>
      {
        products.map((product) => (
          <Item product={product} key={product.id} />

        ))

      }
    </div>
  )
}

export default Itemlist