import React from "react";
import { Project } from "../project";

function ProjectDOM(project : Project){
    return(<><h1 className="project-title larger" data-projectID="1">{project.getTitle()}</h1>
    <p className="desription normal">{project.getDescriptionOrTitle()}</p>
    </>);
}