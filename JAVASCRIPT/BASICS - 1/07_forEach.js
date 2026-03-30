/**
 * forEach() method calls a function for each element in an array.
 * forEach() is not executed for empty elements.
 */

const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

console.log("--- Basic forEach ---");
fruits.forEach(function(item) {
    console.log("Fruit:", item);
});

console.log("\n--- forEach with index and array ---");
fruits.forEach((item, index, arr) => {
    console.log(`Index ${index}: ${item} (from arr: [${arr}])`);
});

console.log("\n--- Practical Example: Summing numbers ---");
const numbers = [10, 20, 30, 40, 50];
let total = 0;

numbers.forEach(num => {
    total += num;
});

console.log("Total Sum:", total);
