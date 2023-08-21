import { DiaryObject } from "./diaryObject";

class ToDoList extends DiaryObject {
  public title: string;
  private tasks: any[];
  constructor(title: string, id: number, tasks: any[]) {
    super(id);
    this.title = title;
    this.tasks = tasks;
  }

  public appendTask(task: any) {
    this.tasks.push(task);
  }

  public getTasks() {
    console.log(this.tasks);
  }

  static getFreeID(projectObject: any) {
    return projectObject?.getToDoListsLength?.() ?? 0;
  }
}

export { ToDoList };
