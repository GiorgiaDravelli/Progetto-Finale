import "./Profile.css"
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer';
// import React, { useState, useEffect } from "react";
import axios from "axios";

export const Profile = () => {

    const username = localStorage.getItem('username')
    const email = localStorage.getItem('email')

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
          method: "post",
          url: "https://biodiversitygardens.onrender.com/profile",
          data: {
            username,
            email,
          },
        };
      
        axios(configuration)
          .then((result) => {
            console.log(result)
            const username = result.data.username
            localStorage.setItem('username', result.data.username);
            console.log(username)
            localStorage.setItem('email', result.data.email);
            console.log(email)
          })
          .catch((error) => {
            console.log(error)
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
    <>
    <Header/>
    <div className="edit-form-container">
        <div className="card">
            <h4 className="panel-title">I tuoi dati</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Nome: {`${username}`}</li>
                <li className="list-group-item">Email: {`${email}`}</li>
            </ul>
        </div>
        <div className="panel panel-default">
            <div className="panel-heading">
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Username</label>
                    <div className="col-sm-10">
                    <input type="tel" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                    <input type="tel" className="form-control"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="panel form-group">
            <div className="col-sm-10 col-sm-offset-2">
              <button type="submit" className="btn btn-outline-dark" onSubmit={(e)=>handleSubmit(e)}>Modifica</button>
              <button type="submit" className="btn btn-outline-dark">Elimina Profilo</button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    )
  }