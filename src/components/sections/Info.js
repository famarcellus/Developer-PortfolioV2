import React from "react"

function Info() {
    return (
        <section className="info-section flex-column align-i-center">
            <h1 className="intro">Hi, my name is <span className="name color-dark-cyan">Fabio Marcellus</span></h1>
            <h2 className="statement">I'm a <span className="job-title color-dark-orange">Front End Developer</span></h2>
            <a href="#about-section" className="cta" tabIndex="-1"><button className="ctaButton animated">FIND OUT MORE!</button></a>
        </section>
    )
}

export default Info;