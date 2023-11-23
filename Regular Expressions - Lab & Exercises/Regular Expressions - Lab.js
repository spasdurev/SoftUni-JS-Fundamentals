// Match Full Name

function matchFullName(names) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let validNames = [];

  while ((valName = pattern.exec(names)) !== null) {
    validNames.push(valName[0]);
  }
  console.log(validNames.join(" "));
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
);

// Match Phone Number

function matchPhoneNumber(numbers) {
  let pattern = /\+359([ |-])2?\1(\d{3})\1(\d{4})\b/g;
  //   let pattern = /\+359\s2\s\d{3}[-\s]\d{4}\b/;
  let validNumbers = [];
  while ((validNum = pattern.exec(numbers)) !== null) {
    validNumbers.push(validNum[0]);
  }
  console.log(validNumbers.join(", "));
}

matchPhoneNumber([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);

// Match Dates

function matchDatesA(arr) {
  let pattern =
    /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

  while ((validDates = pattern.exec(arr)) !== null) {
    let day = validDates.groups["day"];
    let month = validDates.groups["month"];
    let year = validDates.groups["year"];
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}

matchDatesA([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016",
]);

//Second solution

// function matchDatesB(arr) {
//   let pattern =
//     /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
//   for (let i = 0; i < arr.length; i++) {
//     let text = arr[i];
//     let validDates = [...text.matchAll(pattern)];

//     for (let j = 0; j < validDates.length; j++) {
//       let result = `Day: ${validDates[j].groups.day}, Month: ${validDates[j].groups.month}, Year: ${validDates[j].groups.year}`;
//       console.log(result);
//     }
//   }
// }

// matchDatesB([
//   "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016",
// ]);
