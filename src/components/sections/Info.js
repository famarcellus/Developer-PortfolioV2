import React from "react"

function Info() {
    return (
        <section className="flex-container" id="info" >
            <h1 className="name">Hi, my name is <span className="color">Fabio Marcellus</span></h1>
            <h2 className="job">I'm a <span className="title">Front End Developer</span></h2>
            <a href="#about-section" className="cta"><button className="ctaButton">FIND OUT MORE!</button></a>
        
        </section>
    )
}

export default Info;