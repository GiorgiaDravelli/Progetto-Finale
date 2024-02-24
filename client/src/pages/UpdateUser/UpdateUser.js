import './UpdateUser.css'
import { Form, Button, Alert } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Loader} from "../../components/Spinner/Spinner"
import {Header} from '../../components/Header/Header'
import {Footer} from '../../components/Footer/Footer'

export const UpdateUser = () => {

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [updated, setUpdated] = useState("")
const [ loggedInState, setLoggedInState] = useState("")

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    setLoggedInState("logging")
    const configuration = {
      method: "put",
      // url: "https://biodiversitygardens.onrender.com/update",
      url: "http://localhost:3500/update",
      data: {
        username,
        email,
        password,
      },
    };

    let result = await axios(configuration)
      
    setUpdated(true);
    console.log(result)
    setLoggedInState("logged")
  } catch(error) {
    if (!error?.response) {
      alert('No Server Response')
    } else if ( error.response?.status === 400) {
      alert('Missing Username or Password')
    } else if (error.response?.status === 401) {
      alert('Unauthorized')
    } else ( alert('Signup failed'))
    error = new Error();
    setLoggedInState("")
  };
}

    return (
      <>
    <Header />
    <div className="form">
      <div>
        <h2>Modifica i tuoi dati</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
          {/* username */}
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="text" 
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your user name"
            disabled={loggedInState === "logging" ? true : false}
            />
          </Form.Group>
  
          {/* email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Indirizzo Email</Form.Label>
            <Form.Control 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            disabled={loggedInState === "logging" ? true : false}
            />
          </Form.Group>
  
          {/* password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            disabled={loggedInState === "logging" ? true : false} />
          </Form.Group>
          <div className='LoginContainer'>
            {loggedInState === "logging" ? <Loader /> : 
            <Button className="btn-signup" 
              variant="secondary" 
              onClick={(e) => handleSubmit(e)}
              type="submit">
                Modifica
            </Button>}
            {updated? (<Alert color="info" className=" alert text-center">I tuoi dati sono stati modificati</Alert>) : ""}
          </div>
        </Form>
      </div>
    </div>
    <Footer />
    </>
    )
  }