const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("yes");
});

btn.addEventListener("click", () => {
  console.log("no");
});

// 侵入式;
btn.onclick = 1;
btn.onclick = 2;
