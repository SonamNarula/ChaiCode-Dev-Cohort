/*************************************************
   JAVASCRIPT LOOPS – COMPLETE EXPLANATION
*************************************************/

/*
LOOPS ka use tab hota hai jab hume
ek kaam baar-baar repeat karna ho
*/

// ===============================================
// 1️⃣ FOR LOOP
// Use when number of iterations is known
// ===============================================

console.log("FOR LOOP:");

for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

/*
Flow:
1. i = 1  (initialization)
2. i <= 5 (condition check)
3. loop body runs
4. i++    (increment)
*/


// ===============================================
// 2️⃣ WHILE LOOP
// Use when condition matters more than count
// ===============================================

console.log("\nWHILE LOOP:");

let j = 1;

while (j <= 5) {
  console.log("Value:", j);
  j++; // important (otherwise infinite loop)
}


// ===============================================
// 3️⃣ DO-WHILE LOOP
// Runs at least ONCE, even if condition is false
// ===============================================

console.log("\nDO-WHILE LOOP:");

let k = 1;

do {
  console.log("Value:", k);
  k++;
} while (k <= 5);


// ===============================================
// 4️⃣ FOR...OF LOOP
// Used for arrays / strings
// Gives VALUES directly
// ===============================================

console.log("\nFOR...OF LOOP:");

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


// ===============================================
// 5️⃣ FOR...IN LOOP
// Used for objects
// Gives KEYS (property names)
// ===============================================

console.log("\nFOR...IN LOOP:");

let student = {
  name: "Alice",
  age: 21,
  course: "JS"
};

for (let key in student) {
  console.log(key, ":", student[key]);
}


// ===============================================
// 6️⃣ FOREACH LOOP (Array method)
// Calls a function for each element
// ===============================================

console.log("\nforEach LOOP:");

let numbers = [10, 20, 30];

numbers.forEach(function (num) {
  console.log(num);
});


// ===============================================
// 7️⃣ BREAK & CONTINUE
// Control loop execution
// ===============================================

console.log("\nBREAK example:");

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

console.log("\nCONTINUE example:");

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}


/*************************************************
   END OF LOOPS PROGRAM
*************************************************/

/*
SUMMARY:
for       → fixed count
while     → condition based
do-while  → runs at least once
for...of  → array/string values
for...in  → object keys
forEach   → array method
break     → stop loop
continue  → skip iteration
*/