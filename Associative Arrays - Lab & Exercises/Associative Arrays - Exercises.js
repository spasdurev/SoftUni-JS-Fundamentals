//1. Words Tracker

function wordsTracker(wordsArray) {
  //Initialize an empty object to store word occurrences
  let wordCount = {};

  //Extract the words to search for
  let searchWords = wordsArray[0].split(" ");

  //Iterate over the array and count occurrences
  for (let i = 1; i < wordsArray.length; i++) {
    let currentWords = wordsArray[i].split(" ");

    for (let j = 0; j < currentWords.length; j++) {
      let lowercaseWord = currentWords[j].toLowerCase();

      if (searchWords.includes(lowercaseWord)) {
        if (wordCount[lowercaseWord]) {
          wordCount[lowercaseWord]++;
        } else {
          wordCount[lowercaseWord] = 1;
        }
      }
    }
  }

  //Sort wordCount by count in descending order
  let sortedWordCount = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

  //Iterate over the sorted wordCount and print the results
  for (let [word, count] of sortedWordCount) {
    console.log(`${word} - ${count}`);
  }
}

// Example usage
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);

//2. Odd Occurrences

function oddOccurrences(input) {
  let oddWords = {};
  let sentence = input.split(" ");

  for (let word of sentence) {
    let key = word.toLowerCase();
    if (oddWords.hasOwnProperty(key)) {
      oddWords[key]++;
    } else {
      oddWords[key] = 1;
    }
  }
  let sortedWords = Object.entries(oddWords).filter(
    (entry) => entry[1] % 2 !== 0
  );
  sortedWords.sort((a, b) => b[1] - a[1]);

  let result = sortedWords.map((entry) => entry[0]);
  console.log(result.join(" "));
}

oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");

//3. Piccolo
function piccolo(input) {
  let parking = new Map();

  for (let line of input) {
    let [direction, carNumber] = line.split(", ");

    if (direction === "IN") {
      parking.set(carNumber, true);
    } else {
      parking.delete(carNumber);
    }
  }

  if (parking.size === 0) {
    console.log("Parking Lot is Empty");
  }

  let sortedNumbers = Array.from(parking.keys()).sort((a, b) =>
    a.localeCompare(b)
  );
  console.log(sortedNumbers.join("\n"));
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

//4. Party Time

function partyTime(input) {
  let guests = {
    vip: [],
    regular: [],
  };
  let inParty = false;

  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    if (current === "PARTY") {
      inParty = true;
      continue;
    }
    if (!inParty) {
      if (isNaN(current[0])) {
        guests.regular.push(current);
      } else {
        guests.vip.push(current);
      }
    } else {
      if (isNaN(current[0])) {
        if (guests.regular.includes(current)) {
          guests.regular.splice(guests.regular.indexOf(current), 1);
        }
      } else {
        if (guests.vip.includes(current)) {
          guests.vip.splice(guests.vip.indexOf(current), 1);
        }
      }
    }
  }

  let remainingGuestsCount = guests.vip.length + guests.regular.length;
  console.log(remainingGuestsCount);
  console.log(guests.vip.join("\n"));
  console.log(guests.regular.join("\n"));
}

//5. Card Game

function cardGame(input) {
  let players = {};
  let values = {};
  let power = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    1: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let types = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  for (let line of input) {
    line = line.split(": ");
    let name = line.shift();
    if (!players.hasOwnProperty(name)) {
      players[name] = [];
      values[name] = 0;
    }
    let cards = line.join().split(", ");
    for (let card of cards) {
      if (!players[name].includes(card)) {
        players[name].push(card);
      }
    }
  }
  for (let [name, cards] of Object.entries(players)) {
    for (let card of cards) {
      let calc = power[card[0]];
      calc *= types[card[card.length - 1]];
      values[name] += calc;
    }
  }
  for (let [name, value] of Object.entries(values)) {
    console.log(`${name}: ${value}`);
  }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

//6. Company Users

function companyEmployees(input) {
  let companies = {};

  for (let line of input) {
    let [company, employee] = line.split(" -> ");
    if (!companies.hasOwnProperty(company)) {
      companies[company] = new Set();
    }
    companies[company].add(employee);
  }

  let sortedCompanies = Object.keys(companies).sort();

  for (let company of sortedCompanies) {
    console.log(company);
    for (let employee of companies[company]) {
      console.log(`-- ${employee}`);
    }
  }
}

//7. A miner task

function collectResources(input) {
  let resources = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (!resources.hasOwnProperty(resource)) {
      resources[resource] = 0;
    }

    resources[resource] += quantity;
  }

  for (let [resource, quantity] of Object.entries(resources)) {
    console.log(`${resource} -> ${quantity}`);
  }
}

collectResources(["Gold", "155", "Silver", "10", "Copper", "17"]);
