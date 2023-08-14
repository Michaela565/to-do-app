import { getTodayDate } from "./dateManipulation";
import * as idManipulation from "./idManipulation";

class ToDoTask {
  constructor(
    public description: string,
    public dateOfCreation: Date,
    public dueDate: Date,
    public id: number,
    public completion: boolean
  ) {}
}

export { ToDoTask };

// const toDoTask = (data) => {

//     return {
//         description: data.description,
//         dateOfCreation: getTodayDate(),
//         dueDate : data.duedate,
//         id : idManipulation.getNextIDTask(),
//         projectid : idManipulation.getCurrentProjectID(),
//         listid : idManipulation.getIDToDoList()
//     }
// }

// export {toDoTask}
