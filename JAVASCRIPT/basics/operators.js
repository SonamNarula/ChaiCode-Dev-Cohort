/*************************************************
   JAVASCRIPT OPERATORS – COMPLETE EXPLANATION
   (Self-explanatory program with comments)
*************************************************/


// ===============================================
// 1️⃣ ARITHMETIC OPERATORS
// Used for mathematical calculations
// ===============================================

let a = 10;
let b = 3;

console.log("ARITHMETIC OPERATORS");
console.log("Addition:", a + b);        // 10 + 3 = 13
console.log("Subtraction:", a - b);     // 10 - 3 = 7
console.log("Multiplication:", a * b);  // 10 * 3 = 30
console.log("Division:", a / b);        // 10 / 3 = 3.33
console.log("Modulus:", a % b);         // remainder → 1
console.log("Power:", a ** b);          // 10^3 = 1000


// ===============================================
// 2️⃣ ASSIGNMENT OPERATORS
// Used to assign/update values
// ===============================================

let x = 5;
x += 2;   // x = x + 2
x -= 1;   // x = x - 1
x *= 3;   // x = x * 3

console.log("\nASSIGNMENT OPERATORS");
console.log("Final value of x:", x);


// ===============================================
// 3️⃣ COMPARISON OPERATORS
// Used to compare values (result is true/false)
// ===============================================

console.log("\nCOMPARISON OPERATORS");
console.log("5 == '5':", 5 == "5");     // true (value same, type ignored)
console.log("5 === '5':", 5 === "5");   // false (value + type checked)
console.log("5 != 3:", 5 != 3);          // true
console.log("5 > 3:", 5 > 3);            // true
console.log("5 <= 5:", 5 <= 5);          // true

// 👉 ALWAYS use === instead of ==


// ===============================================
// 4️⃣ LOGICAL OPERATORS
// Used to combine conditions
// ===============================================

let p = true;
let q = false;

console.log("\nLOGICAL OPERATORS");
console.log("p && q:", p && q);  // AND → false
console.log("p || q:", p || q);  // OR → true
console.log("!p:", !p);          // NOT → false


// ===============================================
// 5️⃣ UNARY OPERATORS
// Works on single operand
// ===============================================

let count = 5;
count++;   // increment
--count;   // decrement

console.log("\nUNARY OPERATORS");
console.log("Count:", count);
console.log("Type of count:", typeof count); // number


// ===============================================
// 6️⃣ TERNARY OPERATOR
// Short form of if-else
// ===============================================

let age = 17;

let result =
  age >= 18 ? "Adult" : "Minor";

console.log("\nTERNARY OPERATOR");
console.log("Status:", result);


// ===============================================
// 7️⃣ STRING OPERATORS
// Used to join strings
// ===============================================

let firstName = "Alice";
let lastName = "Smith";

console.log("\nSTRING OPERATORS");
console.log("Full Name:", firstName + " " + lastName);


// ===============================================
// 8️⃣ BITWISE OPERATORS
// Works on binary numbers (rare in web dev)
// ===============================================

console.log("\nBITWISE OPERATORS");
console.log("5 & 1:", 5 & 1); // AND
console.log("5 | 1:", 5 | 1); // OR
console.log("5 ^ 1:", 5 ^ 1); // XOR


// ===============================================
// 9️⃣ TYPE OPERATORS
// Used to check data types
// ===============================================

let arr = [1, 2, 3];

console.log("\nTYPE OPERATORS");
console.log("typeof arr:", typeof arr);          // object
console.log("arr instanceof Array:", arr instanceof Array); // true


// ===============================================
// 🔟 OBJECT OPERATORS
// Used with objects
// ===============================================

let user = {
  name: "Bob",
  age: 25
};

console.log("\nOBJECT OPERATORS");
console.log("'name' in user:", "name" in user); // true

delete user.age; // removes property
console.log("User after delete:", user);


// ===============================================
// 1️⃣1️⃣ MODERN JAVASCRIPT OPERATORS
// ===============================================

// Nullish Coalescing (??)
// If left value is null/undefined, use right value
let data = null ?? "Default Data";
console.log("\nNULLISH COALESCING (??)");
console.log(data);

// Optional Chaining (?.)
// Prevents error if property doesn't exist
let profile = {};
console.log("\nOPTIONAL CHAINING (?.)");
console.log(profile?.name); // undefined, no error

// Spread Operator (...)
// Used to copy/merge values
let nums1 = [1, 2, 3];
let nums2 = [...nums1, 4, 5];

console.log("\nSPREAD OPERATOR (...)");
console.log(nums2);


/*************************************************
   END OF PROGRAM
*************************************************/