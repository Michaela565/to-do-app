import "./style.css";

import { project } from "./project";
import { toDoList } from "./todolist";
import { toDoTask } from "./todotask";
import * as domManipulation from "./domManipulation";
import * as idManipulation from "./idManipulation";

domManipulation.createNewToDoList(
  '<script>alert("hello")</script>',
  idManipulation.getNextIDToDoList()
);

domManipulation.createNewTask(
  "dsfsdgfsdf",
  2,
  1,
  2,
  new Date(2323, 4, 12),
  new Date(2323, 5, 1)
);

const taskForm = document.getElementById("new-task-form");
domManipulation.addFormEventListener(taskForm, toDoTask);
