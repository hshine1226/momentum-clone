const form = document.querySelector(".js-form"), 
    input = form.querySelector("input"),
    gretting = document.querySelector(".js-greetings");
    
const USER_LS = "currentUser",
    SHOWING_CL = "showing";

//local storage
function paintGretting(text){
    form.classList.remove(SHOWING_CL);
    gretting.classList.add(SHOWING_CL);
    gretting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        // she is not
    }
    else{
        // she is
        paintGretting(currentUser);
    }
}
function init(){
    loadName();
}
init();