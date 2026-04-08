"use strict"; // treat all JS as modern

// Quick primer on JS data types and typeof
console.log(3 + 3);
console.log("Sonam");

let name = "sonam";
let age = 20;
let isLoggedIn = true;

// number, bigint, string, boolean, null (standalone), undefined, symbol (unique), object

console.log(typeof " sonam ");      // string
console.log(typeof age);            // number
console.log(typeof isLoggedIn);     // boolean
console.log(typeof null);           // object (JS quirk)
console.log(typeof undefined);      // undefined
console.log(typeof Symbol("id"));   // symbol
