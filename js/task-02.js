const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arr = [];

ingredients.forEach((item) => {
  const unmarkedLi = document.createElement("li");
  console.dir(unmarkedLi);
  unmarkedLi.classList.add("item");
  unmarkedLi.textContent = item;
  arr.push(unmarkedLi);
});
console.log(...arr);

const Ullist = document.querySelector("#ingredients");
Ullist.append(...arr);

// const listIngredients = document.querySelector("#ingredients");
// const itemsIngredientsEl = [];

// function createItemEl(arr) {
//   arr
//     .map((item) => {
//       const listLi = document.createElement("li");

//       listLi.classList.add("item");
//       listLi.textContent = item;
//       itemsIngredientsEl.push(listLi);
//     })
//     .join("");

//   // listIngredients.insertAdjacentHTML("beforeend", itemsIngredientsEl);
//   listIngredients.append(...itemsIngredientsEl);
// }
// createItemEl(ingredients);
