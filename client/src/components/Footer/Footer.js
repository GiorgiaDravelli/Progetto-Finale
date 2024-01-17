import './Footer.css';
import { CiFacebook } from "react-icons/ci";

export const Footer = () => {
    return (
    <footer id="footer">
        <div className="container d-md-flex py-4">

            <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
                Created by Giorgia Dravelli - 2024
            </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://www.facebook.com/conservationponds" className="facebook"><i><CiFacebook/></i></a>
            {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
            </div>
            </div>
    </footer>
    )
}