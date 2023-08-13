import { getTodayDate } from "./dateManipulation"
import * as idManipulation from "./idManipulation";


const toDoTask = (data) => {
    const proto = {
        description: data.description,
        dateOfCreation: getTodayDate(),
        dueDate : data.duedate,
        id : idManipulation.getNextIDTask(),
        projectid : idManipulation.getCurrentProjectID(),
        listid : idManipulation.getNextIDToDoList()
    }

    console.log(proto);
    return {proto}
}

export {toDoTask}