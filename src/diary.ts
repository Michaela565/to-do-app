class Diary {
  constructor(
    public title: string,
    public id: number,
    private projects: any[]
  ) {}

  public getProjectsLength() {
    return this.projects.length;
  }
}

export { Diary };
