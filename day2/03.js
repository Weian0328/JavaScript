// function hello(n) {
//   if ((n >= 1, n + 2)) {
//     console.log(n);
//   } else {
//     console.log(b);
//   }
// }

// hello();

function add(a, b) {
  //我不想處理負數的運算
  if (a >= 0 && b >= 0) {
    return a + b;
  } else {
    return "err";
  }
}
//early return
// //if(a < 0 || b < 0){
//     return "err"
// }
// return a+b

console.log(add(10, 20)); //30
console.log(add(-10, 20)); //"err"
