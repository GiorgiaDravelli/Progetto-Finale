import './WhatWeDo.css';
import { SiHomebridge } from "react-icons/si";
import { PiFlowerLotus } from "react-icons/pi";
import { FaGlasses } from "react-icons/fa";



export const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="what-we-do">
        <div className="container">
  
          <div className="section-title">
            <h2>Cosa facciamo</h2>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon"><i><SiHomebridge/></i></div>
                <h4>Realizzazione Habitat</h4>
                <p>Progettiamo e realizziamo habitat terrestri e acquatici su misura volti alla conservazione della biodiversitá locale</p>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon"><i><PiFlowerLotus/></i></div>
                <h4>Coltivazione Piante Autoctone</h4>
                <p>Per la realizzazione dei nostri habitat utilizziamo specie autoctone di origine locale coltivate direttamente nel nostro vivaio</p>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon"><i><FaGlasses/></i></div>
                <h4>Consulenza</h4>
                <p>Grazie alle nostre competenze accademiche ed esperienze sul campo siamo in grado di offrirvi le migliori consulenze per la gestione sostenibile dei vostri giardini</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}