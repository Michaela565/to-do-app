import "./style.css";

import { project } from "./project";
import * as todolist from "./todolist";
import { toDoTask } from "./todotask";
import * as domManipulation from "./domManipulation";
import * as idManipulation from "./idManipulation";

domManipulation.createNewToDoList(
  '<script>alert("hello")</script>',
  idManipulation.getNextIDToDoList()
);

const taskForm = document.getElementById("new-task-form");
domManipulation.addFormEventListener(
  taskForm,
  toDoTask,
  domManipulation.createNewTask
);
