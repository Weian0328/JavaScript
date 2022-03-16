function headAndTail(list) {
  return [list[0], list[list.lenth - 1]];
}

let a = [1, 2, 3, 4, 5];
let b = ["a", "b", "c", "f", "k"];

console.log(headAndTail(a));
// [1, 5]
console.log(headAndTail(b));
// ["a", "k"]

//   list.splice(1, list.length - 2);
//   return list;

// let fitrst = list [0]
//  let newlist=list[list.lenth - 1]
//  return newlist
