//1.使用for迴圈印出九九乘法表
for (let a = 1; a < 10; a++)
  for (let b = 1; b < 10; b++) {
    console.log(a + "x" + b + "=" + a * b);
  }

/*2.使用for迴圈印出
 *
 **
 ***
 ****
 *****
 */
let star = "*";
for (let q = 1; q <= 5; q++) {
  console.log(star.repeat(q));
}

/*3.使用for迴圈印出
＠＠＠＠＊
＠＠＠＊＊＊
 ＠＠＊＊＊＊＊
 ＠＊＊＊＊＊＊＊＊
＊＊＊＊＊＊＊＊＊＊  
*/
let x = " ";
let y = "*";
for (let z = 1; z <= 5; z++) {
  console.log(x.repeat(5 - z) + y.repeat(2 * z - 1));
}
