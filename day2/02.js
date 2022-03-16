// function declaratiom
// function hello() {
//   console.log(123);
//   console.log(456);
//   console.log(789);
// }
// hello();

// function expression
// 匿名函數 anonymous fn
// const hello = function () {
//   console.log(123);
// };

// hello();

// 箭頭函數 arrow fn
// const hello = () => {
//   console.log(123);
// };
// hello();

// 參數 parameter（a,b,c)
// // 引數 arguments (123,456,789)
// function sayHello(a, b = 1, c = 2) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// sayHello(123, 456, 789);

//return
function add(a, b) {
  // console.log(a + b);
  //   return result
  //   let result = a + b;
  return a + b;
}
console.log(add(1, 2));
add();
