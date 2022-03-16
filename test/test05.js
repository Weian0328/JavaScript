let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  list.splice(2, 1);
  list.push(0);

  list = list.splice(5, 1);
  aaa = newlist.push(0);
  return aaa;
}

let result = moveZerosToEnd(list);
console.log(result); // [false,1,1,2,1,3,"a",0,0]
