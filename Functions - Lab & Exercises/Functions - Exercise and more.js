//. Smalles of Three Numbers

function smallestOfThreeNumbers(num1, num2, num3) {
  // let smallestNumber = num1;
  // if (num2 < smallestNumber) {
  //   smallestNumber = num2;
  // }
  // if (num3 < smallestNumber) {
  //   smallestNumber = num3;
  // }
  // console.log(smallestNumber);
  console.log(Math.min(num1, num2, num3));
}
smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);

//2. Add and Subtract

function addAndSubtract(num1, num2, num3) {
  let sum = (num1, num2) => num1 + num2;
  let subtract = (a, b) => a - b;

  let result1 = sum(num1, num2);
  let result2 = subtract(result1, num3);
  return result2;
  //   let sumResult = sum(num1, num2);
  //   let overAllResult = sumResult - num3;

  //   function sum(num1, num2) {
  //     return num1 + num2;
  //   }
  //   return overAllResult;
  // }
}
console.log(addAndSubtract(23, 6, 10));

//3. Characters in Range
function printCharactersBetween(char1, char2) {
  // Convert characters to ASCII codes
  let codeA = char1.charCodeAt(0);
  let codeB = char2.charCodeAt(0);

  // Determine smaller and larger ASCII codes
  let smallerCode = Math.min(codeA, codeB);
  let largerCode = Math.max(codeA, codeB);

  // Initialize an empty string to store the result
  printResult(smallerCode, largerCode);

  function printResult(smallerCode, largerCode) {
    let result = [];

    for (let curCode = smallerCode + 1; curCode < largerCode; curCode++) {
      let curChar = String.fromCharCode(curCode);
      result.push(curChar);
    }
    console.log(result.join(" "));
  }
}
printCharactersBetween("a", "d");
printCharactersBetween("#", ":");

//4. Odd And Even Sum

function sumOddAndEven(num) {
  let evenSum = 0;
  let oddSum = 0;

  let inputNum = String(num); //Convert the input number to a string to work with individual digits.

  for (let i = 0; i < inputNum.length; i++) {
    let fromStrToNum = Number(inputNum[i]);

    if (fromStrToNum % 2 === 0) {
      evenSum += fromStrToNum;
    } else {
      oddSum += fromStrToNum;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
sumOddAndEven(1000435);

//5. Palindrome Integers

// function palindromeIntegers(arr) {
//   for (let curNum of arr) {
//     checkIsPalindrome(curNum);
//   }

//   function checkIsPalindrome(num) {
//     let numStr = String(num);
//     let reversedNumStr = "";

//     for (let i = numStr.length - 1; i >= 0; i--) {
//       let curChar = numStr[i];
//       reversedNumStr += curChar;
//     }
//     let isPalindrome = numStr == reversedNumStr;
//     console.log(isPalindrome);
//   }
// }
// palindromeIntegers([123, 323, 421, 121]);

function checkIfPalindrome(numberList) {
  for (let number of numberList) {
    let arrNumber = number.toString().split("");
    let palindrome = true;
    if (arrNumber.length > 1) {
      if (arrNumber.pop() !== arrNumber.shift()) {
        palindrome = false;
      }
    }
    console.log(palindrome);
  }
}

checkIfPalindrome([123, 323, 421, 121]);

//6. Password Validator

function passwordValidator(password) {
  let isValid = true;
  let digitCount = 0;

  // Check the length
  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }

  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);

    // Check if it's a letter (A-Z or a-z) or a digit (0-9)
    if (
      !(charCode >= 48 && charCode <= 57) && // Digits
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      ) // Letters
    ) {
      console.log("Password must consist only of letters and digits");
      isValid = false;
      break;
    }

    // Count the digits
    if (charCode >= 48 && charCode <= 57) {
      digitCount++;
    }
  }

  // Check if it has at least 2 digits
  if (digitCount < 2) {
    console.log("Password must have at least 2 digits");
    isValid = false;
  }

  // If all checks passed, the password is valid
  if (isValid) {
    console.log("Password is valid");
  }
}

passwordValidator("logIn");
// passwordValidator("MyPass123");
// passwordValidator("Pa$s$s");

//7. NxN Matrix
function nxnMatirx(num) {
  for (let i = 0; i < num; i++) {
    let rowString = "";
    for (let j = 0; j < num; j++) {
      rowString += num + " ";
    }
    console.log(rowString);
  }
}
nxnMatirx(3);

//8. Perfect Number
function isPerfectNumber(num) {
  let divisorSum = 0;

  for (let i = 1; i < num - 1; i++) {
    if (num % i == 0) {
      divisorSum += i;
    }
  }
  if (divisorSum === num) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
  // if (divisorSum !== num) {
  //   console.log("It's not so perfect.");
  // }
}

isPerfectNumber(6);
isPerfectNumber(1236498);

//9. Loading Bar

function loadingBar(number) {
  let percentage = "%".repeat(number / 10);
  let dots = ".".repeat(10 - number / 10);
  if (number === 100) {
    console.log(`${number}% Complete!`);
    console.log(`[${percentage}]`);
  } else {
    console.log(`${number}% [${percentage}${dots}]`);
    console.log(`Still loading...`);
  }
}
loadingBar(100);

//10. Factorial Division

function factorialDivision(num1, num2) {
  let factorial1 = 1;
  let factorial2 = 1;

  for (let i = 1; i <= num1; i++) {
    factorial1 *= i;
  }
  for (let i = 1; i <= num2; i++) {
    factorial2 *= i;
  }
  let result = factorial1 / factorial2;
  console.log(result.toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);
