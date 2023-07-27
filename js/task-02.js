const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = "Potatoes";
});

// list.textContent = ingredients["Potatoes"];
// console.log(list.textContent);
// list.classList.add("item");
// list.innerHTML;
