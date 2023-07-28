const spnOut = document.querySelector("#name-output");
const inputArea = document.querySelector("#name-input");

inputArea.addEventListener("input", handlerInserValue);

function handlerInserValue(evt) {
  if (evt.currentTarget.value) {
    spnOut.textContent = evt.currentTarget.value;
  } else if (evt.currentTarget.value === "") {
    spnOut.textContent = "Anonymous";
  }
}
