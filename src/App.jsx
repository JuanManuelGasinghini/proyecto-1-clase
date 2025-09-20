
import './App.css'

function App() {

  const Buttom = ({label, onClick})=>{
    return <button onClick={onClick}>{label}</button>
  }

  const label = 'dale, dale con el look'
  const onClick = () => alert('en un avión!')

  

  return (
    <div>
      <h2 className='titulo'>Hola Mundo!</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum facere corrupti officiis dicta alias suscipit reprehenderit expedita eligendi et, modi dolorum, nihil molestiae consequuntur, praesentium inventore odio temporibus commodi!</p>
    <button onClick={onClick}>{label}</button>
        </div>
  )
}



export default App
