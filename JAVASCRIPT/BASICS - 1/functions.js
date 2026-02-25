/*************************************************
   JAVASCRIPT FUNCTIONS – COMPLETE EXPLANATION
*************************************************/

/*
Function kya hota hai?
---------------------
Function ek block of code hota hai
jo tab execute hota hai jab hum use CALL karte hain.

Why functions?
- Code reuse
- Clean code
- Easy debugging
*/

// ===============================================
// 1️⃣ SIMPLE FUNCTION (NO PARAMETER)
// ===============================================

// Function declaration
function sayHello() {
    console.log("Hello JavaScript");
}

// Function call
sayHello();
sayHello(); // same function reuse


// ===============================================
// 2️⃣ FUNCTION WITH PARAMETER
// ===============================================

function greet(name) {
    console.log("Hello", name);
}

greet("Sonam");
greet("Alex");

/*
name = parameter
"Sonam" = argument
*/


// ===============================================
// 3️⃣ FUNCTION WITH RETURN VALUE
// ===============================================

function add(a, b) {
    return a + b; // value wapas bhejta hai
}

let result = add(5, 3);
console.log("Sum:", result);

/*
return ka matlab:
- function yahin stop ho jaata hai
- value caller ko mil jaati hai
*/


// ===============================================
// 4️⃣ FUNCTION EXPRESSION
// ===============================================

const square = function (num) {
    return num * num;
};

console.log("Square:", square(4));

/*
Function ko variable me store kiya
Hoisting nahi hoti
*/


// ===============================================
// 5️⃣ ARROW FUNCTION (SHORT FORM)
// ===============================================

const multiply = (a, b) => {
    return a * b;
};

console.log("Multiply:", multiply(4, 5));

// one-line arrow function
const cube = n => n * n * n;
console.log("Cube:", cube(3));


// ===============================================
// 6️⃣ NESTED FUNCTION
// ===============================================

function outerFunction() {
    console.log("Outer function start");

    function innerFunction() {
        console.log("Inner function running");
    }

    innerFunction();
    console.log("Outer function end");
}

outerFunction();

/*
Inner function:
- sirf outer function ke andar accessible
*/


// ===============================================
// 7️⃣ REAL LIFE EXAMPLE
// ===============================================

function calculateBill(price) {

    function addGST(amount) {
        return amount + amount * 0.18;
    }

    return addGST(price);
}

console.log("Final Bill:", calculateBill(1000));


console.log("\n--- END OF FUNCTIONS PROGRAM ---");