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

//return last element in an array
function getLastItem(arr) {
  // return arr.slice(-1)[0];
  return arr[arr.length - 1];
  // return arr[2];
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem([true, false, true]));
console.log(getLastItem(["cat", "dog", "duck"]));

//convert age to days

function calcAge(age) {
  return age * 365;
}
console.log(calcAge(65));

//testing array includes/indexOf/

//check if the element is included in arr
let arr = [10, 20, 30, 40, 50];

function includes(inputArr, element) {
  for (let item of inputArr) {
    if (item === element) {
      return true;
    }
  }
  return false;
}

// indexOf - where the element is located, at which index
function indexOf(inputArr, element) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf(arr, 20));

//slice - returns a copy of the array input into a new array object
function slice(inputArr, start, end) {
  let result = [];

  for (let i = start; i < end; i++) {
    result.push(inputArr[i]);
  }
  return result;
}
console.log(slice(arr, 1, 3));

//join
function join(inputArr, str) {
  let result = "";

  for (let i = 0; i < inputArr.length - 1; i++) {
    result += String(inputArr[i]);
    result += str;
  }

  if (inputArr.length > 0) {
    result += inputArr[inputArr.length - 1];
  }
  return result;
}
console.log(join(arr, "--"));

//filter out strings from an array
function filterArray(arr) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      filteredArray.push(arr[i]);
    }
  }
  console.log(filteredArray);
}
filterArray([1, 2, "a", "b"]);
filterArray([1, "a", "b", 0, 15]);
filterArray([1, 2, "aasf", "1", "123", 123]);

//Array of multiples //return
function arrayOfMultiples(num, length) {
  let multiplesArray = [];

  for (let i = 1; i <= length; i++) {
    multiplesArray.push(num * i);
  }
  console.log(multiplesArray);
}
arrayOfMultiples(7, 5);

//find the smallest and biggest numbers:
function minMax(arr) {
  if (arr.length === 0) {
    return [];
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min[0]) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
minMax([1, 2, 3, 4, 5]);

//sort by string length
function sortByLength(arr) {
  let sortedInAscending = arr.sort((a, b) => {
    return a.length - b.length;
  });
  return sortedInAscending;
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

//Sort Numbers in Ascending Order

function sortNumsAscending(arr) {
  if (arr == null || arr.length === 0) {
    return [];
  }
  return arr.sort((a, b) => a - b);
  //When a is less than b, a - b results in a negative value, indicating that a should come before b in the sorted array.

  // When a is greater than b, a - b results in a positive value, indicating that a should come after b in the sorted array.

  // When a is equal to b, a - b results in 0, meaning that the order of a and b remains unchanged because they are equal.
}
console.log(sortNumsAscending([1, 2, 10, 50, 5]));
