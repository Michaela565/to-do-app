import { DiaryObject } from "./diaryObject";

class Project extends DiaryObject {
  private title: string;
  private todolists: any[];
  private static idIndex: number = 0;
  constructor(title: string, description: string, todolists: any[]) {
    super(Project.idIndex, description);
    this.title = title;
    this.todolists = todolists;
    Project.idIndex++;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(value: string): void {
    this.title = value;
  }

  static getFreeID(diaryObject: any): number {
    return diaryObject?.getProjectsLength?.() ?? 0;
  }

  public getToDoListsLength(): number {
    return this.todolists.length;
  }

  public getToDoLists(): any[] {
    return this.todolists;
  }

  public getToDoList(toDoListId: number): any {
    if (this.todolists[toDoListId] == undefined)
      throw new Error("This to do list does not exist");
    return this.todolists[toDoListId];
  }

  public appendToDoList(todolist: any): void {
    this.todolists.push(todolist);
  }
}

export { Project };
// const project = (title, description, id) =>{
//     const proto = {
//         title : title,
//         description : description,
//         id : id,
//         todolists : []
//     }

//     const appendToDoLists = (toDoList) => {
//         proto.todolists.push(toDoList);
//     }

//     return{
//         proto,
//         appendToDoLists
//     }
// }

// export {project}
