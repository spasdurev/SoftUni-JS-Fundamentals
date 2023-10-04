//1. Sum First and Last Array Elements
function solve(nums) {
  //   console.log(nums[0] + nums[nums.length - 1]);
  let first = nums[0];
  let last = nums[nums.length - 1];
  console.log(first + last);
}

solve([20, 30, 40]);

//2. Day of Week
function dayOfweek(days) {
  let weekDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (days >= 1 && days <= 7) {
    console.log(weekDay[days - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfweek(9);

//3. Reverse an Array of Numbers
function reverseAnArrayOfNumbers(num, arr) {
  let result = [];
  for (let i = 0; i < num; i++) {
    if (i < arr.length) {
      result.push(arr[i]);
    }
  }
  result.reverse();
  console.log(result.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);

//4. Reverse in Place
function reverseInPlace(inputArray) {
  let result = [];

  for (let i = 0; i <= inputArray.length; i++) {
    result[i] = inputArray[i];
  }

  let reversed = [];
  for (let i = inputArray.length - 1; i >= 0; i--) {
    reversed[reversed.length] = result[i];
  }

  console.log(reversed.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e", "f"]);

//5. Sum Even Numbers
function sumEvenNumbers(inputArray) {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = Number(inputArray[i]);
  }
  for (let num of inputArray) {
    if (num % 2 == 0) {
      sum += num;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["2", "4", "6", "8", "10"]);

//6. Even and Odd Subtraction
function evenAndOddSubstraction(inputArray) {
  let evenSum = 0;
  let oddSum = 0;

  for (let num of inputArray) {
    if (num % 2 == 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  console.log(evenSum - oddSum);
}
evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubstraction([3, 5, 7, 9]);
evenAndOddSubstraction([2, 4, 6, 8, 10]);

//7. Equal Arrays
function equalArrays(inputArrayA, inputArrayB) {
  let sum = 0;
  let index = -1;
  let areIdentical = true;

  for (let i = 0; i < inputArrayA.length; i++) {
    if (inputArrayA[i] !== inputArrayB[i]) {
      areIdentical = false;
      index = i;
      break; // Once difference is found, exit the loop
    }
  }

  if (areIdentical) {
    for (let num of inputArrayA) {
      sum += Number(num);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);

//8. Condense Array To Number
function condenseArray(inputArray) {
  while (inputArray.length > 1) {
    let condensedArray = [];

    for (let i = 0; i < inputArray.length - 1; i++) {
      let condensedNumber = inputArray[i] + inputArray[i + 1];
      condensedArray.push(condensedNumber);
    }

    inputArray = condensedArray;
  }

  return inputArray[0];
}

const result = condenseArray([2, 10, 3]);
console.log(result);
