console.log('======PRIMITIVE DATA TYPES======');
let x = 10;
let y = 3.14;
console.log('x : ', x, 'and y: ', y, 'are NUMBERS');

let fName = "sonam";
console.log('fname : ', fName, 'is a STRING');

let isPass = true;
console.log('isPass : ', isPass, 'is a BOOLEAN');

let p = undefined;
console.log('p : ', p, 'is UNDEFINED');

let q = null;
console.log('q : ', q, 'is NULL');

let big = 1234567890123456789012345678901234567890n;
console.log('big : ', big, 'is a BIGINT');

let sym = Symbol('mySymbol');
console.log('sym : ', sym, 'is a SYMBOL');


console.log('======NON-PRIMITIVE DATA TYPES======');
let arr = [1, 2, 3, 4, 5];
console.log('arr : ', arr, 'is an ARRAY');

let student = {
    name: 'Sonam',
    age : 21
};

console.log('student : ', student, 'is an OBJECT');

function hello(){
    console.log('Mai keh reha ji Satsriakal ji!');
}


console.log('======typeOf OPERATOR======');
console.log('Type of x : ', typeof x);
console.log('Type of y : ', typeof y);
console.log('Type of fname : ', typeof fname);
console.log('Type of isPass : ', typeof isPass);
console.log('Type of p : ', typeof p);
console.log('Type of q : ', typeof q);
console.log('Type of big : ', typeof big);
console.log('Type of sym : ', typeof sym);
console.log('Type of arr : ', typeof arr);
console.log('Type of student : ', typeof student);
console.log('Type of hello : ', typeof hello);
