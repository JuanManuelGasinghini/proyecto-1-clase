import Marquee from "react-fast-marquee";
import LogosMarcas from "../../assets/img/LogosMarcas";
import "./CarrouselDeLogos.css"

 export default function CarrouselDeLogos() {
  return (
<div>
<h3 className="Titulo">
    trustung by leafing
</h3>
<Marquee className="Marquee" gradient={true} speed={25}>
    <div className="flex items-center justify-center">
        {[...LogosMarcas, ...LogosMarcas].map((company, index) 
        => (<img key={index} className="mx-11" src={company.logo} alt={company.name}
            width={100} height={100} />
        ))}
      </div>
        </Marquee> 
        </div>
  );
}



