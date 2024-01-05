import "./Portfolio.css"
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';

export const Portfolio = () => {
    return (
    <section id="portfolio" className="portfolio">
        <div className="container">
  
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
          </div>
  
          <div className="row portfolio-container">
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img1} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Img1</h4>
                  <p>luogo</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img2} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Img2</h4>
                  <p>luogo</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img3} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Img 3</h4>
                  <p>luogo</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img4} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Img 4</h4>
                  <p>luogo</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img5} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Img 5</h4>
                  <p>Web</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
              <div className="portfolio-wrap">
                <figure>
                  <img src={img6} className="img-fluid" alt=""/>
                </figure>
  
                <div className="portfolio-info">
                  <h4>Img 6</h4>
                  <p>luogo</p>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
    </section>
    )
}