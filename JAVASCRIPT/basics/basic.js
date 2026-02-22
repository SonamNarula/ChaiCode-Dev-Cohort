// ==========================================
// A NORMAL JAVASCRIPT PROGRAM
// ==========================================
// This is a basic JavaScript file demonstrating everyday concepts

// 1. Variables and Data
const userName = "Sonam";
let applesCount = 5;

console.log("Welcome to a normal JS program, " + userName + "!");
console.log(`You currently have ${applesCount} apples.`);

// 2. A Simple Function
function eatApple() {
    if (applesCount > 0) {
        applesCount--;
        console.log("🍎 Yum! You ate an apple.");
    } else {
        console.log("No more apples left!");
    }
}

// 3. A Basic Loop
console.log("\nLet's eat some apples:");
for (let i = 0; i < 3; i++) {
    eatApple();
    console.log(`Apples remaining: ${applesCount}`);
}

// 4. An Array and Iteration
const favoriteFruits = ["Mango", "Strawberry", "Cherry"];
console.log("\nOther favorite fruits:");
favoriteFruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

console.log("\nProgram execution finished. ✨");
