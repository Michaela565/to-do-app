const toDoList = (title, id, projectid) =>{
    const proto = {
        title : title,
        id : id,
        projectid : projectid,
        tasks: []
    }

    const appendTask = (task) =>{
        proto.tasks.push(task);
    }

    return{
        proto,
        appendTask
    }
}

export {toDoList}