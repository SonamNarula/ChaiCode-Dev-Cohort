// var, let and const line-by-line comparison
// declarations and initialisation

// var a = 12;

// window me add krta h
// function scoped hota hai
// same name se declare kr skte ho nd error nhi aayega

// ========temporal dead zone========
// console.log(a);
// let a = 12;
// let age = undefined;
// console.log(age);
// age = 20;


// var x = 1;
// {
//     var x = 2;
// }
// console.log(x);

// let a = 10;
// {
//     a = 20;
//     console.log("Inside : ", a);
// }
// console.log("outside: ", a);


let x = 12;
let y = x;
x = x+2;