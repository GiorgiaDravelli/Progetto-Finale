import './Footer.css';
import { CiFacebook } from "react-icons/ci";

export const Footer = () => {
    return (
    <footer id="footer">
        <div class="container d-md-flex py-4">

            <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
                &copy; Copyright <strong><span>Biodiversity Gardens</span></strong>. All Rights Reserved
            </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" class="facebook"><i class="bx bxl-facebook"><CiFacebook/></i></a>
            {/* <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> */}
            </div>
            </div>
    </footer>
    )
}