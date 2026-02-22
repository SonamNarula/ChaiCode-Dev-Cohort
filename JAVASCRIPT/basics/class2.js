age = 65;
console.log(age);

let age = 19;
console.log(age);

age = 45;
console.log(age);

greetUser('Sonam', 'Narula', '.');

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

const r = add(2, 5);
for (let i = 0; i < r; i++) {
    console.log('Value of i is ${i}');
}

// function cartoon(){
//     return true;
// }
// const anime = cartoon();

let cartoon = function () {
    console.log('anime');
}

cartoon();