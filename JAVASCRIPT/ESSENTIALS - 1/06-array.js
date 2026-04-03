const carriage = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
console.log("Empty seats:", threeEmptySeats.length);

const passengers = Array("Veer", "Ayush", "Ravi");
console.log("Passengers via Array():", passengers);

const singlePassenger = Array.of(3);
console.log("Array.of(3):", singlePassenger);

const trainCode = Array.from("DUST");
console.log("Array.from(\"DUST\"):", trainCode);

const tempTrain = ["A", "B", "C", "D", "E"];
console.log("Temp train:", tempTrain);

const trainCopy = tempTrain.slice();
trainCopy.push("F");
console.log("Copy with extra coach:", trainCopy);

console.log("includes 'C':", tempTrain.includes("C"));
console.log("indexOf 'D':", tempTrain.indexOf("D"));

console.log("typeof []:", typeof []);
console.log("Array.isArray([]):", Array.isArray([]));
console.log("Array.isArray(\"Ravi\"):", Array.isArray("Ravi"));
