import React from "react"

function AboutMe() {
    return (
        <section className="about-section justify-center flex-column line-height no-focus" tabIndex="0" role="article">
            <h1 className="title header-text align-s-center rel no-focus">About Me</h1>
            <h2 className="content rel no-focus">I am a Front End Developer finishing up my last year to receive my <span className="bold">Bachelor's Degree in Computer Science.</span> I enjoy working 
            on the Front End using <span className="bold">React</span> and I'm also familiar with the Back End of applications. 
            </h2>
            <h2 className="content rel no-focus">I focus on making <span className="bold">accessible</span> web applications that are designed  
            <span className="bold"> mobile-first,</span> are <span className="bold">SEO</span>-friendly, but most importantly, 
            ensure it is <span className="bold">responsive.</span> My greatest strengths are my attention to detail and using 
            creative means to solve problems. 
            </h2>
        </section>
    )
}

export default AboutMe;