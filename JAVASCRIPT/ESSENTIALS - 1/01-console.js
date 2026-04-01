const clue1 = "muddy footprint near the window";
const clue2 = "broken glass on the table";
console.log("clue found: " + clue1);
console.log("clue found: " + clue2);

const suspectName = "Sonam";
const suspectAge = 20;
console.log("Suspect: ", suspectName, "| Age: ", suspectAge);

console.warn("warning: fingerprint evidence detected");
console.error("warning: fingerprint evidence detected");

const evidenceLog = [
  { id: 1, item: "Muddy footprint", location: "Window sill" },
  { id: 2, item: "Broken glass",  location: "Living room" },
  { id: 3, item: "Red fiber strand", location: "Door handle" },
];
console.table(evidenceLog);

console.group("group starts");
console.log("my log 1")
console.log("my log 2")
console.log("my log 3")
console.groupEnd();

console.time("time start now")

let dnaMatches = 0
for (let i = 0; i < 100000;i++){
    dnaMatches++;
}
console.timeEnd("time ends now");

console.log("Sonam Narula")
console.count("Sonam Narula")
console.log("Sonam Narula")
console.count("Sonam Narula")
console.log("Sonam Narula")
console.count("Sonam Narula")
console.log("Sonam Narula")
console.count("Sonam Narula")
console.log("Sonam Narula")
console.count("Sonam Narula")

console.count("Sonam Narula")