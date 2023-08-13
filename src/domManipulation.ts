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

const createNewTask = (
  description: string,
  id: number,
  projectid: number,
  listid: number,
  dueDate: Date,
  creationDate: Date
) => {
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
  callback: (data: any) => void
) => {
  const formData = form.addEventListener(
    "submit",
    createHandleSubmitter(callback)
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

const createHandleSubmitter = (callback: (data: any) => void) => {
  return (e: SubmitEvent) => {
    const data = handleSubmit(e);
    callback(data);
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
