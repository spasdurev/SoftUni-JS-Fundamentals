//1. Train

function trainStation(input) {
  let trainWagons = input[0].split(" ").map(Number);
  let maxCapacity = Number(input[1]);

  for (let i = 2; i < input.length; i++) {
    let command = input[i].split(" ");

    if (command[0] === "Add") {
      let passengersToAdd = Number(command[1]);
      if (passengersToAdd <= maxCapacity) {
        trainWagons.push(passengersToAdd);
      }
    } else {
      let passengersToFit = Number(command[0]);

      for (let j = 0; j < trainWagons.length; j++) {
        let availableSpace = maxCapacity - trainWagons[j];
        if (passengersToFit <= availableSpace) {
          trainWagons[j] += passengersToFit;
          break;
        }
      }
    }
  }

  console.log(trainWagons.join(" "));
}

trainStation(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

//2. Distinct Array

function removeDuplicates(inputArray) {
  let uniqueArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (!uniqueArray.includes(inputArray[i])) {
      uniqueArray.push(inputArray[i]);
    }
  }

  console.log(uniqueArray.join(" "));
}

removeDuplicates([1, 2, 3, 4]);
