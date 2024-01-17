import './Hero.css';
import { Link } from "react-router-dom";
import { useState } from 'react'

export const Hero = () => {

    return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center text-md-left" data-aos="fade-up">
            <h1>Biodiversity Gardens</h1>
            <h2>Progettazione e realizzazione di giardini per la biodiversitá</h2>
        </div>
  </section>
    )
}