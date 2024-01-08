import '../SignupForm/SignupForm.css'
import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://biodiversitygardens.onrender.com/signup",
      data: {
        email,
        password,
      },
    };
  
    axios(configuration)
        .then((result) => {
          setLogin(true);
        })
        .catch((error) => {
          error = new Error();
        });
  }
  
    return (
      <div className="form">
      <h2>Log In</h2>
        <Form onSubmit={(e)=>handleSubmit(e)}>
          {/* email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
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
            Submit
          </Button>
          {login ? (
            <p className="text-success">You Are Logged In Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Logged In</p>
          )}
        </Form>
      </div>
    )
  }