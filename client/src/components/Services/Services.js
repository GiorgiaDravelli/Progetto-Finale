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
              <i><LiaFrogSolid/></i>
              <h4>Laghetti per Anfibi</h4>
              <p>Progettiamo e realizziamo oasi per anfibi e altri animali amanti delle zone umide, esteticamente gradevoli e di facile gestione, utilizzando esclusivamente piante acquatiche e palustri autoctone</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-lg-0">
            <div className="icon-box">
              <i><GiBee/></i>
              <h4>Aiuole per Impollinatori</h4>
              <p>Progettiamo e realizziamo aiuole in grado di attrarre e sostentare insetti impollinatori selezionando le piante nettarifere più indicate per il territorio di appartenenza</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i><GiNestBirds/></i>
              <h4>Rifugi Artificiali</h4>
              <p>Forniamo e installiamo rifugi artificiali per la fauna selvatica del giardino, come nidi per uccelli, cassette nido per api solitarie e hibernacula per rettili e anfibi</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i><PiPlant/></i>
              <h4>Vendita Piante</h4>
              <p>Presso il nostro vivaio potrete trovare più di 40 specie appartenenti alla flora locale, indispensabili per trasformare i vostri giardini in rigogliose oasi per la biodiversitá</p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i><GiGardeningShears/></i>
              <h4>Manutenzione </h4>
              <p>Eseguiamo lavori per il mantenimento in salute del giardino, come taglio dell'erba, potature di alberi e arbusti e rimozione di piante infestanti </p>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="icon-box">
              <i><BsEyeglasses/></i>
              <h4>Consulenze</h4>
              <p>Mettiamo a disposizione le nostre competenze per consulenze telefoniche o in presenza per guidarvi nella gestione sostenibile dei vostri giardini</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}