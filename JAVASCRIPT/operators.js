// ==========================================
// JAVASCRIPT OPERATORS GUIDE
// ==========================================
// This program demonstrates all major types of operators in JavaScript.
// Open the console in the browser to see the output of each section!

console.log('====== 1. ARITHMETIC OPERATORS ======');
let a = 10;
let b = 3;
console.log(`a = ${a}, b = ${b}`);
console.log('Addition (a + b):', a + b);        // 13
console.log('Subtraction (a - b):', a - b);     // 7
console.log('Multiplication (a * b):', a * b);  // 30
console.log('Division (a / b):', a / b);        // 3.3333...
console.log('Modulus/Remainder (a % b):', a % b); // 1
console.log('Exponentiation (a ** b):', a ** b);  // 1000

// Increment and Decrement
let c = 5;
console.log('\nInitial c =', c);
console.log('Post-increment (c++):', c++); // Prints 5, then c becomes 6
console.log('After Post-increment c =', c);
console.log('Pre-increment (++c):', ++c);  // c becomes 7, then prints 7
console.log('Decrement (c--):', c--);      // Prints 7, then c becomes 6


console.log('\n====== 2. ASSIGNMENT OPERATORS ======');
let x = 10;
console.log('Initial x =', x);
x += 5; // equivalent to x = x + 5
console.log('x += 5 ->', x);
x -= 3; // equivalent to x = x - 3
console.log('x -= 3 ->', x);
x *= 2; // equivalent to x = x * 2
console.log('x *= 2 ->', x);
x /= 4; // equivalent to x = x / 4
console.log('x /= 4 ->', x);
x %= 2; // equivalent to x = x % 2
console.log('x %= 2 ->', x);


console.log('\n====== 3. COMPARISON OPERATORS ======');
let num1 = 5;
let str1 = "5";
console.log(`num1 = ${num1} (number), str1 = "${str1}" (string)`);
// Loose equality (checks only value)
console.log('Equal to (num1 == str1):', num1 == str1); // true
// Strict equality (checks value AND data type)
console.log('Strict Equal to (num1 === str1):', num1 === str1); // false
console.log('Not Equal to (num1 != 8):', num1 != 8); // true
console.log('Strict Not Equal (num1 !== str1):', num1 !== str1); // true
console.log('Greater than (num1 > 3):', num1 > 3); // true
console.log('Less than or equal (num1 <= 5):', num1 <= 5); // true


console.log('\n====== 4. LOGICAL OPERATORS ======');
let isAdult = true;
let hasID = false;
console.log(`isAdult = ${isAdult}, hasID = ${hasID}`);
// Logical AND (&&) - true ONLY if BOTH are true
console.log('AND (isAdult && hasID):', isAdult && hasID); // false
// Logical OR (||) - true if AT LEAST ONE is true
console.log('OR (isAdult || hasID):', isAdult || hasID); // true
// Logical NOT (!) - reverses the boolean value
console.log('NOT (!isAdult):', !isAdult); // false


console.log('\n====== 5. TERNARY (CONDITIONAL) OPERATOR ======');
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote!" : "No, too young.";
console.log(`Age is ${age}. Can they vote? -> ${canVote}`);


console.log('\n====== 6. STRING OPERATORS ======');
// The + operator can also be used to concatenate (join) strings
let firstName = "Sonam";
let lastName = "Narula";
let fullName = firstName + " " + lastName;
console.log('Concatenation (+):', fullName);

let greeting = "Hello, ";
greeting += fullName; // Appends fullName to greeting
console.log('Append (+=):', greeting);


console.log('\n====== 7. TYPE OPERATORS ======');
// typeof returns the data type of a variable
console.log('typeof "Hello":', typeof "Hello"); // string
console.log('typeof 42:', typeof 42);           // number
console.log('typeof true:', typeof true);       // boolean
// instanceof returns true if an object is an instance of an object type
let arr = [1, 2, 3];
console.log('arr instanceof Array:', arr instanceof Array); // true


console.log('\n====== 8. BITWISE OPERATORS (Advanced) ======');
// Operates on 32-bit numbers at the binary level
let bit1 = 5; // binary 0101
let bit2 = 1; // binary 0001
console.log(`bit1 = ${bit1} (0101), bit2 = ${bit2} (0001)`);
console.log('Bitwise AND (bit1 & bit2):', bit1 & bit2); // 0001 -> 1
console.log('Bitwise OR (bit1 | bit2):', bit1 | bit2);  // 0101 -> 5
console.log('Bitwise XOR (bit1 ^ bit2):', bit1 ^ bit2); // 0100 -> 4
console.log('Bitwise NOT (~bit1):', ~bit1);             // Inverts all bits (-6)
