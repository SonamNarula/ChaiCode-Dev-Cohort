const codeName = "Shadow Fox"
const backupName = String("Night own")
const templateName = `Agent ${codeName}`

let intercepted = "HELLO";
intercepted[0] = "J" //silent fail
console.log(intercepted)

const secretCode = "OMEGA-7"

console.log(secretCode.length)
console.log(secretCode.charAt(99))
console.log(secretCode.charAt[99])
console.log(secretCode.at(-1))

const rawTransmission = "The eagle has landed"
console.log(rawTransmission.toLowerCase())

const message = "The drop point is at dock 7. Repeat: dock 7"
console.log(message.indexOf("dock"))

console.log(message.slice(0,12))

const orders = "move-north|hold-position|extract-vip"
let orderList = orders.split("|")
console.log("Split : ", orderList)

const myDataValue = ("SOS".split(""))
console.log(typeof myDataValue)
console.log(Array.isArray(myDataValue))


let num = "5";
let padded = num.padStart(3, "0");
console.log(padded);

let str = "Hi";
let padd = str.padEnd(5, "*");
console.log(padd);
