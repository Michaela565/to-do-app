// const idManipulation = (() => {
const getCurrentProjectID = () => {
  const currentProjectElement: HTMLElement =
    document.querySelector("[data-projectid]");
  const currentProjectID = Number(currentProjectElement.dataset.projectid);

  console.log(currentProjectID);
  return currentProjectID;
};

const getNextIDToDoList = () => {
  const toDoLists: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-listid]");
  const lastItem = toDoLists.item(toDoLists.length - 1);
  const nextID = Number(lastItem?.dataset?.listid ?? 0) + 1;

  return nextID;
};

const getNextIDTask = () => {
  const tasks: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-taskid]");
  const lastItem = tasks.item(tasks.length - 1);
  const nextID = Number(lastItem?.dataset?.taskid ?? 0) + 1;

  return nextID;
};

export { getNextIDToDoList, getNextIDTask, getCurrentProjectID };
// })();

// const test = {
//     getNextIdToDoList:  () => {
//         const currentProjectElement = document.querySelector("[data-projectid]")
//         const currentProjectID = currentProjectElement.dataset.projectid;

//         console.log(currentProjectID);
//         return currentProjectID;
//     },
// }

// export {idManipulation}
