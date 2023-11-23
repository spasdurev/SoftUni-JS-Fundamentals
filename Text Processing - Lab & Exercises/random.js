let str = "I am JavaScript trainee"; //starting from the 5th index (which is the letter “J”) up to the 10th index
let sub = str.substring(5, 10);
console.log(sub);

let stra = "hello world";
console.log(stra.includes("hellos"));
console.log(stra.split("o").join("s"));

let text = "str";
text = text.padStart(6, "-");
text = text.padEnd(8, "-");
console.log(text);
