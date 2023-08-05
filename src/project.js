const project = (title, description) =>{
    const project = {
        title : title,
        description : description,
        todolists : []
    }

    const appendToDoLists = (toDoList) => {
        project.todolists.push(toDoList);
    }

    return{
        project,
        appendToDoLists
    }
}

export {project}