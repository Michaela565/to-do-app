import { DiaryObject } from "./diaryObject";

class ToDoTask extends DiaryObject {
  public dateOfCreation: Date;
  public dueDate: Date;
  public completion: boolean;
  constructor(
    description: string,
    dateOfCreation: Date,
    id: number,
    completion: boolean
  ) {
    super(id, description);
    this.dateOfCreation = dateOfCreation;
    this.dueDate = new Date();
    this.completion = completion;
  }

  static getFreeID(toDoListObject: any) {
    return toDoListObject?.getToDoListsLength?.() ?? 0;
  }
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
