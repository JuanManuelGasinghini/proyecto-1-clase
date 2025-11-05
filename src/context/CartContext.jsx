import { createContext, useState } from "react";

//creacion del contexto
const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (newProduct) => {
        setCart([...cart, newProduct]); 
    }

    const totalQuantity = () => {
        const quantity  = cart.reduce( (total, productCart) => total + productCart.quantity, 0);
    return quantity;
    }

    const totalPrice = () => {
        const total = cart.reduce( (total, productCart) => total + (productCart.price * productCart.quantity), 0);
   return total;
    }

    const deleteProductById = (productId) => {
      const productFiltered = cart.filter( (productCart) => productCart.id !== productId )
      setCart(productFiltered);
    }

    const deleteCart = () => {
        setCart([]);
    }

    console.log(cart);
    

return(
    <cartContext.Provider value={ { cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart } }>
        {children}
    </cartContext.Provider>
)

};

export { cartContext, CartProvider };