//1. Sum First and Last

function sumFirstandLast(arr) {
  const firstElement = Number(arr.shift());
  const secondElement = Number(arr.pop());

  console.log(firstElement + secondElement);
}

sumFirstandLast(["20", "30", "40"]);

//2. Negative or Positive Numbers
function negativeorPositiveNum(arr) {
  let processedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const number = Number(arr[i]);

    if (number < 0) {
      processedArray.unshift(number);
    } else {
      processedArray.push(number);
    }
  }

  for (let i = 0; i < processedArray.length; i++) {
    console.log(processedArray[i]);
  }
}

negativeorPositiveNum(["7", "-2", "8", "9"]);

//3. First and Last K Numbers

function printFirstAndLastElement(arr) {
  let k = arr[0];

  let firstElement = arr.slice(1, k + 1);
  let lastElement = arr.slice(-k);

  console.log(firstElement.join(" "));
  console.log(lastElement.join(" "));
}
printFirstAndLastElement([2, 7, 8, 9]);

//4. Last K Numbers Sequence

function lastKNumberSequence(n, k) {
  let sequence = [1];

  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = 1; j <= k && i - j >= 0; j++) {
      sum += sequence[i - j];
    }
    sequence.push(sum);
  }
  console.log(sequence.join(" "));
}
lastKNumberSequence(6, 3);

//4. Process Odd Numbers

function processOddNumbers(arr) {
  let doubledOddElements = [];
  let currentIndex = 1;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      arr[i] = arr[i] * 2;

      doubledOddElements.push(arr[i]);
      currentIndex++;
    }
  }
  let reversedDoubleElements = [];

  for (let i = doubledOddElements.length; i >= 0; i--) {
    reversedDoubleElements.push(doubledOddElements[i]);
  }
  console.log(reversedDoubleElements.join(" "));
}
processOddNumbers([10, 15, 20, 25]);

//5. Smallest Two Numbers
function findTwoSmallest(arr) {
  let sortedInAscending = arr.sort((a, b) => {
    return a - b;
  });

  return sortedInAscending.slice(0, 2).join(" "); // slice takes elements from index 0 up to, in this case 2, but it is not including index 2, hence why it returns 5 15, after the ascending
}
console.log(findTwoSmallest([30, 15, 50, 5]));
console.log(findTwoSmallest([3, 0, 10, 4, 7, 3]));

//6. List of Products
function manipulateArray(commands) {
  // Take the first index and turn it into an array.
  // Shift - cuts the first element
  // Split - turns it into an array
  // Map - turns it into an array of numbers
  let arr = commands.shift().split(" ").map(Number);

  // For Loop to go through the rest of the array.
  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(" "); // Saving the command and the numbers into an array

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    // Check for command and trigger an effect
    switch (command) {
      case "Add":
        add(arr, firstNum);
        break;

      case "Remove":
        arr = del(arr, firstNum);
        break;

      case "RemoveAt":
        delAt(arr, firstNum);
        break;

      case "Insert":
        addAt(arr, secondNum, firstNum);
        break;
    }
  }

  // Function to add number
  function add(arr, a) {
    arr.push(a);
  }

  // Function to delete a number
  function del(arr, a) {
    return (arr = arr.filter((el) => el !== a));
  }

  // Function to delete at an index
  function delAt(arr, a) {
    arr.splice(a, 1);
  }

  // Function to add number at an index
  function addAt(arr, a, b) {
    arr.splice(a, 0, b);
  }

  console.log(arr.join(" "));
}
manipulateArray([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
