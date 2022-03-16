// inclues true , false
// indexof 列出索引值
const list = ["a", "b", "c", "d"];

// for (a = 0; a < list.length; a++) {
//   console.log(list[a]);
// }

// list.forEach(function (x) {
//   console.log(x);
// });

// const logger = function (x) {
//   console.log(x);
// };
// list.forEach(logger);

// //歷遍iteration
// list.forEach(function (x, counter) {
//   console.log(counter + 1, x);
// });

//find只會找到一個,filter全部都會找到
const resault = list.find(function (x) {
  return x == "a";
});
console.log(resault);
