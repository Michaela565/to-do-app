import { ToDoTask } from "./todotask";
import Task from "./reactComponents/Task";
import React from "react";
import { createRoot } from "react-dom/client";


const main = () =>{
    const taskk = new ToDoTask("a coool taaaaaask", new Date("2023-09-02"), 2, true);

    const todolistElement : any = document.querySelector(".todolist-object");

    const tasksRoot = createRoot(todolistElement);

    tasksRoot.render(<Task {...taskk}/>)

}


export{main};