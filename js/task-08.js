const form = document.querySelector(".login-form");
// console.dir(form);
form.addEventListener("submit", handlerMangmntForm);

function handlerMangmntForm(evt) {
  evt.preventDefault();

  //   const { email, password } = evt.currentTarget.elements;

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (
    evt.currentTarget.email.value !== "" &&
    evt.currentTarget.password.value !== ""
  ) {
    console.log(email.value, password.value);
  } else {
    alert("всі поля повинні бути заповнені");
  }
}
