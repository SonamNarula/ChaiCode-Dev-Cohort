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

function add(num1, num2) {
    console.log(num1 + num2);
}

add(5, 6);
add(11, 21);

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
