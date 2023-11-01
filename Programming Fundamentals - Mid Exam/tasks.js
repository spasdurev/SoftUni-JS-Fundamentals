//1. Cooking Masterclass
function cookingMasterclass(arr) {
  let maping = arr.map((x) => Number(x));
  let budget = maping.shift();
  let students = maping.shift();
  let priceFlour = maping.shift();
  let priceEgg = maping.shift();
  let priceApron = maping.shift();

  let totalFlour = 0;
  let totalEgg = 0;
  let totalPrice = 0;
  let studentFlour = students;

  for (let i = 1; i <= students; i++) {
    if (i % 5 == 0) {
      studentFlour--;
    } else {
      totalFlour = totalFlour;
    }
    totalFlour = studentFlour * priceFlour;
  }

  let totalApron = Math.ceil(students * 0.2 + students) * priceApron;
  totalEgg = priceEgg * 10 * students;
  totalPrice = totalFlour + totalApron + totalEgg;

  if (totalPrice <= budget) {
    console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
  } else if (totalPrice > budget) {
    let neededPrice = totalPrice - budget;
    console.log(`${neededPrice.toFixed(2)}$ more needed.`);
  }
}

cookingMasterclass([50, 2, 1.0, 0.1, 10.0]);

//2. Friend List Maintenance
function friendList(arr) {
  let friends = arr.shift().split(", ");
  for (let el of arr) {
    let [command, value1, value2] = el.split(" ");
    if (command === "Report") {
      break;
    }
    switch (command) {
      case "Blacklist":
        if (friends.includes(value1)) {
          friends[friends.indexOf(value1)] = "Blacklisted";
          console.log(`${value1} was blacklisted.`);
        } else {
          console.log(`${value1} was not found.`);
        }
        break;
      case "Error":
        if (value1 >= 0 && value1 < friends.length) {
          if (friends[value1] !== "Blacklisted" && friends[value1] !== "Lost") {
            let name = friends[value1];
            friends[value1] = "Lost";
            console.log(`${name} was lost due to an error.`);
          }
        }
        break;
      case "Change":
        if (value1 >= 0 && value1 < friends.length) {
          let name = friends[value1];
          friends[value1] = value2;
          console.log(`${name} changed his username to ${value2}.`);
        }
        break;
    }
  }
  let blacklCount = 0;
  let lostCount = 0;
  friends.map((x) => {
    if (x === "Blacklisted") {
      blacklCount++;
    } else if (x === "Lost") {
      lostCount++;
    }
  });
  console.log(`Blacklisted names: ${blacklCount}`);
  console.log(`Lost names: ${lostCount}`);
  console.log(friends.join(" "));
}
friendList([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);

//3. Chat Logger
function chatLogger(arr) {
  let chat = [];
  let currentChat = arr.shift().split(" ");
  1;
  while (currentChat[0] !== "end") {
    let command = currentChat[0];
    let message = currentChat[1];
    let editedVersion = currentChat[2];

    if (command == "Chat") {
      chat.push(message);
    } else if (command == "Delete") {
      let foundMessageIndex = chat.indexOf(message);
      if (chat[foundMessageIndex]) {
        chat.splice(foundMessageIndex, 1);
      }
    } else if (command == "Edit") {
      let foundMessageIndex = chat.indexOf(message);
      if (chat[foundMessageIndex]) {
        chat[foundMessageIndex] = editedVersion;
      }
    } else if (command == "Pin") {
      let foundMessageIndex = chat.indexOf(message);
      if (chat[foundMessageIndex]) {
        let pinnedCommand = chat[foundMessageIndex];
        chat.splice(foundMessageIndex, 1);
        chat.push(pinnedCommand);
      }
    } else if (command == "Spam") {
      for (let i = 1; i < currentChat.length; i++) {
        let spamMessage = currentChat[i];
        chat.push(spamMessage);
      }
    }
    currentChat = arr.shift().split(" ");
  }
  console.log(chat.join("\n"));
}

chatLogger([
  "Chat Hello",
  "Chat darling",
  "Edit darling Darling",
  "Spam how are you",
  "Delete Darling",
  "end",
]);
