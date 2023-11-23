function firstTask(input) {
  //   for (let i = 0; i < input.length; i++) {
  //     console.log(input[i]);
  //   }
  for (let char of input) {
    console.log(char);
  }
}

firstTask("Hello world");

let str = "I am JavaScript trainee";
let sub = str.substring(5, 10);
console.log(sub);

//2

function secondTask(str, start, count) {
  let end = start + count;
  console.log(str.substring(start, end));
}
secondTask("Hello World", 7, 3); // from 7th, take 3 letters

//3.

function thirdTask(text, str) {
  let censor = "*".repeat(str.length);
  let result = text;
  while (result.includes(str)) {
    result = result.replace(str, censor);
  }
  console.log(text.replace(str, censor));
}

thirdTask("Find the hidden word", "hidden");
thirdTask("A small sentence with some words", "small");

function replaceWord(text, word) {
  return text.replace(new RegExp(word, "g"), "*".repeat(word.length));
}
console.log(replaceWord("Find the hidden word", "hidden"));

//4

function taskFour(input, str) {
  let words = input.split(" ");

  let count = 0;

  for (let word of words) {
    if (word == str) {
      count++;
    }
  }
  console.log(count);
}

taskFour(
  "softuni is great place for learning programming languages",
  "softuni"
);
