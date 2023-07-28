const form = document.querySelector(".login-form");
const objUser = {
  email: "",
  password: "",
};

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
    return;
  } else {
    objUser.email = email.value;
    objUser.password = password.value;
    console.log(objUser);
  }
  form.reset();
}
