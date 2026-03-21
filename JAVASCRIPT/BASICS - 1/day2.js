// function add(num1, num2){
//     const result = num1+num2;
//     return result;
//     return result;
// }

// const r = add (2,5);

// for (let i = 0; i<r;i++){
//     console.log(`value of i is ${i}`);
// }
function cartoon(){
    function cartoonInsideCartoon(){
        return 'Naruto 🔥';
    }
    // return the function itself so we can call it later
    return cartoonInsideCartoon;
}
const anime = cartoon();
// const result = anime();

console.log(anime);
