/*********************************************************
   JAVASCRIPT OPERATORS – COMPLETE EXPLANATION PROGRAM
*********************************************************/

/*
Operator = symbol jo kisi value pe operation karta hai
Example: +, -, ==, ===, &&, etc.
*/

// =======================================================
// 1️⃣ ARITHMETIC OPERATORS
// =======================================================

let a = 10;
let b = 3;

console.log("ARITHMETIC OPERATORS");
console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333..
console.log("Modulus:", a % b);          // 1 (remainder)
console.log("Exponent:", a ** b);        // 10^3 = 1000

// Increment / Decrement
let x = 5;
console.log("Post Increment:", x++); // 5
console.log("After increment:", x);  // 6

let y = 5;
console.log("Pre Increment:", ++y);  // 6


// =======================================================
// 2️⃣ ASSIGNMENT OPERATORS
// =======================================================

let num = 10;
num += 5;   // num = num + 5
num -= 2;   // num = num - 2
num *= 2;   // num = num * 2
num /= 2;   // num = num / 2

console.log("\nASSIGNMENT OPERATORS:", num);


// =======================================================
// 3️⃣ COMPARISON OPERATORS
// =======================================================

console.log("\nCOMPARISON OPERATORS");

console.log(5 == "5");   // true (value same, type ignored)
console.log(5 === "5");  // false (type + value)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 3);     // false


// =======================================================
// 4️⃣ LOGICAL OPERATORS
// =======================================================

let isLoggedIn = true;
let hasToken = false;

console.log("\nLOGICAL OPERATORS");

console.log("AND (&&):", isLoggedIn && hasToken); // false
console.log("OR (||):", isLoggedIn || hasToken);  // true
console.log("NOT (!):", !isLoggedIn);             // false


// =======================================================
// 5️⃣ TERNARY OPERATOR
// =======================================================

let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log("\nTERNARY OPERATOR:", result);


// =======================================================
// 6️⃣ TYPE OPERATORS
// =======================================================

console.log("\nTYPE OPERATORS");

console.log(typeof 10);          // number
console.log(typeof "JS");        // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (JS bug)
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){});// function


// =======================================================
// 7️⃣ BITWISE OPERATORS (ADVANCED, RARELY USED)
// =======================================================

console.log("\nBITWISE OPERATORS");

console.log(5 & 1);  // AND → 1
console.log(5 | 1);  // OR  → 5
console.log(5 ^ 1);  // XOR → 4
console.log(~5);     // NOT → -6
console.log(5 << 1); // Left shift → 10
console.log(5 >> 1); // Right shift → 2


// =======================================================
// 8️⃣ STRING OPERATORS
// =======================================================

let firstName = "Sonam";
let lastName = "Narula";

console.log("\nSTRING OPERATORS");
console.log(firstName + " " + lastName); // concatenation


// =======================================================
// 9️⃣ NULLISH COALESCING OPERATOR (??)
// =======================================================

let score = null;
let finalScore = score ?? 50;

console.log("\nNULLISH COALESCING:", finalScore);

// ?? only checks null or undefined


// =======================================================
// 🔟 OPTIONAL CHAINING OPERATOR (?.)
// =======================================================

let user = {
  name: "Sonam",
  address: {
    city: "Jaipur"
  }
};

console.log("\nOPTIONAL CHAINING");
console.log(user.address?.city); // Jaipur
console.log(user.profile?.age);  // undefined (no error)


// =======================================================
// 1️⃣1️⃣ INSTANCEOF OPERATOR
// =======================================================

console.log("\nINSTANCEOF OPERATOR");

let arr = [];
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true


// =======================================================
// 1️⃣2️⃣ COMMA OPERATOR
// =======================================================

let z = (1, 2, 3);
console.log("\nCOMMA OPERATOR:", z); // 3 (last value)


// =======================================================
// FINAL SUMMARY
// =======================================================

/*
OPERATORS SUMMARY:
------------------
Arithmetic      → + - * / % **
Assignment      → = += -= *= /=
Comparison      → == === != !== > < >= <=
Logical         → && || !
Ternary         → condition ? true : false
Type            → typeof, instanceof
Bitwise         → &, |, ^, <<, >>
String          → +
Nullish         → ??
Optional Chain  → ?.
*/

console.log("\n--- END OF OPERATORS PROGRAM ---");