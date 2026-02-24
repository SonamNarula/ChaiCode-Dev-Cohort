/*********************************************************
   JAVASCRIPT CONSOLE METHODS – COMPLETE DEMO PROGRAM
*********************************************************/

/*
console kya hota hai?
--------------------
console debugging tool hai jisse hum:
- values check karte hain
- errors / warnings dekhte hain
- data ko readable format me dekhte hain
*/

// =======================================================
// 1️⃣ console.log()
// Normal message print karne ke liye
// =======================================================

console.log("1️⃣ console.log()");
console.log("Hello World");
console.log("Number:", 10, "Boolean:", true);


// =======================================================
// 2️⃣ console.info()
// Informational message (log jaisa hi hota hai)
// =======================================================

console.info("\n2️⃣ console.info()");
console.info("This is an info message");


// =======================================================
// 3️⃣ console.warn()
// Warning dikhata hai (yellow color)
// =======================================================

console.warn("\n3️⃣ console.warn()");
console.warn("This is a warning");


// =======================================================
// 4️⃣ console.error()
// Error dikhata hai (red color)
// =======================================================

console.error("\n4️⃣ console.error()");
console.error("This is an error");


// =======================================================
// 5️⃣ console.table()
// Array / Object ko table format me dikhata hai
// =======================================================

console.log("\n5️⃣ console.table()");

const users = [
  { id: 1, name: "Sonam", role: "Student" },
  { id: 2, name: "Alex", role: "Admin" }
];

console.table(users);


// =======================================================
// 6️⃣ console.dir()
// Object ka detailed structure dikhata hai
// =======================================================

console.log("\n6️⃣ console.dir()");
console.dir(users);


// =======================================================
// 7️⃣ console.group()
// Logs ko ek group ke andar rakhta hai
// =======================================================

console.log("\n7️⃣ console.group()");
console.group("User Details");
console.log("Name: Sonam");
console.log("Age: 21");
console.log("Role: Student");
console.groupEnd();


// =======================================================
// 8️⃣ console.groupCollapsed()
// Group closed state me hota hai
// =======================================================

console.log("\n8️⃣ console.groupCollapsed()");
console.groupCollapsed("Hidden Logs");
console.log("This log is hidden initially");
console.groupEnd();


// =======================================================
// 9️⃣ console.count()
// Kisi label ko kitni baar call hua, count karta hai
// =======================================================

console.log("\n9️⃣ console.count()");
console.count("loop");
console.count("loop");
console.count("loop");


// =======================================================
// 🔟 console.countReset()
// Counter reset karta hai
// =======================================================

console.countReset("loop");
console.count("loop");


// =======================================================
// 1️⃣1️⃣ console.time()
// Execution time measure karne ke liye
// =======================================================

console.log("\n1️⃣1️⃣ console.time()");
console.time("myTimer");

for (let i = 0; i < 1000000; i++) {
  // heavy task simulation
}

console.timeEnd("myTimer");


// =======================================================
// 1️⃣2️⃣ console.assert()
// Condition false ho to error show karta hai
// =======================================================

console.log("\n1️⃣2️⃣ console.assert()");
console.assert(5 > 10, "Assertion failed: 5 is not greater than 10");
console.assert(10 > 5, "This will not show");


// =======================================================
// 1️⃣3️⃣ console.trace()
// Function call stack dikhata hai
// =======================================================

console.log("\n1️⃣3️⃣ console.trace()");

function first() {
  second();
}
function second() {
  console.trace("Trace call stack");
}

first();


// =======================================================
// 1️⃣4️⃣ console.debug()
// Debugging ke liye (log jaisa hi)
// =======================================================

console.debug("\n1️⃣4️⃣ console.debug()");
console.debug("Debug message");


// =======================================================
// 1️⃣5️⃣ console.clear()
// Console ko clear kar deta hai
// ⚠️ Usually last me use karte hain
// =======================================================

// console.clear(); // uncomment to clear console


/*********************************************************
   END OF CONSOLE METHODS PROGRAM
*********************************************************/

/*
FINAL SUMMARY:
--------------
log()      → normal output
info()     → info message
warn()     → warning
error()    → error
table()    → table format
dir()      → detailed object
group()    → grouped logs
count()    → count calls
time()     → performance check
assert()   → condition testing
trace()    → call stack
clear()    → clear console
*/