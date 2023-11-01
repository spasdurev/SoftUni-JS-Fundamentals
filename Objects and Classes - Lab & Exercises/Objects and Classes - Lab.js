//1. Person Info

function personInfo(firstName, lastName, age) {
  let personObject = {};
  personObject.firstName = firstName;
  personObject.lastName = lastName;
  personObject.age = age;

  return personObject;
}

console.log(personInfo("Peter", "Pan", "20"));

//2. City

function city(ObjectInput) {
  for (let key in ObjectInput) {
    if (ObjectInput.hasOwnProperty(key)) {
      let value = ObjectInput[key];
      console.log(`${key} -> ${value}`);
    }
  }
}

city({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});

//3. Convert to Object

function convertToObject(jsonStr) {
  let parsedObject = JSON.parse(jsonStr);

  for (let key in parsedObject) {
    let value = parsedObject[key];
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{ "name": "George", "age": 40, "town": "Sofia" }');

//4. Convert to JSON

function convertToJSON(name, lastName, hairColor) {
  personObject = {};
  personObject.name = name;
  personObject.lastName = lastName;
  personObject.hairColor = hairColor;

  let jsonString = JSON.stringify(personObject);
  console.log(jsonString);
}
convertToJSON("George", "Jones", "Brown");

//5. Cats

function createCats(catData) {
  function meow(name, age) {
    console.log(`${name}, age ${age} says Meow`);
  }

  for (let i = 0; i < catData.length; i++) {
    let [name, age] = catData[i].split(" ");
    meow(name, age);
  }
}

createCats(["Mellow 2", "Tom 5"]);

//6. Songs

function Songs(input) {
  const n = Number(input[0]);
  const filterType = input[n + 1]; // Last element is the filter type
  const songs = [];

  for (let i = 1; i <= n; i++) {
    const [typeList, name, time] = input[i].split("_");
    if (filterType === "all" || typeList === filterType) {
      console.log(name);
    }
  }
}

// Example usage:
Songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
