import "./style.css";

import { Project } from "./project";
import * as todolist from "./todolist";
import { ToDoTask } from "./todotask";
import { Diary } from "./diary";
import Task from "./reactComponents/Task";
import DiaryDOM from "./reactComponents/Diary";
import React from "react";
import { createRoot } from "react-dom/client";


const rootElement : any = document.getElementById("content");

const root = createRoot(rootElement);

const deafultDiary = new Diary("deafult diary", 0, []);

root.render(<DiaryDOM/>)

//tasksRoot.render(<Task {...taskk}/>)