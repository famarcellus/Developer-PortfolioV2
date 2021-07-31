import React from "react";
import ReactLogo from "../../../images/logos/react.svg"
import GatsbyLogo from "../../../images/logos/gatsby.svg"
import EmailLogo from "../../../images/logos/email.svg"
import SCSSLogo from "../../../images/logos/sass.svg"


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
            case "Ant Design Charts": 
                return "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            case "Ant Design":
                return "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";
            case "date-fns": 
                return "https://avatars.githubusercontent.com/u/14921202?s=200&v=4";
            case "Redux":
                return "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
            default: 
                return "";
        }
    }

    return (
        <article className="single-project">
            <h2 className="project-title">{props.title}</h2>
            <img className="screenshot" src={props.image} alt={props.title} width="100%" height="auto" />
            <a href={props.liveLink} tabIndex="-1"><button className="live-button myButton">Live Link</button></a>
            <a href={props.sourceLink} tabIndex="-1"><button className="source-button myButton">Source Link</button></a>
            <h3 className="description light-text line-height">{props.description}</h3>
            <h3 className="tech-title">Technologies Used</h3>
            {props.technologies.map((item) => {
                return (
                    <h3 className="tech-name light-text">{item} 
                    {FindTechnology(item) && <img className="logo" src={FindTechnology(item)} alt={item}></img>}</h3>
                )
            })}
        </article>
    )
}


export default IndividualProject;