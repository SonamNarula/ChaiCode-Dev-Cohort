"use strict";

// Number conversion
let score = 33;
console.log(typeof score);       // number
console.log(typeof (score));     // number

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // 33

// '33' => 33
// "33abc" => NaN
// true => 1; false => 0

// Boolean conversion
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);    // true
console.log(Boolean(0));           // false

// 1 => true; 0 => false

// String conversion
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);  // string
console.log(stringNumber);         // "33"
