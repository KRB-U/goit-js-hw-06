function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
// let clr = "";
// console.log(clr);

// const body = documnet.body;

const putColor = document.querySelector("color");
console.dir(putColor);
const chgColor = document.querySelector("change-color");

// function handlerChangeColor(evt) {
//   clr = evt.getRandomHexColor();

// console.log(clr);
// }

chgColor.addEventListener("click", handlerChangeColor);

// putColor.addEventListener("click", handlerChangeColor);
