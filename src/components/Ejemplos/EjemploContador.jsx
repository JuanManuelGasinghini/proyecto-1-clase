import { useState, useEffect, use } from "react";
import EjemploTitulo from "./EjemploTitulo";

const EjemploContador = () => {
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(false);

  const aumentar = () => {
    if (contador < 10) {
      setContador(contador + 1)
    }
  }
  /*
  useEffect (() => {
  
    const fetchApi = () => {
      fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
  }
  fetchApi();
  
  },[])
  */

  const alternarToggle = () => {
    setToggle(!toggle);
  }
  useEffect(() => {
    console.log("1er useEffect");
  }, [])

  useEffect(() => {
    console.log("2do useEffect");
  }, [contador])

  useEffect(() => {
    console.log("3er useEffect");
  })



  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={aumentar} >+</button>

      <p>Boolean: {toggle.toString()}</p>
      <button onClick={alternarToggle}>Alternar Valor</button>

      {
        toggle && <EjemploTitulo />
      }
    </div>
  )
}

export default EjemploContador