// String substring

function stringSubstring(word, text) {
  text = text.toLowerCase().split(" ");
  //   console.log(text);
  if (text.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");

// Cut and Reverse

function cutAndReverse(str) {
  let middleIndex = str.length / 2;
  let firstHalf = str.slice(0, middleIndex).split("").reverse().join("");
  let secondHalf = str.slice(middleIndex).split("").reverse().join("");
  console.log(firstHalf);
  console.log(secondHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIssihT");

// Reveal Words

function revealWords(wordStr, text) {
  let words = wordStr.split(", ");

  for (let word of words) {
    let repeatCount = word.length;
    let starTemplate = "*".repeat(repeatCount);
    text = text.replace(starTemplate, word);
  }
  console.log(text);
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);

revealWords(
  "great, learning",
  "softuni is ******** place for ***** new programming languages"
);

// Extract file

function extractFile(path) {
  let fileInfo = path.split("\\").pop();

  let lastDotIndex = fileInfo.lastIndexOf(".");
  let fileName = fileInfo.slice(0, lastDotIndex);

  let fileExtension = fileInfo.slice(lastDotIndex + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");

// Modern Times of #

function modernTimesOfHashTag(str) {
  let specialWords = [];
  let words = str.split(" ");

  for (let word of words) {
    if (word.startsWith("#")) {
      let specialWord = word.slice(1);
      if (specialWord.match(/^[a-zA-Z]+$/)) {
        specialWords.push(specialWord); // Add valid special word to the list
      }
    }
  }
  for (let word of specialWords) {
    console.log(word);
  }
}
console.log(
  modernTimesOfHashTag(
    "Nowadays everyone uses # to tag a #special word in #socialMedia"
  )
);

// Replace Repeating Chars

function replaceRepeatingChars(str) {
  let outputString = "";
  let previousChar = "";

  for (let char of str) {
    if (char !== previousChar) {
      outputString += char;
      previousChar = char;
    }
  }

  console.log(outputString);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");

// Pascal-Case Splitter

function splitPascalCase(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (char === char.toUpperCase() && i > 0) {
      result += ", ";
    }
    result += char;
  }
  console.log(result);
}

splitPascalCase("HoldTheDoor");
