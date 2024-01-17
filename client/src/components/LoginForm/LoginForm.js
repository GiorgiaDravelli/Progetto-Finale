import '../SignupForm/SignupForm.css'
import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LoginForm.css'

export const LoginForm = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [login, setLogin] = useState(false);

const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://biodiversitygardens.onrender.com/login",
      data: {
        email,
        password,
      },
    };
  
    axios(configuration)
        .then((result) => {
          console.log(result)
          setLogin(true);
          const username = result.data.username
          localStorage.setItem('username', result.data.username);
          console.log(username)
          localStorage.setItem('token', result.data.token);
          console.log(result.data.token)
          localStorage.setItem('email', result.data.email);
          console.log(result.data.email)

          navigate("/")
        })
        .catch((error) => {
          if (!error?.response) {
            alert('No Server Response')
          } else if ( error.response?.status === 400) {
            alert('Missing Username or Password')
          } else if (error.response?.status === 401) {
            alert('Unauthorized')
          } else ( alert('Login failed'))
          error = new Error();
        });
  }
  
    return (
    <div className="form">
      <div>
        <h2>Log In</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
          {/* email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Indirizzo Email</Form.Label>
            <Form.Control 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
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
            placeholder="Password" />
          </Form.Group>

          {/* submit button */}
          <Button className="btn-signup" 
            variant="secondary" 
            onClick={(e) => handleSubmit(e)}
            type="submit">
              Invia
          </Button>
        </Form>
      </div>
    </div>
    )
  }