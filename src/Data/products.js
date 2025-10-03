import products from "./products.json"
/*
const products = [
    {
    id: 1,
    name: "Teclado",
    description: "Teclado 60%",
    stock: 5,
    image:""
},
    {
    id: 2,
    name: "Mouse" ,
    description: "Mouse Rojo",
    stock: 6,
    image:""
},
    {
    id: 3,
    name: "Auriculares" ,
    description: "Auriculares Negros",
    stock: 16,
    image:""
},
]
*/
const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 3000 )

    } )
        
}

export default getProducts;