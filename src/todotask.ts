class ToDoTask {
  constructor(
    public description: string,
    public dateOfCreation: Date,
    public dueDate: Date,
    public id: number,
    public completion: boolean
  ) {}

  public getID() {
    return this.id;
  }

  public setID(value: number) {
    this.id = value;
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
