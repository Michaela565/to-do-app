class ToDoList {
  constructor(
    public title: string,
    public id: number,
    private tasks: any[]
  ) {}

  public appendTask(task: any) {
    this.tasks.push(task);
  }

  public getTasks() {
    console.log(this.tasks);
  }
}

export { ToDoList };
