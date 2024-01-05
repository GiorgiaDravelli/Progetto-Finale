import "./Services.css"
import { FaSun } from "react-icons/fa6";
import { LiaFrogSolid } from "react-icons/lia";
import { GiBee, GiNestBirds, GiGardeningShears  } from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { BsEyeglasses } from "react-icons/bs";



export const Services = () => {
    return (
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Servizi</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="bi bi-briefcase"><LiaFrogSolid/></i>
              <h4><a href="#">Laghetti per Anfibi</a></h4>
              <p>Progettiamo e realizziamo oasi per anfibi e altri animali amanti delle zone umide, esteticamente gradevoli e di facile gestione, utilizzando esclusivamente piante acquatiche e palustri autoctone</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-card-checklist"><GiBee/></i>
              <h4><a href="#">Aiuole per Impollinatori</a></h4>
              <p>Progettiamo e realizziamo aiuole in grado di attrarre e sostentare insetti impollinatori selezionando le piante nettarifere più indicate per il territorio di appartenenza</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-bar-chart"><GiNestBirds/></i>
              <h4><a href="#">Rifugi Artificiali</a></h4>
              <p>Forniamo e installiamo rifugi artificiali per la fauna selvatica del giardino, come nidi per uccelli, cassette nido per api solitarie e hibernacula per rettili e anfibi</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi"><PiPlant/></i>
              <h4><a href="#">Vendita Piante</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-brightness-high"><GiGardeningShears/></i>
              <h4><a href="#">Manutenzione </a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i className="bi bi-calendar4-week"><BsEyeglasses/></i>
              <h4><a href="#">Consulenze</a></h4>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}