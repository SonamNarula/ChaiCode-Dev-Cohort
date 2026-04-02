var shipName = "the amber";
console.log("ship name :", shipName);

let crewCount = 12;
console.log("crew count:", crewCount);
crewCount = 14;
console.log("updated crew count:", crewCount);

const captainName = "Jack Sparrow";
console.log("captain name:", captainName);
// captainName = "Dipesh"; // ❌ TypeError if uncommented (const cannot be reassigned)

if (true) {
  var leakyTreasure = "Gold coins";
  let hiddenMap = "Secret map";
}

console.log("block-scoped var leaks:", leakyTreasure);
// console.log(hiddenMap); // ❌ ReferenceError (let is block scoped)

for (var i = 0; i < 3; i++) {
  // do something
}
console.log("i after var loop (function scoped):", i);

for (let j = 0; j < 3; j++) {
  // do something
}
// console.log(j); // ❌ ReferenceError (let is block scoped)

let shipSpeed = 22;
let _privatelog = "secret";
let MONGODB_URI = "";
let name = "sonam";

const treasureChest = {
  gold: 100,
  rubies: 50,
  maps: 2,
};
treasureChest.gold = 150; // ✅ mutation allowed
console.log("treasure chest after mutation:", treasureChest);
// treasureChest = { gold: 50 }; // ❌ TypeError (cannot reassign const)

const crewRoster = ["Alok", "Abhinav", "Tasnish"];
crewRoster.push("Sonam");
crewRoster[0] = "Virat";
console.log("crew roster after edits:", crewRoster);
// crewRoster = ["someone"]; // ❌ TypeError (cannot reassign const array)
