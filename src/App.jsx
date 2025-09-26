import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Headers from "./components/Header/Headers";
import './App.css'



function App() {
const saludo = "Bienvenidos al WooCommerce";


  

  return (
    <div className='app'>
      <Headers />
      <NavBar />
<ItemListContainer greeting={ "HOLasssss" }/>
<h1 className="saludo">{saludo}</h1>
<h2>chau</h2>
        </div>
  )
}



export default App
