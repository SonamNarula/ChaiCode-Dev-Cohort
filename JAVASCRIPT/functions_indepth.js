// ===============================================
// 🚀 IN-DEPTH JAVASCRIPT FUNCTIONS GUIDE 🚀
// ===============================================
// A comprehensive breakdown of functions in JS.
// Open the browser console to see the output.

console.log("=====================================");
console.log(" 1. FUNCTION DECLARATIONS");
console.log("=====================================");
// Function declarations are hoisted (can be called before defined).

greet("Sonam"); // Hoisting works!

function greet(name) {
    console.log(`Hello, ${name}! Welcome to the Functions Guide.`);
}

console.log("\n=====================================");
console.log(" 2. FUNCTION EXPRESSIONS");
console.log("=====================================");
// A function stored in a variable. Not hoisted.

const square = function (num) {
    return num * num;
};
console.log(`Square of 5 is: ${square(5)}`);


console.log("\n=====================================");
console.log(" 3. ARROW FUNCTIONS (ES6)");
console.log("=====================================");
// A shorter syntax for writing function expressions.

// Single line, implicit return:
const add = (a, b) => a + b;
console.log(`Add 10 + 20 = ${add(10, 20)}`);

// Multi-line arrow function:
const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
};
console.log(`Is 4 even? ${isEven(4)}`);
console.log(`Is 7 even? ${isEven(7)}`);


console.log("\n=====================================");
console.log(" 4. PARAMETERS & ARGUMENTS");
console.log("=====================================");

// 4.1 Default Parameters
function welcome(user = "Guest") {
    console.log(`Welcome, ${user}!`);
}
welcome("Sonam"); // output: Welcome, Sonam!
welcome();        // output: Welcome, Guest!

// 4.2 Rest Parameters (...)
// Gathers remaining arguments into an array.
function calculateTotal(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
console.log(`Total Price (10, 20, 30): $${calculateTotal(10, 20, 30)}`);


console.log("\n=====================================");
console.log(" 5. SCOPE & CLOSURES");
console.log("=====================================");

// Scope dictionary: Where a variable is accessible.
let globalVar = "I am global";

function scopeTest() {
    let localVar = "I am local to scopeTest";
    console.log(globalVar); // Can access global
    console.log(localVar);  // Can access local
}
scopeTest();
// console.log(localVar); // ERROR: localVar is not defined here

// Closure: A function remembering the variables from its outer scope.
function createCounter() {
    let count = 0; // count is trapped in the closure!

    return function () {
        count++;
        return count;
    };
}

const myCounter = createCounter();
console.log(`Counter: ${myCounter()}`); // 1
console.log(`Counter: ${myCounter()}`); // 2
console.log(`Counter: ${myCounter()}`); // 3


console.log("\n=====================================");
console.log(" 6. IIFE (Immediately Invoked Function Expression)");
console.log("=====================================");
// A function that runs as soon as it is defined.

(function () {
    console.log("This runs immediately and keeps variables private!");
})();

// IIFE with arrow function
(() => {
    console.log("Arrow IIFE executed.");
})();


console.log("\n=====================================");
console.log(" 7. HIGHER-ORDER FUNCTIONS & CALLBACKS");
console.log("=====================================");
// A function that takes another function as an argument, or returns one.

// FormatName is the Higher-Order Function
function formatName(name, formatCallback) {
    return formatCallback(name);
}

// These are Callback functions:
const makeUppercase = (str) => str.toUpperCase();
const makeLowercase = (str) => str.toLowerCase();

console.log(`Uppercase Callback: ${formatName("Sonam Narula", makeUppercase)}`);
console.log(`Lowercase Callback: ${formatName("Sonam Narula", makeLowercase)}`);

console.log("\n=====================================");
console.log(" End of Functions Guide ");
console.log("=====================================");
