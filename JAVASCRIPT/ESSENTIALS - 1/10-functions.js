console.log(brewPotion("Healing herbs"))
function brewPotion(ingredient, dose) {
    return `Brewing potion with ${ingredient} (x${dose})...Potion ready`
}
// function expression
const mixElixir = function(ingredient){
    return `Mixing elexir with ${ingredient}`
}

// arrow functions
// no own 'this', no arguments object
const distilEssence = (ingredient) =>{
    return `Mixing elexir with ${ingredient}`
    
}

function oldBrewingLogs(){
    console.log("type: ", typeof arguments);
    console.log(arguments)
    console.log("Is array: ", Array.isArray(arguments))
}
oldBrewingLogs("Sage", "Rosemary")