// 資料傳輸出來都是字串
// 資料格式 CSV,XML,JSON
// AJAX＝非同步

const API = "https://jsonplaceholder.typicode.com/users";

// const parser = (resp) => resp.json();
// const logger = (data) => {
//   console.log(data);
// };
// const catcher = (err) => {
//   console.log("fail--------" + err);
// };
// fetch(API).then(parser).then(logger).catch(catcher);

async function getUsers() {
  const rawData = await fetch(API);
  const users = await rawData.json();
  users.forEach((user) => {
    console.log(user.name);
  });
}

getUsers();

// fetch(API)
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("fail--------" + err);
//   });

// const req = new XMLHttpRequest();

// req.addEventListener("load", () => {
//   let users = JSON.parse(req.responseText);
//   users.forEach((user) => {
//     console.log(user.name);
//   });
//   console.log(resp);
// });

//   const ul = document.createElement("ul");
//   let users = JSON.parse(req.responseText);
//   users.forEach((user) => {
//     const li = document.createElement("li");
//     li.textContent = user.name;
//     ul.appendChild(li);
//   });
//   document.querySelector("body").appendChild(ul);
// });

// req.open("GET", API);
// req.send();
