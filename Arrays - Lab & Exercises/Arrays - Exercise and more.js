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

  console.log(topIntegers.join(" "));
}

maxNumber([1, 4, 3, 2]);

//6. Equal Sums
function equalSums(arr) {
  let result = "no";

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      result = i;
      break;
    }
  }
  console.log(result);
}
equalSums([1, 2, 3, 3]);

//7. Max Sequence of Equal Elements
function maxSequenceOfEqualEl(arr) {
  let currentSequence = [];
  let longestSequence = [];
  let currentElement = undefined;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === currentElement) {
      // checking if each element in the array is equal to the current, if yes > adds it to the currentsequence array
      currentSequence.push(arr[i]);
    } else {
      // if not, comparing the length of the current and longest sequences and if the current is 'longer' than the longest sequence, update the longest sequence with the current sequence and reset (add) the current sequence to the current element
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
      currentSequence = [arr[i]];
      currentElement = arr[i];
    }
  }
  console.log(longestSequence.join(" "));
}
maxSequenceOfEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

//8. Magic Sum
function magicNum(arr, num) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}
magicNum(
  [1, 7, 6, 2, 19, 23],

  8
);

//9. *Dungeonest Dark
//10. *Ladybugs

//More exercises; 1. Print N-th element
function printNthEle(array) {
  const step = Number(array[array.length - 1]);
  let result = "";

  for (let i = 0; i < array.length - 1; i += step) {
    result += array[i] + " ";
  }

  const finalSentence = result.trim();
  console.log(finalSentence);
}

// Test the function
printNthEle(["5", "20", "31", "4", "20", "2"]);

//2. Add and Remove
