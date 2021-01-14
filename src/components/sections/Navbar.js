import React from "react"

function Navbar() {

    function toggleMenu() {
        var x = document.getElementsByClassName("hideByDefault");

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
    <nav>
        <div className="navbar flex-container">
            <li><a className="items" href="#about-section">About</a></li>
            <li><a className="items" href="#projects-section">Projects</a></li>
            <li><a className="items" href="#contact-section">Contact</a></li>
            <li><a className="items" href="https://docs.google.com/document/d/1QhR37R64BD3vKCnjmn53x5i37IjoLAv1DTYM6l80r7M/edit" target="_blank">Resume</a></li>
        </div>

        <div className="mobile-menu">
            <li><a className="hamburger flex-container" href="javascript:void(0)" onClick={toggleMenu}><i className="fa fa-bars"></i></a></li>
            <li><a className="hideByDefault" href="#about-section">About</a></li>
            <li><a className="hideByDefault" href="#projects-section">Projects</a></li>
            <li><a className="hideByDefault" href="#contact-section">Contact</a></li>
            <li><a className="hideByDefault" href="https://docs.google.com/document/d/1QhR37R64BD3vKCnjmn53x5i37IjoLAv1DTYM6l80r7M/edit" target="_blank">Resume</a></li>
        </div>
    </nav>
    )
}

export default Navbar;