let a = "@";
let star = "*";
for (let q = 1; q <= 5; q++) {
  console.log(a.repeat(5 - q) + star.repeat(2 * q - 1));
}
