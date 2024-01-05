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
            <img src={createpond} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>Chi siamo</h3>
            <p>
              Siamo un team di esperti amanti della natura e accomunati dal profondo interesse per lo studio e la conservazione della biodiversitá.  
            </p>
            <p>Le nostre principali aree di competenza sono:</p>
            <ul>
              <li><i className="bx bx-check-double"><GoDotFill/></i> Realizzazione e gestione di habitat artificiali e seminaturali</li>
              <li><i className="bx bx-check-double"><GoDotFill/></i> Mantenimento "low-effort" di giardini sostenibili </li>
              <li><i className="bx bx-check-double"><GoDotFill/></i> Riconoscimento a livello tassonomico di fauna e flora </li>
              <li><i className="bx bx-check-double"><GoDotFill/></i> Contrasto alla presenza di specie aliene invasive </li>
            </ul>
            {/* <div className="row icon-boxes">
              <div className="col-md-6">
                <i className="bx bx-receipt"><FaSun/></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <i className="bx bx-cube-alt"><FaSun/></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </section>
    )
}