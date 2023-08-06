const project = (title, description, id) =>{
    const proto = {
        title : title,
        description : description,
        id : id,
        todolists : []
    }

    const appendToDoLists = (toDoList) => {
        proto.todolists.push(toDoList);
    }

    return{
        proto,
        appendToDoLists
    }
}

export {project}