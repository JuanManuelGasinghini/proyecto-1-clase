import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const products = [ 
]

const seedProducts = async () => {
try {
const productsRef = collection(db, "products");

products.map( async ( {id, ...dataProduct } ) => {
    await addDoc(productsRef, dataProduct);
});
console.log("Productos subidos correctamente!");
} catch (error) {
console.log(error);
}
}

seedProducts();