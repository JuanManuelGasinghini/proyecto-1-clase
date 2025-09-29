import Logo from "../../assets/img/LogoFinal.jpg";
import './headers.css'

const Headers = () => {
  return (
 <div className="header">

    <div className='Nombre'><h3 className='TituloHeader'>Bienvenidos</h3></div>
    <div><img className="LogoHeader" src={Logo} alt="" /></div>
   
    </div>
  )
}

export default Headers

