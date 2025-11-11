import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";
//import data from "../data/products.json" assert { type: "json" };

const products = [   
     {
        id: 1,
        name: "Cañerias",
        description: "Caños de termofusión",
        stock: 5,
        image: "/image/monoComando.jpg",
        price: 540,
        category: "Cañerias"
    },
    {
        id: 2,
        name: "Bachas",
        description: "Bachas de loza",
        stock: 6,
        image: "/image/bachas.jpg",
        price: 300,
        category: "Bachas"
    },
    {
        id: 3,
        name: "Piezas",
        description: "Todas las piezas para tu proyecto",
        stock: 6,
        image: "/image/piezas.jpg",
        price: 200,
        category: "Piezas"
    },
    {
        id: 4,
        name: "Accesorios",
        description: "Todo para tu baño",
        stock: 16,
        image: "/image/accesorios.jpg",
        price: 2000,
        category: "Accesorios"
    },
        {
        id: 5,
        name: "Desagües",
        description: "Todo para tu baño",
        stock: 16,
        image: "/image/accesorios.jpg",
        price: 2000,
        category: "Cañerias"
    },
        {
        id: 6,
        name: "Toalleros",
        description: "Todo para tu baño",
        stock: 16,
        image: "/image/accesorios.jpg",
        price: 2000,
        category: "Piezas"
    },
        {
        id: 7,
        name: "Caños de gas",
        description: "Todo para tu baño",
        stock: 16,
        image: "/image/accesorios.jpg",
        price: 2000,
        category: "Cañerias"
    },
        {
        id: 8,
        name: "Pileta de Lavadero",
        description: "Todo para tu baño",
        stock: 16,
        image: "/image/accesorios.jpg",
        price: 2000,
        category: "Bachas"
    },
        {
        id: 9,
        name: "Codo 110",
        description: "Todo para tu baño",
        stock: 16,
        image: "/image/accesorios.jpg",
        price: 2000,
        category: "Piezas"
    },
        {
        id: 10,
        name: "Accesorios",
        description: "Todo para tu baño",
        stock: 16,
        image: "/image/accesorios.jpg",
        price: 2000,
        category: "Accesorios"
    },
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