// document.addEventListener("DOMContentLoaded", function () {
const h = document.querySelector("#hello");
h.addEventListener("click", function () {
  console.log("點了");
});
// });

// 高階函數（式）
// higher-order Function
// 1. 接別的函數當作參數/引數
// 2. 可以回傳一個函數

// const h = document.querySelector("#hello");
// const hey = function () {
//   console.log("點了");
// };
// h.addEventListener("click", hey);
