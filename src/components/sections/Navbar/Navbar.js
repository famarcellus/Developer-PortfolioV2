import React from "react"
import "./Navbar.scss"

function Navbar() {

    function toggleMenu() {
        var x = document.getElementsByClassName("items");

        if(x[0].style.display === "block") {
    
            for(let i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
        } 
        else {

            for(let i = 0; i < x.length; i++) {
                x[i].style.display = "block";
            }
        }
    }


    return (
    <nav className="navbar">
        <div className="menu">
            <ul className="item-holder no-list-style flex-column">
                <li className="hideByDefault"><a className="hamburger color-grey" href="javascript:void(0)" onClick={toggleMenu}><i className="fa fa-bars"></i></a></li>
                <li className="display"><a className="items no-text-decoration black-text" href="#about-section">About</a></li>
                <li className="display"><a className="items no-text-decoration black-text" href="#projects-section">Projects</a></li>
                <li className="display"><a className="items no-text-decoration black-text" href="#contact-section">Contact</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;