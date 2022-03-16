const cat = {
  age: 18,
  name: "kk",
  attack: function () {
    console.log("go!");
  },
};
cat.attack();
console.log(cat);
console.log(cat.age);
console.log(cat.name);
// console.log(cat["age"]);
delete cat.age;
console.log(cat);
