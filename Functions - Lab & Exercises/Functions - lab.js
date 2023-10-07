//1. Format Grade
function formatGrade(grade) {
  if (grade < 3.0) {
    console.log("Fail (2)");
  } else if (grade >= 3.0 && grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else if (grade >= 5.5) {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}
formatGrade(4.5);

//2. Math power
function mathPower(n1, n2) {
  let result = n1 ** n2;
}
console.log(mathPower(2, 8));

//3. Repeat String
function repeatString(str, n) {
  //   let newString = str.repeat(n);
  //   return newString;
  let newString = "";
  while (n > 0) {
    newString += str;
    n--;
  }
  return newString;
}
console.log(repeatString("abc", 3));

//4. Orders
function orders(str, n) {
  let totalPrice = 0;

  if (str == "coffee") {
    totalPrice = 1.5 * n;
    return totalPrice.toFixed(2);
  } else if (str == "water") {
    totalPrice = 1.0 * n;
    return totalPrice.toFixed(2);
  } else if (str == "coke") {
    totalPrice = 1.4 * n;
    return totalPrice.toFixed(2);
  } else if (str == "snacks") {
    totalPrice = 2.0 * n;
    return totalPrice.toFixed(2);
  }
}
console.log(orders("coffee", 2));
console.log(orders("water", 5));

//5. Simple Calculator
function simpleCalculator(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
  }
  return result;
}
console.log(simpleCalculator(5, 5, "multiply"));
console.log(simpleCalculator(40, 8, "divide"));
console.log(simpleCalculator(12, 19, "add"));
console.log(simpleCalculator(50, 13, "subtract"));

//6. Sign check
function signCheck(num1, num2, num3) {
  let resultSign = ""; //will store positive or negative
  let multiply = num1 * num2 * num3;
  if (multiply >= 0) {
    resultSign = "Positive";
  } else {
    resultSign = "Negative";
  }
  return resultSign;
  // if (num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0) {
  //   resultSign = "Positive";an even number of negative values results in a positive one, because when you multiply an even number of negative values, the result will be positive - didn't get 100/100
  // } else {
  //   resultSign = "Negative";
  // }
  // return resultSign;
}
console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));
