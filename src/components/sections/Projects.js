import React from "react"
import ProjectData from "../../data/ProjectData"
import IndividualProject from "../sections/IndividualProject"

function Projects() {
    return (
    <section className="display-flex no-focus" id="projects-section" tabIndex="0" role="article">
        <h1 className="">Projects</h1>
        <div className="display-flex col-4-2">
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