import './style.css'

import { project } from "./project"
import { toDoList } from './todolist';
import { toDoTask } from './todotask';
import { domManipulation } from './domManipulation';
import { idManipulation } from './idManipulation';

domManipulation.createNewToDoList("<script>alert(\"hello\")</script>", idManipulation.getNextIDToDoList());

domManipulation.createNewTask("dsfsdgfsdf", 2, 1, 2, "23.4.2323", "23.23.2323");

const taskForm = document.getElementById("new-task-form");
domManipulation.addFormEventListener(taskForm);