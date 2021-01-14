import React from "react";
import ReactLogo from "../../images/logos/react.svg"
import GatsbyLogo from "../../images/logos/gatsby.svg"
import EmailLogo from "../../images/logos/email.svg"
import SCSSLogo from "../../images/logos/sass.svg"


function IndividualProject(props) {

   
    function FindTechnology(techName) {

        switch(techName) {
            case "React": 
                return ReactLogo;
            case "Gatsby":
                return GatsbyLogo;
            case "Email.js":
                return EmailLogo;
            case "SCSS":
                return SCSSLogo;
        }
    }

    return (
        <article className="single-project">
            <h2 className="">{props.title}</h2>
            <img className="project-image" src={props.image} alt={props.title} width="100%" height="auto" />
            <a href={props.sourceLink} tabIndex="-1"><button className="myButton">Source Link</button></a>
            <a href={props.liveLink} tabIndex="-1" ><button className="myButton">Live Link</button></a>
            <h3 className="line-height">{props.description}</h3>
            <h3 className="tech-title">Technologies Used</h3>
            {props.technologies.map((item) => {
                return (
                    <h3 className="technologies rel">{item} <img src={FindTechnology(item)} alt={item}></img></h3>
                )
            })}
        </article>
    )
}


export default IndividualProject;