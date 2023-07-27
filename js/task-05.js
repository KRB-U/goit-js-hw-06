const holstSpn = document.querySelector("#name-output");

const insValue = document.querySelector("#name-input");

insValue.addEventListener("input", handlerInserValue);

function handlerInserValue(evt) {
  if (evt.currentTarget.value) {
    holstSpn.textContent = evt.currentTarget.value;
  } else if (evt.currentTarget.value === "") {
    holstSpn.textContent = "Anonymous";
  }
}
