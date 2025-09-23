
import React from 'react'
import './App.css'
import './components/Nav/Nav.jsx'
import Nav from './components/Nav/Nav.jsx'
import Header from './components/Header/Headers.jsx'


function App() {

  const Buttom = ({label, onClick})=>{
    return <button onClick={onClick}>{label}</button>
  }

  const label = 'dale, dale con el click'
  const onClick = () => alert('Learn!')

  

  return (
    <div>
      <Header></Header>
      <Nav></Nav>
           <h2 className='titulo'>APP de prueba</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum facere corrupti officiis dicta alias suscipit reprehenderit expedita eligendi et, modi dolorum, nihil molestiae consequuntur, praesentium inventore odio temporibus commodi!</p>
    <button onClick={onClick}>{label}</button>
        </div>
  )
}



export default App
