import { Link } from "react-router-dom";
import './Header.css';
import { Nav } from "react-bootstrap";
import { useState } from 'react'


export const Header = () => {

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const token = localStorage.getItem('token')
  const username = localStorage.getItem('username')

  const [userName, setUserName] = useState(localStorage.getItem('username'))

    const handleLogOut = () => {
        localStorage.clear()
        setUserName()
      }

  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            <Link to="/#what-we-do" className="nav-link" onClick={() => handleClickScroll("what-we-do")}>Cosa Facciamo</Link>
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
            <Link to="/store" className="nav-link">Store</Link>
            </li>
            { !token? (<><li className="nav-item">
            <Link to={"/login"} className="nav-link">Accedi</Link>
            </li>
            <li className="nav-item">
            <Link to={"/signup"} className="nav-link">Registrati</Link>
            </li></>) :  <><li className="nav-item">

            <div class="btn-group" role="group">
              <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Benvenuto, {`${username}`}
              </button>
              <ul className="dropdown-menu">
                <li><Link to="" className="nav-link" onClick={() => handleLogOut()}>Log Out</Link></li>
              </ul>
            </div>

            {/* <p className="nav-link">Benvenuto, {`${username}`}</p>
            </li>
            <li className="nav-item">
            <Link to="" className="nav-link" onClick={() => handleLogOut()}>Log Out</Link> */}
            </li></> }
          </ul>
        </div>
      </div>
    </Nav>
  )
}