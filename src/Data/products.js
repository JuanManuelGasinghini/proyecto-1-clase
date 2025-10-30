const products = [
    {
        "id": 1,
        "name": "Teclado",
        "description": "Teclado 60%",
        "stock": 5,
        "image": "/image/teclado.jpg",
        "price": 540,
        category: "teclados"
    },
    {
        "id": 2,
        "name": "Mouse",
        "description": "Mouse Rojo",
        "stock": 6,
        "image": "/image/mouse.jpg",
        "price": 300,
        category: "perifericos"
    },
    {
        "id": 3,
        "name": "Auriculares",
        "description": "Auricular Negro",
        "stock": 16,
        "image": "/image/auriculares.jpg",
        "price": 200,
        category: "perifericos"
    },
    {
        "id": 4,
        "name": "Monitor",
        "description": "Monitor Led",
        "stock": 16,
        "image": "",
        "price": 2000,
        "category": "monitores"
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