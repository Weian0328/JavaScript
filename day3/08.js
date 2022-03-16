// 關閉換頁
const ln = document.querySelector("#link");
const btn = document.querySelector("#btn");
ln.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hi");
});

// 關閉右鍵選單
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(123);
});
