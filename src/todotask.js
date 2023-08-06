import { getTodayDate } from "./dateManipulation"

const toDoTask = (description, dueDate, id, projectid, taskid) => {
    const proto = {
        description: description,
        dateOfCreation: getTodayDate(),
        dueDate : dueDate,
        id : id,
        projectid : projectid,
        taskid : taskid
    }

    return {proto}
}

export {toDoTask}