// --- 1. Basic IF/ELSE (The Traffic Light) ---
console.log("--- 1. Basic Traffic Light Logic ---");

let signalColor = "red";

if (signalColor === "red") {
    console.log("STOP! 🛑");
} else if (signalColor === "yellow") {
    console.log("Slow down... ⚠️");
} else if (signalColor === "green") {
    console.log("GO! 🟢");
} else {
    console.log("Signal Broken! Proceed with caution. 🚧");
}


// --- 2. Multiple Conditions (The Grading System) ---
console.log("\n--- 2. Grading System (Else If) ---");

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+ (Outstanding) 🏆");
} else if (marks >= 80) {
    console.log("Grade: A (Excellent) 🌟");
} else if (marks >= 70) {
    console.log("Grade: B (Good) 👍");
} else if (marks >= 50) {
    console.log("Grade: C (Average) 📚");
} else {
    console.log("Grade: F (Needs Improvement) 📉");
}


// --- 3. NESTED CONDITIONALS (The Login System) ---
console.log("\n--- 3. Login System (Nested Logic) ---");

let userEmail = "hitesh@chaicode.com";
let userPassword = "123"; // (Don't use 123 in real life!)

let inputEmail = "hitesh@chaicode.com";
let inputPassword = "123";

if (inputEmail === userEmail) {
    // Email matches, now checking password...
    console.log("Email verified. Checking password...");

    if (inputPassword === userPassword) {
        // Password also matches!
        console.log("Welcome back, Hitesh! Access Granted. ✅");
    } else {
        // Password failed
        console.log("Incorrect Password. Access Denied. ❌");
    }

} else {
    // Email failed immediately
    console.log("User not found with this email. 🚫");
}


// --- 4. Logical Operators (The Coffee Shop) ---
console.log("\n--- 4. Coffee Shop (Logical AND/OR) ---");

let isShopOpen = true;
let hasMoney = true;
let isHungry = false;

// && (AND) -> Both must be true
if (isShopOpen && hasMoney) {
    console.log("I can buy coffee! ☕");
} else {
    console.log("Can't buy coffee today. 😔");
}

// || (OR) -> At least one must be true
if (isHungry || isShopOpen) {
    console.log("I might go inside.");
}
