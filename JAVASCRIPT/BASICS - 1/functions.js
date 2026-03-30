// function sayHello(){}
// sayHello();

// function greetUser(x,y,z){
//     console.log('Hey', x,y,z);
//     console.log(`helooo ${x}`);
// }

// greetUser('Sonam');

// function add(num1,num2){
//     console.log(`result is ${num1+num2}`)
// }
// add(2,5);

// const r = add(2,5);
// for(let i = 0; i < r; i++){
//     console.log(`value of i is ${i}`);
// }

// function cartoon(){
//     function cartoonInsideCartoon(){
//         return 'Naruto 🔥';
//     }
//     // return the function itself so we can call it later
//     return cartoonInsideCartoon;
// }
// const anime = cartoon();
// anime() ;

const fruits = ['apple', 'cheeku', true,'aadu' , 1 , ' santra'];

fruits.push('kiwi');
console.log(fruits.length);
console.log(fruits);
console.log(fruits.includes('aadu'));

// high order functions
function meraPyaraFunction(udharkafunction){
    return udharkafunction() + 40;
}
function cartoon(){
    return 10;
}

console.log(meraPyaraFunction(cartoon));