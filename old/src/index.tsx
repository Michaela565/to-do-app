import "./style.css";

import { Project } from "./project";
import * as todolist from "./todolist";
import { ToDoTask } from "./todotask";
import { Diary } from "./diary";
import Task from "./reactComponents/Task";
import React from "react";
import { createRoot } from "react-dom/client";

const taskk = new ToDoTask("a coool taaaaaask", new Date("2023-09-02"), 2, true);

const todolistElement : any = document.querySelector(".todolist-object");

const tasksRoot = createRoot(todolistElement);

//tasksRoot.render(<Task {...taskk}/>)