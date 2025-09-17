import React from "react";
import "./Footer.css"
import logo from "./LOGO.jpg"


const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer__container container">
                {/* <img src={logo} alt="" /> */}
                <h3 className="title">Liberalty Constructions Private Limited</h3>

                <p className="text__muted ftr">CIN: U05190KA2005PTC036119</p>

                <div className="footer__social">
                <a href="https://x.com/" className="footer__social-link" target="_blank">
                    <i class="bi bi-twitter-x"></i>
                </a>

            {/* <a href="https://github.com/deepesh-reddy/" className="footer__social-link" target="_blank">
                <i class="bi bi-github"></i>
            </a> */}

            <a href="https://www.linkedin.com/feed/" className="footer__social-link" target="_blank">
                <i class="bi bi-linkedin"></i>
            </a>
                </div>

                <span className="footer__copy">
                &#169; Liberalty Constructions Pvt Ltd. All rights reserved
                </span>

            </div>
        </footer>
    )
}

export default Footer;