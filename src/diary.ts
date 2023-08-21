class Diary {
  constructor(
    public title: string,
    public id: number,
    private projects: any[]
  ) {}

  public getProjectsLength() {
    return this.projects.length;
  }

  public appendProject(project: any) {
    this.projects.push(project);
  }
}

export { Diary };
