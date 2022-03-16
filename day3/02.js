const list = [1, 2, 3, 4, 5];
let a = list.reduce(function (acc, cv) {
  return acc + cv;
});
console.log(a);
// fn 每回合的return -> 下一回合的acc
// 沒預設值的話會打第一個元素當預設值
// 少跑一圈
