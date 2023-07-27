const list = document.querySelector("#categories");

const arr = [...list.children];
// console.log(arr);
console.log(`Number of categories: ${list.childElementCount}`);

arr.forEach((el) => {
  const [elemTitle, elemUl] = el.children;
  const textCont = elemTitle.textContent; //h2
  const elemList = elemUl.childElementCount;

  console.log(`Category: ${textCont}`);
  console.log(`Elements: ${elemList}`);
});

// const list1 = document.querySelector("#categories");
// const items1 = list1.querySelectorAll("li.item");
// console.log(items1);
// console.log(`Number of categories: ${items1.length}`);

// items1.forEach((item1) => {
//   const title1 = item1.querySelector("h2").textContent;
//   const elem1 = item1.querySelectorAll("li").length;

//   console.log(`Category: ${title1}`);
//   console.log(`Elements: ${elem1}`);
// });

console.log("TASK 1-----------");
