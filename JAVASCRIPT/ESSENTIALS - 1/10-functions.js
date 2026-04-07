// Quick tour of JavaScript functions—explained like we’re chatting in a potion kitchen.

// ==============================
// 1. FUNCTION DECLARATION
// ==============================
// Think of this as the official recipe card everyone can see.
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
// Same recipe, but stored in a labeled jar (variable) first.
const mixElixir = function (ingredient) {
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
// Slimmer note stuck to the fridge—short syntax, different `this`.
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
// No braces, no fuss—auto-returns the string.
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
// If you don’t tell me the dose, I’ll assume one spoon.
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
// Scoop up any extra ingredients into one basket (an array).
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
// The old cardboard box of numbered slots—array-like, not an array.
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
// A mystery chef walks in, does the job, and leaves—no name needed.
setTimeout(function () {
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
// Hand a helper function to finish the job after prep.
function processIngredient(ingredient, callback) {
    console.log("Processing:", ingredient);
    callback();
}

processIngredient("Neem", function () {
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
// A function that eats another function for breakfast.
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
// Regular functions bind `this` to the caller; arrows borrow it from the outer world.
const user = {
    name: "Sonam",
    normalFn: function () {
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
// ==============================
// 12. IIFE (Immediately Invoked Function Expression)
// ==============================
// A self-starting potion shop: runs once, keeps its secret inside.
const potionShop = (function () {
    const secret = "dragon scale";
    console.log("IIFE runs once. Secret stored:", secret);
    return { featured: secret };
})();

/*
OUTPUT:
IIFE runs once. Secret stored: dragon scale

REASON:
- Wrapped in () to force expression
- Second () executes immediately
- Creates a private scope
*/

// ==============================
// 13. FUNCTION THAT RETURNS A FUNCTION
// ==============================
// A recipe factory: give it a multiplier, it hands back a custom mixer.
function makeMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    };
}

const double = makeMultiplier(2);
console.log(double(5));

/*
OUTPUT:
10

REASON:
- Higher-order: returns a new function
- The inner function remembers `multiplier` via closure
*/

// ==============================
// 14. MODULE PATTERN WITH IIFE
// ==============================
// A tiny potion shop module: state stays private, public methods return data.
const candyShop = (() => {
    let inventory = 0;

    return {
        brew() {
            inventory++;
            return `Brew potion #${inventory}`;
        },
        getStock() {
            return inventory;
        },
    };
})();

console.log(candyShop.brew());
console.log(candyShop.getStock());

/*
POSSIBLE OUTPUT:
Brew potion #1
1

REASON:
- IIFE creates a closed-over `inventory`
- Returned object exposes only the methods, not the raw state
*/
