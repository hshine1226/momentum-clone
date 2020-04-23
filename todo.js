const toDoForm = document.querySelector(".js-form-toDo"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-list-toDo");

//LS: Local Storage
const TODOS_LS = "toDos";

const toDos = [];

/*JSON: JavaScript Object Notation*/
function saveToDos() {
  //localSorage에 object를 text화 시켜서 저장하기 위해 JSON.stringify를 사용한다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
/*To-Do List 생성*/
function paintToDo(text) {
  const li = document.createElement("li");
  const deleteBotton = document.createElement("button");
  const span = document.createElement("span");
  // ID 값을 toDos의 길이 + 1로 지정한다.
  const newId = toDos.length + 1;
  deleteBotton.innerText = "X";
  span.innerText = text;
  li.appendChild(deleteBotton);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObject = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObject);
  saveToDos();
}
/*submit 이벤트가 발생하면, input에서 value를 받아와서 화면에 리스트로 출력해준다.*/
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
/*로컬 스토리지에서 todolist의 아이템을 받아온다.
JSON을 이용해 parse해서 string을 object로 받아올 수 있다.
forEach를 사용하면, 각각의(개별의)toDo에 대해서 함수를 수행할 수 있다.*/
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadToDos(); //Local Storage에서 뭔가를 로드해야함.
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
