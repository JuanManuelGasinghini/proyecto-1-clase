import getProducts from '../../Data/products.js';
import { useState, useEffect } from 'react';
import Itemlist from '../Itemlist/Itemlist';
import './itemListContainer.css'


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })

  }, []);

console.log(products);



  return (
    <div className="item-list-container">
<h2 className="Llamada">{greeting}</h2>
<Itemlist products={products} />
    </div>
  )
}

export default ItemListContainer
