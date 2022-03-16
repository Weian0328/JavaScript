for (let a = 1; a < 10; a++)
  for (let b = 1; b < 10; b++) {
    console.log(a + "x  " + b + "=" + a * b);
  }

let star = "*";
for (let q = 1; q <= 5; q++) {
  console.log(star.repeat(q));
}

let w = " ";
let e = "*";

for (let q = 1; q <= 5; q++) {
  console.log(w.repeat(5 - q) + e.repeat(2 * q - 1));
}
