// function num1to1000() {
//   for (let i = 7; i <= 997; i++) {
//     if (i % 10 === 7) {
//       console.log(i);
//     }
//   }
// }

// num1to1000();

//2. Multiplication table
function solve(multiplier) {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    result = i * multiplier;
    console.log(`${i} * ${multiplier} = ${result}`);
  }
}
solve(["5"]);

//3. Sum of Numbers
function sumOfDigits(arr) {
  let sum = 0;
  const arrStr = arr.toString();

  for (let i = 0; i < arrStr.length; i++) {
    let digit = Number(arrStr[i]);
    sum += digit;
  }
  console.log(`The sum of the digits is:${sum}`);
}
sumOfDigits(["1234"]);
