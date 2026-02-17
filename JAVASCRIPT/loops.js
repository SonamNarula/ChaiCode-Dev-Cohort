// --- 1. THE FOR LOOP (Repeat a fixed number of times) ---
console.log("--- 1. The FOR Loop (Counting Apples) ---");

for (let i = 1; i <= 5; i++) {
    console.log(`Apple number ${i} 🍎`);
}


// --- 2. THE WHILE LOOP (Repeat while a condition is true) ---
console.log("\n--- 2. The WHILE Loop (Rocket Countdown) ---");

let countdown = 5;

while (countdown > 0) {
    console.log(`T-minus ${countdown}... 🚀`);
    countdown--; // Decrease by 1
}
console.log("BLAST OFF! 🌌");


// --- 3. THE DO...WHILE LOOP (Run at least once) ---
console.log("\n--- 3. The DO...WHILE Loop (Studying) ---");

let isTired = true;

do {
    console.log("I will study for at least 1 hour. 📚");
    // Even if I am tired, I study once before checking.
} while (isTired === false); // Condition is false, so it stops here.


// --- 4. THE FOR...OF LOOP (Looping through a list/array) ---
console.log("\n--- 4. The FOR...OF Loop (Fruit Basket) ---");

let fruits = ["Mango", "Banana", "Grapes", "Orange"];

for (let fruit of fruits) {
    console.log(`I love eating ${fruit} 😋`);
}


// --- 5. THE FOR...IN LOOP (Looping through an object) ---
console.log("\n--- 5. The FOR...IN Loop (Student Info) ---");

let student = {
    name: "Sonam",
    subject: "Coding",
    mood: "Happy"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
