const inputObject = document.querySelector("#validation-input");
console.dir(inputObject);

const validValue = inputObject.dataset.length;

inputObject.addEventListener("blur", handlerValueCheck);

function handlerValueCheck(evt) {
  console.dir(evt);
  if (evt.target.value.length === Number(validValue)) {
    inputObject.classList = "valid";
  } else {
    inputObject.classList = "invalid";
  }
}

// console.dir(inputObject.dataset.length);
