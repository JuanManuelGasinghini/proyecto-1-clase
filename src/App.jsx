import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";

import Footer from "./components/Footer/Footer";

import './App.css'


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={ "Nuestros Productos" } />} />
          <Route path="/category/:category" element={<ItemListContainer greeting={ "Bienvenidos a la tienda" } />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={ <div>404 NOT FOUND</div> } />
        </Routes>
         <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>

  )
}



export default App
