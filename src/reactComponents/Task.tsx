import React from "react";

function Task({description, dateOfCreation, dueDate, id, completion} : any) : any{
return (<div className="todotask-object large" data-taskid = {id}>
<div>
    <input type="checkbox" name={id} id={id} defaultChecked={completion}/>
    <label htmlFor={id}>{description}</label>
</div>
<div className="dates">
    <div className="normal">{dateOfCreation.toString()}</div>
    <div>{dueDate.toString()}</div>
</div>
</div>);
}

export default Task;