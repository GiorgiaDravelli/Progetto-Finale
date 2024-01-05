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
            <p>Sit sint consectetur velit quos quisquam cupiditate nemo qui</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src={person1} alt=""/>
                <h4>Gattino 1</h4>
                <span>Super capo supremo</span>
                <p>
                  Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                </p>
                <div className="social">
                  {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                  <a href=""><i className="bi bi-facebook"><CiFacebook/></i></a>
                  {/* <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src={person2} alt=""/>
                <h4>Gattino 2</h4>
                <span>Product Manager</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                </p>
                <div className="social">
                  {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                  <a href=""><i className="bi bi-facebook"><CiFacebook/></i></a>
                  {/* <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="member">
                <img src={person3} alt=""/>
                <h4>Gattino 3</h4>
                <span>CEO</span>
                <p>
                  Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                </p>
                <div className="social">
                  {/* <a href=""><i className="bi bi-twitter"></i></a> */}
                  <a href=""><i className="bi bi-facebook"><CiFacebook/></i></a>
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