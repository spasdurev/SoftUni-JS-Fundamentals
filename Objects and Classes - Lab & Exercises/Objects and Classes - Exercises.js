//1. Employees

function createEmployeeList(inputArray) {
  let employeeList = {};

  for (let employeeName of inputArray) {
    let nameLength = employeeName.length;
    employeeList[employeeName] = nameLength;
  }

  for (let employee in employeeList) {
    console.log(
      `Name: ${employee} -- Personal Number: ${employeeList[employee]}`
    );
  }
}

createEmployeeList([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

//2. Towns

function towns(input) {
  for (let row of input) {
    let [town, latitude, longitude] = row.split(" | ");
    let formattedLatitude = Number(latitude).toFixed(2);
    let formattedLongitude = Number(longitude).toFixed(2);
    let townObject = {
      town: town,
      latitude: formattedLatitude,
      longitude: formattedLongitude,
    };
    console.log(townObject);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);

//3. Store

function manageInventory(stock, orders) {
  let inventory = {};

  for (let i = 0; i < stock.length; i += 2) {
    let productName = stock[i];
    let quantity = Number(stock[i + 1]);
    inventory[productName] = quantity;
  }

  for (let i = 0; i < orders.length; i += 2) {
    let productName = orders[i];
    let quantity = Number(orders[i + 1]);

    if (inventory.hasOwnProperty(productName)) {
      inventory[productName] += quantity;
    } else {
      inventory[productName] = quantity;
    }
  }

  for (let product in inventory) {
    console.log(`${product} -> ${inventory[product]}`);
  }
}

manageInventory(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

//4. Movies

function processMovies(input) {
  let movies = {};

  for (let line of input) {
    if (line.startsWith("addMovie")) {
      let movieName = line.substring(9);
      movies[movieName] = {};
    } else if (line.includes("directedBy")) {
      let [movieName, director] = line.split(" directedBy ");
      if (movies[movieName]) {
        movies[movieName].director = director;
      }
    } else if (line.includes("onDate")) {
      let [movieName, date] = line.split(" onDate ");
      if (movies[movieName]) {
        movies[movieName].date = date;
      }
    }
  }

  for (let movieName in movies) {
    if (movies[movieName].director && movies[movieName].date) {
      console.log(
        JSON.stringify({
          name: movieName,
          director: movies[movieName].director,
          date: movies[movieName].date,
        })
      );
    }
  }
}

processMovies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

//5. Inventory

function inventory(input) {
  let heroes = [];

  for (let line of input) {
    let [heroName, heroLevel, items] = line.split(" / ");
    let hero = {
      name: heroName,
      level: Number(heroLevel),
      items: items.split(", "),
    };
    heroes.push(hero);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

//6. Make a Dictionary

function createDictionary(input) {
  let dictionary = {};

  for (let jsonString of input) {
    let entry = JSON.parse(jsonString);
    Object.assign(dictionary, entry);
  }

  let sortedTerms = Object.keys(dictionary).sort();

  for (let term of sortedTerms) {
    let definition = dictionary[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
}

createDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);

//7. Class Vehicle

class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = {
      engine: parts.engine,
      power: parts.power,
      quality: parts.engine * parts.power,
    };
    this.fuel = fuel;
  }

  drive(fuelLoss) {
    this.fuel -= fuelLoss;
  }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle("a", "b", parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
