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
    }
    
]



const getProducts = () => {
    return new Promise( (resolve) => {

        setTimeout( () => {
            resolve(products)
        }, 3000 )

    } )
        
}

export default getProducts;