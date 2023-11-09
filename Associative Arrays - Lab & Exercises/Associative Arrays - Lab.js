//1. Phone Book

function phoneBook(entries) {
  let phoneBook = {};

  for (let entry of entries) {
    // Split the entry into name and phone number
    let [name, phoneNumber] = entry.split(" ");

    // Check if the name is already in the phoneBook
    if (phoneBook.hasOwnProperty(name)) {
      // If it is, update the existing phone number
      phoneBook[name] = phoneNumber;
    } else {
      // If it's not, add a new entry to the phoneBook
      phoneBook[name] = phoneNumber;
    }
  }
  for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

//2. Meetings

function manageMeetings(appointments) {
  let scheduledMeetings = {};
  let successfulMeetings = [];

  for (let appointment of appointments) {
    let [weekday, name] = appointment.split(" ");

    if (scheduledMeetings.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      scheduledMeetings[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
      successfulMeetings.push(appointment);
    }
  }

  for (let appointment of successfulMeetings) {
    let [weekday, name] = appointment.split(" ");
    console.log(`${weekday} -> ${name}`);
  }
}

manageMeetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

//3. Address book

function storeAddressInfo(inputData) {
  let addressBook = {};

  for (let data of inputData) {
    let [name, address] = data.split(":");
    addressBook[name] = address;
  }

  let sortedNames = Object.keys(addressBook).sort();

  for (let name of sortedNames) {
    console.log(`${name} -> ${addressBook[name]}`);
  }
}

storeAddressInfo([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);

//4. Storage

function trackItemsAndQuantity(inputData) {
  let itemQuantityMap = new Map();

  for (let data of inputData) {
    let [item, quantity] = data.split(" ");

    if (itemQuantityMap.has(item)) {
      let currentQuantity = itemQuantityMap.get(item);
      itemQuantityMap.set(item, currentQuantity + parseInt(quantity));
    } else {
      itemQuantityMap.set(item, parseInt(quantity));
    }
  }

  for (let [item, quantity] of itemQuantityMap) {
    console.log(`${item} -> ${quantity}`);
  }
}

trackItemsAndQuantity(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);

//5. School Grades

function schoolGrades(input) {
  let grades = {};

  for (let line of input) {
    let list = line.split(" ");
    let studentName = list.shift();
    let studentGrades = list.map(Number);

    if (!grades.hasOwnProperty(studentName)) {
      grades[studentName] = studentGrades;
    } else {
      studentGrades.forEach((element) => {
        grades[studentName].push(element);
      });
    }
  }

  let sortedGrades = Object.entries(grades).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let kvp of sortedGrades) {
    console.log(`${kvp[0]}: ${averageGrades(kvp[1]).toFixed(2)}`);
  }

  function averageGrades(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log("--------------");
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);

//6. Word occurences

function countWords(text) {
  let wordCountMap = new Map();

  for (let word of text) {
    let normalizedWord = word.toLowerCase();
    if (wordCountMap.has(normalizedWord)) {
      wordCountMap.set(normalizedWord, wordCountMap.get(normalizedWord) + 1);
    } else {
      wordCountMap.set(normalizedWord, 1);
    }
  }

  let wordCountArray = [...wordCountMap];

  wordCountArray.sort((a, b) => b[1] - a[1]);

  for (let [word, count] of wordCountArray) {
    console.log(`${word} -> ${count} times`);
  }
}

countWords([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
