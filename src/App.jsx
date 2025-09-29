import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'



function App() {

  return (
    <div className='app'>
      <NavBar />
<ItemListContainer greeting={ "Muestra del componente compartiendo greeting" } />

</div>
        
  )
}



export default App
