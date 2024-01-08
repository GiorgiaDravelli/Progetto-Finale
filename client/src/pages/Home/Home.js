import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer';
import { Hero } from '../../components/Hero/Hero'
import { WhatWeDo } from "../../components/WhatWeDo/WhatWeDo";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Services } from "../../components/Services/Services";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Team } from "../../components/Team/Team"
import { Contacts } from "../../components/Contacts/Contacts";


export const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <WhatWeDo/>
        <AboutUs/>
        <Services/>
        <Portfolio/>
        <Team/>
        <Contacts/>
        <Footer/>
    </div>
  );
}