// DOM (document object model)s
//用JavaScript去操控瀏覽器上的DOM元素

// const c = document.getElementById("cc");

// const c = document.querySelector("#cc");

// const c = document.querySelector("#list :last-child");
//      :nth-child(2)
// c.textContent = "x";
// console.log(c);

// const item1 = document.getElementsByClassName("item");
// const item2 = document.querySelectorAll(".item");
// console.log(item1);
// console.log(item1[0]);
// console.log(item2);

const items = document.querySelectorAll(".item");
items.forEach(function (item) {
  item.textContent = item.textContent.repeat(5);
});
