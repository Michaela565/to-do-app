import { DiaryObject } from "./diaryObject";

class Diary extends DiaryObject {
  public title: string;
  private projects: any[];
  constructor(title: string, id: number, projects: any[]) {
    super(id, "Diary has no description");
    this.title = title;
    this.projects = projects;
  }

  public getProjectsLength() {
    return this.projects.length;
  }

  public getProject(projectid: number) {
    if (this.projects[projectid] == undefined)
      throw new Error("This to do list does not exist");
    return this.projects[projectid];
  }

  public getProjects() {
    return this.projects;
  }

  public appendProject(project: any) {
    this.projects.push(project);
  }
}

export { Diary };
