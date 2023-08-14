const createNewToDoList = (title: string, id: number) => {
  title = encodeInput(title);

  const toDoListHtmlTemplate = `<div class="todolist-object" data-listID="${id}">
    <h3 class="larger">${title}</h3>
    <hr>
</div>`;

  const htmlElement = elementFromHtml(toDoListHtmlTemplate);

  const page = document.querySelector(".right-page");

  page.appendChild(htmlElement);
  createAddTaskBtn(id);
};

const createNewTask = (todotaskObject: any) => {
  removeAddTaskBtn(todotaskObject.listid);

  todotaskObject.description = encodeInput(todotaskObject.description);

  const taskHtmlTemplate = `<div class="todotask-object large" data-taskID = "${todotaskObject.id}">
    <div>
        <input type="checkbox" name="${todotaskObject.projectid}-${todotaskObject.listid}-${todotaskObject.id}" id="${todotaskObject.projectid}-${todotaskObject.listid}-${todotaskObject.id}">
        <label for="${todotaskObject.projectid}-${todotaskObject.listid}-${todotaskObject.id}">${todotaskObject.description}</label>
    </div>
    <div class="dates">
        <div class="normal">${todotaskObject.creationDate}</div>
        <div>${todotaskObject.dueDate}</div>
    </div>
</div>`;

  const htmlElement = elementFromHtml(taskHtmlTemplate);

  const list = document.querySelector(
    `[data-listid = "${todotaskObject.listid}"]`
  );

  list.appendChild(htmlElement);
  createAddTaskBtn(todotaskObject.listid);
};

const createAddTaskBtn = (listid: number) => {
  const btnHtmlTemplate = `<button type="button" id="btnforlist-${listid}" value="${listid}">Add new task</button>`;

  const htmlElement = elementFromHtml(btnHtmlTemplate);

  htmlElement.addEventListener("click", () => {
    showPopup("create-new-task-popup");
  });

  const list = document.querySelector(`[data-listid = "${listid}"]`);

  list.appendChild(htmlElement);
};

const removeAddTaskBtn = (listid: number) => {
  const list = document.querySelector(`[data-listid = "${listid}"]`);

  list.removeChild(list.lastChild);
};

const addFormEventListener = (
  form: HTMLElement,
  callback: (data: any) => void,
  callbackforcallback: (data: any) => void
) => {
  const formData = form.addEventListener(
    "submit",
    createHandleSubmitter(callback, callbackforcallback)
  );
  form.addEventListener("submit", () => {
    hidePopup("create-new-task-popup");
  });
};

const showPopup = (popupID: string) => {
  const popup = document.getElementById(popupID);
  popup.classList.add("show");
};

const hidePopup = (popupID: string) => {
  const popup = document.getElementById(popupID);
  popup.classList.remove("show");
};

const createHandleSubmitter = (
  callback: (data: any) => void,
  callbackforcallback: (data: any) => void
) => {
  return (e: SubmitEvent) => {
    const data = handleSubmit(e);
    const object = callback(data);
    callbackforcallback(object);
  };
};

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const formData = new FormData(e.target as any);
  const formProps = Object.fromEntries(formData as any);

  console.log(formProps);
  return formProps;
};

const elementFromHtml = (html: string) => {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
};

const encodeInput = (input: string) => {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export { createNewToDoList, createNewTask, addFormEventListener };
