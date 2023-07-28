function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElemet = document.querySelector('[type="number"]'); //input
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxElement = document.querySelector("#boxes");

createBtn.addEventListener("click", handlerCreateBoxes);

destroyBtn.addEventListener("click", destroyBoxes);

function handlerCreateBoxes() {
  let number = Number(inputElemet.value);
  createBoxes(number);
}

function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const divSize = 30 + i * 10;
    arr.push(
      `<div style="background-color: ${color}; width: ${divSize}px; height: ${divSize}px;"></div>`
    );
  }

  boxElement.innerHTML = arr.join("");
}

function destroyBoxes() {
  boxElement.innerHTML = "";
}
