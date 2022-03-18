// ...展開(但物件不行)
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = a.concat(b)
// const c = [...a, ...b];
// console.log(c);

// function sayHello(x, y, z) {
//   console.log(x, y, z);
// }

// sayHello(...a);

function hi(a, b, ...c) {
  //   console.log(a);
  //   console.log(b);
  console.log(c);
}
// hi(1, 2, 3, 4, 5);
hi(1, 2);
