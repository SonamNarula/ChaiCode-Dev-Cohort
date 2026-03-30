function sayHello(){}
sayHello();

function greetUser(x,y,z){
    console.log('Hey', x,y,z);
    console.log(`helooo ${x}`);
}

greetUser('Sonam');

function add(num1,num2){
    console.log(`result is ${num1+num2}`)
}
add(2,5);

const r = add(2,5);
for(let i = 0; i < r; i++){
    console.log(`value of i is ${i}`);
}