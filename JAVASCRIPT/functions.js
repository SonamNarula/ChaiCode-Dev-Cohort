/*************************************************
   JAVASCRIPT FUNCTIONS – DETAILED EXPLANATION
*************************************************/

/*
FUNCTION kya hota hai?
---------------------
Function ek block of code hota hai
jo tab run hota hai jab hum use CALL karte hain.

Benefits:
- code reuse
- clean structure
- easy debugging
*/

// ===============================================
// 1️⃣ SIMPLE FUNCTION
// ===============================================

// Function declaration
function greet(name) {
  console.log("Hello", name);
}

// Function call
greet("Alice");
greet("Sonam");

/*
Flow:
1. greet("Alice") → name = "Alice"
2. console.log runs
*/


// ===============================================
// 2️⃣ FUNCTION WITH RETURN VALUE
// ===============================================

function add(a, b) {
  return a + b; // value wapas bhejta hai
}

let sum = add(5, 3);
console.log("\nSum:", sum);

/*
return ka matlab:
- function yahin stop ho jaata hai
- value caller ko mil jaati hai
*/


// ===============================================
// 3️⃣ FUNCTION EXPRESSION
// (function stored in a variable)
// ===============================================

const square = function (num) {
  return num * num;
};

console.log("\nSquare of 4:", square(4));

/*
Note:
- function variable me store ho sakta hai
- hoisting nahi hoti
*/


// ===============================================
// 4️⃣ ARROW FUNCTION (short syntax)
// ===============================================

const multiply = (a, b) => a * b;

console.log("\nMultiply:", multiply(4, 5));

/*
Arrow function:
- short & modern
- mostly callbacks me use hota hai
*/


// ===============================================
// 5️⃣ NESTED FUNCTION
// (function ke andar function)
// ===============================================

function outerFunction() {
  console.log("\nOuter function start");

  // Inner / nested function
  function innerFunction() {
    console.log("Inner function running");
  }

  innerFunction(); // inner function call
  console.log("Outer function end");
}

outerFunction();

/*
Important:
- innerFunction sirf outerFunction ke andar accessible hai
- bahar se call nahi kar sakte
*/


// ===============================================
// 6️⃣ NESTED FUNCTION WITH VARIABLES (SCOPE)
// ===============================================

function parent() {
  let parentValue = "I am from parent";

  function child() {
    let childValue = "I am from child";

    console.log(parentValue); // ✅ allowed
    console.log(childValue);  // ✅ allowed
  }

  child();

  // console.log(childValue); ❌ error (scope issue)
}

parent();

/*
RULE:
- child parent ka data access kar sakta hai
- parent child ka data access nahi kar sakta
*/


// ===============================================
// 7️⃣ REAL-LIFE EXAMPLE (Nested Function)
// ===============================================

function calculateTotal(price) {

  function addGST(amount) {
    return amount + (amount * 0.18);
  }

  let finalAmount = addGST(price);
  return finalAmount;
}

console.log("\nFinal Amount:", calculateTotal(1000));

/*
Why nested?
- helper function bahar expose nahi hota
- code secure + clean
*/


// ===============================================
// 8️⃣ SUMMARY
// ===============================================

/*
✔ function = reusable block
✔ return = value back to caller
✔ nested function = helper inside function
✔ inner function can access outer variables
✔ scope flows from outer → inner
*/

console.log("\n--- END OF FUNCTIONS PROGRAM ---");