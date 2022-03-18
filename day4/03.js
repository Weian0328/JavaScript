const cat = {
  name: "kk",
  age: 18,
};

// let name = cat.name;
// let age = cat.age;

let name = "cc";
let { name: petname, age } = cat;
// 解構

console.log(petname, age);

// function hello({name, age}){
//     console.log(name, age);
// }

// const hero = {
//     name = "kk";
//     age = 18;
// }

// hello(hero)
