import "./style.css";

import { Project } from "./project";
import * as todolist from "./todolist";
import * as todotask from "./todotask";
import { Diary } from "./diary";
import * as domManipulation from "./domManipulation";

// domManipulation.createNewToDoList(
//   '<script>alert("hello")</script>',
//   idManipulation.getNextIDToDoList()
// );

const mainDiary = new Diary("2023", 5, ["shdhasd"]);
console.log(mainDiary.getProjectsLength());
const firstProject = new Project(
  "Learning cooking",
  "A project where I track my journey on learning cooking",
  3,
  []
);

const secondProject = new Project(
  "Learning cooking",
  "A project where I track my journey on learning cooking",
  9,
  ["dshfsdf"]
);
console.log(firstProject.getID());
console.log(secondProject.getID());
firstProject.setID(Project.getFreeID(mainDiary));
console.log(firstProject.getToDoLists());
console.log(secondProject.getToDoList(0));
