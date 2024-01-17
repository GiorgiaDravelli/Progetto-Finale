import "./Portfolio.css"
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.JPG';

export const Portfolio = () => {
    return (
    <section id="portfolio" className="portfolio">
        <div className="container">
  
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Alcuni lavori realizzati e traguardi raggiunti</p>
          </div>
  
          <div className="row portfolio-container">
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img1} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Laghetto per la Biodiversitá</h4>
                  <p>fattoria didattica accanto, modena (mo)</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img2} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Laghetto per la Biodiversitá</h4>
                  <p>privato, calcara (bo)</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img3} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Laghetto per la Biodiversitá</h4>
                  <p>az. agr. dalle alpi all'appennino, formigine (mo)</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img4} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Colonizzazione di Rana dalmatina</h4>
                  <p>privato, calcara (bo)</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img5} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Coltivazione di Hottonia palustris</h4>
                  <p>privato, calcara (bo)</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img6} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Triturus carnifex</h4>
                  <p>privato, lizzano in belvedere (bo)</p>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
    </section>
    )
}