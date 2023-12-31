function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// console.log(getRandomHexColor());

const body = document.querySelector("body");
const setColor = document.querySelector(".color");
const BtnChgColor = document.querySelector(".change-color");

function handlerChangeColor() {
  let clr = getRandomHexColor();
  body.style.backgroundColor = clr;
  setColor.textContent = clr;
}

BtnChgColor.addEventListener("click", handlerChangeColor);
