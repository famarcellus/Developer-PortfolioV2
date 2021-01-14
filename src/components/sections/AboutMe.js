import React from "react"

function AboutMe() {
    return (
        <section className="flex-container line-height no-focus" id="about-section" tabIndex="0" role="article">
            <h1 className="rel no-focus">About Me</h1>
            <h2 className="rel no-focus">I am a Front End Developer finishing up my last year to receive my <span>Bachelor's Degree in Computer Science.</span> I enjoy working 
            on the Front End using <span>React</span> and I'm also familiar with the Back End of applications. 
            </h2>
            <h2 className="rel no-focus">I focus on making <span>accessible</span> web applications that are designed <span>mobile-first,</span> are <span>SEO</span>-friendly, but most importantly, ensure it is <span>responsive.</span> My greatest strengths are my attention to detail and using creative means to solve problems. 
            </h2>
        </section>
    )
}

export default AboutMe;