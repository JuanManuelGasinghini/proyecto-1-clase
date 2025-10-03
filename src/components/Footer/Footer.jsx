import LogoFinal from "../../assets/img/LogoFinal.png";
import CartWidget from "../CartWidget/CartWidget";
import "./Footer.css"

const Footer = () => {

  return (
    <div className="Footer">
      <div>
        <h3 className="FooterTitle">Footer</h3>
      </div>
      <div className="FooterItems">
        <div><img src={LogoFinal} alt="" className="FooterLogo" /></div>
        <div className="FooterList">
          <ul><li><h4 className="Colorin">1</h4><p className="FooterTitle">REDES</p></li>
            <li><h4 className="Colorin">2</h4><p className="FooterTitle">REDES</p></li>
            <li><h4 className="Colorin">3</h4><p className="FooterTitle">REDES</p></li>
          </ul>
        </div>

        <CartWidget />
      </div>
    </div>
  )
}

export default Footer;