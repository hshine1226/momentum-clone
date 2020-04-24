const body = document.querySelector("body");
const IMG_NUMBER = 4;
const section = document.querySelector("section");

function paintImage(imgNumber) {
  /*const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);*/
  section.style.background = `black url(images/${imgNumber}.jpg) center / cover`;
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
