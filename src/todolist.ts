class ToDoList {
  constructor(
    public title: string,
    public id: number,
    private tasks: any[]
  ) {}

  public getID() {
    return this.id;
  }

  public setID(value: number) {
    this.id = value;
  }

  public appendTask(task: any) {
    this.tasks.push(task);
  }

  public getTasks() {
    console.log(this.tasks);
  }

  public getFreeID(projectObject: any) {
    return projectObject?.getToDoListsLength?.() ?? 0;
  }
}

export { ToDoList };
