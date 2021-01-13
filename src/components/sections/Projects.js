import React from "react"
import ProjectData from "../../data/ProjectData"
import IndividualProject from "../sections/IndividualProject"

function Projects() {
    return (
    <section className="flex-container rel no-focus" id="projects-section" tabIndex="0" role="article">
        <h1 className="rel">Projects</h1>
        <div className="flex-container col-4-2">
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