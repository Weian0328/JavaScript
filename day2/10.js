const list = [1, 2, 3, 4, 5];
//2,4,6,8,10

// list.forEach(function (x) {
//   console.log(2 * x);
// });

// for (var i = 0; i < list.length; i++) {
//   result.push(list[i] * 2);
// }
// console.log(result);

//map
const result = list.map(function (x) {
  return x * 2;
});
