import React from "react"
import "./Projects.scss"
import ProjectData from "../../../data/ProjectData"
import IndividualProject from "./IndividualProject"

function Projects() {
    return (
    <section id= "projects-section" className="justify-center flex-column align-i-center no-focus" tabIndex="0" role="article">
        <h1 className="title header-text">Projects</h1>
        <div className="projects-container col-4-2">
            {ProjectData.map((item) => {
                return (
                    <IndividualProject 
                        title={item.title}
                        description={item.description}
                        technologies={item.technologies}
                        image={item.image}
                        liveLink={item.liveLink}
                        sourceLink={item.sourceLink}
                    />
                );
            })}    
        </div>
    </section>
    )
}

export default Projects;