class Project {
  constructor(
    public title: string,
    public description: string,
    public id: number,
    private todolists: any[]
  ) {}

  public getID() {
    return this.id;
  }

  public setID(value: number) {
    this.id = value;
  }

  public getFreeID(diaryObject: any) {
    return diaryObject?.getProjectsLength?.() ?? "not a diary object";
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
