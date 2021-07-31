import React from "react"
import "./AboutMe.scss"

function AboutMe() {
    return (
        <section id="about-section" className="justify-center flex-column line-height no-focus" tabIndex="0" role="article">
            <h1 className="title header-text align-s-center relative no-focus">About Me</h1>
            <h2 className="content relative no-focus">I've been learning and working on the Front End of web applications for about 2 years and also have my <span className="bold">Bachelor's Degree in Computer Science.</span> I love using 
                <span className="bold"> React</span> and learning new technologies whenever I get the chance to. I always push myself <span className="bold">outside of my comfort zone</span> to accept new challenges in order to grow on the Front End. 
            </h2>
            <h2 className="content relative no-focus">I focus on making <span className="bold">accessible</span> web applications that are designed  
            <span className="bold"> mobile-first,</span> are <span className="bold">SEO</span>-friendly, but most importantly, 
            ensure it is <span className="bold">responsive.</span> My greatest strengths are my attention to detail and using 
            creative means to solve problems. 
            </h2>
        </section>
    )
}

export default AboutMe;