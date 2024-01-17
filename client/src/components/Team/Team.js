import "./Team.css"
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';
import { CiFacebook } from "react-icons/ci";

export const Team = () => {
    return (
    <section id="team" className="team">
        <div className="container">
  
          <div className="section-title">
            <h2>Team</h2>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src={person1} alt=""/>
                <h4>Jacopo Cristoni</h4>
                <p>
                  Dottore Magistrale in Ecologia ed Etologia per la Conservazione della Natura
                </p>
                <div className="social">
                  {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                  <a href="https://www.facebook.com/jacopocypher"><i className="bi bi-facebook"><CiFacebook/></i></a>
                  {/* <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src={person2} alt=""/>
                <h4>Marco Palmieri</h4>
                <p>
                  Dottore Magistrale in Archeologia <br/> e Archeomalacologo
                </p>
                <div className="social">
                  {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                  {/* <a href=""><i className="bi bi-facebook"><CiFacebook/></i></a> */}
                  {/* <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src={person3} alt=""/>
                <h4>Danio Miserocchi</h4>
                <p>
                  Dottore in Scienze Naturali e Guida Ambientale Escursionistica
                </p>
                <div className="social">
                  {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                  {/* <a href=""><i className="bi bi-facebook"><CiFacebook/></i></a> */}
                  {/* <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}