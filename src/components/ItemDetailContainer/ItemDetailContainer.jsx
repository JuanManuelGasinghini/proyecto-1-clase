import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import "./ItemDetailContainer.css"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const productRef = doc(db, "products", id);
      const dataDb = await getDoc(productRef);
      const data = { id: dataDb.id, ...dataDb.data() };
      setProduct(data);
    } catch (error) {
      console.log("Error al obtener el producto", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div className="ItemDetail">
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer