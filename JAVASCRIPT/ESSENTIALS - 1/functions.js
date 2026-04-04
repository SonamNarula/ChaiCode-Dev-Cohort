// console.log("hey");

function dance() {
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
}
function lolo() {
    console.log("Happy New Year");
}
lolo();


let fnc = function () {
    console.log("heyeyeyeyeyeheyeye");
}

// fat arrow function

let fun = () => {
    console.log("yoooooo");
}


function dancee(v1) {
    console.log(`${v1} naach rha h`)
}
dancee("ghoda")
dancee("gadha")
dancee("monkey")
dancee("python")

function addAndLog(num1, num2) {
    console.log(num1 + num2);
}

addAndLog(5, 6);
addAndLog(11, 21);

function adds(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}

adds(3, 4);
adds();

function xyz(v) {
    return 12 + v;
}

let vals = xyz(13);
console.log(vals);

function pqrs(val) {
    val();
}

pqrs(function () {
    console.log("hey");
});

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Sonam", function () {
    console.log("Welcome!");
});

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(2, 3)); // 5

let globalCount = 0;

function increment() {
    globalCount++;
    return globalCount;
}

console.log(increment()); // 1
console.log(increment()); // 2

function createCounter() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// lexical scoping
function outer() {
  let name = "Sonam";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();
