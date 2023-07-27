const inpArea = document.querySelector("#font-size-control");
const spn = document.querySelector("#text");

inpArea.addEventListener("input", changeSize);

function changeSize(evt) {
  spn.style.fontSize = evt.currentTarget.value + "px";
  console.log(evt.value);
}
