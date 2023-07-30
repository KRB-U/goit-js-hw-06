const inpArea = document.querySelector("#font-size-control");

console.dir(inpArea);

const spn = document.querySelector("#text");
spn.style.fontSize = `${inpArea.value}px`;

// console.dir(spn);

inpArea.addEventListener("input", changeSize);

function changeSize(evt) {
  spn.style.fontSize = evt.target.value + "px";

  // console.dir(evt.currentTarget);
}
