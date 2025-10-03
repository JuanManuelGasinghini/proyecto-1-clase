import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

import './App.css'



function App() {

  return (
    <div className='app'>
      <NavBar />
<ItemListContainer greeting={ "Muestra del componente compartiendo greeting" } />
<Footer />
</div>
        
  )
}



export default App
