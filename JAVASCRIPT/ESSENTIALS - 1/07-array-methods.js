const squad = ["Veer", "Ayush", "Ravi", "Lia"];

const loudSquad = squad.map((name) => name.toUpperCase());
console.log("map -> upper:", loudSquad);

const rMembers = squad.filter((name) => name.startsWith("R"));
console.log("filter -> startsWith R:", rMembers);

const firstLongName = squad.find((name) => name.length > 3);
console.log("find -> length > 3:", firstLongName);

const raviIndex = squad.findIndex((name) => name === "Ravi");
console.log("findIndex -> Ravi:", raviIndex);

const stack = ["alpha", "beta"];
stack.push("gamma");
console.log("push:", stack);
const lastItem = stack.pop();
console.log("pop -> removed:", lastItem, "stack:", stack);

const totalLetters = squad.reduce((sum, name) => sum + name.length, 0);
console.log("reduce -> total letters:", totalLetters);
