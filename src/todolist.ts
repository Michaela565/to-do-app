import { DiaryObject } from "./diaryObject";

class ToDoList extends DiaryObject {
  private tasks: any[];
  constructor(title: string, id: number, tasks: any[]) {
    super(id, title);
    this.tasks = tasks;
  }

  public appendTask(task: any) {
    this.tasks.push(task);
  }

  public getTasks() {
    return this.tasks;
  }

  public getTask(taskId: number) {
    if (this.tasks[taskId] == undefined)
      throw new Error("This task does not exist");
    return this.tasks[taskId];
  }

  static getFreeID(projectObject: any) {
    return projectObject?.getToDoListsLength?.() ?? 0;
  }
}

export { ToDoList };
