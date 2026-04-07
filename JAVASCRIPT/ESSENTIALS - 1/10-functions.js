// ==============================
// 1. FUNCTION DECLARATION
// ==============================
function brewPotion(ingredient, dose) {
    return `Brewing potion with ${ingredient} (x${dose})...Potion ready`;
}

// Call
console.log(brewPotion("Healing herbs", 2));

/*
OUTPUT:
Brewing potion with Healing herbs (x2)...Potion ready

REASON:
- Function defined using "function" keyword
- Takes parameters → ingredient, dose
- Returns a string using template literals
*/


// ==============================
// 2. FUNCTION EXPRESSION
// ==============================
const mixElixir = function(ingredient) {
    return `Mixing elixir with ${ingredient}`;
};

console.log(mixElixir("Mint"));

/*
OUTPUT:
Mixing elixir with Mint

REASON:
- Function stored inside a variable
- Can be passed around like data
*/


// ==============================
// 3. ARROW FUNCTION
// ==============================
const distilEssence = (ingredient) => {
    return `Distilling essence of ${ingredient}`;
};

console.log(distilEssence("Lavender"));

/*
OUTPUT:
Distilling essence of Lavender

REASON:
- Shorter syntax
- No own 'this'
- No arguments object
*/


// ==============================
// 4. ARROW FUNCTION (IMPLICIT RETURN)
// ==============================
const quickMix = ingredient => `Quick mix with ${ingredient}`;

console.log(quickMix("Rose"));

/*
OUTPUT:
Quick mix with Rose

REASON:
- No {} → automatic return
- Cleaner and shorter
*/


// ==============================
// 5. DEFAULT PARAMETERS
// ==============================
function createPotion(ingredient, dose = 1) {
    return `Potion: ${ingredient} x${dose}`;
}

console.log(createPotion("Tulsi"));

/*
OUTPUT:
Potion: Tulsi x1

REASON:
- dose not passed → default = 1
- Prevents undefined
*/


// ==============================
// 6. REST PARAMETERS (MODERN)
// ==============================
function collectIngredients(...items) {
    console.log(items);
}

collectIngredients("Sage", "Rosemary", "Mint");

/*
OUTPUT:
["Sage", "Rosemary", "Mint"]

REASON:
- ...items → collects all arguments into array
- Better than arguments object
*/


// ==============================
// 7. ARGUMENTS OBJECT (OLD WAY)
// ==============================
function oldBrewingLogs() {
    console.log("type:", typeof arguments);
    console.log(arguments);
    console.log("Is array:", Array.isArray(arguments));
}

oldBrewingLogs("Sage", "Rosemary");

/*
OUTPUT:
type: object
{0: "Sage", 1: "Rosemary"}
Is array: false

REASON:
- arguments = array-like object
- Not a real array
*/


// ==============================
// 8. ANONYMOUS FUNCTION
// ==============================
setTimeout(function() {
    console.log("Anonymous function executed");
}, 1000);

/*
OUTPUT (after 1 sec):
Anonymous function executed

REASON:
- Function without name
- Used in callbacks
*/


// ==============================
// 9. CALLBACK FUNCTION
// ==============================
function processIngredient(ingredient, callback) {
    console.log("Processing:", ingredient);
    callback();
}

processIngredient("Neem", function() {
    console.log("Done processing");
});

/*
OUTPUT:
Processing: Neem
Done processing

REASON:
- Function passed as argument
- Executed later
*/


// ==============================
// 10. HIGHER ORDER FUNCTION
// ==============================
function operate(a, b, fn) {
    return fn(a, b);
}

const add = (x, y) => x + y;

console.log(operate(2, 3, add));

/*
OUTPUT:
5

REASON:
- Function taking another function as argument
*/


// ==============================
// 11. THIS BEHAVIOR
// ==============================
const user = {
    name: "Sonam",
    normalFn: function() {
        console.log("Normal:", this.name);
    },
    arrowFn: () => {
        console.log("Arrow:", this.name);
    }
};

user.normalFn();
user.arrowFn();

/*
OUTPUT:
Normal: Sonam
Arrow: undefined

REASON:
- Normal → this = object
- Arrow → this = global
*/