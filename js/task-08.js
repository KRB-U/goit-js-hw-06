const form = document.querySelector(".login-form");
// console.dir(form);
console.dir(form);
form.addEventListener("submit", handlerMangmntForm);

function handlerMangmntForm(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  //   const {
  //     elements: { email, password },
  //   } = evt.currentTarget;

  if (form.email.value === "" || form.password.value === "") {
    alert("Заповніть усі поля ");
  } else {
    console.log(email.value, password.value);
  }
}
