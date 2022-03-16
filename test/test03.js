let scores = [100, 200, 300, 400, 500, 0];
const totalscores = scores.reduce(function (acc, current) {
  return acc + current;
});
console.log(totalscores);

// let classA = ["小小明", "小小華", "小清", "小新"];

// const newclass = classA.filter(function (student) {
//   return student.length == 2;
// });
// console.log(newclass);

// const superClassA = classA.map(function (student) {
//   return "超級" + student;
// });
// console.log(superClassA);

// const classmate = classA.find(function (student) {
//   return student.length == 2;
// });
// console.log(classmate);

// console.log(classA.includes("小明"));

// console.log(classA.indexOf("小明"));

// classA.forEach(function (student) {
//   console.log(student);
// });
