import './SignupForm.css'
import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Loader} from "../Spinner/Spinner"

export const SignupForm = () => {

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [register, setRegister] = useState("")
const [ loggedInState, setLoggedInState] = useState("")

const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  setLoggedInState("logging")
  const configuration = {
    method: "post",
    url: "https://biodiversitygardens.onrender.com/signup",
    data: {
      username,
      email,
      password,
    },
  };

  axios(configuration)
      .then((result) => {
        setRegister(true);
        console.log(result)
        setLoggedInState("logged")
        localStorage.setItem('username', result.data.username);
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('email', result.data.email);
        localStorage.setItem('admin', result.data.admin);
        navigate("/")
      })
      .catch((error) => {
        if (!error?.response) {
          alert('No Server Response')
        } else if ( error.response?.status === 400) {
          alert('Missing Username or Password')
        } else if (error.response?.status === 401) {
          alert('Unauthorized')
        } else ( alert('Signup failed'))
        error = new Error();
        setLoggedInState("")
      });
}

    return (
    <div className="form">
      <div>
        <h2>Registrati</h2>
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
                Invia
            </Button>}
          </div>
        </Form>
      </div>
    </div>
    )
  }