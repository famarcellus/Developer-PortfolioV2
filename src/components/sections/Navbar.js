import React from "react"

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

    var resumeLink = "https://docs.google.com/document/d/1QhR37R64BD3vKCnjmn53x5i37IjoLAv1DTYM6l80r7M/edit";

    return (
    <nav className="navbar">
        <div className="menu">
            <ul className="item-holder no-list-style flex-column">
                <li className="hideByDefault"><a className="hamburger color-grey" href="javascript:void(0)" onClick={toggleMenu}><i className="fa fa-bars"></i></a></li>
                <li className="display"><a className="items no-text-decoration black-text" href="#about-section">About</a></li>
                <li className="display"><a className="items no-text-decoration black-text" href="#projects-section">Projects</a></li>
                <li className="display"><a className="items no-text-decoration black-text" href="#contact-section">Contact</a></li>
                {/* <li className="display"><a className="items no-text-decoration black-text" href={resumeLink} target="_blank" rel="noopener noreferrer">Resume</a></li> */}
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;