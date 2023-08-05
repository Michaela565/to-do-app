import './style.css'

import {project} from "./project"

let myProject = project("myproject", 'itsdescription');

myProject.appendToDoLists("list");

console.log(myProject);