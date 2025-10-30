import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'



function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={ "Bienvenidos a la tienda" } />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={ "Bienvenidos a la tienda" } />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={ <div>404 NOT FOUND</div> } />
        </Routes>
      </BrowserRouter>
    </div>

  )
}



export default App
