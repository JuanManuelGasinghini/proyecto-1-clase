import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import './itemListContainer.css'
import getProducts from '../../Data/products.js';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {

    setLoading(true);

    getProducts()
      .then((data) => {
        setProducts(data);
      })
    }, [])

    return (
    <div className="item-list-container">
<h2 className="Llamada">{greeting}</h2>
<ItemList products={products} />
</div>
    )
  }

export default ItemListContainer
