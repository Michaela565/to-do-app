import { DiaryObject } from "./diaryObject";

class Project extends DiaryObject {
  public title: string;
  public description: string;
  private todolists: any[];
  constructor(
    title: string,
    description: string,
    id: number,
    todolists: any[]
  ) {
    super(id);
    this.title = title;
    this.description = description;
    this.todolists = todolists;
  }

  static getFreeID(diaryObject: any): number {
    return diaryObject?.getProjectsLength?.() ?? 0;
  }

  public getToDoListsLength() {
    return this.todolists.length;
  }

  public appendToDoList(todolist: any) {
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
