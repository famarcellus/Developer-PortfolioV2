import React from "react"
import Github from "../../images/social/github.svg"
import LinkedIn from "../../images/social/linkedin.svg"

function Footer() {
    return (
        <footer id="footer-section" className="no-focus"tabIndex="0" role="contentinfo">
            <h3>I'm looking for Front End Developer roles that present challenges and offer opportunities for professional growth.</h3>
            <a href="https://github.com/famarcellus"><img src={Github} className="social-icon" alt="Github Logo"/></a>
            <a href="https://www.linkedin.com/in/fabio-marcellus-a7b324196/"><img src={LinkedIn} className="social-icon" alt="LinkedIn Logo"/></a>
            <h3 className="copyright">Designed and created solely by myself</h3>
            <h3 className="copyright">Fabio Marcellus 2021 &#169;</h3>
        </footer>
    )
}

export default Footer;