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
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = item;
  arr.push(li);
});
console.log(...arr);

const Ullist = document.querySelector("#ingredients");
Ullist.append(...arr);
