let counterValue = 0;

const spanEl = document.querySelector("#value");

const minus = spanEl.previousElementSibling;
const plus = spanEl.nextElementSibling;

minus.addEventListener("click", handlerMinusClicker);

plus.addEventListener("click", handlerPlusClicker);

function handlerMinusClicker() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function handlerPlusClicker() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}

// let counterValue = 0;
// const plusBtn = document.querySelector(
//   '#counter button[data-action="increment"]'
// );
// const minusBtn = document.querySelector(
//   '#counter button[data-action="decrement"]'
// );
// const span = document.querySelector("#value");

// plusBtn.addEventListener("click", plus);
// minusBtn.addEventListener("click", minus);

// function plus() {
//   counterValue += 1;
//   span.textContent = counterValue;
// }
// function minus() {
//   counterValue -= 1;
//   span.textContent = counterValue;
// }
