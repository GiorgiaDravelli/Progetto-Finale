import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {Header} from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero'
import { WhatWeDo } from "./components/WhatWeDo/WhatWeDo";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Services } from "./components/Services/Services";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Team } from "./components/Team/Team"
import { Contacts } from "./components/Contacts/Contacts"


function App() {
  return (
    <div>
      <Router>
        <HelmetProvider>
          <title>Biodiversity Gardens - Home</title> 
          <meta name='Home Page' content='info sito' />
        </HelmetProvider>
        <Header/>
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timerpage" element={<TimerPage />} />
        </Routes> */}
        <Hero/>
        <WhatWeDo/>
        <AboutUs/>
        <Services/>
        <Portfolio/>
        <Team/>
        <Contacts/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
