import './AboutUs.css';
import createpond from '../../assets/createpond.jpg';
import { FaCheck, FaSun } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";


export const AboutUs = () => {
    return (
        <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src={createpond} className="img-fluid" alt="create-pond"/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>Chi siamo</h3>
            <p>
              Siamo un team di esperti amanti della natura e accomunati dal profondo interesse per lo studio e la conservazione della biodiversitá.  
            </p>
            <p>Le nostre principali aree di competenza sono:</p>
            <ul>
              <li><i><GoDotFill/></i> Realizzazione e gestione di habitat artificiali e seminaturali</li>
              <li><i><GoDotFill/></i> Mantenimento "low-effort" di giardini sostenibili </li>
              <li><i><GoDotFill/></i> Riconoscimento a livello tassonomico di fauna e flora </li>
              <li><i><GoDotFill/></i> Contrasto alla presenza di specie aliene invasive </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
    )
}