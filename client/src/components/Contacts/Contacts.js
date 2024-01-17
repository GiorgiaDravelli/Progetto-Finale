import "./Contacts.css"
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'template_6rzvajw', '#email-form', 'DBxnkOoQdFaX3CidI')
      .then((result) => {
          console.log(result.text);
          alert('Your message has been sent!')
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contatti</h2>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-10">
            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i><CiLocationOn/></i>
                  <h4>Indirizzo:</h4>
                  <p>Castelfranco Emilia, MO 41013</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i><MdOutlineEmail/></i>
                  <h4>Email:</h4>
                  <p>conservationponds@libero.it</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i><CiPhone/></i>
                  <h4>Telefono:</h4>
                  <p>+39 3498338952</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-lg-10">
            <form ref={form} onSubmit={sendEmail} className="email-form" id='email-form'>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" name="user_email" className="form-control" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message">An error occurred</div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Invia Messaggio</button></div>
            </form>
          </div>

        </div>

      </div>
      </section>
    )
}