const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  gretting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CL = "showing";

/*Local Storage에 유저 이름을 추가하는 함수*/
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
/*submit 이벤트의 기본값을 없애고,
input 태그에서 받아온 값을 현재 값으로,
환영인사를 출력하고, Local Storage에 사용자를 저장한다.*/
function handleSubmit(event) {
  event.preventDefault(); //event의 기본 값을 막는다.
  const currentValue = input.value;
  paintGretting(currentValue);
  saveName(currentValue);
}
/*이름을 묻는 form(input)창을 화면에 띄우고,
eventListener를 통해 submit 이벤트가 발생하면,
handleSubmit 함수를 호출한다.*/
function askForName() {
  form.classList.add(SHOWING_CL);
  form.addEventListener("submit", handleSubmit);
}
/*환영인사 출력*/
function paintGretting(text) {
  form.classList.remove(SHOWING_CL);
  gretting.classList.add(SHOWING_CL);
  gretting.innerText = `${text}님 안녕하세요.`;
}
/*Local Storage에서 현재 유저 이름을 받아온다.
현재 유저가 없다면, 이름을 물어보는 input 창을 나타내고
현재 유저가 있다면 환영 인사를 출력한다.
*/
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGretting(currentUser);
  }
}
/*함수 초기화*/
function init() {
  loadName();
}

init();
