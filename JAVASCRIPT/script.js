console.log("Hello ji, Mai keha kiddan....");
function sayHi() {
    console.log("hello ji");
}
sayHi();
sayHi();
sayHi();
sayHi();

var fname = 'Sonam'
var lname = 'Narula'
console.log('Vale of fname is', fname);

var fname = 'Arpit'
console.log('Vale of fname is', fname);

function addNumbers(num1, num2) {
    var sum = num1 + num2;
    console.log('Sum is', sum);
}
addNumbers(5, 10);
addNumbers(20, 30);

// let age = 19;

// if(age >= 18) {
//     console.log('You are eligible to vote');
// }
// else{
//     console.log('You are not eligible to vote');
// }


// var age = 18;
// var condition = age>=18;
// var conditionKaUlta = age<= 17;
// var condition = age>=18;

// if(conditionKaUlta){
//     console.log('you are not an adult');
// }

// if(condition){
//     console.log('you are an adult');
// }
// else{
//     console.log('you are not an adult');
// }

var age = 22;

var childCondition = age <= 12;
var teenagerCondition = age > 12 && age <= 19;
var adultCondition = age <= 40;
var seniorCondition = age > 40;

if (childCondition) {
    console.log('you are a child');
}
else if (teenagerCondition) {
    console.log('you are a teenager');
}
else if (adultCondition) {
    console.log('you are an adult');
}
else if (seniorCondition) {
    console.log('you are a senior citizen');
}
else{
    console.log('sabhi conditions hi false ho gyiiii ')
} 