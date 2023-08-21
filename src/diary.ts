import { DiaryObject } from "./diaryObject";

class Diary extends DiaryObject {
  public title: string;
  private projects: any[];
  constructor(title: string, id: number, projects: any[]) {
    super(id);
    this.title = title;
    this.projects = projects;
  }

  public getProjectsLength() {
    return this.projects.length;
  }

  public appendProject(project: any) {
    this.projects.push(project);
  }
}

export { Diary };
