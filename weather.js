/* 날씨 정보를 받아올 API KEY 
https://home.openweathermap.org/api_keys*/
const API_KEY = "589e7e5001900885992abe3d6d58049e";
const COORDS = "coords";
function saveCoords(coordsObject) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObject));
}
function handleGeoSuccess(position) {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  /*Object에 key값과 value 값의 이름을 같게 설정하고 싶으면
  key: value,
  key: value
  이것을 아래와 같이 작성하면 된다.
  */
  const coordsObject = {
    latitude,
    longitude,
  };
  saveCoords(coordsObject);
}
function handleGeoError() {
  console.log("Can't access geo location");
}
/*Geolocation API를 이용해서 위치를 받아온다.*/
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  // 좌표를 요청하는 함수 호출
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather();
  }
}
function init() {
  loadCoords();
}
init();
