const domManipulation = (() => {
    const createNewToDoList = (title, id) => {

        title = encodeInput(title);

        const toDoListHtmlTemplate = `<div class="todolist-object" data-listID="${id}">
        <h3 class="larger">${title}</h3>
        <hr>
    </div>`;

        const htmlElement = elementFromHtml(toDoListHtmlTemplate);

        const page = document.querySelector(".right-page");

        page.appendChild(htmlElement);
        createAddTaskBtn(id);

    }

    const createNewTask = (description, id, projectid, listid, dueDate, creationDate) => {

        removeAddTaskBtn(listid);

        description = encodeInput(description);

        const taskHtmlTemplate = `<div class="todotask-object large" data-taskID = "${id}">
        <div>
            <input type="checkbox" name="${projectid}-${listid}-${id}" id="${projectid}-${listid}-${id}">
            <label for="${projectid}-${listid}-${id}">${description}</label>
        </div>
        <div class="dates">
            <div class="normal">${creationDate}</div>
            <div>${dueDate}</div>
        </div>
    </div>`;

        const htmlElement = elementFromHtml(taskHtmlTemplate);

        const list = document.querySelector(`[data-listid = "${listid}"]`);

        list.appendChild(htmlElement);
        createAddTaskBtn(listid);
    }

    const createAddTaskBtn = (listid) => {
        const btnHtmlTemplate = `<button type="button" id="btnforlist-${listid}" value="${listid}">Add new task</button>`;

        const htmlElement = elementFromHtml(btnHtmlTemplate);

        const list = document.querySelector(`[data-listid = "${listid}"]`);

        list.appendChild(htmlElement);
    }

    const removeAddTaskBtn = (listid) => {
        const list = document.querySelector(`[data-listid = "${listid}"]`);

        list.removeChild(list.lastChild);
    }

    const elementFromHtml = (html) =>{
        const template = document.createElement("template");

        template.innerHTML = html.trim();

        return template.content.firstElementChild;
    }

    const encodeInput = (input) => {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    return {
        createNewToDoList,
        createNewTask
    }
})();

export { domManipulation }