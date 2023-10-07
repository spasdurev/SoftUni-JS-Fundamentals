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

//4. Vowels Sum
function vowelsSum(arr) {
  const vowelValues = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let total = 0;

  for (let i = 0; i < arr[0].length; i++) {
    const character = arr[0][i].toLowerCase();
    if (vowelValues.hasOwnProperty(character)) {
      total += vowelValues[character];
    }
  }
  console.log(total);
}

vowelsSum(["hello"]);

function getFirstValue(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const firstValue = arr[0];
    result = firstValue;
  }
  console.log(result);
}
getFirstValue([1, 2, 3]);
getFirstValue([80, 5, 100]);
getFirstValue([-500, 0, 50]);

function makePair(num1, num2) {
  return [num1, num2];
}
console.log(makePair(1, 2));
makePair(51, 21);

function arrayToString(arr) {
  return arr.join("");
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));

//reverse an Array with method
function reverse(arr) {
  const reversedElements = arr.reverse();
  return reversedElements;
}
console.log(reverse([1, 2, 3, 4]));

//and loop
function reverseTwo(arr1) {
  let result = [];
  for (let i = arr1.length - 1; i > -1; i--) {
    // result.push(arr1[i]);
    result += arr1[i];
  }
  return result;
}
console.log(reverseTwo([1, 2, 3, 4]));
