import { Link } from "react-router-dom";
import './Header.css';

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Link to="/">
            <img className='logo' src={require('../../assets/logo.png')} alt="logo"/>
          </Link>
          Biodiversity Gardens
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => handleClickScroll("home")}>Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/#WhatWeDo" className="nav-link" onClick={() => handleClickScroll("what-we-do")}>Cosa Facciamo</Link>
            </li>
            <li className="nav-item">
            <Link to="/#about" className="nav-link" onClick={() => handleClickScroll("about")}>Chi Siamo</Link>
            </li>
            <li className="nav-item">
            <Link to="/#services" className="nav-link" onClick={() => handleClickScroll("services")}>Servizi</Link>
            </li>
            <li className="nav-item">
            <Link to="/#portfolio" className="nav-link"onClick={() => handleClickScroll("portfolio")}>Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link to="/#team" className="nav-link" onClick={() => handleClickScroll("team")}>Team</Link>
            </li>
            <li className="nav-item">
            <Link to="/#contacts" className="nav-link" onClick={() => handleClickScroll("contact")}>Contatti</Link>
            </li>
            <li className="nav-item">
            <Link to={"/signup"} className="nav-link">Accedi</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}