// --- 1. THE FOR LOOP (Fixed Repetition) ---
console.log("--- 1. The FOR Loop (Counting Steps) ---");
// Scenario: Counting steps in a workout.

for (let step = 1; step <= 5; step++) {
    console.log(`Step ${step}: Walking... 🚶`);
}
console.log("Workout Complete! 💪");


// --- 2. THE WHILE LOOP (Condition Based) ---
console.log("\n--- 2. The WHILE Loop (Loading Bar) ---");
// Scenario: Installing a program (stops when 100%).

let progress = 0;
while (progress < 100) {
    progress += 25; // Increment by 25%
    console.log(`Installing... ${progress}% ⏳`);
}
console.log("Installation Complete! ✅");


// --- 3. THE DO...WHILE LOOP (Guaranteed Once) ---
console.log("\n--- 3. The DO...WHILE Loop (Tea Request) ---");
// Scenario: Asking if you want tea at least once.

let wantsMoreTea = false;
do {
    console.log("Would you like a cup of chai? ☕");
    // In a real app, we'd update 'wantsMoreTea' based on user input.
    // Here, it runs once even though the condition is false.
} while (wantsMoreTea);


// --- 4. THE FOR...OF LOOP (Arrays) ---
console.log("\n--- 4. The FOR...OF Loop (The Tea Menu) ---");
// Scenario: Reading items from a menu.

let teaMenu = ["Masala Chai", "Ginger Chai", "Green Tea", "Oolong Tea"];

for (let tea of teaMenu) {
    console.log(`Menu Item: ${tea} 🍵`);
}


// --- 5. THE FOR...IN LOOP (Objects) ---
console.log("\n--- 5. The FOR...IN Loop (User Profile) ---");
// Scenario: Displaying user details.

let userProfile = {
    name: "Sonam Narula",
    role: "Developer",
    level: "Advanced",
    favoriteTheme: "Abyssal"
};

for (let key in userProfile) {
    // key = "name", then "role", etc.
    // userProfile[key] = "Sonam Narula", etc.
    console.log(`${key.toUpperCase()}: ${userProfile[key]}`);
}
