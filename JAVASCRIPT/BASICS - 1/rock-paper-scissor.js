/*********************************************************
   ROCK – PAPER – SCISSORS GAME (LOGIC EXPLAINED)
*********************************************************/

/*
RULES:
------
Rock     beats Scissors
Scissors beats Paper
Paper    beats Rock
Same choice = Draw
*/

// =======================================================
// 1️⃣ USER & COMPUTER CHOICE
// =======================================================

// User ka choice (normally input se aata hai)
let userChoice = "rock";

// Computer random choice generate karega
let choices = ["rock", "paper", "scissors"];

// Math.random() → 0 to <1
// Math.floor() → decimal hata deta hai
let computerChoice =
  choices[Math.floor(Math.random() * choices.length)];

console.log("User choice:", userChoice);
console.log("Computer choice:", computerChoice);


// =======================================================
// 2️⃣ GAME LOGIC
// =======================================================

if (userChoice === computerChoice) {
  console.log("Result: DRAW 🤝");
}
else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "scissors" && computerChoice === "paper") ||
  (userChoice === "paper" && computerChoice === "rock")
) {
  console.log("Result: USER WINS 🎉");
}
else {
  console.log("Result: COMPUTER WINS 🤖");
}


// =======================================================
// 3️⃣ LOGIC BREAKDOWN (IMPORTANT)
// =======================================================

/*
Step 1:
-------
Check draw:
userChoice === computerChoice

Step 2:
-------
Check all winning conditions for user:
- rock beats scissors
- scissors beats paper
- paper beats rock

Step 3:
-------
If above dono false → computer wins
*/

console.log("\n--- END OF GAME LOGIC ---");