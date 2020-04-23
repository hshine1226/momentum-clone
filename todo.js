const toDoForm = document.querySelector(".js-form-toDo"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-list-toDo");

//LS: Local Storage
const TODOS_LS = "toDos";

/*To-Do List 생성*/
function paintToDo(text) {
  const li = document.createElement("li");
  const deleteBotton = document.createElement("button");
  deleteBotton.innerText = "X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(deleteBotton);
  li.appendChild(span);
  toDoList.appendChild(li);
}
/*submit 이벤트가 발생하면, input에서 value를 받아와서 화면에 리스트로 출력해준다.*/
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
/*로컬 스토리지에서 todolist의 아이템을 받아온다.*/
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}
function init() {
  loadToDos(); //Local Storage에서 뭔가를 로드해야함.
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
