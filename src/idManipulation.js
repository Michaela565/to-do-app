const idManipulation = (() => {
    const getCurrentProjectID = () => {
        const currentProjectElement = document.querySelector("[data-projectid]")
        const currentProjectID = currentProjectElement.dataset.projectid;

        console.log(currentProjectID);
        return currentProjectID;
    }

    const getNextIDToDoList = () =>{
        const toDoLists = document.querySelectorAll('[data-listid]');
        const lastItem = toDoLists.item(toDoLists.length - 1);
        const nextID = Number(lastItem.dataset.listid) + 1;

        return nextID;
    }

    const getNextIDTask = () => {
        const tasks = document.querySelectorAll('[data-taskid]');
        const lastItem = tasks.item(tasks.length - 1);
        const nextID = Number(lastItem.dataset.taskid) + 1;

        return nextID;
    }

    return {
        getNextIDToDoList,
        getNextIDTask,
        getCurrentProjectID
    }
})();

export {idManipulation}