function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const body = documnet.body;
const putColor = document.querySelector("color");
const chgColor = Document.querySelector("change-color");

function handlerChangeColor() {
  // style.getRandomHexColor();
}

chgColor.addEventListener("click", handlerChangeColor);

// putColor.addEventListener("click", handlerChangeColor);
