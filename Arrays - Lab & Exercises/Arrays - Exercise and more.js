//1. Add and Subtract
function addAndSubtract(inputArray) {
  let modifiedArr = [];
  let sumOriginal = 0;
  let sumModifiedArr = 0;

  for (let i = 0; i < inputArray.length; i++) {
    sumOriginal += inputArray[i];

    if (inputArray[i] % 2 == 0) {
      inputArray[i] += i;
    } else {
      inputArray[i] -= i;
    }
    modifiedArr.push(inputArray[i]);
    sumModifiedArr += inputArray[i];
  }
  console.log(modifiedArr);
  console.log(sumOriginal);
  console.log(sumModifiedArr);
}
addAndSubtract([5, 15, 23, 56, 35]);

//2. Common Elements
function findCommonElements(inputArrayA, inputArrayB) {
  for (let el of inputArrayA) {
    if (inputArrayB.includes(el)) {
      console.log(el);
    }
  }
}
findCommonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],

  ["Petar", 10, "hey", 4, "hello", "2"]
);

//3. Merge Arrays
function mergeArrays(inputArrayA, inputArrayB) {
  let thirdARray = [];
  for (let i = 0; i < inputArrayA.length; i++) {
    let numA = Number(inputArrayA[i]);
    let numB = Number(inputArrayB[i]);

    if (i % 2 != 0) {
      thirdARray.push(`${inputArrayA[i]}${inputArrayB[i]}`);
    } else if (i % 2 == 0) {
      thirdARray.push(numA + numB);
    }
  }

  console.log(thirdARray.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(
  ["13", "12312", "5", "77", "4"],

  ["22", "333", "5", "122", "44"]
);

//4. Array Rotation
function arrayRotation(inputArrayA, num) {
  if (num > inputArrayA.length) {
    //checking whether the number of rotation is higher than the array length, if it is i'm reducing it with the snippet below so I could avoid unnecessary rotations
    num = num % inputArrayA.length;
  }
  let rotatedElements = [];

  for (let i = 0; i < inputArrayA.length; i++) {
    let adjustedIndex = (i + num) % inputArrayA.length;
    rotatedElements.push(inputArrayA[adjustedIndex]);
  }
  console.log(rotatedElements.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);

//5. Max Number
function maxNumber(inputArray) {
  let topIntegers = [];

  for (let i = 0; i < inputArray.length; i++) {
    let isTopInteger = true;

    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[i] <= inputArray[j]) {
        isTopInteger = false;
        break;
      }
    }

    if (isTopInteger) {
      topIntegers.push(inputArray[i]);
    }
  }

  // Print the top integers found.
  console.log(topIntegers.join(" "));
}

maxNumber([1, 4, 3, 2]);
