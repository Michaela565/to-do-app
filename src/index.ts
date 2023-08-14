import "./style.css";

import * as project from "./project";
import * as todolist from "./todolist";
import * as todotask from "./todotask";
import * as diary from "./diary";
import * as domManipulation from "./domManipulation";
import * as idManipulation from "./idManipulation";

// domManipulation.createNewToDoList(
//   '<script>alert("hello")</script>',
//   idManipulation.getNextIDToDoList()
// );

const mainDiary = new diary.Diary("2023", 1, []);
console.log(mainDiary.getProjectsLength());
const firstProject = new project.Project(
  "Learning cooking",
  "A project where I track my journey on learning cooking",
  3,
  []
);

firstProject.setID(firstProject.getFreeID(mainDiary));
