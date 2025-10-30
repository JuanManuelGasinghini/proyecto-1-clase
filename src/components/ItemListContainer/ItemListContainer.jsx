import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import './itemListContainer.css'
import getProducts from '../../Data/products.js';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
     setLoading(true);

    getProducts()
            .then((data)=> {
        if(categoryId){
          const productsFilter = data.filter((product)=> product.category === categoryId );
          setProducts(productsFilter);
        }else{
          setProducts(data);
        }
      })
      .finally(()=> {
        setLoading(false);
})


  }, [categoryId])
    return (
   <div className="itemlistcontainer">
      <h2>{greeting}</h2>
      {
        loading ? <div>Cargando...</div> : <ItemList products={products} />
      }
    </div>
  )
}
export default ItemListContainer
