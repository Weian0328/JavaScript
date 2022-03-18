// 插入指定位置

const list = document.querySelector("#list");

const newLi = document.createElement("li");
newLi.textContent = "x";

list.insertAdjacentElement("afterbegin", newLi);

// afterbegin, afterend, beforeend;

// const newLi = "<li>x</li>";
// list.insertAdjacentHTML("afterbegin", newLi);

// let msg = "x";
// const newLi = `<li>${msg}</li>`;
// list.insertAdjacentHTML("afterbegin", newLi);
