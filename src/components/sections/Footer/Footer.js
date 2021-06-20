import React from "react"
import "./Footer.scss"
import Github from "../../../images/social/github.svg"
import LinkedIn from "../../../images/social/linkedin.svg"

function Footer() {
    return (
        <footer className="footer-section no-focus" tabIndex="0" role="contentinfo">
            <h3 className="title color-white">I'm looking for Front End Developer roles that present challenges and offer opportunities for professional growth.</h3>
            <a className="social-link" href="https://github.com/famarcellus"><img src={Github} className="social-icon" alt="Github Logo"/></a>
            <a className="social-link" href="https://www.linkedin.com/in/fabio-marcellus-a7b324196/"><img src={LinkedIn} className="social-icon" alt="LinkedIn Logo"/></a>
            <h3 className="copyright color-white">Designed and created solely by myself</h3>
            <h3 className="copyright color-white">Fabio Marcellus 2021 &#169;</h3>
        </footer>
    )
}

export default Footer;