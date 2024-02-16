import { Link } from "react-router-dom";
import { Nav, Offcanvas, Button } from "react-bootstrap";
import { useState } from 'react'
import Cart from "../Cart/Cart";
import '../Header/Header.css'


const CartHeader = (props) => {

    const {cartItems, onAdd, onRemove} = props;

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }
    
    const handleClose = () => {
        setShow(false)
    }

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
                        </li></> }
                        <Button className="btn btn-dark" onClick={handleShow}>Carrello</Button>
                        <Offcanvas show={show} onHide={handleClose} placement='end' scroll={true}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Carrello</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ul>
                </div>
            </div>
        </Nav>
    )
}


export default CartHeader
