const weather = document.querySelector(".js-weather");
/* 날씨 정보를 받아올 API KEY 
https://home.openweathermap.org/api_keys
API(Application Programming Interface)
다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단*/
const API_KEY = "589e7e5001900885992abe3d6d58049e";
const COORDS = "coords";
function getWeather(lat, lon) {
  /*weather data를 얻어올 때는 fetch를 사용한다.
  https://openweathermap.org/current#data 에서 Units format을 확인해보면
  units를 확인할 수 있다. 
  나는 온도가 섭씨로 표시되기 원하기 때문에 units=metric을 fetch 마지막에 추가한다.
  then은 fetch가 끝나길 기다렸다가 함수를 실행하게 해준다. 이 부분이 이해가 안가면
  javascript 코스를 수강하자!
  */
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
      console.log(json);
    });
}
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
  getWeather(latitude, longitude);
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
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}
function init() {
  loadCoords();
}
init();
