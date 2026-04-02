const crewMembers = 40;
const fuelTons = 142.42;
const light_speed = 299_888_999; // numeric separators for readability

const infiniteRange = Infinity;
const negativeInfiniteRange = -Infinity;
const notANumber = NaN;

console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.EPSILON:", Number.EPSILON);

const fuelReading = "142.75 tons";
const sectorCode = "0xA3";
const countDown = "007";

console.log("parseInt fuelReading:", parseInt(fuelReading, 10)); // 142
console.log("parseFloat fuelReading:", parseFloat(fuelReading)); // 142.75
console.log("Number(sectorCode):", Number(sectorCode)); // hex -> 163
console.log("countDown padded -> number:", Number(countDown)); // 7

const thrustForce = 4.567;

console.log("round:", Math.round(thrustForce));
console.log("floor:", Math.floor(thrustForce));
console.log("ceil:", Math.ceil(thrustForce));
console.log("truncate:", Math.trunc(thrustForce));

const temps = [-120, 43, 56, -23];
console.log("min temp:", Math.min(...temps));
console.log("max temp:", Math.max(...temps));

console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("strict compare to 0.3:", 0.1 + 0.2 === 0.3);

function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log("almostEqual(0.1+0.2, 0.3):", almostEqual(0.1 + 0.2, 0.3));

console.log("isFinite(infiniteRange):", Number.isFinite(infiniteRange));
console.log("isNaN(notANumber):", Number.isNaN(notANumber));
