const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log('clue found : ', clue1);
console.log('clue found : ', clue2);

const suspectName = "Sonam Narula";
const suspectAge = 21;
console.log("Suspect : ", suspectName, "| Age : ", suspectAge);

console.warn("Warning : Fingerprint evedence detected");
console.error("Warning : Fingerprint evedence detected");

const evidenceLog = [
  { id: 1, item: "Muddy footprint", location: "Window sill" },
  { id: 2, item: "Broken glass", location: "Living room" },
  { id: 3, item: "Red fiber strand", location: "Door handle" }
];

console.table(evidenceLog);


console.group("Group starts");
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.groupEnd("Group ends");

console.time("time starts now");

let dnaMatches = 0;
for(let i = 0; i<1000000; i++){
    dnaMatches++;
}
console.timeEnd();

console.log("ChaiCode");
console.log("ChaiCode");
console.log("ChaiCode");
console.log("ChaiCode");
console.log("ChaiCode");